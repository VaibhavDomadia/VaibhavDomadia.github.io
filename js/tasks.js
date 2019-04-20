let nooftasks;

let tasklist = [];

let taskContainer = document.getElementById('taskcontainer');

function initTasks() {
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
                  let newTask = new Task(id, value, completed, important, taskdate);
                  newTask.buildTask(taskContainer);
                  tasklist.push(newTask);
            }
      });

      // On Updating Child
      rootdbref.on('child_changed' , snap => {
            let id = snap.child("id").val();
            let value = snap.child("value").val();
            let completed = snap.child("completed").val();
            let important = snap.child("important").val();
            let datesel = snap.child("taskdate").val();
            console.log(datesel);
            let taskselec;
            if(id != null) {
                  for(let i=0 ; i<tasklist.length ; i++) {
                        if(id === tasklist[i].id) {
                              taskselec = tasklist[i];
                              break;
                        }
                  }

                  taskselec.updateText(value, id);
                  taskselec.updateState(completed);
                  taskselec.updateImportance(important);
                  taskselec.updateDate(datesel);
            }
      });
};