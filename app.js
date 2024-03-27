const on = document.querySelector('#btnOn');
const of = document.querySelector('#btnOf');
const card = document.querySelector('.card');
of.addEventListener('click', function(){
   img.src='image/on.png';
   on.style.display='block';
    of.style.display='none';
    card.style.background='#f5f5f5';
})

on.addEventListener('click', function (){
    img.src='image/off.png';
    card.style.background='#484646';
    on.style.display='none';
    of.style.display='block';
})
