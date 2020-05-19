var mage_abilities = {
	"fireball":
	{
		"name":	"Fireball",
		"icon":	"spell_fire_flamebolt.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Hurl a fiery ball at an enemy that deals $V1 Fire damage and Burns the target for $V2 Fire damage over 6 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.28
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.06
				]
			}
		],

		"isAbility":	true,
		"cost": 7.2,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"frostbolt":
	{
		"name":	"Frostbolt",
		"icon":	"spell_frost_frostbolt02.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Launch a bolt of ice at an enemy, dealing $V1 Frost damage and slowing their movement speed by $V2% for 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Frost",
				"rank":	[
					0.26
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					35
				]
			}
		],

		"isAbility":	true,
		"cost":	6.9,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	1.7,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"frost_armor":
	{
		"name":	"Frost Armor",
		"icon":	"spell_frost_frostarmor02.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Armor by $V1. Melee attackers have their movement speed and attack speed slowed by $V2% for 4 seconds.\n\nLasts until cancelled. Only one Armor spell can be active at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Frost",
				"rank":	[
					0.70
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	5
	},
	"arcane_missiles":
	{
		"name":	"Arcane Missiles",
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

		"description":	"Launch 3 Arcane Missiles at the enemy, dealing $V1 Arcane damage each.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Arcane",
				"rank":	[
					0.16
				]
			}
		],

		"isAbility":	true,
		"cost":	8.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	11,
		"castTime":	2.5,
		"isChanneled":	true,
		"requiredLevel":	7
	},
	"fire_blast":
	{
		"name":	"Fire Blast",
		"icon":	"spell_fire_fireball.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blast an enemy for $V1 Fire damage.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.30
				]
			}
		],

		"isAbility":	true,
		"cost":	8.5,
		"resource":	"mana",
		"range":	30,
		"cooldown":	14,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	10
	},
	"frost_nova":
	{
		"name":	"Frost Nova",
		"icon":	"spell_frost_frostnova.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Release a nova of frost, dealing $V1 Frost damage to enemies within 7 yards and Immobilizing them for $V2 seconds.\n\nIf an enemy takes more than 10% of its maximum health as damage, the effect will be broken.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Frost",
				"rank":	[
					0.16
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
		"cost":	10.17,
		"resource":	"mana",
		"range":	0,
		"cooldown":	28,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	13
	},
	"flamestrike":
	{
		"name":	"Flamestrike",
		"icon":	"spell_fire_selfdestruct.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Call down a pillar of flame at the target location. Enemies hit take $V1 Fire damage and are Burned for $V2 damage over 7 seconds.",
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
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.16
				]
			}
		],

		"isAbility":	true,
		"cost":	12.5,
		"resource":	"mana",
		"range":	30,
		"cooldown":	16,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	16
	},
	"arcane_explosion":
	{
		"name":	"Arcane Explosion",
		"icon":	"spell_nature_wispsplode.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"An explosion of arcane energy that deals $V1 Arcane damage to all enemies within 10 yards.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Arcane",
				"rank":	[
					0.21
				]
			}
		],

		"isAbility":	true,
		"cost":	13.8,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	18
	},
	"prismatic_armor":
	{
		"name":	"Prismatic Armor",
		"icon":	"spell_magearmor.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Resistance to all schools of magic by $V1.\n\nLasts until cancelled. Only one Armor spell can be active at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.09
				]
			}
		],

		"isAbility":	true,
		"cost":	14.3,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	20
	},
	"arcane_intellect":
	{
		"name":	"Arcane Intellect",
		"icon":	"spell_holy_magicalsentry.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase an ally's Intellect by $V1 and Spell Power by $V2 for 30 minutes.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					43
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					126
				]
			}
		],

		"isAbility":	true,
		"cost":	15.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"conjure_food":
	{
		"name":	"Conjure Food",
		"icon":	"inv_misc_food_08.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Conjure food for you and your allies to eat, restoring health and mana.\n\nConjured food disappears if logged out for more than 15 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	11.1,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	22
	},
	"mana_shield":
	{
		"name":	"Mana Shield",
		"icon":	"spell_shadow_detectlesserinvisibility.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Prevent $V1% of incoming damage to instead drain 2 mana per point of damage prevented. Lasts until cancelled.",
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
		"cost":	4.65,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	24
	},
	"polymorph":
	{
		"name":	"Polymorph",
		"icon":	"spell_nature_polymorph.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Transform an enemy into a sheep for up to 30 seconds. The sheep cannot attack or cast spells but will regenerate $V1% of its maximum health per second. Any damage taken will remove the effect.\n\nOnly one target can be affected by Polymorph at a time. Can only target Humanoids, Beasts, and Critters. Lasts up to 6 seconds against players and player summons.",
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
		"cost":	11.7,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"frost_ward":
	{
		"name":	"Frost Ward",
		"icon":	"spell_frost_frostward.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Absorb $V1 Frost damage. Lasts 5 seconds. ",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Frost",
				"rank":	[
					0.52
				]
			}
		],

		"isAbility":	true,
		"cost":	9.8,
		"resource":	"mana",
		"range":	0,
		"cooldown":	45,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"blink":
	{
		"name":	"Blink",
		"icon":	"spell_arcane_blink.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Teleport $V1 yards forward, unless an obstacle is blocking the path. Removes any Immobilize effects from the caster.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					20
				]
			}
		],

		"isAbility":	true,
		"cost":	10.75,
		"resource":	"mana",
		"range":	0,
		"cooldown":	21,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	29
	},
	"counterspell":
	{
		"name":	"Counterspell",
		"icon":	"spell_frost_iceshock.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Counter an enemy's spellcast, interrupting it and preventing any spell from that school of magic from being cast for $V1 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					5
				]
			}
		],

		"isAbility":	true,
		"cost":	9.5,
		"resource":	"mana",
		"range":	30,
		"cooldown":	36,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	32
	},
	"fire_ward":
	{
		"name":	"Fire Ward",
		"icon":	"spell_fire_firearmor.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Absorb $V1 Fire damage. Lasts 5 seconds. ",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Fire",
				"rank":	[
					0.52
				]
			}
		],

		"isAbility":	true,
		"cost":	9.8,
		"resource":	"mana",
		"range":	0,
		"cooldown":	45,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	34
	},
	"evocation":
	{
		"name":	"Evocation",
		"icon":	"spell_nature_purge.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Regenerate $V1% of your maximum Mana per second while channeling.",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	480,
		"castTime":	8,
		"isChanneled":	true,
		"requiredLevel":	36
	},
	"teleport_ironforge":
	{
		"name":	"Teleport: Ironforge",
		"icon":	"spell_arcane_teleportironforge.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Alliance",
			"Rune of Teleportation"
		],
		"prerequisites": [],

		"description":	"Teleports the caster to Ironforge.\n\nTeleporting will affect the caster with Temporal Distortion, preventing Teleporting for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	63.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"teleport_stormwind":
	{
		"name":	"Teleport: Stormwind",
		"icon":	"spell_arcane_teleportstormwind.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Alliance",
			"Rune of Teleportation"
		],
		"prerequisites": [],

		"description":	"Teleports the caster to Stormwind.\n\nTeleporting will affect the caster with Temporal Distortion, preventing Teleporting for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	63.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"teleport_darnassus":
	{
		"name":	"Teleport: Darnassus",
		"icon":	"spell_arcane_teleportdarnassus.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Alliance",
			"Rune of Teleportation"
		],
		"prerequisites": [],

		"description":	"Teleports the caster to Darnassus.\n\nTeleporting will affect the caster with Temporal Distortion, preventing Teleporting for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	63.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"teleport_orgrimmar":
	{
		"name":	"Teleport: Orgrimmar",
		"icon":	"spell_arcane_teleportorgrimmar.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Horde",
			"Rune of Teleportation"
		],
		"prerequisites": [],

		"description":	"Teleports the caster to Orgrimmar.\n\nTeleporting will affect the caster with Temporal Distortion, preventing Teleporting for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	63.0,
		"resource":	"mana",
		"range":	0,
		"cooldown": 0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"teleport_undercity":
	{
		"name":	"Teleport: Undercity",
		"icon":	"spell_arcane_teleportundercity.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Horde",
			"Rune of Teleportation"
		],
		"prerequisites": [],

		"description":	"Teleports the caster to Undercity.\n\nTeleporting will affect the caster with Temporal Distortion, preventing Teleporting for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	63.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"teleport_thunderbluff":
	{
		"name":	"Teleport: Thunder Bluff",
		"icon":	"spell_arcane_teleportthunderbluff.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Horde",
			"Rune of Teleportation"
		],
		"prerequisites": [],

		"description":	"Teleports the caster to Thunder Bluff.\n\nTeleporting will affect the caster with Temporal Distortion, preventing Teleporting for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	63.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"portal_ironforge":
	{
		"name":	"Portal: Ironforge",
		"icon":	"spell_arcane_portalironforge.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Alliance",
			"Rune of Portals"
		],
		"prerequisites": [],

		"description":	"Create a portal, allowing party or raid members to Teleport to Ironforge.\n\nAllies who use the portal are affected by Temporal Distortion, preventing them from Teleporting again for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	94.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	60
	},
	"portal_stormwind":
	{
		"name":	"Portal: Stormwind",
		"icon":	"spell_arcane_portalstormwind.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Alliance",
			"Rune of Portals"
		],
		"prerequisites": [],

		"description":	"Create a portal, allowing party or raid members to Teleport to Stormwind.\n\nAllies who use the portal are affected by Temporal Distortion, preventing them from Teleporting again for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	94.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	60
	},
	"portal_darnassus":
	{
		"name":	"Portal: Darnassus",
		"icon":	"spell_arcane_portaldarnassus.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Alliance",
			"Rune of Portals"
		],
		"prerequisites": [],

		"description":	"Create a portal, allowing party or raid members to Teleport to Darnassus.\n\nAllies who use the portal are affected by Temporal Distortion, preventing them from Teleporting again for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	94.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	60
	},
	"portal_orgrimmar":
	{
		"name":	"Portal: Orgrimmar",
		"icon":	"spell_arcane_portalorgrimmar.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Horde",
			"Rune of Portals"
		],
		"prerequisites": [],

		"description":	"Create a portal, allowing party or raid members to Teleport to Orgrimmar.\n\nAllies who use the portal are affected by Temporal Distortion, preventing them from Teleporting again for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	94.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	60
	},
	"portal_undercity":
	{
		"name":	"Portal: Undercity",
		"icon":	"spell_arcane_portalundercity.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Horde",
			"Rune of Portals"
		],
		"prerequisites": [],

		"description":	"Create a portal, allowing party or raid members to Teleport to Undercity.\n\nAllies who use the portal are affected by Temporal Distortion, preventing them from Teleporting again for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	94.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	60
	},
	"portal_thunderbluff":
	{
		"name":	"Portal: Thunder Bluff",
		"icon":	"spell_arcane_portalthunderbluff.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Horde",
			"Rune of Portals"
		],
		"prerequisites": [],

		"description":	"Create a portal, allowing party or raid members to Teleport to Thunder Bluff.\n\nAllies who use the portal are affected by Temporal Distortion, preventing them from Teleporting again for 30 minutes.",
		"values":	[],

		"isAbility":	true,
		"cost":	94.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	8,
		"isChanneled":	false,
		"requiredLevel":	60
	}
}