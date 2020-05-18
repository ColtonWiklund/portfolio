modifier_movespeed = class({})

if IsServer() then
	function modifier_movespeed:DeclareFunctions()
		local funcs = {
			--MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT,
			MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE,
		}
		return funcs
	end
	
	function modifier_movespeed:IsPurgable()
		return false
	end
	
	function modifier_movespeed:GetTexture()
		return "movement_speed"
	end

	--function modifier_movespeed:GetModifierMoveSpeedBonus_Constant()
		--return 300
	--end
	function modifier_movespeed:GetModifierMoveSpeedBonus_Special_Boots()
		return 60
	end
end


