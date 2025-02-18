let timer;
let seconds = 0;
let running = false;

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

function updateTime() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hourEl.textContent = `${hrs}h`;
    minuteEl.textContent = `${mins}mn`;
    secondEl.textContent = `${secs}s`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateTime();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
