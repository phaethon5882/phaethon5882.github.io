const body = document.querySelector("body")

const IMG_NUMBER = 3

function handleImgLoad() {
  console.log("로딩끝!")
}

function paintImage(imgNumber) {
  const image = new Image()
  image.src = `./img/${imgNumber}.jpg`
  image.addEventListener("loadend", handleImgLoad)
  image.classList.add("bgImage")
  body.appendChild(image)
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