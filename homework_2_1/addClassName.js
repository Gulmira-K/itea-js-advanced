let header = document.querySelector('h1');
let h2 = document.querySelectorAll('h2');
let div = document.querySelectorAll('div');
let p = document.querySelectorAll('p');
let span = document.querySelectorAll('span');
let list = document.querySelectorAll('ul');
let link = document.querySelectorAll('a');


function addClass() {
  header.className = 'newClass';
  header.style.cssText = 'margin-top: 10px; background-color: red';
  console.log(header.style.cssText);

  div[0].classList.add('newClass');
  console.log(div[0].style);
}

function addClass1() {
  header.className = 'newClass';
  header.style.cssText = 'margin-top: 10px; background-color: red';
  console.log(header.style.cssText);

  p[0].classList.add('newClass');
  console.log(p[0].style);

  link[0].className = 'newClass';
  console.log(link[0].style);
}

function addClass2() {
  header.className = 'newClass';
  header.style.cssText = 'margin-top: 10px; background-color: red';
  console.log(header.style.cssText);

  div[0].classList.add('newClass');

  span[0].classList.add('newClass');
  span[1].classList.add('newClass');
  span[2].classList.add('newClass');

  p[0].classList.add('newClass');
  console.log(p[0].style);

  link[0].className = 'newClass';
  console.log(link[0].style);
}

function addClass3() {
  header.className = 'newClass';
  header.style.cssText = 'margin-top: 10px; background-color: red';
  console.log(header.style.cssText);

  h2[0].className = 'newClass';
  h2[1].className = 'newClass';

  div[0].classList.add('newClass');
  div[1].classList.add('newClass');

  span[0].classList.add('newClass');
  
  list[0].className = 'newClass';
  list[1].className = 'newClass';
  list[2].className = 'newClass';
  
  p[0].classList.add('newClass');
  p[1].classList.add('newClass');
  p[3].classList.add('newClass');
  p[4].classList.add('newClass');

  console.log(p[0].style);
}

function addClassToLink() {
  link[0].className = 'newClass';
  link[1].className = 'newClass';
  link[2].className = 'newClass';
  link[3].className = 'newClass';
}










