function openmenufortheme() {
      let menutheme = document.getElementById("thememenu");
      menutheme.style.display = "inline-block";
}

let stateofdropdown = false;
let disable = document.getElementById('disable');

function opendropdownheader() {
      document.getElementById('dropdown-content').classList.toggle("show");
      if(stateofdropdown) {
            disable.style.display = "grid";
      }
      else {
            disable.style.display = "none";
      }
}

window.onclick = function(event) {
      if(event.target.matches('#head-dropdown-icon-bound')) {
            stateofdropdown = !stateofdropdown;
            opendropdownheader();
      }
      else {
            if(stateofdropdown) {
                  stateofdropdown = !stateofdropdown;
                  opendropdownheader();
            }
      }
}
