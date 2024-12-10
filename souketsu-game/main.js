document.getElementById("startScreen").innerHTML = `<a href="../yukonaht-HP-home.html" class="upperLeft">←戻る</a>
        <div class="wrapper">
            <h1>倉頡輸入法ゲーム</h1>
            <button id="b1" value="1">スタート</button>
        </div>`;

let buttonID = document.getElementById("b1");
buttonID.addEventListener("click", { name: buttonID.value, handleEvent: videoPlay });

function videoPlay(e) {
    document.getElementById("startScreen").innerHTML = '';
    document.getElementById("v-stage").innerHTML = `<video src="videos/STAGE${this.name}.mp4" autoplay muted id="overlap"></video>`;
    document.getElementById("overlap").addEventListener("ended", () => {
        document.getElementById("v-stage").innerHTML = '';
    });
}



function keyInput(e) {
    e.preventDefault();
    let inputKey = e.key;
    if(inputKey === "a"){
        console.log('aが入力されました');
    };
}