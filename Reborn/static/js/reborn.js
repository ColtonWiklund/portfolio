// -----------------------------------------------------------------------------
// ------------------------------ DUNGEON MASTER -------------------------------
// -----------------------------------------------------------------------------

itemLevelMin = 95;
itemLevelMax = Math.floor(itemLevelMin * 1.2);
effectScroll = 4;	// loops through each effect in the last example

// 	Initialization
// -------------------------------------------------------------------

// Generate the three item examples on load
function GenerateItemExamples () {
	GenAttributeAllocExample ();
	GenItemLevelExample ();
	GenEffectPoolingExample ();
}

// Generate Item - Attribute Allocation Example (Constant iLvl)
function GenAttributeAllocExample () {
	GenerateEquipment($("#attribute_allocation_item"), GenItem (itemLevelMin, false), 1);
}

// Generate Item - Item Level Example (Variable iLvl)
function GenItemLevelExample () {
	itemLevel = GetRandomInt(itemLevelMin, itemLevelMax);	// generate a random item level between the min and max
	$("#equipment_example_item_level").text("(item level " + itemLevel + ")");
	GenerateEquipment($("#item_level_item"), GenItem (itemLevel, false), 1);
}

// Generate Item - Effect Pooling Example (Variable effect + iLvl)
function GenEffectPoolingExample () {
	itemLevel = GetRandomInt(itemLevelMin, itemLevelMax);	// generate a random item level between the min and max
	$("#effect_pooling_item_level").text("(item level " + itemLevel + ")");
	GenerateEquipment($("#effect_pooling_item"), GenItem (itemLevel, true), 1);
}

// Randomly generate the item's attributes
function GenItem (itemLevel, randomEffect) 
{
	item = equipment_class_00["furious_greathelm"];
	item.primary = [];
	item.secondary = [];
	item.armorValue = 726;

	attributeList = [
		"Attack Power",
		"Stamina",
		"Critical Hit",
		"Haste"
	]

	attributeCount = 2 + Math.round(Math.random());	// item can have 2 or 3 attributes
	attributesToRemove = attributeList.length - attributeCount;

	for (i = 0; i < attributesToRemove; i++) {	// remove random attributes from the list so it was 'attributeCount' remaining
		removedAttribute = GetRandomInt(0, attributeList.length - 1);
		attributeList.splice(removedAttribute, 1);
		// console.log ("Removing Attribute: " + removedAttribute);
	}

	itemArmorValue = 3 - GetRandomInt(0, 6);	// generate a random armor value 
	item.armorValue = item.armorValue * (1 + (itemArmorValue/50)); // +6/-6% base value
	itemLevelRemaining = itemLevel - itemArmorValue;	// affects up to 3 item levels (if negative, will take iLvl from armor to reallocate to attributes)

	if (randomEffect) {
		effect = effectScroll;
	} else {
		effect = 1;
	}
	switch (effect) {
		case 1:
			itemEffectValue = GetRandomInt(5, 8);		
			if (itemLevel == itemLevelMin && itemEffectValue == 8) { // the base level item cannot have an effect strength greater than 7. this is not the best way to implement this.
				itemEffectValue = 7;
			}
			item.effect = "Each enemy hit by your Whirlwind has a " + itemEffectValue + "% chance to reset its cooldown.";
			itemLevelRemaining -= itemEffectValue * 10;	// remove this strength from the remaining item level strength
			break;
		case 2:
			itemEffectValue = 20 - (GetRandomInt(0, 1) * 5);	// 15 or 20	
			item.effect = "Charge increases the damage dealt by your next ability by " + itemEffectValue + "%.";
			itemLevelRemaining -= itemEffectValue * 2;
			break;
		case 3:
			itemEffectValue = GetRandomInt(4, 6);
			item.effect = "When you Critically Hit an enemy, it will take 10% more damage from your Bleed effects for " + itemEffectValue + " seconds.";
			itemLevelRemaining -= itemEffectValue * 8;
			break;
		case 4:
			itemEffectValue = 20 + (GetRandomInt(0, 2) * 5);	// 20, 25, 30
			item.effect = "When Whirlwind hits an enemy, it has a " + itemEffectValue + "% chance to apply Rend for half its normal duration.";
			itemLevelRemaining -= itemEffectValue * 2;
			break;
		case 5:
			itemEffectValue = 15 + (GetRandomInt(0, 2) * 5);	// 15, 20, 25
			item.effect = "Charge deals an additional " + itemEffectValue + "% damage for every 5 yards between you and your target.";
			itemLevelRemaining -= itemEffectValue * 2;
			break;
	}

	// rotate through each the effects
	if (randomEffect) {
		effectScroll++;
		if (effectScroll > 5) {
			effectScroll = 1;
		}
	}
	
	// console.log ("Item Level: " + itemLevel + ", Effect Strength: " + itemEffectValue*10 + ", Item Level Remaining: " + itemLevelRemaining);

	valueList = [];
	totalValue = 0;
	for (i = 0; i < attributeList.length; i++) {
		valueList[i] = GetRandomInt(itemLevelRemaining, itemLevelRemaining*2.2);
		totalValue += valueList[i];
	}

	// console.log (valueList);
	// console.log ("Before: " + valueList + " , Total: " + totalValue);
	scaleFactor = itemLevelRemaining / totalValue;
	for (i = 0; i < attributeList.length; i++) {
		valueList[i] *= scaleFactor;
	}
	// console.log ("After: " + valueList + " , Scale Factor: " + scaleFactor);

	// console.log (attributeList);
	for (i = 0; i < attributeList.length; i++) {
		if (attributeList[i] == "Attack Power") {
			item.primary["Attack Power"] = valueList[i];
		} else if (attributeList[i] == "Stamina") {
			item.primary["Stamina"] = valueList[i];
		} else if (attributeList[i] == "Critical Hit") {
			item.secondary["Critical Hit"] = valueList[i];
		} else {
			item.secondary["Haste"] = valueList[i];
		}
	}

	return item;
}

// 	Interaction
// -------------------------------------------------------------------
$("#attribute_allocation_button_container").on("click", ".button_stylized", function()
{
	GenAttributeAllocExample();
});

$("#item_level_button_container").on("click", ".button_stylized", function()
{
	GenItemLevelExample();
});

$("#effect_pooling_button_container").on("click", ".button_stylized", function()
{
	GenEffectPoolingExample();
});

// Returns a random integer between the passed min and max values
function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// -----------------------------------------------------------------------------
// ---------------------------------- TALENTS ----------------------------------
// -----------------------------------------------------------------------------

var talentPoints = [0, 0, 0, 0, 0, 0];	// the amount of talent points in each specialization
var unspentTalentPoints = 46;
var talentsReloading = false;	// prevents a different class from being selected while a new class is loading
var talentsIntroValid = true;	// prevents the intro screen from being interacted with after a class has been selected
var currentClass = "";
var talentList;		// holds all talents for the selected class
var abilityList;	// holds all abilities for the selected class
var specNames;
var classStats;
var stats = {	// the stats displayed and used for calculating ability values
	"health": 0,
	"mana": 0,
	"attackPower": 0,
	"spellPower": 0,
	"healingPower": 0,
	"blockValue": 0,
	"armor": 0
}

// 	Mouse Events
// -------------------------------------------------------------------

document.getElementById("talents").oncontextmenu = new Function("return false;");	// disable right-clicking on the talents section (allows right-click to remove talent points)

// The class select icons for the intro screen
$("#class_selector_intro").on("click", ".class_icon_intro", function()
{
	if (talentsIntroValid) {
		talentsIntroValid = false;	// prevents multiple classes from being selected sequentially while the intro screen is fading out
		ScrollBarSetToTalents();

		// hide the intro selector screen
		if ($("#talent_selector_intro").hasClass("talent_selector_intro_hide_opacity") == false) {
			$("#talent_selector_intro").addClass("talent_selector_intro_hide_opacity");

			setTimeout(function () {
				$("#talent_selector_intro").addClass('talent_selector_intro_hide_display');
			}, 1500);
		}

		var selectedClass = this.id.substr(17);

		if (currentClass !== "") {	// on initlization currentClass will be empty (currentClass could be hardcoded to start at a starting class instead)
			$("#class_icon_" + currentClass).removeClass("class_icon_selected");
		}
		currentClass = selectedClass;
		$("#class_icon_" + currentClass).addClass("class_icon_selected");

		SelectClass(selectedClass);
	}
});

