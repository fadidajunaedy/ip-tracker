import './style.css'
import { showMap } from './show_map'
import fetchData from './fetch_data'

let data = [];
const outputIpAddress = document.getElementById("output-ip-address")
const outputLocation = document.getElementById("output-location")
const outputTimezone = document.getElementById("output-timezone")
const outputIsp = document.getElementById("output-isp")

document.addEventListener("DOMContentLoaded", async () => {
  showMap()
  const dataDefault = await fetchData()
  data[0] = dataDefault
  console.log(data)
})

const formInput = document.getElementById('form-input')
formInput.addEventListener("submit", async (e) => {
  e.preventDefault()

  const inputIpAddress = document.getElementById('input-ip-address').value;
  const dataIp = await fetchData(inputIpAddress)
  data[0] = dataIp;

  outputIpAddress.innerText = data[0].ip
  outputLocation.innerText = data[0].location.country + ", " + data[0].location.region
  outputTimezone.innerText = data[0].location.timezone
  outputIsp.innerText = data[0].isp

  showMap(data[0].location.lat, data[0].location.lng, data[0].location.region)

})
