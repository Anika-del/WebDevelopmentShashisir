let key = prompt("Enter key you want to set"); //key puchega
let value = prompt("Enter value you want to set"); //value puchega

//console ke bagal me application/local/file me store hoga

// set and get value--------------------------------------------------------------------
localStorage.setItem(key, value) //value set krega
console.log(`The value at ${key} is ${localStorage.getItem(key)} `) //value get krega

// remove method-------------------------------------------------------------------------
if(key == "red" || key == "blue"){   //agr key red or blue hoga to local storage se remove kr dega
    localStorage.removeItem(key);
}

//if key ki value 0 kr denge to jitna bhi data h value kuch dete hi clea ho jayeg
if(key == 0){
    localStorage.clear();
}

//update bhi kr sakte ho phle se koi key h uski value change krn h to key same denge and value change denge to o same key me update ho jayega

//key- index pr kya key h ye btata h 
var a = localStorage.key(1);
console.log("1st position key is "+ a);

//length 
var b = localStorage.length;
console.log("totallength "+ b);