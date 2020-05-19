var hunter_abilities = {
	"power_shot":
	{
		"name":	"Power Shot",
		"icon":	"ability_hunter_criticalshot.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Ranged Weapon"
		],
		"prerequisites": [],

		"description":	"Imbue your arrow with kinetic energy, dealing $V1 Physical damage to an enemy.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.31
				]
			}
		],

		"isAbility":	true,
		"cost":	20,
		"resource":	"focus",
		"range":	"8-30",
		"cooldown":	7,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"concussive_shot":
	{
		"name":	"Concussive Shot",
		"icon":	"spell_frost_stun.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Ranged Weapon"
		],
		"prerequisites": [],

		"description":	"Daze the enemy, slowing its movement speed by $V1% for $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					40
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
		"cost":	30,
		"resource":	"focus",
		"range":	"8-30",
		"cooldown":	14,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"serpent_sting":
	{
		"name":	"Serpent Sting",
		"icon":	"spell_hunter_exoticmunitions_poisoned.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Ranged Weapon"
		],
		"prerequisites": [],

		"description":	"A poisoned arrow that deals $V1 Nature damage over $V2 seconds to the enemy.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Nature",
				"rank":	[
					0.42
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					7
				]
			}
		],

		"isAbility":	true,
		"cost": 25,
		"resource":	"focus",
		"range":	"8-30",
		"cooldown":	11,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	6
	},
	"aspect_of_the_hawk":
	{
		"name":	"Aspect of the Hawk",
		"icon":	"spell_nature_ravenform.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Haste and Attack Power by $V1% for $V2 seconds. Effect is not active while moving.\n\nOnly one Aspect may be active at a time.",
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
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					7
				]
			}
		],

		"isAbility":	true,
		"cost":	25,
		"resource":	"focus",
		"range":	0,
		"cooldown":	32,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	8
	},
	"tame_beast":
	{
		"name":	"Tame Beast",
		"icon":	"ability_hunter_beasttaming.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Tame the target beast to become your companion. If you lose the beast's attention while channeling, the taming process will fail.\n\nIf successful, the beast will become your permanent companion, assisting you in combat.",
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
		"cost":	100,
		"resource":	"focus",
		"range":	30,
		"cooldown":	0,
		"castTime":	15.0,
		"isChanneled":	true,
		"requiredLevel":	10
	},
	"mend_pet":
	{
		"name":	"Mend Pet",
		"icon":	"ability_hunter_mendpet.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Restore $V1% of your pet's maximum health per second.\n\nIf your pet takes any direct damage during Mend Pet, the spell will be interrupted.",
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
		"cost":	40,
		"resource":	"focus",
		"range":	6,
		"cooldown":	0,
		"castTime":	4.0,
		"isChanneled":	true,
		"requiredLevel":	10
	},
	"revive_pet":
	{
		"name":	"Revive Pet",
		"icon":	"ability_hunter_beastsoothe.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Revive your pet, returning it to life with $V1% of its health.",
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
		"cost":	100,
		"resource":	"focus",
		"range":	30,
		"cooldown":	0,
		"castTime":	8.0,
		"isChanneled":	false,
		"requiredLevel":	10
	},
	"immolation_trap":
	{
		"name":	"Immolation Trap",
		"icon":	"spell_fire_flameshock.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Place a Trap that will trigger when an enemy steps on it, dealing $V1 Fire damage over $V2 seconds to the enemy.\n\nThe Trap is destroyed when triggered. Lasts up to $V3 seconds. ",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Fire",
				"rank":	[
					0.48
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					7
				]
			},
			{
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					30
				]
			}
		],

		"isAbility":	true,
		"cost":	35,
		"resource":	"focus",
		"range":	0,
		"cooldown":	40,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	13
	},
	"aspect_of_the_monkey":
	{
		"name":	"Aspect of the Monkey",
		"icon":	"ability_hunter_aspectofthemonkey.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Dodge Chance by $V1% for $V2 seconds.\n\nOnly one Aspect may be active at a time.",
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
					4
				]
			}
		],

		"isAbility":	true,
		"cost":	25,
		"resource":	"focus",
		"range":	0,
		"cooldown":	26,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	15
	},
	"hunters_mark":
	{
		"name":	"Hunter's Mark",
		"icon":	"ability_hunter_markedfordeath.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Mark an enemy, increasing the range of your ranged attacks and abilities against it by $V1%. The Hunter can see the marked enemy if it becomes Invisible. Lasts $V2 seconds.\n\nOnly one target can be affected by Hunter's Mark at a time. Lasts $V3 seconds against enemy players and player summons.",
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
					60
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					15
				]
			}
		],

		"isAbility":	true,
		"cost":	10,
		"resource":	"focus",
		"range":	60,
		"cooldown":	30,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	17
	},
	"frost_trap":
	{
		"name":	"Frost Trap",
		"icon":	"spell_frost_frostnova.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Place a Trap that will trigger when an enemy steps on it, freezing the ground within 10 yards of the Trap for $V1 seconds. Enemies standing on the frozen ground have their movement speed slowed by $V2%.\n\nThe Trap is destroyed when triggered. Lasts up to $V3 seconds. ",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					8
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					40
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
		"cost":	35,
		"resource":	"focus",
		"range":	0,
		"cooldown":	50,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"track_beasts":
	{
		"name":	"Track Beasts",
		"icon":	"ability_tracking.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shows the location of all beasts within 40 yards on the minimap.\n\nOnly one form of tracking can be active at a time.",
		"values":	[],

		"isAbility":	true,
		"cost":	0,
		"resource":	"focus",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"aspect_of_the_cheetah":
	{
		"name":	"Aspect of the Cheetah",
		"icon":	"ability_mount_jungletiger.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your movement speed by $V1% for 4 seconds.\n\nOnly one Aspect may be active at a time.",
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
			},
			{
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					3
				]
			}
		],

		"isAbility":	true,
		"cost":	25,
		"resource":	"focus",
		"range":	0,
		"cooldown":	23,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"feign_death":
	{
		"name":	"Feign Death",
		"icon":	"ability_rogue_feigndeath.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Feign your death which may trick enemies into ignoring you. Lasts up to $V1 minutes.\n\nCan only be cast while below 15% of your maximum health.",
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
		"cost":	10,
		"resource":	"focus",
		"range":	0,
		"cooldown":	60,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"freezing_trap":
	{
		"name":	"Freezing Trap",
		"icon":	"spell_frost_chainsofice.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Place a Trap that will trigger when an enemy steps on it, encasing the enemy in ice for up to $V1 seconds. The enemy cannot attack or move while frozen. If the enemy takes damage, the effect is broken.\n\nThe Trap is destroyed when triggered. Lasts up to $V2 seconds. ",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					6
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
		"cost":	35,
		"resource":	"focus",
		"range":	0,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	28
	},
	"track_humanoids":
	{
		"name":	"Track Humanoids",
		"icon":	"spell_holy_prayerofhealing.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shows the location of all humanoids within 40 yards on the minimap.\n\nOnly one form of tracking can be active at a time.",
		"values":	[],

		"isAbility":	true,
		"cost":	0,
		"resource":	"focus",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	28
	},
	"eagle_eye":
	{
		"name":	"Eagle Eye",
		"icon":	"ability_hunter_eagleeye.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Zooms in the Hunter's vision on the target location. Only usable outdoors. Lasts $V1 seconds.",
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
		"cost": 0,
		"resource":	"focus",
		"range":	0,
		"cooldown":	0,
		"castTime":	30,
		"isChanneled":	true,
		"requiredLevel":	32
	},
}