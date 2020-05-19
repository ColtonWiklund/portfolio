var shaman_talents =
{
	"windfury_weapon":
	{
		"name":	"Windfury Weapon",
		"icon":	"spell_nature_cyclone.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your attacks have a $V1% chance to give you an extra attack.",
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
	"elemental_force":
	{
		"name":	"Elemental Force",
		"icon":	"spell_nature_elementalabsorption.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cooldown of your Shock spells by $V1%.",
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
	"lightning_shield":
	{
		"name":	"Lightning Shield",
		"icon":	"ability_racial_forceshield.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Each Lightning Orb you have reduces the damage you take from spells by $V1%, up to a maximum of $V2%.",
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
	"blood_and_thunder":
	{
		"name":	"Blood and Thunder",
		"icon":	"warrior_talent_icon_bloodandthunder.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your attacks are $V1% more likely to consume a Lightning Orb.",
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
	"stormstrike":
	{
		"name":	"Stormstrike",
		"icon":	"ability_shaman_stormstrike.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon"
		],
		"prerequisites": [],

		"description":	"Channel lightning through your weapons, striking an enemy for $V1 Physical damage and $V2 Nature damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Nature",
				"rank":	[
					0.30
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"Nature",
				"rank":	[
					0.246
				]
			}
		],

		"isAbility":	true,
		"cost":	12.5,
		"resource":	"mana",
		"range":	"melee",
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"incarnation_of_wind":
	{
		"name":	"Incarnation of Wind",
		"icon":	"ability_ironmaidens_swirlingvortex.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Harness the spirit of wind, increasing your Attack Speed and Movement Speed by $V1% for $V2 seconds.",
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
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	11.5,
		"resource":	"mana",
		"range":	0,
		"cooldown":	24,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"force_of_nature":
	{
		"name":	"Force of Nature",
		"icon":	"spell_nature_elementalprecision_1.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Imbue your weapons with power based on the last Shock spell cast, causing your attacks to:\n\nFire Shock: Deal $V1 additional Fire damage over 4 seconds.\n\nFrost Shock: Reduce the target's movement speed by $V2% for 3 seconds.\n\nEarth Shock: Reduce the target's Haste by $V3% for 3 seconds.\n\nLasts 3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Fire",
				"rank":	[
					0.02,
					0.04,
					0.06,
					0.08,
					0.10
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
					20,
					25
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
	"vortex":
	{
		"name":	"Vortex",
		"icon":	"ability_skyreach_wind.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"incarnation_of_wind",
		],

		"description":	"While Incarnation of Wind is active, enemies within $V1 yards have their Attack Speed and Movement Speed slowed by $V2%.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					8,
					8
				]
			},
			{
				"name":	"$V2",
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
	"lava_lash":
	{
		"name":	"Lava Lash",
		"icon":	"ability_shaman_lavalash.jpg",
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

		"description":	"Imbue your weapon with lava and strike an enemy, dealing $V1 Fire damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Fire",
				"rank":	[
					0.52
				]
			}
		],

		"isAbility":	true,
		"cost":	10.8,
		"resource":	"mana",
		"range":	"melee",
		"cooldown":	9,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"elemental_might":
	{
		"name":	"Elemental Might",
		"icon":	"inv_mace_1h_artifactdoomhammer_d_01.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Attack Power by $V1% of your Fire, Frost, and Nature damage.",
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
	"stormcrash":
	{
		"name":	"Stormcrash",
		"icon":	"ability_thunderking_thunderstruck.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"stormstrike",
		],

		"description":	"Stormstrike deals $V1% of its Nature damage to all enemies within 6 yards of the target.",
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
	"improved_ghost_wolf":
	{
		"name":	"Improved Ghost Wolf",
		"icon":	"spell_nature_spiritwolf.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your movement speed in Ghost Wolf by $V1% and reduce its cooldown by $V2 seconds.",
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
	"fissure":
	{
		"name":	"Fissure",
		"icon":	"spell_shaman_earthquake.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Sunder the earth, creating a fissure that extends $V1 yards from the caster, directed at the enemy. Any enemies on its path take $V2 Physical damage and are stunned for $V3 seconds.",
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
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.29
				]
			},
			{
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					2.0
				]
			}
		],

		"isAbility":	true,
		"cost":	16.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"lightning_rod":
	{
		"name":	"Lightning Rod",
		"icon":	"shaman_pvp_thundercharge.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"stormstrike",
		],

		"description":	"Stormstrike generates $V1 Lightning $V2.",
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
					"Orb",
					"Orbs",
					"Orbs"
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
	"windswept":
	{
		"name":	"Windswept",
		"icon":	"ability_skyreach_four_wind.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"incarnation_of_wind",
		],

		"description":	"Incarnation of Wind affects allies with $V1 yards.",
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
	"feral_spirits":
	{
		"name":	"Feral Spirits",
		"icon":	"spell_shaman_feralspirit.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summon two Spirit Wolves that aid you in battle, attacking your primary target. Each Spirit Wolf deals $V1 Physical damage per attack and attacks once per second.\n\nSpirit Wolves are immune to movement-impairing effects. Lasts $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.06
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
		"cost":	18.5,
		"resource":	"mana",
		"range":	0,
		"cooldown":	240,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"sundered_core":
	{
		"name":	"Sundered Core",
		"icon":	"ability_rhyolith_lavapool.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"lava_lash"
		],

		"description":	"Lava Lash increases the Fire damage you deal to the target by $V1% for $V2 seconds.",
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
					6,
					6,
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
	"stormbringer":
	{
		"name":	"Stormbringer",
		"icon":	"inv_elemental_primal_air.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"eye_of_the_storm",
		],

		"description":	"Every Lightning Orb you consume reduces the cooldown of Eye of the Storm by $V1 seconds.",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"eye_of_the_storm":
	{
		"name":	"Eye of the Storm",
		"icon":	"spell_shaman_hightide.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Charge the air around you, causing each of your attacks to have a $V1% chance to make your next Lightning Bolt or Chain Lightning an instant cast and have its mana cost reduced by $V2%. Lasts $V3 seconds.",
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
					75
				]
			},
			{
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					12
				]
			}
		],

		"isAbility":	true,
		"cost":	16.5,
		"resource":	"mana",
		"range":	0,
		"cooldown":	90,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"crackling_air":
	{
		"name":	"Crackling Air",
		"icon":	"shaman_pvp_staticcling.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"eye_of_the_storm",
		],

		"description":	"While Eye of the Storm is active, each ability or spell you use generates $V1 Lightning $V2 and your attacks have an additional $V3% to consume a Lightning Orb.",
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
					"Orb",
					"Orbs"
				]
			},
			{
				"name":	"$V3",
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
	"rupture":
	{
		"name":	"Rupture",
		"icon":	"spell_nature_earthquake.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"fissure",
		],

		"description":	"Increase the range of Fissure by $V1 yards.",
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
	"improved_stoneskin_totem":
	{
		"name":	"Improved Stoneskin Totem",
		"icon":	"spell_nature_stoneskintotem.jpg",
		"spec":	1,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the Armor provided by Stoneskin Totem by $V1% and reduce its cooldown by $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					20,
					40
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"revitalize":
	{
		"name":	"Revitalize",
		"icon":	"spell_shaman_unleashweapon_life.jpg",
		"spec":	1,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your attacks have a $V1% chance to reduce the cast time of your next Healing Wave by 25%. Stacks up to 4 times. Lasts 10 seconds.",
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
	"windwalker_totem":
	{
		"name":	"Windwalker Totem",
		"icon":	"ability_shaman_windwalktotem.jpg",
		"spec":	1,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [
			"Air Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Windwalker Totem at the target location that increases the movement speed of allies within 15 yards by $V1%. Lasts $V2 seconds.\n\nAll Air Totems share a cooldown.",
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
					7
				]
			}
		],

		"isAbility":	true,
		"cost":	12.0,
		"resource":	"mana",
		"range":	25,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"healing_wave_cast_time":
	{
		"name":	"Healing Wave Cast Time",
		"icon":	"spell_nature_regenerate.jpg",
		"spec":	2,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cast time of Healing Wave by $V1% for every 20% of maximum health the target is missing.",
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
	"improved_healing_wave":
	{
		"name":	"Improved Healing Wave",
		"icon":	"spell_nature_healingwavelesser.jpg",
		"spec":	2,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the Critical Strike chance of Healing Wave by $V1%.",
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
	"healing_way":
	{
		"name":	"Healing Way",
		"icon":	"spell_nature_healingway.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Each Healing Wave you cast increases your Healing Power by 1%. Maximum $V1 stacks. Lasts 12 seconds.\n\nWhen you cast a different spell, all stacks of Healing Way are consumed to reduce the spell's cast time by 5% per stack.",
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
	"spirit_mend":
	{
		"name":	"Spirit Mend",
		"icon":	"spell_nature_regeneration_02.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Allies who have been damaged by a Critical Hit within the past 3 seconds are healed for $V1% more from your healing spells and effects.",
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
	"chain_heal":
	{
		"name":	"Chain Heal",
		"icon":	"spell_nature_healingwavegreater.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Heal an ally for $V1 health before jumping $V2 times to the most injured ally within 8 yards. Each jump heals $V3% less health. The same ally cannot be affected twice.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.6
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
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					25
				]
			}
		],

		"isAbility":	true,
		"cost":	20.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	11,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"earthen_shield":
	{
		"name":	"Earthen Shield",
		"icon":	"spell_nature_skinofearth.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Place an Earthen Shield on an ally. When the ally takes damage they will be healed for $V1 health. $V2 charges. Lasts 6 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.165
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	14,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"mana_flow":
	{
		"name":	"Mana Flow",
		"icon":	"inv_elemental_primal_mana.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Critical Hits from your Healing Wave, Chain Heal, and Riptide grant you a charge of Mana Flow, restoring $V1 mana over 12 seconds.\n\nMaximum 3 charges. Charges refresh independently.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"baseMana",
				"damageType":	"None",
				"rank":	[
					0.012,
					0.024,
					0.036,
					0.048
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
	"ancestral_vigor":
	{
		"name":	"Ancestral Vigor",
		"icon":	"spell_shaman_improvedreincarnation.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Critical Hits from your Healing Wave, Chain Heal, and Riptide increase the target's maximum health by $V1% for $V2 seconds. Maximum 3 stacks.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					2,
					2,
					2
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
	"surge":
	{
		"name":	"Surge",
		"icon":	"spell_shaman_blessingoftheeternals.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"mana_flow"
		],

		"description":	"Consume all charges of Mana Flow to increase the Healing Power of your next spell by $V1% for each charge consumed.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					8
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	6,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"riptide":
	{
		"name":	"Riptide",
		"icon":	"ability_mage_waterjet.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Restore $V1 health to an ally and an additional $V2 health over 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.44
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.38
				]
			}
		],

		"isAbility":	true,
		"cost":	17.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	9,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"ancestral_strength":
	{
		"name":	"Ancestral Strength",
		"icon":	"spell_nature_undyingstrength.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"ancestral_vigor",
		],

		"description":	"Ancestral Vigor increases the target's Critical Hit chance by $V1% per stack.",
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
	"healing_link":
	{
		"name":	"Healing Link",
		"icon":	"ability_hunter_onewithnature.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"chain_heal",
		],

		"description":	"Increase the jump range of Chain Heal by $V1 yards.",
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
	"earthen_armor":
	{
		"name":	"Earthen Armor",
		"icon":	"spell_nature_spiritarmor.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"earthen_shield",
		],

		"description":	"Earth Shield increases the target's Armor and Resistances by $V1% for its duration.",
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
	"healing_rain":
	{
		"name":	"Healing Rain",
		"icon":	"spell_nature_giftofthewaterspirit.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blanket the target location with healing rain, restoring $V1 health per second to all allies within $V2 yards. Lasts $V3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.18
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
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	23.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	32,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"restoring_waters":
	{
		"name":	"Restoring Waters",
		"icon":	"spell_nature_riptide.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"riptide",
		],

		"description":	"Riptide restores $V1 mana per second to the target for its duration.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.01,
					0.02,
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
	"reborn":
	{
		"name":	"Reborn",
		"icon":	"spell_nature_reincarnation.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cooldown of Reincarnation by $V1 minutes and increase the health and mana you reincarnate with by $V2%.",
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
					75,
					150
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
	"healing_stream_totem":
	{
		"name":	"Healing Stream Totem",
		"icon":	"spell_nature_natureresistancetotem.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	false,

		"requirements": [
			"Water Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Healing Stream Totem at the target location that restores $V1 health per second to the most injured ally within 10 yards. Lasts $V2 seconds.\n\nAll Water Totems share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.14
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
		"cost":	12.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	90,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"downpour":
	{
		"name":	"Downpour",
		"icon":	"ability_monk_renewingmists.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"healing_rain"
		],

		"description":	"Increase the size of Healing Rain by $V1 yards.",
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
	"ascension":
	{
		"name":	"Ascension",
		"icon":	"spell_fire_elementaldevastation.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"spirit_link",
		],

		"description":	"If an ally dies while affected by Spirit Link, the other affected allies are healed for $V1 health every second for $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.6,
					1.2
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5,
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
	"spirit_link":
	{
		"name":	"Spirit Link",
		"icon":	"spell_shaman_spiritlink.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Link the spirit of an ally with the closest 2 allies within $V1 yards. All damage and healing the targets receive is split evenly between them. Lasts $V2 seconds.\n\nIf the linked allies move over 25 yards apart, the effect is broken. ",
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
					7
				]
			}
		],

		"isAbility":	true,
		"cost":	24.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"kindred_souls":
	{
		"name":	"Kindred Souls",
		"icon":	"spell_shaman_spectraltransformation.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"spirit_link",
		],

		"description":	"Spirit Link increases all healing received by the affected allies by $V1%.",
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
	"healing_well":
	{
		"name":	"Healing Well",
		"icon":	"spell_nature_abolishmagic.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"healing_stream_totem",
		],

		"description":	"Healing Stream Totem will restore $V1 health per second to the second most injured ally within 10 yards.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.035,
					0.07
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
	"invigoration":
	{
		"name":	"Invigoration",
		"icon":	"ability_mage_freeze.jpg",
		"spec":	3,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your Lightning Bolt has a $V1% chance to reduce the mana cost of your next healing spell by 100%.",
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
	"ancestral_guidance":
	{
		"name":	"Ancestral Guidance",
		"icon":	"ability_shaman_ancestralguidance.jpg",
		"spec":	3,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the pushback suffered from damage while casting spells by $V1%.",
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
	"totemic_focus":
	{
		"name":	"Totemic Focus",
		"icon":	"ability_shaman_repulsiontotem.jpg",
		"spec":	3,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cooldown of your Totems by $V1%.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5,
					10,
					15,
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
	"windfall_totem":
	{
		"name":	"Windfall Totem",
		"icon":	"spell_nature_earthbind.jpg",
		"spec":	3,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [
			"Air Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Windfall Totem at the target location. Allies standing within 6 yards of it are $V1% less likely to be hit by enemy spells and ranged attacks. Lasts $V2 seconds.\n\nAll Air Totems share a cooldown.",
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
					3
				]
			}
		],

		"isAbility":	true,
		"cost":	14.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	360,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"lightning_flash":
	{
		"name":	"Lightning Flash",
		"icon":	"spell_nature_stormreach.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Consuming a Lightning Orb reduces the cast time of your next Lightning Bolt by $V1%.",
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
	"primal_channelling":
	{
		"name":	"Primal Channelling",
		"icon":	"ability_shawaterelemental_reform.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the mana cost of your Lightning Bolt and Shock spells by $V1%.",
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
	"improved_flame_shock":
	{
		"name":	"Improved Flame Shock",
		"icon":	"spell_fire_flameshock.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the duration of Flame Shock by $V1 seconds.",
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
	"static_charge_spell_cast":
	{
		"name":	"Static Charge Spell Cast",
		"icon":	"spell_shaman_crashlightning.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your spells are $V1% more likely to consume a Lightning Orb.",
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
	"chain_lightning":
	{
		"name":	"Chain Lightning",
		"icon":	"spell_nature_chainlightning.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Electrify an enemy, dealing $V1 Nature damage before jumping $V2 times to the nearest enemy within 10 yards. Each jump deals $V3% less damage. The same enemy cannot be affected twice.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					0.39
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
				"name":	"$V3",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					25
				]
			}
		],

		"isAbility":	true,
		"cost":	11.55,
		"resource":	"mana",
		"range":	30,
		"cooldown":	12,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"shock_reach":
	{
		"name":	"Shock Reach",
		"icon":	"spell_frost_manarecharge.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the range of your Shock spells by $V1 yards.",
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
	"lightning_caller":
	{
		"name":	"Lightning Caller",
		"icon":	"ability_argus_blightorb.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your Lightning Bolt has a $V1% chance to generate a Lightning Orb.",
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
	"lava_burst":
	{
		"name":	"Lava Burst",
		"icon":	"spell_shaman_lavaburst.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Hurls molten lava at an enemy, dealing $V1 Fire damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.56
				]
			}
		],

		"isAbility":	true,
		"cost":	14.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	13,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"overload":
	{
		"name":	"Overload",
		"icon":	"spell_nature_groundingtotem.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"chain_lightning"
		],

		"description":	"If Chain Lightning cannot find another enemy to jump to, it will deal $V1% more damage to its current target for each jump remaining.",
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
	"fire_nova_totem":
	{
		"name":	"Fire Nova Totem",
		"icon":	"spell_shaman_spewlava.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Fire Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Fire Nova Totem at the target location. After 4 seconds it will erupt in flames, dealing $V1 Fire damage to all enemies with 8 yards.\n\nAll Fire Totems share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.42
				]
			}
		],

		"isAbility":	true,
		"cost":	12.55,
		"resource":	"mana",
		"range":	25,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"thunder_crash":
	{
		"name":	"Thunder Crash",
		"icon":	"warrior_talent_icon_thunderstruck.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Call down lightning on the target location, dealing $V1 Nature damage to all enemies within 6 yards.\n\nThunder Crash will consume up to 2 Lightning Orbs to deal an additional $V2 Nature damage per Lightning Orb consumed.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					0.39
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					0.095
				]
			}
		],

		"isAbility":	true,
		"cost":	14.5,
		"resource":	"mana",
		"range":	30,
		"cooldown":	26,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"elemental_mastery":
	{
		"name":	"Elemental Mastery",
		"icon":	"ability_shaman_ascendance.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Casting a Nature, Fire, and Frost spell within 7 seconds increases your Spell Power by $V1% for 15 seconds.",
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
	"firebrand":
	{
		"name":	"Firebrand",
		"icon":	"spell_fire_rune.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"lava_burst",
		],

		"description":	"Increase the Critical Hit chance of Lava Burst on enemies affected by your Flame Shock by $V1%.",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"improved_searing_totem":
	{
		"name":	"Improved Searing Totem",
		"icon":	"spell_fire_searingtotem.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the duration of Searing Totem by $V1 seconds.",
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
	"lava_spout":
	{
		"name":	"Lava Spout",
		"icon":	"spell_shaman_lavasurge.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"fire_nova_totem",
		],

		"description":	"Increase the damage of your Fire Nova Totem by $V1% of all Fire damage you deal after placing it.",
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
	"stormburst":
	{
		"name":	"Stormburst",
		"icon":	"ability_thunderking_thunderstruck.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"thunder_crash",
		],

		"description":	"Storm Crash will consume up to $V1 additional Lightning $V2.",
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
					"Orb",
					"Orbs",
					"Orbs"
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
	"concentration_totem":
	{
		"name":	"Concentration Totem",
		"icon":	"spell_nature_manaregentotem.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [
			"Water Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Concentration Totem at the target location that increases the Spell Critical Hit chance of allies within 15 yards by $V1%. Lasts 6 seconds.\n\nAll Water Totems share a cooldown.",
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	25,
		"cooldown":	180,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"elemental_blast":
	{
		"name":	"Elemental Blast",
		"icon":	"shaman_talent_elementalblast.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Harness the power of the elements to deal $V1 Fire, Frost, or Nature damage to the enemy.\n\nCasting a Fire, Frost, or Nature spell will change Elemental Blast's school of magic to that type.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.34
				]
			}
		],

		"isAbility":	true,
		"cost":	12.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	16,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"icy_touch":
	{
		"name":	"Icy Touch",
		"icon":	"spell_frost_freezingbreath.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Frost Shock has a $V1% chance to Immobilize the enemy for $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					20,
					40
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					2,
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
	"paralysis":
	{
		"name":	"Paralysis",
		"icon":	"spell_shaman_staticshock.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"thunder_crash",
		],

		"description":	"Thunder Crash Stuns enemies hit for $V1 seconds for each Lightning Orb consumed.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					0.25,
					0.50
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
	"flash_flood":
	{
		"name":	"Flash Flood",
		"icon":	"spell_shaman_tidalwaves.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"tidal_wave",
		],

		"description":	"Increase the width of Tidal Wave by $V1%.",
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
	"tidal_wave":
	{
		"name":	"Tidal Wave",
		"icon":	"ability_shawaterelemental_swirl.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summon a torrent of water that travels from the caster towards the target location. Enemies in its path are Stunned and take $V1 Physical damage per second. Must channel after casting to maintain spell. Last 3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Physical",
				"rank":	[
					0.18
				]
			}
		],

		"isAbility":	true,
		"cost":	18.1,
		"resource":	"mana",
		"range":	20,
		"cooldown":	240,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"crashing_waves":
	{
		"name":	"Crashing Waves",
		"icon":	"ability_bossfelmagnaron_waveempowered_blue.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"tidal_wave",
		],

		"description":	"Tidal Wave pushes enemies back $V1 yards per second.",
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
	"echo_of_the_elements":
	{
		"name":	"Echo of the Elements",
		"icon":	"ability_shaman_echooftheelements.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"elemental_blast",
		],

		"description":	"Elemental Blast has a secondary effect based on its school of magic:\n\nFire: Deals an additional $V1 Fire damage over 9 seconds.\n\nFrost: Has a $V2% chance to Stun the enemy for 1 second.\n\nNature: Increase the damage dealt by your Lightning Orbs by $V3% for 7 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.04,
					0.08,
					0.12
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
			},
			{
				"name":	"$V3",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"polarized":
	{
		"name":	"Polarized",
		"icon":	"spell_mage_flameorb_blue.jpg",
		"spec":	5,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"If you have no active Lightning Orbs, the cooldown of Static Charge recovers $V1% faster.",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"freezing_field":
	{
		"name":	"Freezing Field",
		"icon":	"spell_frost_chillingarmor.jpg",
		"spec":	5,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Enemies who are affected by your Frost Totem for at least 4 seconds are Stunned for $V1 seconds.",
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
}