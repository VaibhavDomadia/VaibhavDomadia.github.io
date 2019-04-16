//let obtainnooftasks = rootdbref.child('nooftasks');

let nooftasks;

let tasklist = [];

let taskContainer = document.getElementById('taskcontainer');

function initTasks() {
      // Getting No of tasks user currently has in this taskgroup
      // obtainnooftasks.on('child_added', function(snap) {
      //       updatenooftasks(snap.val());
      // })
      obtainnooftasks.on('value', function(snap) {
            updatenooftasks(snap.val());
      });
      function updatenooftasks(value) {
            if(value == null)
                  nooftasks = 0;
            else
                  nooftasks = value;
      }

      // Creation of tasks
      rootdbref.on('child_added', snap => {
            console.log("You called child added");
            let id = snap.child("id").val();
            let value = snap.child("value").val();
            let completed = snap.child("completed").val();
            let important = snap.child("important").val();
            let date = snap.child("taskdate").child("date").val();
            let month = snap.child("taskdate").child("month").val();
            let year = snap.child("taskdate").child("year").val();
            let weekday = snap.child("taskdate").child("weekday").val();
            let taskdate = [date, month, year, weekday];
            if(id != null) {
                  console.log(id + " " + value + " " + completed + " " + important + " " + date);

                  let newTask = new Task(id, value, completed, important, taskdate);
                  newTask.buildTask(taskContainer);
                  tasklist.push(newTask);
            }
      });

      // On Updating Child
      rootdbref.on('child_changed' , snap => {
            console.log("You called child changed");
            let id = snap.child("id").val();
            let value = snap.child("value").val();
            let completed = snap.child("completed").val();
            let important = snap.child("important").val();
            let tasksel;
            if(id != null) {
                  console.log(id + " " + value + " " + completed + " " + important);

                  for(let i=0 ; i<tasklist.length ; i++) {
                        if(id === tasklist[i].id) {
                              tasksel = tasklist[i];
                              break;
                        }
                  }

                  tasksel.updateText(value, id);
                  tasksel.updateState(completed);
                  tasksel.updateImportance(important);

                  //let newTask = new Task(id, value, completed);
                  //newTask.buildTask(taskContainer);
                  //tasklist.push(newTask);
            }
      });
};