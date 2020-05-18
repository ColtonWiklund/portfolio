modifier_hero_silencer_int_steal_custom = class({})

if IsServer() then
	function modifier_hero_silencer_int_steal_custom:DeclareFunctions()
		local funcs = {
			MODIFIER_PROPERTY_STATS_INTELLECT_BONUS,
		}
		return funcs
	end
	
	function modifier_hero_silencer_int_steal_custom:IsPurgable()
		return false
	end
	
	-- function modifier_hero_silencer_int_steal_custom:IsHidden()
		-- return true
	-- end

	function modifier_hero_silencer_int_steal_custom:GetModifierBonusStats_Intellect()
		return 40
	end
end

function modifier_hero_silencer_int_steal_custom:IsHidden()
	return true
end