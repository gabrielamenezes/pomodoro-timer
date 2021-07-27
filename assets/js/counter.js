let minutes = 25;
let seconds = 00;
//atribuindo a variável no escopo global para conseguir usá-la dentro das funções
let counterInterval = undefined

//pegando elementos
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const breakBtn = Array.from(document.getElementsByClassName('breakBtn'));
updateCounterEl()


//addEvent Listener em cada item de breakBtn
breakBtn.forEach(item => {
    item.addEventListener('click', onItemClick)
})

function onItemClick(event) {
    //saber qual é o data que eu cliquei
    const selectedAttribute = event.target.getAttribute('data')

    chooseBreak(selectedAttribute);
}

function chooseBreak(selectedAttribute) {
    if(selectedAttribute === 'short') {
        minutes = 5;
        seconds = 0;
        updateCounterEl();
    }

    if(selectedAttribute === 'long') {
        minutes = 15;
        seconds = 0;
        updateCounterEl();
    }
}

function updateCounterEl() {
    //formatação da hora
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function startTimer() {
    //se o counterInterval já existir, dar um return;
        //impede vários clicks no botão start
    if(counterInterval) return;
    //atributir o setInterval à uma variável para conseguir pará-lo depois
    counterInterval = setInterval(() => {
        /*if(seconds === 0) {
            //se o meu minuto for 0, eu to cancelando meu intervalo e dando um return
            if(minutes === 0) return clearInterval(counterInterval)
            //se o meu segundo for 0, eu diminuo 1 do minuto e atribuo 59 aos segundos
            seconds = 59;
            --minutes
        } else {
            //se o meu segundo não for 0, eu diminuo ele
            --seconds;
        }*/

        if(!seconds && !minutes) return destroyInterval()
        if(!seconds) {
            seconds = 59;
            --minutes
            updateCounterEl()
            return;
        }
        --seconds;
        updateCounterEl()
    }, 1000)
}

function pauseTimer() {
    destroyInterval()
}
function destroyInterval() {
    clearInterval(counterInterval)
    counterInterval = undefined
}
function resetTimer() {
    //parando o counter
    destroyInterval()
    //atribuindo 25 de novo ao contador
    minutes = 25;
    seconds = 0;
    //chamando a função que atualiza o elemento
    updateCounterEl();
}
