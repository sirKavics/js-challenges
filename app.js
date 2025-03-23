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

