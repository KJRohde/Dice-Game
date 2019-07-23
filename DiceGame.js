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

// humanStats = [3, 3]
// dwarfStats = [5, 1]
// hobbitStats = [1, 5]
	let corruption = 0
	let position = 200
	let aid = false
	let stats = [0, 0]

function playerTurn(movementDie, nazgulDie, challengeDie, corruptionDie, eventDie, aidDie)
{
	if (corruption >= 100)
	{
		console.log("You are consumed by evil and Sauron reclaims the ring, as well as dominion over Middle-Earth")
	}
	else if (position <= 0)
	{
		console.log("The fores of good prevail!!! The Ring of Power is destroyed and Morgoth's influence over the land is diminished.")
	}
	while (corruption <= 100 && position >= 0)
	{
		if (human === true)
		{
			stats = [3,3]
		}
		else if (hobbit === true)
		{
			stats = [1,5]
		}
		else if (dwarf === true)
		{
			stats = [5,1]
		}

	{
	let rollArray = [movementDie, nazgulDie, challengeDie, corruptionDie, eventDie, aidDie];
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
	if (rollArray[1] >= 11)
	{
		console.log("You have been found by the Nazgul! You will move no spaces this turn and still gain Corruption");
		(corruption += rollArray[3]);
				if (corruption >= 100)
			{
				console.log("You are corrupted by the Ring with " + position + " leagues to Morder");
				console.log("You are consumed by evil and Sauron reclaims the One Ring, as well as dominion over Middle-Earth");
				return;
			}
				else
				{
					console.log("You are still " + position + " leagues from Mordor, and have acquired " + corruption + " Corruption");
					playerTurn(Math.floor((Math.random()*20) + 1),Math.floor((Math.random()*12) + 1),Math.floor((Math.random()*10) + 1),Math.floor((Math.random()*8) + 1),Math.floor((Math.random()*6) + 1),Math.floor((Math.random()*4) + 1));
					return;
				}

	}
	else if (rollArray[1] < 11)
	{
		console.log("You manage to avoid nazgul detection this round.");
	}
		if (rollArray[4] == 1)
		{
			console.log("You ran into no other trouble no this turn.");
		}
		else if (rollArray[4] == 2)
		{
			console.log("Orc ambush! You are forced to fight.");
			if (rollArray[2] >= (8 - stats[0]))
			{
				console.log("You managed to fend off the orcs and proceed as planned.");
			}
			else
			{
				console.log("The orcs overwhelm you, pushing you back 5 leagues.");
				rollArray[0] -= 5;
			}
		}
		else if (rollArray[4] == 3)
		{
			console.log("You have scouted an orc encampment ahead. You can choose to fight the orcs or sneak past them.");
			if (rollArray[2] >= 8 - stats[0])
			{
				console.log("You chose to fight the orcs and succeeded. Proceed as many leagues as planned.");
			}
			else
			{
				console.log("You chose to fight the orcs and fail. You move 8 less leagues than planned to recover.");
				rollArray[0] -= 8;
			}
		}
		else if (rollArray[4] == 4)
		{
			console.log("You are captured by elves! You must be stealthy to escape the elven prison.");
			if (rollArray[2] >= 8 - stats[1])
			{
				console.log("You manage to break out of the prison undetected. Proceed as many leagues as planned.");
			}
			else
			{
				console.log("The elves catch you trying to escape. By the time you are released, you are 8 leagues behind.");
				rollArray[0] -= 8;

			}
		}
		else if (rollArray[4] == 5)
		{
			console.log("An angry ent blocks your path. You can choose to chop it down or dodge its attacks to proceed.");
			if (rollArray[2] >= 8 - stats[0])
			{
				console.log("You take an axe and chop the ent down. Proceed as many leagues as planned.");
			}
			else
				console.log("The ents rage proves too much for your skill with an axe. You are delayed 5 leagues.");
				rollArray[0] -= 5;
		}
		else if (rollArray[4] == 6)
		{
			console.log("You ran into no other trouble no this turn");
		}
		position -= rollArray[0];
		if (position < 0 && corruption < 100)
		{
			console.log("You have arrived at mordor with only " + corruption + " corruption");
			console.log("The forces of good prevail!!! The Ring of Power is destroyed and Morgoth's influence over the land is diminished.");
			return;
		}
		corruption += rollArray[3];
		if (corruption >= 100)
		{
			console.log("You are corrupted by the Ring with " + position + " leagues to Morder");
			console.log("You are consumed by evil and Sauron reclaims the One Ring, as well as dominion over Middle-Earth");
			return;
		}
		console.log("You are still " + position + " leagues from Mordor, and have acquired " + corruption + " Corruption");
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
		// console.log("You roll the dice again.")
		playerTurn(Math.floor((Math.random()*20) + 1),Math.floor((Math.random()*12) + 1),Math.floor((Math.random()*10) + 1),Math.floor((Math.random()*8) + 1),Math.floor((Math.random()*6) + 1),Math.floor((Math.random()*4) + 1));
	}
	
}
}

let start = false;
function beginGame() {
	document.getElementById("start").innerHTML = "The game has started";
  console.log("The journey from Rivendell to Mordor has begun. Best of luck, adventurer.");
playerTurn(Math.floor((Math.random()*20) + 1),Math.floor((Math.random()*12) + 1),Math.floor((Math.random()*10) + 1),Math.floor((Math.random()*8) + 1),Math.floor((Math.random()*6) + 1),Math.floor((Math.random()*4) + 1))
}



