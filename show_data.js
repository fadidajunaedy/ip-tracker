import { showMap } from "./show_map"

export const showData = (data) => {
    const outputIpAddress = document.getElementById("output-ip-address")
    const outputLocation = document.getElementById("output-location")
    const outputTimezone = document.getElementById("output-timezone")
    const outputIsp = document.getElementById("output-isp")

    outputIpAddress.innerText = data[0].ip
    outputLocation.innerText = data[0].location.country + ", " + data[0].location.region
    outputTimezone.innerText = data[0].location.timezone
    outputIsp.innerText = data[0].isp

    showMap(data[0].location.lat, data[0].location.lng, data[0].location.region)
}