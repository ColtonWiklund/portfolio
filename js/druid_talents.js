var druid_talents = {
"sanctuary":
{
	"name":	"Sanctuary",
	"icon":	"spell_nature_slowingtotem.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"If an ally has only one of your healing over time effects on them, it heals for $V1% more health.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
				6,
				9,
				12,
				15
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"nuture":
{
	"name":	"Nuture",
	"icon":	"spell_lifegivingseed.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting Healing Touch, Rejuvenation, or Regrowth has a $V1% chance to add a stack of Wild Growth to to the target.\n\nWild Growth heals the target for $V2 health over 7 seconds. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15,
				20,
				25
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.098,
				0.098,
				0.098,
				0.098,
				0.098
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"regrowth":
{
	"name":	"Regrowth",
	"icon":	"spell_nature_resistnature.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,
	
	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Heal an ally for $V1 health and an additional $V2 health over $V3 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.43
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.672
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				14
			]
		}
	],

	"isAbility":	true,
	"cost":	14.3,
	"resource":	"mana",
	"range":	40,
	"cooldown":	8,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"harmony":
{
	"name":	"Harmony",
	"icon":	"spell_nature_healingway.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Haste of your Rejuvenation, Wild Growth, and Regrowth by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6,
				8,
				10
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_rejuvenation":
{
	"name":	"Improved Rejuvenation",
	"icon":	"spell_nature_rejuvenation.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Rejuvenation by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3,
				4
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"focused_growth":
{
	"name":	"Focused Growth",
	"icon":	"ability_druid_focusedgrowth.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"regrowth",
	],

	"description":	"Regrowth increases the duration of Rejuvenation and Lifebloom on the target by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"spirit_of_nature":
{
	"name":	"Spirit of Nature",
	"icon":	"spell_nature_regeneration_02.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every Rejuvenation or Regrowth active on an ally reduces the mana cost of your Restoration spells by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.5,
				1,
				1.5,
				2
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"nourish":
{
	"name":	"Nourish",
	"icon":	"ability_druid_nourish.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Heal an ally for $V1 health and consume up to $V2 seconds from each of your healing over time effects on the target, instantly healing them for that much health.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.32
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
	"cost":	15.1,
	"resource":	"mana",
	"range":	40,
	"cooldown":	14,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"cultivate":
{
	"name":	"Cultivate",
	"icon":	"spell_nature_natureblessing.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"regrowth",
	],

	"description":	"Casting Regrowth on an ally already affected by it will increase the duration of Regrowth by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
				6
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"lifebloom":
{
	"name":	"Lifebloom",
	"icon":	"ability_druid_flourish.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Heal an ally for $V1 health every second for $V2 seconds. If the target is healed to full health, Lifebloom will jump to the most injured party or raid member within $V3 yards.\n\nLifebloom can jump multiple times over its duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.08
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				21
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
	"cost":	16.2,
	"resource":	"mana",
	"range":	40,
	"cooldown":	120,
	"castTime":	2.0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"natures_protection":
{
	"name":	"Nature's Protection",
	"icon":	"spell_nature_spiritarmor.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Rejuvenation, Regrowth, and Lifebloom increase the target's Resistance to all schools of magic by $V1.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.003,
				0.006,
				0.009
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_overgrowth":
{
	"name":	"Improved Overgrowth",
	"icon":	"inv_misc_herb_felblossom.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"The most injured ally standing in your Overgrowth has a $V1% chance to gain an additional stack of Wild Growth every second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				33,
				66,
				100
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"antidote":
{
	"name":	"Antidote",
	"icon":	"spell_nature_nullifypoison_02.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Cure Poison has a $V1% chance to remove an additional Poison effect after 2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				50,
				100
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blossom":
{
	"name":	"Blossom",
	"icon":	"spell_lifeblood.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"lifebloom",
	],

	"description":	"The amount of health restored by Lifebloom increases by $V1% every time it jumps to a new ally.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8,
				12
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"wild_healing":
{
	"name":	"Wild Healing",
	"icon":	"spell_druid_germination.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each stack of Wild Growth that expires has a $V1% chance to add a stack of Wild Growth to the most injured ally within 10 yards of the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8,
				12,
				16,
				20
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"tranquility":
{
	"name":	"Tranquility",
	"icon":	"spell_nature_tranquility.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Restore $V1 health every second divided evenly among all injured party or raid members within 30 yards of the Druid.\n\nTranquility cannot heal an ally for more than $V2 health per second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				1.05
			]
		},
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				0.525
			]
		}
	],

	"isAbility":	true,
	"cost":	26.82,
	"resource":	"mana",
	"range":	0,
	"cooldown":	900,
	"castTime":	5,
	"isChanneled":	true,
	"requiredLevel":	0
},
"rampant_growth":
{
	"name":	"Rampant Growth",
	"icon":	"spell_druid_rampantgrowth.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"nourish",
	],

	"description":	"Nourish increases the Haste of your healing over time effects on the target by $V1% for 4 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"germination":
{
	"name":	"Germination",
	"icon":	"ability_druid_overgrowth.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"lifebloom",
	],

	"description":	"When Lifebloom jumps to an ally, it has a $V1% chance to duplicate and jump to an additional ally for half its remaining duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"prosperity":
{
	"name":	"Prosperity",
	"icon":	"ability_druid_naturalperfection.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"tree_of_life",
	],

	"description":	"While Shapeshifted into the Tree of Life, the most injured ally within 30 yards gains a stack of Wild Growth every $V1.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				"3 seconds",
				"2 seconds",
				"second"
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"tree_of_life":
{
	"name":	"Tree of Life",
	"icon":	"ability_druid_improvedtreeform.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Shapeshift into the Tree of Life, increase your Healing Power by $V1% and reducing the cooldown of your Regrowth, Nourish, and Lifebloom by $V2%. Lasts $V3 seconds.\n\nYou may only cast Restoration spells while in this form.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster.",
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
				50
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20
			]
		}
	],

	"isAbility":	true,
	"cost":	11.25,
	"resource":	"mana",
	"range":	0,
	"cooldown":	1200,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"spirit_of_the_world_tree":
{
	"name":	"Spirit of the World Tree",
	"icon":	"ability_druid_manatree.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"tree_of_life",
	],

	"description":	"Tree of Life increases the Haste of all your healing over time effects on allies within 40 yards by up to $V1%.\n\nThe effect diminishes the further away the ally is, to a minimum of $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				30,
				60
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"natures_grasp":
{
	"name":	"Nature's Grasp",
	"icon":	"spell_nature_natureswrath.jpg",
	"spec":	1,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemy attacks against you have a $V1% chance to cast Entangling Roots on the attacker. Only usable outdoors. 1 Charge. Lasts $V2 seconds.",
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
	"cost":	7.0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"innervate":
{
	"name":	"Innervate",
	"icon":	"spell_nature_lightning.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase an ally's Spirit by $V1% for 10 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				500
			]
		}
	],

	"isAbility":	true,
	"cost":	9.5,
	"resource":	"mana",
	"range":	40,
	"cooldown":	900,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"wild_entanglement":
{
	"name":	"Wild Entanglement",
	"icon":	"inv_misc_herb_nightmarevine.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"natures_grasp",
	],

	"description":	"Nature's Grasp has $V1 additional $V2.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				"charge",
				"charges"
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rebirth":
{
	"name":	"Rebirth",
	"icon":	"spell_nature_reincarnation.jpg",
	"spec":	1,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	true,

	"requirements": [
		"Maple Seed"
	],
	"prerequisites": [],

	"description":	"Resurrect a fallen ally, restoring them to life with $V1 health and $V2 mana.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				2.3
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Healing",
			"damageType":	"None",
			"rank":	[
				1.7
			]
		}
	],

	"isAbility":	true,
	"cost":	21.0,
	"resource":	"mana",
	"range":	40,
	"cooldown":	3600,
	"castTime":	3.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_moonfire":
{
	"name":	"Improved Moonfire",
	"icon":	"spell_nature_starfall.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Moonfire has a $V1% chance to apply an additional stack.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				7,
				14,
				21,
				28,
				35
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"natures_fury":
{
	"name":	"Nature's Fury",
	"icon":	"spell_arcane_arcane03_green.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting Wrath reduces the cast time of Wrath by $V1% for 6 seconds. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3,
				4,
				5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"starfire":
{
	"name":	"Starfire",
	"icon":	"spell_arcane_starfire.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Bombard the enemy with solar energy, dealing $V1 Arcane damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.65
			]
		}
	],

	"isAbility":	true,
	"cost":	11.5,
	"resource":	"mana",
	"range":	30,
	"cooldown":	14,
	"castTime":	2.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"clearcasting":
{
	"name":	"Clearcasting",
	"icon":	"spell_nature_crystalball.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting a spell has a $V1% chance to reduce the mana cost of your next spell by 60%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15,
				20,
				25
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_faerie_fire":
{
	"name":	"Improved Faerie Fire",
	"icon":	"spell_nature_faeriefire.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Faerie Fire by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"starsurge":
{
	"name":	"Starsurge",
	"icon":	"spell_arcane_arcanetorrent.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"starfire",
	],

	"description":	"Starfire deals an additional 40% of its damage to $V1 additional $V2 within 6 yards.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				"enemy",
				"enemies",
				"enemies"
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"balance_of_nature":
{
	"name":	"Balance of Nature",
	"icon":	"spell_nature_wispsplodegreen.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each Nature spell you cast generates a charge of Balance of Nature, increasing your Nature damage by 2%. Maximum $V1 charges. Lasts 16 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_entangling_roots":
{
	"name":	"Improved Entangling Roots",
	"icon":	"spell_nature_stranglevines.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cast time of Entangling Roots by $V1 seconds and its cooldown by $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.2,
				0.4,
				0.6
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8,
				12
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"celestial_alignment":
{
	"name":	"Celestial Alignment",
	"icon":	"artifactability_balancedruid_halfmoon.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"starfire",
	],

	"description":	"The Critical Hit chance of Starfire is increased by $V1% for each stack of Moonfire on the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"balance_of_arcane":
{
	"name":	"Balance of Arcane",
	"icon":	"spell_nature_wispsplode.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each Arcane spell you cast generates a charge of Balance of Arcane, increasing your Arcane damage by 2%. Maximum $V1 charges. Lasts 16 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hurricane":
{
	"name":	"Hurricane",
	"icon":	"spell_nature_cyclone.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Channel a violent storm on the target area. Enemies who stand in it take $V1 Nature damage per second and have their Attack Speed slowed by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Nature",
			"rank":	[
				0.15
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20
			]
		}
	],

	"isAbility":	true,
	"cost":	15.1,
	"resource":	"mana",
	"range":	30,
	"cooldown":	40,
	"castTime":	4,
	"isChanneled":	true,
	"requiredLevel":	0
},
"harness_nature":
{
	"name":	"Harness Nature",
	"icon":	"spell_druid_balanceofnature.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"balance_of_nature",
	],

	"description":	"Consume up to 3 charges of Balance of Nature to augment the next Nature spell you cast. Each charge provides:\n\nWrath: Increase damage by $V1%.\n\nFaeire Fire: Increase duration by $V2 seconds.\n\nHurricane: Increase size by $V3%.\n\nLasts 3 seconds.",
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
				2
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
	"cost":	5.5,
	"resource":	"mana",
	"range":	0,
	"cooldown":	3,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"barbed_roots":
{
	"name":	"Barbed Roots",
	"icon":	"inv_misc_herb_felweed.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Entangling Roots deals $V1 Nature damage per second. This damage will not break Entangling Roots.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Nature",
			"rank":	[
				0.03,
				0.06
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"harness_arcane":
{
	"name":	"Harness Arcane",
	"icon":	"spell_druid_balanceofarcane.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"balance_of_arcane",
	],

	"description":	"Consume up to 3 charges of Balance of Arcane to augment the next Arcane spell you cast. Each charge provides:\n\nMoonfire: Increase damage and range by $V1%.\n\nStarfire: Reduce cast time by $V2%.\n\nStarfall: Increase duration by $V3 seconds.\n\nLasts 3 seconds.",
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
				20
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1
			]
		}
	],

	"isAbility":	true,
	"cost":	0.0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	3,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"violent_winds":
{
	"name":	"Violent Winds",
	"icon":	"ability_skyreach_wind.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"hurricane",
	],

	"description":	"Enemies standing in your Hurricane have their movement speed slowed by up to $V1%.\n\nThe effect dimishes the further the enemy is from the center of the spell, to a minimum of $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				40,
				60
			]
		},
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"residual_nature":
{
	"name":	"Residual Nature",
	"icon":	"spell_nature_wrathv2_green.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,
	
	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"harness_nature"
	],

	"description":	"If Harness Nature expires without being used, each charge will restore $V1 health to you over 6 seconds.\n\nAmount restored increased by Spell Power and Nature Damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Nature",
			"rank":	[
				0.055,
				0.11
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"starfall":
{
	"name":	"Starfall",
	"icon":	"ability_druid_starfall.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Call down a barrage of stars over 6 seconds around the Druid. Each star will hit a random enemy within 25 yards for $V1 Arcane damage.\n\nStarfall releases $V2 stars per second. The same enemy cannot be hit by Starfall more than twice per second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Arcane",
			"rank":	[
				0.14
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
	"cost":	16.47,
	"resource":	"mana",
	"range":	0,
	"cooldown": 240,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"cyclone":
{
	"name":	"Cyclone",
	"icon":	"spell_nature_earthbind.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Toss an enemy or ally into the air, preventing the target from taking any action for $V1 seconds. All attacks and spells against the target have a 100% miss chance.",
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
	"cost":	10.6,
	"resource":	"mana",
	"range":	30,
	"cooldown":	180,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"residual_arcane":
{
	"name":	"Residual Arcane",
	"icon":	"spell_nature_wrathv2_blue.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"harness_arcane"
	],

	"description":	"If Harness Arcane expires without being used, each charge will restore $V1 mana to you over 6 seconds.\n\nAmount restored increased by Spell Power and Arcane Damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.055,
				0.11
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"moonkin_aura":
{
	"name":	"Moonkin Aura",
	"icon":	"spell_nature_moonglow.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"moonkin_form",
	],

	"description":	"While in Moonkin Form, allies within 40 yards gain a $V1% increased spell Critical Hit chance.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1.5,
				3
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"moonkin_form":
{
	"name":	"Moonkin Form",
	"icon":	"spell_nature_forceofnature.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Shapeshift into a Moonkin, increasing the Armor you gain from items by $V1%. You may only cast Balance spells while in this form.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				300
			]
		}
	],

	"isAbility":	true,
	"cost":	6.0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	6,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"tenacity":
{
	"name":	"Tenacity",
	"icon":	"ability_monk_forcesphere_arcane.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"moonkin_form",
	],

	"description":	"Reduce the pushback suffered from damage while casting spells in Moonkin form by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				23,
				46,
				70
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"eclipse":
{
	"name":	"Eclipse",
	"icon":	"ability_druid_eclipseorange.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"starfall",
	],

	"description":	"Reduce the cooldown of Moonfire by $V1 seconds while Starfall is active.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1.5,
				3
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"thorns":
{
	"name":	"Thorns",
	"icon":	"spell_nature_thorns.jpg",
	"spec":	3,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Thorns sprout from the caster, causing enemies who attack you to take Nature damage equal to $V1% of your Armor. Lasts $V2 seconds.\n\nCan be cast while Shapeshifted.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2
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
	"cost":	8.2,
	"resource":	"mana",
	"range":	0,
	"cooldown":	40,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bramble":
{
	"name":	"Bramble",
	"icon":	"inv_misc_herb_constrictorgrass.jpg",
	"spec":	3,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"thorns",
	],

	"description":	"Thorns increases your Attack Power by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"primal_attunement":
{
	"name":	"Primal Attunement",
	"icon":	"spell_nature_wispsplode.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the mana cost of Shapeshifting by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				6,
				12,
				18,
				24,
				30
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bristling_fur":
{
	"name":	"Bristling Fur",
	"icon":	"spell_druid_bristlingfur.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Bear Form increases the Threat you generate by $V1% and the Armor you gain from items by an additional $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				6,
				12,
				18,
				24,
				30
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30,
				40,
				50
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"feline_agility":
{
	"name":	"Feline Agility",
	"icon":	"ability_hunter_catlikereflexes.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Cat Form increases your Haste by $V1% and Dodge chance by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6,
				8,
				10
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3,
				4,
				5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bestial_fortitude":
{
	"name":	"Bestial Fortitude",
	"icon":	"icon_upgradestone_beast_uncommon_orange.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your maximum health in Bear Form by $V1% and in Cat Form by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6,
				8,
				10
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3,
				4,
				5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"primal_fury":
{
	"name":	"Primal Fury",
	"icon":	"ability_bullrush.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"While in Bear Form, every 10% of your maximum health you take as damage grants a charge of Primal Fury, generating 1 Rage per second for $V1 seconds. Maximum 5 Charges.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
				6,
				9
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"ravage":
{
	"name":	"Ravage",
	"icon":	"artifactability_feraldruid_ashamanesbite.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Bear Form, Cat Form"
	],
	"prerequisites": [],

	"description":	"Bear Form: Consume up to 40 Rage to ravage the enemy. Every 10 Rage consumed deals $V1 damage and Stuns the target for 1 second.\n\nCat Form: Deal $V2 Physical damage and extend the duration of all stacks of Shred on the target by $V3 seconds. 40 Energy.",
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
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.43
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
	"cost":	0.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	17,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"furor":
{
	"name":	"Furor",
	"icon":	"spell_nature_unyeildingstamina.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"When Shapeshifting from Bear Form to Cat Form, you gain Energy equal to $V1% of the Rage you spent in the lasts 5 seconds.\n\nWhen Shapeshifting from Cat Form to Bear Form, you gain Rage equal to $V2% of the Energy you spent in the lasts 5 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				40,
				60,
				80,
				100
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30,
				40,
				50
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shredded_armor":
{
	"name":	"Shredded Armor",
	"icon":	"ability_druid_rake.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each stack of Shred reduces the target's Armor by $V1.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.10,
				0.20,
				0.30,
				0.40
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"primal_rage":
{
	"name":	"Primal Rage",
	"icon":	"ability_druid_enrage.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Bear Form"
	],
	"prerequisites": [
		"primal_fury",
	],

	"description":	"Consume all charges of Primal Fury to gain $V1 Rage for each charge consumed.",
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
	"cooldown":	18,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"predator":
{
	"name":	"Predator",
	"icon":	"ability_druid_skinteeth.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"ravage",
	],

	"description":	"Shapeshifting from Bear Form to Cat Form, or Cat Form to Bear Form reduces the cooldown of Ravage by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"heart_of_the_wild":
{
	"name":	"Heart of the Wild",
	"icon":	"spell_shaman_blessingofeternals.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every second you spend Shapeshifted into Bear Form, Cat Form, or Travel Form increases your Spirit by $V1%. Maximum 10 stacks.\n\nEffect is lost when you exit Bear Form, Cat Form, or Travel Form.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"wild_rage":
{
	"name":	"Wild Rage",
	"icon":	"spell_druid_bearhug.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"berserk",
	],

	"description":	"Berserk reduces all damage you take by $V1% for every 5 Rage consumed.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"swiftness":
{
	"name":	"Swiftness",
	"icon":	"ability_mount_jungletiger.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your movement speed in Cat Form and Travel Form by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				7,
				10
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"frenzy":
{
	"name":	"Frenzy",
	"icon":	"ability_druid_tigersroar.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Spending 30 Rage in Bear Form or 60 Energy in Cat Form generates a charge of Frenzy, increasing your Haste 2% for 12 seconds. Maximum $V1 charges.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3,
				4,
				5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"berserk":
{
	"name":	"Berserk",
	"icon":	"ability_druid_berserk.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Bear Form"
	],
	"prerequisites": [],

	"description":	"Consume up to 30 Rage to go berserk, increasing the rate at which your cooldowns refresh by $V1% for every point of Rage consumed. Lasts 5 seconds.",
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
	"cost":	10.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	50,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"lunge":
{
	"name":	"Lunge",
	"icon":	"ability_druid_supriseattack.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Pounce Stuns the target for $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"dash":
{
	"name":	"Dash",
	"icon":	"ability_druid_dash.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [
		"Cat Form"
	],
	"prerequisites": [],

	"description":	"Increase your movement speed by $V1% for $V2 seconds. Effect is lost if you exit Cat Form.",
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
				5
			]
		}
	],

	"isAbility":	true,
	"cost":	30.0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	18,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"open_wounds":
{
	"name":	"Open Wounds",
	"icon":	"artifactability_feraldruid_openwounds.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"If Shred Critically Hits, its bleed duration is increased by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"master_shapeshifter":
{
	"name":	"Master Shapeshifter",
	"icon":	"ability_druid_mastershapeshifter.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Bear Form, Cat Form, and Travel Form by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3,
				4
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bloodthirst":
{
	"name":	"Bloodthirst",
	"icon":	"ability_druid_primaltenacity.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"dire_bear_form",
	],

	"description":	"Each enemy that dies within 20 yards of you reduces the cooldown of Dire Bear Form by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"dire_bear_form":
{
	"name":	"Dire Bear Form",
	"icon":	"inv_mount_vicioushordebearmount.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"5 Charges of Frenzy"
	],
	"prerequisites": [
		"frenzy"
	],

	"description":	"Shapeshift into Dire Bear Form, allowing the use of enhanced Bear Form abilities, and increasing your maximum health by $V1%, Armor contribution from items by $V2%, and Attack Power by $V3%. Dire Bear Form gains any bonuses that affect Bear Form. Lasts 15 seconds.\n\nWhile in Dire Bear Form, you are immune to Fear, Sleep, Charm, and Incapacitate effects and cannot be Slowed below 75% of your base movement speed.\n\nThe act of Shapeshifting removes any Polymorph or Movement Impairing effects from the caster.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				45
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				400
			]
		},
		{
			"name":	"$V3",
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
	"range":	0,
	"cooldown":	900,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"feral_rage":
{
	"name":	"Feral Rage",
	"icon":	"spell_druid_stamedingroar.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"dire_bear_form",
	],

	"description":	"While in Dire Bear Form, you generate $V1 Rage per second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
				6
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"force_of_nature":
{
	"name":	"Force of Nature",
	"icon":	"spell_nature_giftofthewild.jpg",
	"spec":	5,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your healing over time effects heal an additional $V1% on yourself while Shapeshifted.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8,
				12
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"stonebark":
{
	"name":	"Stonebark",
	"icon":	"ability_druid_replenish.jpg",
	"spec":	5,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase an ally's Armor by $V1% for $V2 seconds.\n\nCan be cast on yourself while Shapeshifted.",
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
				6
			]
		}
	],

	"isAbility":	true,
	"cost":	11.0,
	"resource":	"mana",
	"range":	40,
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hardened_skin":
{
	"name":	"Hardened Skin",
	"icon":	"spell_nature_skinofearth.jpg",
	"spec":	5,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"stonebark",
	],

	"description":	"Increase the bonus Armor provided by Stonebark by $V1% for each of your healing over time effects on the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
}