var warrior_abilities =
{
	"heroic_strike":
	{
		"name":	"Heroic Strike",
		"icon":	"ability_rogue_ambush.jpg",
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

		"description":	"Strike an enemy for $V1 Physical Damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.294
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"rage",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"rend":
	{
		"name":	"Rend",
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

		"description":	"Rend an enemy, causing them to Bleed for $V1 Physical damage over $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.48
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			}
		],

		"isAbility":	true,
		"cost":	25.0,
		"resource":	"rage",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"battle_stance":
	{
		"name":	"Battle Stance",
		"icon":	"ability_warrior_offensivestance.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"A balanced Stance that increases your Attack Power by $V1%.\n\nOnly one Stance may be active at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	5
	},
	"charge":
	{
		"name":	"Charge",
		"icon":	"ability_warrior_charge.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Charge an enemy, dealing $V1 Physical damage and Stunning it for $V2 seconds. Generates 15 Rage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.2
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					2.5
				]
			}
		],

		"isAbility":	true,
		"cost":	0,
		"resource":	"rage",
		"range":	"8-25",
		"cooldown":	24,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	7
	},
	"hamstring":
	{
		"name":	"Hamstring",
		"icon":	"ability_shockwave.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon",
		],
		"prerequisites": [],

		"description":	"Deal $V1 Physical damage to an enemy and reduce their Movement Speed by $V2% for $V3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.12
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					50
				]
			},
			{
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					7
				]
			}
		],

		"isAbility":	true,
		"cost":	15.0,
		"resource":	"rage",
		"range":	"melee",
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	9
	},
	"bloodrage":
	{
		"name":	"Bloodrage",
		"icon":	"ability_racial_bloodrage.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Sacrifice $V1% of your maximum health to gain $V2 Rage over 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					40
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	45,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	11
	},
	"devastate":
	{
		"name":	"Devastate",
		"icon":	"ability_warrior_punishingblow.jpg",
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

		"description":	"Pierce an enemy's defenses, dealing $V1 Physical damage and reducing their Armor by $V2 for 15 seconds. Maximum 5 stacks.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.26
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.35
				]
			}
		],

		"isAbility":	true,
		"cost":	20.0,
		"resource":	"rage",
		"range":	"melee",
		"cooldown":	6,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	13
	},
	"defensive_stance":
	{
		"name":	"Defensive Stance",
		"icon":	"ability_warrior_defensivestance.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"A protective Stance that increases your Dodge and Parry chance by $V1% and increases threat generated by $V2%.\n\nOnly one Stance may be active at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					30
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	15
	},
	"thunderclap":
	{
		"name":	"Thunderclap",
		"icon":	"ability_thunderclap.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blast enemies within 6 yards with concussive force, dealing $V1 Physical damage and reducing their Attack Speed by $V2% for 3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.24
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	17
	},
	"taunt":
	{
		"name":	"Taunt",
		"icon":	"spell_nature_reincarnation.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Taunts an enemy to attack you, but has no effect if the target is already attacking you.",
		"values":	[],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"rage",
		"range":	20,
		"cooldown":	10,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	15
	},
	"battle_shout":
	{
		"name":	"Battle Shout",
		"icon":	"ability_warrior_battleshout.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
		],
		"prerequisites": [],

		"description":	"Invigorate all allies within 25 yard, increasing their Attack Power by $V1% for $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					8
				]
			}
		],

		"isAbility":	true,
		"cost":	15.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"cleave":
	{
		"name":	"Cleave",
		"icon":	"ability_warrior_cleave.jpg",
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

		"description":	"A sweeping attack that deals Weapon Damage plus $V1 Physical damage to the closest 3 enemies in front of you, up to 4 yards away.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.08
				]
			}
		],

		"isAbility":	true,
		"cost":	35.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"execute":
	{
		"name":	"Execute",
		"icon":	"ability_warrior_execute.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon",
			"Battle Stance, Berserker Stance"
		],
		"prerequisites": [],

		"description":	"Spend all Rage to finish off a wounded enemy, dealing $V1 Physical damage for each point of Rage spent.\n\nOnly usable on enemies with less than 20% of their maximum health.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.0135
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"rage",
		"range":	"melee",
		"cooldown":	7,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"pummel":
	{
		"name":	"Pummel",
		"icon":	"inv_gauntlets_04.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Pummel an enemy for $V1 Physical damage, interrupting spellcasting and preventing any spell in that school from being cast for $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.16
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					4
				]
			}
		],

		"isAbility":	true,
		"cost":	15.0,
		"resource":	"rage",
		"range":	"melee",
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"berserker_stance":
	{
		"name":	"Berserker Stance",
		"icon":	"ability_racial_avatar.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"An aggressive Stance that increases your Critical Hit chance by $V1% but increases all damage you take by $V2%.\n\nOnly one Stance may be active at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					10
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	30
	},
	"berserker_rage":
	{
		"name":	"Berserker Rage",
		"icon":	"spell_nature_ancestralguardian.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Enter a blind rage, becoming immune to Fear, Charm, Sleep, and Incapacitate effects and generating 50% more rage from damage taken. Lasts $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					20
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
		"cost":	10.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	40,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	32
	},
	"challenging_shout":
	{
		"name":	"Challenging Shout",
		"icon":	"ability_bullrush.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Threaten all enemies within 15 yards, forcing them to attack you for $V1 seconds.\n\nHas no effect on enemy players.",
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
		"cost":	0.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	360,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	35
	},
	"intercept":
	{
		"name":	"Intercept",
		"icon":	"ability_warrior_victoryrush.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Rush towards a target ally or enemy.\n\nIf Intercept targets an enemy, the target is Immobilized for $V1 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					3
				]
			}
		],

		"isAbility":	true,
		"cost":	30.0,
		"resource":	"rage",
		"range":	"8-25",
		"cooldown":	45,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	38
	},
	"last_stand":
	{
		"name":	"Last Stand",
		"icon":	"spell_nature_shamanrage.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Spend all Rage to gain 1.5% of your maximum health for each point of Rage consumed. Lasts 8 seconds. When Last Stand expires, the health is lost.\n\nCan only be used while below $V1% maximum health. Last Stand will not consume more Rage than required to bring you to maximum health.",
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
		"cost":	25.0,
		"resource":	"rage",
		"range":	0,
		"cooldown":	600,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	41
	},
}