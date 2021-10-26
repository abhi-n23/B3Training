/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/


let mark_Height = 1.69, mark_Weight = 78, John_Height = 1.95, John_Weight = 92;

let BMI_mark = mark_Weight / mark_Height ** 2;
let BMI_john = John_Weight / John_Height ** 2;

console.log("bmi of msark=", BMI_mark);
console.log("bmi of john=", BMI_john);

if (BMI_mark > BMI_john) {
    console.log(`Mark's BMI (${BMI_mark}) is greater than John's BMI(${BMI_john})`);
}
else {
    console.log(`John's BMI (${BMI_john}) is greater than Mark's BMI(${BMI_mark})`);
}