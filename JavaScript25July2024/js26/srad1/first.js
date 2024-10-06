console.log("Anika Code");
console.log("welcome to our code");

fullName ="Tonny Stark";
age=24;
prise=23.45;
x=null;
y = undefined;
isFollow = true;
console.log(fullName);
console.log(y);
console.log(isFollow);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~variable
var age = 20;
var age = 34;
var age = 43;
console.log(age);
// var is old version it is use before 2015, we are not use this because it in not gives error if we written duplicate value , and print last vale so we r not use

let age1= 20;
//let age1 = 40;
//let age1 = 42;
console.log(age1);
// Uncaught SyntaxError: Identifier 'age' if we gave same 


const age2 = 30; //fix value of const like final as java
// age2 = age2+3; //we cant change const and const ko starting me hi initilize krna pdga
console.log(age2);
// var is is global accesible anywhere

// let is block level scope you can define more variable but dif dif block
{
    let a = 10;
    // let a = 12;
    console.log(a);
}
{

    let a = 12;
    console.log(a);
    console.log(typeof(a));
}
// const also block level element



// data types

const student = {
    fullNmae:"Anika Patel",
    age:21, 
    cgpa:8.2, 
    isPass:true

};
console.log(student["age"]);
console.log(student.age);
console.log(student.cgpa);
student["age"]= student["age"]+1;
console.log(student["age"]);
student["fullName"] = "Amita Patel";
console.log(student["fullName"]);