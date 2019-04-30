/**
 * This function will handle opening and closing of side navigation drawer.
 * This function will also make background opaque so that screen can be disabled when naviagtion drawer is opened.
 */
function opensidenav() {
      let sidenav = document.getElementById('sidenavigation');
      let opaque = document.getElementById('opaque');
      if(sidenav.className === "sidenav") {
            sidenav.className += " sidenavopen";
            opaque.style.display = "grid";
      }
      else {
            sidenav.className = "sidenav";
            opaque.style.display = "none";
      }
}