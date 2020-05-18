require ("game_controller")
require ("game_settings")
require ("triggers")
require ("utilities")
require ("hero_refresh")
require ("timers")

-- Game Tracker: A dummy entity that controls the rounds using modifiers
LinkLuaModifier("modifier_vision", LUA_MODIFIER_MOTION_NONE)			-- Keeps track of when to reveal the map based on combat
LinkLuaModifier("modifier_permanent_vision", LUA_MODIFIER_MOTION_NONE)	-- Permanently reveals the map after enough time has passed
LinkLuaModifier("modifier_round_draw", LUA_MODIFIER_MOTION_NONE)		-- Ends the round in a draw after enough time has passed
LinkLuaModifier("modifier_tracker_entity", LUA_MODIFIER_MOTION_NONE)	-- Makes the Game Tracker entity immune to damage but still selectable
LinkLuaModifier("modifier_true_sight_aura", LUA_MODIFIER_MOTION_NONE)	-- True sight aura gained when the map is revealed

-- Utility modifiers
LinkLuaModifier("modifier_refresh", LUA_MODIFIER_MOTION_NONE)			-- Makes the target invulnerable, used after rounds are finished and before heroes are moved back to spawn
LinkLuaModifier("modifier_remove", LUA_MODIFIER_MOTION_NONE)			-- Makes the target invulnerable and removes it's HP bar (Used for dummy units)
LinkLuaModifier("modifier_movespeed", LUA_MODIFIER_MOTION_NONE)			-- Provides a passive movespeed increase to all heroes

-- Custom Hero modifiers to enhance certain Hero's abilities that would typically only be effective in an actual Dota game
LinkLuaModifier("modifier_hero_clinkz_death_pact_custom", LUA_MODIFIER_MOTION_NONE)
LinkLuaModifier("modifier_hero_silencer_int_steal_custom", LUA_MODIFIER_MOTION_NONE)

if HeroArenaGameMode == nil then
	HeroArenaGameMode = class({})
end

-- Precache assets that are used by the game mode
function Precache( context )
	PrecacheResource( "particle", "particles/units/heroes/hero_chen/chen_teleport_flash.vpcf", context )				-- Created when Heroes teleport into and out of the arena
	PrecacheResource( "soundfile", "soundevents/game_sounds_heroes/game_sounds_chen.vsndevts", context )				-- Plays when Heroes teleport into and out of the arena
	PrecacheResource( "soundfile", "soundevents/game_sounds_heroes/game_sounds_legion_commander.vsndevts", context )	-- Plays when the round finishes
end

-- Create the game mode when the addon is loaded
function Activate()
	GameRules.AddonTemplate = HeroArenaGameMode()
	GameRules.AddonTemplate:InitGameMode()
	
	InitializeSettings()	-- Sets up the game depending on which game mode is being played (1v1, 2v2, or 3v3)

	-- Various game parameters
	GameMode = GameRules:GetGameModeEntity()
	GameMode:SetAnnouncerDisabled( true )
	GameMode:SetDaynightCycleDisabled( true )
	GameMode:SetBuybackEnabled(false)
	
	GameRules:SetFirstBloodActive( false )
	GameRules:SetUseUniversalShopMode(true)
	GameRules:SetTreeRegrowTime( 60 )
	GameRules:SetPostGameTime( 7 )
	GameRules:SetGoldPerTick( 0 )
	GameRules:SetGoldTickTime( 1 )
	GameRules:SetPreGameTime( _G.preGameTime )	-- Time before game starts, used for buying items and setting masteries
	GameRules:SetHeroSelectionTime( 0 ) 		-- Time to select a hero (Still provides 30 seconds of bonus time, and 30 seconds of strategy time)
	
	_G.scoreToWin = 2				-- Match wins needed to defeat the other team (best of 3, requires 2 wins)
	_G.radiantScore = 0				-- Score of each team
	_G.direScore = 0
	_G.roundNumber = 1 				-- Start at round 1
	_G.delay_before_rest = 3 		-- Delay before being moved to the rest area
	
	_G.initialClear = false			-- Allows the Arena Cleaner to destroy heroes initialled, but not after the first pass
	_G.radiantTeamReady = false
	_G.direTeamReady = false
	_G.roundInProgress = false
	_G.gameOver = false
	_G.transitionTime = false 		-- Keeps track of whether the game is in between the round ending and a break starting (length determined by _G.delay_before_rest)
	_G.clockTime = preGameTime		-- Value the clock starts at to begin counting down
	_G.unitsRevealed = false
	_G.permanentReveal = false
	_G.roundCanStart = false		-- If both teams are ready immediately after the previous round ended, make them wait 1 second for the arena to be cleared
									-- Is set to true after the ArenaCleaner function is called at the beginning of the game	
end

