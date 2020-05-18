-- Locate the entities required for the game mode so they can be referenced by other scripts without needing to use FindByName() everytime
function locate_entities()
	_G.visionTracker = Entities:FindByName(nil, "vision_tracker")	-- Dummy unit that holds "modifier_vision", keeps track of whether to reveal units or not
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_vision", nil)				-- Prevents units from being revealed during pre-game
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_permanent_vision", nil)	-- Prevents units from being revealed during pre-game
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_round_draw", nil)			-- Prevents the round from being declared a draw
	_G.visionTracker:AddNewModifier(_G.visionTracker, nil, "modifier_tracker_entity", nil)		-- Make the unit immune to damage
	
	_G.radiantVisionEntity = Entities:FindByName(nil, "radiant_vision_revealer")	-- Vision Entity for the radiant team
	_G.radiantVisionEntity:AddNewModifier(_G.radiantVisionEntity, nil, "modifier_remove", nil)	-- Makes the entity immune to targeting and damage
	_G.radiantVisionLocation = _G.radiantVisionEntity:GetAbsOrigin()	-- Location of the Vision Entity
	
	_G.direVisionEntity = Entities:FindByName(nil, "dire_vision_revealer")
	_G.direVisionEntity:AddNewModifier(_G.direVisionEntity, nil, "modifier_remove", nil)
	_G.direVisionLocation = _G.direVisionEntity:GetAbsOrigin()
	
	AddFOWViewer(2, Vector(0,0,256), 3600, 2, false)	-- Preload the revealed vision for 1 second to prevent lag while playing
	AddFOWViewer(3, Vector(0,0,256), 3600, 2, false)
	
	_G.radiantCleaner = Entities:FindByName(nil, "radiant_cleaner_trigger")
	_G.direCleaner = Entities:FindByName(nil, "dire_cleaner_trigger")
	_G.arenaTrigger = Entities:FindByName(nil, "arena_cleaner_trigger")
			
	_G.radiantSpawnLocation = {}
	_G.radiantSpawnLocation[0] = Entities:FindByName(nil, "radiant_spawn_mid"):GetAbsOrigin()
	_G.radiantSpawnLocation[1] = Entities:FindByName(nil, "radiant_spawn_top"):GetAbsOrigin()
	_G.radiantSpawnLocation[2] = Entities:FindByName(nil, "radiant_spawn_bot"):GetAbsOrigin()
	
	_G.direSpawnLocation = {}
	_G.direSpawnLocation[0] = Entities:FindByName(nil, "dire_spawn_mid"):GetOrigin()
	_G.direSpawnLocation[1] = Entities:FindByName(nil, "dire_spawn_top"):GetOrigin()
	_G.direSpawnLocation[2] = Entities:FindByName(nil, "dire_spawn_bot"):GetOrigin()
	
	_G.radiantArenaLocation = {}
	_G.radiantArenaLocation[0] = Entities:FindByName(nil, "radiant_arena_mid"):GetOrigin()
	_G.radiantArenaLocation[1] = Entities:FindByName(nil, "radiant_arena_top"):GetOrigin()
	_G.radiantArenaLocation[2] = Entities:FindByName(nil, "radiant_arena_bot"):GetOrigin()
	
	_G.direArenaLocation = {}
	_G.direArenaLocation[0] = Entities:FindByName(nil, "dire_arena_mid"):GetOrigin()
	_G.direArenaLocation[1] = Entities:FindByName(nil, "dire_arena_top"):GetOrigin()
	_G.direArenaLocation[2] = Entities:FindByName(nil, "dire_arena_bot"):GetOrigin()
	
	_G.radiantIndexGlobal = 0
	_G.direIndexGlobal = 0
	
	if (PlayerResource:GetPlayerCountForTeam(2) == 2) then
		_G.radiantIndexGlobal = 1
	elseif (PlayerResource:GetPlayerCountForTeam(3) == 2) then
		_G.direIndexGlobal = 1
	end
end

-- Move the player camera to their Hero
function move_camera(id, hero)
	PlayerResource:SetCameraTarget(id, hero)
	Timers:CreateTimer({
		endTime = 0.5, -- 0.5 second camera transition time
		callback = function()
			PlayerResource:SetCameraTarget(id, nil)
	end})
end

