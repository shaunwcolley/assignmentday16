testArray = [3,4,56,7,8,1];

function ascendingSort (array) {
  for(let i = 0; i < array.length; i++) {
    for(let j =0; j < array.length; j++) {
      if(array[i] < array[j]) {
        r = array[i];
        array[i] = array[j];
        array[j] = r;
      }
    }
  }
  return array
}
let newArray = ascendingSort(testArray);
console.log(newArray)

function descendingSort (array) {
  for(let i = 0; i < array.length; i++) {
    for(let j =0; j < array.length; j++) {
      if(array[i] > array[j]) {
        r = array[i];
        array[i] = array[j];
        array[j] = r;
      }
    }
  }
  return array
}

newArray = descendingSort(testArray);
//console.log(newArray)
