// Closure

// Its a function bind together with its lexical environment
// or It gives you access to an outer function's scope from an inner function 

// function x(){
//     var a = 8;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();


// function x(){
//     var a = 8;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// z = x(); 
// console.log(z);
// z();

// This is also a lexical environment
// Lexical environment is a sequence or a hierarchy like parent, its child and then other child and goes on.




// Hoisting

// A process in which variables have been used before declaration.
// Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
// They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
// UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
// When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.

// getName();
// console.log(getName);
// var getName  = () =>{
//     console.log("function get name is invoked before but it will behave as a variable.");
// }

// getName2();
// console.log(getName2);
// function getName2(){
//     console.log("function get name is invoked before.");
// } 