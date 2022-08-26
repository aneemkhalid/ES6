// Primitive Data type

// Pass by Value

// These include numbers, strings, boolean, null, undefined

// Both a & b are independent

let a = 2;
let b = a;

b = a + 5;

console.log(a);
console.log(b);




// Non Primitive Data type

// Pass by Reference

// These include Arrays, Objects, functions

let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

//

let obj1 = {
    name: "Aneem",
    Age: "27"
};
let obj2 = obj1;

obj2.number= "123";

console.log(obj1);
console.log(obj2);