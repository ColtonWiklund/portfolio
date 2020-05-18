modifier_tracker_entity = class({})

if IsServer() then
	function modifier_tracker_entity:CheckState()
		local state = {
			[MODIFIER_STATE_BLIND] = false,
			[MODIFIER_STATE_NO_HEALTH_BAR] = true,
			[MODIFIER_STATE_INVULNERABLE] = true,
		}
		return state
	end
end

function modifier_tracker_entity:IsHidden()
	return true
end

