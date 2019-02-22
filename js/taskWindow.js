let thisId;

function openTaskWindow(id) {
    let taskWindow = document.getElementById("taskWin");
    taskWindow.classList.remove("hide");
    let blur = document.getElementById("blurid");
    blur.classList.remove("hide");

    thisId = id;

    let tasknode = document.getElementsByClassName("tasknode")[id];
    let inputElem = tasknode.getElementsByTagName("input")[0];

    let buttonWindow = taskWindow.getElementsByClassName("buttonWindow")[0];
    buttonWindow.style.backgroundColor = taskColor[id];

    let inputTaskWindow = taskWindow.getElementsByTagName("input")[0];
    inputTaskWindow.style.borderBottomColor = taskColor[id];
    inputTaskWindow.value = inputElem.value;
}

function closeTaskWindow() {
    let taskWindow = document.getElementById("taskWin");
    taskWindow.classList.add("hide");
    let blur = document.getElementById("blurid");
    blur.classList.add("hide");

    let tasknode = document.getElementsByClassName("tasknode")[thisId];
    let inputElem = tasknode.getElementsByTagName("input")[0];

    let inputTaskWindow = taskWindow.getElementsByTagName("input")[0];
    inputElem.value = inputTaskWindow.value;
}

function changeTaskColor(color) {
    let tasknode = document.getElementsByClassName("tasknode")[thisId];
    tasknode.style.borderColor = color;
    let tickButton = tasknode.getElementsByClassName("tick")[0];
    if(isTicked[thisId]) {
        tickButton.style.backgroundColor = color;
    }
    taskColor[thisId] = color;
}
