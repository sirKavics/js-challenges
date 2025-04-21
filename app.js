/////////////////////// BEGINNER CHALLENGES ///////////////////////
console.log("////// BEGINNER CHALLENGES //////");

//  Q1. Return the sum of two numbers  //
//  Create a function that takes two arguments as functions and return their sum.

function addition(a, b) {
  return a + b;
}

console.log(addition(3, 5));

//  Q2. Convert hours into seconds  //
//  Create a function that converts hours into seconds.

function hoursIntoSeconds(hour) {
  let minutes = hour * 60;
  let seconds = minutes * 60;
  return seconds;
}
console.log(hoursIntoSeconds(3));

//  OR (SIMPLIFIED VERSION)

function hoursIntoSeconds(hour) {
  return hour * 60 * 60;
}
console.log(hoursIntoSeconds(2));

//  Q3. Calculate the perimeter of a rectangle  //
//  Create a function that takes length and width of a rectangule and return 
//  it's perimeter.

function calcPerimeter(width, length) {
  return (width + length) * 2;
}
console.log(calcPerimeter(20, 10));

//  Q4. Calculate the area of a triangle  //
//  Wirte a function that takes the base and height of a triangule and return it's area.

function calcAreaOfTriangule(base, height) {
  return (1 / 2) * base * height;
}
console.log(calcAreaOfTriangule(10, 10));

//  Q5. Extend a string  //
//  Write a function that accepts a string and adds 'Frontend' onto the end of it.

function appendFrontend(string) {
  return string + "Frontend";
}
console.log(appendFrontend("Apple"));

//  Q6. Greater than 100  //
//  Given two numbers, return true if the sum of both numbers is greater than 100.
//  Otherwise return false.
function sumGreaterThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));

//  OR (SIMPLIFIED VERSION)

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}
console.log(sumGreaterThan100(100, 10));
console.log(sumGreaterThan100(50, 30));

//  Q7. Less than or equal to zero  //
//  Write a function that accepts a number and returns true if it is less then or 
//  equal to zero.
//  Otherwise return false.

function lessThanOrEqualToZero(number) {
  return number <= 0;
}
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(1));

//  Q8. Opposite boolean  //
//  Give a boolean (true or false), return the opposite boolean.

function oppositeBoolean(bool) {
  return !bool;
}
console.log(oppositeBoolean(false));

//  Q9. Is not the mumber 0  //
//  Given ANY element, return true if it is NOT the number 0.

function isNotZero(value) {
  return value !== 0;
}
console.log(isNotZero(2));

//  Q10. Calculate the remainder  //
//  Given two numbers, return their remainder when divided by each other.

function calcRemainder(num1, num2) {
  return num1 % num2;
}
console.log(calcRemainder(7, 8));

//  Q11. Is the number odd?  //
//  Given two numbers, return true if the number is odd.

function isOdd(number) {
  return number % 2 !== 0;
}
console.log(isOdd(2));
console.log(isOdd(1));

//  Q12. If a number is even, return 1 otherwise return -1  //
//  Create a function that takes a number argument and returns 1 if the number is even.
//  If the number is odd return -1.

function booleanInteger(number) {
  return number % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(5));
console.log(booleanInteger(2));

//  Q13. Check if a user is logged in AND subscribed  //
//  Create a function that takes in  two strings. If the first string is equal to 
//  'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise
//  return false.

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED";
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

//  Q14. Check if a user is logged in OR subscribed  //
//  Create a function that takes in  two strings. If the first string is equal to 
//  'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true, otherwise 
//  return false.

function isLoggedInOrSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" || subscribed === "SUBSCRIBED";
}
console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));

//////////////////////// MEDIUM CHALLENGES ////////////////////////
console.log("////// MEDIUM CHALLENGES //////");

//  Q1. Falsy or truthy?  //
//  Given two values, return the first one if it is falsy, otherwise return the 
//  second one.

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}
console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));

//  Q2. Return the length of any given array  //
//  Given an array, return it's length.

function arrLength(arr) {
  return arr.length;
}
console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

//  Q3. Get the last element in an array  //
//  Given an array, return the last element.

function lastElem(arr) {
  return arr[arr.length - 1];
}
console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));

