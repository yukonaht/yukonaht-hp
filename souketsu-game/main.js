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
    let outputKey = "";
    if (inputKey === "q") {
        outputKey = "手";
    } else if (inputKey === "w") {
        outputKey = "田";
    } else if (inputKey === "e") {
        outputKey = "水";
    } else if (inputKey === "r") {
        outputKey = "口";
    } else if (inputKey === "t") {
        outputKey = "廿";
    } else if (inputKey === "y") {
        outputKey = "卜";
    } else if (inputKey === "u") {
        outputKey = "山";
    } else if (inputKey === "i") {
        outputKey = "戈";
    } else if (inputKey === "o") {
        outputKey = "人";
    } else if (inputKey === "p") {
        outputKey = "心";
    } else if (inputKey === "a") {
        outputKey = "日";
    } else if (inputKey === "s") {
        outputKey = "尸";
    } else if (inputKey === "d") {
        outputKey = "木";
    } else if (inputKey === "f") {
        outputKey = "火";
    } else if (inputKey === "g") {
        outputKey = "土";
    } else if (inputKey === "h") {
        outputKey = "竹";
    } else if (inputKey === "j") {
        outputKey = "十";
    } else if (inputKey === "k") {
        outputKey = "人";
    } else if (inputKey === "l") {
        outputKey = "中";
    } else if (inputKey === "z") {
        outputKey = "重";
    } else if (inputKey === "x") {
        outputKey = "難";
    } else if (inputKey === "c") {
        outputKey = "金";
    } else if (inputKey === "v") {
        outputKey = "女";
    } else if (inputKey === "b") {
        outputKey = "月";
    } else if (inputKey === "n") {
        outputKey = "弓";
    } else if (inputKey === "m") {
        outputKey = "一";
    };
    console.log(outputKey);
}