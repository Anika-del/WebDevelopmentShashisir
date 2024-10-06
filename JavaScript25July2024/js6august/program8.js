function myobj()
{
    var myele = document.getElementsByClassName('abc');
    var obj = myele[0];
        setInterval(()=>{
            obj.style.width="1200px";
            obj.style.transitionDuration="1s";
            console.log(obj.childElementCount);
            console.log(obj.lastChild);
        },5000);



    // console.log(myele);
    // console.log(obj);

}

myobj();




//Shashi Pandey 9871672942 website : http://shashiwebsolution.com youtube : https://www.youtube.com/@darkjsx https://course2023.netlify.app