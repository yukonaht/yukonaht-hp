const buttonID = document.getElementById("b1");
buttonID.addEventListener("click",{name: buttonID.value, handleEvent: videoDisplay});

function videoDisplay(e) {
    document.getElementById("v-stage").innerHTML = `<video src="videos/STAGE${this.name}.mp4" autoplay muted id="overlap"></video>`;
    document.getElementById("overlap").addEventListener("ended", () => {
        document.getElementById("v-stage").innerHTML = '';
    });
}