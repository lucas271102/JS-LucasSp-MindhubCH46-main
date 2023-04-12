

const upcomingContainer = document.getElementById("upcoming-cards")
const checkContainer= document.getElementById('menu-checkbox')
const searchCategory= document.getElementById('search-js')




let  events;
fetch ('https://mindhub-xj03.onrender.com/api/amazing')
.then(data => data.json())
.then(res =>{
  events = res.events.filter(event=> event.date > res.currentDate)
  createCheckbox(events, checkContainer)
  createCard(events, upcomingContainer)
  searchCategory.addEventListener('keyup', filter)
  checkContainer.addEventListener('change', filter )
})
  .catch(err=> console.log(err))
  
 function createCheckbox(events, checkContainer){
    let fn =events => events.category
    let categories = new Set (events.filter(fn).map(fn))
 categories.forEach(category=>{
  checkContainer.innerHTML+=`
  <label class= "btn btn-primary-active">
  <input type="checkbox" class="me-2"value="${category}" name="" id="" autocomplete="off">${category}
  </label>
  `
 })
    console.log(categories)
  }

  
function createCard(events, upcomingContainer){
  upcomingContainer.innerHTML=''
  events.forEach(event=>{
    
  upcomingContainer.innerHTML+=`
    <div class="card">
     <img src="${event.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${event.name}</h5>
       <p class="card-text">${event.description}</p>
     </div>
     <div class="detail-btn">
       <h6>Price:${event.price}</h6>
       <button><a href="./details.html?id=${event.name}">Details</a></button>
     </div>
     </div>
    `
    
  })

}
  
/* funcion para filtrar */
function filter (){
  let checked= [...document.querySelectorAll('input[type="checkbox"]:checked')].map(element => element.value)
  let filteredByCategory= events.filter(event => checked.includes(event.category)|| checked.length===0)
  let filteredBySearch= filteredByCategory.filter(event => event.name.toLowerCase().includes(searchCategory.value.toLowerCase()))
  console.log(filteredBySearch)
  createCard(filteredBySearch, upcomingContainer)

}


