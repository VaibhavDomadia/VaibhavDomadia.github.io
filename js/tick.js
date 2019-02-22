let isTicked = [];

function onTick(id) {
    let nodeTicked = document.getElementById(id);
    let buttonTicked = nodeTicked.getElementsByTagName("button")[0];
    let inputelem = nodeTicked.getElementsByTagName("input")[0];
    let tickIcon = buttonTicked.getElementsByTagName("i")[0];

    expandIsTicked(id);

    if(isTicked[id]) {
        buttonTicked.classList.remove("clicked");
        buttonTicked.style.backgroundColor = "#ffffff";
        tickIcon.style.color = "black";
        inputelem.style.textDecoration = "none";
    }
    else {
        buttonTicked.classList.add("clicked");
        buttonTicked.style.backgroundColor = taskColor[id];
        tickIcon.style.color = "white";
        inputelem.style.textDecoration = "line-through";
    }
    isTicked[id] = !isTicked[id];
}

function expandIsTicked(id) {
    if(isTicked.length < id+1) {
        for(let i=isTicked.length ; i<=id ; i++) {
            isTicked.push(false);
        }
    }
}

function delIsTickedElement(id) {
    // This function is used to remove the element with the given id from the array
    isTicked.splice(id,1);
    taskColor.splice(id,1);
}
