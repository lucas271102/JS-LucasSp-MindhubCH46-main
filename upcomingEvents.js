import{createCard} from './module/funciones.js'

const upcomingContainer = document.getElementById("upcoming-cards")
const eventos = []
for(let evento of data.eventos){
  if(evento.date.includes("2022")){
    eventos.push(evento)
  }
}

let template = ''



for(let evento of eventos){
  template += createCard(evento)
}
upcomingContainer.innerHTML = template

createCard()