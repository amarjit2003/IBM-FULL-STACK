document.getElementById("parent").style.border ="1px solid green";
document.getElementById("parent").style.height="200px";
document.getElementById("parent").style.backgroundColor = "red";


let element = document.createElement("button");
element.innerText="submit";
element.style.backgroundColor="grey";
element.style.padding="10px";
document.getElementById("parent").append(element);



let variable = 10;
console.log(variable);

variable = 15;
console.log(variable);


function myFunction(){
    console.log(variable);
}


myFunction()