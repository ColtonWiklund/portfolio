var priest_talents =
{
	"healing_focus":
	{
		"name":	"Healing Focus",
		"icon":	"spell_holy_devineaegis.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the Critical Hit chance of your Flash Heal, Greater Heal, and Prayer of Healing by $V1%.",
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
	"improved_renew":
	{
		"name":	"Improved Renew",
		"icon":	"spell_holy_renew.jpg",
		"spec":	0,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the health restored by Renew by $V1%.",
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
	"greater_heal":
	{
		"name":	"Greater Heal",
		"icon":	"spell_holy_greaterheal.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Infuse an ally with light, healing them for $V1 health.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.9
				]
			}
		],

		"isAbility":	true,
		"cost":	14.9,
		"resource":	"mana",
		"range":	40,
		"cooldown":	11,
		"castTime":	2.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"echo_of_light":
	{
		"name":	"Echo of Light",
		"icon":	"spell_holy_aspiration.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Flash Heal, Greater Heal, and Binding Heal restore an additional $V1% health over 5 seconds.",
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
	"holy_blessing":
	{
		"name":	"Holy Blessing",
		"icon":	"item_holyspark.jpg",
		"spec":	0,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Your healing spells heal for an additional $V1% on targets affected by your Renew.",
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
	"contemplation":
	{
		"name":	"Contemplation",
		"icon":	"ability_mage_studentofthemind.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase your Spirit by $V1% while casting.",
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
	"profusion_of_light":
	{
		"name":	"Profusion of Light",
		"icon":	"spell_holy_pureofheart.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"greater_heal",
		],

		"description":	"Every Holy spell you cast increases the amount healed by your next Greater Heal by $V1%. Maximum 5 stacks.",
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
	"prayer_of_mending":
	{
		"name":	"Prayer of Mending",
		"icon":	"spell_holy_prayerofmendingtga.jpg",
		"spec":	0,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Places a ward on an ally that heals them for $V1 health the next time they take damage and then jumps to the most injured ally within 15 yards. Jumps up to $V2 times and lasts 15 seconds after each jump.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.32
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
		"cost":	12.5,
		"resource":	"mana",
		"range":	40,
		"cooldown":	16,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"serenity":
	{
		"name":	"Serenity",
		"icon":	"spell_holy_hopeandgrace.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Casting a healing spell on an ally has a $V1% chance to increase their Spirit by $V2 for 6 seconds. ",
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
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.055,
					0.055
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
	"borrowed_time":
	{
		"name":	"Borrowed Time",
		"icon":	"spell_holy_borrowedtime.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"greater_heal",
		],

		"description":	"Every 20% of maximum health the target is missing when you start casting Greater Heal reduces its cooldown by $V1 seconds.",
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
	"prayer_of_healing":
	{
		"name":	"Prayer of Healing",
		"icon":	"spell_holy_prayerofhealing02.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Heal an ally for $V1 health and the 2 most injured allies within 8 yards of the target for $V2 health.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.56
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.28
				]
			}
		],

		"isAbility":	true,
		"cost":	15.5,
		"resource":	"mana",
		"range":	40,
		"cooldown":	14,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"urgency":
	{
		"name":	"Urgency",
		"icon":	"spell_holy_fanaticism.jpg",
		"spec":	0,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase all healing you do to an ally by $V1% for every 25% of maximum health they are missing.",
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
	"meditation":
	{
		"name":	"Meditation",
		"icon":	"spell_nature_sleep.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Puts the enemy target in a state of meditation, Incapacitating them for up to $V1 seconds.\n\nAny damage caused will awaken the target. Only works against Humanoids.",
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
		"cost":	13.9,
		"resource":	"mana",
		"range":	25,
		"cooldown":	180,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"communion":
	{
		"name":	"Communion",
		"icon":	"spell_holy_prayerofspirit.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"prayer_of_healing",
		],

		"description":	"Prayer of Healing has a $V1% chance to heal an additional ally.",
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
	"guardian_spirit":
	{
		"name":	"Guardian Spirit",
		"icon":	"ability_priest_ascension.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"The Priest watches over an ally, sacrificing themself to prevent the next lethal damage the target takes and healing the target to 100% of their maximum health.\n\nLasts 10 minutes. Cannot be cast in Spirit of Redemption.",
		"values":	[],

		"isAbility":	true,
		"cost":	18.2,
		"resource":	"mana",
		"range":	40,
		"cooldown":	1800,
		"castTime":	3,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"resilience":
	{
		"name":	"Resilience",
		"icon":	"spell_holy_wordfortitude.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	3,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Power Word: Fortitude increases the target's Vitality by $V1.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.02,
					0.04
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
	"mending_soul":
	{
		"name":	"Mending Soul",
		"icon":	"spell_holy_holyprotection.jpg",
		"spec":	0,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	4,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"prayer_of_mending",
		],

		"description":	"Healing an ally affected by Prayer of Mending with Flash Heal or Greater Heal has a $V1% to increase its amount of jumps by 1.",
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
	"ease_of_mind":
	{
		"name":	"Ease of Mind",
		"icon":	"spell_holy_mindvision.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"meditation",
		],

		"description":	"While affected by Meditation, all Mana, Rage, or Energy the target gains is reduced by $V1%.\n\nFor 5 seconds after Meditation ends, all Mana, Rage, or Energy the target gains is reduced by $V2%.",
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
	"eternal_guardian":
	{
		"name":	"Eternal Guardian",
		"icon":	"spell_holy_rapture.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"spirit_of_redemption",
		],

		"description":	"Spirit of Redemption's duration is increased by $V1 seconds if the Priest is killed by Guardian Spirit.",
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
	"spirit_of_redemption":
	{
		"name":	"Spirit of Redemption",
		"icon":	"spell_holy_guardianspirit.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"guardian_spirit"
		],

		"description":	"Upon death, the Priest becomes the Spirit of Redemption for $V1 seconds. The Spirit of Redemption cannot move, attack, be attacked, or targeted by any spells or effects. While in this form the Priest can cast any healing spell free of cost. When the effect ends, the priest dies.\n\nThis effect cannot occur more than once every 15 minutes.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
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
	"unbound_power":
	{
		"name":	"Unbound Power",
		"icon":	"spell_holy_symbolofhope.jpg",
		"spec":	0,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"spirit_of_redemption",
		],

		"description":	"Increase all healing done while in Spirit of Redemption by $V1%",
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
	"soul_shatter":
	{
		"name":	"Soul Shatter",
		"icon":	"spell_shadow_shadowmend.jpg",
		"spec":	1,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shatter and mend a target's soul, dealing $V1 Shadow damage and then healing the target for $V2 health over 12 seconds.\n\nThe damage from Soul Shatter cannot be lethal.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.7
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					1.68
				]
			}
		],

		"isAbility":	true,
		"cost":	16.4,
		"resource":	"mana",
		"range":	30,
		"cooldown":	40,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"shadow_mend":
	{
		"name":	"Shadow Mend",
		"icon":	"spell_shadow_rune_purple.jpg",
		"spec":	1,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position": 1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"soul_shatter",
		],

		"description":	"If Soul Shatter targets an ally, its duration is increased by $V1 seconds.",
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
	"shadow_channelling":
	{
		"name":	"Shadow Channelling",
		"icon":	"inv_icon_shadowcouncilorb_purple.jpg",
		"spec":	2,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cast time of Shadow spells by $V1%.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					2,
					4,
					8,
					6,
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
	"spirit_embrace":
	{
		"name":	"Spirit Embrace",
		"icon":	"spell_shadow_twistedfaith.jpg",
		"spec":	2,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Casting a Shadow spell has a $V1% chance to increase your Spirit by 30% for 6 seconds. Stacks refresh independently.",
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
	"mind_flay":
	{
		"name":	"Mind Flay",
		"icon":	"spell_shadow_siphonmana.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Assault an enemy's mind, dealing $V1 Shadow damage over 3 seconds and reducing their movement speed by $V2%.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.48
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
		"cost":	9.3,
		"resource":	"mana",
		"range":	30,
		"cooldown":	0,
		"castTime":	3,
		"isChanneled":	true,
		"requiredLevel":	0
	},
	"anguish":
	{
		"name":	"Anguish",
		"icon":	"spell_shadow_unstableaffliction_3_purple.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the Critical Hit chance of Mind Blast by $V1% for every 10% of maximum health the target is missing.",
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
	"dark_potency":
	{
		"name":	"Dark Potency",
		"icon":	"spell_shadow_shadowwordpain.jpg",
		"spec":	2,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Shadow Word: Pain deals its full damage over $V1 fewer seconds.",
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
	"madness":
	{
		"name":	"Madness",
		"icon":	"ability_warlock_improvedsoulleech.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"When your Shadow Word: Pain, Vampiric Embrace, or Mind Rot deal damage, there is a $V1% chance to apply a stack of Madness.\n\nEach stack of Madness reduces the target's cast speed by 3% and the range of their spells by 5%. Maximum 5 stacks. Lasts 8 seconds.",
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
	"vampiric_embrace":
	{
		"name":	"Vampiric Embrace",
		"icon":	"spell_shadow_unsummonbuilding.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Weaken an enemy's soul, dealing $V1 Shadow damage over 6 seconds. All Shadow damage you deal to the target heals you for 10% of the damage dealt.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.6
				]
			}
		],

		"isAbility":	true,
		"cost":	15.0,
		"resource":	"mana",
		"range":	30,
		"cooldown":	16,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"Nightmare":
	{
		"name":	"Nightmare",
		"icon":	"ability_demonhunter_darkness.jpg",
		"spec":	2,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Psychic Scream lasts $V1% longer and can withstand $V2% more damage before breaking.",
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
	"insanity":
	{
		"name":	"Insanity",
		"icon":	"ability_priest_silence.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [
			"5 Stacks of Madness"
		],
		"prerequisites": [
			"madness",
		],

		"description":	"Consume all stacks of Madness on an enemy to Silence them for $V1 seconds.",
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
		"cost":	11.2,
		"resource":	"mana",
		"range":	30,
		"cooldown":	60,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"vampirism":
	{
		"name":	"Vampirism",
		"icon":	"spell_shadow_devouringplague.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"vampiric_embrace",
		],

		"description":	"Increase the healing effect of Vampiric Embrace by $V1%.",
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
	"mind_rot":
	{
		"name":	"Mind Rot",
		"icon":	"spell_shadow_demonicempathy_purple.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Corrupt an enemy's mind, causing them to take Shadow damage equal to 30% of mana they spend, up to $V1 damage per second. Lasts 8 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.21
				]
			}
		],

		"isAbility":	true,
		"cost":	15.7,
		"resource":	"mana",
		"range":	30,
		"cooldown":	26,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"mind_decay":
	{
		"name":	"Mind Decay",
		"icon":	"spell_shadow_impphaseshift.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"mind_rot",
		],

		"description":	"Increase the duration of Mind Rot by $V1 seconds each time the affected enemy casts a spell.\n\nMind Rot's duration cannot be extended by more than $V2 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					0.5,
					1
				]
			},
			{
				"name":	"$V2",
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
	"hysteria":
	{
		"name":	"Hysteria",
		"icon":	"ability_warlock_jinx.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Psychic Scream will Fear $V1 additional $V2 within 8 yards of the target.",
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
					"enemy",
					"enemies",
					"enemies"
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
	"mind_break":
	{
		"name":	"Mind Break",
		"icon":	"spell_shadow_unstableaffliction_3_purple.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Mind Blast reduces the target's Spell Power by $V1 for 3 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.1,
					0.2,
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
	"mana_burn":
	{
		"name":	"Mana Burn",
		"icon":	"spell_shadow_manaburn.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Destroy $V1 of an enemy's mana and deal 50% of the destroyed mana as Shadow damage to the target.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.48
				]
			}
		],

		"isAbility":	true,
		"cost":	14.3,
		"resource":	"mana",
		"range":	30,
		"cooldown":	11,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"shadow_embrace":
	{
		"name":	"Shadow Embrace",
		"icon":	"spell_shadow_shadesofdarkness.jpg",
		"spec":	2,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"vampiric_embrace",
		],

		"description":	"Your Shadow spells have a $V1% lower cooldown when cast on an enemy affected by Vampiric Embrace.",
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
	"delirium":
	{
		"name":	"Delirium",
		"icon":	"spell_nature_focusedmind.jpg",
		"spec":	2,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"mind_flay"
		],

		"description":	"Mind Flay causes the target's cooldowns to recover $V1% slower.",
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
	"tormented_mind":
	{
		"name":	"Tormented Mind",
		"icon":	"spell_shadow_skull.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Mind Control lasts $V1% longer against enemies that are Stunned, Feared, Charmed, or Incapacitated.",
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
	"dispersion":
	{
		"name":	"Dispersion",
		"icon":	"spell_mage_overpowered_purple.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"shadowform",
		],

		"description":	"Every Shadow spell you cast while in Shadowform reduces all damage you take by $V1% for 6 seconds. Stacks refresh independently. Effect is lost if you exit Shadowform.",
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
	"shadowform":
	{
		"name":	"Shadowform",
		"icon":	"spell_shadow_shadowform.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Assume a Shadowform, increasing your Shadow damage by 10% and reducing all damage done to you by 10%. You may not cast Holy spells in this form. Lasts until cancelled.",
		"values":	[],

		"isAbility":	true,
		"cost":	5.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	3,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"void_well":
	{
		"name":	"Void Well",
		"icon":	"spell_priest_void-blast.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"shadowform",
		],

		"description":	"While in Shadowform, enemies within 15 yards have all mana they gain reduced by $V1%, up to $V2 mana per second.",
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
				"damageType":	"Shadow",
				"rank":	[
					0.07,
					0.14
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
	"mana_corruption":
	{
		"name":	"Mana Corruption",
		"icon":	"inv_enchant_voidsphere.jpg",
		"spec":	2,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"mana_burn",
		],

		"description":	"The target of your Mana Burn takes Shadow damage equal to $V1% of mana they regenerate for 4 seconds, up to $V2 damage per second.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					100,
					200
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Shadow",
				"rank":	[
					0.12,
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
	"improved_fear_ward":
	{
		"name":	"Improved Fear Ward",
		"icon":	"spell_holy_excorcism.jpg",
		"spec":	3,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cooldown of Fear Ward by $V1 seconds.",
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
	"improved_flash_heal":
	{
		"name":	"Improved Flash Heal",
		"icon":	"spell_holy_flashheal.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the mana cost of Flash Heal by $V1%.",
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
	"improved_smite":
	{
		"name":	"Improved Smite",
		"icon":	"spell_holy_holysmite.jpg",
		"spec":	4,
		"specTier":	1,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the cast time of Smite by $V1%.",
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
	"holy_fire":
	{
		"name":	"Holy Fire",
		"icon":	"spell_holy_surgeoflight.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Consumes a target in holy flames, dealing damage to an enemy or healing an ally.\n\nEnemy targets take $V1 Holy damage and an additional $V2 Holy damage over 5 seconds.\n\nAlly targets are healed for $V3 health and an additional $V4 health over 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.45
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.275
				]
			},
			{
				"name":	"$V3",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.50
				]
			},
			{
				"name":	"$V4",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.35
				]
			}
		],

		"isAbility":	true,
		"cost":	13.75,
		"resource":	"mana",
		"range":	30,
		"cooldown":	14,
		"castTime":	2,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"spiritual_attunement":
	{
		"name":	"Spiritual Attunement",
		"icon":	"inv_enchant_essenceeternallarge.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	5,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"When Power Word: Shield expires or is destroyed it restores mana to you equal to $V1% of the damage it absorbed.",
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
	"improved_inner_fire":
	{
		"name":	"Improved Inner Fire",
		"icon":	"spell_holy_innerfire.jpg",
		"spec":	4,
		"specTier":	2,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank": 3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the amount of Armor gained from Inner Fire by $V1%.",
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
	"engulf":
	{
		"name":	"Engulf",
		"icon":	"spell_holy_excorcism_02.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"holy_fire",
		],

		"description":	"Enemies affected by your Holy Fire take an additional $V1% Holy damage from your spells.",
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
	"catharsis":
	{
		"name":	"Catharsis",
		"icon":	"spell_holy_unyieldingfaith.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Casting Smite increases the healing done by your next Healing spell by $V1%. Maximum 3 stacks. Lasts 8 seconds.",
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
	"penance":
	{
		"name":	"Penance",
		"icon":	"spell_holy_penance.jpg",
		"spec":	4,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Launch 3 pulses of light at the target, dealing $V1 Holy damage to an enemy or restoring $V2 health to an ally over 2.5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.73
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.75
				]
			}
		],

		"isAbility":	true,
		"cost":	11.6,
		"resource":	"mana",
		"range":	30,
		"cooldown":	12,
		"castTime":	2.5,
		"isChanneled":	true,
		"requiredLevel":	0
	},
	"burning_blades":
	{
		"name":	"Burning Blades",
		"icon":	"ability_paladin_sheathoflight.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"holy_fire",
		],

		"description":	"Allies affected by your Holy Fire deal an additional $V1 Holy damage with their attacks.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.04,
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
	"desperate_prayer":
	{
		"name":	"Desperate Prayer",
		"icon":	"spell_holy_restoration.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Instantly heal the caster for $V1.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					1.05
				]
			}
		],

		"isAbility":	true,
		"cost":	10.2,
		"resource":	"mana",
		"range":	0,
		"cooldown":	300,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"ease_of_burden":
	{
		"name":	"Ease of Burden",
		"icon":	"ability_priest_savinggrace.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the duration of Weakened Soul applied by Power Word: Shield by $V1 seconds.",
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
	"embolden_soul":
	{
		"name":	"Embolden Soul",
		"icon":	"spell_holy_spiritualguidence.jpg",
		"spec":	4,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"penance",
		],

		"description":	"Each pulse of light from Penance increases an ally's Attack Power and Spell Power by $V1 or decrease an enemy's Attack Power and Spell Power by $V2 for 5 seconds.",
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
			},
			{
				"name":	"$V2",
				"modifier":	"Spell",
				"damageType":	"Holy",
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
	"reflection":
	{
		"name":	"Reflection",
		"icon":	"inv_shield_1h_artifactnorgannon_d_06.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"When Power Word: Shield expires or is destroyed, it deals Holy damage to all enemies within 6 yards equal to $V1% of the damage it absorbed.",
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
	"soul_cleanse":
	{
		"name":	"Soul Cleanse",
		"icon":	"spell_holy_spellwarding.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	1,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"desperate_prayer",
		],

		"description":	"Desperate Prayer has a $V1% chance to remove Weakened Soul from the caster.",
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
	"pain_suppression":
	{
		"name":	"Pain Suppression",
		"icon":	"spell_holy_painsupression.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce all damage taken by an ally by $V1% for $V2 seconds. When Pain Suppression ends, any damage prevented is dealt to the target over the next 8 seconds.",
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
		"cost":	16.2,
		"resource":	"mana",
		"range":	40,
		"cooldown":	240,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"divine_aegis":
	{
		"name":	"Divine Aegis",
		"icon":	"ability_priest_angelicbulwark.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	4,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Increase the amount of damage absorbed by your Power Word: Shield by $V1% and reduce its cooldown by $V2 seconds.",
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
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					0.5,
					1.0,
					1.5,
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
	"body_and_soul":
	{
		"name":	"Body and Soul",
		"icon":	"ability_priest_archangel.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Power Word: Shield increases the target's movement speed by $V1% for 3 seconds.",
		"values":	[
			{
				"name":	"$V1",
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"inspiration":
	{
		"name":	"Inspiration",
		"icon":	"spell_monk_diffusemagic.jpg",
		"spec":	4,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	5,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"penance",
		],

		"description":	"When targeting an ally, each pulse of light from Penance reduces the cooldown of a random spell or ability of the target by $V1 seconds.",
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
	"invigorate":
	{
		"name":	"Invigorate",
		"icon":	"spell_priest_burningwill.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	2,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"infusion"
		],

		"description":	"The target of Infusion gains $V1 Mana, $V2 Rage, or $V3 Energy per second.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.07,
					0.14
				]
			},
			{
				"name":	"$V2",
				"modifier":	"None",
				"damageType":	"None",
				"rank":	[
					6,
					12
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
		"resource":	"mana",
		"range":	0,
		"cooldown":	0,
		"castTime":	0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"infusion":
	{
		"name":	"Infusion",
		"icon":	"spell_holy_divineillumination.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	3,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [],

		"description":	"Channel divine power on an ally, increasing their Attack Power and Spell Power by $V1, Armor by $V2, and magic Resistances by $V3. Lasts 5 seconds.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.40
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					3
				]
			},
			{
				"name":	"$V3",
				"modifier":	"Spell",
				"damageType":	"None",
				"rank":	[
					0.10
				]
			}
		],

		"isAbility":	true,
		"cost":	17.9,
		"resource":	"mana",
		"range":	40,
		"cooldown":	240,
		"castTime":	5,
		"isChanneled":	true,
		"requiredLevel":	0
	},
	"radiance":
	{
		"name":	"Radiance",
		"icon":	"ability_paladin_blindinglight.jpg",
		"spec":	4,
		"specTier":	6,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	4,
		"isOffset":	false,

		"requirements": [],
		"prerequisites": [
			"infusion",
		],

		"description":	"Enemies within 10 yards of the target take $V1 Holy damage per second.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.13,
					0.26
				]
			},
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
	"binding_heal":
	{
		"name":	"Binding Heal",
		"icon":	"spell_holy_blindingheal.jpg",
		"spec":	5,
		"specTier":	3,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Heal both you and an ally for $V1 health.",
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
		"cost":	14.4,
		"resource":	"mana",
		"range":	40,
		"cooldown":	18,
		"castTime":	1.5,
		"isChanneled":	false,
		"requiredLevel":	0
	},
	"resolution":
	{
		"name":	"Resolution",
		"icon":	"spell_holy_divineprovidence.jpg",
		"spec":	5,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	3,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Reduce the pushback suffered from damage while casting Holy spells by $V1%.",
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
	"lightshare":
	{
		"name":	"Lightshare",
		"icon":	"ability_paladin_beaconsoflight.jpg",
		"spec":	5,
		"specTier":	4,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	2,

		"position":	0,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [
			"binding_heal",
		],

		"description":	"After casting Binding Light, you are healed for $V1% of all healing received by the target, up to a maximum of $V2 health per second. Lasts 5 seconds.",
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
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.165,
					0.33
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
	"holy_nova":
	{
		"name":	"Holy Nova",
		"icon":	"spell_holy_holynova.jpg",
		"spec":	5,
		"specTier":	5,
		"isUnlocked":	false,
		"currentRank":	0,
		"maxRank":	1,

		"position":	1,
		"isOffset":	true,

		"requirements": [],
		"prerequisites": [],

		"description":	"Release an explosion of light around the Priest, hitting targets up to 25 yards away. Deals $V1 Holy damage to enemies and heals allies for $V2 health.",
		"values":	[
			{
				"name":	"$V1",
				"modifier":	"Spell",
				"damageType":	"Holy",
				"rank":	[
					0.6
				]
			},
			{
				"name":	"$V2",
				"modifier":	"Healing",
				"damageType":	"None",
				"rank":	[
					0.75
				]
			}
		],

		"isAbility":	true,
		"cost":	20.0,
		"resource":	"mana",
		"range":	0,
		"cooldown":	300,
		"castTime":	2.0,
		"isChanneled":	false,
		"requiredLevel":	0
	},
}