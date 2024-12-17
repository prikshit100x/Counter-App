const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const stopBtn = document.querySelector("#stop");
const content = document.querySelector("#content");

let number = 0;
let interval = null;

// Start button: Increments counter every second
startBtn.addEventListener("click", () => {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        number++;
        content.innerHTML = number;
    }, 1000);
});

// Stop button: Stops the counter
stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null; // Reset interval to allow restarting
});

// Reset button: Resets the counter and stops it
resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null; // Reset interval to allow restarting
    number = 0;
    content.innerHTML = number;
});
