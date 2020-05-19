const toDoForm = document.getElementsByClassName("js-toDoForm")[0];
const toDoInput = toDoForm.getElementsByTagName("input")[0];
const toDoList = document.getElementsByClassName("js-toDoList")[0];
const delAllBtn = document.createElement("button");
// delAllBtn.style.display = "none";

const TODOS_LS = "toDos";

function filterFn(toDo) {
    return toDo.id === 1;
}

let toDos = [];

function deleteAllToDo(event) {
    const li = toDoList.getElementsByTagName("li");
    console.log(li);

    while (toDoList.hasChildNodes()) {
        toDoList.removeChild(toDoList.firstChild);
    }
    toDos = [];
    saveToDos();
    console.log("deleteAllToDo");
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
    delAllBtn.style.display = "inline-block";
}

function loadTODos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    // const delAllBtn = document.createElement("button");
    delAllBtn.setAttribute("class", "delAllBtn");
    delAllBtn.innerText = "DELETE ALL!";
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
        if (loadedToDos === "[]") {
            delAllBtn.style.display = "none";
        } else {
            delAllBtn.style.display = "inline-block";
        }
    }
}

function init() {
    loadTODos();
    toDoForm.addEventListener("submit", handleSubmit)

}
init();
