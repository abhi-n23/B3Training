'use strict'
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [['Neuer', 'Pavard','Martinez', 'Alaba','Davies', 'Kimmich','Goretzka', 'Coman','Muller', 'Gnarby','Lewandowski',],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',]],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
};




console.log('----coding challenge 1 solution----');

//task 1-1
const [players1,players2] = game.players;
console.log(players1, players2);
//task 1-2
const [gk1, ...fieldplayers1] = players1;
const [gk2, ...fieldplayers2] = players2;
//task 1-3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//task 1-4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//task 1-5
// let team1, draw, team2
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
//task 1-6
const printGoals = function (...players) {
    console.log(`${players.length} are scored!`);
    console.log(`-----Goals scored by----`);
    for (let i = 0; i < players.length; i++)
    {
        console.log(`${players[i]}`);
    }
};
printGoals(...game.scored);
//task 1-7
team1 < team2 && console.log(`${game.team1} is likely to win with odds=${team1}`);
team1 > team2 && console.log(`${game.team2} is likely to win with odds=${team2}`);



console.log('----coding challenge 2 solution----');

//task 2-1
for (const [i,value] of game.scored.entries()) {
    console.log(`Goal ${i+1}: ${value}`);
}

//task 2-2
let avg = 0;
const odds = Object.values(game.odds);
for (const x of odds) {
    avg += x;
}
avg /= odds.length;
console.log(avg);
    
//task 2-3

for (const [team, odd] of Object.entries(game.odds)) {
    
    const teamstring = team === 'x' ? 'draw' : `victory ${game[team]}`;

    console.log(`Odd of ${teamstring} = ${odd}`);
}