//  Q4. Find the sum of an array  //
//  Given an array, return the sum of every element.

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

//  Q5. Add up the numbers from a single number  //
//  Given a number, add up all the numbers from one to the number that is given.
//  E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}
console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));

//  Q6. Calculate the time  //
//  Given a number in seconds, return this number in mm:ss format.

function calcTime(seconds) {
  let timerSeconds = seconds % 60;
  let timerMinutes = Math.floor(seconds /60);

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  if (timerSeconds.toString().length === 1) {
    timerSeconds = '0' + timerSeconds;
  }

  return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(50));
console.log(calcTime(66));
console.log(calcTime(700));

//  Q7. Find the largest number  //
//  Given an array of numbers, return the largest number of that array.

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
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

//  Q8. Reverse a string  //
//  Given a string, return the reverse string.

//  INCREMENTING LOOP
function reverseIncrementingString(string) {
  let reversedString = '';
  for (let i = 0; i < string.length; ++i) {
    reversedString = string[i] + reversedString;
  }
  return reversedString;
}
console.log(reverseIncrementingString('abc'));
console.log(reverseIncrementingString('Francisco'));
console.log(reverseIncrementingString('This is cool'));

//  DECREMENTING LOOP
function reverseDecrementingString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; --i) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
}
console.log(reverseDecrementingString('def'));

//  ARRAY REVERSE PROPERTY
function reverseArrayProperty(string) {
  return string.split('').reverse().join('');
}
console.log(reverseArrayProperty('ghi'));

//  Q9. Turn every element in an array into 0  //
//  Given an array of elements, return the same langth array filled with 0's.

// FOR LOOP
function convertToZerosLoop(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0;
  }
  return newArr;
}
console.log(convertToZerosLoop([5, 100, 0]));

// ARRAY 'FILL'
function convertToZerosFill(arr) {
  return new Array(arr.length).fill(0)
}
console.log(convertToZerosFill([12, 2]));

// ARRAY 'MAP'
function convertToZerosMap(arr) {
  return arr.map(elem => 0)
}
console.log(convertToZerosMap([1, 2, 3, 4, 5]));

//  Q10. Filter out all the apples  //
//  Given an array of fruits, if it is an apple remove it from the array.

// FOR LOOP
function removeApplesLoop(arr) {
  let noApples = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 'Apple') {
      noApples.push(arr[i]);
    }
  }
  return noApples;
}
console.log(removeApplesLoop(['Banana', 'Apple', 'Orange', 'Apple']));

// ARRAY 'FILTER'
function removeApplesFilter(arr) {
  return arr.filter(elem => {
    return elem !== 'Apple';
  })
}
console.log(removeApplesFilter(['Tomato', 'Orange', 'Apple']));

//  Q11. Filter out all the falsy values  //
//  Given an array of values, filter out all the falsy values and only return
//  the truthy values.

// FOR LOOP
function filterOutFalsyLoop(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}
console.log(filterOutFalsyLoop(["", true, 0, null, 500, undefined, "0"]));

// ARRAY 'FILTER'
function filterOutFalsyFilter(arr) {
  return arr.filter(elem => !!elem === true);
}
console.log(filterOutFalsyFilter(["", true, 0, null, 500, undefined, "0"]));

//  Q12. Truthy to true, Falsy to false  //
//  Given an array of truthy and falsy values, return the same array of elements 
//  into it's boolean value.

function convertToBoolean(arr) {
  return arr.map(elem => !!elem);
}
console.log(convertToBoolean([500, 0, "Francisco", "", []]));

///////////////////////// HARD CHALLENGES /////////////////////////
console.log("/////// HARD CHALLENGES ///////");

//  Q1. Show rating //
//  Given a rating, display a star (*) for each full rating and a full-stop (.) 
//  for each half rating.

function showRating(rating) {
  let ratings = "";
  for (i = 0; i < Math.floor(rating); i++) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " "
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " ."
  }
  return ratings
}
console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(1.5));

//  Q2. Sort by lowest to highest price //
//  Given an array of numbers, return the prices sorted by low to high.

function sortLowToHigh(prices) {
  return prices.sort((a, b) => a - b)
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

