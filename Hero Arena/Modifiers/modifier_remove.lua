modifier_remove = class({})

if IsServer() then
	function modifier_remove:CheckState()
		local state = {
			[MODIFIER_STATE_BLIND] = false,
			[MODIFIER_STATE_NO_HEALTH_BAR] = true,
			[MODIFIER_STATE_UNSELECTABLE] = true,
			[MODIFIER_STATE_INVULNERABLE] = true,
			[MODIFIER_STATE_NO_UNIT_COLLISION] = true,
		}
		return state
	end
end
