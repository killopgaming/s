/* let name = prompt('What is your name?');
let num1 = prompt('enter num 1');
let num2 = prompt('enter num 2');
console.log(num1+num2); 
let PI = 3.1415
*/

/* assignmen9t 1 
 
let country = 'India';
let continent = 'Asia';
let population = '80';

console.log(country);
console.log(continent);
console.log(population);*/

 // data types//
/*
let javascriptIsFun = true;
console.log (javascriptIsFun);

//console.log (typeof true);
console.log (typeof javascriptIsFun);
//console.log (typeof 23);
//console.log (typeof 'dev');

javascriptIsFun = "YES!"
console.log(typeof javascriptIsFun) ;

let year;
console.log(year);
console.log(typeof year);

year = 2008;
console.log(typeof year);

console.log(typeof null)


 let age = 30;
 age = 32;

const birthYear = 1991;
 birthYear = 19909;

 const job;

 var job = 'programmer';
 job = 'teacher'

LastName = 'Chhangani';
console.log(LastName);


const now = 2026;
const agedev = now-2008;
const agepuneet = now-1991;
console.log(agedev,agepuneet);

console.log (agedev * 99,agepuneet / 99,2 ** 3)
// 2 ** 3 means to the power of 3 = 2 * 2 * 2

const firstName = 'dev';
const LastName = 'chhangani';
console.log(firstName +' '+ LastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x= = x - 1 = 100
console.log (x);

// comparison operators

console.log(agedev,agepuneet);
console.log(agedev > agepuneet); // >, <, >=, <=
console.log(agedev >= 18);

const isfullage = agedev >= 18;


const now = 2026;
const agedev = now-2008;
const agepuneet = now-1991;

console.log ( now - 2008 < now - 1991);

let x, y;
x = y = 25 - 10 - 5; // y = x = 10
console.log (x,y);

const averageAge = (agedev + agepuneet) / 2
console.log(agedev, agepuneet, averageAge);

JavaScript Fundamentals – Part 

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn /  (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log (BMIMark, BMIJohn, markHigherBMI);

const firstName = 'dev';
const job = 'student';
const birthYear = '2008';
const currentYear = '2026';

const dev = "I'm " + firstName + ',a ' + (currentYear - birthYear) + ' years old ' + job + ' ! ';
console.log (dev);

const devNew = ` Im  $ {firstName}, a ${currentYear - birthYear} years old ${job}! `;
console.log (devNew);

console.log("just normal text with spacing");
console.log("with spacing\nnext line\nnext line");

const age = 20
if (age >=18) {
  console.log (`you can start driving car`);
} else {
  const yearsLeft = 18 - age;
  console.log (`you are too young. wait another ${yearsLeft} year :)`);
}

//control structure
if() {

} else {

}


const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);

CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn /  (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log (BMIMark, BMIJohn, markHigherBMI);

//console.log (`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} !`)

if (BMIJohn > BMIMark) {
  console.log (`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} !`)
}else {
  console.log (`Mark's BMI ${BMIMark} is higher than Johan's ${BMIJohn} !`)
}
*/

const inputYear = '2026'
console.log(Number(inputYear), inputYear) //1st one is converted to a num. while the other one is just a string
console.log (Number(inputYear) + 18) // const converted to num in order to do the sum
console.log(inputYear + 18); // 18 added to string 2026 which gives and output in sting which if 202618


