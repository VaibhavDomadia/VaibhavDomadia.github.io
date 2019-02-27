//To Denote the state of navigation drawer, whether it is open or not.
let state = false;

let name = ["Tasks","Important"];

function openNavigation() {
    state = !state;
    let sidenav = document.getElementById("snav");
    let main = document.getElementById("main");
    let boundtitle = document.getElementsByClassName("boundtitle");
    if(state) {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        for(let i=0 ; i<boundtitle.length ; i++) {
            boundtitle[i].classList.remove("boundtitlenone");
            boundtitle[i].classList.add("boundtitleinline");
        }
    }
    else {
        sidenav.style.width = "80px";
        main.style.marginLeft = "80px";
        for(let i=0 ; i<boundtitle.length ; i++) {
            boundtitle[i].classList.add("boundtitlenone");
            boundtitle[i].classList.remove("boundtitleinline");
        }
    }
}
