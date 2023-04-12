import{createCard}from './module/funciones.js'


const pastContainer = document.getElementById("past-cards")
const eventos = []
for(let evento of data.eventos){
  if(evento.date.includes("2021") ){
    eventos.push(evento)
  }
}

let template = ''



for(let evento of eventos){
  template += createCard(evento)
}
pastContainer.innerHTML = template


createCard() 



