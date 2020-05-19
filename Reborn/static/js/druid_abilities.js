var druid_abilities = {
	"wrath":
	{
		"name":	"Wrath",
		"icon":	"spell_nature_abolishmagic.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Deal $V1 Nature damage to the enemy.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.28
				]
			}
		],

		"isAbility":	true,
		"cost":	6.9,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"moonfire":
{
	"name":	"Moonfire",
	"icon":	"spell_nature_starfall.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Burn the enemy for $V1 Arcane damage and apply Moonfire to the target, dealing $V2 Arcane damage over 8 seconds.\n\nMultiple instances of Moonfire stack. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.20
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.136
			]
		}
	],

	"isAbility":	true,
	"cost":	8.0,
	"resource":	"mana",
	"range":	30,
	"cooldown":	6,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	3
},
"healing_touch":
{
	"name":	"Healing Touch",
	"icon":	"spell_nature_healingtouch.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Heal an ally for $V1 health.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.52
			]
		}
	],

	"isAbility":	true,
	"cost":	10.4,
	"resource":	"mana",
	"range":	40,
	"cooldown":	0,
	"castTime":	2.5,
	"isChanneled":	false,
	"requiredLevel":	6
},
"faerie_fire":
{
	"name":	"Faerie Fire",
	"icon":	"spell_nature_faeriefire.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Imbue a mark of nature onto the enemy, dealing $V1 Nature over $V2 seconds. While affected, the target cannot Stealth or turn Invisible.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Nature",
			"rank":	[
				0.48
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
	"cost":	8.6,
	"resource":	"mana",
	"range":	30,
	"cooldown":	24,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	8
},
"bear_form":
{
	"name":	"Bear Form",
	"icon":	"ability_racial_bearform.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Shapeshift into a bear, allowing the use of Bear Form abilities, and increasing your maximum health by $V1% and the Armor you gain from items by $V2%.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster.",
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
				300
			]
		}
	],

	"isAbility":	true,
	"cost":	14.2,
	"resource":	"mana",
	"range":	0,
	"cooldown":	12,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	10
},
"strike":
{
	"name":	"Strike",
	"icon":	"inv_misc_monsterclaw_03.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Bear Form"
	],
	"prerequisites": [],

	"description":	"Thrash the enemy for $V1 Physical damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.36
			]
		}
	],

	"isAbility":	true,
	"cost":	20.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	3,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	10
},
"rejuvenation":
{
	"name":	"Rejuvenation",
	"icon":	"spell_nature_rejuvenation.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Heal an ally for $V1 health over $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.72
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
	"cost":	9.95,
	"resource":	"mana",
	"range":	40,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	12
},
"growl":
{
	"name":	"Growl",
	"icon":	"ability_physical_taunt.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Bear Form"
	],
	"prerequisites": [],

	"description":	"Intimidate the enemy, causing it to attack you. Has no effect if the target is already attacking you.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	8,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	12
},
"cure_poison":
{
	"name":	"Cure Poison",
	"icon":	"spell_nature_nullifypoison_02.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Attempt to remove one Poison effect from an ally.",
	"values":	[],

	"isAbility":	true,
	"cost":	5.8,
	"resource":	"mana",
	"range":	40,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	14
},
"swipe":
{
	"name":	"Swipe",
	"icon":	"ability_druid_swipe.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Bear Form"
	],
	"prerequisites": [],

	"description":	"Deal $V1 Physical damage to all enemies in front of you, up to $V2 yards away.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"None",
			"rank":	[
				0.295
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
	"cost":	30.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	6,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	14
},
"revive":
{
	"name":	"Revive",
	"icon":	"ability_druid_lunarguidance.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
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
"overgrowth":
{
	"name":	"Overgrowth",
	"icon":	"inv_misc_herb_felblossom.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Allies standing in the target area gain a stack of Wild Growth every second. Lasts 4 seconds.\n\nWild Growth heals the target for $V1 health over $V2 seconds. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.098
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
	"cost":	11.6,
	"resource":	"mana",
	"range":	40,
	"cooldown":	32,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	16
},
"roar":
{
	"name":	"Roar",
	"icon":	"ability_druid_challangingroar.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Bear Form"
	],
	"prerequisites": [],

	"description":	"Frighten at all enemies within $V1 yards, reducing their Attack Power by $V2 for $V3 seconds and causing them to miss their next attack.\n\nRoar generates a high amount of threat.",
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
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.2
			]
		},
		{
			"name":	"$V3",
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
	"range":	0,
	"cooldown":	32,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	18
},
"cat_form":
{
	"name":	"Cat Form",
	"icon":	"ability_druid_catform.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Shapeshift into a cat, allowing the use of Cat Form abilities and increasing your Attack Power by $V1%.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster.",
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
	"cost":	13.0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	12,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	20
},
"shred":
{
	"name":	"Shred",
	"icon":	"ability_druid_disembowel.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Cat Form"
	],
	"prerequisites": [],

	"description":	"Shred the enemy, dealing $V1 Physical damage and causing the target to bleed for an additional $V2 Physical damage over $V3 seconds.\n\nMultiple instances of Shred stack. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.25
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.10
			]
		},
		{
			"name":	"$V3",
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
	"range":	"melee",
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	20
},
"ferocious_bite":
{
	"name":	"Ferocious Bite",
	"icon":	"ability_druid_ferociousbite.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Cat Form"
	],
	"prerequisites": [],

	"description":	"Tear into the enemy, dealing $V1 Physical damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.455
			]
		}
	],

	"isAbility":	true,
	"cost":	35.0,
	"resource":	"energy",
	"range":	"melee",
	"cooldown":	6,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	20
},
"entangling_roots":
{
	"name":	"Entangling Roots",
	"icon":	"spell_nature_stranglevines.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Summon roots from the ground to Immobilize the enemy for $V2 seconds.\n\nIf the target takes more than 10% of their maximum health as damage the effect will be broken. Only useable outdoors.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Nature",
			"rank":	[
				0.048
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
	"cost":	10.33,
	"resource":	"mana",
	"range":	30,
	"cooldown":	40,
	"castTime":	2.0,
	"isChanneled":	false,
	"requiredLevel":	22
},
"mark_of_the_wild":
{
	"name":	"Mark of the Wild",
	"icon":	"spell_nature_regeneration.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase an ally's Attack Power and Spell Power by $V1, and the amount of Mana, Rage, and Energy they generate by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				62
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
	"cost":	9.5,
	"resource":	"mana",
	"range":	40,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	22
},
"prowl":
{
	"name":	"Prowl",
	"icon":	"ability_druid_prowl.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Cat Form"
	],
	"prerequisites": [],

	"description":	"Turn Invisible, becoming harder to detect by enemies and reducing your movement speed by $V1%.\n\nCannot be used in combat. Lasts until cancelled. Cooldown starts when you exit Prowl.",
	"values":	[
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	18,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	24
},
"pounce":
{
	"name":	"Pounce",
	"icon":	"ability_druid_supriseattack.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Cat Form",
		"Prowl"
	],
	"prerequisites": [],

	"description":	"Leap at the enemy from the shadows, dealing $V1 Physical damage and slowing the target by $V2% for $V3 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.58
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
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5
			]
		}
	],

	"isAbility":	true,
	"cost":	50.0,
	"resource":	"energy",
	"range":	8,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	24
},
"aquatic_form":
{
	"name":	"Aquatic Form",
	"icon":	"ability_druid_aquaticform.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Shapeshift into Aquatic Form, increasing swim speed by $V1% and allowing the druid to breathe underwater.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster. Only usable while swimming. ",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				50
			]
		}
	],

	"isAbility":	true,
	"cost":	9.37,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	26
},
"dispel_curse":
{
	"name":	"Dispel Curse",
	"icon":	"spell_nature_removecurse.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Attempt to remove one Curse effect from an ally.",
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
	"cost":	9.5,
	"resource":	"mana",
	"range":	40,
	"cooldown":	12,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	28
},
"travel_form":
{
	"name":	"Travel Form",
	"icon":	"ability_druid_travelform.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Shapeshift into Travel Form, increasing your movement speed by $V1%.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster. Only useable outdoors.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				40
			]
		}
	],

	"isAbility":	true,
	"cost":	10.15,
	"resource":	"mana",
	"range":	0,
	"cooldown":	24,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	30
},
"hibernate":
{
	"name":	"Hibernate",
	"icon":	"spell_nature_sleep.jpg",
	"spec":	6,
	"specTier":	0,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Put an enemy Beast or Dragonkin to Sleep for up to $V1 seconds. Any damage taken will remove the effect.\n\nLasts $V2 seconds against enemy players and player summons.",
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
				8
			]
		}
	],

	"isAbility":	true,
	"cost":	8.6,
	"resource":	"mana",
	"range":	30,
	"cooldown":	60,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	34
},
}