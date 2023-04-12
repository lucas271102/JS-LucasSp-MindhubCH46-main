


export function createCard(evento){
    return ` <div class="card">
    <img src=${evento.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
    </div>
    <div class="detail-btn">
      <h6>Price - ${evento.price}</h6>
      <button><a href="./details.html?id=${evento.name}">Details</a></button>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
    </div>`
  }
  export default createCard
  