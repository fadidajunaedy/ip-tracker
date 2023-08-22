import './style.css'
import { showMap } from './showmap'
import fetchData from './fetchdata'

let data = [];
const outputIpAddress = document.getElementById("output-ip-address")
const outputLocation = document.getElementById("output-location")
const outputTimezone = document.getElementById("output-timezone")
const outputIsp = document.getElementById("output-isp")

document.addEventListener("DOMContentLoaded", () => {
  showMap()
})

const formInput = document.getElementById('form-input')
formInput.addEventListener("submit", async (e) => {
  e.preventDefault()

  const inputIpAddress = document.getElementById('input-ip-address').value;
  const dataIp = await fetchData(inputIpAddress)
  data[0] = dataIp;

  console.log(data[0].location)
  outputIpAddress.innerText = data[0].ip
  outputLocation.innerText = data[0].location.country + ", " + data[0].location.region
  outputTimezone.innerText = data[0].location.timezone
  outputIsp.innerText = data[0].isp

  showMap(data[0].location.lat, data[0].location.lng, data[0].location.region)

})
