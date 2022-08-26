// // Destructuring

// // Destructuring is a JavaScript expression that makes it possible to unpack values from arrays,
// // or properties from objects, into distinct variables. That is, we can extract data from arrays
// // and objects and assign them to variables.



// // Destructuring Arrays


// const user = ["aneem",23,"Rwp",["male",20000]];

// var fname = user[0];
// const age = user[1];
// const city = user[2];
// const gender = user[3][0];
// const salary = user[3][1];

// console.log(fname,age,city,gender,salary); 

// // 

// const [fname1,age1,city1,[gender1,salary1]] = user;
// console.log(fname1,age1,city1,gender1,salary1);

// const [fname2, ...args] = user;
// console.log(fname2, ...args);

// //

// function user2([fname2,age2,city2]){
//     console.log(fname2,age2,city2);
// }

// user2(["aneem",23,"Rwp"]);

// //

// function user3(){
//     return ["aneem",23,"Rwp"];
// }

// let [fname3,age3,city3] = user3();
// console.log(fname3,age3,city3);




// // Destructuring Objects

export const user4 ={
    fname4: "haris",
    age4: 27,
    city4: "Rwp"
}

const {fname4,city4} = user4; // use same name of key as a variable
//console.log(fname4,city4);

// // we can use alice as a short variable name as well

export const user5 ={
    fname5: "aneem",
    age5: 27,
    city5: "Rwp"
}
const {fname5 : fn, age5 : ag} = user5;

//console.log(fn,ag);