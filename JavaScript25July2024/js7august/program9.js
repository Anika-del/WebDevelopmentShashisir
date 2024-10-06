function loadallobject()
{
    var myinput=document.querySelectorAll("input,textarea");
    var myoutput = document.getElementById('prev');
    console.log(myinput);

    myinput[0].addEventListener("input",()=>{
        let a = myinput[0].value;
        myoutput.style.backgroundColor=a;
    });

    myinput[1].addEventListener("input",()=>{
        myoutput.innerHTML=myinput[1].value;
    })


}

loadallobject();




// Notessss
// get and set
// https://webcode.tools/css-generator/text-shadow