require ("game_controller")
require ("timers")

-- Called when a Hero enters the starting area
-- Level up the hero to 25 and set abilities to max if they are not level 25
-- Also checks if the Hero is in starting area during a match, and moves them back to the arena if they are (some Heroes can teleport out of the Arena)
function initialize_hero(trigger)	
	local hero = trigger.activator
	if (_G.roundInProgress == false) then
		if (hero:IsHero() == true) then
			if (hero:GetLevel() < 25) then		-- Only runs once - when heroes first enter the game
				for i=0, 23, 1 do
					hero:HeroLevelUp(false)	-- Set the Hero to level 25 (the maximum level)
				end
				for i=0, 15, 1 do  --The maximum number of abilities a unit can have is currently 16.
					local current_ability = hero:GetAbilityByIndex(i)	-- Set all the Hero's abilities to their maximum level
					if current_ability ~= nil then
						if current_ability:GetAbilityType() == 0 then
							current_ability:SetLevel(current_ability:GetMaxLevel())
						elseif current_ability:GetAbilityType() == 1 then
							current_ability:SetLevel(current_ability:GetMaxLevel())
						end
					end
				end
				
				hero:SetAbilityPoints(4)	-- The player requires 4 talent points to choose their Masteries
				
				if (hero:GetTeamNumber() == 2) then		-- Move Hero after respawning
					if (_G.radiantSpawnLocation[_G.radiantIndexGlobal] == nil) then
						_G.radiantIndexGlobal = 0
					end
					hero:SetOrigin(_G.radiantSpawnLocation[_G.radiantIndexGlobal]) -- Uses mid for 1 player, top and bot, for 2 players, and all three for 3 players.
					--print ("Initialize - Moving", hero:GetName(), "to", _G.radiantSpawnLocation[_G.radiantIndexGlobal])
					_G.radiantIndexGlobal = _G.radiantIndexGlobal + 1
				elseif (hero:GetTeamNumber() == 3) then
					if (_G.direSpawnLocation[_G.direIndexGlobal] == nil) then
						_G.direIndexGlobal = 0
					end
					hero:SetOrigin(_G.direSpawnLocation[_G.direIndexGlobal])
					--print ("Initialize - Moving", hero:GetName(), "to", _G.direSpawnLocation[_G.direIndexGlobal])
					_G.direIndexGlobal = _G.direIndexGlobal + 1
				end
				move_camera(hero:GetPlayerID(), hero)
				hero:AddNewModifier(hero, nil, "modifier_item_moon_shard_consumed", {consumed_bonus = 60})
				hero:AddNewModifier(hero, nil, "modifier_movespeed", nil)
				HeroExceptions(hero)
				hero:SetRespawnsDisabled(true)	-- Disable Respawning
				hero:SetGold(99999, false)
			end
		end
	else	-- Moves the hero into the arena if they enter the spawn zone during a match (Natures Prophet teleport, Io relocate, etc.)
		if (hero:GetTeamNumber() == 2) then
			Timers:CreateTimer({	
				endTime = 1,	-- Wait one second for the heroes to finish entering the area completely
				callback = function()
					if (trigger.caller:IsTouching(hero)) then	-- If the hero is no longer in the trigger after one second, don't move the hero
						--print ("Moving hero to Green Team side")
						hero:SetOrigin(_G.radiantArenaLocation[0])
						move_camera(hero:GetPlayerID(), hero)
					end
				end})
		elseif (hero:GetTeamNumber() == 3) then
			Timers:CreateTimer({	
				endTime = 1,
				callback = function()
					if (trigger.caller:IsTouching(hero)) then
						--print ("Moving hero to Blue Team side")
						hero:SetOrigin(_G.direArenaLocation[0])
						move_camera(hero:GetPlayerID(), hero)
					end
				end})
		else
			print ("Invalid Team")
		end
	end
end

-- Kills enemy heroes that enter the wrong spawn
function kill_hero(keys)	
	if (keys.activator:IsAlive()) then
		print ("Hero in enemy spawn")
		keys.activator:ForceKill(false)
	end
end

