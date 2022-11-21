//Variable declaration

const btn = document.querySelector('#btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
    
});