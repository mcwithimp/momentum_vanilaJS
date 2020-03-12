const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = clockContainer.querySelector("h1");


const getStandardDigit = digit => {
    return (digit < 10) ? `0${digit}` : digit
} 


const getTime = () => {
    const date = new Date()
    const hour = getStandardDigit(date.getHours())
    const min = getStandardDigit(date.getMinutes())
    const sec = getStandardDigit(date.getSeconds())
    clockTitle.innerText = `${hour}:${min}:${sec}`
}

function init() {
    setInterval(getTime, 1000)
}

init()