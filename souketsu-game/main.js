document.getElementById("startScreen").innerHTML = `<a href="../yukonaht-HP-home.html" class="upperLeft">←戻る</a>
     <div class="wrapper">
        <h1>倉頡輸入法ゲーム</h1>
        <button id="b1" value="1">スタート</button>
    </div>`;

let buttonID = document.getElementById("b1");
let videoID = buttonID.value;
buttonID.addEventListener("click", videoPlay);

function videoPlay(e) {
    document.getElementById("startScreen").innerHTML = '';
    document.getElementById("v-stage").innerHTML = `<video src="videos/STAGE${videoID}.mp4" autoplay muted id="overlap"></video>`;
    document.getElementById("overlap").addEventListener("ended", () => {
        document.getElementById("v-stage").innerHTML = '';
    });
}

function keyInput() {
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        let outputKey = "";
        switch (e.key) {
            case 'q':
                outputKey = "手";
            case 'w':
                outputKey = "田";
            case 'e':
                outputKey = "水";
            case 'r':
                outputKey = "口";
            case 't':
                outputKey = "廿";
            case 'y':
                outputKey = "卜";
            case 'u':
                outputKey = "山";
            case 'i':
                outputKey = "戈";
            case 'o':
                outputKey = "人";
            case 'p':
                outputKey = "心";
            case 'a':
                outputKey = "日";
            case 's':
                outputKey = "尸";
            case 'd':
                outputKey = "木";
            case 'f':
                outputKey = "火";
            case 'g':
                outputKey = "土";
            case 'h':
                outputKey = "竹";
            case 'j':
                outputKey = "十";
            case 'k':
                outputKey = "大";
            case 'l':
                outputKey = "中";
            case 'z':
                outputKey = "重";
            case 'x':
                outputKey = "難";
            case 'c':
                outputKey = "金";
            case 'v':
                outputKey = "女";
            case 'b':
                outputKey = "月";
            case 'n':
                outputKey = "弓";
            case 'm':
                outputKey = "一";
        }
    });
    return outputKey;
}