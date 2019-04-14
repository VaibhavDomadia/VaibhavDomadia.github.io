let currentid;

let windowsize = window.matchMedia("(max-width: 800px)");

let tasksel;

let monthval = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
let weekval = ["Sun" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" , "Sat"];

function opentaskmanager(id) {
      let taskmanager = document.getElementById("taskmanager");
      taskmanager.style.padding = "24px";
      if(windowsize.matches) {
            taskmanager.style.width = "100%";
      }
      else {
            taskmanager.style.width = "30%";
      }

      let tasktext = document.getElementById("task-text");
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].id === id) {
                  tasksel = tasklist[i];
                  break;
            }
      }
      tasktext.value = tasksel.value;
      console.log(tasksel.value);

      let impimage = document.getElementById('impimage');
      if(tasksel.important) {
            impimage.setAttribute("src","images/star-solid-yellow.svg");
      }
      else {
            impimage.setAttribute("src","images/star-regular-dark.svg");
      }

      //Task Manager Date Display
      let dt = tasksel.taskdate;
      let s = "Created on " + weekval[dt[3]] + ", " + dt[0] + " " + monthval[dt[1]] + " " + dt[2];
      document.getElementById('taskmanagerdate').innerHTML = s;

      currentid = id;
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
            "value": tasksel.value,
            "completed": tasksel.completed,
            "important": tasksel.important
      });
      window.location = "tasks.html";
}

function ontickinsidemanager() {
      let tick = document.getElementById("tickmanager");
      if(tasksel.completed) {
            tick.classList.remove("clicked");
      }
      else {
            tick.classList.add("clicked");
      }
      tasksel.completed = !tasksel.completed;
}

function onimportantinsidemanager() {
      let impimage = document.getElementById('impimage');
      if(tasksel.important) {
            impimage.setAttribute("src","images/star-regular-dark.svg");
      }
      else {
            impimage.setAttribute("src","images/star-solid-yellow.svg");
      }
      tasksel.important = !tasksel.important;
}

function ondeleteinsidemanager() {
      closetaskmanager();
      removeTask(currentid);
}
