function getandset()
{
	var myinput = document.querySelector("#one");
	console.log(myinput.value);
	console.log(myinput.title);
	console.log(myinput.type);
var objvalue = myinput.value;
	
	console.log(objvalue);

	console.log(typeof(myinput));

var myheading = document.getElementById('heading');
	myheading.innerText=objvalue;

var secondinput = document.getElementById('two');
		secondinput.value=objvalue;

	console.warn(objvalue);
	console.info(objvalue);
	console.table(objvalue);
}



function dyninput()
{
	var a = prompt("enter text",50);
	document.write(a);
	if(confirm("do you want to change"))
	{
		document.bgColor=a;
	}
	else
	{
		alert("nothing");
	}
}