-- Reset the clock and prevent it from incrementing during a break
function clockBreak()	
	if (_G.roundInProgress == false and _G.gameOver == false) then
		local eventName = "UpdateTimer"
		local clockTable = {clockValue = _G.clockTime}
		CustomGameEventManager:Send_ServerToAllClients( eventName, clockTable )	-- Update the clock display through Javascript
		_G.clockTime = _G.clockTime - 1
		
		Timers:CreateTimer({
			endTime = 1,
			callback = function()
				clockBreak()
		end})
	end
end

-- Increments the clock
function clockRound()	
	if (_G.roundInProgress == true and _G.gameOver == false) then
		local eventName = "UpdateTimer"
		local clockTable = {clockValue = _G.clockTime}
		CustomGameEventManager:Send_ServerToAllClients( eventName, clockTable )	-- Update the clock display through Javascript
		_G.clockTime = _G.clockTime + 1
		
		Timers:CreateTimer({
			endTime = 1,
			callback = function()
				clockRound()
		end})
	end
end

-- Reset the Arena between rounds by removing any entities
function CleanArena()
	print (GetSystemTime(), "Arena Cleaning has Started")
	_G.roundCanStart = false
	Timers:CreateTimer({	-- Arena is cleaned 0.25 seconds after Heroes are removed
		endTime = 0.25,
		callback = function()
		_G.arenaTrigger:Enable()
		
		Timers:CreateTimer({	-- Trigger stays active for 0.25 seconds
			endTime = 0.25,
			callback = function()
			_G.arenaTrigger:Disable()
				
			Timers:CreateTimer({	-- After the trigger is disabled for 0.5 seconds the round can start early
				endTime = 0.5,
				callback = function()
				_G.roundCanStart = true
				print (GetSystemTime(), "Arena Cleaning has Finished")
				if (_G.radiantTeamReady == true and _G.direTeamReady == true and _G.roundInProgress == false and _G.roundCanStart == true) then
					print (GetSystemTime(), "Round Start Early - Waited for Arena Cleaner")
					start_round(_G.roundNumber)
					_G.radiantTeamReady = false
					_G.direTeamReady = false
				end
			end})
		end})
		
		if IsServer() then	-- Regrows any trees on the map that were destroyed
			GridNav:RegrowAllTrees()
		else
			GridNav:RegrowAllTrees()
		end
	end})
end

-- Remove any entities from each Starting Area
function CleanSpawns()
	Timers:CreateTimer({	-- Wait 0.25 seconds after the round starts to clean the spawn areas
		endTime = 0.25,
		callback = function()
			print (GetSystemTime(), "Clearing Spawns")
			_G.radiantCleaner:Enable()
			_G.direCleaner:Enable()
			
			Timers:CreateTimer({	-- Trigger stays active for 0.25 seconds
				endTime = 0.25,
				callback = function()
				_G.radiantCleaner:Disable()
				_G.direCleaner:Disable()
			end})
	end})
end

-- Moves Heroes summons with them in and out of the arena
function MoveSummons(unit)	
	local shiftVector
	if (unit:GetTeamNumber() == 2) then -- Unit is Radiant
		shiftVector = Vector(188, 192, 0)
	else	-- Dire
		shiftVector = Vector(-188, -192, 0)
	end

	FindClearSpaceForUnit(unit, unit:GetOwnerEntity():GetOrigin() + shiftVector, true) -- Move the unit to in front of its owner
	local particle = ParticleManager:CreateParticle("particles/units/heroes/hero_chen/chen_teleport_flash.vpcf", 1, unit)
	unit:Stop()		-- Prevents the units from moving towards their last destination
	SoftRefresh(unit)
end

-- Reset the charges various items
function ResetItems(hero)
	for i=0, 8, 1 do
		if (hero:GetItemInSlot(i) ~= nil) then
			if (hero:GetItemInSlot(i):GetName() == "item_bloodstone") then				-- Bloodstone
				hero:GetItemInSlot(i):SetCurrentCharges(18)	-- Set the bloodstone back to 18 charges
			elseif (hero:GetItemInSlot(i):GetName() == "item_diffusal_blade_1") then	-- Diffusal Blade Level 1
				hero:GetItemInSlot(i):SetCurrentCharges(8)
			elseif (hero:GetItemInSlot(i):GetName() == "item_diffusal_blade_2") then	-- Diffusal Blade Level 2
				hero:GetItemInSlot(i):SetCurrentCharges(8)
			elseif (hero:GetItemInSlot(i):GetName() == "item_ancient_janggo") then		-- Drums of Endurance
				hero:GetItemInSlot(i):SetCurrentCharges(6)
			end
		end
	end
end