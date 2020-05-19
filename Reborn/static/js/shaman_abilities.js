var shaman_abilities =
{
	"lightning_bolt":
	{
		"name":	"Lightning Bolt",
		"icon":	"spell_nature_lightning.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Casts a bolt of lightning at an enemy, dealing $V1 Nature damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					0.37
				]
			}
		],

		"isAbility":	true,
		"cost":	8.9,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"flame_shock":
	{
		"name":	"Flame Shock",
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

		"description":	"Sear an enemy with fire, dealing $V1 Fire damage and an additional $V2 Fire damage over $V3 seconds.\n\nAll Shock spells share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.22
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.34
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
		"cost":	13.5,
		"resource":	"mana",
		"range":	20,
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"healing_wave":
	{
		"name":	"Healing Wave",
		"icon":	"spell_nature_healingwavelesser.jpg",
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
					0.55
				]
			}
		],

		"isAbility":	true,
		"cost":	11.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	6
	},
	"static_charge":
	{
		"name":	"Static Charge",
		"icon":	"spell_nature_lightningshield.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Surround yourself with 3 Lightings Orbs. Your attacks, abilities, and spells that target an enemy have a $V1% chance to consume a Lightning Orb, dealing $V2 additional Nature damage to the target.\n\nMelee attacks against you have a $V3% chance to consume a Lightning Orb, dealing $V4 Nature damage to the attacker.\n\nLasts 12 seconds.",
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
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					0.18
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
				"damageType":	"Nature",
				"rank":	[
					0.18
				]
			}
		],

		"isAbility":	true,
		"cost":	8.3,
		"resource":	"mana",
		"range":	0,
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	8
	},
	"searing_totem":
	{
		"name":	"Searing Totem",
		"icon":	"spell_fire_searingtotem.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Fire Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Searing Totem at the target location that attacks the nearest enemy within 10 yards for $V1 Fire damage every second. Lasts $V2 seconds.\n\nAll Fire Totems share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
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
		"cost":	14.5,
		"resource":	"mana",
		"range":	20,
		"cooldown":	60,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	10
	},
	"frost_shock":
	{
		"name":	"Frost Shock",
		"icon":	"spell_frost_frostshock.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shock an enemy with frost, dealing $V1 Frost damage and slowing their movement speed by $V2% for 4 seconds.\n\nAll Shock spells share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Frost",
				"rank":	[
					0.29
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
		"cost":	12.0,
		"resource":	"mana",
		"range":	15,
		"cooldown":	8,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	12
	},
	"stoneskin_totem":
	{
		"name":	"Stoneskin Totem",
		"icon":	"spell_nature_stoneskintotem.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Nature Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Stoneskin Totem at the target location that increases the armor of allies within 10 yards by $V1. Lasts $V2 seconds.\n\nAll Nature Totems share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					2.5
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
		"range":	25,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	14
	},
	"ancestral_spirit":
	{
		"name":	"Ancestral Spirit",
		"icon":	"spell_nature_regenerate.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
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
		"requiredLevel":	16
	},
	"remedy_curse":
	{
		"name":	"Remedy Curse",
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
		"cost":	9.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	3,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	18
	},
	"ghost_wolf":
	{
		"name":	"Ghost Wolf",
		"icon":	"spell_nature_spiritwolf.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Turn into a Ghost Wolf, increasing your movement speed by $V1%.\n\nGhost Wolf is removed if you attack, use an ability, or cast a spell.\n\nCooldown starts when you exit Ghost Wolf.",
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
		"cost":	13.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	32,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"strength_of_earth_totem":
	{
		"name":	"Strength of Earth Totem",
		"icon":	"spell_nature_earthbindtotem.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [
			"Nature Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Strength of Earth Totem at the caster's location that increases the Attack Power of allies within 15 yards by $V1%. Lasts 6 seconds.\n\nAll Nature Totems share a cooldown.",
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
		"cost":	10.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"earth_shock":
	{
		"name":	"Earth Shock",
		"icon":	"spell_nature_earthshock.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shock an enemy with earth, dealing $V1 Nature damage. Interrupts spellcasting and prevents any spell in that school from being cast for $V2 seconds.\n\nAll Shock spells share a cooldown.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Nature",
				"rank":	[
					0.255
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
		"cost":	14.0,
		"resource":	"mana",
		"range":	15,
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"water_walking":
	{
		"name":	"Water Walking",
		"icon":	"spell_frost_windwalkon.jpg",
		"spec":	0,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Allow a friendly target to walk across water for $V1 minutes. If the target takes any damage, the effect is lost.",
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
		"cost":	4.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"frost_totem":
	{
		"name":	"Frost Totem",
		"icon":	"spell_frost_chillingarmor.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [
			"Water Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Frost Totem at the target location that reduces the movement speed of all enemies within 10 yards by $V1%. Lasts 8 seconds.\n\nAll Water Totems share a cooldown.",
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
		"cost":	10.5,
		"resource":	"mana",
		"range":	15,
		"cooldown":	180,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"purge":
	{
		"name":	"Purge",
		"icon":	"spell_holy_dispelmagic.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Attempt to remove one harmful Magic effect from an ally.",
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
		"cost":	15.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"windfury_totem":
	{
		"name":	"Windfury Totem",
		"icon":	"spell_nature_windfury.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	5,
		"isOffset":	false,

		"requirements": [
			"Air Totem"
		],
		"prerequisites": [],

		"description":	"Summon a Windfury Totem at the target location that increases the Haste of allies within 10 yards by $V1%. Lasts 6 seconds.\n\nAll Air Totems share a cooldown.",
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	15,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	28
	},
	"reincarnation":
	{
		"name":	"Reincarnation",
		"icon":	"spell_nature_reincarnation.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Resurrect yourself upon death with $V1 health and $V2 mana.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					562
				]
			},
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					428
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	3600,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	37
	},
}