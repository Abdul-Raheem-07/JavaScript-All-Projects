let alarmTime = null;
let alarmAudio = null;
let stopwatchInterval;
let stopwatchSeconds = 0;

// Update clock every second
setInterval(() => {
    let now = new Date();
    let timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    document.getElementById("clock").textContent = timeString;

    // Check alarm
    if (alarmTime && timeString === alarmTime) {
        triggerAlarm();
    }
}, 1000);

// Switch between Alarm & Stopwatch
function showMode(mode) {
    document.querySelectorAll(".mode-section").forEach(section => {
        section.style.display = "none";
        section.classList.remove("active");
    });
    const activeSection = document.getElementById(`${mode}-section`);
    activeSection.style.display = "block";
    setTimeout(() => activeSection.classList.add("active"), 10);
}

// Set Alarm
function setAlarm() {
    let input = document.getElementById("alarm-time").value;
    if (!input) return alert("Please select a time first!");

    let [hours, minutes] = input.split(":").map(Number);
    let now = new Date();
    let alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

    alarmTime = alarmDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    document.getElementById("current-alarm-display").textContent = `⏰ Alarm set for ${alarmTime}`;
    document.getElementById("alarm-status").textContent = "Alarm set successfully!";

    // Save to history
    let li = document.createElement("li");
    li.textContent = alarmTime;
    document.getElementById("alarm-history").appendChild(li);
}

// Trigger Alarm
function triggerAlarm() {
    document.getElementById("alarm-overlay").style.display = "flex";
    document.body.classList.add("alarm-flash");
    alarmAudio = new Audio("alarm.mp3");
    alarmAudio.loop = true;
    alarmAudio.play();
}

// Stop Alarm
function stopAlarm() {
    document.getElementById("alarm-overlay").style.display = "none";
    document.body.classList.remove("alarm-flash");
    if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio = null;
    }
    alarmTime = null;
    document.getElementById("current-alarm-display").textContent = "⏰ No alarm set";
}

// Stopwatch functions
function startStopwatch() {
    if (stopwatchInterval) return;
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
    stopStopwatch();
}

function updateStopwatchDisplay() {
    let hrs = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
    let secs = String(stopwatchSeconds % 60).padStart(2, '0');
    document.getElementById("stopwatch-display").textContent = `${hrs}:${mins}:${secs}`;
}
