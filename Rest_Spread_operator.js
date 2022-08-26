// // Rest Operator
// // The rest operator ( ... ) instructs the computer to add the rest of the user-supplied values into an array. Then, it assigns that array to the otherInfo variable.
// // The rest operator used in the last parameter of function. It expects multiple arguments.

// const addition = (string, ...numbers) => {
//     sum=0;
//     for (let i in numbers){
//         sum += numbers[i];
//     }
//     console.log(string, sum );
// }

// addition("By using Rest Operator ... Sum is :", 20, 30, 40, 50);




// // Spread Operator
// // Spread operator always used in calling. Its used to spread the array and convert it into multiple arguments 

// const addition2 = (string, ...numbers) => {
//     sum=0;
//     for (let i in numbers){
//         sum += numbers[i];
//     }
//     console.log(string, sum );
// }
// const add = [20, 30, 40, 50]
// addition2("By using Spread Operator ... Sum is :", ...add);


// // when we assign an array variable to an other variable. so they both are dependant. We can solve this problem by using spread operator.


// let arr1 =  [1,2,3,4];
// let arr2 = arr1;

// arr1.push(5);

// console.log(arr1);
// console.log(arr2);

// //

// arr2 = [...arr1];

// arr1.push(6);

// console.log(arr1);
// console.log(arr2);

// // We can also use it for merging object or array

// const obj1 = {
//     name: "Aneem"
// }

// const obj2 = {
//     age: 27
// }

// const obj3 = {...obj1,...obj2}
// console.log(obj3);