/////////////////////// BEGINNER CHALLENGES ///////////////////////
console.log("////// BEGINNER CHALLENGES //////")

//  Q1. Return the sum of two numbers  //

function addition(a, b) {
  return a + b
}

console.log(addition(3, 5));


//  Q2. Convert hours into seconds  //

function hoursIntoSeconds(hour) {
  let minutes = hour * 60;
  let seconds = minutes * 60;
  return seconds;
}
console.log(hoursIntoSeconds(3));

// OR (SIMPLIFIED VERSION)

function hoursIntoSeconds(hour) {
  return hour * 60 * 60;
}
console.log(hoursIntoSeconds(2));


//  Q3. Calculate the perimeter of a rectangle  //

function calcPerimeter(width, length) {
  return (width + length) * 2;
}
console.log(calcPerimeter(20, 10));


//  Q4. Calculate the area of a triangle  //

function calcAreaOfTriangule(base, height) {
  return (1 / 2) * base * height;
}
console.log(calcAreaOfTriangule(10, 10));


//  Q5. Extend a string  //

function appendFrontend(string) {
  return string + "Frontend"
}
console.log(appendFrontend("Apple"))


//  Q6. Greater than 100  //

function sumGreaterThan100(num1, num2) {
  if (num1 + num2 > 100) {
      return true;
  }
  else{
  return false;
  }
}
console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));


// OR (SIMPLIFIED VERSION)

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100
}
console.log(sumGreaterThan100(100, 10));
console.log(sumGreaterThan100(50, 30));


//  Q7. Less than or equal to zero  //

function lessThanOrEqualToZero(number) {
  return number <= 0;
}
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(1));


//  Q8. Opposite boolean  //

function oppositeBoolean(bool) {
  return !bool;
}
console.log(oppositeBoolean(false));


//  Q9. Is not the mumber 0  //

function isNotZero(value) {
  return value !== 0;
}
console.log(isNotZero(2));


//  Q10. Calculate the remainder  //

function calcRemainder(num1, num2) {
  return num1 % num2;
}
console.log(calcRemainder(7, 8));


//  Q11. Is the number odd?  //

function isOdd(number) {
  return number % 2 !== 0;
}
console.log(isOdd(2));
console.log(isOdd(1));


//  Q12. If a number is even, return 1 otherwise return -1  //

function booleanInteger(number) {
  return number % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(5));
console.log(booleanInteger(2));


//  Q13. Check if a user is logged in and subscribed  //

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED";
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));


//  Q14. Check if a user is logged in or subscribed  //

function isLoggedInOrSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" || subscribed === "SUBSCRIBED";
}
console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));


//////////////////////// MEDIUM CHALLENGES ////////////////////////
console.log("////// MEDIUM CHALLENGES //////")

//  Q1. Falsy or truthy?  //




///////////////////////// HARD CHALLENGES /////////////////////////