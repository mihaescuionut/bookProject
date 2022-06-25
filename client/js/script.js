import { Home } from "./home.js";

let hm = new Home();

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const input = document.getElementById('search-input')
const searchForm = document.getElementById('search-form')
const errMsg = document.getElementById('err-msg')

btn.addEventListener('click', navToggle)
searchForm.addEventListener('submit', formSubmit)

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

function formSubmit(e) {
  e.preventDefault()
  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red')
  } 
}


