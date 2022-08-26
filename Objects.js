// Objects 

// var object1 = {
//     fname : "Aneem",
//     lname : "Khalid",
//     age : 26,
//     email: "aneemkhalid64@gmail.com",
//     fullname() {
//         return this.fname + " " + this.lname; 
//     },
//     // or 
//     // fullname : function() {
//     //     return this.fname + " " + this.lname; 
//     // },
//     address : {
//         city : "Rawalpindi",
//         street : 44,
//     },
//     friends: ["haris", "bob", "sikandar"]
// }

// console.log(object1.address.city);
// console.log("First Name : " + object1.fname);
// console.log("Last Name : " + object1.lname);
// console.log("Age : " + object1.age);
// console.log("Full Name : " + object1.fullname());
// console.log("City : " + object1.address.city);
// console.log("Street : " + object1.address.street);
// console.log("Friends : " + object1.friends);
// console.log("Specific Friend : " + object1.friends[2]);

// *********************************************************************

// ************ Object.assign

// const target = {
//     a: 1,
//     b: "aneem",
//     c: "bob"
// }

// const source = {
//     d:2,
//     e: "haris",
//     b: "wahab",
// }

// const returnedTarget = Object.assign(target, source);

// console.log(returnedTarget);
// console.log(target);


// ************ Object.defineProperties

// const object1 = {};
// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true // if writable is not defined. its default to true
//   },
//   property2: {}
// });
// object1.property1 = 50;
// console.log(object1.property1);


// const object2 = {};
// Object.defineProperties(object2, {
//   property1: {
//     value: 42,
//     writable: false 
//   },
//   property2: {}
// });
// object2.property1 = 50;
// console.log(object2.property1);


// ************ Object.entries

// const object3 = {
//     a: 'somestring',
//     b: 42
// };
// console.log(Object.entries(object3));
// for (const [key, value] of Object.entries(object3)) {
//     console.log(`${key}: ${value}`);
// }

// ************ Object.freeze
//     const obj = {
//         prop: 42
//     };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   // Throws an error in strict mode
  
//   console.log(obj.prop);


// ************ Object.fromEntries
// It transforms a list of key value pairs into an object.

// const entries = [
//     ['foo', 'bar'],
//     ['baz', 42]
// ];
  
//   const obj = Object.fromEntries(entries);
  
//   console.log(obj);



// // ************ Object.hasOwn
// // It returns boolean aa depends on property exists in an object or not.
//   const object4 = {
//     prop: 'exists'
//   };

//   console.log(Object.hasOwn(object4, 'prop'));
//   // expected output: true
  
//   console.log(Object.hasOwn(object4, 'toString'));
//   // expected output: false
  
//   console.log(Object.hasOwn(object4, 'undeclaredPropertyValue'));
//   // expected output: false


// ************ Object.hasOwnProperty

// const object5 = {};
// object5.property1 = 42;

// console.log(object5.hasOwnProperty('property1'));
// // expected output: true

// console.log(object5.hasOwnProperty('toString'));
// // expected output: false

// console.log(object5.hasOwnProperty('hasOwnProperty'));
// // expected output: false

// const fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
// console.log(fruits.hasOwnProperty(3));  //true
// console.log(fruits.hasOwnProperty(4));  //false


// ************ Object.keys
// It returns an array of a given objects property names, iterated in same order.
//   const object6 = {
//     a: 'somestring',
//     c: false,
//     b: 42
//   };
  
//   console.log(Object.keys(object6));
//   // expected output: Array ["a", "c", "b"]

// // ************ Object.values
// It returns an array of a given objects value name, iterated in same order.
    // const object7 = {
    //     b: 42,
    //     a: 'somestring',
    //     c: false
    // };

    // console.log(Object.values(object7));
    // expected output: Array [42, 'somestring', false]