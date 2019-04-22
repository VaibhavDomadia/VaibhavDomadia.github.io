// This variable is to keep tract of the current id, so it can be used when the task manager is closed down.
let currentid;

// This object is to store the current selected task.
let tasksel;

// To handle the opening of task manager as per the device size.
let windowsize = window.matchMedia("(max-width: 800px)");

/**
 * Javascript date function getMonth() return number from 0-11.
 * This is to obtain name of the month based on that number.
 */
let monthval = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

/**
 * Javascript date function getDay() return the number from 0-6, representing today.
 * This is to get the name equivalent of that number.
 */
let weekval = ["Sun" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" , "Sat"];




/**
 * This method is called when the user clicks on the task, so that you can perform operations on those task.
 */
function opentaskmanager(id) {

      
      // This will open task manager as per the device size.
      let taskmanager = document.getElementById("taskmanager");
      if(windowsize.matches) {
            taskmanager.style.width = "100%";
      }
      else {
            taskmanager.style.width = "30%";
      }


      // This is to get the task from HTML file based on the id (id is obtained from the parameter passed to this function)
      let tasktext = document.getElementById("task-text");
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].id === id) {
                  tasksel = tasklist[i];
                  break;
            }
      }
      tasktext.value = tasksel.value;
      console.log(tasksel);
      console.log(tasksel.value + " " + tasksel.completed);

      
       
      /**
       * If the task is already completed then the css class (clicked) should be added to tick box element inside 
       * the task manager.
       */
      let tick = document.getElementById("tickmanager");
      if(tasksel.completed) {
            tick.classList.add("clicked");
      }
      else {
            tick.classList.remove("clicked");
      }


      /**
       * If the task opened is important then the Mark as important icon should be shown with yellow starred image
       * else should be normal.
       */
      let impimage = document.getElementById('impimage');
      if(tasksel.important) {
            impimage.setAttribute("src","images/star-solid-yellow.svg");
      }
      else {
            impimage.setAttribute("src","images/star-regular-dark.svg");
      }


      /**
       * This will get the date when the user created the task of the selected task and will assign to a text box.
       */
      let dt = tasksel.taskdate;
      console.log("inside tm" + dt);
      let s = "Created on " + weekval[dt[3]] + ", " + dt[0] + " " + monthval[dt[1]] + " " + dt[2];
      document.getElementById('taskmanagerdate').innerHTML = s;

      // Keeping tract of the current id, so it can be used when the task manager is closed down.
      currentid = id;
}

/**
 * This method is called when the user closes the task manager.
 * It performs shutdown operations that will save the currently changed value of the task by the user into database.
 */
function closetaskmanager() {
      let taskmanager = document.getElementById("taskmanager");
      taskmanager.style.padding = "0px";
      taskmanager.style.width = "0%";

      let tasktext = document.getElementById("task-text");
      tasksel.value = tasktext.value;
      console.log(tasksel.value);
      rootdbref.child('task' + currentid).update({
            "value": tasksel.value,
            "completed": tasksel.completed,
            "important": tasksel.important
      });
      tasksel.updateUI();
}




/**
 * This method is to change the state of the task. (i.e. If task is completed or not) and based on that change the UI.
 */
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




/**
 * This method is to change the important state of the task and based on that changing UI Element.
 */
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




/**
 * This method is to delete the currently selected task from the task manager.
 */
function ondeleteinsidemanager() {
      closetaskmanager();
      removeTask(currentid);
}



function opendeletebox() {
      let confirmdeletebox = document.getElementById("confirmdeletebox");
      confirmdeletebox.style.display = "grid";
}

function deletetaskfrombox() {
      closedeletebox();
      ondeleteinsidemanager();
}

function closedeletebox() {
      let confirmdeletebox = document.getElementById("confirmdeletebox");
      confirmdeletebox.style.display = "none";
}