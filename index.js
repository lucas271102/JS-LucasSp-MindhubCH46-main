const indexContainer = document.getElementById('card-group-event')

const eventos = data.eventos

const evento = eventos[3]

 let template = ''

 for (let evento of eventos){
    template += createCard(evento)
 }
 indexContainer.innerHTML = template
function createCard(evento){
     return  `<div class="card">
     <img src="${evento.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${evento.name}</h5>
       <p class="card-text">${evento.description}</p>
     </div>
     <div class="detail-btn">
       <h6>Price:${evento.price}</h6>
       <button><a href="./details.html">Details</a></button>
     </div>
     </div>`
}
