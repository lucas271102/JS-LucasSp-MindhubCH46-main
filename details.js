let searchParams=location.search

console.log(searchParams)

let params =new URLSearchParams(searchParams)

let name =params.get('id')

const showContainer= document.getElementById('detail-cards')

let  events;
fetch ('https://mindhub-xj03.onrender.com/api/amazing')
.then(data => data.json())
.then(res =>{
  events = res.events.filter(event=> event.category)
let foundEvent = events.find(events=> events.name == name)
  showEvent(foundEvent)
  
})
  .catch(err=> console.log(err))






function showEvent(event){
    let template=""
  
   template=  `<div class="row g-0">
   <div class="col-md-4">
     <img src=${event.image} class="img-fluid rounded-start" alt="..." style="height: 400px; width: 100%;">
   </div>
   <div class="col-md-3">
     <div class="card-body">
       <h5 class=detail-title style="font-size: xx-large; ">${event.name} </h5>
       <p class="card-text" style="font-size: xx-large;">${event.description}</p>
       
       <ul>
       <li>´"Date":${event.date}</li>
       <li>´"Capacity":${event.capacity}</li>
       <li>´"Place":${event.place}</li>
       <li>´"Price":${event.price}</li>
       </ul>
     </div>
   </div>
 </div>`
 showContainer.innerHTML = template
}

