const weather = document.querySelector(".js-weather")

const API_KEY = 'f94472a754b56368eace93fcb0776d81'
const COORDS = 'coords'

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(response => {
    return response.json()
  }).then(json => {
    console.log(json)
    const temperature = json.main.temp
    const place = json.name

    weather.innerText = `${temperature}℃ @ ${place}`
  })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

async function handleGeoSuccess(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}

function handleGeoError() {
  console.log("위치정보를 확인할 수 없습니다.")
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)

}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  if(loadedCoords === null) {
    askForCoords()
  } else { 
    const parseCoords = JSON.parse(loadedCoords)
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()