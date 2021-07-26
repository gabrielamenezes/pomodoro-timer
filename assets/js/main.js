let minutes = 25;
let seconds = 00;
let counterInterval = undefined

const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


updateCounterEl()

function updateCounterEl() {
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function startTimer() {
    
    counterInterval = setInterval(() => {
        if(seconds === 0) {
            //se o meu minuto for 0, eu to cancelando meu intervalo e dando um return
            if(minutes === 0) return clearInterval(counterInterval)
            //se o meu segundo for 0, eu diminuo 1 do minuto e atribuo 59 aos segundos
            seconds = 59;
            --minutes
        } else {
            //se o meu segundo não for 0, eu diminuo ele
            --seconds;
        }
        updateCounterEl()
    }, 1000)
}

function pauseTimer() {
    clearInterval(counterInterval)
}

function resetTimer() {
    clearInterval(counterInterval)
    minutes = 25;
    seconds = 0;
    updateCounterEl();
}
