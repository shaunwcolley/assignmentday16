let testNumber1 = 15;
let testNumber2 = 0;
let testNumber3 = 3;
let testNumber4 = 5;
let testNumber5 = 2;

function fizzbuzz(number) {
  if(number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (number % 3 == 0) {
    console.log("Fizz");
  }
  else if (number % 5 == 0) {
    console.log("Buzz")
  }
  else {
    console.log("no fizz, no buzz")
  }
}

fizzbuzz(testNumber1)
fizzbuzz(testNumber2)
fizzbuzz(testNumber3)
fizzbuzz(testNumber4)
fizzbuzz(testNumber5)
