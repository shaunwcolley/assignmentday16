function isEven(number) {
  if(number % 2 == 0) {
    return true;
  }
  else if (number % 2 != 0) {
    return false;
  }

}

function oddOrEven(number) {
  if (isEven(number)) {
    console.log("Even");
  }
  else if (isEven(number) == false) {
    console.log("Odd");
  }
  else {

    console.log(isEven(number));
  }
}

let testNumber1 = 0;
let testNumber2 = 157;
let testNumber3 = 4;


oddOrEven(testNumber1);
oddOrEven(testNumber2);
oddOrEven(testNumber3);
