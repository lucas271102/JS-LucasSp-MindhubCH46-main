let searchParams=location.search
console.log(searchParams)
let params =new URLSearchParams(searchParams)
let name =params.get('id')
const showContainer= document.getElementById('detail-cards')

const eventos= data.eventos
const evento= eventos
let foundEvent = eventos.find(evento=> evento.name == name)



function showEvent(evento){
    let template=""
  
   template=  `<div class="row g-0">
   <div class="col-md-4">
     <img src=${evento.image} class="img-fluid rounded-start" alt="..." style="height: 500px; width: 100%;">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class=${evento.name} style="font-size: xx-large;">Festival of collectivities </h5>
       <p class="card-text" style="font-size: xx-large;">${evento.description}</p>
       <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
       <ul>
       <li>´"Date":${evento.date}</li>
       <li>´"Capacity":${evento.capacity}</li>
       <li>´"Place":${evento.place}</li>
       <li>´"Price":${evento.price}</li>
       </ul>
     </div>
   </div>
 </div>`
 showContainer.innerHTML = template
}

showEvent(foundEvent)