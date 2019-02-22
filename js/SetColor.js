function setColor(color) {
    let taskWindow = document.getElementById("taskWin");
    let inputElem = taskWindow.getElementsByTagName("input")[0];
    let buttonWindow = taskWindow.getElementsByClassName("buttonWindow")[0];
    inputElem.style.borderBottomColor = color;
    buttonWindow.style.backgroundColor = color;
    changeTaskColor(color);
}
