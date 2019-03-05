let testArray = [1,2,3,4,5,6,1,3,10,5,32,7];

function findLargest(array) {
  let a = 0;
  for(i = 0; i < array.length; i++) {
    if(array[i] > a) {
      a = array[i];
    }
  }
  return a;
}

let b = findLargest(testArray);
console.log(b);
