// 로컬 스토리지에는 스트링만 넣을 수 있다.

const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input")
      toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = "toDos"

let toDos = [];

function deleteToDo(event) {
  const btn = event.target
  const li = btn.parentNode
  toDoList.removeChild(li)

  // 필터는 안에 필터 함수를 구현해야하며 이 함수가 반환하는 값이 트루인 원소들만 모은 배열을 반환한다.
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id)
  })
  toDos = cleanToDos
  saveToDos()
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1

  delBtn.innerHTML = "❌"
  delBtn.classList.add("btn")
  delBtn.addEventListener("click", deleteToDo)

  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  li.id = newId
  toDoList.appendChild(li)

  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj)
  saveToDos()
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = toDoInput.value
  paintToDo(currentValue)
  toDoInput.value = ""
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS)
  if(loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos)
    
    parsedToDos.forEach(toDo => {
      paintToDo(toDo.text)
    })
  }
}

function init() {
  loadToDos()
  toDoForm.addEventListener("submit", handleSubmit)
}
init()