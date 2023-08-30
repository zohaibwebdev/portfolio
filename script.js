const hamburger = document.querySelector(".z-50")
const menu = document.getElementById('menu')

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
})