let nooftasks;

let tasklist = [];

let taskContainer = document.getElementById("taskcontainer");

function getImportantTasks() {
      // Getting No of tasks user currently has in this taskgroup
      obtainnooftasks.on('value', function(snap) {
            updatenooftasks(snap.val());
      });
      function updatenooftasks(value) {
            nooftasks = value;
      }

      //Getting those tasks that are Important
      console.log("Hello Function");
      rootdbref.on('child_added', snap => {
            let id = snap.child("id").val();
            let important = snap.child("important").val();
            console.log("Hello Outside");
            console.log(important);
            if(id != null && important) {
                  console.log("Hello inside")
                  let value = snap.child("value").val();
                  let completed = snap.child("completed").val();
                  let newTask = new Task(id, value, completed, important);
                  newTask.buildTask(taskContainer);
                  tasklist.push(newTask);
            }
      });
};