var priest_abilities =
{
	"smite":
	{
		"name":	"Smite",
		"icon":	"spell_holy_holysmite.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Smite an enemy for $V1 Holy damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.26
				]
			}
		],

		"isAbility":	true,
		"cost":	6.7,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"flash_heal":
	{
		"name":	"Flash Heal",
		"icon":	"spell_holy_flashheal.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Heals an ally for $V1.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.32
				]
			}
		],

		"isAbility":	true,
		"cost":	6.2,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"shadow_word_pain":
	{
		"name":	"Shadow Word: Pain",
		"icon":	"spell_shadow_shadowwordpain.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Place a word of darkness on an enemy that causes $V1 Shadow damage over 14 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.70
				]
			}
		],

		"isAbility":	true,
		"cost":	9.8,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	6
	},
	"renew":
	{
		"name":	"Renew",
		"icon":	"spell_holy_renew.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Bless an ally, restoring $V1 health over 12 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.72
				]
			}
		],

		"isAbility":	true,
		"cost":	8.5,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	9
	},
	"power_word_shield":
	{
		"name":	"Power Word: Shield",
		"icon":	"spell_holy_powerwordshield.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Draw on the soul of an ally to shield them, absorbing $V1 damage. Lasts 12 seconds.\n\nThe target is affected by Weakened Soul, preventing Power Word: Shield from being cast on them again for 16 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.73
				]
			}
		],

		"isAbility":	true,
		"cost":	11.5,
		"resource":	"mana",
		"range":	40,
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	11
	},
	"resurrection":
	{
		"name":	"Resurrection",
		"icon":	"spell_holy_resurrection.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Bring a dead ally back to life with $V1 health and $V2 mana.\n\nCannot be cast in combat.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					1.1
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.8
				]
			}
		],

		"isAbility":	true,
		"cost":	33.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	14
	},
	"mind_blast":
	{
		"name":	"Mind Blast",
		"icon":	"spell_shadow_shadowworddominate.jpg",
		"spec":	2,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blast an enemy with darkness, dealing $V1 Shadow damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.44
				]
			}
		],

		"isAbility":	true,
		"cost":	10.8,
		"resource":	"mana",
		"range":	30,
		"cooldown":	8,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	16
	},
	"dispel_magic":
	{
		"name":	"Dispel Magic",
		"icon":	"spell_holy_dispelmagic.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Attempt to remove one harmful Magical effect from an ally.",
		"values":	[],

		"isAbility":	true,
		"cost":	8.2,
		"resource":	"mana",
		"range":	40,
		"cooldown":	6,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	16
	},
	"inner_fire":
	{
		"name":	"Inner Fire",
		"icon":	"spell_holy_innerfire.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"A burst of Holy energy fills the caster, increasing Armor by $V1 for 4 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					1.85
				]
			}
		],

		"isAbility":	true,
		"cost":	10.3,
		"resource":	"mana",
		"range":	0,
		"cooldown":	24,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	18
	},
	"power_word_fortitude":
	{
		"name":	"Power Word: Fortitude",
		"icon":	"spell_holy_wordfortitude.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Imbue an ally with life, increasing their Stamina by $V1 for 30 minutes.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					46
				]
			}
		],

		"isAbility":	true,
		"cost":	11.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"psychic_scream":
	{
		"name":	"Psychic Scream",
		"icon":	"spell_shadow_psychicscream.jpg",
		"spec":	3,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Break an enemy's psyche, causing them to run away in Fear for 4 seconds.\n\nIf the enemy takes more than $V1% of its maximum health as damage, the effect will be broken.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					15
				]
			}
		],

		"isAbility":	true,
		"cost":	15.1,
		"resource":	"mana",
		"range":	20,
		"cooldown":	40,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	23
	},
	"revitalize":
	{
		"name":	"Revitalize",
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

		"description":	"Attempt to remove one Disease effect from an ally.",
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
		"cost":	11.3,
		"resource":	"mana",
		"range":	40,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"shadow_protection":
	{
		"name":	"Shadow Protection",
		"icon":	"spell_shadow_antishadow.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the Shadow Resistance of an ally by $V1 for 30 minutes.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					60
				]
			}
		],

		"isAbility":	true,
		"cost":	10.3,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	30
	},
	"fear_ward":
	{
		"name":	"Fear Ward",
		"icon":	"spell_holy_excorcism.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Wards an ally against Fear, causing the next Fear effect used against them to fail. Lasts 15 seconds.",
		"values":	[],

		"isAbility":	true,
		"cost":	13.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	60,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	34
	},
	"mind_control":
	{
		"name":	"Mind Control",
		"icon":	"spell_shadow_shadowworddominate.jpg",
		"spec":	3,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Controls a enemy humanoid mind up to your level for 10 seconds, but increases the time between its attacks by $V1%.\n\nCan only be used on targets below 50% health. Lasts 3 seconds against enemy players.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					25
				]
			}
		],

		"isAbility":	true,
		"cost":	18.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	180,
		"castTime":	10,
		"isChanneled":	true,
		"requiredLevel":	40
	},
}