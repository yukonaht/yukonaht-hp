let timeInterval = setInterval(timeDisplay, 50);

function timeDisplay() {
    document.getElementById("time").innerHTML = new Date();
}