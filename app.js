////////////////////// BEGINNER CHALLLENGES //////////////////////


//  Q1. Return the sum of two numbers  //

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 5));

//  Q2. Convert hours into seconds  //

function hoursIntoSeconds(hour) {
  return (seconds = hour * 60 * 60);
}

console.log(hoursIntoSeconds(2));

//  Q3. Calculate the perimeter of a rectangle  //

function calcPerimeter(length, width) {
  return 2 * length + 2 * width;
}

console.log(calcPerimeter(10, 20));

//  Q4. Calculate the area of a triangle  //

function calcAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(20, 20));

//  Q5. Extend a string  //

function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));

//  Q6. Greater than 100  //

function sumGreaterThan100(num1, num2) {
  return num1 + num2 >= 100;
}

console.log(sumGreaterThan100(100, 3));

//  Q7. Less than or equal to zero  //

function lessThanOrEqualToZero(number) {
  return number <= 0;
}

console.log(lessThanOrEqualToZero(4));

//  Q8. Opposite boolean  //

function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(true));

//  Q9. Is not the mumber 0  //

function notNumber0(num) {
  return num !== 0;
}

console.log(notNumber0(0));

//  Q10. Calculate the remainder  //

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(10, 9));

//  Q11. Is the number odd?  //

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(15));

//  Q12. If a number is even, return 1 otherwise return -1  //

function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(1));

//  Q13. Check if a user is logged in and subscribed  //

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

//  Q14. Check if a user is logged in or subscribed  //

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" || subscribed === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));


////////////////////// MEDIUM CHALLENGES //////////////////////


//  Q1. Falsy or truthy?  //

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(true, "Dog"));

//  Q2. Return the length of any given array  //

function arrLength(arr) {
  return arr.length;
}
console.log(arrLength([0, 1, 2, 3, 4, 5]));

//  Q3. Get the last element in an array  //

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem(["dog", "cat", "ball", 5, -100]));

//  Q4. Find the sum of an array  //

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([100, 200, 500]));

//  Q5. Add up the numbers from a single number  //

function progressiveSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3));

//  Q6. Calculate the time  //

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  if (timerSeconds.toString().length === 1) {
    timerSeconds = "0" + timerSeconds;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(180));

//  Q7. Find the largest number  //

function getMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([5, 100, 0]));

//  Q8. Reverse a string  //

//Incrementing for loop:

function reverseString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; ++i) {
    // this is how you loop through every character in a string
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

console.log(reverseString("abcd"));

//Decrementing for loop

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString("This is cool"));

//Array reverse property:

function reverseString(str) {
  return str.split("").reverse().join("");
  //convert string to array: str.split('')
  //can only be used in arrays : .reverse()
  //convert back to string: .join('')
}

console.log(reverseString("Francisco"));

//  Q9. Turn every element in an array into 0  //

//For loop:
function convertToZeros(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; ++i) {
    newArr[i] = 0;
  }
  return newArr;
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

//Array 'fill':
function convertToZeros(arr) {
  return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1, 2, 3]));

//Array 'map':
function convertToZeros(arr) {
  return arr.map((element) => 0);
}

console.log(convertToZeros([1, 2, 3, 4]));

//  Q10. Filter out all the apples  //

//For loop:
function removeApples(arr) {
  let noApples = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== "Apple") {
      noApples.push(arr[i]);
      //add element to an array: .push()
    }
  }
  return noApples;
}

console.log(removeApples(["Tomato", "Orange", "Apple", "Banana"]));

//Array 'filter':
function removeApples(arr) {
  return arr.filter((element) => element !== "Apple");
}

console.log(removeApples(["Pear", "Strawberry", "Apple"]));

//  Q11. Filter out all the falsy values  //

//For loop:
function filterFalsy(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

console.log(filterFalsy(["", NaN, 10, null, undefined, "0"]));

//Array 'filter':
function filterFalsy(arr) {
  return arr.filter((elem) => !!elem === true);
}

console.log(filterFalsy([false, true, "Francisco", NaN, 12]));

//  Q12. Truthy to true, Falsy to false  //

function convertToBoolean(arr) {
  return arr.map((elem) => !!elem);
}

console.log(convertToBoolean([500, 0, "Francisco", "", []]));


