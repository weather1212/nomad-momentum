const form = document.getElementsByClassName("js-nameForm")[0];
const input = form.getElementsByTagName("input")[0];
const greeting = document.getElementsByClassName("js-greetings")[0];

const USER_LS = "currentUser";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    console.log("handleSubmit 실행");
}

function askForName() {
    // form.setAttribute('display', 'none');    //display는 속성이 아니라 style속성객체에 들어있는 property
    // greeting.setAttribute('display', 'none');
    form.style.display = "block";
    greeting.style.display = "none";
    form.addEventListener('submit', handleSubmit);
    console.log("askForName 실행")
}

function paintGreeting(text) {
    // form.setAttribute('display', 'none');
    // greeting.setAttribute('display', 'block');
    form.style.display = "none";
    greeting.style.display = "block";
    greeting.innerText = "Hello " + text;
    console.log("paintGreeting 실행");
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        console.log("저장된 유저 없음");
        askForName();
    } else {
        console.log("유저 있음");
        paintGreeting(currentUser);
    }

}

function init() {
    loadName();
}
init();