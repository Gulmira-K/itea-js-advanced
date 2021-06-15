//CHECK LOCALSTORAGE
if (!(localStorage.getItem('user'))) {
  localStorage.setItem('user', 'admin')
}

  
const loginForm = document.getElementById('login')
const confirmForm = document.getElementById('confirm')
let title = document.querySelector('#confirm h3')

//CHECK COOKIES 
let user = findCookieValue("user");
if (user) {
  confirmForm.style.display = 'flex';
  loginForm.style.display = 'none';
  title.innerHTML = `Hello ${user}, you've logged in`;
}

const loginSubmit = document.querySelector('#login [name="submit"]');
const logoutSubmit = document.querySelector('#confirm [name="submit"]');

loginSubmit.addEventListener('click', loginHandler);
logoutSubmit.addEventListener('click', logoutHandler);
 

function loginHandler() {
  let admin = localStorage.getItem('user');
  let loginName = document.querySelector('#login [name="userName"]');
 
  
  if (admin === loginName.value.toLowerCase()) {
    loginForm.style.display = 'none';
    confirmForm.style.display = 'flex';
    title.innerHTML = `Hello ${loginName.value}, you've logged in`;
    toggleCookies(loginName.value)
    loginName.value = '';
    return;
  } else {
    loginForm.style.display = 'flex';
    loginName.value = '';
    alert('Enter correct username')
  }  
}

function logoutHandler() {
  loginForm.style.display = 'flex';
  confirmForm.style.display = 'none';
  toggleCookies()
}

function toggleCookies(cookieName) {
  if (!document.cookie) {
     document.cookie = "user=" + cookieName;
  } else {
     document.cookie = `user=${cookieName}; max-age=0`;
  }
}

function findCookieValue(cookieName) {
  let allcookies = document.cookie;
  let pos = allcookies.indexOf(cookieName + "=");

  if (pos != -1) {
    let start = pos + cookieName.length + 1;
    let end = allcookies.indexOf(";", start);
    if (end == -1) end = allcookies.length;

    let value = allcookies.substring(start, end);
    value = decodeURIComponent(value);
    return value;
  }
};