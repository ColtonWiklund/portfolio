require ("timers")

-- Clear the Arena before moving the heroes to it and starting the round
function start_round(roundNumber)	
	print ("---------------------------------")
	print (GetSystemTime(), "Round", roundNumber, "Begins!")
	print ("---------------------------------")
	_G.roundInProgress = true		-- Prevents other rounds from starting
	_G.radiantTeamReady = false
	_G.direTeamReady = false
	
	-- Remove any creatures or spells currently in the Arena
	_G.arenaTrigger:Enable()
	print (GetSystemTime(), "Arena Cleaning has Started (Round Start)")
	Timers:CreateTimer({
		endTime = 0.2,	
		callback = function()
			_G.arenaTrigger:Disable()
			print (GetSystemTime(), "Arena Cleaning has Finished (Round Start)")
	end})
	
	-- Reset the Game Tracker's modifiers
	_G.visionTracker:RemoveModifierByName("modifier_vision")	-- Remove the permanent vision modifier and apply one that lasts the duration of the reveal time
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_vision", {duration = _G.revealTime + 5})		-- Time before units are revealed, increased by 5 seconds initially
	_G.visionTracker:RemoveModifierByName("modifier_permanent_vision")
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_permanent_vision", {duration = _G.permanentRevealTime})		-- Prevents units from being revealed during the break
	_G.visionTracker:RemoveModifierByName("modifier_round_draw")
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_round_draw", {duration = _G.roundDrawTime})			-- Prevents the round from being declared a draw while in break
	
	_G.clockTime = 0
	clockRound()	-- Set the clock time to start increment from 0
	
	-- Set the time to the beginning of day
	GameRules:SetTimeOfDay(0.26)	-- Sets time to 0:04 (Day)
	Timers:CreateTimer({			-- Wait 3 minutes then set the time to 0:04 again, in case the round goes long
		endTime = 180,	
		callback = function()
			GameRules:SetTimeOfDay(0.26)	-- Sets time to 0:04 (Day)
	end})
	
	-- Update the Scoreboard UI
	local eventName = "UpdateRound"
	local infoString = "ROUND " .. _G.roundNumber
	local roundTable = {info = infoString}
	CustomGameEventManager:Send_ServerToAllClients( eventName, roundTable )	-- Update the round display through Javascript
	_G.roundNumber = _G.roundNumber + 1		-- Increment the round number (UI displays the previous round number)
	
	-- Determine where Heroes should be moved when entering the Arena
	local totalPlayers = PlayerResource:GetPlayerCountForTeam(2) + PlayerResource:GetPlayerCountForTeam(3)
	local radiantIndex = 0	-- Refers to the positions where Heroes are moved to (0 = mid, 1 = top, 2 = bottom)
	local direIndex = 0
	if (PlayerResource:GetPlayerCountForTeam(2) == 2) then
		radiantIndex = 1	-- If there are two players on the team, move the first player to position 1 (top) instead of position 0 (mid)
	end
	if (PlayerResource:GetPlayerCountForTeam(3) == 2) then
		direIndex = 1
	end
	
	-- Move heroes to arena
	for i=0, totalPlayers-1, 1 do
		local hero = PlayerResource:GetPlayer(i):GetAssignedHero()	-- If a Hero managed to die between rounds, respawn it
		if (hero:IsAlive() == false) then
			hero:RespawnUnit()
		end
		hero = SoftRefresh(hero)	-- Remove any modifiers from the Hero
		ResetItems(hero)			-- and refresh their Item cooldowns
		
		Timers:CreateTimer({	-- Creates a small delay between Heroes being refreshed and them teleporting. Used to reset Brew Master if he is split and not move him until he is merged.
			endTime = 0.1,
			callback = function()
			if (hero:GetTeamNumber() == 2) then
				hero:SetOrigin(_G.radiantArenaLocation[radiantIndex]) -- Uses mid for 1 player, top and bot, for 2 players, and all three for 3 players.
				radiantIndex = radiantIndex + 1
			elseif (hero:GetTeamNumber() == 3) then
				hero:SetOrigin(_G.direArenaLocation[direIndex])
				direIndex = direIndex + 1
			end
			hero:GetPlayerOwner():SetKillCamUnit(nil)	-- Remove the kill cam if they have one
			move_camera(i, hero)
			
			CleanSpawns()	-- Remove any units from the spawn areas
			
			Timers:CreateTimer({	
				endTime = 0.1,
				callback = function()
				local particle = ParticleManager:CreateParticle("particles/units/heroes/hero_chen/chen_teleport_flash.vpcf", 1, hero)
				EmitSoundOn("Hero_Chen.TeleportIn", hero)
			end})
		end})
	end
end

