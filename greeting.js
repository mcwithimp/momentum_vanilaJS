const nameForm = document.querySelector(".js-form"),
    nameInput = nameForm.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"

const saveName = text => localStorage.setItem(USER_LS, text)

const handleNameSumbit = ev => {
    ev.preventDefault()
    const currentValue = nameInput.value
    paintGreeting(currentValue)
    saveName(currentValue)
    nameInput.value = ""
}

const askForName = () => { 
    nameForm.classList.add(SHOWING_CN)
    nameForm.addEventListener("submit", handleNameSumbit)
}

const paintGreeting = text => {
    nameForm.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null) {
        askForName()
    } else {
        paintGreeting(currentUser)
    }
}

function init(){
    loadName()
}

init()