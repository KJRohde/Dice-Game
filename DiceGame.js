// Dice Game
//(5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages
//(10 points): As a developer, I want to come up with a game concept played with dice, ensuring that my game concept is more complicated than “War”.
//(10 points): As a developer, I want my game concept to be approved by an instructor, with part of the process being that I walk the instructor through my gameidea so that project user stories can be written out with the instructor
//(20 points): As a developer, I want my game to have gameplay functionality.
//(10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number), regardless of the number of sides
//(10 points): As a developer, I want to utilize six different dice within my game. (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided.Different dice may be substituted. No 2-sided die.)

//Player begins by picking a race and a travel method
//Player rolls 20 sided die to determine a move length
//Player rolls 12 sided die to determine turn corruption
//Player rolls 6 sided die to determine an encounter
//Player must make a choice based on race to get through the encounter
//Player rolls 8 sided die to succeed or fail in encounter
//Player rolls 4 sided die to call for aid if necessary


// Begin at the Rivendell (Position 200) and attempt to reach Mordor (Position 0) to destroy the Ring of Power
// Reach Mordor and destroy the ring before corruption reaches 100 and you are consumed by evil
		// {
		// 	break;
		// }
		// let startTurn = false
		// function nextTurn()
		// {
		// document.getElementById("roll").innerHTML = "Roll";
		// startTurn = true;
		// }
		// {
		// 	if (startTurn === true)
		// 	{
		// 		continue;
		// 	}
		// }

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


let human = false;
let dwarf = false;
let hobbit = false;

function pickRaceHuman() {
	document.getElementById("human").innerHTML = "Human";
  console.log("You have chosen Human: Equally good at agility and fighting");
  human = true;
  dwarf = false;
  hobbit = false;
}
function pickRaceDwarf() {
	document.getElementById("dwarf").innerHTML = "Dwarf";
  console.log("You have chosen Dwarf: Best at fighting and weakest at agility");
  dwarf = true;
  human = false;
  hobbit = false;
}
function pickRaceHobbit() {
	document.getElementById("hobbit").innerHTML = "Hobbit";
  console.log("You have chosen Hobbit: Best at agility and weakest at fighting");
  hobbit = true;
  human = false;
  dwarf = false;
}

let walk = false;
let horse = false;
let eagle = false;

function pickMethodWalk(){
	document.getElementById("walk").innerHTML = "Walk";
	console.log("You are going to walk: Slow moving, with a small chance of Nazgul encounters");
	walk = true;
	horse = false;
	eagle = false;
}
function pickMethodHorse(){
	document.getElementById("horse").innerHTML = "Horse";
	console.log("You are going to ride a horse: Moderate speed, with moderate chance of Nazgul encounters");
	horse = true;
	walk = false;
	eagle = false;
}
function pickMethodEagle(){
	document.getElementById("eagle").innerHTML = "Eagle";
	console.log("You are going to ride an eagle: Fast pace, with high chance of Nazgul encounters");
	eagle = true;
	hobbit = false;
	horse = false;
}
function nextTurn(){
		document.getElementById("roll").innerHTML = "Roll";
		startTurn = true;
}

// humanStats = [3, 3]
// dwarfStats = [5, 1]
// hobbitStats = [1, 5]
	let corruption = 0
	let position = 250
	let aid = false
	let stats = [0, 0]
	let turnCounter = 0

