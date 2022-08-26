// Object Literals
// Object literals are used to create an object in javascript. Enhancement in Object literals in ES2015 (ES6) release has made it a more powerful feature. The object in        javascript can be initialized by directly using the variable name.

const fname = "aneem";
const lname = "khalid";
const city = "Rwp";
const cs = "course";

const info1 ={
    fname,
    lname,
    [cs + "name"] : "JS",
    city(){
        return ` Course name is : ${this.coursename}`
    }
}
console.log(info1,info1.city());

//

function info2(fname,lname,city,cs){
    fullname = fname + lname;
    return {fullname,city,[cs + "name"]: "JS"}
}

console.log(info2(fname,lname,city,cs));