modifier_hero_clinkz_death_pact_custom = class({})

if IsServer() then
	function modifier_hero_clinkz_death_pact_custom:DeclareFunctions()
		local funcs = {
			MODIFIER_PROPERTY_HEALTH_BONUS,
			MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,
		}
		return funcs
	end
	
	function modifier_hero_clinkz_death_pact_custom:IsPurgable()
		return false
	end
	
	function modifier_hero_clinkz_death_pact_custom:GetTexture()
		return "clinkz_death_pact"
	end

	function modifier_hero_clinkz_death_pact_custom:GetModifierHealthBonus()
		return 880
	end
	function modifier_hero_clinkz_death_pact_custom:GetModifierPreAttack_BonusDamage()
		return 88
	end
end