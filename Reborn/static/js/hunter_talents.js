var hunter_talents = {
"steady_shots":
{
	"name":	"Steady Shots",
	"icon":	"ability_hunter_longshots.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the Focus cost of your Power Shot, Concussive Shot, Aimed Shot, and Piercing Shot by $V1% after not moving for at least 1 second.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"power_through":
{
	"name":	"Power Through",
	"icon":	"ability_hunter_blindingshot.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Power Shot ignores $V1 of the target's Armor.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.3,
				0.6,
				0.9,
				1.2,
				1.5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_hunters_mark":
{
	"name":	"Improved Hunter's Mark",
	"icon":	"ability_hunter_markedfordeath.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Hunter's Mark by $V1 seconds and increase the bonus range provided by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15
			]
		},
		{
			"name":	"$V2",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"sharpshooter":
{
	"name":	"Sharpshooter",
	"icon":	"ability_hunter_focusedaim.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of your attacks and abilities by $V1% for every 10 yards between you and the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.5,
				1.0,
				1.5,
				2.0,
				2.5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"aimed_shot":
{
	"name":	"Aimed Shot",
	"icon":	"ability_theblackarrow_blue.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"An precision shot that deals $V1 Physical damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.44
			]
		}
	],

	"isAbility":	true,
	"cost":	35,
	"resource":	"focus",
	"range":	"8-30",
	"cooldown":	10,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"piercing_shot":
{
	"name":	"Piercing Shot",
	"icon":	"ability_hunter_cobrashot.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"A piercing shot which deals $V1 Physical damage to the enemy and $V2 Physical damage to all enemies on its path.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.32
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.21
			]
		}
	],

	"isAbility":	true,
	"cost":	40,
	"resource":	"focus",
	"range":	"8-30",
	"cooldown":	15,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"take_aim":
{
	"name":	"Take Aim",
	"icon":	"ability_hunter_mastermarksman.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Standing still for 3 seconds increases your Attack Power by $V1% for 4 seconds. Effect is lost if you move.\n\nCannot occur more than once every 20 seconds.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"accuracy":
{
	"name":	"Accuracy",
	"icon":	"ability_hunter_assassinate.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"aimed_shot",
	],

	"description":	"Increase the Critical Hit chance of Aimed Shot against Stunned or Immobilized enemies by $V1%.",
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
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"focus_fire":
{
	"name":	"Focus Fire",
	"icon":	"ability_hunter_zenarchery.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your Critical Hits have a 15% chance to generate a charge of Focus Fire, increasing your Focus regeneration by 2 per second. Lasts $V1 seconds.\n\nMaximum 3 charges. Charges refresh independently.",
	"values":	[
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hawk_eye":
{
	"name":	"Hawk Eye",
	"icon":	"ability_eyeoftheowl.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the range of your ranged attacks and abilities by $V1 yards.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"multishot":
{
	"name":	"Multishot",
	"icon":	"ability_multishot.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"Release 5 arrows in a cone infront of the caster, hitting enemies up to $V1 yards away for $V2 Physical damage.\n\nEach arrow can only hit one enemy.",
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
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.24
			]
		}
	],

	"isAbility":	true,
	"cost":	45,
	"resource":	"focus",
	"range":	0,
	"cooldown":	21,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"precision":
{
	"name":	"Precision",
	"icon":	"ability_marksmanship.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"aimed_shot",
	],

	"description":	"Increase the range of Aimed Shot by $V1 yards.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"overdraw":
{
	"name":	"Overdraw",
	"icon":	"ability_hunter_improvedsteadyshot.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"piercing_shot"
	],

	"description":	"If Piercing Shot only hits its primary target, it deals $V1% more damage.",
	"values":	[
		{
			"name":	"$V1",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rapid_fire":
{
	"name":	"Rapid Fire",
	"icon":	"ability_hunter_focusfire.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"focus_fire"
	],

	"description":	"Consume a charge of Focus Fire to reduce the cast time of your next Aimed Shot, Piercing Shot, or Multishot by $V1%.",
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
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	3,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"lone_wolf":
{
	"name":	"Lone Wolf",
	"icon":	"spell_hunter_lonewolf.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Attack Power by $V1% when you do not have a pet summoned.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"trueshot_aura":
{
	"name":	"Trueshot Aura",
	"icon":	"ability_trueshot.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Provides $V1 additional Attack Power to all party and raid members within 30 yards.",
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
	"cost":	0,
	"resource":	"focus",
	"range":	30,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"volley":
{
	"name":	"Volley",
	"icon":	"ability_hunter_markedshot.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"multishot",
	],

	"description":	"Multishot has a $V1% wider cone and releases $V2 additional $V3.",
	"values":	[
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				15,
				30
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				"arrow",
				"arrows"
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"wild_quiver":
{
	"name":	"Wild Quiver",
	"icon":	"ability_hunter_wildquiver.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each second you spend in combat has a $V1% chance to cause your next autoshot to release an additional arrow.\n\nThis effect cannot occur more than once every 3 seconds.",
	"values":	[
		{
			"name":	"$V2",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rain_of_arrows":
{
	"name":	"Rain of Arrows",
	"icon":	"buff_epichunter.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"barrage",
	],

	"description":	"The range of Barrage increases by $V1 yards for every second you channel it.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"barrage":
{
	"name":	"Barrage",
	"icon":	"ability_rapidfire.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"Release a flurry of arrows at the enemy, dealing $V1 Physical damage each.\n\nBarrage releases 12 arrows over its duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.12
			]
		}
	],

	"isAbility":	true,
	"cost":	60,
	"resource":	"focus",
	"range":	"8-30",
	"cooldown":	60,
	"castTime":	4,
	"isChanneled":	true,
	"requiredLevel":	0
},
"bombardment":
{
	"name":	"Bombardment",
	"icon":	"demonhunter_hungeringarrow.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"barrage",
	],

	"description":	"Each arrow from Barrage has a $V1% chance to Stun the enemy for 0.5 seconds.",
	"values":	[
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"concussion":
{
	"name":	"Concussion",
	"icon":	"spell_frost_stun.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Concussive Shot has a $V1% chance to Stun the target for 2 seconds if it is within 10 yards.\n\nIf the target is further than 10 yards away, the Stun chance decreases by 5% for every additional yard between you and your target.",
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
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"resourceful":
{
	"name":	"Resourceful",
	"icon":	"spell_frost_wizardmark.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cost of your Traps by $V1 Focus.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"serpents_bite":
{
	"name":	"Serpent's Bite",
	"icon":	"spell_hunter_exoticmunitions_poisoned.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage dealt by Serpent Sting by $V1%.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"sever":
{
	"name":	"Sever",
	"icon":	"ability_hunter_mongoosebite.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon"
	],
	"prerequisites": [],

	"description":	"Sever the enemy, causing it to Bleed for $V1 Physical over $V2 seconds and reducing its movement speed by $V3%.\n\nThe target regains its movement speed over the duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.341
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				6
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				75
			]
		}
	],

	"isAbility":	true,
	"cost":	20,
	"resource":	"focus",
	"range":	"melee",
	"cooldown":	28,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"spot_weakness":
{
	"name":	"Spot Weakness",
	"icon":	"ability_hunter_silenthunter.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every second an enemy is within 5 yards of you, gain a stack of Spot Weakness on them.\n\nEach stack increases the damage you deal to the target by 1.5% for $V1 seconds. Stacks refresh independently.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_immolation_trap":
{
	"name":	"Improved Immolation Trap",
	"icon":	"spell_fire_flameshock.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the burn duration of Immolation Trap by $V1 seconds.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"close_quarters_combat":
{
	"name":	"Close Quarters Combat",
	"icon":	"ability_hunter_disarmingshot.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the minimum range of your ranged attacks and abilities by $V1 yards.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"trap_throw":
{
	"name":	"Trap Throw",
	"icon":	"ability_hunter_traplauncher.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the range of your Traps by $V1 yards.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"flare":
{
	"name":	"Flare",
	"icon":	"spell_fire_flare.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Throw a flare to the target location that blinds enemies within 4 yards, Incapacitating them for $V1 seconds. Any damage caused will remove the effect.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3.5
			]
		}
	],

	"isAbility":	true,
	"cost":	25,
	"resource":	"focus",
	"range":	30,
	"cooldown":	36,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bloodletting":
{
	"name":	"Bloodletting",
	"icon":	"spell_druid_bloodythrash.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"sever",
	],

	"description":	"Sever deals an additional $V1% damage while the target is moving.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				15,
				30,
				45
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"explosive_shot":
{
	"name":	"Explosive Shot",
	"icon":	"ability_hunter_explosiveshot.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"Fire an explosive shot at the enemy, dealing $V1 Fire damage to the target and all enemies within 6 yards.\n\nThe explosion damage is reduced the further away enemies are from the explosion, to a minumum of $V2 Fire damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Fire",
			"rank":	[
				0.29
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Fire",
			"rank":	[
				0.145
			]
		}
	],

	"isAbility":	true,
	"cost":	30,
	"resource":	"focus",
	"range":	"8-30",
	"cooldown":	18,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_frost_trap":
{
	"name":	"Improved Frost Trap",
	"icon":	"spell_frost_frostnova.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Frost Trap reduces enemies movement speed by an additional $V1%.",
	"values":	[
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"entrapment":
{
	"name":	"Entrapment",
	"icon":	"ability_rogue_trip.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies that trigger your Traps have a $V1% chance to be Immobilized for 2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				13,
				25,
				38,
				50
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_feign_death":
{
	"name":	"Improved Feign Death",
	"icon":	"ability_rogue_feigndeath.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Feign Death is usable while below $V1% of your maximum health.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				25
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shrapnel":
{
	"name":	"Shrapnel",
	"icon":	"6bf_explosive_shard.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"explosive_shot"
	],

	"description":	"Enemies in range of the explosion take $V1 Physical damage for every 1,000 Armor the target has, up to a maximum of $V2 damage each.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.05,
				0.1,
				0.15
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"master_trapper":
{
	"name":	"Master Trapper",
	"icon":	"inv_pet_pettrap01.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of your Traps by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				8,
				16,
				24
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"master_trapper":
{
	"name":	"Master Trapper",
	"icon":	"inv_pet_pettrap01.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of your Traps by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				8,
				16,
				24
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"call_of_the_wilderness":
{
	"name":	"Call of the Wilderness",
	"icon":	"ability_hunter_camouflage.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"While outdoors, your movement speed and Dodge chance is increased by $V1%.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"deterrence":
{
	"name":	"Deterrence",
	"icon":	"ability_whirlwind.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Parry chance by $V1% for $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				100
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
	"cost":	25.0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"signal_fire":
{
	"name":	"Signal Fire",
	"icon":	"spell_fire_fire.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"flare",
	],

	"description":	"Flare illuminates the ground where it lands, revealing any Invisible enemies within 8 yards. Lasts $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				6,
				12
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"spinning_blade":
{
	"name":	"Spinning Blade",
	"icon":	"ability_arakkoa_spinning_blade.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"chakram",
	],

	"description":	"Chakram will remain at the target location for $V1 seconds before returning, dealing $V2 Physical damage per second to any enemies standing on it.",
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
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.07,
				0.07,
				0.07
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"chakram":
{
	"name":	"Chakram",
	"icon":	"ability_upgrademoonglaive_green.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon"
	],
	"prerequisites": [],

	"description":	"Throw a chakram to the target location that deals $V1 Physical damage to all enemies on its path. The charkram will return to the caster, damaging any enemies again.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.355
			]
		}
	],

	"isAbility":	true,
	"cost":	35,
	"resource":	"focus",
	"range":	25,
	"cooldown":	24,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"serrated_edge":
{
	"name":	"Serrated Edge",
	"icon":	"inv_misc_sawblade_01_red.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"chakram",
	],
	
	"description":	"When Chakram passes through an enemy, they will Bleed for $V1 Physical damage over 5 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.04,
				0.08
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bolas":
{
	"name":	"Bolas",
	"icon":	"ability_bolas.jpg",
	"spec":	3,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"Throw bolas which wrap around the enemy, Immobilizing it for $V1 seconds.",
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
	"cost":	30,
	"resource":	"focus",
	"range":	"8-25",
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"trip":
{
	"name":	"Trip",
	"icon":	"ability_entangle.jpg",
	"spec":	3,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"bolas"
	],

	"description":	"Bolas will Stun the enemy for $V1 seconds for every 10 movement speed the target is moving at.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.1,
				0.2
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bestial_swiftness":
{
	"name":	"Bestial Swiftness",
	"icon":	"ability_druid_dash.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the movement speed of your pets by $V1%",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"scavenger":
{
	"name":	"Scavenger",
	"icon":	"ability_hunter_pet_vulture.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your pet heals for $V1% of its maximum health over 7 seconds after you kill an enemy that grants experience or honor.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_aspect_of_the_monkey":
{
	"name":	"Improved Aspect of the Monkey",
	"icon":	"ability_hunter_aspectofthemonkey.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Aspect of the Monkey provides an additional $V1% Dodge chance.",
	"values":	[
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"endurance_training":
{
	"name":	"Endurance Training",
	"icon":	"spell_nature_reincarnation.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the maximum health of your pets by $V1%.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"kill_command":
{
	"name":	"Kill Command",
	"icon":	"ability_hunter_killcommand.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Command your pet to kill, dealing $V1 Physical damage to the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.27
			]
		}
	],

	"isAbility":	true,
	"cost":	15,
	"resource":	"focus",
	"range":	30,
	"cooldown":	8,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"barbed_shot":
{
	"name":	"Barbed Shot",
	"icon":	"ability_hunter_barbedshot.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Ranged Weapon"
	],
	"prerequisites": [],

	"description":	"A barbed arrow that deals $V1 Physical damage and causes the target to Bleed for an additional $V2 Physical damage over $V3 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.234
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.17
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
	"cost":	25,
	"resource":	"focus",
	"range":	30,
	"cooldown":	12,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"unleashed_fury":
{
	"name":	"Unleashed Fury",
	"icon":	"ability_hunter_beastmastery.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Attack Power of your pets by $V1%.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"savagery":
{
	"name":	"Savagery",
	"icon":	"ability_druid_rake.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"kill_command"
	],

	"description":	"Kill Command reduces the cooldown of your pet's abilities by $V1 seconds.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rupture":
{
	"name":	"Rupture",
	"icon":	"ability_warrior_bloodsurge.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"barbed_shot",
	],

	"description":	"Every 5 yards the target moves has a $V1% chance to increase the duration of Barbed Shot by 1 second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				30,
				60
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"snake_trap":
{
	"name":	"Snake Trap",
	"icon":	"ability_hunter_snaketrap.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Place a Trap that will trigger when an enemy steps on it, releasing 5 snakes that attack the enemy for 10 seconds. Each snake deals $V1 damage and attacks once per second.\n\nSnakes can be killed and have maximum health equal to 20% of the Hunter's maximum health.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.04
			]
		}
	],

	"isAbility":	true,
	"cost":	35,
	"resource":	"focus",
	"range":	0,
	"cooldown":	60,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"mending":
{
	"name":	"Mending",
	"icon":	"spell_nature_healingtouch.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Mend Pet restores an additional $V1% of your pet's maximum health per second and will remove $V2 Poison or Disease $V3 when it ends.\n\nReduce the cast time and Focus cost of Revive Pet by $V4%.",
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
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
				3
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				"effect",
				"effects",
				"effects"
			]
		},
		{
			"name":	"$V4",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				40,
				60
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"in_for_the_kill":
{
	"name":	"In for the Kill",
	"icon":	"ability_hunter_sickem.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"kill_command",
	],

	"description":	"Kill Command will consume up to $V1 of your pet's Focus to deal an additional 1% damage for each point of Focus consumed.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				15,
				30
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"scent_of_blood":
{
	"name":	"Scent of Blood",
	"icon":	"ability_druid_challangingroar.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"barbed_shot",
	],

	"description":	"Barbed Shot increases your pet's Focus regeneration by $V1% while the target is Bleeding.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				15,
				30
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"resilience":
{
	"name":	"Resilience",
	"icon":	"spell_holy_blessingofagility.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the duration of Stun, Fear, Slow, and Incapacitate effects on your pet by $V1%.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"protector":
{
	"name":	"Protector",
	"icon":	"ability_druid_kingofthejungle.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every $V1% of your maximum health you take as damage increases your pet's Critical Hit chance by $V2%. Lasts 5 seconds. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				5,
				5
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1.5,
				3,
				4.5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"primal_instincts":
{
	"name":	"Primal Instincts",
	"icon":	"ability_hunter_pet_assist.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of your Aspects by $V1%.",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"knockdown":
{
	"name":	"Knockdown",
	"icon":	"spell_druid_feralchargecat.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your pet knocks down the enemy, Stunning it for $V1 seconds.",
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
	"cost":	30,
	"resource":	"focus",
	"range":	30,
	"cooldown":	45,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"the_beast_within":
{
	"name":	"The Beast Within",
	"icon":	"ability_hunter_beastwithin.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"bestial_wrath",
	],

	"description":	"Bestial Wrath increases your Attack Power and Haste by $V1%, and Focus regeneration by $V2% for its duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				15,
				30
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bestial_wrath":
{
	"name":	"Bestial Wrath",
	"icon":	"ability_druid_ferociousbite.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Send your pet into a bestial wrath, increasing its Attack Power and Haste by $V1% for $V2 seconds.",
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
				8
			]
		}
	],

	"isAbility":	true,
	"cost":	35,
	"resource":	"focus",
	"range":	30,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"frenzied_rage":
{
	"name":	"Frenzied Rage",
	"icon":	"ability_hunter_masterscall.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"bestial_wrath",
	],

	"description":	"Bestial Wrath reduces the duration of Fear and Incapacitate effects on your pet by $V1% and prevents your pet from being slowed below $V2% of its normal movement speed.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				50,
				100
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				75,
				100
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"prey_on_the_weak":
{
	"name":	"Prey on the Weak",
	"icon":	"ability_hunter_goforthethroat.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"knockdown",
	],

	"description":	"Increase your pet's Haste by $V1% against enemies affected by Knockdown.",
	"values":	[
		{
			"name":	"$V1",
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
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_aspect_of_the_hawk":
{
	"name":	"Improved Aspect of the Hawk",
	"icon":	"spell_nature_ravenform.jpg",
	"spec":	5,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"The Haste and Attack Power bonus provided by Aspect of the Hawk increases by $V1% for every second you are not moving.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.5,
				1
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"focus",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
}