// Change classes - repopulate talent circle and abilities and recalculate stats values based on the chosen class
$("#class_selector").on("click", ".class_icon", function()
{
	ScrollBarSetToTalents();
	var selectedClass = this.id.substr(11);

	if (selectedClass != currentClass) {

		if (talentsReloading == false ) {	// prevent the class from being switched while it is loading

			talentsReloading = true;

			if (currentClass !== "") {	// on initlization currentClass will be empty (currentClass could be hardcoded to start at a starting class instead)
				$("#class_icon_" + currentClass).removeClass("class_icon_selected");
			}
			currentClass = selectedClass;
			$("#class_icon_" + currentClass).addClass("class_icon_selected");
			
			$("#talents_section").addClass('talents_section_hide');

			if ($("#talent_selector_reset_button_container").hasClass("reset_button_hide") == false) {
				$("#talent_selector_reset_button_container").addClass("reset_button_hide");
			}

			// allow the talent section to fade out before reloading the talents
			setTimeout(function () {
				SelectClass(selectedClass);
				$("#talents_section").removeClass('talents_section_hide');
			}, 400);

			setTimeout(function () {
				talentsReloading = false;
			}, 800);
		}
	}	
});

// Level up the talent when clicked on
$("#talents_section").on("click", ".talent_icon", function() {
	if (unspentTalentPoints > 0 ) {
		if (talentList[this.id].isUnlocked)
		{
			// Rank up ability
			if (talentList[this.id].currentRank < talentList[this.id].maxRank)
			{
				talentList[this.id].currentRank += 1;
				LoadTooltip (this);	// Reload the tooltip to show the updated rank

				var talentRankID = "#" + this.id + "_rank";	// Update the Rank text on the talent (ex: 1/3, 2/5, 4/4, etc)
				$(talentRankID).text(talentList[this.id].currentRank + "/" + talentList[this.id].maxRank);

				// If ability becomes max rank, set the border to gold
				if (talentList[this.id].currentRank == talentList[this.id].maxRank) {
					SetTalentMax(this.id);
					CheckPrereq();
				}

				// Determine the adjacent specs
				var spec = talentList[this.id].spec;
				// var leftSpec = LeftSpec(spec);
				// var rightSpec = RightSpec(spec);

				// Increment the amount of talent points in this spec, and unlock the next tier every 5 talent points
				if (spec % 2 == 0) {	// Specs 0, 2, 4
					talentPoints[spec]++;
					if (Math.floor(talentPoints[spec]) % 5 == 0) {	// unlock the next tier(s) of talents every 5 talent points in the spec
						UnlockTier (spec, Math.floor(talentPoints[spec]/5));
					}
				} 
				// else {	// Specs 1, 3, 5
				// 	talentPoints[spec]++;	// this number is only used for the display, doesn't affect unlocking
				// 	if (talentPoints[spec]%2 == 0) {	// only increment the adjacent specs every 2 points in the hybrid section
				// 		talentPoints[leftSpec] += 1;
				// 		if (Math.floor(talentPoints[leftSpec]) % 5 == 0) {
				// 			UnlockTier (leftSpec, Math.floor(Math.floor(talentPoints[leftSpec])/5));
				// 		}
				// 		talentPoints[rightSpec] += 1;
				// 		if (Math.floor(talentPoints[rightSpec]) % 5 == 0) {
				// 			UnlockTier (rightSpec, Math.floor(Math.floor(talentPoints[rightSpec])/5));
				// 		}
				// 	}	
				// }

				unspentTalentPoints -= 1;	// Reduce the amount of talent points avaiable
				if (unspentTalentPoints == 0) {
					LockAllUnlearnedTalents();
				} else if (unspentTalentPoints == 45) {	// Show the reset button after a talent point has been spent
					if ($("#talent_selector_reset_button_container").hasClass("reset_button_hide")) {
						$("#talent_selector_reset_button_container").removeClass("reset_button_hide");
					}
				}

				UpdateSpecText();	// Update the spec text in the center of the circle
			}
		}
	}
});

// Load and show the tooltip for the Talent/Ability when the cursor is on its icon (uses 'talent-spec-names' as the event triggers from all of its children)
$("#talents_section").on("mouseover", ".talent_icon", function () {LoadTooltip(this)});

// Hide the tooltip when the cursor leaves the icon
$("#talents_section").on("mouseleave", ".talent_icon", function () {
	$("#tooltip").hide();
});

// Show or hide the stats panel
$("#stats_panel_button_container").on("click", ".button_stylized", function()
{
	ScrollBarSetToTalents();
	button = document.getElementById("stats_panel_button");
	if ($("#stats_panel").hasClass("stats_panel_hide") && $("#keywords_panel").hasClass("stats_panel_hide")) {
		$("#keywords_panel").removeClass("stats_panel_hide");
		// button.innerText = "Attributes";
	} else if ($("#keywords_panel").hasClass("stats_panel_hide") == false) {
		$("#keywords_panel").addClass("stats_panel_hide");
		$("#stats_panel").removeClass("stats_panel_hide");
		// button.innerText = "Hide";
	} else {
		$("#keywords_panel").addClass("stats_panel_hide");
		$("#stats_panel").addClass("stats_panel_hide");
		// button.innerText = "Keywords";
	}
});

// Show or hide the abilities panel
$("#abilities_button_container").on("click", ".button_stylized", function()
{
	ScrollBarSetToTalents();
	if ($("#ability_column").hasClass("ability_column_hide")) {
		$("#ability_column").removeClass("ability_column_hide");
	} else {
		$("#ability_column").addClass("ability_column_hide");
	}
});

// Reset the talent tree
$("#talent_selector_reset_button_container").on("click", ".button_stylized", function()
{
	// reset and lock the talents
	for (i in talentList) {
		talentList[i].isUnlocked = true;
		talentList[i].currentRank = 0;
		if (talentList[i].baseSpec != undefined) {
			talentList[i].spec = talentList[i].baseSpec;
		}
		var tierJoiners = $("#tier_joiners").children();
		for (var j = 0; j < tierJoiners.length; j++) {
			tierJoiners[j].remove();
		}

		LockAllUnlearnedTalents()

		var talentRankID = "#" + i + "_rank";	// Update the Rank text on the talent (ex 1/3, 2/5, 4/4, etc)
		$(talentRankID).text(talentList[i].currentRank + "/" + talentList[i].maxRank);
		// $(talentRankID).text(talentList[i].maxRank);

		// unlock the starting tier 0 talents
		for (x = 0; x <= 4; x+=2) {
			UnlockTier(x, 0);
		}
	}

	// reset the talent points
	for (var i = 0; i < talentPoints.length; i++) {
		talentPoints[i] = 0;
	}
	unspentTalentPoints = 46;

	if ($("#talent_selector_reset_button_container").hasClass("reset_button_hide") == false) {
		$("#talent_selector_reset_button_container").addClass("reset_button_hide");
	}

	UpdateSpecText ();
});

// 	Tooltip
// -------------------------------------------------------------------

