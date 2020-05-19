var warlock_talents = {
"improved_shadow_bolt":
{
	"name":	"Improved Shadow Bolt",
	"icon":	"spell_shadow_shadowbolt.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cast time of Shadow Bolt by $V1 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.1,
				0.2,
				0.3,
				0.4,
				0.5
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
"fel_stamina":
{
	"name":	"Fel Stamina",
	"icon":	"inv_summondemonictyrant.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the maximum health of your Demons by $V1%.",
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
"demonfire":
{
	"name":	"Demonfire",
	"icon":	"spell_fire_felpyroblast.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Sacrifice $V1 of your summoned Demon's maximum health each second to deal an equal amount of Fire damage to an enemy.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.21
			]
		}
	],

	"isAbility":	true,
	"cost":	6.45,
	"resource":	"mana",
	"range":	30,
	"cooldown":	13,
	"castTime":	3,
	"isChanneled":	true,
	"requiredLevel":	0
},
"demonic_embrace":
{
	"name":	"Demonic Embrace",
	"icon":	"spell_shadow_metamorphosis.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your maximum health by $V1% but reduce your maximum mana by $V2%.",
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
		},
		{
			"name":	"$V2",
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
"improved_health_funnel":
{
	"name":	"Improved Health Funnel",
	"icon":	"spell_shadow_lifedrain.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Health Funnel transfers its full amount over $V1 fewer seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.5,
				1.0,
				1.5
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
"fel_fury":
{
	"name":	"Fel Fury",
	"icon":	"spell_fire_ragnaros_lavaboltgreen.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"demonfire",
	],

	"description":	"Each time Demonfire deals damage, it has a $V1% chance to hit an additional enemy within 6 yards of the target.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"dreadstalker":
{
	"name":	"Dreadstalker",
	"icon":	"spell_warlock_calldreadstalkers.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Call a Dreadstalker from the nether to attack an enemy. The Dreadstalker attacks every second and deals $V1 Fire damage per attack.\n\nThe Dreadstalker dies after $V2 seconds or attacking $V3 times.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.19
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				14
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				8
			]
		}
	],

	"isAbility":	true,
	"cost":	18.65,
	"resource":	"mana",
	"range":	30,
	"cooldown":	32,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"demon_strength":
{
	"name":	"Demon Strength",
	"icon":	"inv_axe_1h_draenorquest95_b_01.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage dealt by your Demons by $V1%.",
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
"offering":
{
	"name":	"Offering",
	"icon":	"warlock_sacrificial_pact.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Sacrifice your summoned Demon, providing a unique effect based on the Demon sacrificed:\n\nImp: Increase the Critical Hit chance of your Fire spells by $V1%.\n\nVoidwalker: Regenerate $V2% of your maximum health per second.\n\nSuccubus: Increase the Haste of all active Shadow damage over time effects by $V3%.\n\nFelhunter: Increase your resistance to all schools of magic by $V4.\n\nLasts 10 seconds.",
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
				3
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				30
			]
		},
		{
			"name":	"$V4",
			"modifier":	"Spell",
			"damageType":	"None",
			"rank":	[
				0.15
			]
		}
	],

	"isAbility":	true,
	"cost":	19.9,
	"resource":	"mana",
	"range":	0,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"soul_conduit":
{
	"name":	"Soul Conduit",
	"icon":	"spell_shadow_soulleech_2.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Your summoned Demon is healed for $V1% of all health you gain.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"menace":
{
	"name":	"Menace",
	"icon":	"ability_warlock_demonicempowerment.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"dreadstalker",
	],

	"description":	"Increase the movement speed of your Dreadstalkers by $V1%.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_healthstone":
{
	"name":	"Improved Healthstone",
	"icon":	"inv_stone_04.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the amount of health you receive from Healthstones by $V1%.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"soul_link":
{
	"name":	"Soul Link",
	"icon":	"ability_warlock_soullink.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"soul_conduit"
	],

	"description":	"Transfer $V1% of all damage you take to your summoned Demon instead. Lasts until cancelled.",
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
	"cost":	14.4,
	"resource":	"mana",
	"range":	40,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"eternal_servitude":
{
	"name":	"Eternal Servitude",
	"icon":	"spell_shadow_darkritual.jpg",
	"spec":	0,
	"specTier": 5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"When your summoned Demon dies, you have a $V1% chance to gain a Soul Shard.",
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
"commander":
{
	"name":	"Commander",
	"icon":	"spell_shadow_demonicpact.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of your summoned Demon's abilities by $V1%.",
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
"demon_caller":
{
	"name":	"Demon Caller",
	"icon":	"spell_warlock_demonbolt.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cast time and mana cost of Summon Imp, Summon Voidwalker, Summon Succubus, and Summon Felhunter by $V1%",
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
"detonation":
{
	"name":	"Detonation",
	"icon":	"spell_fire_felflamering.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"demonic_empowerment",
	],

	"description":	"If your summoned Demon dies during Demonic Empowerment, it will explode, dealing $V1 Shadow damage to all enemies within $V2 yards.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.72,
				1.44
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				12,
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
"domination":
{
	"name":	"Domination",
	"icon":	"spell_shadow_enslavedemon.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the Haste penalty of Enslave Demon by $V1% and reduce its cast time by $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
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
"demonic_empowerment":
{
	"name":	"Demonic Empowerment",
	"icon":	"spell_warlock_demonicempowerment.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Soul Shard"
	],
	"prerequisites": [],

	"description":	"Pour fel energy into your summoned Demon, increasing its damage, Haste, and movement speed by $V2%. The Demon takes damage equal to $V3% of its maximum health per second. Lasts 8 seconds.",
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
				30
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10
			]
		}
	],

	"isAbility":	true,
	"cost":	21.0,
	"resource":	"mana",
	"range":	30,
	"cooldown":	240,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"willing_sacrifice":
{
	"name":	"Willing Sacrifice",
	"icon":	"ability_creature_disease_05.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"offering",
	],

	"description":	"Increase the duration of Offering by $V1 seconds for every 10% of maximum health your Demon is missing.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"creeping_grasp":
{
	"name":	"Creeping Grasp",
	"icon":	"spell_shadow_shadowfury.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shadow_tendril",
	],

	"description":	"The health and constriction range of your Shadow Tendrils increases by $V1% every 5 seconds after being summoned.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"shadow_tendril":
{
	"name":	"Shadow Tendril",
	"icon":	"inv_misc_herb_fireweed.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"3 Charges"
	],
	"prerequisites": [],

	"description":	"Summon a Shadow Tendril at the target location that lasts for $V1 seconds. The Shadow Tendril will constrict the first enemy that comes within 5 yards, Stunning it for $V2 seconds and destroying the Shadow Tendril.\n\nShadow Tendrils can be killed and have health equal to $V3% of the Warlock's maximum health.",
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
				3
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				60
			]
		}
	],

	"isAbility":	true,
	"cost":	12.1,
	"resource":	"mana",
	"range":	30,
	"cooldown":	120,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"asphixiate":
{
	"name":	"Asphixiate",
	"icon":	"ability_deathknight_asphixiate.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"shadow_tendril",
	],

	"description":	"Enemies Stunned by your Shadow Tendrils take $V1 Shadow damage per second.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.085,
				0.17
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
"soul_harvester":
{
	"name":	"Soul Harvester",
	"icon":	"spell_shadow_ragingscream.jpg",
	"spec":	1,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Killing an enemy that grants experience or honor increases the Vitality and Armor provided by Soul Skin by $V1%. Lasts 24 seconds. Stacks refresh independently.",
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
"demon_tongue":
{
	"name":	"Demon Tongue",
	"icon":	"spell_shadow_curseoftounges.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Curse of Tongues by $V1 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_death_coil":
{
	"name":	"Improved Death Coil",
	"icon":	"spell_shadow_deathcoil.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the healing received by Death Coil by an additional $V1% of the damage dealt.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"spiritburn":
{
	"name":	"Spiritburn",
	"icon":	"spell_fire_twilightflamebreath.jpg",
	"spec":	1,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Sacrifice $V1% of your maximum health to deal Shadow damage to the enemy equal to $V2% of the health sacrificed.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				7
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				125
			]
		}
	],

	"isAbility":	true,
	"cost": 4.9,
	"resource":	"mana",
	"range":	30,
	"cooldown":	14,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"darkness":
{
	"name":	"Darkness",
	"icon":	"ability_demonhunter_darkness.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies hit by your Shadow Bolt take 3% more Shadow damage from your spells. Lasts $V2 seconds. Stacks refresh independently.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"demise":
{
	"name":	"Demise",
	"icon":	"spell_shadow_shadesofdarkness.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Haste of your Corruption, Agony, and Decay by $V1%.",
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
"improved_life_tap":
{
	"name":	"Improved Life Tap",
	"icon":	"spell_shadow_burningspirit.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the amount of mana generated by Life Tap by $V1%.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"nightfall":
{
	"name":	"Nightfall",
	"icon":	"spell_shadow_twilight.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"When Corruption, Agony, or Unstable Affliction deals damage there is a $V1% chance to reduce the cast time of your next Shadow Bolt by 100%.\n\nThis effect cannot occur more than once every 4 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_corruption":
{
	"name":	"Improved Corruption",
	"icon":	"spell_shadow_abominationexplosion.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the duration of Corruption by $V1 seconds.",
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
"decay":
{
	"name":	"Decay",
	"icon":	"ability_creature_cursed_03.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Erode the life force of an enemy, dealing $V1% of their current health as Shadow damage every second, up to $V2 damage per second. Lasts 14 seconds.",
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
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.12
			]
		}
	],

	"isAbility":	true,
	"cost":	15.5,
	"resource":	"mana",
	"range":	30,
	"cooldown":	11,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"corrupted_essence":
{
	"name":	"Corrupted Essence",
	"icon":	"spell_shadow_fingerofdeath.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"When Corruption deals damage, it has a $V1% chance to heal you for $V2% of the damage dealt.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				25,
				25,
				25
			]
		},
		{
			"name":	"$V2",
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
"sadist":
{
	"name":	"Sadist",
	"icon":	"spell_shadow_shadowfiend.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"The cooldown of Agony is reduced by $V1 seconds if the target is unaffected by it.",
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
"siphon_life":
{
	"name":	"Siphon Life",
	"icon":	"spell_warlock_harvestoflife.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Drain Life heals for $V1% more for every 10% of maximum health the target has.",
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
"consume_essence":
{
	"name":	"Consume Essence",
	"icon":	"spell_shadow_requiem.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"decay",
	],

	"description":	"If an enemy dies while affected by Decay, you are healed for $V1% of their maximum health over 6 seconds, up to $V2 health total.",
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
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.42,
				0.84
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
"unstable_affliction":
{
	"name":	"Unstable Affliction",
	"icon":	"spell_shadow_unstableaffliction.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Afflicts the enemy for $V1 Shadow damage over 10 seconds. If Unstable Affliction is dispelled, the dispeller takes $V2 Shadow damage and is Silenced for 4 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.79
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.7
			]
		}
	],

	"isAbility":	true,
	"cost":	15.85,
	"resource":	"mana",
	"range":	30,
	"cooldown":	23,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"weakened_soul":
{
	"name":	"Weakened Soul",
	"icon":	"spell_shadow_haunting.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies affected by your Drain Soul take an additional $V1% damage from your damage over time effects.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"torment":
{
	"name":	"Torment",
	"icon":	"ability_warlock_improvedsoulleech.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting Agony on an enemy already affected by it deals $V1 Shadow damage for each stack of Agony on the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.016,
				0.032
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
"deaths_embrace":
{
	"name":	"Death's Embrace",
	"icon":	"spell_deathknight_necroticplague.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"decay",
	],

	"description":	"Decay's duration is increased by $V1 seconds for every 15% of maximum health the target is healed for.\n\nDecay's duration cannot exceed its original duration.",
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
"grim_reach":
{
	"name":	"Grim Reach",
	"icon":	"warlock_curse_shadow.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the range of your Shadow spells by $V1%.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"terrorize":
{
	"name":	"Terrorize",
	"icon":	"spell_shadow_possession.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies affected by your Fear can withstand an additional $V1% of their maximum health as damage before Fear is broken.",
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
"pandemic":
{
	"name":	"Pandemic",
	"icon":	"spell_shadow_devouringplague.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"unstable_affliction",
	],

	"description":	"Every time Unstable Affliction deals damage, it has a $V1% chance to spread to another enemy within 6 yards.\n\nUnstable Affliction will not spread to a target already affected by Unstable Affliction.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"suffering":
{
	"name":	"Suffering",
	"icon":	"spell_warlock_soulburn_haunt.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the maximum stack count of Agony by $V1.",
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
"contagion":
{
	"name":	"Contagion",
	"icon":	"spell_deathvortex.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"If one of your damage over time effects is dispelled from an enemy, it has a $V1% chance to be applied to the dispeller for its remaining duration.",
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
"frailty":
{
	"name":	"Frailty",
	"icon":	"ability_creature_cursed_05.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"soul_rend",
	],

	"description":	"Soul Rend reduces the enemy's movement speed by $V1% for each of your damage over time effects on the target. Movement speed is regained over 5 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"soul_rend":
{
	"name":	"Soul Rend",
	"icon":	"spell_misc_zandalari_council_soulswap.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [
		"Soul Shard"
	],
	"prerequisites": [],

	"description":	"Rend the enemy's soul, dealing $V1 Shadow damage and an additional $V2 Shadow damage for each of your damage over time effects on the target.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.42
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Shadow",
			"rank":	[
				0.1
			]
		}
	],

	"isAbility":	true,
	"cost":	16.55,
	"resource":	"mana",
	"range":	30,
	"cooldown":	40,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"bane":
{
	"name":	"Bane",
	"icon":	"ability_warlock_haunt.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"soul_rend",
	],

	"description":	"Soul Rend increases the duration of your Corruption, Agony, Decay, and Unstable Affliction on the target by $V1 seconds.",
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
"fire_and_brimstone":
{
	"name":	"Fire and Brimstone",
	"icon":	"ability_warlock_fireandbrimstone.jpg",
	"spec":	3,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies affected by your Immolate take an additional $V1% Shadow damage from your spells.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
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
"immolate_cooldown":
{
	"name":	"Immolate Cooldown",
	"icon":	"spell_fire_moltenblood.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Immolate by $V1%.",
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
"ruination":
{
	"name":	"Ruination",
	"icon":	"spell_shadow_deathpact.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of your Fire spells by $V1% for every 10% of maximum health the enemy is missing.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				0.2,
				0.4,
				0.6,
				0.8,
				1.0
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
"improved_immolate":
{
	"name":	"Improved Immolate",
	"icon":	"spell_fire_immolation.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage dealt by Immolate by $V1%.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"incinerate":
{
	"name":	"Incinerate",
	"icon":	"spell_fire_burnout.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Draw fire towards the enemy, dealing $V1 Fire damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.27
			]
		}
	],

	"isAbility":	true,
	"cost":	6.3,
	"resource":	"mana",
	"range":	30,
	"cooldown":	0,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"havoc":
{
	"name":	"Havoc",
	"icon":	"ability_warlock_baneofhavoc.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Getting a Critical Hit increases your Haste by 5% for $V1 seconds. Stacks refresh independently.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				2,
				4,
				6,
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
"chaos_bolt":
{
	"name":	"Chaos Bolt",
	"icon":	"ability_warlock_chaosbolt.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Send a bolt of chaotic energy at the enemy, dealing $V1 damage from a random school of magic.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"None",
			"rank":	[
				0.65
			]
		}
	],

	"isAbility":	true,
	"cost":	12.1,
	"resource":	"mana",
	"range":	30,
	"cooldown":	12,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"immolation":
{
	"name":	"Immolation",
	"icon":	"inv_elemental_primal_fire.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"incinerate",
	],

	"description":	"Incinerate has a $V1% chance to increase the duration of Immolate on the target by 1 second.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"smolder":
{
	"name":	"Smolder",
	"icon":	"spell_fire_meteorstorm.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your Fire spells reduce the enemy's movement speed by $V1% for 6 seconds. Stacks refresh independently.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"chaotic_energy":
{
	"name":	"Chaotic Energy",
	"icon":	"spell_fire_felflamering.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"chaos_bolt"
	],

	"description":	"Chaos Bolt has a $V1% chance to allow you to cast Immolate, Conflagrate, Hellfire, or Soul Fire regardless of whether it's on cooldown.\n\nCasting a spell that was previously on cooldown removes the effect. Lasts 4 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"conflagrate":
{
	"name":	"Conflagrate",
	"icon":	"ability_warlock_backdraft.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Deal $V1 Fire damage and consume up to $V2 seconds of Immolate's damage over time effect on the enemy, instantly dealing that much damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.3
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
	"cost":	8.94,
	"resource":	"mana",
	"range":	30,
	"cooldown":	14,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"backdraft":
{
	"name":	"Backdraft",
	"icon":	"ability_warlock_inferno.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"incinerate",
	],

	"description":	"Incinerate has a $V1% chance to reduce the cast time of your next Chaos Bolt or Soul Fire by 10%. Maximum 3 stacks. Lasts 12 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				25,
				50,
				75,
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
"hellfire":
{
	"name":	"Hellfire",
	"icon":	"spell_fire_incinerate.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Scorch the area surrounding the caster, dealing $V1 Fire damage every second to the Warlock and all enemies within 8 yards.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.18
			]
		}
	],

	"isAbility":	true,
	"cost":	14.5,
	"resource":	"mana",
	"range":	0,
	"cooldown":	36,
	"castTime":	4,
	"isChanneled":	true,
	"requiredLevel":	0
},
"soul_fracture":
{
	"name":	"Soul Fracture",
	"icon":	"ability_demonhunter_soulcleave2.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"chaos_bolt",
	],

	"description":	"Chaos Bolt has a $V1% to fracture the enemy's soul, generating a Soul Shard.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"annihilation":
{
	"name":	"Annihilation",
	"icon":	"ability_warlock_cremation.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Each spell you cast has a $V1% chance to sacrifice 5% of your maximum health your increase your Fire Damage by 10% for 6 seconds.\n\nThis effect will not occur while you are below 50% of your maximum health.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"reignite":
{
	"name":	"Reignite",
	"icon":	"spell_fire_flameshock.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"conflagrate"
	],

	"description":	"Conflagrate has a $V1% chance to reset the cooldown of Immolate.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"eruption":
{
	"name":	"Eruption",
	"icon":	"spell_shaman_lavasurge.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"conflagrate",
	],

	"description":	"Conflagrate deals $V1% of its damage to all enemies within 5 yards of the target.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"soul_fire":
{
	"name":	"Soul Fire",
	"icon":	"inv_summerfest_firespirit.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [
		"Soul Shard"
	],
	"prerequisites": [],

	"description":	"Ignite the enemy's soul, dealing $V1 Fire damage over 14 seconds. If the enemy is already affected by Soul Fire, its duration will be added to the existing effect.\n\nGenerating a Soul Shard resets the cooldown of Soul Fire.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				1.54
			]
		}
	],

	"isAbility":	true,
	"cost":	18.0,
	"resource":	"mana",
	"range":	30,
	"cooldown":	45,
	"castTime":	2.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"tower_of_flame":
{
	"name":	"Tower of Flame",
	"icon":	"inv_shield_58.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"hellfire",
	],

	"description":	"While channeling Hellfire, reduce the pushback suffered from attacks by $V1% and increase your Armor by $V2 and magic Resistances by $V3.",
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
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				1.4,
				2.8
			]
		},
		{
			"name":	"$V3",
			"modifier":	"Spell",
			"damageType":	"None",
			"rank":	[
				0.07,
				0.14,
				0.21
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
"apocalypse":
{
	"name":	"Apocalypse",
	"icon":	"spell_shaman_stormearthfire.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"cinderstorm",
	],

	"description":	"Cinderstorm releases $V1% more cinders over its duration and its target area is increased by $V2%.",
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
"cinderstorm":
{
	"name":	"Cinderstorm",
	"icon":	"ability_ironmaidens_rapidfire.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Bombard the target area with cinders. The cinders land randomly within the target area, dealing $V1 Fire damage to any enemies hit.\n\nCinderstorm releases 30 cinders over its duration.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.255
			]
		}
	],

	"isAbility":	true,
	"cost":	19.9,
	"resource":	"mana",
	"range":	40,
	"cooldown":	420,
	"castTime":	5,
	"isChanneled":	true,
	"requiredLevel":	0
},
"world_burner":
{
	"name":	"World Burner",
	"icon":	"achievement_zone_cataclysm.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,
	
	"requirements": [],
	"prerequisites": [
		"cinderstorm",
	],

	"description":	"Cinders heat the ground where they land, causing enemies who stand on them to be Burned for $V1 Fire damage per second. Lasts $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.06,
				0.12
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3,
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
"ashen_soul":
{
	"name":	"Ashen Soul",
	"icon":	"inv_tradeskillitem_lessersorcerersfire.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"soul_fire",
	],

	"description":	"Drain Soul increases the duration of Soul Fire on the target by $V1 seconds every time it deals damage.",
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
"empowered_imp":
{
	"name":	"Empowered Imp",
	"icon":	"ability_warlock_empoweredimp.jpg",
	"spec":	5,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your Immolate, Incinerate, and Demonfire increase the damage dealt by your Imp by $V1% for 6 seconds.",
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
"dark_bargain":
{
	"name":	"Dark Bargain",
	"icon":	"spell_shadow_demonictactics.jpg",
	"spec":	5,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the mana cost of your spells by $V1% for every 10% of your maximum health you are missing.",
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
}