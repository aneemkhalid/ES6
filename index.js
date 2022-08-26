// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);


// for (let i = 0;; i++) {
//     console.log(i);
//     if (i > 3) break;
//     // more statements
//  }


// var i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }

// for (let i=5; i>=1; i--){
//   console.log("i = ",i);
//   console.log("\n");
//   for(let j=1; j<=i; j++){
//     console.log("j = ",j);
//     console.log("\n");
//     for(let k=5; k>=j; k--){
//       console.log("k = ",k);
//     }
//     console.log("\n");
//   }
//   console.log("\n");
//   console.log("*******");
// }



// Left top triangle
//***************************************************
// for (let i=0; i<5; i++){
//   let a = "";
//   for(let j=0; j<=i ; j++) {
//     a= a + "*";
//   }
//   console.log(a);
// }

// Left down triangle
//***************************************************
// for (let i=5; i>0; i--){
//   let a = "";
//   for(let j=0; j<i ; j++) {
//     a= a + "*";
//   }
//   console.log(a);
// }

// Right down Triangle
//***************************************************
// let b = "";
// for (let i=5; i>0; i--){
//   let a = "";
//   for(let j=0; j<i ; j++) {
//     a= a + "*";
//   }
//   console.log(b + a);
//   b= b + " ";
// }

// Top Right Triangle
//***************************************************
// let b = "";
// for (let i=1; i<=5; i++){
//   let a = "";
//   for(let j=5; j>i; j--) {
//     a= a + " ";
//   }
//   b= b + "*";
//   console.log(a + b);
// }


// Diamond
//***************************************************
// let star="";
// for(let i=0; i<8; i++){
//   let space="";
//   for(let j=7; j>i; j--){
//     space= space + " ";
//   }
//   star=star+"* ";
//   console.log(space + star);
// }

// let space2="";
// for(let l=0; l<8; l++){
//   let star2="";
//   for(let m=7; m>l; m--){
//     star2= star2 + "* "
//   }
//   space2=space2 + " ";
//   console.log(space2 + star2);
// }


// Diamond with while loop
//***************************************************
// let i=0; let star="";
// while(i<8){
//    let space="";
//    let j=7;
//    while(j>i){
//      space = space + ' ';
//      j--; }
//    star= star + "* ";
//    console.log(space + star);
//   i++;
// }
// let l=0; let space2 = "";
// while(l<8){
//    let k=7;
//    let star2="";
//    while(k>l){
//      star2= star2 + "* ";
//      k--; }
//    space2 = space2 + " ";
//    console.log(space2 + star2);
//   l++;
// }

//Arrays
//***************************************************

// let fruits = ['Apple', 'Banana']
// console.log('Length of fruits = ' , fruits.length);

// let first = fruits[0]; 
// let last = fruits[fruits.length - 1];
// console.log('Fruits are : ' , fruits);

// fruits.forEach(function(item, index, array) {
//   console.log('Fruit name is : ' , item, 'and its on index', index); 
// })

// let newLength = fruits.push('Orange');
// console.log('New fruit entry at the end : ', fruits);

// let last1 = fruits.pop();
// console.log('fruit has been removed from the end : ', fruits);

// let first1 = fruits.shift();
// console.log('fruit has been removed from the start : ', fruits);


// let newLength1 = fruits.unshift('Strawberry');
// console.log('New fruit entry at the start : ', fruits);

// let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
// console.log('Vegetables are : ' , vegetables);

// let pos = 1;
// let n = 3;
// let removedItems = vegetables.splice(pos, n); // removes the vegetable from index 1 and n defines how many vegetables will be removed
// console.log('Vegetables have been removed from index 1 and 3 vegetables will be removed depends on n : ', vegetables);
// console.log('Removed Items are : ' , removedItems);


// console.log('Display the indexes of array : ',Object.keys(vegetables));

