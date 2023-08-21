import './style.css'
import { setupMap } from './showmap'
import fetchData from './fetchdata'

let data = [];
const outputIpAddress = document.getElementById("output-ip-address")
const outputLocation = document.getElementById("output-location")
const outputTimezone = document.getElementById("output-timezone")
const outputIsp = document.getElementById("output-isp")

setupMap()
document.addEventListener('DOMContentLoaded', () => {

})
const formInput = document.getElementById('form-input')
formInput.addEventListener("submit", async (e) => {
  e.preventDefault()

  const inputIpAddres = document.getElementById('input-ipaddress').value;
  const fetchDataa = await fetchData(inputIpAddres)
  data.push(fetchDataa);

  console.log(data[0])
  outputIpAddress.innerText = data[0].ip
  outputLocation.innerText = data[0].location.country + ", " + data[0].location.region
  outputTimezone.innerText = data[0].location.timezone
  outputIsp.innerText = data[0].isp
})
// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>h2131312<h2>
//     <div id="map"></div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
