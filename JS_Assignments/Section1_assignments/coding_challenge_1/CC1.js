/*
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

//TEST DATA 1

let mark_Height = 1.69, mark_Weight = 78, John_Height = 1.95, John_Weight = 92;

let BMI_mark = mark_Weight / mark_Height ** 2;
let BMI_john = John_Weight / John_Height ** 2;

console.log("bmi of msark=", BMI_mark);
console.log("bmi of john=", BMI_john);


let markHigherBMI = BMI_mark > BMI_john;
console.log(markHigherBMI);

//  TEST DATA 2

mark_Height = 1.88, mark_Weight = 95, John_Height = 1.76, John_Weight = 85;

BMI_mark = mark_Weight / mark_Height ** 2;
BMI_john = John_Weight / John_Height ** 2;

console.log("bmi of msark=", BMI_mark);
console.log("bmi of john=", BMI_john);


markHigherBMI = BMI_mark > BMI_john;
console.log(markHigherBMI);