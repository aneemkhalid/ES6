// Function Statement or Function Declaration

// function a(){
//     console.log("This is a Function Statement");
// }

//                                                         // Difference between Function Statement & Function Expression is Hoisting



// // Function Expression                                       

// var b = function(){
//     console.log("This is a function expression");
// }



// // Anonymous Function

// //Function without name is Anonymous Function and it is used when we treated it as a value. Like we assign it to a variable.

// function(){
//     console.log("This is a function expression");
// }



// // Named Function Expression

// var c = function d(){
//     console.log("This is a function expression");
// }



// First Class Functions

// The process of passing a function as a value in the arguments, can be returned from other functions, assigned as a value to a variable, 

// var e = function(param1){
//     console.log(param1);
// }
// e(function(){
// });

// //

// var f = function(){
//     return function(){

//     }
// }
// console.log(f());

// //

// var g= function(param1){
//     console.log(param1);
// }

// function xyz(){

// }

// e(xyz);


// First Class Functions

// It's like a normal function with a new way to write anonymous function expression.

// Arrow functions intend to fix the problem where we need to access a property of "this" inside a callback

// const arrowfunc = () => console.log("This is an arrow function");

// arrowfunc();


// const arrowfunc2 = OnepParamWithoutParanthesis => console.log("This is an arrow function " + OnepParamWithoutParanthesis);

// arrowfunc2("**** => ****");


// const arrowfunc3= (param1, param2) => console.log("This is an arrow function " + param1 + " " + param2);

// arrowfunc3("**** => ****", "Okay");
