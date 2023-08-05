const timer = document.getElementById("timer");
let timerValue = Number(timer.textContent);

let idInterval = setInterval(() => {
    timerValue--;
    if (timerValue >= 0) {
          timer.textContent = String(timerValue);
    } else {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);