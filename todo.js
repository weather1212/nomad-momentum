const toDoForm = document.getElementsByClassName("js-toDoForm")[0];
const toDoInput = toDoForm.getElementsByTagName("input")[0];
const toDoList = document.getElementsByClassName("js-toDoList")[0];

const TODOS_LS = "toDos";

function filterFn(toDo) {
    return toDo.id === 1;
}

let toDos = [];

function deleteAllToDo(event) {
    const li = toDoList.getElementsByTagName("li");
    console.log(li);

    while (toDoList.hasChildNodes()) {
        toDoList.removeChild(li);
    }
    // toDoList.removeChild(li);

    toDos = null;

    // toDos = cleanToDos;
    // localStorage.removeItem("toDos")
    // console.log("deleteAllToDo");
}

function deleteToDo(event) {
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    console.log(text);

    const li = document.createElement("li");
    const delIcon = document.createElement("text");
    delIcon.innerHTML = "✔&nbsp&nbsp&nbsp";
    delIcon.style.cursor = "pointer";
    delIcon.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    span.innerText = text;

    li.id = newId;
    li.appendChild(delIcon);
    li.appendChild(span);
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadTODos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const delAllBtn = document.createElement("button");
    delAllBtn.innerText = "모두 지우기";
    delAllBtn.addEventListener("click", deleteAllToDo);
    toDoList.after(delAllBtn);
    if (loadedToDos !== null) {

        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function (toDo) {
            // console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadTODos();
    toDoForm.addEventListener("submit", handleSubmit)

}
init();