// Populate the tooltip with the talent's data
function LoadTooltip(talentReference)
{
	var talent = talentList[talentReference.id];	// Create a variable with just the data from the selected talent (reduces code size)

	if (talent.isAbility) {
		$("#tooltip_talent").hide();
		$("#tooltip_ability").show();
		$("#tooltip_ability_name").find("span").text(talent.name);
		
		// Mana, Rage, Energy cost, only display if there is a cost
		if (talent.cost != 0) {	
			$("#tooltip_ability_resource").show();
			if (talent.resource == "mana") {
				$("#tooltip_ability_resource").find("span").text(Math.round((talent.cost/100 * classStats["manaBase"]))  + " Mana");
			} else {
				if (talent.resource == "rage") {
					$("#tooltip_ability_resource").find("span").text(talent.cost + " Rage");
				} else if (talent.resource == "energy") {
					$("#tooltip_ability_resource").find("span").text(talent.cost + " Energy");
				} else if (talent.resource == "focus") {
					$("#tooltip_ability_resource").find("span").text(talent.cost + " Focus");
				}
			}
			
		} else {
			$("#tooltip_ability_resource").hide();
		}

		// Cast Time
		if (talent.castTime == 0) {
			$("#tooltip_ability_cast_time").find("span").text("Instant");
		} else {
			$("#tooltip_ability_cast_time").find("span").text(talent.castTime + " sec cast");
			if (talent.isChanneled) {
				$("#tooltip_ability_cast_time").find("span").text(talent.castTime + " sec cast (channeled)");
			}
		}

		// Requirements
		if (talent.requirements.length >= 1) {
			$("#tooltip_ability_requires_1").show();
			var req1 = talent.requirements[0];
			if (req1.substring(req1.length-5) == "Totem") {	// If the requirement is a totem, remove the "Requires" text from the tooltip
				$("#tooltip_ability_requires_1").find("span").text(req1);
			} else if (req1.substring(req1.length-7) == "Charges") {
				$("#tooltip_ability_requires_1").find("span").text(req1);
			} else {
				$("#tooltip_ability_requires_1").find("span").text("Requires " + req1);
			}
			if (talent.requirements.length == 2) {
				$("#tooltip_ability_requires_2").show();
				$("#tooltip_ability_requires_2").find("span").text("Requires " + talent.requirements[1]);
			} else {
				$("#tooltip_ability_requires_2").hide();
			}

			// if the require 1 text is too long to fit in the column, move it to the require 2 text box that spans the entire tooltip width
			var req1text = $("#tooltip_ability_requires_1").find("span").text();
			if (req1text.length > 30) {
				$("#tooltip_ability_requires_1").hide();
				$("#tooltip_ability_requires_1").find("span").text("");
				$("#tooltip_ability_requires_2").show();
				$("#tooltip_ability_requires_2").find("span").text(req1text);
			}
		} else {
			$("#tooltip_ability_requires_1").hide();
			$("#tooltip_ability_requires_2").hide();
		}

		// Range
		if (talent.range == 0) {
			$("#tooltip_ability_range").hide();
		} else if (talent.range == "melee") {
			$("#tooltip_ability_range").show();
			$("#tooltip_ability_range").find("span").text("Melee Range");
		} else {
			$("#tooltip_ability_range").show();
			$("#tooltip_ability_range").find("span").text(talent.range + " yd range");
		}

		// Cooldown
		if (talent.cooldown > 0) {
			$("#tooltip_ability_cooldown").show();
			if (talent.cooldown < 60) {
				$("#tooltip_ability_cooldown").find("span").text(talent.cooldown + " sec cooldown");
			} else if (talent.cooldown < 3600) {
				$("#tooltip_ability_cooldown").find("span").text(talent.cooldown/60 + " min cooldown");
			} else {
				$("#tooltip_ability_cooldown").find("span").text(talent.cooldown/3600 + " hr cooldown");
			}
		} else {
			$("#tooltip_ability_cooldown").hide();
		}

		// Description
		GenerateTooltipDescription("#tooltip_ability_description", talent, 0);	// Always use rank 0, as abilities have no other ranks

	// Show only the Talent divs if it is a Talent
	} else {
		$("#tooltip_ability").hide();
		$("#tooltip_talent").show();
		$("#tooltip_talent_name").find("span").text(talent.name);

		// Rank & Description(s)
		if (talent.currentRank == 0) // Talent has 0 points 
		{
			$("#tooltip_talent_rank").find("span").text("Rank 1");
			GenerateTooltipDescription("#tooltip_talent_description", talent, 0);

			$("#tooltip_talent_nextrank").hide();
			$("#tooltip_talent_description_nextrank").hide();
		}
		else if (talent.currentRank != talent.maxRank)	// Talent is not Max Rank
		{
			$("#tooltip_talent_rank").find("span").text("Rank " + talent.currentRank);
			GenerateTooltipDescription("#tooltip_talent_description", talent, talent.currentRank-1);
			GenerateTooltipDescription("#tooltip_talent_description_nextrank", talent, talent.currentRank);
			$("#tooltip_talent_nextrank").show();
			$("#tooltip_talent_description_nextrank").show();

			$("#tooltip_talent_level").show();
			$("#tooltip_talent_description").css("padding-bottom", "2px");
		} else {	// Talent is Max Rank
			$("#tooltip_talent_rank").find("span").text("Rank " + talent.currentRank);
			GenerateTooltipDescription("#tooltip_talent_description", talent, talent.currentRank-1);
			$("#tooltip_talent_nextrank").hide();
			$("#tooltip_talent_description_nextrank").hide();
		}
	}
	if (talent.currentRank < talent.maxRank) {
		$("#tooltip_talent_level").show();
		$("#tooltip_ability_description").css("padding-bottom", "2px");
		
		$("#tooltip_talent_level").show();
		$("#tooltip_talent_description").css("padding-bottom", "2px");

		if (talent.isUnlocked) {	// hide the second text line and add bottom padding to the first
			$("#tooltip_prereq").hide();
			$("#tooltip_talent_level").find("span").text("Click to learn");
			$("#tooltip_talent_level").css("color", "#1fff00")	// Green
			$("#tooltip_talent_level").css("padding-bottom", "6px");
		}
	} else {
		$("#tooltip_talent_level").hide();
		$("#tooltip_ability_description").css("padding-bottom", "6px");
		
		$("#tooltip_talent_level").hide();
		$("#tooltip_talent_description").css("padding-bottom", "6px");
	}
	// Requirement, Prerequisite, Click to Learn text (used by both talents and abilities)
	if (talent.isUnlocked) {	// hide the second text line and add bottom padding to the first
		$("#tooltip_prereq").hide();
	}
	else 
	{
		// How many talent points in what spec(s) are needed
		$("#tooltip_talent_level").css("color", "#ff4040");	// Red
		if (talent.spec%2 == 0)	{	// spec 0, 2, 4
			$("#tooltip_talent_level").find("span").text("Requires " + ((talent.specTier - 1) * 5) + " points in " + specNames[talent.spec] + " Talents");
		} else { // spec 1, 3, 5
			if (talent.spec == 1) {
				var req = "Requires " + ((talent.specTier - 1) * 5) + " points in " + specNames[0] + " Talents or ";
				req += ((talent.specTier - 1) * 5) + " points in " + specNames[2] + " Talents";
				$("#tooltip_talent_level").find("span").text(req);
			} else if (talent.spec == 3) {
				var req = "Requires " + ((talent.specTier - 1) * 5) + " points in " + specNames[2] + " Talents or ";
				req += ((talent.specTier - 1) * 5) + " points in " + specNames[4] + " Talents";
				$("#tooltip_talent_level").find("span").text(req);
			} else if (talent.spec == 5) {
				var req = "Requires " + ((talent.specTier - 1) * 5) + " points in " + specNames[4] + " Talents or ";
				req += ((talent.specTier - 1) * 5) + " points in " + specNames[0] + " Talents";
				$("#tooltip_talent_level").find("span").text(req);
			}
		}

		// If there is at least 1 prerequisite
		if (talent.prerequisites.length > 0)	// generate the prereq text	
		{	
			$("#tooltip_talent_level").css("padding-bottom", "2px");	// remove the bottom padding from the first line as there is now a second line
			var prereq1 = talent.prerequisites[0];
			var prereqStr = "Requires " + talentList[prereq1].maxRank + " points in " + talentList[prereq1].name;
			if (talentList[prereq1].maxRank == 1) {	// change "points" to "point" if there is the prereq only requires 1 talent point
				prereqStr = prereqStr.replace("points", "point");
			}
			// If there are two prerequisites
			if (talent.prerequisites.length == 2) {
				var prereq2 = talent.prerequisites[1];
				prereqStr2 = " or " + talentList[prereq2].maxRank + " points in " + talentList[prereq2].name;
				if (talentList[prereq2].maxRank == 1) {	// change "points" to "point" if there is the prereq only requires 1 talent point
					prereqStr = prereqStr.replace("points", "point");
				}
				prereqStr += prereqStr2;
			}
			$("#tooltip_prereq").find("span").text(prereqStr);
			$("#tooltip_prereq").show();
			$("#tooltip_prereq").css("padding-bottom", "6px");	// add the bottom padding to the second line instead
		}
		else
		{
			$("#tooltip_prereq").hide();
			$("#tooltip_talent_level").css("padding-bottom", "6px");
		}
	}

	// Move the tooltip to the icon's position
	var posX = $(talentReference).position().left;
	var posY = $(talentReference).position().top;

	var tooltip = document.getElementById("tooltip");
	var tooltipHeight = $("#tooltip").height();
	
	tooltip.style.left = (posX + iconSize + 3) + "px";
	if (tooltipHeight > (posY - backgroundOffset - 10)) {	// distance to the top of the page
		tooltip.style.top = (posY + 8 + iconSize) + "px";
	} else {
		tooltip.style.top = (posY - tooltipHeight - 3) + "px";
	}
	
	tooltip.style.display = "block";	// display the tooltip
}

// Replace the variables in the Talent description with the values of the appropriate rank
function GenerateTooltipDescription(id, talent, rank) 
{
	var desc = talent.description;
	if (talent.values.length > 0 ) {
		for (var i = 0; i < talent.values.length; i++){
			var index = "$V" + (i+1).toString();
			if (talent.values[i].modifier == "None") {
				var desc = desc.replace(index, talent.values[i].rank[rank]);
			} else if (talent.values[i].modifier == "Attack") {
				var value = Math.round (talent.values[i].rank[rank] * stats["attackPower"]).toString();
				var desc = desc.replace(index, value);
			} else if (talent.values[i].modifier == "Spell") {
				var value = Math.round (talent.values[i].rank[rank] * stats["spellPower"]).toString();
				var desc = desc.replace(index, value);
			} else if (talent.values[i].modifier == "Healing") {
				var value = Math.round (talent.values[i].rank[rank] * stats["healingPower"]).toString();
				var desc = desc.replace(index, value);
			} else if (talent.values[i].modifier == "blockValue") {
				var value = Math.round (talent.values[i].rank[rank] * stats["blockValue"]).toString();
				var desc = desc.replace(index, value);
			} else if (talent.values[i].modifier == "maxHealth") {
				var value = Math.round (talent.values[i].rank[rank] * stats["health"]).toString();
				var desc = desc.replace(index, value);
			} else if (talent.values[i].modifier == "baseHealth") {
				var value = Math.round (talent.values[i].rank[rank] * classStats["healthBase"]).toString();	// use base health and mana for some spells instead of maximum hp/mana
				var desc = desc.replace(index, value);
			} else if (talent.values[i].modifier == "baseMana") {
				var value = Math.round (talent.values[i].rank[rank] * classStats["manaBase"]).toString();
				var desc = desc.replace(index, value);
			}
		}
	}

	desc = desc.replace(" 1 seconds", " 1 second");	// checks for a space as to not include 0.1 seconds in the results
	desc = desc.replace("1 attacks", "1 attack");
	desc = desc.replace("1 yards", "1 yard");
	desc = desc.replace("1 stacks", "1 stack");
	desc = desc.replace("1 charges", "1 charge");

	$(id).find("span").html(desc.replace(/\n/g, "<br>"));	// replace any newline commands with a break (html ignores \n in text)
}

