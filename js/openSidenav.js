let state = false;

let name = ["Tasks","Important"];

function openNavigation() {
    state = !state;
    if(state) {
        document.getElementById("snav").style.width = "250px";
    }
    else {
        document.getElementById("snav").style.width = "0";
    }
}
