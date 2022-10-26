
function handleMouseEnter(){
    this.classList.add('card--hovered');           //quando colocar handMouseEnter, toda vez que o mouse passa em cima ele coloca a classe card--hovered
    document.body.id =  `${this.id}-hovered` ;
}                            

function handleMouseLeave(){
    this.classList.remove('card--hovered')          // inverso do ex acima
    document.body.id = ``;
}


function addEventListenersToCards() {
    const cardsElements = document.getElementsByClassName('card');   // cardElements é uma contante criada para chamar todos os itens com classe card do HTML


    for(let index = 0; index < cardsElements.length; index++ ){
            const card = cardsElements[index]
            card.addEventListener('mouseenter', handleMouseEnter)
            card.addEventListener('mouseleave', handleMouseLeave)
        }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);



function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.card-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
     const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);


    carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.active');
  activeButtonElement.classList.remove('active');
  selectedButtonElement.classList.add('active');
}