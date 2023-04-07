const indexContainer = document.getElementById('card-group-event')
const checkContainer= document.getElementById('menu')
const searchCategory= document.getElementById('search-js')
const eventos = data.eventos
const evento = eventos



/*checkbox de categoría según evento*/

const categories = eventos.map(evento=> evento.category)



const setCategory= new Set(categories)

const arrayCategories = Array.from(setCategory)

showCategories(arrayCategories, checkContainer)
function showCategories(categories, checkContainer){
  let showTemp=""

  for(let category of categories){
    
    showTemp+=`<label for="${category}">${category}</label>
    <input type="checkbox" name="" id="" value=${category}>`
}
checkContainer.innerHTML += showTemp
}


/*cards de eventos*/
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
       <button><a href="./details.html?id=${evento.name}">Details</a></button>
     </div>
     </div>`
}
