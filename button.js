import './tail.css';
let but =document.getElementById('but');
let menu =document.getElementById('menu') ;
but.addEventListener("click",()=>{
    menu.classList.toggle('hidden');
})