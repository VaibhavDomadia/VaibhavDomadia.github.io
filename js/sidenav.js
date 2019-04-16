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