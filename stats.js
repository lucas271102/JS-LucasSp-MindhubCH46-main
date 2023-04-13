
const eventStatistics = document.getElementById('stats-row')
const upcomingTable = document.getElementById('table-two')
const pastTable= document.getElementById('table-three')



let events;
fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(data => data.json())
  .then(res => {
    events = res.events
    const eventsAssistance = events.filter(event => event.assistance)
    const eventCategory = events.filter(event => event.category)
    const eventPrice = events.filter(event => event.price)
    eventsAssistance.sort(function compare(a, b) {
      let percentageA = (a.assistance / a.capacity) * 100
      let percentageB = (b.assistance / b.capacity) * 100
      if (percentageA < percentageB) {
        return -1;
      }
      if (percentageA > percentageB) {
        return 1;
      }
      // a debe ser igual b
      return 0;

    })
   

    createStat(eventsAssistance, eventStatistics)
    createCategory(eventCategory, upcomingTable, pastTable)


  })
  .catch(err => console.log(err))

function createStat(events, eventStatistics) {
  const highPercentage = events[events.length - 1]
  const lowPercentage = events[0]
  let percentageA = (highPercentage.assistance / highPercentage.capacity) * 100
  let percentageB = (lowPercentage.assistance / lowPercentage.capacity) * 100


  eventStatistics.innerHTML = `
        <td>${highPercentage.name} ${percentageA.toFixed(2)}%</td>
        <td>${events[0].name} ${percentageB.toFixed(2)}%</td>
        <td>${events[11].name}</td>`

}
function createCategory(events, upcomingTable, pastTable) {
  let estimate = events.filter(event=> event.estimate)
  
  let fn = events => events.category
  
  let categories = new Set(events.filter(fn).map(fn))
  
  categories.forEach(category => {
let filter = events.filter(event=> event.category.includes(category))

let contadorUno=0
let contadorDos=0 
 let percentageTwo= 0
let percentageOne= 0
let revenue = 0
let revenueDos= 0

for (let eventPercent of filter){
  if(!eventPercent.estimate){
    percentageOne += (eventPercent.assistance / eventPercent.capacity)*100
    contadorUno++
  }else{
    percentageTwo += (eventPercent.estimate /eventPercent.capacity)*100
    contadorDos++
  }
  console.log(percentageOne)
  console.log(percentageTwo)
}
for(let eventCategory of filter){
  if (!eventCategory.estimate){
    revenueDos += eventCategory.price * eventCategory.assistance
  }else{
    revenue += eventCategory.price * eventCategory.estimate
  }
  
 
}

if(revenue ){

  upcomingTable.innerHTML += `
  <tr>
  <td>${category}</td>
  <td>${revenue}</td>
  <td>${(percentageTwo/contadorDos).toFixed(2)}%</td>
</tr>   

  `
}
if (revenueDos){
  
  pastTable.innerHTML+=`
  <tr>
    <td>${category}</td>
    <td>${revenueDos}</td>
    <td>${(percentageOne/contadorUno).toFixed(2)}%</td>
  </tr
  `
}
   
  
  }

  )


}


