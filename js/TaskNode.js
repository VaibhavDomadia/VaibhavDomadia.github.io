let currentId = 0;

function insertTaskNode() {
    // table variable will store the object of table (TaskGroup)
    let table = document.getElementById("TaskGroup");
    // To insert a row at last position
    let row = table.insertRow(currentId);
    // To insert a cell in current row
    let cell = row.insertCell(0);
    
    // Adding a Task Node and assigning id to each Task Node
    let tasknode = document.createElement("div");
    tasknode.classList.add("tasknode");
    tasknode.setAttribute("id",currentId);
    
    // Adding a Task Button that will handle if the task is completed or not
    let taskButton = document.createElement("button");
    taskButton.classList.add("tick");
    taskButton.setAttribute("onclick",`onTick(${currentId})`);

    // Each Time a new node is inserted in the table a icon for the taskButton has to be made
    let tickIcon = document.createElement("i");
    tickIcon.classList.add("fas");
    tickIcon.classList.add("fa-check");

    taskButton.appendChild(tickIcon);

    tasknode.appendChild(taskButton);

    // This is to store the Task
    let inputText = document.createElement("input");
    inputText.classList.add("inputstyle");
    inputText.setAttribute("type","text");
    inputText.setAttribute("placeholder","Enter Task");

    tasknode.appendChild(inputText);

    tasknode.appendChild(createTrashBox(currentId));

    cell.appendChild(tasknode);

    currentId++;
}

function deleteTaskNode(id) {
    let table = document.getElementById("TaskGroup");
    table.deleteRow(id);
    delIsTickedElement(id);
    for(let i=id+1 ; i<currentId ; i++) {
        let tasknode = document.getElementById(`${i}`);
        let taskButton = tasknode.getElementsByTagName("button")[0];
        let boundDelBox = tasknode.getElementsByTagName("div")[0];
        tasknode.setAttribute("id",i-1);
        taskButton.setAttribute("onclick",`onTick(${i-1})`);
        boundDelBox.setAttribute("onclick",`deleteTaskNode(${i-1})`);
    }
    currentId--;
}

function createTrashBox(currentId) {
    let deleteBox = document.createElement("i");
    deleteBox.classList.add("fas");
    deleteBox.classList.add("fa-trash");
    deleteBox.classList.add("deleteBox");
    let boundDelBox = document.createElement("div");
    boundDelBox.appendChild(deleteBox);
    boundDelBox.style.display = "inline";
    boundDelBox.setAttribute("onclick",`deleteTaskNode(${currentId})`);
    return boundDelBox;
}