-- When the trigger is enabled it will kill any unit it in its area (Radiant Spawn, Arena, Dire Spawn)
-- Used to clear the Arena between rounds
function ArenaCleanerTrigger(keys)	
	local unit = keys.activator
	local unitName = unit:GetName()
	--print ("Unit Name", unitName, "Is Hero", keys.activator:IsHero(), "Is Illusion", keys.activator:IsIllusion(), "Out of Game", keys.activator:IsOutOfGame())
	if (unitName ~= "Announcer" and unitName ~= "radiant_vision_revealer" and unitName ~= "dire_vision_revealer" and unitName ~= "npc_dota_wisp_spirit" and unitName ~= "npc_dota_thinker") then
		if (unitName == "npc_dota_lone_druid_bear" or unitName == "npc_dota_visage_familiar") then	-- If the unit is a Spirit Bear or Visage Familiar
			MoveSummons(unit)
		elseif (_G.initialClear == false) then	-- When the trigger is called at the start of the game mode it will permanently destroy any units in it
			print (GetSystemTime(), "Destroying Entity", unitName)
			unit:Destroy()
		elseif (unit:IsHero() == false or unit:IsIllusion() == true) then
			if (unitName ~= "npc_dota_broodmother_web") then
				print (GetSystemTime(), "Killing Entity", unitName)
				unit:ForceKill(false)
			end
		end
	end
	if (_G.initialClear == false) then
		print (GetSystemTime(), "Initial Clear")
		_G.initialClear = true
	end
end

-- Checks if the Radiant team has all heroes ready
function trigger_radiant_ready(trigger)
	if (trigger.activator:IsHero() == true) then
		local radiantPlayers = PlayerResource:GetPlayerCountForTeam(2)
		local totalPlayers = radiantPlayers + PlayerResource:GetPlayerCountForTeam(3)
		
		local radiantPlayersReady = 0
		_G.radiantTeamReady = false
		
		for i=0, totalPlayers-1, 1 do
			local hero = PlayerResource:GetPlayer(i):GetAssignedHero()
			if (trigger.caller:IsTouching(hero) == true) then
				radiantPlayersReady = radiantPlayersReady + 1
			end
		end
		if (radiantPlayersReady == radiantPlayers) then
			_G.radiantTeamReady = true
			EmitGlobalSound("ui.npe_objective_complete")
			local eventName = "UpdateRadiantReady"
			local radiantReadyTable = {radiantReady = true}
			CustomGameEventManager:Send_ServerToAllClients( eventName, radiantReadyTable )	-- Update Radiant Ready display (READY)
		end
		if (_G.radiantTeamReady == true and _G.direTeamReady == true and _G.roundInProgress == false and _G.roundCanStart == true) then
			print (GetSystemTime(), "Round Start Early")
			start_round(_G.roundNumber)
			_G.radiantTeamReady = false
			_G.direTeamReady = false
		end
	end
end

-- A Radiant Hero leaves the ready zone
function trigger_radiant_not_ready(trigger)		
	_G.radiantTeamReady = false
	--print ("Check - Radiant NOT Ready")
	local eventName = "UpdateRadiantReady"
	local radiantReadyTable = {radiantReady = false}
	CustomGameEventManager:Send_ServerToAllClients( eventName, radiantReadyTable )	-- Update Radiant Ready display (NOT READY)
end

-- Checks if the Dire team has all heroes ready
function trigger_dire_ready(trigger)	
	if (trigger.activator:IsHero() == true) then
		local direPlayers = PlayerResource:GetPlayerCountForTeam(3)
		local totalPlayers = direPlayers + PlayerResource:GetPlayerCountForTeam(2)
		
		local direPlayersReady = 0
		_G.direTeamReady = false	-- Set to false before recalculating whether the team is ready
		
		for i=0, totalPlayers-1, 1 do
			local hero = PlayerResource:GetPlayer(i):GetAssignedHero()
			if (trigger.caller:IsTouching(hero) == true) then
				direPlayersReady = direPlayersReady + 1
			end
		end
		if (direPlayersReady == direPlayers) then
			_G.direTeamReady = true
			EmitGlobalSound("ui.npe_objective_complete")
			local eventName = "UpdateDireReady"
			local direReadyTable = {direReady = true}
			CustomGameEventManager:Send_ServerToAllClients( eventName, direReadyTable )	-- Update Dire Ready display (READY)
		end
		if (_G.radiantTeamReady == true and _G.direTeamReady == true and _G.roundInProgress == false and _G.roundCanStart == true) then
			print (GetSystemTime(), "Round Start Early")
			start_round(_G.roundNumber)
			_G.radiantTeamReady = false
			_G.direTeamReady = false
		end
	end
end

-- A Dire Hero leaves the ready zone
function trigger_dire_not_ready(trigger)	
	_G.direTeamReady = false
	--print ("Check - Dire NOT Ready")
	local eventName = "UpdateDireReady"
	local direReadyTable = {direReady = false}
	CustomGameEventManager:Send_ServerToAllClients( eventName, direReadyTable )	-- Update Dire Ready display (NOT READY)
end