// 	Interaction
// -------------------------------------------------------------------

// scrolls the page to the talents section when a class icon is selected
function ScrollBarSetToTalents ()
{
	var distanceToPageTalents = 9154; // distance in pixels to the start of the "page_talents" section. there's probably a better way to do this.
	var scrollDistance = $(window).scrollTop();
	console.log ( $(window).scrollTop());
	
	$('html, body').stop(true, false);
	
	var offset = Math.abs(scrollDistance - distanceToPageTalents);
	if (offset != 0) {	
		$('html, body').animate({
	        scrollTop: $("#class_selector").offset().top
	    }, 400 + offset*0.75);	// scrolls at 1px per 0.75 milliseconds
	}
}

// Reset and Load the Talents, Abilities, and Attributes from the selected class
function SelectClass(selectedClass)
{
	document.getElementById("talents_spec_names").style.backgroundImage = "url('static/img/circle/spec_names_" + selectedClass + ".png')";

	// remove the talents, joiners, and abilities and reset any hybrid specs to their base spec
	for (i in talentList) {
		talentList[i].isUnlocked = false;
		talentList[i].currentRank = 0;
		if (talentList[i].baseSpec != undefined) {
			talentList[i].spec = talentList[i].baseSpec;
		}
		$("#" + i).remove();
	}
	var joiners = $("#talent_joiners").children();
	for (var i = 0; i < joiners.length; i++) {
		joiners[i].remove();
	}
	var tierJoiners = $("#tier_joiners").children();
	for (var i = 0; i < tierJoiners.length; i++) {
		tierJoiners[i].remove();
	}
	var abilities = $("#ability_column").children();
	for (var i = 1; i < abilities.length; i++) {
		abilities[i].remove();
	}

	// find the variables for this class
	talentList = window[selectedClass + "_talents"];	// window[] references the variable with the name of the string
	abilityList = window[selectedClass + "_abilities"];
	specNames = window[selectedClass + "_specNames"];
	classKeywords = window[selectedClass + "_keywords"];
	classStats = window[selectedClass + "_stats"];

	// replace the class keywords
	for (var i = 1; i <= 3; i++) {
		listName = "class_info_spec_" + i + "_items";
		var listChildren = $("#" + listName).children();
		// remove the old keywords
		for (var j = 0; j < listChildren.length; j++) {
			listChildren[j].remove();
		}
		// populate the new keywords
		$("#" + "class_info_spec_" + i).text(specNames[(i-1)*2]);
		for (var j = 0; j < classKeywords[i-1].length; j++) {
			var listItem = $("<div></div>");
			listItem.addClass("class_info_text");
			listItem.text(classKeywords[i-1][j]);
			listItem.appendTo("#" + listName);
		}
	}

	// recalculate the stat slider ranges
	CalculateAttributes();

	// populate the talents, joiners, and abilities for the new selected class
	PositionTalents();
	PopulateAbilities();

	// reset the talent points
	for (var i = 0; i < talentPoints.length; i++) {
		talentPoints[i] = 0;
	}
	unspentTalentPoints = 46;
	UpdateSpecText ();
}

// Change the Talent to have a gold border and change any prerequisite lines to gold
function SetTalentMax (talent) {
	var talentID = "#" + talent;
	$(talentID).css("border-color", "#e3be17");	// Gold

	// Update any joiners to Gold to show the ability is maxed out
	for (var x = 0; x < talentList[talent].prerequisites.length; x++) {
		UpdateLineColor(talent, "#e3be17");	// Gold
	}
}

// After a talent has reached its maximum level, check all locked talents to see if it was a prerequisite for another talent and whether that talent should be unlocked
function CheckPrereq () {
	for (i in talentList) {
		var talent = talentList[i];
		if (talent.isUnlocked == false)	{	// Only check locked talents
			if (talent.prerequisites.length != 0) {	// Talent must have at least one prerequisite
				if (talent.spec % 2 == 0) {	// Specs 0, 2, 4
					if (talentPoints[talent.spec] >= (talent.specTier - 1) * 5) {	// Talent must have enough talent points in the spec to unlock
						for (x = 0; x < talent.prerequisites.length; x++) {	// If one prerequisite ability is at max rank, unlock the ability
							prereq = talent.prerequisites[x];
							if (talentList[prereq].currentRank == talentList[prereq].maxRank) {
								UnlockTalent(i);
							}
						}
					}
				}
				else
				{	// Specs 1, 3, 5. Talent must have enough talent points in an adjacent spec to unlock
					if (talentPoints[LeftSpec(talent.spec)] >= (talent.specTier - 1) * 5 || talentPoints[RightSpec(talent.spec)] >= (talent.specTier - 1) * 5)
					{
						for (x = 0; x < talent.prerequisites.length; x++) {
							prereq = talent.prerequisites[x];
							if (talentList[prereq].currentRank == talentList[prereq].maxRank) {
								UnlockTalent(i);
							}
						}
					}
				}
			}
		}
	}
}

// Unlock all talents in the spec/tier
function UnlockTier(spec, tier)
{
	for (i in talentList) {	// go through every talent
		if ((talentList[i].specTier - 1) == tier) {	// only talents that have the specified tier (1, 2, 3, etc)
			if (talentList[i].isUnlocked == false) {	// make sure it is not already unlocked
				var talentSpec = talentList[i].spec
				if (talentSpec == spec) {	// unlock the tier for the passed spec
					UnlockTalent (i);
				} else if (talentSpec == LeftSpec(spec) || talentSpec == RightSpec(spec)) { // unlock the adjacent tiers, but change their internal spec to the spec that unlocked them
					UnlockTalent (i);
					talentList[i].baseSpec = talentList[i].spec;	// the talent will be reset to its baseSpec on reset on class change
					talentList[i].spec = spec;
					CreateTierJoiner(tier, spec, talentList[i].baseSpec);	// create a tier joiner to indiciate the tiers are connected (hides the divider)
				}
			}
		}
	}
}

// Check the talent to see if it should unlock (a prerequisite will need to be maxed if it has any)
function UnlockTalent(i) 
{
	var unlock = false

	// If the talent has no prerequisites, unlock it
	if (talentList[i].prerequisites.length == 0) {
		unlock = true;
	}
	else {	// If the talent has a prerequisite(s), ensure at least one is at max rank to unlock the talent
		for (var x = 0; x < talentList[i].prerequisites.length; x++) {
			var prereq = talentList[i].prerequisites[x]
			if (talentList[prereq].currentRank == talentList[prereq].maxRank) {
				unlock = true;
				UpdateLineColor(i, "#4ab04a");	// Green
			}
		}
	}

	if (unlock) {
		talentList[i].isUnlocked = true;
		talentID = "#" + i;
		$(talentID).css("border-color", "#4ab04a");  // Light Green
		$(talentID).css("filter", "none");
	}
}

// Update the number indicators in the talent circle to reflect where talent points have been allocated
function UpdateSpecText ()
{
	if (talentPoints[0] > 0) {
		$("#talent_spec_points_0").find("span").text(talentPoints[0]);
		$("#talent_spec_points_0").show();
	} else {
		$("#talent_spec_points_0").hide();
	}
	if (talentPoints[1] > 0) {
		$("#talent_spec_points_1").find("span").text(talentPoints[1]);
		$("#talent_spec_points_1").show();
	} else {
		$("#talent_spec_points_1").hide();
	}
	if (talentPoints[2] > 0) {
		$("#talent_spec_points_2").find("span").text(talentPoints[2]);
		$("#talent_spec_points_2").show();
	} else {
		$("#talent_spec_points_2").hide();
	}
	if (talentPoints[3] > 0) {
		$("#talent_spec_points_3").find("span").text(talentPoints[3]);
		$("#talent_spec_points_3").show();
	} else {
		$("#talent_spec_points_3").hide();
	}
	if (talentPoints[4] > 0) {
		$("#talent_spec_points_4").find("span").text(talentPoints[4]);
		$("#talent_spec_points_4").show();
	} else {
		$("#talent_spec_points_4").hide();
	}
	if (talentPoints[5] > 0) {
		$("#talent_spec_points_5").find("span").text(talentPoints[5]);
		$("#talent_spec_points_5").show();
	} else {
		$("#talent_spec_points_5").hide();
	}

	if (unspentTalentPoints > 0) {
		$("#talent_spec_points_remaining").show();
		$("#talent_spec_points_remaining").find("span").text(unspentTalentPoints)
	} else {
		$("#talent_spec_points_remaining").hide();
	}
}

