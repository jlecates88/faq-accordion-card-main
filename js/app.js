const accordion = document.getElementById('accordion-container');

accordion.addEventListener('click', e => {
    const targetClass = e.target.classList;
    //cambio clases css
    if(targetClass.contains('accordion__question')) {
      e.target.nextElementSibling.classList.toggle('accordion__answer--active'); //despliego la respuesta 
      e.target.classList.toggle('accordion__question--active'); //roto flecha y negrita al button
    }
});

// Animación, mover la caja a la izquierda cada evento del mouse
document.getElementById("accordion-container").addEventListener("mouseover", () => {
  document.querySelector(".img__box--desktop").classList.add("img__box--desktop--active");
})

document.getElementById("accordion-container").addEventListener("mouseout", () => {
  document.querySelector(".img__box--desktop").classList.remove("img__box--desktop--active");     
});