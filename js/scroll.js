const cards = document.getElementById('cards');
const cargarSect = (entradas, observador) => {


    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
           entrada.target.classList.add('visible');
        }
        else {
            entrada.target.classList.remove('visible'); 
        }
    });
};

const observador = new IntersectionObserver(cargarSect,{
    root: null, 
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(cards);
observador.observe(Us);
observador.observe(empImg);