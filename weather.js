
const weather = document.querySelector(".js-weather")
// api: https://home.openweathermap.org
const WEATHER_API_KEY = "bd1ffd6c81457d363c7f4be568338f68"
const COORDS = 'coords'

const getWeather = (lat, lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    .then(res => res.json())
    .then(data => {
        const temp = data.main.temp
        const place = data.name
        weather.innerHTML = `${temp} @ ${place}`
    })
    
}

const saveCoords = coordsObj => localStorage.setItem(COORDS, JSON.stringify(coordsObj))

const handleGeoSuccess = position => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    saveCoords({ 
        latitude,
        longitude
    })
    getWeather(latitude, longitude)
}

const handleGeoError = () => console.log("Cant access geo location")

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

const loadCoords = () => {
    const loaded = localStorage.getItem(COORDS)
    if(loaded === null) {
        askForCoords()
    } else {
        const { latitude, longitude } = JSON.parse(loaded)
        getWeather(latitude, longitude)
    }
}


function init(){
    loadCoords()
}

init();