------------------------------------------------
------------------- Settings -------------------
------------------------------------------------
function InitializeSettings()

	local mapName = GetMapName()
	if (mapName == "arena_1v1" or mapName == "desert_1v1") then
	
		print ("Gamemode is Hero Arena 1v1")
		_G.preGameTime = 60				-- Time for players to set up their hero
		_G.rest_period = 20 			-- Time between matches
		_G.revealTime = 30 				-- Seconds before all units are revealed on the map
		_G.permanentRevealTime = 120	-- 2 minutes before map is permanently revealed
		_G.roundDrawTime = 210			-- 3.5 minutes before round is ended in a draw
		
		-- Each team can have 1 player (teamNumber, teamPlayers)
		GameRules:SetCustomGameTeamMaxPlayers(2, 1)	-- Radiant
		GameRules:SetCustomGameTeamMaxPlayers(3, 1)	-- Dire
		
		_G.helpText1 = "To start a round early, enter the stone area of the spawn zone."
		_G.helpText2 = "Both Heroes start with the Moon Shard buff, and have 60 bonus movespeed (does not stack with boots)."
	
	elseif (mapName == "arena_2v2" or mapName == "desert_2v2") then
	
		print ("Gamemode is Hero Arena 2v2")
		_G.preGameTime = 75				-- Time for players to set up their hero
		_G.rest_period = 25 			-- Time between matches
		_G.revealTime = 40 				-- Seconds before all units are revealed on the map
		_G.permanentRevealTime = 180	-- 3 minutes before map is permanently revealed
		_G.roundDrawTime = 240			-- 4 minutes before round is ended in a draw
		
		-- Each team can have 2 players
		GameRules:SetCustomGameTeamMaxPlayers(2, 2)	-- Radiant
		GameRules:SetCustomGameTeamMaxPlayers(3, 2)	-- Dire
		
		_G.helpText1 = "To start a round early, enter the stone area of the spawn zone."
		_G.helpText2 = "All Heroes start with the Moon Shard buff, and have 60 bonus movespeed (does not stack with boots)."
		
	elseif (mapName == "arena_3v3" or mapName == "desert_3v3") then
	
		print ("Gamemode is Hero Arena 3v3")
		_G.preGameTime = 75				-- Time for players to set up their hero
		_G.rest_period = 25 			-- Time between matches
		_G.revealTime = 40 				-- Seconds before all units are revealed on the map
		_G.permanentRevealTime = 180	-- 3 minutes before map is permanently revealed
		_G.roundDrawTime = 240			-- 4 minutes before round is ended in a draw
		
		-- Each team can have 3 players
		GameRules:SetCustomGameTeamMaxPlayers(2, 3)	-- Radiant
		GameRules:SetCustomGameTeamMaxPlayers(3, 3)	-- Dire
		
		_G.helpText1 = "To start a round early, enter the stone area of the spawn zone."
		_G.helpText2 = "All Heroes start with the Moon Shard buff, and have 60 bonus movespeed (does not stack with boots)."
	
	end
end