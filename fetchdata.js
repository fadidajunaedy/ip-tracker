const fetchData = async (ipAddress = "") => {
    const apiKey = "at_t2mWuETqEWMV2FR6xOCl94xDnOHvU"
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
    const data = await response.json()
    return data
}

export default fetchData;