//Combine two arrays using concat func
// let firstArray = [1,2,3];
// let secondArray = [4,5,6];
// let newArray = firstArray.concat(secondArray);
// console.log(newArray);

// Entries
// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

//Reverse an array
// let numbers = [7,8,9];
// let reverseNumbers = [];
// for (let i=numbers.length-1; i>=0; i--){
//  reverseNumbers.push(numbers[i]);
// }
// console.log('Reverse Array is : ', reverseNumbers);

//Combine two arrays into one array using one loop without changing firstArray
// let firstArray = [1,2,3];
// let secondArray = [4,5,6];
// let newArray = firstArray.slice(0);
// for (let i=0; i<secondArray.length; i++){
//   newArray.push(secondArray[i]);
// }
// console.log('New Array is : ', newArray);
// console.log('First Array is : ', firstArray);

//needs to understand from saqib bhai
// 1. flatmap
// 2. flat
// 3. map
// 4. foreach
// 5. from


// Question 3
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// let givenArray = [1,2,3,4,5,6,7];
// let k=3;
// let newArray = [];

// for (let i = 0; i < givenArray.length; i++) {
//     newArray[(i + k) % givenArray.length] = givenArray[i];
// }
// for (let i = 0; i < givenArray.length; i++) {
//     givenArray[i] = newArray[i];
// }


// console.log(givenArray);

//Question 8
//Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
//Example
//For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.

// let givenYear = 1999;
// let centurySpan = 100;

// let century = givenYear/centurySpan;
// console.log(Math.floor(century));




/****************************************** From Yaseen Bhai **********************************************/

/****************************************** Array Functions ***********************************************/ 

// at()
//The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
//This is not to suggest there is anything wrong with using the square bracket notation. For example array[0] would return the first item. However instead of using array.length for latter items; e.g. array[array.length-1] for the last item, you can call array.at(-1)


// concat() ****
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//copyWithin() ****
//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

//entries() ****
//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

//every() **** 
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//fill() ****
//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

//filter ****
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//find ****
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

//findIndex ****
//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

//flat() ****
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// flatMap() ****
//The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.

// from() ****
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

// includes ****
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// indexof() ****
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// isArray() ****
//The isArray() method determines whether the passed value is an Array or not.

// join() ****
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

//keys() ****
//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

//lastIndexOf() ****
//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//map() ****
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// of()
//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
//The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).

// pop() ****
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// push() ****
//The push() method adds one or more elements to the end of an array and returns the new length of the array. element =>element = ele

// reduce() ****
//The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
//The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

//Reduce accepts two parameters, the total and the current amount.
//The reduce method cycles through each number in the array much like it would in a for-loop.
//When the loop starts the total value is the number on the far left  and the current amount is the one next to it.
//The calculation is repeated for each amount in the array, but each time the current value changes to the next number in the array, moving right.
//When there are no more numbers left in the array the method returns the total value.

// reduceRight()
//The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// reverse() ****
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// shift() ****
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// slice() ****
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

//some() ****
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// sort() ****
//The sort() method sorts the elements of an array in place and returns the sorted array. 
//The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
//It will sort depends upon the compare function.
//Simple sort() without condition will react as a string.

// splice() ****
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// toString() ****
//The toString() method returns a string representing the specified array and its elements.

// unshift() ****
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// localeString()
//The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).



// const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1.copyWithin(0, 2, 5));
// console.log(array1.copyWithin(0, 3));
// console.log(array1.map(x => [x * a]));

// const iterator1 = array1.entries();
// console.log(iterator1.next().value);

// let arr1 = [1, 2, 3, 4];
// const arr2 = arr1.map(x => [x * 2]);
// const arr3 = arr2.map(x => [x * 3]);
// console.log(arr3);

// function sum(arr) {
//     const reducer = (sum, val) => sum * val;
//     const initialValue = 3;
//     return arr.reduce(reducer, initialValue);
//   }
  
//  console.log(sum([1, 3, 5, 7])) ;

