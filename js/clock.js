const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h3")

function setCurrentTime() {
  const date = new Date()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}`
                         +`:${minutes < 10 ? `0${minutes}` : minutes}`
}

function init() {
  setCurrentTime()
  setInterval(setCurrentTime, 1000)
}
init()