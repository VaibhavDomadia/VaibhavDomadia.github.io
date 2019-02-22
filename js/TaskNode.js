let currentId = 0;
let taskColor = [];


// Function called when a task is inserted
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

    taskColor.push("#ee6e73");


    // This Function is called to create a tick button that show the current status of a task
    tasknode.appendChild(createTickButton(currentId));

    // This Function will create the Input element for entering the task
    tasknode.appendChild(createInputText(currentId));

    // This Function is called to create a Trash Box add it to the particular task
    tasknode.appendChild(createTrashBox(currentId));

    // This function is called to create color palette for every task
    tasknode.appendChild(createColorPalette(currentId));


    cell.appendChild(tasknode);

    currentId++;
}


// Function called when A task is deleted
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


// Function to create Tick Button
function createTickButton(currentId) {
    // Adding a Task Button that will handle if the task is completed or not
    let taskButton = document.createElement("button");
    taskButton.classList.add("tick");
    taskButton.setAttribute("onclick",`onTick(${currentId})`);

    // Each Time a new node is inserted in the table a icon for the taskButton has to be made
    let tickIcon = document.createElement("i");
    tickIcon.classList.add("fas");
    tickIcon.classList.add("fa-check");

    taskButton.appendChild(tickIcon);
    return taskButton;
}


// Function to create Input Element for Task
function createInputText(currentId) {
    // This is to store the Task
    let inputText = document.createElement("input");
    inputText.classList.add("inputstyle");
    inputText.setAttribute("type","text");
    inputText.setAttribute("placeholder","Enter Task");
    inputText.setAttribute("onclick",`openTaskWindow(${currentId})`);
    return inputText;
}


// Function for creating delete Box
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


// Function for creating Color palette
function createColorPalette(currentId) {
    let colorPaletteIcon = document.createElement("i");
    colorPaletteIcon.classList.add("fas");
    colorPaletteIcon.classList.add("fa-palette");
    colorPaletteIcon.classList.add("colorPaletteInside");
    let boundColorPalette = document.createElement("div");
    boundColorPalette.appendChild(colorPaletteIcon);
    boundColorPalette.style.display = "inline";
    // boundColorPalette.setAttribute("onclick","");
    return boundColorPalette;
}
