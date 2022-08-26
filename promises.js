


//A promise is a returned object where you attach callbacks, instead of passing callbacks into a function. the place where you attach the callback after a successful completion of a task is called, . then(). inside this you pass a callback through

//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code

// const getUserName = (userID,userName) => {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log("getting username...");
//             resolve({ userID, userName});
//             reject({errorMessage: 'Error occured while getting username'});
//           }, 1000);
//     });
// }

// const getUserRepos = (user) => {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve({
//                 ...user,
//                 repos: ["repo1", "repo2"]
//             });
//             reject({errorMessage: 'Error occured while getting repos'});
//         }, 2000);
//     });
// }

// const getCommits = (userAndRepos) => {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve( {
//                 ...userAndRepos,
//                 commits : ["commit1", "commit2", "commit3", "commit4", "commit5"]});
//                 reject({errorMessage: 'Error occured while getting commits'});
//         }, 3000);
//     });
// }
// const printDetails = (userAndReposAndDetail) => {
//   console.log(
//     `The user ${userAndReposAndDetail.userName} with ID: ${userAndReposAndDetail.userID} has ${userAndReposAndDetail.repos.length} repos and ${userAndReposAndDetail.commits.length} commits!`
//   );
// }
// getUserName(12, "osama")
// .then(user1 => getUserRepos(user1))
// .then(rep => getCommits(rep))
// .then(com => printDetails(com))
// .catch(err => console.error(err))




// // Division, then multiplication, then addition, then subtraction through Promises


// var division = (num1,num2) => { 
//     console.log("Calculating...............");
//     return new Promise(function(resolve,reject){
//         setTimeout( () =>{
//             result= num1 / num2;
//             console.log("dividing...");
//             resolve(result);
//             reject("sorry no division");
//         },1000);
//     });
// }

// var multiplication = (num1,divisionpass) => { 
//     return new Promise(function(resolve,reject){
//         setTimeout( () =>{
//             result= num1 * divisionpass;
//             console.log("multiplying...");
//             resolve(result);
//             reject("sorry no multiplication");
//         },2000);
//     });
// }

// var addition = (num1,multiplicationpass) => { 
//     return new Promise(function(resolve,reject){
//         setTimeout( () =>{
//             result= num1 + multiplicationpass;
//             console.log("adding...");
//             resolve(result);
//             reject("sorry no addition");
//         },2000);
//     });
// }

// var subtraction = (additionpass,num1) => { 
//     return new Promise(function(resolve,reject){
//         setTimeout( () =>{
//             result= additionpass - num1;
//             console.log("subtracting...");
//             resolve(result);
//             reject("sorry no multiplication");
//         },2000);
//     });
// }

// var printing = (subtractionpass) => {
//     setTimeout( () =>{
//         result= subtractionpass;
//         console.log(result);
//     },2000);
// }

// division(3000,3) // 1000
// .then(divisionpass => multiplication(2,divisionpass)) //2000
// .then(multiplicationpass => addition(2000,multiplicationpass)) //4000
// .then(additionpass => subtraction(additionpass,2500)) //2500
// .then(subtractionpass => printing(subtractionpass)) //1500
// .catch(err => console.error(err))