-- Game Events to listen to
function HeroArenaGameMode:InitGameMode()
	GameRules:GetGameModeEntity():SetThink( "OnThink", self, "GlobalThink", 1 )
	ListenToGameEvent('game_rules_state_change', Dynamic_Wrap( HeroArenaGameMode, "OnGameRulesStateChange" ), self )
	ListenToGameEvent('entity_killed', Dynamic_Wrap( HeroArenaGameMode, "OnHeroDeath" ), self )
	ListenToGameEvent('entity_hurt', Dynamic_Wrap( HeroArenaGameMode, "OnHeroDamage" ), self )
	ListenToGameEvent('npc_spawned', Dynamic_Wrap( HeroArenaGameMode, "OnHeroInGame" ), self )
	ListenToGameEvent("dota_item_combined", Dynamic_Wrap(HeroArenaGameMode, 'OnItemCombined'), self)
	ListenToGameEvent('dota_item_purchased', Dynamic_Wrap(HeroArenaGameMode, 'OnItemPurchased'), self)
end

-- Game State has changed (Strategy -> Showcase -> Pre-game -> etc)
function HeroArenaGameMode:OnGameRulesStateChange()
	local nNewState = GameRules:State_Get()
	if (nNewState == DOTA_GAMERULES_STATE_STRATEGY_TIME) then
		locate_entities()
		
	elseif (nNewState == DOTA_GAMERULES_STATE_TEAM_SHOWCASE) then
		local totalPlayers = PlayerResource:GetPlayerCountForTeam(2) + PlayerResource:GetPlayerCountForTeam(3)
		for i=0, totalPlayers-1, 1 do
			if (PlayerResource:GetPlayer(i):GetAssignedHero() == nil) then	-- Player has not chosen a Hero before the game started
				print(GetSystemTime(), PlayerResource:GetPlayerName(i), "did not select a hero.")
			end
		end
	elseif GameRules:State_Get() == DOTA_GAMERULES_STATE_PRE_GAME then
		GameMode = GameRules:GetGameModeEntity()
		GameMode:SetHUDVisible(0, false)
		GameMode:SetHUDVisible(1, false)
		clockBreak()
		Timers:CreateTimer({
			endTime = 2.0,
			callback = function()
				CleanArena()
		end})
		GameRules:SendCustomMessage(_G.helpText1, 2, 3)
		GameRules:SendCustomMessage(_G.helpText2, 2, 3)
	elseif (nNewState == DOTA_GAMERULES_STATE_GAME_IN_PROGRESS) then
		if (_G.roundInProgress == false and _G.roundNumber == 1) then	-- Only starts the round if a round hasn't been started early
			start_round(_G.roundNumber)
		end
	end
end

-- Update the scores and round progress when a Hero dies
function HeroArenaGameMode:OnHeroDeath(keys)
	if IsServer() then
		local heroDeath = EntIndexToHScript(keys.entindex_killed)
		if (heroDeath:GetName() ~= "npc_dota_base_additive" and _G.roundInProgress == true and _G.transitionTime == false) then	-- npc_dota_base_additive is created for some spells then killed
			if ((heroDeath:IsRealHero() == true) and (heroDeath:IsReincarnating() == false)) then
				print (GetSystemTime(), "Hero Died (Round in Progress)", heroDeath:GetName())
				local radiantPlayers = PlayerResource:GetPlayerCountForTeam(2) 
				local direPlayers = PlayerResource:GetPlayerCountForTeam(3)
				local radiantDeaths = 0
				local direDeaths = 0
				
				local totalPlayers = radiantPlayers + direPlayers
				for i=0, totalPlayers-1, 1 do
					hero = PlayerResource:GetPlayer(i):GetAssignedHero()
					if (hero:GetTeamNumber() == 2 and hero:IsAlive() == false) then
						radiantDeaths = radiantDeaths + 1
					elseif (hero:GetTeamNumber() == 3 and hero:IsAlive() == false) then
						direDeaths = direDeaths + 1
					end
				end
				
				-- All team members of one team have died
				if (radiantDeaths == radiantPlayers) then
					score_point(3)	-- Increase Dires score by 1
					round_break()
				elseif (direDeaths == direPlayers) then
					score_point(2)	-- Increase Radiant score by 1
					round_break()
				end
			end
		end
	end
end

