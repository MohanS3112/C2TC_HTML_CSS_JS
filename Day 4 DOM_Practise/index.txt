document.querySelector(".items");

document.querySelector(".item1");
let item = document.querySelector(".item1");
//item.remove();
document.querySelector(".item2");
item = document.querySelector(".item2");
//item.remove();
document.querySelector(".item3");
item = document.querySelector(".item3");
//item.remove();
document.querySelector(".item4");
item = document.querySelector(".item4");
//item.remove();
document.querySelector(".item5");
item = document.querySelector(".item5");
//item.remove();




// change item2 to heading
//item.innerHTML="<h1>Hello</h1>";


// update button color to red
let button = document.querySelector(".btn");
button.style.background = "red";


// EVENTS
button = document.querySelector(".btn");
button.addEventListener("click",(e) =>
                        {
    console.log("click");
e.preventDefault();
});


let nameInput = document.querySelector('#name');
if(nameInput){
  nameInput.addEventListener('click',swapper,false);
}

let emailInput = document.querySelector('#email');
if(emailInput){
  emailInput.addEventListener('click',swapper,false);
}

/*
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
*/

// Listen for form submit
function onSubmit(e) {
  e.preventDefault();
}
//console.log(nameInput);
var str = document.getElementById('#name');

var str1 = document.getElementById('#email');


let myForm = document.querySelector("#my-form");
myForm.addEventListener('submit', onSubmit);


//if(str0 === '' || str2 === '')
//{
//  alert('Please enter all fields');
//}
//else
//{
  //alert('submit');
//}


let msg = document.querySelector(".msg");


//if(nameInput.value === '' || emailInput.value === '')
  //{
    //msg.classList.add('error');
    //msg.innerHTML = 'Please enter all fields';
  //}
  //else
  //{
    //console.log('success');
  //}

/*if(nameInput.value === '' || emailInput.value === '')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    console.log('success');
  }
*/

/*let userList = document.querySelector("#users");


  if(nameInput.value === '' || emailInput.value === '')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    // Create new list item with user
    let li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Append to ul
    userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
*/