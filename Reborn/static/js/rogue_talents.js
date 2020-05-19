var rogue_talents =
{
"unsuspecting_victim":
{
	"name":	"Unsuspecting Victim",
	"icon":	"ability_rogue_surpriseattack.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your chance to apply Poisons by $V1% for 4 seconds after coming out of Stealth.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				8,
				16,
				24,
				32,
				40
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"malice":
{
	"name":	"Malice",
	"icon":	"ability_rogue_masterofsubtlety.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Critical Hit chance by $V1% against enemies affected your Poisons.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"enduring_toxins":
{
	"name":	"Enduring Toxins",
	"icon":	"spell_nature_poisoncleansingtotem.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the chance your Poisons are cleansed from the target by $V1%.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"venomous_wounds":
{
	"name":	"Venomous Wounds",
	"icon":	"ability_rogue_venomouswounds.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies affected by your Garrote or Rupture take $V1% more damage from your Poisons.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"deadly_poison":
{
	"name":	"Deadly Poison",
	"icon":	"ability_rogue_dualweild.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Coat the selected weapon with Deadly Poison. Melee attacks with that weapon have a 25% chance to deal $V1 Nature damage over $V2 seconds. Maximum 5 stacks.\n\nA weapon can only have 1 Poison applied to it. Lasts 1 hour.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Nature",
			"rank":	[
				0.13
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
	"cost":	0.0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	3,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shiv":
{
	"name":	"Shiv",
	"icon":	"ability_rogue_disembowel.jpg",
	"spec":	0,
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

	"description":	"A quick strike that deals $V1 Physical damage to an enemy and applies the Poison from your offhand weapon. Awards one combo point.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.215
			]
		}
	],

	"isAbility":	true,
	"cost":	35.0,
	"resource":	"energy",
	"range":	"melee",
	"cooldown":	8,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"seal_fate":
{
	"name":	"Seal Fate",
	"icon":	"spell_shadow_chilltouch.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your Critical Hits with abilities that generate combo points have a $V1% chance to add an additional combo point to the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30,
				40
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"deadly_poison_duration":
{
	"name":	"Deadly Poison Duration",
	"icon":	"spell_nature_protectionformnature.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"deadly_poison",
	],

	"description":	"Applying Instant, Wound, Cripping, or Mind-Numbing Poison to an enemy has a $V1% chance to increase the duration of Deadly Poison by 1 second.\n\nDeadly Poison's duration cannot exceed 12 seconds.",
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
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1.5,
				3.0
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"concoction":
{
	"name":	"Concoction",
	"icon":	"inv_weapon_shortblade_62.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shiv",
	],

	"description":	"Increase the Critical Hit chance of Shiv by $V1% for each of your Poisons on the enemy.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"piercing_strikes":
{
	"name":	"Piercing Strikes",
	"icon":	"inv_archaeology_orcclans_tattooknife.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your melee attacks are $V1% more likely to apply Poison.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"envenom":
{
	"name":	"Envenom",
	"icon":	"ability_rogue_deadlybrew.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon"
	],
	"prerequisites": [],

	"description":	"Drive your weapons into the enemy, dealing $V1 Physical damage and applying a unique effect based on the Poison on your mainhand weapon. Generates 2 combo points.\n\nInstant: Increase your chance to apply Instant Poison by 25% for 6 seconds.\n\nCrippling: Immobilize the target for 2 seconds.\n\nWound: Prevent the next $V2 healing the target receives. Lasts 5 seconds.\n\nMind-Numbing: Silence the target for 2 seconds.\n\nDeadly: The target takes 8% more damage from your Poisons 5 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.36
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.60
			]
		}
	],

	"isAbility":	true,
	"cost":	45.0,
	"resource":	"energy",
	"range":	"melee",
	"cooldown":	12,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"overdose":
{
	"name":	"Overdose",
	"icon":	"inv_potion_19.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reapplying Crippling, Wound, or Mind-Numbing Poison to an enemy already affected by it will deal $V1% of your Instant Poison damage to the target.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"immediate_action":
{
	"name":	"Immediate Action",
	"icon":	"ability_bossdarkvindicator_auraofcontempt.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"deadly_poison",
	],

	"description":	"Each combo point consumed by Eviscerate has a $V1% chance to consume a stack of Deadly Poison, instantly dealing 60% of its remaining damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				17,
				34,
				50,
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"lethality":
{
	"name":	"Lethality",
	"icon":	"ability_deathknight_roilingblood_green.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Instant Poison and Deadly Poison can Critically Hit for $V1% bonus damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				17,
				34,
				50
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"toxicologist":
{
	"name":	"Toxicologist",
	"icon":	"ability_creature_poison_06.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the potency of your Poisons.\n\nInstant: Increase damage dealt by $V1%.\n\nCrippling: Reduce movement speed by $V2%.\n\nWound: Reduce healing received by $V3%.\n\nMind-Numbing: Slow casting speed by $V4%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8,
				12,
				16
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15,
				20
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				5,
				10,
				15,
				20
			]
		},
		{
			"name":	"$V4",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2.5,
				5,
				7.5,
				10
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"envenom_offhand":
{
	"name":	"Envenom Offhand",
	"icon":	"ability_warrior_weaponmastery_green.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"envenom",
	],

	"description":	"Envenom has a $V1% chance to also apply the unique effect based on the Poison on your offhand weapon. Multiple instances of the same effect stack.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"strangulate":
{
	"name":	"Strangulate",
	"icon":	"ability_blackhand_marked4death.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Garrote Silences the target for $V1 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blinding_smoke":
{
	"name":	"Blinding Smoke",
	"icon":	"ability_monk_vivify.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"smoke_bomb",
	],

	"description":	"Enemies affected by your Smoke Bomb are $V1% more likely to miss attacks and spells.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"smoke_bomb":
{
	"name":	"Smoke Bomb",
	"icon":	"ability_rogue_smoke.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Create a cloud of smoke at the target location, preventing enemies within $V1 yards of targeting into or out of the smoke cloud. Lasts $V2 seconds.",
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
				4
			]
		}
	],

	"isAbility":	true,
	"cost":	30.0,
	"resource":	"energy",
	"range":	15,
	"cooldown":	240,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"suffocation":
{
	"name":	"Suffocation",
	"icon":	"ability_monk_renewingmists.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"smoke_bomb",
	],

	"description":	"Enemies affected by your Smoke Bomb are Silenced for $V1 seconds.\n\nEach enemy can only be Silenced by this effect once per Smoke Bomb.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"knock_out":
{
	"name":	"Knock Out",
	"icon":	"ability_warrior_bloodfrenzy.jpg",
	"spec":	1,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],
	
	"description":	"Gouge will not break from the first $V1 damage taken from your Deadly Poison, Rupture, or Garrote damage over time effects.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_garrote":
{
	"name":	"Improved Garrote",
	"icon":	"ability_rogue_garrote.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Garrote by $V1 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"puncture":
{
	"name":	"Puncture",
	"icon":	"ability_warrior_shieldbreak.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Rupture reduces the target's armor by $V1 for its duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.19,
				0.38,
				0.57,
				0.76,
				0.95
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"recuperate":
{
	"name":	"Recuperate",
	"icon":	"ability_rogue_bloodyeye.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each combo point you consume has a $V1% chance to restore 2 Energy.",
	"values":	[
		{
			"name":	"$V1",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"mercenary":
{
	"name":	"Mercenary",
	"icon":	"inv_sword_19.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your attacks with Swords and Fist-Weapons have a $V1% chance to generate 3 energy.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				8,
				16,
				24,
				32,
				40
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"slice_and_dice":
{
	"name":	"Slice and Dice",
	"icon":	"ability_rogue_slicedice.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Consume all combo points on the target to increase your Haste by $V1%. Lasts $V2 seconds per combo point.",
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
				3
			]
		}
	],

	"isAbility":	true,
	"cost":	15.,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"evisceration":
{
	"name":	"Evisceration",
	"icon":	"ability_rogue_eviscerate.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Eviscerate deals $V1% additional damage against enemies affected by Garrote or Rupture.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hemorrhage":
{
	"name":	"Hemorrhage",
	"icon":	"spell_shadow_lifedrain.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each combo point consumed by Eviscerate or Rupture has a $V1% chance to extend the duration of Garrote on the target by 1 second.\n\nGarrote's duration cannot exceed its original duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				25,
				50,
				75
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"mutilate":
{
	"name":	"Mutilate",
	"icon":	"ability_warrior_challange.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon"
	],
	"prerequisites": [],

	"description":	"Strike with both weapons, dealing Weapon Damage from each plus $V1 Physical damage. Awards 2 combo points.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.11
			]
		}
	],

	"isAbility":	true,
	"cost":	60.0,
	"resource":	"energy",
	"range":	"melee",
	"cooldown":	10,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"onslaught":
{
	"name":	"Onslaught",
	"icon":	"ability_ironmaidens_bladerush.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"slice_and_dice",
	],

	"description":	"Each combo point you consume while Slice and Dice is active has a $V1% chance to increase its duration by 1 second.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"quick_reflexes":
{
	"name":	"Quick Reflexes",
	"icon":	"spell_magic_lesserinvisibilty.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Dodge chance by $V1% and reduce the chance ranged attacks will hit you by $V2% of your Dodge chance.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
				6
			]
		},
		{
			"name":	"$V2",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rebalance":
{
	"name":	"Rebalance",
	"icon":	"ability_warrior_punishingblow.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the attack speed of your next 2 auto attacks by $V1% after an enemy Dodges or Parries one of your attacks.\n\nThis effect cannot occur more than once every 2 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"sever":
{
	"name":	"Sever",
	"icon":	"warrior_talent_icon_ravager.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"mutilate",
	],

	"description":	"Mutilate reduces the target's chance to hit with melee attacks by $V1% for 2 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"sidestep":
{
	"name":	"Side Step",
	"icon":	"ability_rogue_cheatdeath.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Dodging or Parrying an incoming attack has a $V1% chance to add a combo point to the attacker.\n\nThis effect can not occur on the same target more than once per second.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_gouge":
{
	"name":	"Improved Gouge",
	"icon":	"ability_gouge.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duation of Gouge by $V1 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"restless_blades":
{
	"name":	"Restless Blades",
	"icon":	"ability_rogue_restlessblades.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the chance the enemy will Parry your attacks by $V1% of your Haste.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"vault":
{
	"name":	"Vault",
	"icon":	"ability_rogue_quickrecovery.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Leap to the target location, dodging any incoming ranged attacks or spells.",
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
	"cost":	25.0,
	"resource":	"energy",
	"range":	"6-12",
	"cooldown":	17,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"rhythm":
{
	"name":	"Rhythm",
	"icon":	"ability_rogue_waylay.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every ability you use increases your Haste and Dodge chance by 1% for $V1 seconds. Maximum 15 stacks. Stacks refresh independently.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blade_dance":
{
	"name":	"Blade Dance",
	"icon":	"spell_shadow_shadowward.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each attack you Dodge during Evasion increases the Critical Hit chance of your next ability by $V1%.\n\nReduce the cooldown of Evasion by $V2 seconds.",
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
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				30,
				60,
				90
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"adrenaline_rush":
{
	"name":	"Adrenaline Rush",
	"icon":	"spell_shadow_spectralsight.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Energy regeneration by $V1% and Haste by $V2% for 8 seconds.",
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
				20
			]
		}
	],

	"isAbility":	true,
	"cost":	0.0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"velocity":
{
	"name":	"Velocity",
	"icon":	"rogue_burstofspeed.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"vault",
	],

	"description":	"Vault increases your movement speed by $V1% for 3 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"impetus":
{
	"name":	"Impetus",
	"icon":	"ability_arakkoa_spinning_blade.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"blade_tempest",
	],
	
	"description":	"Blade Tempest deals an additional $V1% damage for every yard you have travelled in the past 2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blade_tempest":
{
	"name":	"Blade Tempest",
	"icon":	"ability_rogue_murderspree.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Rush to the target location, dealing $V1 Physical damage to all enemies on your path.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Physical",
			"rank":	[
				0.41
			]
		}
	],

	"isAbility":	true,
	"cost":	45.0,
	"resource":	"energy",
	"range":	"8",
	"cooldown":	45,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"alacrity":
{
	"name":	"Alacrity",
	"icon":	"ability_paladin_speedoflight.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"blade_tempest",
	],
	
	"description":	"Reduce the cooldown of Blade Tempest by $V1 seconds for every 10 yards you travel.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				1,
				2,
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"vigor":
{
	"name":	"Vigor",
	"icon":	"sha_ability_rogue_sturdyrecuperate.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"adrenaline_rush",
	],

	"description":	"Adrenaline Rush increases your maximum Energy by $V1.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_kick":
{
	"name":	"Improved Kick",
	"icon":	"ability_kick.jpg",
	"spec":	3,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Kick Silences the target for $V1 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"escape_artist":
{
	"name":	"Escape Artist",
	"icon":	"ability_rogue_trip.jpg",
	"spec":	3,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Sprint has a $V1% chance to remove all Slow and Immobilizing effects from the caster.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hidden_blades":
{
	"name":	"Hidden Blades",
	"icon":	"trade_archaeology_silverdagger.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the Energy cost of your Sinister Strike, Eviscerate, and Backstab by $V1% while you have Daggers equipped.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"initiative":
{
	"name":	"Initiative",
	"icon":	"spell_shadow_fumble.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Ambush, Garrote, and Cheap Shot have a $V1% chance to generate an additional combo point.",
	"values":	[
		{
			"name":	"$V1",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"from_the_shadows":
{
	"name":	"From the Shadows",
	"icon":	"ability_rogue_focusedattacks.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage you deal while Stealthed by $V1%.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"seize_the_advantage":
{
	"name":	"Seize the Advantage",
	"icon":	"ability_ambush.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Haste and Energy regeneration by $V1% for 5 seconds after coming out of stealth.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blindside":
{
	"name":	"Blindside",
	"icon":	"ability_rogue_ambush.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of Ambush by $V1%.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"premeditation":
{
	"name":	"Premeditation",
	"icon":	"spell_shadow_possession.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [
		"Stealth"
	],
	"prerequisites": [],

	"description":	"Add 2 combo points to an enemy. The combo points are lost after $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
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
	"range":	15,
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_cheap_shot":
{
	"name":	"Improved Cheap Shot",
	"icon":	"ability_cheapshot.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the Energy cost of Cheap Shot by $V1.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"sapper":
{
	"name":	"Sapper",
	"icon":	"ability_sap.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Sap by $V1% and reduce its Energy cost by $V2.",
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
		},
		{
			"name":	"$V2",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"concealment":
{
	"name":	"Concealment",
	"icon":	"ability_rogue_envelopingshadows.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the damage you take from area of effect attacks by $V1%.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"expose_weakness":
{
	"name":	"Expose Weakness",
	"icon":	"ability_rogue_deadliness.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"premeditation",
	],

	"description":	"The target of your Premeditation takes $V1% more damage from your next Ambush or Garrote.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				7,
				14
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"enveloping_shadows":
{
	"name":	"Enveloping Shadows",
	"icon":	"spell_shadow_shadesofdarkness.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemy spells and ranged attacks have a $V1% reduced chance to hit you for every 10 yards between you and the attacker.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"darkness":
{
	"name":	"Darkness",
	"icon":	"spell_warlock_demonsoul.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each ability you use generates a charge of Darkness, adding 2% bonus Shadow damage to all Physical damage you deal. Lasts $V1 seconds.\n\nMaximum 5 charges. Every 8% of your maximum health you take as damage will remove one charge.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4,
				8,
				12,
				16
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"master_of_deception":
{
	"name":	"Master of Deception",
	"icon":	"spell_shadow_charm.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,
	
	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Stealth by $V1 seconds and the range at which enemies can detect you while Stealthed by $V2%.",
	"values":	[
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
			"name":	"$V2",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"dirty_deeds":
{
	"name":	"Dirty Deeds",
	"icon":	"spell_shadow_mindsteal.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the range of Blind by $V1 yards and reduce its cooldown by $V2 seconds.",
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
				30,
				60
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shadowstep":
{
	"name":	"Shadowstep",
	"icon":	"ability_rogue_shadowstep.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Step through the shadows to appear behind your target. Does not break Stealth.",
	"values":	[],

	"isAbility":	true,
	"cost":	20.0,
	"resource":	"energy",
	"range":	20,
	"cooldown":	24,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shadow_blade":
{
	"name":	"Shadow Blade",
	"icon":	"inv_knife_1h_grimbatolraid_d_03.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [
		"Melee Weapon"
	],
	"prerequisites": [
		"darkness",
	],

	"description":	"Consume 3 charges of Darkness to strike the target for $V1 Shadow damage. Awards 1 combo point.\n\nShadow Blade does not generate Darkness.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Shadow",
			"rank":	[
				0.27
			]
		}
	],

	"isAbility":	true,
	"cost":	35.0,
	"resource":	"energy",
	"range":	"melee",
	"cooldown":	4.5,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blackout":
{
	"name":	"Blackout",
	"icon":	"ability_priest_voidentropy.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"darkness",
	],

	"description":	"Gain $V1 charges of Darkness when you enter Stealth.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"demise":
{
	"name":	"Demise",
	"icon":	"ability_creature_cursed_05.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your attacks deal an additional $V1 Shadow damage to targets above 75% health.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Shadow",
			"rank":	[
				0.01,
				0.02,
				0.03
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"void_energy":
{
	"name":	"Void Energy",
	"icon":	"spell_rogue_shadow_reflection.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shadowstep",
	],

	"description":	"Shadowstep adds $V1 Shadow damage to your next Ambush, Backstab, or Eviscerate.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Attack",
			"damageType":	"Shadow",
			"rank":	[
				0.09,
				0.18
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"streamline":
{
	"name":	"Streamline",
	"icon":	"ability_rogue_vigor.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shadow_dance",
	],

	"description":	"Reduce the Energy cost of your abilities by $V1% while in Shadow Dance.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shadow_dance":
{
	"name":	"Shadow Dance",
	"icon":	"ability_rogue_shadowdance.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Allows the use of all Stealth abilities and grants all the combat benefits of Stealth for $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4.5
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
	"requiredLevel":	0
},
"ethereal":
{
	"name":	"Ethereal",
	"icon":	"ability_shaman_astralshift_purple.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,
	
	"requirements": [],
	"prerequisites": [
		"shadow_dance",
	],

	"description":	"While in Shadow Dance, enemies cannot target you with spells or abilities if they are $V1 yards away or further.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				25,
				15
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"outnumbered":
{
	"name":	"Outnumbered",
	"icon":	"spell_mage_evanesce.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"If two or more enemies come within 10 yards of you, the cooldown of Vanish is reset.\n\nThis effect can not occur more than once every $V1 minutes. Effect will only trigger if Vanish is on cooldown.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				5
			]
		}
	],

	"isAbility":	false,
	"cost":	0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"camouflage":
{
	"name":	"Camouflage",
	"icon":	"ability_rogue_surpriseattack2.jpg",
	"spec":	5,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the movement speed penalty of Stealth by $V1%.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"kidney_shot_duration":
{
	"name":	"Kidney Shot Duration",
	"icon":	"ability_rogue_kidneyshot.jpg",
	"spec":	5,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Kidney Shot by $V1 seconds.",
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
	"resource":	"energy",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"cloak_of_shadows":
{
	"name":	"Cloak of Shadows",
	"icon":	"spell_shadow_nethercloak.jpg",
	"spec":	5,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Instantly remove all harmful magic effects. For the next $V1 seconds the application of magical harmful effects are prevented and all magical damage taken is reduced by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				4
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				75
			]
		}
	],

	"isAbility":	true,
	"cost":	25.0,
	"resource":	"energy",
	"range":	0,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
}