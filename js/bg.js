const body = document.querySelector("body")

const IMG_NUMBER = 3

function paintImage(imgNumber) {
  const imgURL = `./img/${imgNumber}.jpg`
  body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imgURL})`
}

function genRandom() {
  const number = 1 + Math.floor(Math.random() * IMG_NUMBER)
  return number
}

function init() {
  const randomNumber = genRandom()
  paintImage(randomNumber)
}

init()