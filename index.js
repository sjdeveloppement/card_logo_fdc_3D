// animation de mouvement
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const seemore = document.querySelector('.seemore');
const dragon = document.querySelector('.dragon img');
const contactme = document.querySelector('.contactme');

// event de l'animation du mouvement
container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /25 ;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// entrée de l'animation
container.addEventListener('mouseenter', e =>{
    card.style.transition = 'none';
});

//Popout
title.style.transform = "translateZ(0px)";
dragon.style.transform = "translateZ(0px) rotateZ(45deg)";


//sortie de l'animation
container.addEventListener('mouseleave', e =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg)`;
});
//Popback
title.style.transform = "translateZ(150px)";
dragon.style.transform = "translateZ(150px) ";
contactme.style.transform="translateZ(150px)";
text.style.transform = "translateZ(150px)";
seemore.style.transform = "translateZ(150px)";
