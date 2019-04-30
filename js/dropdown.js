// This shows the state to show or hide completed task. true for hide and false for show.
let stateofshoworhide = false;
let hctnode = document.getElementsByClassName("dropbut")[0];
let hctnodetext = hctnode.getElementsByTagName("p")[0];

function operationoncompletedtask() {
      if(stateofshoworhide) {
            showcompletedtask();
            hctnodetext.innerHTML = "Hide completed task";
      }
      else {
            hidecompletedtask();
            hctnodetext.innerHTML = "Show completed task";
      }
      stateofshoworhide = !stateofshoworhide;
}

function hidecompletedtask() {
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].completed) {
                  tasklist[i].hidetask();
            }
      }
}

function showcompletedtask() {
      for(let i=0 ; i<tasklist.length ; i++) {
            if(tasklist[i].completed) {
                  tasklist[i].unhidetask();
            }
      }
}