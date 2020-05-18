modifier_true_sight_aura = class({})

if IsServer() then
	function modifier_true_sight_aura:IsAura()
		return true
	end

	function modifier_true_sight_aura:IsHidden()
		return false
	end

	function modifier_true_sight_aura:IsPurgable()
		return false
	end

	function modifier_true_sight_aura:GetAuraRadius()
		return 3600
	end

	function modifier_true_sight_aura:GetModifierAura()
		return "modifier_truesight"
	end
	   
	function modifier_true_sight_aura:GetAuraSearchTeam()
		return DOTA_UNIT_TARGET_TEAM_ENEMY
	end

	function modifier_true_sight_aura:GetAuraSearchFlags()
		return DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES
	end

	function modifier_true_sight_aura:GetAuraSearchType()
		return DOTA_UNIT_TARGET_HERO + DOTA_UNIT_TARGET_BASIC
	end

	-- function modifier_true_sight_aura:GetAuraDuration()
		-- return 10
	-- end
end