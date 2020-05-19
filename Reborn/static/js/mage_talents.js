var mage_talents = {
"coursing_mana":
{
	"name":	"Coursing Mana",
	"icon":	"spell_arcane_arcane04.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Spirit by $V1% for every 20% of your maximum mana you are missing.",
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
"arcane_missiles_damage":
{
	"name":	"Arcane Missiles Damage",
	"icon":	"ability_socererking_arcanereplication.jpg",
	"spec":	0,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage of Arcane Missile by $V1%.",
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
"arcane_blast":
{
	"name":	"Arcane Blast",
	"icon":	"spell_arcane_blast.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Consume $V1% of your maximum mana to deal Arcane damage to the enemy equal to $V2% of the mana consumed.",
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
				150
			]
		}
	],

	"isAbility":	true,
	"cost":	0.0,
	"resource":	"mana",
	"range":	30,
	"cooldown":	0,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"arcane_discharge":
{
	"name":	"Arcane Discharge",
	"icon":	"spell_nature_wispsplode.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the damage dealt by Arcane Explosion by $V1% but increase its cooldown by $V2 seconds.",
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
"residual_mana":
{
	"name":	"Residual Mana",
	"icon":	"spell_mage_overpowered.jpg",
	"spec":	0,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every 223 mana you spend generates a charge of Residual Mana, increasing your Spell Power by 8. Lasts $V1 seconds. Charges refresh independently.",
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
"mana_bind":
{
	"name":	"Mana Bind",
	"icon":	"spell_arcane_focusedpower.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"arcane_blast",
	],

	"description":	"Arcane Blast increases the mana cost of the target's spells and abilities by $V1% for 10 seconds. Stacks refresh independently.",
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
"mana_conduit":
{
	"name":	"Mana Conduit",
	"icon":	"spell_arcane_arcane01.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your maximum mana by $V1% and increase the amount of mana you regenerate from all sources by $V2%.",
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
"arcane_barrage":
{
	"name":	"Arcane Barrage",
	"icon":	"ability_mage_arcanebarrage.jpg",
	"spec":	0,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"residual_mana"
	],

	"description":	"Consume up to 3 charges of Residual Mana to deal $V1 Arcane damage per charge to an enemy.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.14
			]
		}
	],

	"isAbility":	true,
	"cost":	8.15,
	"resource":	"mana",
	"range":	30,
	"cooldown":	6,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"mana_void":
{
	"name":	"Mana Void",
	"icon":	"spell_arcane_arcanepotency.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"arcane_blast",
	],

	"description":	"Arcane Blast deals an additional $V1% damage for every 10% of maximum mana the target is missing.",
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
"mana_core":
{
	"name":	"Mana Core",
	"icon":	"ability_monk_forcesphere.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Taking magic damage restores mana to you equal to $V1% of the damage taken.",
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
"improved_mana_shield":
{
	"name":	"Improved Mana Shield",
	"icon":	"spell_shadow_detectlesserinvisibility.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the amount of mana drained by Mana Shield by $V1%.",
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
"arcane_orb":
{
	"name":	"Arcane Orb",
	"icon":	"spell_mage_arcaneorb.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Summon an orb of pure energy at the target location that explodes after 3 seconds, dealing $V1 Arcane damage to all enemies within 6 yards and reducing their maximum mana by $V2 for 8 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.44
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.6
			]
		}
	],

	"isAbility":	true,
	"cost":	15.0,
	"resource":	"mana",
	"range":	30,
	"cooldown":	24,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"energy_well":
{
	"name":	"Energy Well",
	"icon":	"spell_arcane_invocation.jpg",
	"spec":	0,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"arcane_barrage",
	],

	"description":	"Arcane Barrage reduces the target's mana regeneration by up to $V1 per second for each charge of Residual Mana consumed. Lasts 6 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.015,
				0.03
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
"prismatic_cloak":
{
	"name":	"Prismatic Cloak",
	"icon":	"spell_arcane_prismaticcloak.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Every 500 magic damage you take increases the magic Resistance provided by Prismatic Armor by $V1% for 4 seconds. Stacks Refresh independently.",
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
"time_warp":
{
	"name":	"Time Warp",
	"icon":	"ability_hunter_displacement.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies within 6 yards of where you cast Blink have their movement speed slowed by 70% for $V1 seconds.",
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
"arcane_power":
{
	"name":	"Arcane Power",
	"icon":	"spell_arcane_arcanetorrent.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Spell Power by $V1% but increase the mana cost of your spells by $V2%. Lasts 8 seconds.",
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
		}
	],

	"isAbility":	true,
	"cost":	9.4,
	"resource":	"mana",
	"range":	0,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_evocation":
{
	"name":	"Improved Evocation",
	"icon":	"spell_nature_purge.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Evocation by $V1 minutes.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"mana_siphon":
{
	"name":	"Mana Siphon",
	"icon":	"inv_enchant_essencemagiclarge.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"arcane_orb",
	],

	"description":	"Arcane Orb steals $V1% of the maximum mana it reduces from enemies, increasing the caster's maximum mana by that amount.",
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
"improved_counterspell":
{
	"name":	"Improved Counterspell",
	"icon":	"spell_frost_iceshock.jpg",
	"spec":	0,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Counterspell Silences the target for $V1 seconds.",
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
"timewalker":
{
	"name":	"Timewalker",
	"icon":	"ability_mage_timewarp.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"time_warp",
	],

	"description":	"Blink sets your health and mana to the values they were $V1 seconds before you cast Blink.",
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
"dark_matter":
{
	"name":	"Dark Matter",
	"icon":	"inv_enchant_essencearcanelarge.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"dimensional_rift",
	],

	"description":	"The damage dealt by Dimensional Rift is increased by $V1% for each enemy affected by it.",
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
"dimensional_rift":
{
	"name":	"Dimensional Rift",
	"icon":	"ability_socererking_arcanemines.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,
	
	"requirements": [],
	"prerequisites": [],

	"description":	"Open a rift in the fabric of space, pulling all enemies within 10 yards of the target location towards its center. Affected enemies are Stunned and take $V1 Arcane damage per second. Lasts $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Arcane",
			"rank":	[
				0.09
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
	"cost":	22.6,
	"resource":	"mana",
	"range":	30,
	"cooldown":	600,
	"castTime":	5,
	"isChanneled":	true,
	"requiredLevel":	0
},
"singularity":
{
	"name":	"Singularity",
	"icon":	"spell_mage_supernova.jpg",
	"spec":	0,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"dimensional_rift",
	],

	"description":	"Each enemy that comes within 3 yards of Dimensional Rift's center increases its size by $V1%.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"critical_mass":
{
	"name":	"Critical Mass",
	"icon":	"spell_arcane_rune.jpg",
	"spec":	1,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your single target spells refund $V1% of their mana cost.",
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
"improved_fire_ward":
{
	"name":	"Improved Fire Ward",
	"icon":	"spell_fire_firearmor.jpg",
	"spec":	1,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Fire Ward by $V1 seconds.",
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
"inflame":
{
	"name":	"Inflame",
	"icon":	"spell_fire_flamebolt.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"The Burn effect of your Fireball deals an additional $V1% damage.",
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
"improved_fire_blast":
{
	"name":	"Improved Fire Blast",
	"icon":	"spell_fire_fireball.jpg",
	"spec":	2,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Fire Blast by $V1%.",
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
"molten_armor":
{
	"name":	"Molten Armor",
	"icon":	"ability_mage_moltenarmor.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of your Fire spells by $V1% and cause melee attacks against you to deal $V2 Fire damage to the attacker.\n\nLasts until cancelled. Only one Armor spell can be active at a time.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				3
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.08
			]
		}
	],

	"isAbility":	true,
	"cost": 12.1,
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_flamestrike":
{
	"name":	"Improved Flamestrike",
	"icon":	"spell_fire_selfdestruct.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cast time of Flamestrike by $V1% and increase its area of effect by $V2%.",
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
		},
		{
			"name":	"$V2",
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
"dragons_breath":
{
	"name":	"Dragon's Breath",
	"icon":	"inv_misc_head_dragon_01.jpg",
	"spec":	2,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your Fireball, Flamestrike, and Pyroblast deal an additional $V1% Burn damage.",
	"values":	[
		{
			"name":	"$V1",
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
"molten_touch":
{
	"name":	"Molten Touch",
	"icon":	"inv_helm_circlet_firelands_d_01.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"molten_armor",
	],

	"description":	"Enemies who are damaged by your Molten Armor are $V1% more likely to be Critically Hit by your Fire spells.\n\nLasts 8 seconds. Stacks refresh independently.",
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
"rekindle":
{
	"name":	"Rekindle",
	"icon":	"spell_mage_kindling.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Fire Blast increases the Burn duration of Fireball, Flamestrike, and Pyroblast on the target by $V1 seconds.",
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
"superheated":
{
	"name":	"Superheated",
	"icon":	"ability_mage_firestarter.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Critical Hits from your Fire spells have a $V1% chance to Stun the enemy for 2.5 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"pyroblast":
{
	"name":	"Pyroblast",
	"icon":	"spell_fire_fireball02.jpg",
	"spec":	2,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Hurl a fiery boulder at an enemy that deals $V1 Fire damage and Burns the target for $V2 Fire damage over $V3 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.48
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.22
			]
		},
		{
			"name":	"$V3",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				9
			]
		}
	],

	"isAbility":	true,
	"cost":	12.56,
	"resource":	"mana",
	"range":	30,
	"cooldown":	0,
	"castTime":	3.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"combustion":
{
	"name":	"Combustion",
	"icon":	"spell_fire_moltenblood.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Engulfs the caster in flames, increasing your Critical Hit chance with Fire spells by $V1%. Each Fire spell you cast increases the Critical Hit chance by an additional $V2%. Lasts 12 seconds or until 5 Fire spells Critically Hit.",
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
				5
			]
		}
	],

	"isAbility":	true,
	"cost":	7.3,
	"resource":	"mana",
	"range":	0,
	"cooldown":	180,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"firestarter":
{
	"name":	"Firestarter",
	"icon":	"spell_shaman_lavasurge.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of your Fire spells by $V1% on enemies above 90% health.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blast_wave":
{
	"name":	"Blast Wave",
	"icon":	"spell_holy_excorcism_02.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Release a wave of fire that radiates 15 yards outward from the caster, dealing $V1 Fire damage to any enemies hit and slowing their movement speed slowed by $V2% for 4 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.39
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
	"cost":	14.4,
	"resource":	"mana",
	"range":	0,
	"cooldown":	32,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"ignition":
{
	"name":	"Ignition",
	"icon":	"spell_fire_ragnaros_supernova.jpg",
	"spec":	2,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"pyroblast"
	],

	"description":	"Enemies that are affected by your Fireball, Flamestrike, and Pyroblast explode when they die, dealing $V1% of the remaining Burn damage from each spell to all enemies within 5 yards.",
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
"fire_rune":
{
	"name":	"Fire Rune",
	"icon":	"spell_fire_rune.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting Fireball, Fireblast, or Pyroblast has a $V1% chance to summon a Fire Rune under the target.\n\nCasting Fire Rune ignites the Fire Rune closest to the target location, destroying it to deal $V2 Fire damage to all enemies standing on it.\n\nA Fire Rune must exist for 3 seconds before it can be activated. Fire Runes last 20 seconds. Multiple Fire Runes can exist at one time.",
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
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.35
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
	"requiredLevel":	0
},
"burnout":
{
	"name":	"Burnout",
	"icon":	"spell_fire_burnout.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of Fire Blast by $V1% for each of your Burn effects on the target.",
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
"blast_furnace":
{
	"name":	"Blast Furnace",
	"icon":	"inv_magemount_fire.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"blast_wave",
	],

	"description":	"Blast Wave slows the movement speed of enemies hit by an additional $V1%. This effect diminishes if the enemy is more than 5 yards away.",
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
"living_bomb":
{
	"name":	"Living Bomb",
	"icon":	"ability_mage_livingbomb.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"The enemy becomes a living bomb, causing them to take $V1 Fire damage over 5 seconds.\n\nLiving Bomb will detonate if it expires or the target dies, dealing $V2 Fire damage to all enemies within 6 yards.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.38
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.32
			]
		}
	],

	"isAbility":	true,
	"cost":	11.6,
	"resource":	"mana",
	"range":	30,
	"cooldown":	27,
	"castTime":	1.5,
	"isChanneled":	false,
	"requiredLevel":	0
},
"hot_streak":
{
	"name":	"Hot Streak",
	"icon":	"ability_mage_hotstreak.jpg",
	"spec":	2,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"pyroblast",
	],

	"description":	"If your Fire spells Critically Hit twice in a row, your next Pyroblast has its cast time reduced by $V1%.",
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
"improved_fire_rune":
{
	"name":	"Improved Fire Rune",
	"icon":	"misc_legionfall_mage_orange.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"fire_rune",
	],

	"description":	"Fire Runes deal an additional $V1 Fire damage for each second they exist, up to a maximum of $V2 bonus damage.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.015,
				0.03
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.15,
				0.3
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
"scorched_ground":
{
	"name":	"Scorched Ground",
	"icon":	"spell_fire_felflamering_red.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"meteor",
	],

	"description":	"Increase the duration of Meteor's trail of fire by $V1 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"meteor":
{
	"name":	"Meteor",
	"icon":	"spell_mage_meteor.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Summon a meteor at the target location that rolls forward $V1 yards, dealing $V2 Fire damage to all enemies on its path.\n\nThe meteor leaves a trail of fire in its path that lasts 4 seconds. Enemies who stand in it are Burned for $V3 Fire damage per second.",
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
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.7
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.13
			]
		}
	],

	"isAbility":	true,
	"cost":	17.36,
	"resource":	"mana",
	"range":	20,
	"cooldown":	240,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"path_of_destruction":
{
	"name":	"Path of Destruction",
	"icon":	"spell_fire_ragnaros_molteninferno.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"meteor",
	],

	"description":	"Meteor rolls an additional $V1 yards.",
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
"consumed_by_fire":
{
	"name":	"Consumed by Fire",
	"icon":	"spell_fire_incinerate.jpg",
	"spec":	2,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	5,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"living_bomb",
	],

	"description":	"Increase the detonation damage of Living Bomb by $V1% of all Fire damage you deal to the target while Living Bomb is active.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"system_shock":
{
	"name":	"System Shock",
	"icon":	"spell_frostresistancetotem_01.jpg",
	"spec":	3,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of your Fire spells by $V1% for each of your Frost spells the enemy is affected by.",
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
"fire_and_ice":
{
	"name":	"Fire and Ice",
	"icon":	"spell_fire_masterofelements.jpg",
	"spec":	3,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting a Fire spell increases the Critical Hit chance of your next Frostbolt, Blizzard, or Glacial Spike by $V1%. Maximum 3 stacks.\n\nCasting a Frost spell increases the Haste of your next Fire spell by $V2%. Maximum 3 stacks. ",
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
"frostfire_bolt":
{
	"name":	"Frostfire Bolt",
	"icon":	"ability_mage_frostfirebolt.jpg",
	"spec":	3,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"fire_and_ice",
	],

	"description":	"Harness both fire and ice to launch a bolt of frostfire at the enemy, dealing $V1 Fire damage and $V2 Frost damage.\n\nThe target takes $V3 Fire damage over 5 seconds and has their movement speed slowed by $V4%.\n\nFrostfire Bolt is both a Frost spell and Fire spell and is affected by any talents that affect Fireball or Frostbolt.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.105
			]
		},
		{
			"name":	"$V2",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.105
			]
		},
		{
			"name":	"$V3",
			"modifier":	"Spell",
			"damageType":	"Fire",
			"rank":	[
				0.040
			]
		},
		{
			"name":	"$V2",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				25
			]
		}
	],

	"isAbility":	true,
	"cost":	7.6,
	"resource":	"mana",
	"range":	30,
	"cooldown":	0,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"freezing_bolt":
{
	"name":	"Freezing Bolt",
	"icon":	"spell_frost_piercing-chill.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Frostbolt reduces the target's movement speed by an additional $V1%.",
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
"ice_flow":
{
	"name":	"Ice Flow",
	"icon":	"spell_frost_icefloes.jpg",
	"spec":	4,
	"specTier":	1,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the mana cost of your Frost spells by $V1%.",
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
"improved_frost_nova":
{
	"name":	"Improved Frost Nova",
	"icon":	"spell_frost_frostnova.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Frost Nova deals $V1% more damage and enemies affected by your Frost Nova can withstand $V2% more damage before the effect is broken.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30,
				40,
				50
			]
		},
		{
			"name":	"$V2",
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
"ice_armor":
{
	"name":	"Ice Armor",
	"icon":	"spell_frost_chillingarmor.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Frost Armor provides $V1% more Armor and its attack speed and movement speed slow is increased by $V2%.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"None",
			"damageType":	"None",
			"rank":	[
				10,
				20,
				30,
				40,
				50
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
"cone_of_cold":
{
	"name":	"Cone of Cold",
	"icon":	"spell_frost_chillingblast.jpg",
	"spec":	4,
	"specTier":	2,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Unleash a torrent of frost in front of the caster, hitting enemies in a cone up to 7 yards away. Enemies hit take $V1 Frost damage and have their movement speed slowed by $V2% for 4 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.24
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
	"cost":	10.8,
	"resource":	"mana",
	"range":	0,
	"cooldown":	24,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"blizzard":
{
	"name":	"Blizzard",
	"icon":	"spell_frost_icestorm.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	0,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Pelt the target area with ice, dealing $V1 Frost damage per second to enemies standing within.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.13
			]
		}
	],

	"isAbility":	true,
	"cost":	18.0,
	"resource":	"mana",
	"range":	30,
	"cooldown":	16,
	"castTime":	6,
	"isChanneled":	true,
	"requiredLevel":	0
},
"frostbite":
{
	"name":	"Frostbite",
	"icon":	"spell_frost_frostarmor.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Enemies take $V1 Frost damage every 3 seconds for every 10% their movement speed is slowed by your Frost spells.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.005,
				0.01,
				0.015,
				0.020,
				0.025
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
"cone_of_cold_range":
{
	"name":	"Cone of Cold Range",
	"icon":	"spell_frost_glacier.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"cone_of_cold",
	],

	"description":	"Increase the range of Cone of Cold by $V1 yards and its width by $V2%.",
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
"flurry":
{
	"name":	"Flurry",
	"icon":	"ability_deathknight_remorselesswinters2.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"blizzard",
	],

	"description":	"Blizzard slows the movement speed of enemies by $V1% each time it deals damage, up to a maximum of $V2%.",
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
"ice_shards":
{
	"name":	"Ice Shards",
	"icon":	"spell_frost_ice-shards.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	4,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Casting Frostbolt, Frost Nova, or Cone of Cold generates an Ice Shard that orbits the caster, providing a 2% Parry chance. Lasts 16 seconds.\n\nA maximum of $V1 Ice Shards can be active at a time.",
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
"frost_barrier":
{
	"name":	"Frost Barrier",
	"icon":	"spell_ice_lament.jpg",
	"spec":	4,
	"specTier":	3,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Surround the caster in a barrier of ice, absorbing $V1 damage. Lasts $V2 seconds.\n\nWhile the Frost Barrier holds, spellcasting will not suffer pushback from damage taken.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.92
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
	"cost":	10.5,
	"resource":	"mana",
	"range":	0,
	"cooldown":	32,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"frost_barrier_nova":
{
	"name":	"Frost Barrier Nova",
	"icon":	"ability_mage_burstofcold.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"frost_barrier",
	],

	"description":	"If Frost Barrier is destroyed, all enemies within 6 yards are Immobilized for $V1 seconds.",
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
"icy_veins":
{
	"name":	"Icy Veins",
	"icon":	"spell_frost_coldhearted.jpg",
	"spec":	4,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase your Haste by $V1% and prevent pushback from damage while casting for $V2 seconds.",
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
				8
			]
		}
	],

	"isAbility":	true,
	"cost":	9.7,
	"resource":	"mana",
	"range":	0,
	"cooldown":	120,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"arctic_winds":
{
	"name":	"Arctic Winds",
	"icon":	"spell_frost_arcticwinds.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	0,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"blizzard",
	],

	"description":	"Every second you spend casting has a $V1% chance to increase the Haste of your next Blizzard by 40%.",
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
"shatter":
{
	"name":	"Shatter",
	"icon":	"ability_mage_freeze.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	5,

	"position":	1,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the Critical Hit chance of your spells by $V1% against enemies that are Immobilized or Stunned by your Frost spells.",
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
"ice_barrage":
{
	"name":	"Ice Barrage",
	"icon":	"ability_mage_glacialspike.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	2,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [
		"ice_shards"
	],

	"description":	"Send your Ice Shards at the enemy, dealing $V1 Frost damage for each Ice Shard sent. Consumes all Ice Shards.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.05
			]
		}
	],

	"isAbility":	true,
	"cost":	9.37,
	"resource":	"mana",
	"range":	30,
	"cooldown":	8,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"cold_snap":
{
	"name":	"Cold Snap",
	"icon":	"spell_frost_frozenorb.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	3,

	"position":	3,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Increase the range of Frost Nova by $V1 yards and reduce its cooldown by $V2%.",
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
"ice_block":
{
	"name":	"Ice Block",
	"icon":	"spell_frost_frost.jpg",
	"spec":	4,
	"specTier":	5,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	4,
	"isOffset":	true,

	"requirements": [],
	"prerequisites": [],

	"description":	"Encase the caster in a block of ice, preventing any damage for $V1 seconds. While frozen the caster cannot move, attack, or cast spells.",
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
	"cost":	12.0,
	"resource":	"mana",
	"range":	0,
	"cooldown":	300,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"winters_grasp":
{
	"name":	"Winter's Grasp",
	"icon":	"spell_frost_ring-of-frost.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	2,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"glacial_spike",
	],

	"description":	"Enemies that come within $V1 yards of an enemy frozen by Glacial Spike are also Stunned for the remainder of the duration.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"glacial_spike":
{
	"name":	"Glacial Spike",
	"icon":	"ability_paladin_bladeofjusticeblue.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	1,

	"position":	3,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"An enormous spike of ice erupts from the target location. Enemies hit take $V1 Frost damage and are encased in ice, Stunning them for $V2 seconds.",
	"values":	[
		{
			"name":	"$V1",
			"modifier":	"Spell",
			"damageType":	"Frost",
			"rank":	[
				0.55
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
	"cost":	14.5,
	"resource":	"mana",
	"range":	30,
	"cooldown":	120,
	"castTime":	2,
	"isChanneled":	false,
	"requiredLevel":	0
},
"permafrost":
{
	"name":	"Permafrost",
	"icon":	"ability_mage_coldasice.jpg",
	"spec":	4,
	"specTier":	6,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	4,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [
		"glacial_spike",
	],

	"description":	"When Glacial Spike ends, all affected enemies have their movement speed slowed by 90% but regain it over $V1 seconds.",
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
	"resource":	"mana",
	"range":	0,
	"cooldown":	0,
	"castTime":	0,
	"isChanneled":	false,
	"requiredLevel":	0
},
"improved_frost_ward":
{
	"name":	"Improved Frost Ward",
	"icon":	"spell_frost_frostward.jpg",
	"spec":	5,
	"specTier":	4,
	"isUnlocked":	false,
	"currentRank":	0,
	"maxRank":	2,

	"position":	1,
	"isOffset":	false,

	"requirements": [],
	"prerequisites": [],

	"description":	"Reduce the cooldown of Frost Ward by $V1 seconds.",
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
}