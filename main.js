import './style.css'
import { setupMap } from './showmap'
import fetchData from './fetchdata'

setupMap()
document.addEventListener('DOMContentLoaded', () => {

})
const formInput = document.getElementById('form-input')
formInput.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputIpAddres = document.getElementById('input-ipaddress').value;
  fetchData(inputIpAddres)
})
// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>h2131312<h2>
//     <div id="map"></div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
