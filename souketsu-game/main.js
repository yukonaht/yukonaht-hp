const buttonID = document.getElementById("b1");
buttonID.addEventListener("click", () => {
    document.getElementById("h1").innerHTML = '<video src="STAGE' + 1 + '.mp4" autoplay muted id="overlap"></video>';
    document.getElementById("overlap").addEventListener("ended", () => {
        document.getElementById("h1").innerHTML = '';
    });
});