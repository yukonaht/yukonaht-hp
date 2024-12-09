const buttonID = document.getElementById("b1");
buttonID.addEventListener("click", () => {
    let videoStageNum = buttonID.value;
    document.getElementById("v1").innerHTML = `<video src="videos/STAGE${videoStageNum}.webm" autoplay muted id="overlap"></video>`;
    document.getElementById("overlap").addEventListener("ended", () => {
        document.getElementById("v1").innerHTML = '';
    });
});