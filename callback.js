// // CallBACK Functions

// // A JavaScript callback is a function which is to be executed after another function has finished execution.
// // Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// const function1 = () => {
//     setTimeout(()=>{
//       console.log("first function");
//     }, 1000);
//   }
  
//   const function2 = (callback1) => {
//     setTimeout(()=>{
//       console.log("second function");
//       callback1()
//     }, 2000);
//   }
  
//   const function3 = (callback2) => {
//     setTimeout(()=>{
//       console.log("third function");
//       callback2();
//     }, 3000);
//   }
  
//   const function4 = (callback3) => {
//     setTimeout(() => {
//       console.log("fourth function");
//       callback3();
//     }, 4000);
//   }
  
//   function4(() => function3(() => function2(() => function1())));




// // Division, then multiplication, then addition, then subtraction through CallBack


// var division = (num1,num2,callbackmultiply) => { 
//     console.log("Calculating...");
//     setTimeout( () =>{
//         result= num1 / num2;
//         console.log("Division : " + num1 + " / " + num2 + " = " + result);
//         callbackmultiply(result);
//     },1000);
// }

// var multiplication = (num1,num2,callbackadd) => {
//     setTimeout( () =>{
//         result= num1 * num2;
//         console.log("Multiplication : " + num1 + " X " + num2 + " = " + result);
//         callbackadd(result);
//     },2000);
// }

// var addition = (num1,num2,callbacksub) => {
//     setTimeout( () =>{
//         result= num1 + num2;
//         console.log("Addition : " + num1 + " + " + num2 + " = " + result);
//         callbacksub(result);
//     },2000);
// }
// var subtraction = (num1,num2) => {
//     setTimeout( () =>{
//         result= num1 - num2;
//         console.log("Subtraction : " + num1 + " - " + num2 + " = " + result);
//     },2000);
// }

// division(3000,3,(multiplycallbackarg) => { 
//     multiplication(2,multiplycallbackarg,(addcallbackarg) => { 
//         addition(2000,addcallbackarg,(subcallbackarg) => { 
//             subtraction(subcallbackarg,2500);
//         });
//     });
// });
