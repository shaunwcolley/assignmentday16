let testArray = [1,3,5,7,9,11,13,15,16];

test = 3;
test2 = 2

function isInArray(num, array) {
  emptyArray = [];
  for(let i = 0; i < array.length; i++) {
    let a = array[i];
    if (num != a) {
      emptyArray.push(a);
    }
  }
  if (emptyArray.length != array.length) {
    return true;
  }
  else {
    return false;
  }

}

result = isInArray(test, testArray);
console.log(result);

result2 = isInArray(test2, testArray);
console.log(result2);
