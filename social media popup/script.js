let button = document.querySelector('button');
let popup = document.querySelector('.social_media_container');

button.addEventListener('click',()=>{
    popup.classList.toggle('show');
    button.classList.toggle('close');
})