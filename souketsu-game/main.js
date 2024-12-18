const primaryFirst = [
    { question: "一", answer: "m" }
];

let videoEndFlag = [];
let timeLimit = 30;
let answerResult;

document.getElementById("startScreen").innerHTML = `<a href="../yukonaht-HP-home.html" class="upperLeft">←戻る</a>
    <div class="wrapper">
        <h1>倉頡輸入法ゲーム</h1>
        <button id="b1" value="1">スタート</button>
    </div>`;

let buttonID = document.getElementById("b1");
let videoID = buttonID.value;
buttonID.addEventListener("click", videoPlay);

let inputText = "";

outputQuestion(primaryFirst[0].question);
outputText(keyInput());

function videoPlay() {
    document.getElementById("startScreen").innerHTML = '';
    document.getElementById("v-stage").innerHTML = `<video src="videos/STAGE${videoID}.mp4" autoplay muted id="overlap"></video>`;
    document.getElementById("overlap").addEventListener("ended", () => {
        document.getElementById("v-stage").innerHTML = '';
        videoEndFlag.push(videoID);
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
        };
    });
    return outputKey;
}

function questionDisplay(index) {
    while (timeLimit === 0 || answerResult === true) {
        if (videoEndFlag.includes(1)) {
            inputText += keyInput();
            outputQuestion(primaryFirst[questionIndex].question);
            outputText(inputText);
            answerResult = answerJudge(keyInput, index);
        };
    };
}

function outputQuestion(text) {
    document.getElementById("question").innerHTML = text;
}

function outputText(text) {
    document.getElementById("textArea").innerHTML = text;
}

function answerJudge(answer, index) {
    if (answer === primaryFirst[index].answer) {
        return true;
    } else {
        return false;
    };
}

/**
 * 条件が揃ったら resolve 関数を走らせる。
 * Promise や Proxy を使いこなせばもっとスマートに書けるかも
 * @param {Function} conditionCallback resolve が走るための真偽値を返す関数
 * @param {Function} resolve 条件が揃ったら走る関数
 * @param {Number} intervalMillSecond ポーリング間隔ミリ秒
 */
function waitAsync(conditionCallback, resolve,intervalMillSecond = 100){
    if(conditionCallback()){
      // 待つまでもなく成立しているパターン用
      resolve();
      return;
    }
    // 条件が成立するまで setInterval でポーリング的なループ
    const intervalId = setInterval(()=>{
      if(!conditionCallback()){
        // 条件関数が false を返した時はループ続行
        return;
      }
      // 条件関数が true を返した時はループ用の interval を消去
      clearInterval(intervalId);
      // 条件関数が true を返した時は resolve 関数を実行
      resolve();
    }, intervalMillSecond)
  }
