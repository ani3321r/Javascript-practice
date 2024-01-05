//Stack and Heap in js

//stack
//let value1 = "ani";
//let value2 = value1;
//value2 = "friend";
//console.log(value1);
//console.log(value2); //call by value(copy changes)

//Heap
let objOne = {
    name: "webiner",
    age: 22,
  };
  let objTwo = objOne;
  
  objTwo.name = "gmail.com"; //call by reference (changes in actual)
  console.log(objOne.name);
  console.log(objTwo.name);
  