// After all talent points have been spent, grey out any talents with 0 points in them
function LockAllUnlearnedTalents()
{
	for (i in talentList)
    {
    	var talent = talentList[i];
    	if (talent.isUnlocked == true) {
    		if (talent.currentRank == 0) {
    			talent.isUnlocked = false;
    			$("#" + i).css("border-color", "#545454");  // Grey
    			$("#" + i).css("filter", "grayscale(100%)");

    			if (talent.prerequisites.length > 0) {	// Grey out any unused talents
    				UpdateLineColor(i, "#545454");
    			}
    		}
    	}
	}
}

// Return the spec to the left (counter-clockwise) of the passed spec
function LeftSpec (spec) {
	var leftSpec = spec - 1;
	if (leftSpec == -1) {
		leftSpec = 5;
	}
	return leftSpec;
}

// Return the spec to the right (clockwise) of the passed spec
function RightSpec (spec) {
	var rightSpec = spec + 1;
	if (rightSpec == 6) {
		rightSpec = 0;
	}
	return rightSpec;
}

// Change the line of the associated talent joiner
function UpdateLineColor(talent, color) {
	document.getElementById("line_" + talent).getContext("2d").strokeStyle = color;
	document.getElementById("line_" + talent).getContext("2d").stroke();
}

// Hide the dividers between specs when their tiers become joined
function CreateTierJoiner(tier, specMain, specHybrid) {
	joinerSize = 62	// the height & width of the tier joiner
	var tierJoinerImg = document.createElement("img");
	tierJoinerImg.src = "static/img/elements/tier_joiner.png";
	tierJoinerImg.className = "tier_joiner";

	pos = CalculateTierJoinerPos(tier, specMain, specHybrid);

	tierJoinerImg.style.left = (backgroundSize * 0.5 - joinerSize/2 + pos[0]).toString() + "px";
	tierJoinerImg.style.top = (backgroundSize * 0.5 - joinerSize/2 + pos[1]).toString() + "px";

	tierJoinerImg.style.transform = "rotate(" + pos[2] + "deg)";
	
	document.getElementById("tier_joiners").appendChild(tierJoinerImg);
}

// Hide the attribute and abilities panels if the browser window size becomes too small to show them without overlapping the talent calculator
var hidePanels = false;
window.setInterval(function(){
	if (window.innerWidth < 1720) {
		if (hidePanels == false) {
			$("#talent_selector_columns").hide();
		}
		hidePanels = true;
	} else {
		if (hidePanels == true) {
			$("#talent_selector_columns").show();
		}
		hidePanels = false;
	}
}, 1000);

// 	Attributes Panel
// -------------------------------------------------------------------

// Calculate the inital values for the Attributes panel
function CalculateAttributes()
{
	// reset the sliders and recalculate the stats
	$("#stats_slider_health").val(50);
	$("#stats_slider_mana").val(50);
	$("#stats_slider_attack_power").val(50);
	$("#stats_slider_spell_power").val(50);
	$("#stats_slider_block_value").val(50);
	$("#stats_slider_armor").val(50);

	CalculateStatHealth();
	CalculateStatMana();
	CalculateStatAttackPower();
	CalculateStatSpellPower();
	CalculateStatBlockValue();
	CalculateStatArmor();
}

// If the slider has been used, regenerate the description of the abilities. Only updates once per second.
var updateAbilities = false;
window.setInterval(function(){
	if (updateAbilities == true) {
		updateAbilities = false;
		var abilities = document.getElementsByClassName("ability");
		for (var i = 0; i < abilities.length; i++) {
			var abilityName = abilities[i].id.substring(8);	// remove 'ability_' from the id to get the ability name
			GenerateTooltipDescription("#" + abilities[i].id, abilityList[abilityName], 0);
		}
	}
}, 1000);

// When the user interacts with a slider, update the corresponding values
stats_slider_health.oninput = function() {CalculateStatHealth();}
function CalculateStatHealth () {
	var sliderVal = $("#stats_slider_health").val();
	var val = Math.round(classStats.healthBase + ((classStats.healthMax - classStats.healthBase) * sliderVal/100));
	stats.health = val;
	updateAbilities = true;
	$("#stat_indicator_health").text(val.toLocaleString());	// toLocaleString() adds commas to large numbers in the thousands divider (changes based on location of user)
}

stats_slider_mana.oninput = function() {CalculateStatMana();}
function CalculateStatMana () {
	if (classStats.manaBase > 0) {
		var sliderVal = $("#stats_slider_mana").val();
		var val = Math.round(classStats.manaBase + ((classStats.manaMax - classStats.manaBase) * sliderVal/100));
		stats.mana = val;
		updateAbilities = true;
		$("#stat_indicator_mana").text(val.toLocaleString());
		$("#stats_mana").show();
	} else {
		$("#stats_mana").hide();
	}
}

stats_slider_attack_power.oninput = function() {CalculateStatAttackPower();}
function CalculateStatAttackPower () {
	if (classStats.attackPowerBase > 0) {
		var sliderVal = $("#stats_slider_attack_power").val();
		var val = Math.round(classStats.attackPowerBase + ((classStats.attackPowerMax - classStats.attackPowerBase) * sliderVal/100));
		stats.attackPower = val;
		updateAbilities = true;
		$("#stat_indicator_attack_power").text(val.toLocaleString());
		$("#stats_attack_power").show();
	} else {
		$("#stats_attack_power").hide();
	}
}

stats_slider_spell_power.oninput = function() {CalculateStatSpellPower();}
function CalculateStatSpellPower () {
	if (classStats.spellPowerBase > 0) {
		var sliderVal = $("#stats_slider_spell_power").val();
		var val = Math.round(classStats.spellPowerBase + ((classStats.spellPowerMax - classStats.spellPowerBase) * sliderVal/100));
		stats.spellPower = val;
		stats.healingPower = val;	// Currently healing power and spell power are controlled together
		updateAbilities = true;
		$("#stat_indicator_spell_power").text(val.toLocaleString());
		$("#stats_spell_power").show();
	} else {
		$("#stats_spell_power").hide();
	}
}

stats_slider_block_value.oninput = function() {CalculateStatBlockValue();}
function CalculateStatBlockValue () {
	if (classStats.blockValueMax > 0) {
		var sliderVal = $("#stats_slider_block_value").val();
		var val = Math.round(classStats.blockValueBase + ((classStats.blockValueMax - classStats.blockValueBase) * sliderVal/100));
		stats.blockValue = val;
		updateAbilities = true;
		$("#stat_indicator_block_value").text(val.toLocaleString());
		$("#stats_block_value").show();
	} else {
		$("#stats_block_value").hide();
	}
}

stats_slider_armor.oninput = function() {CalculateStatArmor();}
function CalculateStatArmor () {
	var sliderVal = $("#stats_slider_armor").val();
	var val = Math.round(classStats.armorBase + ((classStats.armorMax - classStats.armorBase) * sliderVal/100));
	stats.armor = val;
	updateAbilities = true;
	$("#stat_indicator_armor").text(val.toLocaleString());
}

// 	Initialization
// -------------------------------------------------------------------

var backgroundSize = 910;
var backgroundOffset = 12;	// talents-spec-names css "top" offset to center the image
var iconSize = 35;
var margin = 37;	// pixel size of the left/right margin of each section of the tier border

var insideDiameter = 138;	// the diameter of the inside of the talent cirlce (will need to be scaled to the actual size of the talent circle as displayed)
var outsideDiameter = 1010;	// the diameter of the outside of the talent circle
var levelsCount = 6;		// how many levels (tiers) there are in the talent circle (this number should always be 6 unless the talent circle design changes)
var talentCircleScale = 0.8796;	// the scale of the background circle image
var angleRange = [[260, 340], [-20, 20], [20, 100], [100, 140], [140, 220], [220, 260]];	// The angle range of each specialization section

