const clockContainer = document.getElementsByClassName("js-clock")[0];
const clockTitle = clockContainer.getElementsByTagName("h1")[0];

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
    // clockTitle.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
