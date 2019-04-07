function opensidenav() {
      let sidenav = document.getElementById('sidenavigation');
      if(sidenav.className === "sidenav") {
            sidenav.className += " sidenavopen";
      }
      else {
            sidenav.className = "sidenav";
      }
}