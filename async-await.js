//Inside an async function, you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown

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

// const randomFun = async () => {
//     const user = await getUserName(12, "Aneem");
//     const rep = await getUserRepos(user);
//     const userObj =  await getCommits(rep);
//     printDetails(userObj);
// }

// randomFun();



// // Division, then multiplication, then addition, then subtraction through aync/await


var division = (num1,num2) => { 
    console.log("Calculating...............");
    return new Promise(function(resolve,reject){
        setTimeout( () =>{
            result= num1 / num2;
            console.log("dividing...");
            resolve(result);
            reject("sorry no division");
        },1000);
    });
}

var multiplication = (num1,divisionpass) => { 
    return new Promise(function(resolve,reject){
        setTimeout( () =>{
            result= num1 * divisionpass;
            console.log("multiplying...");
            resolve(result);
            reject("sorry no multiplication");
        },2000);
    });
}

var addition = (num1,multiplicationpass) => { 
    return new Promise(function(resolve,reject){
        setTimeout( () =>{
            result= num1 + multiplicationpass;
            console.log("adding...");
            resolve(result);
            reject("sorry no addition");
        },2000);
    });
}

var subtraction = (additionpass,num1) => { 
    return new Promise(function(resolve,reject){
        setTimeout( () =>{
            result= additionpass - num1;
            console.log("subtracting...");
            resolve(result);
            reject("sorry no multiplication");
        },2000);
    });
}

var printing = (subtractionpass) => {
    setTimeout( () =>{
        result= subtractionpass;
        console.log(result);
    },2000);
}


const calculation = async () =>{
  const div = await division(3000,3); // 1000
  const mul = await multiplication(2,div) //2000
  const add = await addition(2000,mul) //4000
  const sub = await subtraction(add,2500) //1500
  printing(sub); //1500
} 

calculation();



