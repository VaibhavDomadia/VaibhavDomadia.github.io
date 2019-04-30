function openlistname() {
      let listnamebound = document.getElementById("listnamebound");
      listnamebound.style.display = "grid";
}

function addnewtasklist() {
      let taskgroupcontainer = document.getElementById("taskgroupcont");
      let inputfortaskgroup = document.getElementById("inputfortaskgroup");
      let value = inputfortaskgroup.value;

      if(value === "") {
            return;
      }

      let newtaskgroup = document.createElement("a");
      newtaskgroup.setAttribute("href","tasks.html");
      let iconfortaskgroup = document.createElement("img");
      iconfortaskgroup.setAttribute("src","images/tasks-solid.svg");
      let titlefortaskgroup = document.createElement("h4");
      titlefortaskgroup.innerHTML = value;

      newtaskgroup.appendChild(iconfortaskgroup);
      newtaskgroup.appendChild(titlefortaskgroup);

      taskgroupcontainer.appendChild(newtaskgroup);

      inputfortaskgroup.value = "";
      closelistname();
}

function closelistname() {
      let listnamebound = document.getElementById("listnamebound");
      listnamebound.style.display = "none";
}

function addnewtaskgroup() {
      let taskgroupcontainer = document.getElementById("taskgroupcont");

      
}