var warrior_talents = {
"relentless_strikes":
{
	"name":	"Relentless Strikes",
	"icon":	"inv_glaive_1h_artifactaldrochi_d_02dual.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Attack Speed by $V1% while Dual Wielding.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"deep_bleeding":
{
	"name":	"Deep Bleeding",
	"icon":	"spell_druid_bloodythrash.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"When Rend deals damage you have a 20% chance to generate $V1 Rage.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rampage":
{
	"name":	"Rampage",
	"icon":	"ability_warrior_rampage.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Killing an enemy generates $V1 Rage if it grants experience, or $V2 Rage if it grants Honor.",
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
				15,
				30,
				45,
				60,
				75
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
"intensity":
{
	"name":	"Intensity",
	"icon":	"ability_warrior_titansgrip.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your weapon strikes with One-handed Weapons have a $V1% chance to generate 5 extra Rage.",
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
				25,
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
"bloodthirst":
{
	"name":	"Bloodthirst",
	"icon":	"ability_hunter_mongoosebite.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Mainhand Weapon",
		"Off-hand Weapon"
	],
	"prerequisites": [],

	"description":	"Attack an enemy for 60% Weapon Damage from each weapon and increase your Attack Speed by 15% for 3 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.34
			]
		}
	],

	"isAbility":	true,
	"cost":	25.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	7,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"whirlwind":
{
	"name":	"Whirlwind",
	"icon":	"ability_whirlwind.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon",
		"Battle Stance, Berserker Stance"
	],
	"prerequisites": [],

	"description":	"Unleash a whirlwind of steel, striking up to 4 enemies within 5 yards for $V1 Physical damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.39
			]
		}
	],

	"isAbility":	true,
	"cost":	45.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	10,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"fight_to_the_death":
{
	"name":	"Fight to the Death",
	"icon":	"ability_warrior_endlessrage.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Being reduced below 25% of your maximum health increases your Attack Power by $V1% for $V2 seconds.\n\nThis effect cannot occur more than once every 60 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				5,
				5
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
"sudden_death":
{
	"name":	"Sudden Death",
	"icon":	"ability_warrior_improveddisciplines.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your Critical Hits on the target have a $V1% chance to allow you to use Execute, regardless of the target's current health.\n\nThis effect cannot occur more than once every 6 seconds.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"ruthless":
{
	"name":	"Ruthless",
	"icon":	"ability_deathwing_bloodcorruption_death.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"bloodthirst"
	],

	"description":	"Increase the duration of Bloodthirst by $V1 seconds for every 20% of maximum health the target is missing.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"flurry_of_steel":
{
	"name":	"Flurry of Steel",
	"icon":	"spell_warrior_sharpenblade_red.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"whirlwind",
	],

	"description":	"If Whirlwind only hits one enemy, its Critical Hit chance is increased by $V1%. This effect is reduced by $V2% for each additional enemy hit.",
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
		},
		{
			"name":	"$V2",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"killing_field":
{
	"name":	"Killing Field",
	"icon":	"ability_hunter_rapidkilling.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"If Execute kills the target, its cooldown is reduced by $V1%. ",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"enrage":
{
	"name":	"Enrage",
	"icon":	"ability_warrior_enrage.jpg",
	"spec":	0,
	"specTier": 4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every 25 Rage you gain generates a charge of Enrage, increasing your Haste by $V1%.\n\nMaximum 5 charges. Lasts 10 seconds.",
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
"second_wind":
{
	"name":	"Second Wind",
	"icon":	"ability_warrior_dragonroar.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Being affected by a Fear, Charm, Sleep, or Incapacitate effect reduces the cooldown of Berserker Rage by $V1 seconds.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"warcry":
{
	"name":	"Warcry",
	"icon":	"ability_warrior_battleshout.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Battleshout increases the Critical Hit chance of allies by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"aggravation":
{
	"name":	"Aggravation",
	"icon":	"ability_hunter_harass.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Being affected by a Slow, Immobilize, or Stun effect causes you to gain $V1 Rage over 4 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				6,
				12,
				18
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
"blood_frenzy":
{
	"name":	"Blood Frenzy",
	"icon":	"ability_warrior_bloodfrenzy.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each enemy within 10 yards that is below 35% health causes you to generate $V1 Rage per second, up to $V2 Rage per second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"raging_blow":
{
	"name":	"Raging Blow",
	"icon":	"warrior_wild_strike.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	true,

	"requirements": [
		"Melee Weapon",
		"Berserker Stance"
	],
	"prerequisites": [
		"enrage",
	],

	"description":	"Viciously strike an enemy, dealing $V1 Physical damage and increasing the chance they are Critically Hit by your attacks by $V2% for each charge of Enrage you have. Lasts 4 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.54
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2
			]
		}
	],

	"isAbility":	true,
	"cost":	40.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	11,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"endless_fury":
{
	"name":	"Endless Fury",
	"icon":	"warrior_talent_icon_angermanagement.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"While at maximum Rage, every 10 points of Rage you would have gained increases the damage of your next Execute, Whirlwind, or Raging Blow by $V1%, up to $V2% maximum.",
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
				10,
				20
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
"skirmisher":
{
	"name":	"Skirmisher",
	"icon":	"warrior_skullbanner.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each enemy in range of your Intercept causes its cooldown to refresh $V1% faster, up to $V2% maximum.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"battle_trance":
{
	"name":	"Battle Trance",
	"icon":	"ability_warrior_focusedrage.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,
	
	"requirements": [],
	"prerequisites": [
		"unbridled_wrath"
	],

	"description":	"Reduce the duration of all crowd control effects on you by $V1% during Unbridled Wrath.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				35,
				70
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
"unbridled_wrath":
{
	"name":	"Unbridled Wrath",
	"icon":	"ability_warrior_innerrage.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Berserker Stance"
	],
	"prerequisites": [],

	"description":	"Consume 15 Rage per second to increase your Critical Hit chance by $V1%. Lasts $V2 seconds or until your Rage is exhausted.",
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
	"cost":	0.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hunger_for_blood":
{
	"name":	"Hunger for Blood",
	"icon":	"ability_rogue_hungerforblood.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"unbridled_wrath",
	],

	"description":	"Every 100 Rage you spend reduces the cooldown of Unbridled Wrath by $V1 seconds.",
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
"anger_management":
{
	"name":	"Anger Management",
	"icon":	"warrior_talent_icon_furyintheblood.jpg", 
	"spec":	1,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"While in combat, generate $V1 Rage every 3 seconds.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"warbringer":
{
	"name":	"Warbringer",
	"icon":	"ability_warrior_warbringer.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Charge by $V1 seconds.",
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
"deep_wounds":
{
	"name":	"Deep Wounds",
	"icon":	"ability_backstab.jpg",
	"spec":	1,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your attacks cause the enemy to Bleed for $V1% of your weapon damage as Physical damage over 8 seconds.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_heroic_strike":
{
	"name":	"Improved Heroic Strike",
	"icon":	"ability_rogue_ambush.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage dealt by Heroic Strike by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"soldier":
{
	"name":	"Soldier",
	"icon":	"inv_sword_1h_artifactskywall_d_06.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your attacks with Two-Hand Weapons generate additional Rage equal to $V1% of your Weapon Speed.",
	"values":	[
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				40,
				80,
				120,
				160,
				200
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
"war_of_attrition":
{
	"name":	"War of Attrition",
	"icon":	"ability_warrior_bullrush.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every 8 seconds you spend in combat increase all Rage you generate by $V1%, up to $V2% maximum.\n\nEffect is lost if you are out of combat for more than 4 seconds.",
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
		},
		{
			"name":	"$V2",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"precision":
{
	"name":	"Precision",
	"icon":	"ability_rogue_waylay.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the chance an enemy will Dodge or Parry your attacks by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"overpower":
{
	"name":	"Overpower",
	"icon":	"ability_warrior_weaponmastery.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon",
		"Battle Stance"
	],
	"prerequisites": [],

	"description":	"A precision strike on an enemy, dealing $V1 Physical damage. Overpower cannot be Blocked, Dodged, or Parried.\n\nOnly usable after you Dodge or Parry an incoming attack.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.40
			]
		}
	],

	"isAbility":	true,
	"cost":	15.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	7,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"slam":
{
	"name":	"Slam",
	"icon":	"inv_mace_2h_draenorguard_b_01_horde.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Two-Hand Weapon"
	],
	"prerequisites": [],

	"description":	"Slam an enemy, dealing 150% Weapon Damage.\n\nSlam's Rage cost and cooldown are based on your Weapon Speed.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.51
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
	"cost":	25.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	11,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"great_cleave":
{
	"name":	"Great Cleave",
	"icon":	"ability_warrior_cleave.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Cleave has a $V1% chance to hit an additional enemy and its range is increased by $V2 yards.",
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
				1,
				2
			]
		},
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
"combatant":
{
	"name":	"Combatant",
	"icon":	"ability_parry.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Generate $V1 Rage when you Parry an attack.",
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
"impact":
{
	"name":	"Impact",
	"icon":	"ability_sap.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"slam",
	],

	"description":	"Slam has a $V1% chance to Stun the enemy for 1.5 to 3 seconds, based on your Weapon Speed.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"duelist":
{
	"name":	"Duelist",
	"icon":	"inv_tabard_duelersguild.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"overpower",
	],

	"description":	"Each enemy attack you Parry or Dodge increases the damage dealt by your next Overpower by $V1%, up to $V2% maximum.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8
			]
		},
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				40
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
"mortal_strike":
{
	"name":	"Mortal Strike",
	"icon":	"warrior_talent_icon_ravager.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon",
		"Battle Stance"
	],
	"prerequisites": [],

	"description":	"Mortally wound an enemy, dealing $V1 Physical damage.\n\nThe target Bleeds for $V2 Physical damage per second until they are healed for $V3 health or exit combat.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.517
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.052
			]
		},
		{
			"name":	"$V3",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				2.3
			]
		}
	],

	"isAbility":	true,
	"cost":	35.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	14,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"weapon_expert":
{
	"name":	"Weapon Expert",
	"icon":	"inv_sword_2h_armyoflight_c_01.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your skill with Two-Hand weapons:\n\nSwords: Increase your Haste by $V1%.\n\nAxes: Increase your Critical Hit chance by $V2%.\n\nMaces: Your attacks ignore $V3% of the target's Armor.\n\nPolearms: Increase the range of your Melee attacks and abilities by $V4%.",
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
				2,
				4,
				6
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
				6,
				9
			]
		},
		{
			"name":	"$V4",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				7,
				14,
				21
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
"sweeping_strikes":
{
	"name":	"Sweeping Strikes",
	"icon":	"ability_rogue_slicedice.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [
		"Two-Hand Weapon",
		"Battle Stance"
	],
	"prerequisites": [],

	"description":	"Your next $V1 single target abilities strike an additional nearby enemy. Lasts 6 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2
			]
		}
	],

	"isAbility":	true,
	"cost":	20.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	45,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"finisher":
{
	"name":	"Finisher",
	"icon":	"ability_warrior_unrelentingassault.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"overpower",
	],

	"description":	"Landing 4 attacks on your target will allow you to use Overpower. If one of your attacks is Dodged, Parried, or misses, the count is reset.\n\nThis effect cannot occur more than once every $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				21,
				14,
				7
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
"retaliation":
{
	"name":	"Retaliation",
	"icon":	"ability_warrior_challange.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [
		"Battle Stance"
	],
	"prerequisites": [],

	"description":	"Instantly counterattack any enemy that strikes you in melee range. Attacks made from behind you cannot be counterattacked.\n\nThis effect cannot occur more than twice per second. Lasts $V1 seconds.",
	"values":	[
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
	"cost":	20.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	900,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"master_of_war":
{
	"name":	"Master of War",
	"icon":	"inv_sword_1h_artifactvigfus_d_01.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"While using a Two-Hand Weapon, each unique enemy that attacks you increases your Dodge chance and Parry chance by 2.5% for $V1 seconds.\n\nMaximum 3 stacks. Stacks refresh independently.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"maim":
{
	"name":	"Maim",
	"icon":	"ability_shockwave.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Hamstring has a $V1% chance to immobilize the target for 2 seconds.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"deadly_calm":
{
	"name":	"Deadly Calm",
	"icon":	"achievement_boss_kingymiron.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [
		"Battle Stance"
	],
	"prerequisites": [],

	"description":	"Reduce the Rage cost of your abilities by $V1% for $V2 seconds.",
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
	"cost":	0.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	240,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"immense_reach":
{
	"name":	"Immense Reach",
	"icon":	"ability_warrior_bladestorm.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"sweeping_strikes",
	],

	"description":	"Your single target abilities during Sweeping Strikes have a $V1% chance to hit an additional enemy.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				25,
				50
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
"riposte":
{
	"name":	"Riposte",
	"icon":	"ability_warrior_sunder.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"retaliation",
	],

	"description":	"Reduce the cooldown of Retaliation by $V1 seconds when you Parry an attack.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shattered_defenses":
{
	"name":	"Shattered Defenses",
	"icon":	"ability_warrior_colossussmash.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"colossus_smash"
	],

	"description":	"Colossus Smash reduces the target's Parry, Dodge, and Block chance by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"colossus_smash":
{
	"name":	"Colossus Smash",
	"icon":	"ability_warrior_shieldbreak.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Two-Hand Weapon",
		"Battle Stance"
	],
	"prerequisites": [],

	"description":	"Break the enemy's defenses, dealing $V1 Physical damage and allowing your attacks to bypass $V2% of their Armor for 5 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.65
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
	"cost":	30.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	26,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"seigebreaker":
{
	"name":	"Seigebreaker",
	"icon":	"inv_mace_101.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"colossus_smash"
	],

	"description":	"Colossus Smash reduces the target's Attack Power by $V1.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"None",
			"rank":	[
				0.15,
				0.30
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
"stance_mastery":
{
	"name":	"Stance Mastery",
	"icon":	"achievement_legionpvptier3.jpg",
	"spec":	3,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of your Battle Stance, Defensive Stance, and Berserker Stance by $V1 seconds.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"armored_to_the_teeth":
{
	"name":	"Armored to the Teeth",
	"icon":	"inv_gauntlets_31.jpg",
	"spec":	3,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Gain $V1 Attack Power for every 300 Armor you have.",
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
"disarm":
{
	"name":	"Disarm",
	"icon":	"ability_warrior_disarm.jpg",
	"spec":	3,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	true,

	"requirements": [
		"Battle Stance, Defensive Stance"
	],
	"prerequisites": [],

	"description":	"Disarm an enemy, preventing the target from using its weapon for $V1 seconds.",
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
	"cost":	10.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"toughness":
{
	"name":	"Toughness",
	"icon":	"spell_nature_unyeildingstamina.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Stamina you gain from equipment by $V1%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1.5,
				3.0,
				4.5,
				6.0,
				7.5
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
"defender":
{
	"name":	"Defender",
	"icon":	"inv_shield_draenorquest_b_01.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Block chance by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"devastation":
{
	"name":	"Devastation",
	"icon":	"ability_warrior_punishingblow.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the amount of Armor reduced by Devastate by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_thunderclap":
{
	"name":	"Improved Thunderclap",
	"icon":	"warrior_talent_icon_bloodandthunder.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the range of Thunderclap by $V1% and its damage dealt by $V2%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shield_block":
{
	"name":	"Shield Block",
	"icon":	"ability_defend.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Shields",
		"Defensive Stance"
	],
	"prerequisites": [],

	"description":	"Increase your Block chance by $V1%. Lasts 5 seconds or until you Block $V2 damage.\n\nAmount of damage prevented increased by Block Value.",
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
			"modifier":	"blockValue",
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
	"cooldown":	10,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"revenge":
{
	"name":	"Revenge",
	"icon":	"ability_warrior_revenge.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon"
	],
	"prerequisites": [],

	"description":	"Slash an enemy for $V1 Physical damage.\n\nOnly usable after taking 15% of your maximum health as damage from enemy attacks and spells.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.48
			]
		}
	],

	"isAbility":	true,
	"cost":	15.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	11,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"juggernaut":
{
	"name":	"Juggernaut",
	"icon":	"spell_magic_magearmor.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the duration of Slow, Stun, Sleep, Immobilize, Fear, and Incapacitate effects on you by $V1%.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"block_specialization":
{
	"name":	"Block Specialization",
	"icon":	"ability_warrior_shieldmastery.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Blocking an attack has a $V1% chance to generate 3 Rage.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hold_the_line":
{
	"name":	"Hold the Line",
	"icon":	"ability_warrior_swordandboard.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shield_block",
	],

	"description":	"If Shield Block prevents it maximum amount of damage you gain $V1 Rage.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"pain_addict":
{
	"name":	"Pain Addict",
	"icon":	"ability_butcher_gushingwounds.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"revenge",
	],

	"description":	"The cooldown of Revenge refreshes $V1% faster for every 5% of your maximum health you're missing.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shield_slam":
{
	"name":	"Shield Slam",
	"icon":	"spell_fire_firearmor.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Shield"
	],
	"prerequisites": [],

	"description":	"Bash an enemy with your shield, dealing $V1 Physical damage.\n\nDamage dealt increased by Block Value.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"blockValue",
			"damageType":	"Physical",
			"rank":	[
				2
			]
		}
	],

	"isAbility":	true,
	"cost":	20.0,
	"resource":	"rage",
	"range":	"melee",
	"cooldown":	7,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"block_mastery":
{
	"name":	"Block Mastery",
	"icon":	"inv_shield_32.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your Blocks have a $V1% chance to Block 40% more damage.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"heavy_hitter":
{
	"name":	"Heavy Hitter",
	"icon":	"ability_warrior_incite.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Heroic Strike will consume up to $V1 additional Rage to deal 2% more damage for each point consumed.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"punishment":
{
	"name":	"Punishment",
	"icon":	"ability_warrior_intensifyrage.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"revenge",
	],

	"description":	"Every 10% of your maximum health you take as damage increases the damage dealt by your next Revenge by $V1%, up to $V2% maximum.\n\nBonus damage lasts 5 seconds. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				40
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
"shield_wall":
{
	"name":	"Shield Wall",
	"icon":	"ability_warrior_shieldwall.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	true,

	"requirements": [
		"Shields",
		"Defensive Stance"
	],
	"prerequisites": [],

	"description":	"Reduce all damage taken by $V1% for 8 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				70
			]
		}
	],

	"isAbility":	true,
	"cost":	0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	1800,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"vanguard":
{
	"name":	"Vanguard",
	"icon":	"inv_shield_58.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"shield_slam",
	],

	"description":	"Increase the Critical Hit chance of Shield Slam by $V1% of your Block chance.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"ignore_pain":
{
	"name":	"Ignore Pain",
	"icon":	"ability_warrior_renewedvigor.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"While at maximum Rage, every 10 points of Rage you would have gained instead reduces all damage taken by $V1% for 4 seconds, up to $V2% maximum. Stacks refresh independently.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"guardian":
{
	"name":	"Guardian",
	"icon":	"ability_warrior_victoryrush.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Intercept's cooldown is reduced by $V1 seconds when targeting an ally.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20
			]
		},
		{
			"name":	"$V2",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"impulse":
{
	"name":	"Impulse",
	"icon":	"ability_socererking_forcenova.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shockwave",
	],

	"description":	"Increase the Stun duration of Shockwave by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.5,
				1.0
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
"shockwave":
{
	"name":	"Shockwave",
	"icon":	"ability_warrior_shockwave.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Send a wave of force outward, increasing in size as it travels. Enemies hit take $V1 Physical damage and are Stunned for $V2 seconds.\n\nShockwave travels 12 yards.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.43
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1.5
			]
		}
	],

	"isAbility":	true,
	"cost":	30.0,
	"resource":	"rage",
	"range":	0,
	"cooldown":	45,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"unstoppable_force":
{
	"name":	"Unstoppable Force",
	"icon":	"warrior_talent_icon_thunderstruck.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shockwave"
	],

	"description":	"Increase the distance travelled by Shockwave by $V1 yards.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"furious_charge":
{
	"name":	"Furious Charge",
	"icon":	"spell_warrior_dragoncharge.jpg",
	"spec":	5,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Charge generates $V1 additional Rage for every 5 yards between you and your target.",
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
	"resource":	"rage",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bloodstained":
{
	"name":	"Bloodstained",
	"icon":	"ability_warrior_bloodsurge.jpg",
	"spec":	5,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Being hit by an enemy attack or spell has a $V1% chance to reduce the cooldown of Bloodrage by 1 second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				20,
				40
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
}
}