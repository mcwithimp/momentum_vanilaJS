const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"
let toDos = []

const saveToDos = () => localStorage.setItem(TODOS_LS, JSON.stringify(toDos))

const deleteToDos = ev => {
    const li = ev.target.parentNode
    toDoList.removeChild(li)
    const newToDos = toDos.filter(t => t.id !== parseInt(li.id))
    toDos = newToDos
    saveToDos()
}

const paintToDo = text => {
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span")
    const id = toDos.length + 1

    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDos)
    span.innerText = text
    li.appendChild(span)
    li.appendChild(delBtn)
    li.id = id

    toDoList.appendChild(li)
    toDos.push({ text, id })
    saveToDos()
}

const handleToDoSumbit = ev => {
    ev.preventDefault()
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = ""
}

const loadToDos = () => {
    const loaded = localStorage.getItem(TODOS_LS)
    if (loaded !== null){
      const parsed = JSON.parse(loaded)
      parsed.forEach(p => { paintToDo(p.text) })
    } 
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleToDoSumbit)
}

init();