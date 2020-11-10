const accordion = document.getElementById('accordion-container');
//const accordionAnswer = [...document.querySelectorAll('.accordion__answer')];

accordion.addEventListener('click', e => {
    const targetClass = e.target.classList;
    //cambio clases css
    if(targetClass.contains('accordion__question')) {
      e.target.nextElementSibling.classList.toggle('accordion__answer--active'); //despliego la respuesta 
      e.target.classList.toggle('accordion__question--active'); //roto flecha y negrita al button
    }
});