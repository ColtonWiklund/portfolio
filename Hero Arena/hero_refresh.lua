-- Sets the players health and mana to full and resets abilities
function SoftRefresh(hero)
	hero:SetHealth(hero:GetMaxHealth())
	hero:SetMana(hero:GetMaxMana())
	
	local heroModifiers = hero:FindAllModifiers()
	for k, v in pairs( heroModifiers ) do
		--print("Modifier Name:", v:GetName())
		if (v:GetDuration() > 1 and v:GetName() ~= "modifier_broodmother_spin_web_charge_counter") then		--  >0.5 includes auras (?)
			if (v:GetStackCount() > 0) then 
				v:SetStackCount(0)
			end
			v:SetDuration(0, true)
		elseif (hero:GetName() ~= "npc_dota_hero_legion_commander" and v:GetName() == "modifier_legion_commander_duel_damage_boost") then
			hero:RemoveModifierByName("modifier_legion_commander_duel_damage_boost")
		end
	end
	
	hero:AddNewModifier(hero, nil, "modifier_movespeed", nil)
	--hero:AddNewModifier(hero, nil, "modifier_item_moon_shard_consumed", {consumed_bonus = 60})
	
	for i=0, 15, 1 do  -- The maximum number of abilities a unit can have is currently 16.
		local current_ability = hero:GetAbilityByIndex(i)
		if current_ability ~= nil then
			current_ability:EndCooldown()
			--print (i, "Ability Name:", current_ability:GetName())
		end
	end
	
	--Refresh all items the caster has in inventory and backpack
	for i=0, 14, 1 do
		local current_item = hero:GetItemInSlot(i)
		if current_item ~= nil then
			current_item:EndCooldown()
		end
	end
	HeroExceptions(hero)	-- Resets some modifiers based on the hero (charge based abilities, passives that require hero kills, etc.)
	return hero
end

-- Some Heroes need to be reset differently to preserve charge based abilities and certain passives
function HeroExceptions(hero)
	local heroName = hero:GetName()
	
	-- Clinkz
	if (heroName == "npc_dota_hero_clinkz") then	
		hero:AddNewModifier(hero, nil, "modifier_hero_clinkz_death_pact_custom", nil)
		
	-- Legion Commander	
	elseif (heroName == "npc_dota_hero_legion_commander") then	
		local duelDamage = hero:AddNewModifier(hero, nil, "modifier_legion_commander_duel_damage_boost", nil)	-- Legion Commander doesn't start with the Duel buff so a new one is created
		if (hero:GetAbilityByIndex(10):GetLevel() == 1) then	-- Talent that increases duel damage by 40 for each victory
			duelDamage:SetStackCount(300)	-- Damage from (3x level 1 duels, 3x level 2 duels, 3x level 3 duels, 3x level 3 duels + talent)
		else
			duelDamage:SetStackCount(180)	-- Damage from (3x level 1 duels, 3x level 2 duels, 6x level 3 duels)
		end
		
	-- Silencer
	elseif (heroName == "npc_dota_hero_silencer") then	
		local intStolen = hero:FindModifierByName("modifier_silencer_int_steal")	-- Updates the display value of stolen Int
		if (intStolen:GetStackCount() < 40) then
			intStolen:SetStackCount(40)
		end
		hero:AddNewModifier(hero, nil, "modifier_hero_silencer_int_steal_custom", nil)	-- Adds the actual intelligence gained
	
	-- Timbersaw
	-- elseif (heroName == "npc_dota_hero_shredder") then	-- Doesn't correctly increase the stacks
		-- for i=1, 10, 1 do
			-- hero:AddNewModifier(hero, nil, "modifier_shredder_reactive_armor_stack", nil)
		-- end
		
	-- Pudge (Crashes the game)
	--elseif (heroName == "npc_dota_hero_pudge") then
		--print ("Hero is Pudge")
		--local fleshHeap = hero:FindModifierByName("modifier_pudge_flesh_heap")
		-- --local fleshHeap = hero:AddNewModifier(hero, nil, "modifier_pudge_flesh_heap", nil)	-- Crashes the game
		--fleshHeap:IncrementStackCount()
		
	-- Shadowfiend
	elseif (heroName == "npc_dota_hero_nevermore") then		
		local necroStacks = hero:FindModifierByName("modifier_nevermore_necromastery")
		if (hero:HasItemInInventory("item_ultimate_scepter") or hero:HasModifier("modifier_item_ultimate_scepter_consumed")) then	-- If Shadowfiend has an Aghanim's Scepter or Consumed Aghanim's Scepter
			necroStacks:SetStackCount(46)
		else
			necroStacks:SetStackCount(36)
		end
	
	-- Morphling
	-- elseif (heroName == "npc_dota_hero_morphling") then
		-- if (hero:GetAbilityByIndex(5):GetName() == "morphling_morph_replicate") then	-- If Morphling had a Replicate active when the round ended, swap his Replicate and Morph Replicate abilities back
			-- hero:SwapAbilities("morphling_replicate", "morphling_morph_replicate", true, false)
		-- end
	end
	
	-- Ember Spirit (Refreshes charges but not cooldown)
	if (heroName == "npc_dota_hero_ember_spirit") then
		local remnantCharges = hero:FindModifierByName("modifier_ember_spirit_fire_remnant_charge_counter")
		remnantCharges:SetStackCount(3)
		
	-- Sniper (Refreshes charges but not cooldown)
	elseif (heroName == "npc_dota_hero_sniper") then
		local shrapnelCharges = hero:FindModifierByName("modifier_sniper_shrapnel_charge_counter")
		if (hero:GetAbilityByIndex(11):GetLevel() == 1) then	-- Sniper has the talent that gives him +4 Shrapnel charges
			shrapnelCharges:SetStackCount(7)
		else
			shrapnelCharges:SetStackCount(3)
		end
	
	-- Earth Spirit (Refreshes charges but not cooldown)
	elseif (heroName == "npc_dota_hero_earth_spirit") then
		local stoneCaller = hero:FindModifierByName("modifier_earth_spirit_stone_caller_charge_counter")
		stoneCaller:SetStackCount(6)
		
	-- Death Prophet (Refreshes charges but not cooldown)
	elseif (heroName == "npc_dota_hero_death_prophet") then
		local spiritCharges = hero:FindModifierByName("modifier_death_prophet_spirit_siphon_charge_counter")
		spiritCharges:SetStackCount(4)
		--print ("Spirit Siphon Charges", spiritCharges:GetStackCount())
	
	-- Shadow Demon (Refreshes charges but not cooldown)
	elseif (heroName == "npc_dota_hero_shadow_demon") then
		if (hero:HasItemInInventory("item_ultimate_scepter") or hero:HasModifier("modifier_item_ultimate_scepter_consumed")) then	-- Only works when Shadow Demon has an Aghanim's Scepter
			local purgeCharges = hero:FindModifierByName("modifier_shadow_demon_demonic_purge_charge_counter")
			purgeCharges:SetStackCount(3)
		end

	-- Gyrocopter (Talent Gives 3 Charges to Homing Missile)
	elseif (heroName == "npc_dota_hero_gyrocopter") then
		if (hero:GetAbilityByIndex(10):GetLevel() == 1) then	-- Gyrocopter has talent that gives him three charges of Homing Missile
			local missileCharges = hero:FindModifierByName("modifier_gyrocopter_homing_missile_charge_counter")
			missileCharges:SetStackCount(3)
		end
	
	-- Ancient Apparition (Talent Gives 3 Charges to Cold Feet)
	elseif (heroName == "npc_dota_hero_ancient_apparition") then
		if (hero:GetAbilityByIndex(11):GetLevel() == 1) then	-- AA has talent that gives him three charges of cold feet
			local coldFeetCharges = hero:FindModifierByName("modifier_ancient_apparition_cold_feet_charge_counter")
			coldFeetCharges:SetStackCount(3)
		end
	end