// Populate the Ability grid with the abilities that are learned by all specs of that Class
function PopulateAbilities() {
	var reset = true;
	for (i in abilityList) {
		var ability = abilityList[i];
		var abilityDiv;

		if (reset) {
			abilityDiv = $("#ability_column").children(":first");
			reset = false;
		} else {
			abilityDiv = $("#ability_column").children(":first").clone();	// instantiate a clone of the first ability
		}

		// Ability ID, Level, Icon, Name
		abilityDiv.prop("id", "ability_" + i);
		abilityDiv.find(".ability_level").text(ability.requiredLevel);
		abilityDiv.find(".ability_icon").css("background-image", "url(\"" + "static/img/icons/" + ability.icon + "\")");
		abilityDiv.find(".ability_name").text(ability.name);

		// Ability Cost
		if (ability.cost != 0) {	
			if (ability.resource == "mana") {
				abilityDiv.find(".ability_resource").text(Math.round((ability.cost/100 * classStats["manaBase"]))  + " Mana");
			} else {
				if (ability.resource == "rage") {
					abilityDiv.find(".ability_resource").text(ability.cost + " Rage");
				} else if (ability.resource == "energy") {
					abilityDiv.find(".ability_resource").text(ability.cost + " Energy");
				} else if (ability.resource == "focus") {
					abilityDiv.find(".ability_resource").text(ability.cost + " Focus");
				}
			}
			abilityDiv.find(".ability_resource").show();
		} else {
			abilityDiv.find(".ability_resource").hide();
		}

		// Cast Time
		if (ability.castTime != 0) {
			abilityDiv.find(".ability_cast_time").text(ability.castTime + " sec cast");
			if (ability.isChanneled) {
				abilityDiv.find(".ability_cast_time").text(ability.castTime + " sec cast (channeled)");
			}
		} else {
			abilityDiv.find(".ability_cast_time").text("Instant");
		}

		// Requirements
		if (ability.requirements.length > 0) {
			var req1 = ability.requirements[0];
			if (req1.substring(req1.length-5) == "Totem") {
				abilityDiv.find(".ability_requires_1").text(req1);
			} else if (req1.substring(req1.length-7) == "Charges") {
				abilityDiv.find(".ability_requires_1").text(req1);
			} else {
				abilityDiv.find(".ability_requires_1").text("Requires " + req1);
			}

			abilityDiv.find(".ability_requires_1").show();
			if (ability.requirements.length == 2) {
				abilityDiv.find(".ability_requires_2").text("Requires " + ability.requirements[1]);
				abilityDiv.find(".ability_requires_2").show();
			} else {
				abilityDiv.find(".ability_requires_2").hide();
			}
		} else {
			abilityDiv.find(".ability_requires_1").hide();
			abilityDiv.find(".ability_requires_2").hide();
		}

		// Range
		if (ability.range == 0) {
			abilityDiv.find(".ability_range").hide();
		} else if (ability.range == "melee") {
			abilityDiv.find(".ability_range").text("Melee Range");
			abilityDiv.find(".ability_range").show();
		} else {
			abilityDiv.find(".ability_range").text(ability.range + " yd range");
			abilityDiv.find(".ability_range").show();
		}
		
		// Cooldown
		if (ability.cooldown == 0) {
			abilityDiv.find(".ability_cooldown").hide();
		} else {
			if (ability.cooldown < 60) {
				abilityDiv.find(".ability_cooldown").text(ability.cooldown + " sec cooldown");
			} else if (ability.cooldown < 3600) {
				abilityDiv.find(".ability_cooldown").text(ability.cooldown/60 + " min cooldown");
			} else {
				abilityDiv.find(".ability_cooldown").text(ability.cooldown/3600 + " hr cooldown");
			}
			abilityDiv.find(".ability_cooldown").show();
		}

		// Append the new div before changing the description as the description needs to edit the HTMl directly
		abilityDiv.appendTo("#ability_column");

		// Description
		abilityDiv.find(".ability_description").text(GenerateTooltipDescription("#ability_" + i, ability, 0));
	}
	abilityDiv.addClass("ability_no_border");	// remove the bottom border from the last ability (used to separate the abilities)
}

// Position each talent according the position data in the object
function PositionTalents()
{
    for (i in talentList)
    {
		var talentDiv = document.createElement ("div");
		talentDiv.className = "talent_icon";
		talentDiv.id = i;
		talentDiv.width = iconSize;
		talentDiv.height = iconSize;
		talentDiv.style.backgroundImage = "url(\"" + "static/img/icons/" + talentList[i].icon + "\")";
		talentDiv.style.backgroundSize = iconSize.toString() + "px " + iconSize.toString() + "px";

		var pos = CalculatePosition (talentList[i]);

		talentDiv.style.left = (backgroundSize * 0.5 + pos[0]).toString() + "px";
		talentDiv.style.bottom = (backgroundSize * 0.5 + pos[1]).toString() + "px";

		if (talentList[i].isAbility) {
			talentDiv.style.borderWidth = "3px";
			talentDiv.style.borderColor = "#545454"; //Grey
		}
		
		document.getElementById("talents").appendChild(talentDiv);

		var talentRank = document.createElement ("div");
		talentRank.className = "talent_rank no_select";
		talentRank.id = i + "_rank";
		talentRank.innerHTML = "0/" + talentList[i].maxRank;
		document.getElementById(i).appendChild(talentRank);
	}

	// Draw the rerequisites after all Talents have been placed
	for (i in talentList) {
		// Draw a line between the talent and its prerequisite(s)
		for (var x = 0; x < talentList[i].prerequisites.length; x++) {
			DrawLine(i, talentList[i].prerequisites[x]);
		}
    }

	// Unlock the 6 starting tiers
	for (x = 0; x <= 4; x+=2) {
		UnlockTier(x, 0);
	}
}

// Calculate the position of the talent using the spec, tier, position, and offset
function CalculatePosition(talent) {
	var spec = talent.spec;
	var specTier = talent.specTier - 1;	// spec tiers used to be from 0 to 6, the lowest tier got removed and its now 1 to 6 with 1 being the new lowest (hence the -1)
	var offset = talent.isOffset;
	var position = talent.position;

	if (spec % 2 == 0) {	// spec 0, 2, 4
		var positionCount = specTier + 1;
	} else {	// spec 1, 3, 5
		var positionCount = specTier - 1;
		if (positionCount == 0) {
			positionCount = 1;
		}
	}

	var ringDistance = RingDistance(specTier);
	var ringCircumference  = (ringDistance * 2) * Math.PI;
	var distancePerAngle = ringCircumference / 360;
	var marginAngle = margin/distancePerAngle;

	var minAngle = angleRange[spec][0] + marginAngle;	// The minimum angle a talent can be placed at
	var maxAngle = angleRange[spec][1] - marginAngle;	// The maximum angle a talent can be placed at
	var deltaAngle = maxAngle - minAngle;	// The angle range size the talents can be placed in
	
	var stepAngle = deltaAngle / positionCount;		// The distance between each talent in degrees
	
	var placementAngle = minAngle + (stepAngle * position);	// The angle the talent should be placed at

	if (offset) {
		placementAngle += stepAngle/2;
	}

	var posX = (Math.sin(placementAngle * 0.01745) * ringDistance - iconSize/2) * 0.965 - 2;	// Multipling by 0.01745 converts degrees to radians
	var posY = (Math.cos(placementAngle * 0.01745) * ringDistance - iconSize/2) * 0.965 - 2;	// (the -2 centers the icons better to account for the border(?)
																								// * 0.965 for slight adjustment (all icons are closer to the center)
	return [posX, posY]
}

// Calculate the distance from the talent's position to the center of the talent circle (the radius of the circle between levels(tiers))
function RingDistance (tier) {
	var step = (outsideDiameter - insideDiameter) / levelsCount; // distance between levels (tiers)
	var distance = insideDiameter + step / 2;	// base offset of level 0 tier
	distance += step * tier;
	distance = distance / 2; // divide by 2 to get the radius
	return distance * talentCircleScale * 0.995;	// scale the radius depending on how much the image has be scaled
}

// Draw a line between two talents, indicating that the startTalent is a prerequisite
function DrawLine(startTalent, endTalent) {
	var lineCanvas = document.createElement ("Canvas");
	lineCanvas.id = "line_" + startTalent;
	lineCanvas.className = "talent_joiner";
	lineCanvas.width = backgroundSize;
	lineCanvas.height = backgroundSize;

	startPosX = document.getElementById(startTalent).style.left;
	startPosX = parseInt(startPosX.substr(0, startPosX.length - 2)) + iconSize/2 + 4;	// Might need to replace the +4 with a different solution as it may not work on the other side

	startPosY = document.getElementById(startTalent).style.bottom;
	startPosY = parseInt(backgroundSize - startPosY.substr(0, startPosY.length - 2)) - iconSize/2;
	
	endPosX = document.getElementById(endTalent).style.left;
	endPosX = parseInt(endPosX.substr(0, endPosX.length - 2)) + iconSize/2 + 4;

	endPosY = document.getElementById(endTalent).style.bottom;
	endPosY = parseInt(backgroundSize - endPosY.substr(0, endPosY.length - 2)) - iconSize/2;

	var ctx = lineCanvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(startPosX, startPosY);
	ctx.lineTo(endPosX, endPosY);
	ctx.strokeStyle = "#595959";
	ctx.lineWidth = 4;
	ctx.stroke();
	document.getElementById("talent_joiners").appendChild(lineCanvas);
}

