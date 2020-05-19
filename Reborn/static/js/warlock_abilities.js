var warlock_abilities = {
	"shadow_bolt":
	{
		"name":	"Shadow Bolt",
		"icon":	"spell_shadow_shadowbolt.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Send a bolt of darkness at the enemy, dealing $V1 Shadow damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.35
				]
			}
		],

		"isAbility":	true,
		"cost":	9.8,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"immolate":
	{
		"name":	"Immolate",
		"icon":	"spell_fire_immolation.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Immolate the enemy for $V1 Fire damage and Burns the target for an additional $V2 Fire damage over 8 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.23
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.52
				]
			}
		],

		"isAbility":	true,
		"cost":	12.85,
		"resource":	"mana",
		"range":	30,
		"cooldown":	8,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"corruption":
	{
		"name":	"Corruption",
		"icon":	"spell_shadow_abominationexplosion.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Corrupts the enemy, dealing $V1 Shadow damage over $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.684
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	6
	},
	"soul_skin":
	{
		"name":	"Soul Skin",
		"icon":	"spell_shadow_felarmour.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Vitality by $V1% of your maximum health.\n\nLasts until cancelled.",
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
		"cost":	16.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	8
	},
	"summon_imp":
	{
		"name":	"Summon Imp",
		"icon":	"spell_shadow_summonimp.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summon an Imp under the command of the Warlock.",
		"values":	[],

		"isAbility":	true,
		"cost":	21.65,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	10
	},
	"drain_life":
	{
		"name":	"Drain Life",
		"icon":	"spell_shadow_lifedrain02.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Deal $V1 Shadow damage per second to an enemy and restore health to the caster equal to 100% of the damage dealt.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.145
				]
			}
		],

		"isAbility":	true,
		"cost":	12.5,
		"resource":	"mana",
		"range":	30,
		"cooldown":	12,
		"castTime":	3,
		"isChanneled":	true,
		"requiredLevel":	12
	},
	"agony":
	{
		"name":	"Agony",
		"icon":	"spell_shadow_curseofsargeras.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Inflicts increasing torment on the enemy, adding a stack of Agony every $V1 seconds for 18 seconds. Each stack of Agony deals $V2 Shadow damage per second.\n\nMaximum 7 stacks. Refreshing Agony maintains its current stack count.",
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
				"damageType":	"Shadow",
				"rank":	[
					0.014
				]
			}
		],

		"isAbility":	true,
		"cost":	12.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	9,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	14
	},
	"life_tap":
	{
		"name":	"Life Tap",
		"icon":	"spell_shadow_burningspirit.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Sacrifice $V1% of your maximum health to gain mana equal to the health lost.",
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
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	16
	},
	"fear":
	{
		"name":	"Fear",
		"icon":	"spell_shadow_possession.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Strike fear into the enemy, causing it to run away for up to 8 seconds.\n\nIf the target takes more than $V1% of its maximum health as damage, the effect will be broken. Only one target can be feared at a time.",
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
		"cost":	13.45,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	18
	},
	"summon_voidwalker":
	{
		"name":	"Summon Voidwalker",
		"icon":	"spell_shadow_summonvoidwalker.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summon a Voidwalker under the command of the Warlock",
		"values":	[],

		"isAbility":	true,
		"cost":	26.1,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"health_funnel":
	{
		"name":	"Health Funnel",
		"icon":	"spell_shadow_lifedrain.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Transfer $V1 health per second from the caster to your Demon.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"maxHealth",
				"damageType":	"None",
				"rank":	[
					0.05
				]
			}
		],

		"isAbility":	true,
		"cost":	7.0,
		"resource":	"mana",
		"range":	25,
		"cooldown":	0,
		"castTime":	4,
		"isChanneled":	true,
		"requiredLevel":	20
	},
	"curse_of_exhaustion":
	{
		"name":	"Curse of Exhaustion",
		"icon":	"spell_shadow_grimward.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce an enemy's movement speed by $V1% for $V2 seconds.\n\nOnly one Curse per Warlock may be active on a target.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					35
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
		"cost":	11.9,
		"resource":	"mana",
		"range":	30,
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"unending_breath":
	{
		"name":	"Unending Breath",
		"icon":	"spell_shadow_demonbreath.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Allows an ally to breathe underwater for $V1 minutes.",
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
		"cost":	6.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"drain_soul":
	{
		"name":	"Drain Soul",
		"icon":	"spell_shadow_haunting.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Drains the soul of an enemy, dealing $V1 Shadow damage every second. When Drain Soul deals damage, there is a $V2% chance a Soul Shard will be generated.\n\nIf an enemy dies while affected by Drain Soul, there is a 100% chance it will generate a Soul Shard.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.21
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
		"cost":	14.6,
		"resource":	"mana",
		"range":	30,
		"cooldown":	21,
		"castTime":	3,
		"isChanneled":	true,
		"requiredLevel":	24
	},
	"healthstone":
	{
		"name":	"Healthstone",
		"icon":	"inv_stone_04.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Soul Shard"
		],
		"prerequisites": [],

		"description":	"Create a Healthstone that can be consumed to restore $V1 health.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.6
				]
			}
		],

		"isAbility":	true,
		"cost":	9.95,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"howl_of_terror":
	{
		"name":	"Howl of Terror",
		"icon":	"spell_shadow_deathscream.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Sew visions of horror into all enemies within 6 yards, causing them to run away in fear for up to $V1 seconds.\n\nIf an enemy takes from than 15% of its maximum health as damage, the effect will be broken.",
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
		"cost":	16.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	60,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	28
	},
	"curse_of_weakness":
	{
		"name":	"Curse of Weakness",
		"icon":	"spell_shadow_curseofmannoroth.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Enfeeble an enemy, reducing their Attack Power by $V1 for 4 seconds.\n\nOnly one Curse per Warlock may be active on a target.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.48
				]
			}
		],

		"isAbility":	true,
		"cost":	12.8,
		"resource":	"mana",
		"range":	30,
		"cooldown":	26,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	30
	},
	"summon_succubus":
	{
		"name":	"Summon Succubus",
		"icon":	"spell_shadow_summonsuccubus.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summon a Succubus under the command of the Warlock.",
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
		"cost":	23.6,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	32
	},
	"death_coil":
	{
		"name":	"Death Coil",
		"icon":	"spell_shadow_deathcoil.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Deal $V1 Shadow damage to an enemy and cause them to run away in horror for $V2 seconds. Heals the Warlock for 150% of the damage dealt.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.30
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
		"cost":	15.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	34
	},
	"soulstone":
	{
		"name":	"Soulstone",
		"icon":	"inv_misc_orb_04.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Soul Shard"
		],
		"prerequisites": [],

		"description":	"Create a Soulstone that can be used to store the soul of the target party or raid member, allowing the target to resurrect upon death. The target resurrects with $V1 health and $V2 mana. Lasts 30 minutes.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					1.6
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					1.1
				]
			}
		],

		"isAbility":	true,
		"cost":	25.6,
		"resource":	"mana",
		"range":	0,
		"cooldown":	1800,
		"castTime":	5,
		"isChanneled":	false,
		"requiredLevel":	37
	},
	"ritual_of_summoning":
	{
		"name":	"Ritual of Summoning",
		"icon":	"spell_shadow_twilight.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Soul Shard"
		],
		"prerequisites": [],

		"description":	"Begins a ritual that summons the targeted group member. Requires the caster and 2 additional party members to complete the ritual. In order to participate, all players must be out of combat and right-click the portal and not move until the ritual is complete.",
		"values":	[],

		"isAbility":	true,
		"cost":	41.8,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"curse_of_tongues":
	{
		"name":	"Curse of Tongues",
		"icon":	"spell_shadow_curseoftounges.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Force the enemy to speak in demonic, slowing their casting speed by $V1% for $V2 seconds.\n\nOnly one Curse per Warlock may be active on a target.",
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
					4
				]
			}
		],

		"isAbility":	true,
		"cost":	14.8,
		"resource":	"mana",
		"range":	30,
		"cooldown":	28,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	43
	},
	"summon_felhunter":
	{
		"name":	"Summon Felhunter",
		"icon":	"spell_shadow_summonfelhunter.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summon a Felhunter under the command of the Warlock.",
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
		"cost":	23.05,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	46
	},
	"enslave_demon":
	{
		"name":	"Enslave Demon",
		"icon":	"spell_shadow_enslavedemon.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Soul Shard"
		],
		"prerequisites": [],

		"description":	"Enslaves a target demon up to your level, putting it under your command. While enslaved, the demon's Haste is reduced by $V1%. Lasts 5 minutes.\n\nIf a demon is repeatedly enslaved, it will gain a 25% chance to resist the next attempt for each successful enslavement.",
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
		"cost":	36.4,
		"resource":	"mana",
		"range":	25,
		"cooldown":	0,
		"castTime":	4,
		"isChanneled":	false,
		"requiredLevel":	48
	},
	"inferno":
	{
		"name":	"Inferno",
		"icon":	"spell_shadow_summoninfernal.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Soul Shard"
		],
		"prerequisites": [],

		"description":	"Summons a meteor from the Twisting Nether, dealing $V1 Fire damage and stunning all enemy targets in the area for $V2 seconds.\n\nAn Infernal rises from the crater, under the command of the Warlock. The Infernal is released if the Warlock dies, causing it to become hostile to allies. Only useable outdoors.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.85
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					2.5
				]
			}
		],
		
		"isAbility":	true,
		"cost":	32.9,
		"resource":	"mana",
		"range":	30,
		"cooldown":	3600,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	54
	},
}