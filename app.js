const daysLeft = document.getElementById("days");
const hoursLeft = document.getElementById("hours");
const minutesLeft = document.getElementById("minutes");
const secsLeft = document.getElementById("seconds");


const newYears = "1 January 2024"

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;



    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60

    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = formatTime(hours);
    minutesLeft.innerHTML = formatTime(mins);
    secsLeft.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);