-- Evaluate the state of the game every second to keep track of round progress and vision
function HeroArenaGameMode:OnThink()
	if GameRules:State_Get() == DOTA_GAMERULES_STATE_GAME_IN_PROGRESS then
		if (_G.roundInProgress == true and _G.transitionTime == false) then
			if (_G.visionTracker:HasModifier("modifier_permanent_vision") == false) then	-- Round has gone on long enough to grant permanent vision
				AddFOWViewer(2, Vector(0,0,256), 3600, 3, false)	-- Created every think cycle (1 sec)
				AddFOWViewer(3, Vector(0,0,256), 3600, 3, false)
				_G.permanentReveal = true
				if (_G.unitsRevealed == false) then
					_G.unitsRevealed = true
					print (GetSystemTime(), "Permanent Vision and True Sight Gained")
					_G.radiantVisionEntity:AddNewModifier(_G.radiantVisionEntity, nil, "modifier_true_sight_aura", nil)		-- Creates a truesight aura for both teams that lasts until removed
					_G.radiantVisionEntity:SetOrigin(Vector(0,0,256))
					_G.direVisionEntity:AddNewModifier(_G.direVisionEntity, nil, "modifier_true_sight_aura", nil)
					_G.direVisionEntity:SetOrigin(Vector(0,0,212))
				end
			elseif (_G.visionTracker:HasModifier("modifier_vision") == false) then
				AddFOWViewer(2, Vector(0,0,256), 3600, 6, false)	-- Vision lingers for 5 seconds after combat is detected
				AddFOWViewer(3, Vector(0,0,256), 3600, 6, false)
				if (_G.unitsRevealed == false) then
					print (GetSystemTime(), "Temporary Vision and True Sight Gained")
					_G.unitsRevealed = true
					_G.radiantVisionEntity:AddNewModifier(_G.radiantVisionEntity, nil, "modifier_true_sight_aura", nil)		-- Creates a truesight aura for both teams that lasts until removed
					_G.radiantVisionEntity:SetOrigin(Vector(0,0,256))
					_G.direVisionEntity:AddNewModifier(_G.direVisionEntity, nil, "modifier_true_sight_aura", nil)
					_G.direVisionEntity:SetOrigin(Vector(0,0,212))
				end
			end
			
			if (_G.visionTracker:HasModifier("modifier_round_draw") == false) then		-- Round has resulted in a draw
				round_break()
				GameRules:SendCustomMessage("Round Draw!", 2, 3)
				EmitGlobalSound("Hero_LegionCommander.Duel.Victory")
			end
		end
	elseif GameRules:State_Get() >= DOTA_GAMERULES_STATE_POST_GAME then
		return nil
	end
	return 1
end

-- Called when a hero takes damage, used to check whether to reveal the map
function HeroArenaGameMode:OnHeroDamage(keys)	
	if (EntIndexToHScript(keys.entindex_killed):IsHero() == true and _G.roundInProgress == true and _G.transitionTime == false) then	-- If a hero took damage during a match
		_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_vision", {duration = _G.revealTime})	-- Add the vision modifier for the duration of the reveal time
		if (_G.unitsRevealed == true and _G.permanentReveal == false) then
			_G.unitsRevealed = false
			Timers:CreateTimer({
			endTime = 5.5, -- delay before truesight is lost
			callback = function()
				print (GetSystemTime(), "Vision and True Sight Removed")
				_G.radiantVisionEntity:RemoveModifierByName("modifier_true_sight_aura")	-- Remove the True Sight aura
				_G.radiantVisionEntity:SetOrigin(Vector(-4608,-4608,324))				-- Move the entity back to its respective base
				_G.direVisionEntity:RemoveModifierByName("modifier_true_sight_aura")
				_G.direVisionEntity:SetOrigin(Vector(4608,4608,324))
			end})
		end
	end
end

-- When a Hero is loaded, only used to give Lone Druid's bear the bonus modifiers already given to players
function HeroArenaGameMode:OnHeroInGame(keys)
	local unit = EntIndexToHScript(keys.entindex)
	if (unit:GetUnitName() == "npc_dota_lone_druid_bear4") then		-- Called when Lone Druid summons his bear
		unit:AddNewModifier(unit, nil, "modifier_item_moon_shard_consumed", {consumed_bonus = 60})
		unit:AddNewModifier(unit, nil, "modifier_movespeed", nil)
	end
end

-- Used to remove the regular Divine Rapier from the players inventory and replace it with the custom Divine Rapier that doesn't drop on death
function HeroArenaGameMode:OnItemCombined(keys)	
	local plyID = keys.PlayerID
	if not plyID then return end
	local hero = PlayerResource:GetPlayer(plyID):GetAssignedHero()
	local itemName = keys.itemname 
	if (itemName == "item_rapier") then
		for i=0, 14, 1 do		-- Check all items in the players inventory AND stash for a Divine Rapier
			if (hero:GetItemInSlot(i) ~= nil) then
				if (hero:GetItemInSlot(i):GetName() == "item_rapier") then	-- Replace the Divine Rapier with the custom Divine Rapier
					hero:RemoveItem(hero:GetItemInSlot(i))
					hero:AddItemByName("item_custom_rapier")
				end
			end
		end
	end
end

-- Reset the players gold back to 99,999 if they are low on gold
function HeroArenaGameMode:OnItemPurchased( keys )	
	local plyID = keys.PlayerID
	if not plyID then return end
	local hero = PlayerResource:GetPlayer(plyID):GetAssignedHero()
	if (hero:GetGold() < 10000) then	
		hero:SetGold(99999, false)
	end
end