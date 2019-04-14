class Task {
      constructor(id, value, state, stateforimportant, taskdate) {
            this.id = id;
            this.value = value;
            this.completed = state;
            this.important = stateforimportant;
            this.taskdate = taskdate;
      }

      //Metods Related To Creation Of a new Task.

      buildTask(taskContainer) {
            let task = document.createElement("div");
            task.classList.add("task");
            task.setAttribute("id",this.id);
            task.setAttribute("oncontextmenu",`return opencontextmenufortask(event);`);

            this.createTick(task);
            this.createText(task);
            this.createEditIcon(task);
            this.createImportantIcon(task);
            this.createDeleteIcon(task);

            taskContainer.appendChild(task);
      }

      createTick(task) {
            let tick = document.createElement("button");
            tick.setAttribute("onclick",`onTick(${this.id})`);
            tick.classList.add("tick");
            tick.classList.add('icon');

            if(this.completed) {
                  console.log(this.completed);
                  tick.classList.add('ticked');
            }

            let tickicon = document.createElement("img");
            tickicon.setAttribute("src","images/check-solid.svg");
            tick.appendChild(tickicon);

            task.appendChild(tick);
      }

      createText(task) {
            let text = document.createElement("p");
            text.innerHTML = this.value;
            text.classList.add("textfortask");

            if(this.completed) {
                  text.style.textDecoration = "line-through";
            }

            task.appendChild(text);
      }

      updateText(value, id) {
            let task = document.getElementById(id);
            let text = task.getElementsByTagName("p")[0];
            text.innerHTML = value;
      }

      createEditIcon(task) {
            let editicon = document.createElement("img");
            editicon.setAttribute("src","images/pen-solid.svg");
            editicon.classList.add("editicon");
            editicon.classList.add("icon");
            editicon.setAttribute("onclick",`opentaskmanager(${this.id})`);

            task.appendChild(editicon);
      }

      createImportantIcon(task) {
            let importanticon = document.createElement("img");
            if(this.important) {
                  importanticon.setAttribute("src","images/star-solid-yellow.svg");
            }
            else {
                  importanticon.setAttribute("src","images/star-regular-dark.svg");
            }
            importanticon.setAttribute("onclick",`onImportant(this, ${this.important}, ${this.id})`);
            importanticon.classList.add("importanticon");
            importanticon.classList.add("icon");

            task.appendChild(importanticon);
      }

      createDeleteIcon(task) {
            let deleteicon = document.createElement("img");
            deleteicon.setAttribute("src","images/trash-solid.svg");
            deleteicon.classList.add("deleteicon");
            deleteicon.classList.add("icon");
            deleteicon.setAttribute("onclick",`removeTask(${this.id})`);

            task.appendChild(deleteicon);
      }

      updateState(completed) {
            this.completed = completed;
      }

      updateImportance(important) {
            this.important = important;
      }
}

function onImportant(importanticon, important, id) {
      console.log(important);
      let tasksel;
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].id === id) {
                  tasksel = tasklist[i];
                  break;
            }
      }
      if(!tasksel.important) {
            importanticon.setAttribute("src","images/star-solid-yellow.svg");
      }
      else {
            importanticon.setAttribute("src","images/star-regular-dark.svg");
      }
      tasksel.important = !tasksel.important;

      rootdbref.child('task' + id).update({
            "important": tasksel.important
      })
      console.log(tasksel.important);
}

function onTick(id) {
      let taskObject;
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].id === id) {
                  taskObject = tasklist[i];
                  break;
            }
      }
      let task = document.getElementById(id);
      let tick = task.getElementsByTagName("button")[0];
      let text = task.getElementsByTagName("p")[0];
      if(taskObject.completed) {
            tick.classList.remove("ticked");
            text.style.textDecoration = "none";
      }
      else {
            tick.classList.add("ticked");
            text.style.textDecoration = "line-through";
      }
      taskObject.completed = !taskObject.completed;
      rootdbref.child('task' + id).update({
            "completed": taskObject.completed
      })
}

let inputnewtask = document.getElementById('inputfornewtask');
inputnewtask.addEventListener("keyup", event => {
      if(event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('butfornewtask').click();
      }
})

function addTask() {
      let inputfornewtask = document.getElementById("inputfornewtask");
      if(inputfornewtask.value == "")
            return;
      nooftasks++;

      let dbtaskentry = rootdbref.child('task' + nooftasks);
      dbtaskentry.child('id').set(nooftasks);
      dbtaskentry.child('value').set(inputfornewtask.value);
      dbtaskentry.child('completed').set(false);
      dbtaskentry.child('important').set(false);
      let dateref = dbtaskentry.child('taskdate');
      let d = new Date();
      dateref.child('date').set(d.getDate());
      dateref.child('month').set(d.getMonth());
      dateref.child('year').set(d.getFullYear());
      dateref.child('weekday').set(d.getDay());
      obtainnooftasks.set(nooftasks);

      inputfornewtask.value = "";
}

function removeTask(id) {
      let taskContainer = document.getElementById("taskcontainer");
      let task = document.getElementById(id);
      rootdbref.child('task' + id).remove();
      taskContainer.removeChild(task);
      console.log(tasklist);
      tasklist.splice(id, 1);
      if(tasklist.length == 0) {
            obtainnooftasks.set(0);
      }
      console.log(tasklist);
      console.log(id);
}

/*window.onclick = function() {
      let contextmenu = document.getElementById("menutask");
      contextmenu.style.display = "none";
}

function opencontextmenufortask(event) {
      let contextmenu = document.getElementById("menutask");
      contextmenu.style.display = "block";
      let x = event.clientX;
      let y = event.clientY;
      let heightofscreen = window.innerHeight;
      let heightofcontextmenu = contextmenu.offsetHeight;
      contextmenu.style.left = x + "px";

      if(heightofscreen-y < heightofcontextmenu) {
            contextmenu.style.top = y-heightofcontextmenu + "px";
      }
      else {
            contextmenu.style.top = y + "px";
      }
      return false;
}*/
