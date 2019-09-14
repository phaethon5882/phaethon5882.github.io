// local storage 라는 섹시한 친구를 사용해서 사용자의 브라우저에 데이터를 저장해보자.
// 사용자가 임의로 변경했다면 새로고침 해야함!

const form = document.querySelector(".js-name"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-grettings")

const USER_LS = "currentUser",
      SHOWING_CN = "showing"

function saveName(text) {
  localStorage.setItem(USER_LS, text)
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = input.value
  paintGreeting(currentValue)
  saveName(currentValue)
}

function askForName() {
  form.addEventListener("submit", handleSubmit)
  form.classList.add(SHOWING_CN)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text}`
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser === null) {
    askForName()
  } else { // 유저가 있으면 폼은 display: none; 을 주자
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}
init()