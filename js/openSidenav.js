let state = false;

let name = ["Tasks","Important"];

function openNavigation() {
    state = !state;
    if(state) {
        document.getElementById("snav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    else {
        document.getElementById("snav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }   
}