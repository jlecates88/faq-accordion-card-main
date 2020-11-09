const accordion = document.getElementById('accordion-container');
const accordionAnswer = [...document.querySelectorAll('.accordion__answer')];

accordion.addEventListener('click', e => {
    const targetClass = e.target.classList;
    if(targetClass.contains('accordion__question')) {
      e.target.classList.toggle('accordion__question--active') //roto flecha y negrita al h2
     // e.target.nextElementSibling.classList.toggle('accordion__answer--active');
    }
})

/*  (function() {
    const headings = document.querySelectorAll('h2');
    
    Array.prototype.forEach.call(headings, h => {
      let btn = h.querySelector('button');
      let target = h.nextElementSibling;
      
      btn.onclick = () => {
        let expanded = btn.getAttribute('aria-expanded') === 'true';
        
        btn.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;  
      }
    });
  })()
 */
