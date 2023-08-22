export const fetchData = async (ipAddress) => {
    try {

        const apiKey = "at_t2mWuETqEWMV2FR6xOCl94xDnOHvU"
        let response
        if (ipAddress) {
            response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
        } else {
            response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
}