function addnewtaskgroup() {
      let taskgroupcontainer = document.getElementById("taskgroupcont");

      let newtaskgroup = document.createElement("a");
      newtaskgroup.setAttribute("href","tasks.html");
      let iconfortaskgroup = document.createElement("img");
      iconfortaskgroup.setAttribute("src","images/tasks-solid.svg");
      let titlefortaskgroup = document.createElement("h4");
      titlefortaskgroup.innerHTML = "Untitled List";

      newtaskgroup.appendChild(iconfortaskgroup);
      newtaskgroup.appendChild(titlefortaskgroup);

      taskgroupcontainer.appendChild(newtaskgroup);
}