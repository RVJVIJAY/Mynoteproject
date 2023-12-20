//selectiong plus-add,overlay,form-data 
//once user click the "+" button it show black background and the form

var plusbtn=document.getElementById("plusbtn")
var overlay=document.querySelector(".overlay")
var formdata=document.querySelector(".form-data")

plusbtn.addEventListener("click",function(){
	overlay.style.display ="inline-block";
	formdata.style.display="inline-block";
})

//selecting cancel button [cancelbtn]

var cancelbtn=document.getElementById("cancel-btn")

cancelbtn.addEventListener("click",function(){
	overlay.style.display="none";
	formdata.style.display="none";
})

//selecting add-btn

var add=document.getElementById("add-btn")
var title=document.getElementById("titlee")
var date=document.getElementById("datee")
var textare=document.getElementById("textareaa")
var containerr=document.querySelector(".container")
add.addEventListener("click",function(event){
	var div=document.createElement("div")
	div.setAttribute("class","data-container")
	div.innerHTML=` <h1>${title.value}</h1>
	<h5>${date.value}</h5>
	<p>${textare.value}</p>
    <button onclick="deletee(event)">delete</button> `
					
	containerr.append(div)
	overlay.style.display="none"
	formdata.style.display="none"
	
})




function deletee(event)
{
	event.target.parentElement.remove()
}
