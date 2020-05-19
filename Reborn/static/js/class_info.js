var druid_specNames = ["Restoration", "", "Balance", "", "Feral", ""];
var druid_keywords  = [["Healing-over-Time", "Wild Growth", "Poison and Curse Removal"], ["Nature", "Celestial", "Armor"], ["Shapeshifting", "Versatility", "Enrage", "Bleeds"]];
var druid_stats = {
	"healthBase": 2201,
	"healthMax": 6232,
	"manaBase": 2282,
	"manaMax": 6062,
	"attackPowerBase": 370,
	"attackPowerMax": 1146,
	"spellPowerBase": 382,
	"spellPowerMax": 1221,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 1080,
	"armorMax": 2436
}

var hunter_specNames = ["Marksmanship", "", "Survival", "", "Beast Mastery", ""];
var hunter_keywords  = [["High Range", "Shots"], ["Traps", "Melee Control", "Elemental Damage", "Bleeds"], ["Beasts", "Aspects", "Bleeds"]];
var hunter_stats = {
	"healthBase": 2201,
	"healthMax": 4612,
	"manaBase": 1476,
	"manaMax": 2786,
	"attackPowerBase": 387,
	"attackPowerMax": 1214,
	"spellPowerBase": 0,
	"spellPowerMax": 0,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 1570,
	"armorMax": 3261
}

var mage_specNames = ["Arcane", "", "Fire", "", "Frost", ""];
var mage_keywords  = [["Mana", "Enemy Magic", "Time"], ["Burns", "Area Damage"], ["Slows", "Immobilizes", "Protection"]];
var mage_stats = {
	"healthBase": 2201,
	"healthMax": 4176,
	"manaBase": 2282,
	"manaMax": 6062,
	"attackPowerBase": 0,
	"attackPowerMax": 0,
	"spellPowerBase": 382,
	"spellPowerMax": 1221,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 470,
	"armorMax": 912
}


var paladin_specNames = ["Divinity", "", "Retribution", "", "Templar", ""];
var paladin_keywords  = [["Healing", "Auras", "Disease and Poison Removal"], ["Vengeance"], ["Armor", "Receiving Healing", "Weakening Enemies", "Area Damage", "Crowd-Control Resistance", "Blocking"]];
var paladin_stats = {
	//"level": 60,
	"healthBase": 2201,	//updated
	"healthMax": 6232,
	"manaBase": 2282,	//updated
	"manaMax": 6062,	//updated
	"attackPowerBase": 370,
	"attackPowerMax": 1146,	// full T3 gear
	"spellPowerBase": 382,	// 323 intellect (?)
	"spellPowerMax": 1221,	// 851 bonus spell power gained from T3 gear (unsure of base spell power)
	"blockValueBase": 0,
	"blockValueMax": 362,
	"armorBase": 3245,	// base armor is 130
	"armorMax": 9806	// updated
}

var priest_specNames = ["Holy", "", "Shadow", "", "Atonement", ""];
var priest_keywords  = [["Healing", "Calming", "Sacrifice", "Magic and Disease Removal"], ["Mind Manipulation", "Spell Corruption", "Damage-over-Time", "Self-Healing"], ["Empowering Allies", "Weakening Enemies", "Healing", "Damage Absorption"]];
var priest_stats = {
	"healthBase": 2201,
	"healthMax": 4176,
	"manaBase": 2282,
	"manaMax": 6062,
	"attackPowerBase": 0,
	"attackPowerMax": 0,
	"spellPowerBase": 382,
	"spellPowerMax": 1221,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 470,
	"armorMax": 912
}

var rogue_specNames = ["Assassination", "", "Combat", "", "Subtlety", ""];
var rogue_keywords  = [["Poisons", "Bleeds"], ["Mobility", "Energy Regeneration", "Melee vs Melee", "Dodging", "Bleeds"], ["Stealth", "Burst Damage", "Single Combat", "Crowd Control", "Shadow"]];
var rogue_stats = {
	"healthBase": 2201,
	"healthMax": 4564,
	"manaBase": 0,
	"manaMax": 0,
	"attackPowerBase": 370,
	"attackPowerMax": 1243,
	"spellPowerBase": 0,
	"spellPowerMax": 0,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 1080,
	"armorMax": 2190
}

var shaman_specNames = ["Enhancement", "", "Spiritwalker", "", "Elemental", ""];
var shaman_keywords  = [["Elementals", "Lightning Orbs", "Shock Spells"], ["Healing", "Spirits", "Totems", "Curse and Magic Removal"], ["Lightning", "Elementals", "Nature"]];
var shaman_stats = {
	"healthBase": 2201,
	"healthMax": 4612,
	"manaBase": 1968,
	"manaMax": 5890,
	"attackPowerBase": 370,
	"attackPowerMax": 1126,
	"spellPowerBase": 296,
	"spellPowerMax": 1206,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 1570,
	"armorMax": 3261
}

var warlock_specNames = ["Demonology", "", "Affliction", "", "Destruction", ""];
var warlock_keywords  = [["Demons", "Stamina"], ["Damage-over-Time", "Drains", "Self-Healing", "Fear"], ["Chaos", "Self-Damage"]];
var warlock_stats = {
	"healthBase": 2201,
	"healthMax": 4763,
	"manaBase": 1968,
	"manaMax": 5890,
	"attackPowerBase": 0,
	"attackPowerMax": 0,
	"spellPowerBase": 296,
	"spellPowerMax": 1206,
	"blockValueBase": 0,
	"blockValueMax": 0,
	"armorBase": 470,
	"armorMax": 912
}

var warrior_specNames = ["Fury", "", "Arms", "", "Protection", ""];
var warrior_keywords  = [["Enrage", "Rage Generation", "Bleeds", "Mobility"], ["Melee vs Melee", "Armor Penetration", "Parrying"], ["Kinetic Force", "Blocking", "Taking Damage", "Crowd-Control Resistance"]];
var warrior_stats = {
	"healthBase": 2201,
	"healthMax": 6232,
	"manaBase": 0,
	"manaMax": 0,
	"attackPowerBase": 370,
	"attackPowerMax": 1243,
	"spellPowerBase": 0,
	"spellPowerMax": 0,
	"blockValueBase": 0,
	"blockValueMax": 362,
	"armorBase": 3245,
	"armorMax": 9806
}