// Calculate where the tier joiner images are placed
function CalculateTierJoinerPos(tier, specMain, specHybrid) {
	hypLength = insideDiameter + (60 * tier) - 46;	// I have no idea what this -46 does

	if (LeftSpec(specMain) == specHybrid) {
		angle = angleRange[specMain][0];
	} else {
		angle = angleRange[specMain][1]
	}

	posX = hypLength * Math.sin(angle * 0.01745) ;
	posY = hypLength * Math.cos(angle * 0.01745) * -1;

	return [posX, posY, angle];
}

// -----------------------------------------------------------------------------
// --------------------------------- EQUIPMENT ---------------------------------
// -----------------------------------------------------------------------------

var classColors = {
	"Druid": 	"#FF7D0A",
	"Hunter": 	"#A9D271",
	"Mage": 	"#40C7EB",
	"Paladin": 	"#F58CBA",
	"Priest": 	"#FFFFFF",
	"Rogue": 	"#FFF569",
	"Shaman": 	"#0070DE",
	"Warlock": 	"#8787ED",
	"Warrior": 	"#C79C6E",
}

// 	Initialization
// -------------------------------------------------------------------

// Generate the equipment tiles, only needs to be run once as the content does not change
function PopulateEquipment()
{
	// only populate the equipment if the table is empty (only has template)
	if ($("#equipment_table_0").children().length == 1) {
		// populate each of the 4 equipment tables
		for (x = 0; x <= 2; x++) {	// disabled looping through each equipment class (1-4) to instead only populate one section
			var reset = true;
			var equipmentTable = "#equipment_table_" + x
			var equipmentList = window["equipment_class_" + x];
			var count = 0;
			for (i in equipmentList)
			{
				var equipment = equipmentList[i];
				var equipmentDiv;
				if (reset) {
					equipmentDiv = $(equipmentTable).children(":first");
					reset = false;
				} else {
					equipmentDiv = $(equipmentTable).children(":first").clone();	// instantiate a clone of the first equipment
				}

				// Populate the div
				equipmentDiv.prop("id", "equipment_item_" + i);	// name the div with the equipment name
				GenerateEquipment(equipmentDiv, equipmentList[i], 1.00);	// the 1.00 is the artifact power bonus (all equipment here is 1.00 * base, ei. the base values)

				// Add the equipment to the table
				equipmentDiv.appendTo(equipmentTable);

				// Replace any \n with a <br>
				$("#equipment_item_" + i).find(".equipment_item_effect").html(equipment.effect.replace(/\n/g, "<br>"));
				if (equipment.ability != undefined) {
					$("#equipment_item_" + i).find(".equipment_ability_description").html(equipment.ability["description"].replace(/\n/g, "<br>"));
				}
				
				// Only show the first 4 items and hide the remainder
				if (count >= 4) {
					equipmentDiv.hide();
				}
				count++;
			}
		}
	}
}

// Generate an equipment tile with info from 'equipment'
function GenerateEquipment(equipmentDiv, equipment, artifactPower)
{
	// Basic equipment info
	equipmentDiv.find(".equipment_item_name").text(equipment.name);
	equipmentDiv.find(".equipment_item_icon").attr("src", "static/img/icons/equipment/" + equipment.icon);

	equipmentDiv.find(".equipment_item_slot").text(equipment.slot); 
	equipmentDiv.find(".equipment_item_armor_class").text(equipment.armorClass);

	if (equipment.armorClass != "Shield") {
		if (equipment.armorValue != 0) {
			var armorVal = Math.round(equipment.armorValue * (1 + (artifactPower - 1) / 3.22)).toLocaleString();
			equipmentDiv.find(".equipment_item_armor_value").text(armorVal + " Armor");
			equipmentDiv.find(".equipment_item_armor_value").show();
		} else {
			equipmentDiv.find(".equipment_item_armor_value").hide();
		}

		if (equipment.weaponDamage != 0) {
			equipmentDiv.find(".equipment_item_weapon_damage").text(Math.round(equipment.weaponDamage*0.9) + " - " + Math.round(equipment.weaponDamage*1.1) + " Damage");
			equipmentDiv.find(".equipment_item_weapon_speed").text("Speed " + equipment.weaponSpeed + "0");
			equipmentDiv.find(".equipment_item_weapon_table").show();
		} else {
			equipmentDiv.find(".equipment_item_weapon_table").hide();
		}
	} else {
		equipmentDiv.find(".equipment_item_armor_value").text(equipment.armorValue + " Armor");
		equipmentDiv.find(".equipment_item_armor_value").show();
		equipmentDiv.find(".equipment_item_weapon_damage").text(equipment.weaponDamage + " Block");
		equipmentDiv.find(".equipment_item_weapon_speed").hide();
	}

	// Populate each attribute the equipment provides
	equipmentDivAttributes = equipmentDiv.find(".equipment_item_attributes");
	equipmentDivAttributes.empty();
	for (j in equipment.primary) {	// Primary attributes Attack/Spell/Healing Power, Stamina, Intellect, Vitality, Spirit
		var attributeDiv = document.createElement ("div");
		var attributeVal = Math.round(equipment.primary[j] * artifactPower);
		attributeDiv.innerHTML = ("+" + attributeVal + " " + j);
		attributeDiv.class = "equipment_text equipment_item_attribute";
		equipmentDivAttributes.append(attributeDiv);
	}
	for (j in equipment.secondary) {	// Primary attributes Attack/Spell/Healing Power, Stamina, Intellect, Vitality, Spirit
		var attributeDiv = document.createElement ("div");
		var attributeVal = Math.round(equipment.secondary[j] * artifactPower);
		attributeDiv.innerHTML = ("+" + attributeVal + " " + j);
		attributeDiv.style.color = "#1fff00";
		attributeDiv.class = "equipment_text equipment_item_attribute";
		equipmentDivAttributes.append(attributeDiv);
	}

	// Equipment requires a specific class
	if (equipment.class == "") {
		equipmentDiv.find(".equipment_item_class").hide();
	} else {
		equipmentDiv.find(".equipment_item_class_name").text(equipment.class);
		equipmentDiv.find(".equipment_item_class_name").css("color", classColors[equipment.class]);
		equipmentDiv.find(".equipment_item_class").show();
	}

	// if (equipment.durability > 0) {
	// 	equipmentDiv.find(".equipment_item_durability").text("Durability " + equipment.durability + "/" + equipment.durability);
	// 	equipmentDiv.find(".equipment_item_durability").show();
	// } else {
	// 	equipmentDiv.find(".equipment_item_durability").hide();
	// }

	equipmentDiv.find(".equipment_item_effect").text(equipment.effect);

	if (equipment.selectAbility == false ) {
		equipmentDiv.find(".equipment_item_selectability_section").hide();
	} else {
		equipmentDiv.find(".equipment_item_selectability_section").show();
	}
	
	// Equipment Ability
	if (equipment.ability != undefined) {
		equipmentDiv.find(".equipment_item_effect").hide();
		equipmentDiv.find(".equipment_ability_name").text(equipment.ability["name"]);
		equipmentDiv.find(".equipment_ability_icon").attr("src", "static/img/icons/" + equipment.ability["icon"]);

		if (equipment.ability["cost"] > 0) {
			equipmentDiv.find(".equipment_ability_resource").text(equipment.ability["cost"] + " " + equipment.ability["resource"]);
			equipmentDiv.find(".equipment_ability_resource").show();
		} else {
			equipmentDiv.find(".equipment_ability_resource").hide();
		}

		if (equipment.ability["range"] == "") {
			equipmentDiv.find(".equipment_ability_range").hide();
		} else if (equipment.ability["range"] == "melee") {
			equipmentDiv.find(".equipment_ability_range").text("Melee Range");
			equipmentDiv.find(".equipment_ability_range").show();
		} else {
			equipmentDiv.find(".equipment_ability_range").text(equipment.ability["range"] + " yd range");
			equipmentDiv.find(".equipment_ability_range").show();
		}

		if (equipment.ability["castTime"] == "0") {
			equipmentDiv.find(".equipment_ability_casttime").text("Instant");
		} else if (equipment.ability["castTime"] == "Passive") {
			equipmentDiv.find(".equipment_ability_casttime").text("Passive");
		} else {
			equipmentDiv.find(".equipment_ability_casttime").text(equipment.ability["castTime"] + " sec cast");
		}
		

		// Requirements
		if (equipment.ability.requirements.length == "0") {
			equipmentDiv.find(".equipment_ability_requires_1").hide();
			equipmentDiv.find(".equipment_ability_requires_2").hide();
		} else {
			equipmentDiv.find(".equipment_ability_requires_1").show();
			equipmentDiv.find(".equipment_ability_requires_1").text("Requires " + equipment.ability.requirements[0]);
			if (equipment.ability.requirements.length == "2") {
				equipmentDiv.find(".equipment_ability_requires_2").show();
				equipmentDiv.find(".equipment_ability_requires_2").text("Requires " + equipment.ability.requirements[1]);
			} else {
				equipmentDiv.find(".equipment_ability_requires_2").hide();
			}
		}
		
		// Cooldown
		if (equipment.ability["castTime"] != "Passive") {
			if (equipment.ability["cooldown"] < 60) {
				equipmentDiv.find(".equipment_ability_cooldown").find("span").text(equipment.ability["cooldown"] + " sec cooldown");
			} else if (equipment.ability["cooldown"] < 3600) {
				equipmentDiv.find(".equipment_ability_cooldown").find("span").text(equipment.ability["cooldown"]/60 + " min cooldown");
			} else {
				equipmentDiv.find(".equipment_ability_cooldown").find("span").text(equipment.ability["cooldown"]/3600 + " hr cooldown");
			}
		} else {
			equipmentDiv.find(".equipment_ability_cooldown").hide();
		}

		equipmentDiv.find(".equipment_ability_description").text(equipment.ability["description"]);
	} else if (equipmentDiv.find(".equipment_ability_info") != undefined) {
		equipmentDiv.find(".equipment_ability_info").hide();
		equipmentDiv.find(".equipment_item_effect").show();
	}
}