//  const lineItems = [
//     { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
//     { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
//     { description: 'Butter', quantity: 2, price: 6, total: 12 }
//   ];

//   console.log(lineItems.reduce((sum, li) => sum + li.price, 0)); // 17.5

//const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

//console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

// const months = [2, 3, 4, 9, 6, 7, 8, 1 , 21, 42, 63];
// months.splice(7);
// console.log(months);

// months.splice(1,2);
// console.log(months);

// months.splice(2, 2, 55, 67);
// console.log(months);



//it can be accessible anywhere in the program. 
//global declaration should always be at the top of the program.

//let globalValue = 20;  //global scope
// function foo() {
//     var x;
//     let functionalValue = 5;
//     console.log(x);   
//     {
//         const x = 5;
//         console.log("functional value is : " + functionalValue);
//     }  
//     console.log("global value is : " +  globalValue);
//     console.log(x);
// }

//console.log("functional value is : " + functionalValue); // undefined
// console.log(foo());

// const a = [1, 2, 3, 4];

// a.splice(2,0,5);

// console.log(a);

// const object = [{ c: 3 }];

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }



/****************************************** Objects ***********************************************/

//Object.assign()
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//object.create()
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person); 

// me.name = 'Matthew'; 
// me.isHuman = true; 
// me.age = 15;

// const you = Object.create(me);

// console.log(person);
// console.log(me);
// console.log(you);
// me.printIntroduction();

//Object.defineProperties()
//The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

// const object1 = {};

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//   },
//   property2: {
//     value: 43,
//   }
// });

// console.log('object 1 value for property 1 : ' + object1.property1);
// console.log('object 1 value for property 2 : ' + object1.property2);
// console.log(object1);


//Object.entries()
//The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

//The order of the array returned by Object.entries() is the same as that provided by a for...in loop. If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// console.log(Object.entries(object1));
// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

//Object.freeze()
//The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

// const obj = {
//   prop: 42
// };

// Object.freeze(obj);

// obj.prop = 33;

// console.log(obj.prop);

//Object.fromEntries()
//The Object.fromEntries() method transforms a list of key-value pairs into an object.

// const entries = [
//   ['foo', 'bar'],
//   ['baz', 42]
// ];

// const obj = Object.fromEntries(entries);

// console.log(obj);

// hasOwnProperty()
//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

// const object1 = {};
// object1.property1 = 42;
// object1.toString = 42;

// console.log(object1.hasOwnProperty('property1'));

// console.log(object1.hasOwnProperty('toString'));

// console.log(object1.hasOwnProperty('hasOwnProperty'));

//***************

//let fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
//console.log(fruits.hasOwnProperty(1));   // true ('Orange')
//console.log(fruits.hasOwnProperty(4));   // false - not defined

// let buz = {
//     fog: 'stack'
//   };
  
// for (let name in buz) {
//     if (buz.hasOwnProperty(name)) {
//         console.log('this is fog (' +
//         name + ') for sure. Value: ' + buz[name]);
//     }
//     else {
//         console.log(name); 
//     }
// }


// Object.is()
//The Object.is() method determines whether two values are the same value.

// if (Object.is(25, '25')){   it will check the data type as well
//     console.log('equal'); 
// }
// else{
//     console.log('not equal');
// }

// var foo = { a: 1 };
// var bar = { a: 1 };

//console.log(foo);
//console.log(bar);

//console.log(Object.is(foo, foo));              
//console.log(Object.is(foo, bar));   //cannot compare two different objects, it will return false



// ******************************* Scope *********************************

//******* Scope
//The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

//or 

//Scope determines the visibility or accessibility of a variable or other resource in the area of your code.

// ******* Two types of Scope
//Global Scope
//Local Scope

// ****** Global Scope

//There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

//console.log(fruit);  // undefined
//var fruit = 'apple'; // globally declare and initialized, it can be use any where in the program below the initialization and declaration.
//console.log(fruit);  

