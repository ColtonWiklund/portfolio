var paladin_abilities =
{
	"hammer_of_the_righteous":
	{
		"name":	"Hammer of the Righteous",
		"icon":	"ability_paladin_hammeroftherighteous.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,
		
		"position":	0,
		"isOffset":	false,

		"requirements": [
			"Melee Weapon"
		],
		"prerequisites": [],
		
		"description":	"Deal $V1 Holy damage to the enemy.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.335
				]
			}
		],

		"isAbility":	true,
		"cost":	5.5,
		"resource":	"mana",
		"range":	"melee",
		"cooldown":	5,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"devotion_aura":
	{
		"name":	"Devotion Aura",
		"icon":	"spell_holy_devotionaura.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Provides additional Armor to all party or raid members within 30 yards equal to $V1% of your base Armor.\n\nPlayers may only have one Aura on them per Paladin at any one time.",
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
		"cost":	0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	2
	},
	"seal_of_the_crusader":
	{
		"name":	"Seal of the Crusader",
		"icon":	"ability_warrior_innerrage.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"All melee attacks have a 25% chance of dealing $V1 Holy damage to the target.\n\nUnleashing this Seal's energy will cause $V2 Holy Damage and has a 25% chance of stunning the target for 1.5 seconds.\n\nLasts until cancelled. Only one Seal may be active on the Paladin at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.15
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.32
				]
			}
		],

		"isAbility":	true,
		"cost":	9.5,
		"resource":	"mana",
		"range":	0,
		"cooldown":	10,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	3
	},
	"judgement":
	{
		"name":	"Judgement",
		"icon":	"spell_holy_righteousfury.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Deal $V1 Holy damage and unleash the energy of the active Seal on the enemy.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.225
				]
			}
		],

		"isAbility":	true,
		"cost":	8.0,
		"resource":	"mana",
		"range":	15,
		"cooldown":	11,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	5
	},
	"flash_of_light":
	{
		"name":	"Flash of Light",
		"icon":	"spell_holy_flashheal.jpg",
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
					0.43
				]
			}
		],

		"isAbility":	true,
		"cost":	9.8,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	8
	},
	"divine_protection":
	{
		"name":	"Divine Protection",
		"icon":	"spell_holy_restoration.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"You are protected from all physical attacks and spells for $V1 seconds, but during that time you cannot attack or use physical abilities yourself.\n\nOnce protected, you cannot be made invulnerable by Divine Shield, Divine Protection or Hand of Protection again for 1 minute.",
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
		"cost":	10.6,
		"resource":	"mana",
		"range":	0,
		"cooldown":	600,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	10
	},
	"purify":
	{
		"name":	"Purify",
		"icon":	"spell_holy_purify.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Attempt to remove one Disease effect from an ally.",
		"values":	[],

		"isAbility":	true,
		"cost":	6.9,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	12
	},
	"holy_light":
	{
		"name":	"Holy Light",
		"icon":	"spell_holy_holybolt.jpg",
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
		"cost":	10.4,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	14
	},
	"redemption":
	{
		"name":	"Redemption",
		"icon":	"spell_holy_resurrection.jpg",
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
		"requiredLevel":	14
	},
	"consecration":
	{
		"name":	"Consecration",
		"icon":	"spell_holy_innerfire.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Consecrates the ground within 8 yards of the Paladin, dealing $V1 Holy damage every second to enemies who stand on it. Lasts 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.115
				]
			}
		],

		"isAbility":	true,
		"cost":	10.8,
		"resource":	"mana",
		"range":	0,
		"cooldown":	14,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	16
	},
	"righteous_fury":
	{
		"name":	"Righteous Fury",
		"icon":	"spell_holy_sealoffury.jpg",
		"spec":	4,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the threat generated by your Holy damage by $V1%. Lasts until cancelled.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					45
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
	"blessing_of_might":{
		"name":"Blessing of Might",
		"icon":"spell_holy_fistofjustice.jpg",
		"spec":2,
		"specTier":1,
		"isUnlocked":false,
		"currentRank":0,
		"maxRank":1,
		"position":0,
		"isOffset":false,

		"requirements":[],
		"prerequisites":[],

		"description":"Place a Blessing on an ally, increasing their Attack Power by $V1 for 30 minutes.\n\nOnly one Blessing per Paladin may be active at a time.",
		"values":[
			{
				"name":"$V1",
				"modifier":"None",
				"damagetype":"None",
				"rank":[
					132
				]
			}
		],
		"isAbility": true,
		"cost": 12.0,
		"resource": "mana",
		"range": 40,
		"cooldown": 0,
		"castTime": 0,
		"isChanneled": false,
		"requiredLevel": 18
	},
	"hand_of_reckoning":
	{
		"name":	"Hand of Reckoning",
		"icon":	"spell_holy_unyieldingfaith.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Command the attention of an enemy, forcing them to attack you for $V1 seconds.",
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
		"cost":	3.0,
		"resource":	"mana",
		"range":	15,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	18
	},
	"exorcism":
	{
		"name":	"Exorcism",
		"icon":	"spell_holy_excorcism_02.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blasts an enemy with Holy energy, dealing $V1 Holy damage or $V2 Holy damage if they are an Undead or Demon.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.55
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.6875
				]
			}
		],

		"isAbility":	true,
		"cost":	9.8,
		"resource":	"mana",
		"range":	30,
		"cooldown":	11,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	21
	},
	"remove_poison":
	{
		"name":	"Remove Poison",
		"icon":	"spell_nature_nullifypoison.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Attempt to remove one Poison effect from an ally.",
		"values":	[],

		"isAbility":	true,
		"cost":	10.15,
		"resource":	"mana",
		"range":	40,
		"cooldown":	8,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	23
	},
	"blessing_of_kings":
	{
		"name":	"Blessing of Kings",
		"icon":	"spell_magic_magearmor.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Place a Blessing on an ally, increasing their Armor, Stamina, and Vitality by $V1% for 30 minutes.\n\nOnly one Blessing per Paladin may be active at a time.",
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
		"cost":	9.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"shadow_resistance_aura":
	{
		"name":	"Shadow Resistance Aura",
		"icon":	"spell_shadow_sealofkings.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Provides $V1 additional Shadow Resistance to all party and raid members within 30 yards.\n\nPlayers may only have one Aura on them per Paladin at any one time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.075
				]
			}
		],

		"isAbility":	true,
		"cost":	0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	26
	},
	"hand_of_freedom":
	{
		"name":	"Hand of Freedom",
		"icon":	"spell_holy_sealofvalor.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Grants an ally immunity to movement impairing effects for $V1 seconds.",
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
		"cost":	11.1,
		"resource":	"mana",
		"range":	40,
		"cooldown":	23,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	29
	},
	"blessing_of_wisdom":
	{
		"name":	"Blessing of Wisdom",
		"icon":	"spell_holy_sealofwisdom.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"seal_of_wisdom",
		],

		"description":	"Place a Blessing on an ally, increasing their Spirit by $V1 for 30 minutes. Only one Blessing per Paladin may be active at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"baseMana",
				"damageType":	"None",
				"rank":	[
					0.023
				]
			}
		],

		"isAbility":	true,
		"cost":	14.5,
		"resource":	"mana",
		"range":	40,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	32
	},
	"sense_undead":
	{
		"name":	"Sense Undead",
		"icon":	"spell_holy_senseundead.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shows the location of all nearby undead on the minimap until cancelled. Only one type of tracking can be used at a time.",
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
		"cost":	0.0,
		"resource":	"mana",
		"range":	60,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	32
	},
	"divine_shield":
	{
		"name":	"Divine Shield",
		"icon":	"spell_holy_divineintervention.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Protects the Paladin from all harmful spells and damage for 8 seconds, but reduces all damage you deal by $V1%.\n\nOnce protected, you cannot be made invulnerable by Divine Shield, Divine Protection or Hand of Protection again for 1 minute.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					50
				]
			}
		],

		"isAbility":	true,
		"cost":	13.68,
		"resource":	"mana",
		"range":	0,
		"cooldown":	600,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	34
	},
	"frost_resistance_aura":
	{
		"name":	"Frost Resistance Aura",
		"icon":	"spell_frost_wizardmark.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Provides $V1 additional Frost Resistance to all party and raid members within 30 yards.\n\nPlayers may only have one Aura on them per Paladin at any one time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.075
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	37
	},
	"summon_warhorse":
	{
		"name":	"Summon Warhorse",
		"icon":	"spell_nature_swiftness.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summons a warhorse, which serves as a mount. Increases Movement Speed by 60%.",
		"values":	[],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	40
	},
	"lay_on_hands":
	{
		"name":	"Lay on Hands",
		"icon":	"spell_holy_layonhands.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Heals a friendly target for an amount equal to the Paladin's maximum health and restores $V1 of their mana. Drains all of the Paladin's remaining mana when used.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					550
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	3600,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	42
	},
	"fire_resistance_aura":
	{
		"name":	"Fire Resistance Aura",
		"icon":	"spell_fire_sealoffire.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Provides $V1 additional Fire Resistance to all party and raid members within 30 yards.\n\nPlayers may only have one Aura on them per Paladin at any one time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.075
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	45
	},
	"divine_intervention":
	{
		"name":	"Divine Intervention",
		"icon":	"spell_nature_timestop.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"The paladin sacrifices himself to remove the targeted party member from harms way. Enemies will stop attacking the protected party member, who will be immune to all harmful spells and attacks but cannot take any action for $V1 min.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					3
				]
			}
		],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	42,
		"cooldown":	3600,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	48
	},
	"summon_charger":
	{
		"name":	"Summon Charger",
		"icon":	"ability_mount_charger.jpg",
		"spec":	6,
		"specTier":	0,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Summons a charger, which serves as a mount. Increases Movement Speed by 100%.",
		"values":	[],

		"isAbility":	true,
		"cost":	0.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	60
	},
}