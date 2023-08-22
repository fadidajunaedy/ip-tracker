import './style.css'
import { showMap } from './show_map'
import { fetchData } from './fetch_data'
import { showData } from './show_data'

let data = [];
const outputIpAddress = document.getElementById("output-ip-address")
const outputLocation = document.getElementById("output-location")
const outputTimezone = document.getElementById("output-timezone")
const outputIsp = document.getElementById("output-isp")

document.addEventListener("DOMContentLoaded", async () => {
  showMap()
  const dataDefault = await fetchData()
  data[0] = dataDefault
  showData(data)
  console.log(data)
})

const formInput = document.getElementById('form-input')
formInput.addEventListener("submit", async (e) => {
  e.preventDefault()

  const inputIpAddress = document.getElementById('input-ip-address').value;
  const dataIp = await fetchData(inputIpAddress)
  data[0] = dataIp;

  showData(data)
})
