document;


document.getElementById('my-form');
document.querySelector('h1');
document.querySelector('.container');



document.querySelector('.item');
document.getElementsByTagName("li");
document.getElementsByClassName('item');

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Item11';
//ul.children[1]='Itam12';




//document.getElementsByTagName("ul"); 




document.getElementsByTagName("li")[0].style.color="blue";
document.getElementsByTagName("li")[1].style.color="red";
document.getElementsByTagName("li")[2].style.color="green";
document.getElementsByTagName("li")[3].style.color="hotpink";

document.getElementsByTagName("li").length;



document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="white";
document.getElementsByClassName("btn")[0].style.backgroundColor="blue";



document.querySelector("h1");  
document.querySelector("#title"); 
document.querySelector(".btn"); 
document.querySelector("li a"); 


document.querySelector("body a");

document.querySelector(".btn #title"); 

document.querySelectorAll("#list .item");


const nameInput = document.querySelector('#name');

nameInput.addEventListener('input',e => {

  document.querySelector('.container').append(nameInput.value);
});