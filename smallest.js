let testArray = [1000,100,10,15,2,432,32];

function findLargest(array) {
  let a = array[0];
  for(i = 0; i < array.length; i++) {
    if(array[i] < a) {
      a = array[i];
    }
  }
  return a;
}

let b = findLargest(testArray);
console.log(b);
