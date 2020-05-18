modifier_refresh = class({})

if IsServer() then
	function modifier_refresh:CheckState()
		local state = {
			[MODIFIER_STATE_INVULNERABLE] = true,
		}
		return state
	end

	function modifier_refresh:IsHidden()
		return true
	end
end
