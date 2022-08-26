// // ********* Reduce

// const users = [
//     {age:26},
//     {age:19},
//     {age:26},
//     {age:21},
//     {age:50},
//     {age:21},
// ]

// // output { 26:2 , 19:1, 21:2, 50:1}

// const sameage = users.reduce( (acc,curr) => {
    
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{});

// console.log(sameage);

// //*******************************************************

// const users2 = [
//     {firstName:"Aneem", age:26},
//     {firstName:"Haris", age:19},
//     {firstName:"Modu", age:26},
//     {firstName:"Bob", age:21},
//     {firstName:"Sikndar", age:50},
//     {firstName:"Wahab", age:21},
// ]

// // Print firstName of the ones whose age is less than 30. 

// const output = users2.reduce((acc, curr) => {
//     if(curr.age < 30){
//        acc.push(curr.firstName);
//     }
//     return acc;
// }, [])

// console.log(output);

// //********* Filter

// const users3 = [
//     {firstName:"Aneem", age:26},
//     {firstName:"Haris", age:19},
//     {firstName:"Modu", age:26},
//     {firstName:"Bob", age:21},
//     {firstName:"Sikndar", age:50},
//     {firstName:"Wahab", age:21},
// ]

// // Print firstName of the ones whose age is less than 30. 

// const age30 = users3.filter( x => x.age < 30).map( fname => fname.firstName);

// console.log(age30);


//********* Some

// const array1 = [20,30,40,50,60];

// console.log(array1.some(value => value>50));
// //true


// //********* every

// const array2 = [20,30,40,50,60];

// console.log(array2.every(value => value>50));
// //false

// const array3 = [51,52,53,54,60];

// console.log(array3.every(value => value>50));
// //true

//********* includes

// const array4 = [1, 2, 3];

// console.log(array4.includes(1));

// if(array4.includes(2)){
//     console.log("asdasd");
// };

//*********  slice
// return shallow copy of a portion of an array

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-3));
// console.log(animals.slice(2, -1));
// console.log(animals);


// *********  splice
// Modifies the existing array by removing, adding or replacing elements
//  const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//  console.log(animals2.splice(2, 1));  // [ 'camel' ]
//  console.log(animals2); // [ 'ant', 'bison', 'duck', 'elephant' ]
//  console.log(animals2.splice(1, 2));  // [ 'bison', 'duck' ]
//  console.log(animals2); // [ 'ant', 'elephant' ]
//  console.log(animals2.splice(1, 0, "cheetah", "bear")); // [ ]
//  console.log(animals2); // [ 'ant', "cheetah" , "bear", 'elephant' ]
//  console.log(animals2.splice(1, 2, "rabbit")); // [ "cheetah" , "bear" ]
//  console.log(animals2); // [ 'ant', "rabbit", 'elephant' ]


// *********  find
// const array5 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array5.find(isLargeNumber));

// *********  findIndex
// const array6 = [5, 12, 8, 130, 44];

// const isLargeNumberIndex = (element) => element > 13;

// console.log(array6.findIndex(isLargeNumberIndex));