end

-- Completely replaces the current hero with a copy of the same abilities and items
-- BROKEN: Does not showing Mastery tree talent indicator. Prevents heroes from purchasing items after enough new heroes have been created for that player.
-- (This function is currently not used)
function HardRefresh(hero)			
	-- local heroModifiers = hero:FindAllModifiers()
	-- for k, v in pairs( heroModifiers ) do
		-- print("Class:", v:GetClass(), v:GetStackCount())
	-- end
	
	local abilityTable = {}
	for i=0, 15, 1 do
		if (hero:GetAbilityByIndex(i) ~= nil) then
			abilityTable[i] = hero:GetAbilityByIndex(i):GetLevel()
			--print (i, abilityTable[i])
		end
	end
	
	local heroName = hero:GetName()
	local playerOwner = hero:GetPlayerOwner()
	local playerID = hero:GetPlayerOwner():GetPlayerID()		-- handle CreateHeroForPlayer(string unitName, handle player)
	local newHero = PlayerResource:ReplaceHeroWith(playerID, hero:GetName(), 0, 0)
	--print ("New Hero Created", newHero:GetName())
	for i=0, 23, 1 do
		newHero:HeroLevelUp(false)
	end
	
	newHero:SetRespawnsDisabled(true)	-- Disable Respawning
	newHero:SetGold(99999, false)
	
	for i=0, 15, 1 do
		if (newHero:GetAbilityByIndex(i) ~= nil) then
			newHero:GetAbilityByIndex(i):SetLevel(abilityTable[i])
		end
	end
	
	newHero:SetAbilityPoints(0)
	for i=0, 5, 1 do
		local current_item = newHero:GetItemInSlot(i)
		if current_item ~= nil then
			current_item:EndCooldown()
		end
	end
	newHero:AddNewModifier(newHero, nil, "modifier_item_moon_shard_consumed", {consumed_bonus = 60})	-- Needs to be changed manually if the bonus provided by Moon Shard changes
	return newHero
end