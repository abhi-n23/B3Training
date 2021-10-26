/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//Test data 1
let Dolphinsavg = (96 + 108 + 89) / 3;
let Koalasavg = (88 + 91 + 110) / 3;

if (Dolphinsavg > Koalasavg) {
    console.log(`Dolphins average(${Dolphinsavg}) is greater than Koalas average(${Koalasavg})`);
}
else if (Dolphinsavg < Koalasavg) {
    console.log(`Koalas average(${Koalasavg}) is greater than Dolphins average(${Dolphinsavg})`);
}
else {
    console.log(`Koalas average(${Koalasavg}) is Equal to Dolphins average(${Dolphinsavg})`);
}

//Test data bonus 2
Dolphinsavg = (97 + 112 + 101) / 3;
Koalasavg = (109 + 95 + 123) / 3;

if ((Dolphinsavg > Koalasavg) && Dolphinsavg >= 100) {
    console.log(`Dolphins average(${Dolphinsavg}) is greater than Koalas average(${Koalasavg}) and greater or equals to 100`);
}
else if (Dolphinsavg < Koalasavg && Koalasavg >= 100) {
    console.log(`Koalas average(${Koalasavg}) is greater than Dolphins average(${Dolphinsavg}) and greater or equals to 100`);
}
else if (Dolphinsavg < Koalasavg && Dolphinsavg >= 100 && Koalasavg >= 100) {
    console.log(`Both wins the Trophy`);
}
else {
    console.log(`No one wins the Tropfy`);
}

//Test data bonus 3
Dolphinsavg = (97 + 112 + 101) / 3;
Koalasavg = (109 + 95 + 106) / 3;

if ((Dolphinsavg > Koalasavg) && Dolphinsavg >= 100) {
    console.log(`Dolphins average(${Dolphinsavg}) is greater than Koalas average(${Koalasavg}) and greater or equals to 100`);
}
else if (Dolphinsavg < Koalasavg && Koalasavg >= 100) {
    console.log(`Koalas average(${Koalasavg}) is greater than Dolphins average(${Dolphinsavg}) and greater or equals to 100`);
}
else if (Dolphinsavg < Koalasavg && Dolphinsavg >= 100 && Koalasavg >= 100) {
    console.log(`Both wins the Trophy`);
}
else {
    console.log(`No one wins the Tropfy`);
}
