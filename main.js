import "./style.css"
import { fetchData } from "./fetch_data"
import { showData } from "./show_data"
import { showMap } from "./show_map"

let data = []

document.addEventListener("DOMContentLoaded", async () => {
  showMap()

  const dataDefault = await fetchData()
  data[0] = dataDefault

  console.log(data)
  showData(data)
})

const formInput = document.getElementById("form-input")
formInput.addEventListener("submit", async (e) => {
  e.preventDefault()

  const inputIpAddress = document.getElementById("input-ip-address").value;
  const dataIp = await fetchData(inputIpAddress)
  data[0] = dataIp;
  console.log(data)

  showData(data)
})
