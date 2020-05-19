const toDoList = document.getElementsByClassName("js-toDoList")[0];

function deleteAllToDo(event) {
    const li = toDoList.getElementsByTagName("li");
    console.log(li);

    toDoList.removeChild(li);
}


const ul = document.getElementsByTagName("ul")[0];
const li = ul.getElementsByTagName("li");

ul.removeChild(li);