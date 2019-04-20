/**
 * This is to show the state of the dropdown.
 * true if the dropdown in header is open and false when the dropdown is closed.
 */
let stateofdropdown = false;

/**
 * This is to disable the whole screen except the dropdown.
 * So that when the dropdown is open no actions can be taken until it is not closed through clicking on the screen.
 */
let disable = document.getElementById('disable');


/**
 * This function is used to toggle between opening and closing of dropdown.
 * When the user opens the dropdown, this function will add class show (css class) to dropdown-content which will show the dropdown.
 * And on closing the dropdown it will remove the show class (css class) to make it's display none;
 * 
 * This function will also change the property of disable(global - variable) (already mentioned above) to disable activities on screen.
 */
function opendropdownheader() {
      document.getElementById('dropdown-content').classList.toggle("show");
      if(stateofdropdown) {
            disable.style.display = "grid";
      }
      else {
            disable.style.display = "none";
      }
}

/**
 * Handling onclick event, for opening and closing of dropdown menu.
 */
window.onclick = function(event) {
      if(event.target.matches('#head-dropdown-icon-bound') || event.target.matches('#head-dropdown-icon')) {
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