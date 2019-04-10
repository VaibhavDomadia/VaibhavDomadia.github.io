let currentid;

let windowsize = window.matchMedia("(max-width: 800px)");

let tasksel;

function opentaskmanager(id) {
      let taskmanager = document.getElementById("taskmanager");
      taskmanager.style.padding = "24px";
      if(windowsize.matches) {
            taskmanager.style.width = "100%";
      }
      else {
            taskmanager.style.width = "30%";
      }
      //let pagelayout = document.getElementById("pagelayout");
      //pagelayout.style.width = "75%";

      let tasktext = document.getElementById("task-text");
      let taskcontainer = document.getElementById("taskcontainer");
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].id === id) {
                  tasksel = tasklist[i];
                  break;
            }
      }
      //let getinputtext = taskcontainer.getElementsByTagName("p")[id-1];
      //tasktext.value = getinputtext.innerHTML;
      tasktext.value = tasksel.value;

      currentid = id;
      taskselected = tasksel;
}

function closetaskmanager() {
      let taskmanager = document.getElementById("taskmanager");
      taskmanager.style.padding = "0px";
      taskmanager.style.width = "0%";
      //let pagelayout = document.getElementById("pagelayout");
      //pagelayout.style.width="100%";

      let tasktext = document.getElementById("task-text");
      let taskcontainer = document.getElementById("taskcontainer");
      //let getinputtext = taskcontainer.getElementsByTagName("p")[currentid-1];
      //getinputtext.innerHTML = tasktext.value;
      tasksel.value = tasktext.value;
      console.log(tasksel.value);
      rootdbref.child('task' + currentid).update({
            "value": tasksel.value
      })
}

function ontickinsidemanager() {
      let tick = document.getElementById("tickmanager");
      tick.classList.add("clicked");
}