//function getFruit(){
//   console.log(fruit);    //fruit is accessible here
//}

//getFruit(); 

//****** Local Scope
// Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. Every Functions has its own scope. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.


// Two types of Local Scope
// Function scope
// Block scope


// ****** Function scope

//Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

// function foo(){
//     let fruit ='apple';
//     console.log('inside function: ',fruit);
// }

//foo();                    //inside function: apple
//console.log(fruit);       //error: fruit is not defined


// ****** Block scope

// A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.
//The concept of block scope is introduced in ECMA script 6 (ES6) together with the new ways to declare variables -- const and let.

//  function foo(){
       
//     if(true){
//        var fruit1 = 'apple';        //exist in function scope
//        const fruit2 = 'banana';     //exist in block scope
//        let fruit3 = 'strawberry';   //exist in block scope
//     }
//     console.log(fruit1);
//     console.log(fruit2);
//     console.log(fruit3);
// }

// foo();

// function dump_props(obj, obj_name) {
//     let result = '';
//     for (let i in obj) {
//       result += obj_name + '.' + i + ' = ' + obj[i] + '\n';
//     }
//     return result;
//   }
// const car = {
//     make : 'ford',
//     length : 50
// }
//   console.log(dump_props(car, car.make));

// let arr = 'el1fsdfsdf';

// arr.addedProp = 'arrProp';

// elKey are the property keys
// for (let a in arr) {
//   console.log(a);
// }

// elValue are the property values
// for (let elValue of arr) {
//   console.log(elValue)
// }

// const digits = [0, 5, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const index in digits) {
//   console.log(digits[index]);
// }

//Errors

//The "Assignment to constant variable" error occurs when trying to reassign or redeclare a variable declared using the const keyword. When a variable is declared using const , it can't be reassigned or redeclared

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return b - a;
// });

//console.log(numbers);

// const target = { 
//   a: 1,
//   writable: false
// };

// target.a = 2;

// console.log(target.a);

// const aneem = ()=>{
//   var a = 23 ;
// }
// console.log(a);


// const arry1 = [1,2,3,4,5];

// arry1.forEach((value,index) => console.log("index : " + index + " value : " + value));

//  let mystring = {
//       name : "aneem",
//       age : 12,
//       dev : "js"
//  }

// for ( let char in mystring){
//   console.log(mystring[char]);
// }

// a = [1,2,3];
// b = [1,2,3];
// console.log(a===b);


// obj1 = {
//   name:"moon"
// }
// obj2 = {
//   name:"moon",
//   age: 13
// }
// obj1 = obj2;

// console.log(obj1);


// Rest Operator (Must be last formal parameter)
// ........................................

// function sum(text, ...args){

//   let sum=0;
//   for(let i in args){
//     sum += args[i];
//   }
//   console.log(text, sum);
// }
// sum("sum is :", 20,30,40,50);

// var arr1 = [1,2,3,4];
// var arr2 = [...arr1];

// arr1.push(5);

// console.log(arr1);
// console.log(arr2);


// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: () =>  `This dog has ${dog.numLegs} legs.`
// };
// console.log(dog.sayLegs());

// function x(){
//   var a=7;
//   return function y(){
//     console.log(a);
//   }
// }

// var z = x();
// z();

// var x= function x(y){
//   console.log("x");
//   y();
// }
// comsole.log(x);
// x(function y() {
//   console.log("y");
// });

// console.log("start");
// setTimeout(function y() {
//   console.log("y");
// }, 2000);
// console.log("end");

// rest and spread
// const arr1 = ["Aneem", "Moon", "Osama", "Random", "XYZ"];

// const obj = {
//   firstPerson: "Aneem",
//   secondPerson: "Moon",
//   thirdPerson: "Osama",
//   fourthPerson: "Random",
//   fifthPerson: "XYZ"
// }

// const {firstPerson, secondPerson, ...rest} = obj
// const [name1, name2, ...rest3] = arr1