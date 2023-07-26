const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (totalSeconds) => {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      const SEC_IN_MIN = 60;
      const MIN_IN_HOUR = 60;
      const totalMinutes = Math.floor(totalSeconds / SEC_IN_MIN);

      const seconds = (totalSeconds % SEC_IN_MIN).toString().padStart(2, "0");
      const minutes = (totalMinutes % SEC_IN_MIN).toString().padStart(2, "0");
      const hours = Math.floor(totalMinutes / MIN_IN_HOUR)
        .toString()
        .padStart(2, "0");

      timerEl.textContent = `${hours} : ${minutes} : ${seconds}`;
      if (totalSeconds > 0) totalSeconds--;
      else clearInterval(interval);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^0-9]+/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
