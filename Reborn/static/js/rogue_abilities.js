var rogue_abilities =
{
	"sinister_strike":
	{
		"name":	"Sinister Strike",
		"icon":	"spell_shadow_ritualofsacrifice.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Strike an enemy for Weapon Damage plus $V1. Awards one combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.1
				]
			}
		],

		"isAbility":	true,
		"cost":	40.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"eviscerate":
	{
		"name":	"Eviscerate",
		"icon":	"ability_rogue_eviscerate.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Consume all combo points on the target to deal $V1 Physical damage per combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.14
				]
			}
		],

		"isAbility":	true,
		"cost":	35.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"gouge":
	{
		"name":	"Gouge",
		"icon":	"ability_gouge.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Deal $V1 Physical damage and Incapacitate the enemy for $V2 seconds. Any damage caused will break the effect. Target must be facing you. Awards 1 combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.115
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					3
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	6
	},
	"backstab":
	{
		"name":	"Backstab",
		"icon":	"ability_backstab.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Daggers",
		],
		"prerequisites": [],

		"description":	"Backstab the enemy, causing $V1 Physical damage. Must be behind the target. Awards 1 combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.30
				]
			}
		],

		"isAbility":	true,
		"cost":	50.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	8
	},
	"stealth":
	{
		"name":	"Stealth",
		"icon":	"ability_ambush.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],
		
		"description":	"Turn Invisible, becoming harder to detect by enemies and reducing your movement speed by $V1%.\n\nCannot be used in combat. Lasts until cancelled. Cooldown starts when you exit Stealth.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					30
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	10
	},
	"kick":
	{
		"name":	"Kick",
		"icon":	"ability_kick.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"A swfit kick that interrupts spellcasting and prevents any spell from that school from being cast for $V1 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					4
				]
			}
		],

		"isAbility":	true,
		"cost":	20.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	14,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	12
	},
	"pick_lock":
	{
		"name":	"Pick Lock",
		"icon":	"spell_nature_moonkey.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Allows opening of locked chests and doors.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	0,
		"castTime":	6,
		"isChanneled":	false,
		"requiredLevel":	12
	},
	"instant_poison":
	{
		"name":	"Instant Poison",
		"icon":	"ability_poisons.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Coat the selected weapon with Instant Poison. Melee attacks with that weapon have a $V1% chance to deal $V2 Nature damage on hit.\n\nA weapon can only have 1 Poison applied to it. Lasts 1 hour.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					25
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"Nature",
				"rank":	[
					0.09
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	14
	},
	"ambush":
	{
		"name":	"Ambush",
		"icon":	"ability_rogue_ambush.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Stealth",
			"Daggers"
		],
		"prerequisites": [],

		"description":	"Ambush an enemy, dealing $V1 Physical damage. Must be behind the target. Awards 1 combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.51
				]
			}
		],

		"isAbility":	true,
		"cost":	60.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	16
	},
	"sprint":
	{
		"name":	"Sprint",
		"icon":	"ability_rogue_sprint.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your movement speed by $V1% for $V2 seconds. Does not break Stealth.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					60
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					6
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	180,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	18
	},
	"rupture":
	{
		"name":	"Rupture",
		"icon":	"ability_rogue_rupture.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Consume all combo points on the target to deal $V1 Physical damage per second. Lasts 3 seconds per combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.07
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"sap":
	{
		"name":	"Sap",
		"icon":	"ability_sap.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Stealth",
		],
		"prerequisites": [],

		"description":	"Incapacitate an enemy for up to $V1 seconds. The effect is broken if the target takes any damage. Lasts $V2 seconds against enemy players.\n\nCan only be used on Humanoids that are not in combat. Only one target can be affected by Sap at a time. Does not break Stealth.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					30
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					6
				]
			}
		],

		"isAbility":	true,
		"cost":	60.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"garrote":
	{
		"name":	"Garrote",
		"icon":	"ability_rogue_garrote.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Stealth",
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Garrote an enemy, dealing $V1 Physical damage over $V2 seconds. Must be behind the target. Awards 1 combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.76
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					12
				]
			}
		],

		"isAbility":	true,
		"cost":	50.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"crippling_poison":
	{
		"name":	"Crippling Poison",
		"icon":	"ability_poisonsting.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Coat the selected weapon with Crippling Poison. Melee attacks with that weapon have a $V1% chance to slow the enemy's movement speed by $V2% for 5 seconds.\n\nA weapon can only have 1 Poison applied to it. Lasts 1 hour.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					25
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					50
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"cheap_shot":
	{
		"name":	"Cheap Shot",
		"icon":	"ability_cheapshot.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Stealth",
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Stun an enemy for $V1 seconds. Awards 2 combo points.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					4
				]
			}
		],

		"isAbility":	true,
		"cost":	60.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"distraction":
	{
		"name":	"Distraction",
		"icon":	"ability_rogue_distract.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [
			"Stealth",
		],
		"prerequisites": [],

		"description":	"Throw a distraction to the target location, attracting the attention of monsters within 12 yards for $V1 seconds. Does not break stealth.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	10.0,
		"resource":	"energy",
		"range":	30,
		"cooldown":	60,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"kidney_shot":
	{
		"name":	"Kidney Shot",
		"icon":	"ability_rogue_kidneyshot.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Consume all combo points on the target to stun it for $V1 second per combo point.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					1
				]
			}
		],

		"isAbility":	true,
		"cost":	40.0,
		"resource":	"energy",
		"range":	"melee",
		"cooldown":	24,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	28
	},
	"evasion":
	{
		"name":	"Evasion",
		"icon":	"spell_shadow_shadowward.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your dodge chance by $V1% for $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					50
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	20.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	180,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	30
	},
	"wound_poison":
	{
		"name":	"Wound Poison",
		"icon":	"inv_misc_herb_16.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Coat the selected weapon with Wound Poison. Melee attacks with that weapon have a 25% chance to reduce all healing received by the target by $V1% for $V2 seconds.\n\nA weapon can only have 1 Poison applied to it. Lasts 1 hour.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					30
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					6
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	32
	},
	"blind":
	{
		"name":	"Blind",
		"icon":	"spell_shadow_mindsteal.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blind an enemy, causing them to wander disoriented for $V1 seconds. The effect is broken if the target takes any damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	25.0,
		"resource":	"energy",
		"range":	15,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	34
	},
	"mind-numbing_poison":
	{
		"name":	"Mind-Numbing Poison",
		"icon":	"spell_nature_nullifydisease.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Coat the selected weapon with Mind-Numbing Poison. Melee attacks with that weapon have a 25% chance to slow the target's casting speed by $V1% for $V2 seconds.\n\nA weapon can only have 1 Poison applied to it. Lasts 1 hour.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					15
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	37
	},
	"vanish":
	{
		"name":	"Vanish",
		"icon":	"ability_vanish.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Flash Powder"
		],
		"prerequisites": [],

		"description":	"Vanish from sight, entering an improved Stealth mode for $V1 seconds. Removes movement impairing effects.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					8
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"energy",
		"range":	0,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	40
	}
}