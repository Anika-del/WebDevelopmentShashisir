/*
let grades = 88;

if(grades <= 39){
    console.log("F");
}
else if(grades >= 50 && grades <= 59){
    console.log("D");
}
else if(grades >= 60 && grades <= 69){
    console.log("C");
}
else if(grades >= 70 && grades <= 89){
    console.log("B");
}
else if(grades >= 80 && grades <= 100){
    console.log("A")
}
*/



let score = prompt("Enter your score 0-100 : ");
let grade;

if(score <= 39){
    grade = "E";
}
else if(score >= 50 && score <= 59){
    grade = "D";
}
else if(score >= 60 && score <= 69){
    grade = "C";
}
else if(score >= 70 && score <= 89){
    grade = "B";
}
else if(score >= 80 && score <= 100){
    grade = "A";
}
console.log(grade);