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

