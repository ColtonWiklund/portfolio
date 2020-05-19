var paladin_talents =
{
	"providence":
	{
		"name":	"Providence",
		"icon":	"spell_holy_divineprovidence.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Each spell you cast has a $V1% chance to reduce the cast time of your next Holy Light by 25%. Lasts 8 seconds.",
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
	"purity_of_light":
	{
		"name":	"Purity of Light",
		"icon":	"spell_holy_flashheal.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the Critical Hit chance of Flash of Light by $V1%.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					1.5,
					3,
					4.5,
					6,
					7.5
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
	"sacred_cleansing":
	{
		"name":	"Sacred Cleansing",
		"icon":	"ability_paladin_sacredcleansing.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the mana cost of Purify and Remove Poison by $V1%.",
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
	"illumination":
	{
		"name":	"Illumination",
		"icon":	"spell_holy_greaterheal.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Getting a Critical Hit with Flash of Light, Holy Light, or Holy Shock reduces the mana cost of your next spell by $V1 mana.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"baseMana",
				"damageType":	"None",
				"rank":	[
					0.015,
					0.03,
					0.045,
					0.06,
					0.075
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
	"holy_shock":
	{
		"name":	"Holy Shock",
		"icon":	"spell_holy_searinglight.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Blasts a target with Holy energy, restoring $V1 health to an ally or dealing $V2 damage to an enemy.",
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
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.5
				]
			}
		],

		"isAbility":	true,
		"cost":	11.53,
		"resource":	"mana",
		"range":	30,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"improved_resistance_auras":
	{
		"name":	"Improved Resistance Auras",
		"icon":	"spell_nature_wispheal.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increases the Resistance provided by Fire Resistance Aura, Frost Resistance Aura, and Shadow Resistance Aura by $V1% and their range by $V2 yards.",
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
					4,
					7,
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
	"lights_grace":
	{
		"name":	"Light's Grace",
		"icon":	"spell_holy_surgeoflight.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Holy Light applies Light's Grace to the ally, increasing the Critical Hit chance of your Healing spells on them by 1%.\n\nMaximum $V1 stacks. Lasts 14 seconds.",
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
	"seal_of_light":
	{
		"name":	"Seal of Light",
		"icon":	"spell_holy_healingaura.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your Flash of Light, Holy Light, and Holy Shock have a 25% chance restore an additional $V1 health to the target.\n\nUnleashing this Seal's energy will cause all spells and melee attacks against the target to have a 10% chance to heal the attacker for $V2 health. Lasts 8 seconds.\n\nLasts until cancelled. Only one Seal may be active on the Paladin at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.1
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.02
				]
			}
		],

		"isAbility":	true,
		"cost":	11.3,
		"resource":	"mana",
		"range":	0,
		"cooldown":	30,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_favor":
	{
		"name":	"Divine Favor",
		"icon":	"spell_holy_heal02.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Become immune to Interrupts and Silences during your next Flash of Light or Holy Light.",
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
		"cost":	5.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	90,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"shield_of_the_templar":
	{
		"name":	"Shield of the Templar",
		"icon":	"ability_paladin_shieldofthetemplar.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [
			"Shield"
		],
		"prerequisites": [],

		"description":	"Throw your shield, healing all allies on its path for $V1 health.\n\nThe shield will travel to the target location and then to your target. If no target is selected, it will return to the caster instead.\n\nThe shield will travel up to 40 yards total.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.45
				]
			}
		],

		"isAbility":	true,
		"cost":	12.65,
		"resource":	"mana",
		"range":	30,
		"cooldown":	40,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_focus":
	{
		"name":	"Divine Focus",
		"icon":	"spell_holy_healingfocus.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduces the pushback suffered from damage while casting Flash of Light and Holy Light by $V1%.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					14,
					28,
					42,
					56,
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
	"seal_of_light_judgement":
	{
		"name":	"Seal of Light Judgement",
		"icon":	"ability_paladin_blessedmending.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"seal_of_light",
		],

		"description":	"Increase the duration of your Seal of Light's Judgement by $V1 seconds.",
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
	"resonance":
	{
		"name":	"Resonance",
		"icon":	"ability_paladin_lightoftheprotector.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"holy_shock",
		],

		"description":	"Holy Shock increases the Critical Hit chance of your healing spells by $V1% for 8 seconds. The effect is lost after a healing spell Critically Hits.",
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
	"show_of_faith":
	{
		"name":	"Show of Faith",
		"icon":	"spell_holy_absolution.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"divine_favor"
		],

		"description":	"Divine Favor increases the Critical Hit chance of your next Flash of Light or Holy Light by $V1%.",
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
	"divine_path":
	{
		"name":	"Divine Path",
		"icon":	"inv_shield_1h_artifactnorgannon_d_06.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"shield_of_the_templar",
		],

		"description":	"Shield of the Templar can travel an additional $V1 yards.",
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
	"spiritual_guidance":
	{
		"name":	"Spiritual Guidance",
		"icon":	"spell_holy_spiritualguidence.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Spirit by $V1 for every 1,000 Armor you gain from equipped items.",
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
	"empower":
	{
		"name":	"Empower",
		"icon":	"spell_holy_auramastery.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the effect of your Aura on all party or raid members:\n\nDevotion Aura: Increase the Armor provided by 400%.\n\nResistance Auras: Increase the Shadow, Frost, or Fire Resistance provided by 250%.\n\nSanctity Aura: Increase all healing received by 15%.\n\nLasts $V1 seconds.",
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
		"cost":	15.6,
		"resource":	"mana",
		"range":	40,
		"cooldown":	180,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"holy_aegis":
	{
		"name":	"Holy Aegis",
		"icon":	"ability_racial_holyresistance.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"shield_of_the_templar",
		],

		"description":	"Shield of the Templar heals for an additional $V1% for each ally it passes through.",
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
	"holy_beacon":
	{
		"name":	"Holy Beacon",
		"icon":	"spell_holy_beaconoflight.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"pillar_of_light",
		],

		"description":	"Every healing spell you cast on the target of your Pillar of Light increases its healing range by $V1 yards.",
		"values":	[
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
	"pillar_of_light":
	{
		"name":	"Pillar of Light",
		"icon":	"ability_paladin_toweroflight.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],
		
		"description":	"Enshroud an ally in light, causing your healing spells to also heal allies within 10 yards of the target for $V1% of the heal amount. Lasts $V2 seconds.",
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
					8
				]
			}
		],

		"isAbility":	true,
		"cost":	18.6,
		"resource":	"mana",
		"range":	40,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_spirit":
	{
		"name":	"Divine Spirit",
		"icon":	"spell_holy_layonhands.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"pillar_of_light"
		],

		"description":	"Pillar of Light increases the Critical Hit chance of your healing spells on the target by $V1%.",
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
	"judgement_range":
	{
		"name":	"Judgement Range",
		"icon":	"ability_paladin_longarmofthelaw.jpg",
		"spec":	1,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the range of Judgement by $V1 yards.",
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
	"judgement_healing":
	{
		"name":	"Judgement Healing",
		"icon":	"ability_paladin_judgementofthepure.jpg",
		"spec":	1,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Judgement restores $V1 health to all allies within 6 yards of the target.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.06,
					0.12,
					0.18
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
	"call_on_the_light":
	{
		"name":	"Call on the Light",
		"icon":	"spell_holy_crusade.jpg",
		"spec":	1,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Casting Judgement, Holy Shock, or Exorcism has a $V1% chance of making your next Flash of Light an instant cast.\n\nThis effect can not occur more than once every 6 seconds.",
		"values":	[
			{
				"name":	"$V1",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"hand_of_freedom_duration":
	{
		"name":	"Hand of Freedom Duration",
		"icon":	"spell_holy_sealofvalor.jpg",
		"spec":	1,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the duration of Hand of Freedom by $V1 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					0.7,
					1.4,
					2.0
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
	"hallowed_ground":
	{
		"name":	"Hallowed Ground",
		"icon":	"spell_holy_circleofrenewal.jpg",
		"spec":	1,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Allies standing in your Consecration are healed for $V1 health every second.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.02,
					0.04,
					0.06,
					0.08
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
	"sanctity_aura":
	{
		"name":	"Sanctity Aura",
		"icon":	"spell_holy_mindvision.jpg",
		"spec":	1,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],
		
		"description":	"Increases all Holy damage and healing done by allies within 30 yards by $V1%.\n\nPlayers may only have one Aura on them per Paladin at any one time.",
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
		"range":	30,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"benediction":
	{
		"name": 	"Benediction",
		"icon": 	"spell_arcane_portalironforge.jpg",
		"spec": 	2,
		"specTier": 	1,
		"isUnlocked": 	false,
		"currentRank": 	0,
		"maxRank": 	5,
		"position": 0,
		"isOffset": false,
		"requirements":[

		],
		"prerequisites":[

		],
		"description":"Reduce the mana cost of your Seals, Judgement, Exorcism, and Consecration by $V1%.",
		"values":[
			{
				"name":"$V1",
				"modifier":"None",
				"damagetype":"None",
				"rank":[
					5,
					10,
					15,
					20,
					25
				]
			}
		],
		"isAbility": 	false,
		"cost": 	0,
		"resource": "mana",
		"range": 	0,
		"cooldown": 0,
		"castTime": 0,
		"isChanneled": 	false,
		"requiredlevel": 0
	},
	"vindication":{
		"name": "Vindication",
		"icon": "spell_holy_vindication.jpg",
		"spec": 	2,
		"specTier": 1,
		"isUnlocked": 	false,
		"currentRank": 	0,
		"maxRank": 	5,
		"position": 1,
		"isOffset": false,

		"requirements": [],
		"prerequisites":[],

		"description": "Hammer of the Righteous, Hammer of Wrath, and Divine Storm increase all Holy damage the target takes from you by 1%.\n\nMaximum $V1 stacks. Lasts 15 seconds.",
		"values":[
			{
				"name":"$V1",
				"modifier":"None",
				"damagetype":"None",
				"rank":[
					1,
					2,
					3,
					4,
					5
				]
			}
		],
		"isAbility": false,
		"cost": 	0,
		"resource": "Mana",
		"range": 	0,
		"cooldown": 0,
		"castTime": 0,
		"isChanneled": 	false,
		"requiredLevel": 0
	},
	"judgement_cooldown":{
		"name":"Judgement Cooldown",
		"icon":"spell_holy_righteousfury.jpg",
		"spec": 	2,
		"specTier": 2,
		"isUnlocked": false,
		"currentRank":0,
		"maxRank": 	3,
		"position": 0,
		"isOffset": false,

		"requirements":[],
		"prerequisites":[],

		"description":"Reduce the cooldown of Judgement by $V1 seconds.",
		"values":[
			{
				"name":"$V1",
				"modifier":"None",
				"damagetype":"None",
				"rank":[
					1,
					2,
					3
				]
			}
		],

		"isAbility": false,
		"cost": 	0,
		"resource": "Mana",
		"range": 	0,
		"cooldown": 0,
		"castTime": 0,
		"isChanneled": 	false,
		"requiredlevel":0
	},
	"two-hand_weapon_specialization":{
		"name": "Two-Hand Weapon Specialization",
		"icon": "inv_sword_2h_nazmirraid_d_01.jpg",
		"spec":  	2,
		"specTier": 2,
		"isUnlocked":  false,
		"currentRank": 0,
		"maxRank":  5,
		"position": 1,
		"isOffset": false,
		"requirements":[

		],
		"prerequisites":[

		],
		"description": "Increase the damage you deal with two-hand weapons by $V1%.",
		"values":[
			{
				"name":"$V1",
				"modifier":"None",
				"damagetype":"None",
				"rank":[
					2,
					4,
					6,
					8,
					10
				]
			}
		],
		"isAbility": false,
		"cost": 0,
		"resource": "Mana",
		"range": 0,
		"cooldown": 0,
		"castTime": 0,
		"isChanneled": false,
		"requiredlevel": 0
	},
	"seal_of_the_righteous":
	{
		"name":	"Seal of the Righteous",
		"icon":	"spell_holy_retributionaura.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your melee attacks deal an additional $V1 Holy damage to the target over 7 seconds. Maximum 5 stacks.\n\nUnleashing this Seal's energy will increase the damage the target takes from your next Divine Storm, Hammer of Wrath, or Exorcism by 3% for each stack on the target.\n\nLasts until cancelled. Only one Seal may be active on the Paladin at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.05
				]
			}
		],

		"isAbility":	true,
		"cost":	10.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	10,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"pursuit_of_justice":
	{
		"name":	"Pursuit of Justice",
		"icon":	"ability_paladin_speedoflight.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Using Judgement on an enemy more that 10 yards away increases your movement speed by $V1% for 4 seconds.",
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
	"divine_storm":
	{
		"name":	"Divine Storm",
		"icon":	"ability_paladin_divinestorm.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [
			"Two-Hand Weapon",
		],
		"prerequisites": [],

		"description":	"Unleash a storm of divine energy, hitting an enemy for $V1 Physical Damage and dealing $V2 Holy damage to all enemies within 5 yards of the Paladin.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Physical",
				"rank":	[
					0.45
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.35
				]
			}
		],

		"isAbility":	true,
		"cost":	13.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	13,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"seal_of_the_crusader_stun":
	{
		"name":	"Seal of the Crusader Stun",
		"icon":	"ability_warrior_innerrage.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increases the Stun chance of Seal of the Crusader's Judgement by $V1%.",
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
	"absolution":
	{
		"name":	"Absolution",
		"icon":	"ability_paladin_artofwar.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Critical Hits with your autoattacks, Hammer of the Righteous, or Hammer of Wrath have a $V1% chance to increase the damage of your next Exorcism by 15% and make it an instant cast.\n\nThis effect can not occur more than once every 3 seconds.",
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
	"inquisition":
	{
		"name":	"Inquisition",
		"icon":	"spell_paladin_inquisition.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"divine_storm",
		],

		"description":	"Reduce the cooldown of Divine Storm by $V1 seconds if it only hits one enemy.",
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
	"vengeance":
	{
		"name":	"Vengeance",
		"icon":	"ability_paladin_bladeofjustice.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Imbue your weapon with light, striking the enemy for $V1 Physical damage and $V2 Holy damage.\n\nVengeance deals 20% more damage if the enemy has dealt damage to you within the past 4 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.28
				]
			},
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.28
				]
			}
		],

		"isAbility":	true,
		"cost":	11.0,
		"resource":	"mana",
		"range":	10,
		"cooldown":	9,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"righteous_power":
	{
		"name":	"Righteous Power",
		"icon":	"spell_holy_weaponmastery.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"seal_of_the_righteous"
		],
		
		"description":	"The Attack Power of your next ability is increased by $V1% for each stack of Seal of the Righteous on an enemy that dies within 15 yards. Lasts 3 seconds.",
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
	"retribution_aura":
	{
		"name":	"Retribution Aura",
		"icon":	"spell_holy_sealofblood.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],
		
		"description":	"Provides an aura of retribution to all allies within 30 yards, causing each melee attack against them to have a 25% chance to deal $V1 Holy damage to the attacker.\n\nPlayers may only have one Aura on them per Paladin at any one time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.1
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
		"requiredLevel":	0
	},
	"blades_of_light":
	{
		"name":	"Blades of Light",
		"icon":	"ability_paladin_sheathoflight.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"divine_storm"
		],

		"description":	"Each enemy hit by Divine Storm has a $V1% chance of reducing the cooldown of Consecration by 1 second.",
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
	"crusader":
	{
		"name":	"Crusader",
		"icon":	"ability_paladin_veneration.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,
		
		"position":	2,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"When an ally within 25 yards takes more than 30% of their maximum health as damage within 2 seconds you gain a stack of Crusader.\n\nEach stack of Crusader increases all Holy damage you deal by 5% for $V1 seconds.\n\nMaximum 3 Stacks. Stacks refresh independently. The same ally cannot trigger this effect more than once every 30 seconds.",
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
	"justice":
	{
		"name":	"Justice",
		"icon":	"spell_holy_crusaderstrike.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"vengeance"
		],

		"description":	"Increase the damage dealt by Vengeance by $V1% of the damage you have taken in the last 6 seconds, up to a maximum of $V2 damage.",
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
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.1,
					0.2
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
	"reckoning":
	{
		"name":	"Reckoning",
		"icon":	"inv_artifact_ashes-to-ashes.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	4,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Being hit by an enemy spell or ability has a $V1% chance to generate a charge of Reckoning.\n\nAt 3 charges, your next single-target ability consumes all charges of Reckoning to deal $V2 additional Holy damage to the enemy.",
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
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.24,
					0.24,
					0.24
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
	"champion_of_the_light":
	{
		"name":	"Champion of the Light",
		"icon":	"spell_holy_holyguidance.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"avenging_wrath"
		],

		"description":	"Every 15% of your maximum health you are healed from spells and effects while Avenging Wrath is active increases its duration by $V1 seconds.\n\nThis effect can occur up to 4 times.",
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
	"avenging_wrath":
	{
		"name":	"Avenging Wrath",
		"icon":	"spell_holy_avengingwrath.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Call upon the Light to become an avatar of retribution, increasing your damage and Critical Hit chance by 15%.",
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
		"cost":	16.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_wrath":
	{
		"name":	"Divine Wrath",
		"icon":	"spell_paladin_templarsverdict.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"avenging_wrath",
		],

		"description":	"During Avenging Wrath, $V1% of all Physical damage you deal becomes Holy damage instead.",
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
	"hammer_of_justice":
	{
		"name":	"Hammer of Justice",
		"icon":	"spell_holy_sealofmight.jpg",
		"spec":	3,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Stun the enemy target for $V1 seconds.",
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	"melee",
		"cooldown":	120,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"hammer_of_justice_cooldown":
	{
		"name":	"Hammer of Justice Cooldown",
		"icon":	"ability_paladin_enlightenedjudgements.jpg",
		"spec":	3,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"hammer_of_justice",
		],

		"description":	"Reduce the cooldown of Hammer of Justice by $V1 seconds.",
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
	"consecrated_core":
	{
		"name":	"Consecrated Core",
		"icon":	"spell_holy_sealofvengeance.jpg",
		"spec":	3,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your Attack Power is increased by $V1% while standing on your Consecration.",
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
	"one-hand_weapon_specialization":
	{
		"name":	"One-Hand Weapon Specialization",
		"icon":	"spell_paladin_lightshammer.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the damage you deal with one-hand weapons by $V1%",
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
	"improved_parry_chance":
	{
		"name":	"Improved Parry Chance",
		"icon":	"ability_paladin_judgementsofthejust.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Parry chance by $V1%.",
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
	"seal_of_command":
	{
		"name":	"Seal of Command",
		"icon":	"spell_holy_blessingofstamina.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your melee attacks have a 30% chance deal $V1 Holy damage to all enemies within 6 yards of the target.\n\nUnleashing this Seal's energy deals $V2 Holy damage to the target for each enemy within 8 yards of the Paladin, up to a maximum of $V3 damage.\n\nLasts until cancelled. Only one Seal may be active on the Paladin at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.07
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.09
				]
			},
			{
				"name":	"$V3",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.45
				]
			}
		],

		"isAbility":	true,
		"cost":	11.6,
		"resource":	"mana",
		"range":	0,
		"cooldown":	10,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_plea":
	{
		"name":	"Divine Plea",
		"icon":	"spell_holy_divinespirit.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Healing from spells and effects restores mana equal to $V1% of the amount healed, up to $V2% of the Paladin's maximum mana per second.",
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
	"lights_blessing":
	{
		"name":	"Light's Blessing",
		"icon":	"misc_legionfall_paladin.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase all healing you receive by $V1%.",
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
	"holy_armor":
	{
		"name":	"Holy Armor",
		"icon":	"achievement_alliedrace_lightforgeddraenei.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Every 20% of your maximum health you are healed from spells and effects grants a charge of Holy Armor, increasing your Armor by $V2%.\n\nMaximum 3 charges. Lasts 12 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"baseHealth",
				"damageType":	"None",
				"rank":	[
					0.8,
					0.8,
					0.8,
					0.8
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
	"stalwart_defender":
	{
		"name":	"Stalwart Defender",
		"icon":	"spell_holy_sealofwrath.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the duration of Sleep, Charm, Fear, and Incapacitating effects on you by $V1%.",
		"values":	[
			{
				"name":	"$V1",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"holy_shield":
	{
		"name":	"Holy Shield",
		"icon":	"spell_holy_blessingofprotection.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [
			"Shields",
		],
		"prerequisites": [],

		"description":	"Infuse your shield with Holy power, causing attacks you block to deal Holy damage to the attacker equal to the amount blocked. Lasts $V1 seconds or until $V2 attacks have been blocked.",
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
					6
				]
			}
		],

		"isAbility":	true,
		"cost":	10.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	11,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"improved_devotion_aura":
	{
		"name":	"Improved Devotion Aura",
		"icon":	"spell_holy_improvedresistanceauras.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increases the armor provided by Devotion Aura by $V1%.",
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
	"righteous_echo":
	{
		"name":	"Righteous Echo",
		"icon":	"ability_paladin_hammeroftherighteous.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Hammer of the Righteous releases a wave of Holy energy, dealing $V1% of its damage to all enemies within 8 yards of the target.",
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
	"holy_shield_block_chance":
	{
		"name":	"Holy Shield Block Chance",
		"icon":	"ability_paladin_shieldofthetemplar.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"holy_shield",
		],

		"description":	"Increase your Block Chance by $V1% while Holy Shield is active.",
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
	"avengers_shield":
	{
		"name":	"Avenger's Shield",
		"icon":	"spell_holy_avengersshield.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	true,

		"requirements": [
			"Shields",
		],
		"prerequisites": [],

		"description":	"Throw your shield at an enemy, dealing $V1 Holy Damage and jumping to 2 nearby enemies. Enemies hit are dazed, slowing their movement speed by $V2% for 3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"Holy",
				"rank":	[
					0.6
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
		"cost":	14.5,
		"resource":	"mana",
		"range":	25,
		"cooldown":	24,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divinity":
	{
		"name":	"Divinity",
		"icon":	"ability_paladin_blindinglight.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"holy_armor",
		],

		"description":	"Consume all charges of Holy Armor to empower your next spell. Each charge provides:\n\nHammer of the Righteous: +15% damage.\n\nHoly Shield: -20% cooldown.\n\nConsecration: +2 yard range.\n\nAvenger's Shield: Jumps to 1 additional target.",
		"values":	[],

		"isAbility":	true,
		"cost":	3.6,
		"resource":	"mana",
		"range":	0,
		"cooldown":	12,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"seal_of_conquest":
	{
		"name":	"Seal of Conquest",
		"icon":	"spell_holy_blessedresillience.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your melee attacks reduce the target's Attack Power by $V1. Maximum 5 stacks. Lasts 7 seconds.\n\nUnleashing this Seal's energy reduces the Attack Power of the target's next 2 attacks by $V2. Lasts up to 3 seconds.\n\nLasts until cancelled. Only one Seal may be active on the Paladin at a time.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.02
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.2
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
		"requiredLevel":	0
	},
	"divine_soul":
	{
		"name":	"Divine Soul",
		"icon":	"spell_holy_pureofheart.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"All overhealing you receive creates a protective barrer for $V1% of the overheal amount, absorbing incoming damage. Lasts 5 seconds.\n\nThe protective barrier cannot exceed 10% of the Paladin's maximum health.",
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
	"diminish":
	{
		"name":	"Diminish",
		"icon":	"spell_fire_flameblades.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"holy_shield",
		],

		"description":	"Enemies that take damage from your Holy Shield have their Attack Power reduced by $V1 for 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Attack",
				"damageType":	"None",
				"rank":	[
					0.015,
					0.030
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
	"avengers_shield_silence":
	{
		"name":	"Avenger's Shield Silence",
		"icon":	"spell_priest_burningwill.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"avengers_shield"
		],

		"description":	"Enemies hit by your Avenger's Shield are Silenced for $V1 seconds.",
		"values":	[
			{
				"name":	"$V1",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"luminescence":
	{
		"name":	"Luminescence",
		"icon":	"spell_holy_impholyconcentration.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Allies within 15 yards of you are healed for $V1% of all healing you receive.",
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
	"sanctify":
	{
		"name":	"Sanctify",
		"icon":	"ability_paladin_gaurdedbythelight.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"divine_soul"
		],

		"description":	"Increase all healing you receive by $V1% and the maximum protective barrier size of Divine Soul by $V2%. Lasts $V3 seconds.",
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
					300
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
		"cost":	15.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	1800,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_soul_duration":
	{
		"name":	"Divine Soul Duration",
		"icon":	"spell_holy_devineaegis.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"sanctify",
		],

		"description":	"During Sanctify, the duration of Divine Soul is increased by $V1 seconds.",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"avengers_shield_cooldown":
	{
		"name":	"Avenger's Shield Cooldown",
		"icon":	"spell_holy_divineshield.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"avengers_shield",
		],

		"description":	"Blocking an attack has a $V1% chance to reduce the cooldown of Avenger's Shield by 1 second.",
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
	"hand_of_protection":
	{
		"name":	"Hand of Protection",
		"icon":	"spell_holy_sealofprotection.jpg",
		"spec":	5,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"The targeted party or raid member is protected from all physical attacks for $V1 seconds, but during that time they cannot attack or use abilities.\n\nOnce protected, the target cannot be made invulnerable by Divine Shield, Divine Protection or Hand of Protection again for 1 minute.",
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
		"cost":	11.0,
		"resource":	"mana",
		"range":	40,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"guarded_by_the_light":
	{
		"name":	"Guarded by the Light",
		"icon":	"ability_paladin_touchedbylight.jpg",
		"spec":	5,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce all damage you take while affected by a Stun or Incapacitate effect by $V1%.",
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
	"infused_armor":
	{
		"name":	"Infused Armor",
		"icon":	"spell_holy_rune.jpg",
		"spec":	5,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Armor by $V1% of your Spell Power.",
		"values":	[
			{
				"name":	"$V1",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"hand_of_the_martyr":
	{
		"name":	"Hand of the Martyr",
		"icon":	"ability_paladin_lightofthemartyr.jpg",
		"spec":	5,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Places a bulwark on the party or raid member, transfering $V1% of the damage they take to you instead. Lasts 6 seconds. Effect is broken if you are over 60 yards away from the target.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					35
				]
			}
		],

		"isAbility":	true,
		"cost":	14.3,
		"resource":	"mana",
		"range":	40,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	}
}