-- Respawns dead heroes, refreshes cooldowns, and moves all heroes to their respective base
function round_break()	
	_G.transitionTime = true
	_G.radiantTeamReady = false
	_G.direTeamReady = false
	
	local totalPlayers = PlayerResource:GetPlayerCountForTeam(2) + PlayerResource:GetPlayerCountForTeam(3)
	for i=0, totalPlayers-1, 1 do
		local hero = PlayerResource:GetPlayer(i):GetAssignedHero()
		if (hero:IsAlive() == true) then
			hero:AddNewModifier(hero, nil, "modifier_refresh", nil)
		end
	end
	
	-- Disable the Game Tracker during breaks
	_G.visionTracker:RemoveModifierByName("modifier_vision")
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_vision", nil)	-- Prevents units from being revealed during the break
	_G.visionTracker:RemoveModifierByName("modifier_permanent_vision")
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_permanent_vision", nil)
	_G.visionTracker:RemoveModifierByName("modifier_round_draw")
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_round_draw", nil)			-- Prevents the round from being declared a draw while in break
	
	local roundNumber = _G.roundNumber	-- Create a local copy of the round number to reference later. If the global round number changes it will prevent a new round from starting
	
	-- Ends the round and moves Heroes back to their respective bases
	Timers:CreateTimer({
    endTime = _G.delay_before_rest, -- delay before the round finishes and the heroes are moved to the rest area (5s)
    callback = function()
		print (GetSystemTime(), ">>> Round Break Initiated (30s) <<<")
		_G.transitionTime = false
		_G.roundInProgress = false
		_G.clockTime = _G.rest_period
		
		_G.radiantVisionEntity:RemoveModifierByName("modifier_true_sight_aura")	-- Remove the True Sight aura
		_G.radiantVisionEntity:SetOrigin(Vector(-4608,-4608,324))				-- Move the entity back to its respective base
		_G.direVisionEntity:RemoveModifierByName("modifier_true_sight_aura")
		_G.direVisionEntity:SetOrigin(Vector(4608,4608,324))
		
		clockBreak()	-- Set the clock the break time and start decrementing
		CleanArena()	-- Remove summons, wards, etc. from the arena
		
		local eventName = "UpdateRound"
		local roundTable = {}
		if (_G.gameOver == false) then 
			roundTable = {info = "BREAK"}
		else
			eventName = "UpdateRound"
			roundTable = {info = "VICTORY"}
			
			eventName2 = "UpdateTimer"
			if (_G.radiantScore == _G.scoreToWin) then
				clockTable = {clockValue = "GREEN"}
			else
				clockTable = {clockValue = "BLUE"}
			end
			CustomGameEventManager:Send_ServerToAllClients( eventName2, clockTable )	-- Update the clock display through Javascript
		end
		CustomGameEventManager:Send_ServerToAllClients( eventName, roundTable )	-- Update the round display through Javascript
		
		local radiantIndex = 0
		local direIndex = 0
		
		if (PlayerResource:GetPlayerCountForTeam(2) == 2) then
			radiantIndex = 1
		end
		if (PlayerResource:GetPlayerCountForTeam(3) == 2) then
			direIndex = 1
		end
		
		for i=0, totalPlayers-1, 1 do
			local hero = PlayerResource:GetPlayer(i):GetAssignedHero()
			if (hero:IsAlive() == false) then
				hero:RespawnUnit()
			else
				hero:RemoveModifierByName("modifier_refresh")
			end
			SoftRefresh(hero)
			Timers:CreateTimer({
				endTime = 0.1,
				callback = function()
				
				if (hero:GetTeamNumber() == 2) then		-- Move Hero after respawning
					hero:SetOrigin(_G.radiantSpawnLocation[radiantIndex]) -- Uses mid for 1 player, top and bot, for 2 players, and all three for 3 players.
					radiantIndex = radiantIndex + 1
				elseif (hero:GetTeamNumber() == 3) then
					hero:SetOrigin(_G.direSpawnLocation[direIndex])
					direIndex = direIndex + 1
				end
				
				hero:Stop()
				hero:SetGold(99999, false)
				move_camera(i, hero)
				ResetItems(hero)	-- Resets any Bloodstones, Diffusals Blade, etc. the hero might have
				
				Timers:CreateTimer({	
					endTime = 0.1,
					callback = function()
					local particle = ParticleManager:CreateParticle("particles/units/heroes/hero_chen/chen_teleport_flash.vpcf", 1, hero)
					EmitSoundOn("Hero_Chen.TeleportIn", hero)
				end})
			end})
		end
		Timers:CreateTimer({	
		endTime = _G.rest_period, -- Rest period between rounds (30s)
		callback = function()
			if (_G.roundInProgress == false and roundNumber == _G.roundNumber) then	-- Prevents a new round from starting if the previous round was started early and finished before the timer goes off.
				start_round(_G.roundNumber) -- Start the next round
			end
		end})
	end})
end

-- Gives a point to the winning team and checks if any team has enough points to win
function score_point(teamNum)	
	Timers:CreateTimer({	
	endTime = 0.5, 
	callback = function()
		EmitGlobalSound("Hero_LegionCommander.Duel.Victory")	-- Victory sound
		
		if (teamNum == 2) then	-- If radiant won the round, increase Radiant's Score
			_G.radiantScore = _G.radiantScore + 1
			GameRules:SendCustomMessage("Green Team Point! (" .. _G.radiantScore.. " of 3)", 2, 3)
			print (GetSystemTime(), "Score Point - Green Team")
		elseif (teamNum == 3) then	-- If dire won the round, increase Dire's Score
			_G.direScore = _G.direScore + 1
			GameRules:SendCustomMessage("Blue Team Point! (" .. _G.direScore .. " of 3)", 2, 3)
			print (GetSystemTime(), "Score Point - Blue Team")
		end
		
		local eventName = "UpdateScore"
		local scoreTable = {radiant = _G.radiantScore, dire = _G.direScore}
		CustomGameEventManager:Send_ServerToAllClients( eventName, scoreTable )	-- Update the score display in Javascript

		if (_G.radiantScore == _G.scoreToWin) then		-- Radiant has enough points to win
			GameRules:SendCustomMessage("Green Team Victory!", 2, 3)
			_G.gameOver = true
			Timers:CreateTimer({	
			endTime = _G.delay_before_rest, -- Same delay as before rest period
			callback = function()
				GameRules:SetGameWinner(2)
			end})
			
		elseif (_G.direScore == _G.scoreToWin) then		-- Dire has enough points to win
			GameRules:SendCustomMessage("Blue Team Victory!", 2, 3)
			_G.gameOver = true
			Timers:CreateTimer({	
				endTime = _G.delay_before_rest,
				callback = function()
				GameRules:SetGameWinner(3)
			end})
		end
	end})
end

