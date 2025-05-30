const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//Toggle in the nav

toggle.addEventListener('click', ()=>  document.body.classList.toggle('show-nav'));


//Show my modal

open.addEventListener('click', () => modal.classList.add('show-modal'));

//Hide my modal

close.addEventListener('click',() => modal.classList.remove('show-modal'));

//Hide the modal on outside click

window.addEventListener('click', e => e.target ==modal ? modal.classList.remove('show-modal') 
: false);