// 	Mouse Events
// -------------------------------------------------------------------

// Show/Hide the equipment when clicked
$("#equipment_armor_button").click( function() {
	button = document.getElementById("equipment_armor_button");
	if (button.innerText == "Show More") {
		ShowTable("#equipment_table_0");
		button.innerText = "Hide";
	} else {
		HideTable("#equipment_armor", "#equipment_table_0");
		button.innerText = "Show More";
	}
})

$("#equipment_weapons_button").click( function() {
	button = document.getElementById("equipment_weapons_button");
	if (button.innerText == "Show More") {
		ShowTable("#equipment_table_1");
		button.innerText = "Hide";
	} else {
		HideTable("#equipment_weapons", "#equipment_table_1");
		button.innerText = "Show More";
	}
})

$("#equipment_trinkets_button").click( function() {
	button = document.getElementById("equipment_trinkets_button");
	if (button.innerText == "Show More") {
		ShowTable("#equipment_table_2");
		button.innerText = "Hide";
	} else {
		HideTable("#equipment_trinkets", "#equipment_table_2");
		button.innerText = "Show More";
	}
})

// 	Interaction
// -------------------------------------------------------------------

// Show all equipment in the table
function ShowTable (table) {
	var equipment = $(table).children();
	for (var i = 0; i < equipment.length; i++) {
		$("#" + equipment[i].id).show();
	}
}

// Hide all equipment in the table except for the first row
function HideTable (section, table) {
	var equipment = $(table).children();
	var count = 0;
	for (var i = 0; i < equipment.length; i++) {
		var itemsToDisplay;

		if (windowNarrow == true) {	// display either 3 or 4 elements in the first row depending on the browser window width
			itemsToDisplay = 3;
		} else {
			itemsToDisplay = 4;
		}

		if (count >= itemsToDisplay) {
			$("#" + equipment[i].id).hide();
		}
		count++;
	}
	// Set the scroll position back to the top of the section (with a minor offset so it's more centered on the screen)
	$('html, body').animate({
        scrollTop: $(section).offset().top - 150
    }, 0);
}

// Change what equipment elements are displayed based on the width of the browser window
var windowNarrow = false;
window.setInterval(function(){
	if (window.innerWidth < 1557 && window.innerWidth > 1171) {
		if (windowNarrow == false) {
			if (document.getElementById("equipment_armor_button").innerText == "Show More") {
				var equipment = $("#equipment_table_0").children();
				$("#" + equipment[3].id).hide();
			}
			if (document.getElementById("equipment_weapons_button").innerText == "Show More") {
				var equipment = $("#equipment_table_1").children();
				$("#" + equipment[3].id).hide();
			}
			if (document.getElementById("equipment_trinkets_button").innerText == "Show More") {
				var equipment = $("#equipment_table_2").children();
				$("#" + equipment[3].id).hide();
			}
		}
		windowNarrow = true;
	} else {
		if (windowNarrow == true) {
			if (document.getElementById("equipment_armor_button").innerText == "Show More") {
				var equipment = $("#equipment_table_0").children();
				$("#" + equipment[3].id).show();
			}
			if (document.getElementById("equipment_weapons_button").innerText == "Show More") {
				var equipment = $("#equipment_table_1").children();
				$("#" + equipment[3].id).show();
			}
			if (document.getElementById("equipment_trinkets_button").innerText == "Show More") {
				var equipment = $("#equipment_table_2").children();
				$("#" + equipment[3].id).show();
			}
		}
		windowNarrow = false;
	}
}, 1000);

// -----------------------------------------------------------------------------
// --------------------------------- ARTIFACTS ---------------------------------
// -----------------------------------------------------------------------------

artifactPowerIncreaseMin = 1.10	// The minimum strength of an artifact compared to the base equipment
artifactPowerIncreaseMax = 1.50	// The maximum strength of an artifact compared to the base equipment
artifactMaximumLevel = 4;		// How many times the Artifact can level

// 	Initialization
// -------------------------------------------------------------------
function PopulateArtifacts() {
	GenerateEquipment($("#artifact_before_0"), equipment_class_0["rampaging_chestplate"], 1);
	GenerateArtifact_0(artifactPowerIncreaseMin);

	GenerateEquipment($("#artifact_before_1"), equipment_class_0["lost_soul_bindings"], 1);
	GenerateArtifact_1(artifactPowerIncreaseMin);

	GenerateEquipment($("#artifact_before_2"), equipment_class_0["lights_vanguard_legplates"], 1);
	GenerateArtifact_2(artifactPowerIncreaseMin);
}

// Rampaging Chestplate
function GenerateArtifact_0(artifactPower) {
	GenerateEquipment($("#artifact_after_0"), equipment_class_0["rampaging_chestplate"], artifactPower);
	$("#artifact_after_0").find(".equipment_item_effect").text("Gain " + Math.round(20 * artifactPower) + " Rage over 5 seconds when you enter combat.");	// override the effect text
}

// Lost Soul Bindings
function GenerateArtifact_1(artifactPower) {
	GenerateEquipment($("#artifact_after_1"), equipment_class_0["lost_soul_bindings"], artifactPower);
	var val = (5 * artifactPower).toFixed(1);	// show one digit past the decimal point (ex 5.5)
	if (val % 1 == 0) {
		console.log (true);
		val = parseFloat(val);	// remove the 0 past the decimal point
	}
	$("#artifact_after_1").find(".equipment_item_effect").text("Generating a Soul Shard reduces the cooldown of [Ability] by " + val + " seconds.");
}

// Light's Vanguard Legplates
function GenerateArtifact_2(artifactPower) {
	GenerateEquipment($("#artifact_after_2"), equipment_class_0["lights_vanguard_legplates"], artifactPower);
	$("#artifact_after_2").find(".equipment_item_effect").text("Blocking an attack while Holy Shield is active heals you for " + Math.round(40*artifactPower) + "% of the amount Blocked.");
}

// Interaction
// -------------------------------------------------------------------
artifact_slider_0.oninput = function() {ArtifactSlider0();}
function ArtifactSlider0 () {
	var sliderVal = $("#artifact_slider_0").val();
	var artifactPower = artifactPowerIncreaseMin + ((artifactPowerIncreaseMax - artifactPowerIncreaseMin)/artifactMaximumLevel) * (sliderVal - 1);
	GenerateArtifact_0(artifactPower);
	// $("#artifact_level_display_0").text(sliderVal);	// update the displayed artifact level
	$("#artifact_wreath_text_0").text(sliderVal);	// update the golden wreath number
}

artifact_slider_1.oninput = function() {ArtifactSlider1();}
function ArtifactSlider1 () {
	var sliderVal = $("#artifact_slider_1").val();
	var artifactPower = artifactPowerIncreaseMin + ((artifactPowerIncreaseMax - artifactPowerIncreaseMin)/artifactMaximumLevel) * (sliderVal - 1);
	GenerateArtifact_1(artifactPower);
	// $("#artifact_level_display_1").text(sliderVal);
	$("#artifact_wreath_text_1").text(sliderVal);
}

artifact_slider_2.oninput = function() {ArtifactSlider2();}
function ArtifactSlider2 () {
	var sliderVal = $("#artifact_slider_2").val();
	var artifactPower = artifactPowerIncreaseMin + ((artifactPowerIncreaseMax - artifactPowerIncreaseMin)/artifactMaximumLevel) * (sliderVal - 1);
	GenerateArtifact_2(artifactPower);
	// $("#artifact_level_display_2").text(sliderVal);
	$("#artifact_wreath_text_2").text(sliderVal);
}