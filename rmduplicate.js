let listOfNames = ["John", "Mary", "Alex", "Steve", "Mary", "John"];


let uniqueNames = [];
let b = 0;

for(let i = 0; i < listOfNames.length; i++) {
  for (let j = 0; j < uniqueNames.length; j++) {
    if (listOfNames[i] != uniqueNames[j]) {
      b++
    }
  }
  if (b == uniqueNames.length) {
    uniqueNames.push(listOfNames[i]);
  }
  b = 0
}


console.log(uniqueNames)