function playerTurn()
{

	if (corruption >= 100)
	{
		console.log("You are consumed by evil and Sauron reclaims the ring, as well as dominion over Middle-Earth")
	}
	else if (position <= 0)
	{
		console.log("The forces of good prevail!!! The Ring of Power is destroyed and Morgoth's influence over the land is diminished.")
	}
	while (corruption <= 100 && position >= 0)
	{
		turnCounter++;
		if (human)
		{
			stats = [3,3]
		}
		else if (hobbit)
		{
			stats = [1,5]
		}
		else if (dwarf)
		{
			stats = [5,1]
		}

	{
	let rollArray = [(Math.floor((Math.random()*20) + 1)), (Math.floor((Math.random()*12) + 1)), (Math.floor((Math.random()*10) + 1)), (Math.floor((Math.random()*8) + 1)), (Math.floor((Math.random()*6) + 1)), (Math.floor((Math.random()*4) + 1))];
	if (horse === true)
	{
		rollArray[0] += 6;
		rollArray[1] +=2;
	}
	else if (eagle === true)
	{
		rollArray[0] *= 2;
		rollArray[1] += 5;
	}
	console.log(rollArray);
	console.log("You have the energy to move " + rollArray[0] + " leagues on this turn.")
	if (rollArray[1] >= 11)
	{
		alert("You have attracted the attention of the nazgul.")
		console.log("You have attracted the attention of the nazgul.")
		if (rollArray[5] == 1)
		{
			alert("You see the nazgul coming before they can see you.");
			console.log("You see the nazgul coming before they can see you.");
			let useRing = false;
			let useStrength = false;
			let useAgility = false
			var text;
			var nazgulEncounter = prompt("Will you use the Ring to attempt escape, fight the nazgul, or try to hide? Please enter 'ring' 'fight' or 'hide'");
			switch(nazgulEncounter)
			{
 			case "ring":
    		text = "You have chosen to use the ring";
    		useRing = true;
   			break;
  			case "fight":
    		text = "You face the nazgul";
    		useStrength = true;
    		break;
    		case "hide":
    		text: "You take cover";
    		useAgility = true;
    		break;
  			default:
    		text = "You took too long to decide. The nazgul see you and attack!";
    		useStrength = true;
    		break;
			}
			if (useRing === true)
			{
				if (rollArray[2] >= (4))
				{
				alert("You use the Ring to escape the clutches of the nazgul and move all of your expected leagues.");
				console.log("You use the Ring to escape the clutches of the nazgul and move all of your expected leagues.");
				}
				else
				{
				alert("You spend far too much time with the Ring on and double your corruption this turn without moving.");
				console.log("You spend far too much time with the Ring on and double your corruption this turn without moving.");
				rollArray[0] -= rollArray[0];
				rollArray[3] += rollArray[3];
				}
			}
			else if (useStrength === true)
			{
				if(rollArray[2] >= 10 - stats[0])
				{
				alert("You are able to fend off the Wraiths and move half of your expected leagues.");
				console.log("You are able to fend off the Wraiths and move half of your expected leagues.");
				rollArray[0] *= 0.5;
				}
				else
				{
				alert("The encounter with the Wraiths drains you of all energy and you cannot move on this turn.");
				console.log("The encounter with the Wraiths drains you of all energy and you cannot move on this turn.");
				rollArray[0] -= rollArray[0];
				}
			}
			else if (useAgility === true)
			{
				if(rollArray[2] <= 3 + stats[1])
				{
				alert("You hide for a while and the nazgul eventually passes you by. You still have time to move half of your expected leagues.");
				console.log("You hide for a while and the nazgul eventually passes you by. You still have time to move half of your expected leagues.");
				rollArray[0] *= 0.5;
				}
			else
				{
				alert("You spend all day moving between hiding places and do not progress any leagues this turn.");				
				console.log("You spend all day moving between hiding places and do not progress any leagues this turn.");
				rollArray[0] -= rollArray[0];
				}
			}
		else if (rollArray[5] == 2)
		{
			alert("Aragorn comes to your aid! This encounter only costs you 5 leagues");			
			console.log("Aragorn comes to your aid! This encounter only costs you 5 leagues");
			(rollArray[0] -= 5);
		}
		else if (rollArray[5] == 3)
		{
			alert("You are stabbed by the Witch King's blade. You do not move and extra corruption is added this turn.");
			console.log("You are stabbed by the Witch King's blade. You do not move and extra corruption is added this turn.");
			(rollArray[0] -= rollArray[0]);
			(rollarray[3] += rollarray[4]);
		}
		else if (rollArray[5] == 4)
		{
			alert("Nobody comes between a nazgul and his prey");
			console.log("Nobody comes between a nazgul and his prey");
		}
	}
		corruption += rollArray[3];
		if (corruption >= 100)
		{
			$.alert({
    		title: 'The game is over!',
    		content: 'You are corrupted by the Ring with ' + position + ' leagues to Mordor',
			});
			console.log("You are consumed by evil and Sauron reclaims the One Ring, as well as dominion over Middle-Earth");
			return;
		}
		position -= rollArray[0];
		if (position <= 0)
		{
			$.alert({
    		title: 'The game is over!',
    		content: 'You have arrived at Mordor and destroyed the Ring of Power with only ' + corruption + '% corruption',
			});
			console.log("The forces of good prevail!!! The Ring of Power is destroyed and Morgoth's influence over the land is diminished.");
			return;
		}
			else
			{
				console.log("After " + turnCounter + " turns, you are still " + position + " leagues from Mordor, and you are " + corruption + "% Corrupted");
				alert("Your turn is over! After " + turnCounter + " turns, you are still " + position + " leagues from Mordor, and you are " + corruption + "% Corrupted");
				alert("You roll the dice again");
				playerTurn();
				return;
			}

	}
	else if (rollArray[1] < 11)
	{
		console.log("You manage to avoid nazgul detection this round.");
		if (rollArray[4] == 1)
		{
			alert("You encounter the Rohirrim on the plains and they question you.");
			console.log("You encounter the Rohirrim on the plains and they question you.");
			if (human)
			{
				alert("Because you are a human, the Rohirrim provide safe passage for an extra 5 leagues.");
				console.log("Because you are a human, the Rohirrim provide safe passage for an extra 5 leagues.");
				rollArray[0] += 5;
			}
			else
			{
				alert("Because you are not human, the Rohirrim continue questioning to ensure you are not a threat.");
				console.log("Because you are not human, the Rohirrim continue questioning to ensure you are not a threat.");
				rollArray[0] -= 5;
			}
		}
		else if (rollArray[4] == 2)
		{
			alert("Orc ambush! You may fight or flee.");
			console.log("Orc ambush! You may fight or flee.");
			let orcAmbushFight = false;
			let orcAmbushFlee = false;
			var text;
			var orcAmbushFightFlee = prompt("Will you fight the orcs head on, or flee? Please enter 'fight' or 'flee'");
			switch(orcAmbushFightFlee)
			{
 			 case "fight":
    			text = "You have chosen to fight the orcs";
    			orcAmbushFight = true;
   				 break;
  			case "flee":
    			text = "You flee from the orcs";
    			orcAmbushFlee = true;
    			break;
  			default:
    			console.log("You took too long to decide. The orcs are upon you and you are forced to fight");
    			orcAambushFight = true;
    			break;
			}
			if (orcAmbushFight === true)
			{
			if (rollArray[2] >= (9 - stats[0]))
			{
				console.log("You managed to fend off the orcs and proceed as planned.");
			}
			else
			{
				console.log("The orcs overwhelm you, pushing you back 8 leagues.");
				rollArray[0] -= 8;
			}
		}
			else if (orcAmbushFlee === true)
			{
				console.log("You flee 4 leagues to escape the orcs.");
				rollArray[0] -= 4;
			}
		}
		else if (rollArray[4] == 3)
{
			alert("You have scouted an orc encampment ahead. You can choose to fight the orcs or sneak past them.");
			console.log("You have scouted an orc encampment ahead. You can choose to fight the orcs or sneak past them.");
			let orcCampFight = false;
			let orcCampSneak = false;
			let orcCampWait = false;
			let orcCampNothing = false;
			var text;
			var orcCampFightSneak = prompt("Will you charge into the camp and fight, or sneak around? Please enter 'fight' or 'sneak' or 'wait'.");
			switch(orcCampFightSneak)
			{
 			 case "fight":
    			text = "You have chosen to fight the orcs.";
    			orcCampFight = true;
   				 break;
  			case "sneak":
    			text = "You attempt to sneak around the orc encampment.";
    			orcCampSneak = true;
    			break;
    		case "wait":
    			text: "You decide to wait until the orcs move on to proceed";
    			orcCampWait = true;
  			default:
    			text = "You took too long to decide. In the time you were wondering, the orcs have moved on and you have lost time.";
    			orcCampNothing = true;
    			break;
			}
			if (orcCampFight === true)
			{
			if (rollArray[2] >= (9 - stats[0]))
			{
				console.log("You managed to kill the orcs in the camp and proceed.");
			}
			else
			{
				console.log("The orcs fight back and injure you. You must take extra time to recover.");
				rollArray[0] -= 8;
			}
			}
			else if (orcCampSneak === true)
			{
			if (rollArray[2] >= (4 + stats[1]))
			{
				console.log("You successfully sneak past the orcs and continue on your journey.");
			}
			else
			{
				console.log("An orc catches you sneaking and you have to take a longer way around.");
				rollArray[0] -= 8;
			}
			}
			else if (orcCampWait === true)
			{
				console.log("You wait for the orcs to move on before you proceed.");
				rollArray[0] -= 4;
			}
			else if (orcCampNothing === true)
			{
				console.log("You spend so much time thinking that the orcs have time to move on.");
				rollArray[0] -= 4;
			}
		}
		else if (rollArray[4] == 4)
		{
			alert("You have been captured by Elves! You may attempt to escape, or serve your sentence,")
			console.log("You have been captured by Elves! You may attempt to escape, or serve your sentence,");
			let elfEscape = false;
			let elfServe = false;
			var text;
			var elfPrison = prompt("Will you escape or serve your sentence? Please enter 'escape' or 'serve'");
			switch(elfPrison)
			{
 			 case "escape":
    			text = "You have chosen to attempt escape";
    			elfEscape = true;
   				 break;
  			case "serve":
    			text = "You flee from the orcs";
    			elfServe = true;
    			break;
  			default:
    			text = "You took too long to decide. The elves eventually decide to let you go.";
    			elfServe = true;
    			break;
			}
			if (elfEscape === true)
			{
			if (rollArray[2] >= (9 - stats[1]))
			{
				console.log("You manage to escape from the prison and proceed as planned.");
			}
			else
			{
				console.log("The elves catch you trying to escape, holding you for another 8 leagues.");
				rollArray[0] -= 8;
			}
		}
			else if (elfServe === true)
			{
				console.log("You serve your sentence and lose 4 leagues")
				rollArray[0] -= 4;
			}
		}
		else if (rollArray[4] == 5)
		{
			alert("An angry ent blocks your path, flailing its limbs in a frenzy")
			console.log("An angry ent blocks your path, flailing its limbs in a frenzy");
			let entChop = false;
			let entDodge = false;
			let entWait = false;
			let entNothing = false;
			var text;
			var entChopDodge = prompt("Will you attempt to chop down the ent, will you dodge its limbs to get past or will you wait for it to calm down? Please enter 'chop' or 'dodge' or 'wait'.");
			switch(entChopDodge)
			{
 			 case "chop":
    			text = "You have chosen to chop down the ent.";
    			entChop = true;
   				 break;
  			case "dodge":
    			text = "You attempt to dodge the ents flailing limbs.";
    			entDodge = true;
    			break;
    		case "wait":
    			text: "You decide to wait until the ent calms down to proceed"
    			entWait = true;
  			default:
    			text = "You took too long to decide. In the time you were wondering, the ent has calmed down and you have lost time.";
    			entNothing = true;
    			break;
			}
			if (entChop === true)
			{
			if (rollArray[2] >= (9 - stats[0]))
			{
				console.log("You managed to chop down the ent and proceed.");
			}
			else
			{
				console.log("The ent proves too strong for your skills with an axe. You must take extra time to recover.");
				rollArray[0] -= 8;
			}
			}
			else if (entDodge === true)
			{
			if (rollArray[2] >= (4 + stats[1]))
			{
				console.log("You successfully dodge the ents furious blows and continue on your journey.")
			}
			else
			{
				console.log("The end lands one crushing blow and leaves you injured. You must recover")
				rollArray[0] -= 8;
			}
			}
			else if (entWait === true)
			{
				console.log("You wait for the ent to settle down before you proceed.")
				rollArray[0] -= 4;
			}
			else if (entNothing === true)
			{
				console.log("You spend so much time thinking that the ent has calmed down and allowed you to move.")
				rollArray[0] -= 4;
			}
		}
		else if (rollArray[4] == 6)
		{
			alert("Gollum is tracking you for this stretch of the journey, adding to your corruption.");
			console.log("Gollum is tracking you for this stretch of the journey, adding to your corruption.");
			rollArray[3] += rollArray[5]
		}
		position -= rollArray[0];
		if (position < 0 && corruption < 100)
		{
			$.alert({
    		title: 'The game is over!',
    		content: 'You have arrived at Mordor and destroyed the Ring of Power with only ' + corruption + '% corruption',
			});
			console.log("The forces of good prevail!!! The Ring of Power is destroyed and Morgoth's influence over the land is diminished.");
			return;
		}
		corruption += rollArray[3];
		if (corruption >= 100)
		{
			$.alert({
    		title: 'The game is over!',
    		content: 'You are corrupted by the Ring with ' + position + ' leagues to Mordor',
			});
			console.log("You are consumed by evil and Sauron reclaims the One Ring, as well as dominion over Middle-Earth");
			return;
		}
		console.log("After " + turnCounter + " turns, you are still " + position + " leagues from Mordor, and you are " + corruption + "% Corrupted");
		alert("Your turn is over! After " + turnCounter + " turns, you are still " + position + " leagues from Mordor, and you are " + corruption + "% Corrupted");
		alert("You roll the dice again");
		playerTurn();
	}
	}
}
}

let start = false;
function beginGame() {
	document.getElementById("start").innerHTML = "The game has started";
	alert("The 250 league journey from Rivendell to Mordor has begun. Best of luck, adventurer.")
  console.log("The 250 league journey from Rivendell to Mordor has begun. Best of luck, adventurer.");
playerTurn()
}

		// 	$.confirm({
  //   		title: 'Fight or Flee!',
  //  			 content: 'Take the orc ambush head on, or flee for your life',
  //  			 buttons: {
  //       	fight: function () {
  //       	ambushFight = true;
  //           $.alert('You chose to fight. Roll to see if you are successful');
  //      		 },
  //      		 flee: function () {
  //       	ambushFlee = true;
  //           $.alert('You chose to flee');
  //      		 }
  //   		}
		// });
