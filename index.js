/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 18;
console.log(votingAge > 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var num1 = 2;
var num2 = 3;
if (num1 < num2) {
  num1 += num2;
}
console.log(num1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var string = "1999";
var number = parseInt(string);
console.log(number);

//Task d: Write a function to multiply a*b

function multiplyAB(a, b) {
  return a * b;
}
console.log(multiplyAB(3, 4));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(humanAge, dogAge) {
  return (dogAge = humanAge * 7);
}
console.log(dogYears(28));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFood(dogAge, dogWeight) {
  if (dogAge >= 1 && dogWeight <= 5) {
    return dogWeight * 0.05 + " pounds of food per day";
  } else if (dogAge >= 1 && (dogWeight >= 6, dogWeight <= 10)) {
    return dogWeight * 0.04 + " pounds of food per day";
  } else if (dogAge >= 1 && (dogWeight >= 11, dogWeight <= 15)) {
    return dogWeight * 0.03 + " pounds of food per day";
  } else if (dogAge >= 1 && dogWeight > 15) {
    return dogWeight * 0.02 + " pounds of food per day";
  } //puppies: 2-4 mo = 0.16-0.34
  // 4-7 mo = 0.34-0.59
  // 7-12 mo = 0.59-0.99
  //using max weight of 50lbs for the puppies.
  else if (dogAge < 0.16 && dogWeight < 5) {
    return "this doggo should still be on breast milk";
  } else if ((dogAge >= 0.16, dogAge < 0.34) && dogWeight < 50) {
    return dogWeight * 0.1 + " pounds of food per day";
  } else if ((dogAge >= 0.34, dogAge < 0.59) && dogWeight < 50) {
    return dogWeight * 0.05 + " pounds of food per day";
  } else if ((dogAge >= 0.59, dogAge < 1) && dogWeight < 50) {
    return dogWeight * 0.04 + " pounds of food per day";
  }
}
//task:
console.log(dogFood(1, 15));
//puppy example:
console.log(dogFood(0.5, 2));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const rock = 0;
const paper = 1;
const scissors = 2;

function rpsGame() {
  let humanChoice = prompt("Rock, Paper, or Scissors?");
  humanChoice = humanChoice.toLocaleLowerCase();
  humanChoice = humanChoice.trim();
  const compChoice = Math.floor(Math.random() * 3);
  //Rock choices:
  if (humanChoice === "rock" && compChoice === rock) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "It's a TIE!";
    let p = document.querySelector("p");
    p.innerHTML = "ROCK vs ROCK - Play again below.";
  } else if (humanChoice === "rock" && compChoice === paper) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You loose 😢";
    let p = document.querySelector("p");
    p.innerHTML = "ROCK vs PAPER - Play again below.";
  } else if (humanChoice === "rock" && compChoice === scissors) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You win 🙌!";
    let p = document.querySelector("p");
    p.innerHTML = "ROCK vs SCISSORS - Play again below.";
  }
  //Paper choices:
  else if (humanChoice === "paper" && compChoice === rock) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You win 🙌!";
    let p = document.querySelector("p");
    p.innerHTML = "PAPER vs ROCK - Play again below.";
  } else if (humanChoice === "paper" && compChoice === paper) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "It's a TIE!";
    let p = document.querySelector("p");
    p.innerHTML = "PAPER vs PAPER - Play again below.";
  } else if (humanChoice === "paper" && compChoice === scissors) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You loose 😢";
    let p = document.querySelector("p");
    p.innerHTML = "PAPER vs SCISSORS - Play again below.";
  }
  //Scissors choices:
  else if (humanChoice === "scissors" && compChoice === rock) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You loose 😢";
    let p = document.querySelector("p");
    p.innerHTML = "SCISSORS vs ROCK - Play again below.";
  } else if (humanChoice === "scissors" && compChoice === paper) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "You win 🙌!";
    let p = document.querySelector("p");
    p.innerHTML = "SCISSORS vs PAPER - Play again below.";
  } else if (humanChoice === "scissors" && compChoice === scissors) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "It's a TIE!";
    let p = document.querySelector("p");
    p.innerHTML = "SCISSORS vs SCISSORS - Play again below.";
  }
}
let rpsButton = document.querySelector(".rpsButton");
rpsButton.addEventListener("click", rpsGame);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMi(km) {
  return km * 0.621371 + " miles";
}
console.log(kmToMi(10));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCm(feet) {
  return feet * 30.48 + "cm";
}
console.log(feetToCm(4));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
var bottles;
function annoyingSong(counter) {
  for (counter = counter; counter >= 1; counter = counter - 1)
    console.log(counter + " bottles of soda on the wall.");
  if (counter < 99) {
    console.log(
      counter +
        " bottles of soda on the wall. " +
        counter +
        " bottles of soda. Take one down, pass it around..."
    );
  }
}
console.log(annoyingSong(5));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function grade(percent) {
  if (percent >= 90) {
    console.log("A");
  } else if (percent >= 80 && percent < 90) {
    console.log("B");
  } else if (percent >= 70 && percent < 80) {
    console.log("C");
  } else if (percent >= 60 && percent < 70) {
    console.log("D");
  } else if (percent >= 0 && percent < 60) {
    console.log("F");
  }
}
console.log(grade(76));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
//***********ABOVE IN RPSGAME
