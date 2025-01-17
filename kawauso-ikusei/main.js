// 変数を定義する場所
let otterpower = 0;
let playerName = "";
let powerIncrementFlag = false;
let requidedTime4Power = 5000;
let playerDataJSON = {};
let importPlayerData = {};
let dataImport = false;

// startScreen表示
document.getElementById("startScreen").innerHTML =
    `<div class="main__startScreen">
                <div class="main__startScreen__content">
                    <h2>名前を入力</h2>
                    <p>ゲームに入ったことがある場合は同じ名前を入力することで読み込むことができます</p>
                    <input type="text" name="" id="name" />
                    <br>
                    <button id="nameSend">完了</button>
                </div>
            </div>`;
// もしプレイヤー名が空だったら名前を"playerxxxx"にする
document.getElementById("name").value = "player" + Math.floor(Math.random() * 10000);

let stopLoop = false;

document.getElementById("nameSend").addEventListener("click", () => {
    stopLoop = true;
    document.getElementById("startScreen").innerHTML = "";
    if (localStorage.hasOwnProperty(playerName)) {
        otterpower = importPlayerData.power;
        powerIncrementFlag = importPlayerData.powerIncrementFlag;
    } else {
        otterpower = 10;
        powerIncrementFlag = false;
    }
    document.getElementById("name").value = playerName;
})

/**
 * 
 */
async function loopUntilButtonPress() {
    while (!stopLoop) {
        await new Promise(resolve => setTimeout(resolve, 500))
    };
}

loopUntilButtonPress();

repeatTasks();

// 繰り返し処理の並列処理
async function repeatTasks() {
    const result = await Promise.all([
        timeSet(),
        powerIncrement(),
        playerDataSet()
    ]);
}


// 時間を動かす
async function timeSet() {
    while (true) {
        document.getElementById("time").innerHTML = formatDate(new Date());
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

// 獺パウワァの増減
async function powerIncrement() {
    while (true) {
        await wait(5000);
        if (powerIncrementFlag) {
            otterpower++;
            console.log(otterpower);
        };
        document.getElementById("powerValue").innerHTML = otterpower;
    }
}

// プレーヤーデータ作成・読み込み
async function playerDataSet() {
    while (true) {
        if (playerName !== "") {
            let playerData = {
                power: otterpower,
                powerIncrementFlag: powerIncrementFlag
            };
            playerDataJSON = JSON.stringify(playerData);
            importPlayerData = JSON.parse(localStorage.getItem(playerName))
        };
        await new Promise(resolve => setTimeout(resolve, 10));
    };
}

// 獺パウワァを増やすフラグ購入
document.getElementById("powerIncrement").addEventListener("click", () => {
    if (otterpower >= 10 && powerIncrementFlag === false) {
        otterpower -= 10;
        powerIncrementFlag = true;
        alert('購入しました');
        document.getElementById("powerIncrement").innerHTML =
            `<p>獺パウワァを時間経過で増やす</p>
            <button>購入済み</button>`;
    } else if (powerIncrementFlag === false) {
        alert('パウワァが足りません');
    } else {
        alert('購入済みです');
    };
});

// セーブ
document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem(playerName, localStorage.setItem(playerName,
        playerDataJSON));
});

// ロード
document.getElementById("road").addEventListener("click", () => {
    otterpower = importPlayerData.power;
    powerIncrementFlag = importPlayerData.powerIncrementFlag;
});


/**
 * 日付をyy/mm/dd hh:mm:ssにフォーマットする
 * @param {Date} date フォーマットさせる日付
 * @returns フォーマット済みの日付
 */
function formatDate(date) {
    const pad = (num) => String(num).padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}


// ↓↓一旦置いておく場所

/**
 * 条件が揃ったら resolve 関数を走らせる。
 * Promise や Proxy を使いこなせばもっとスマートに書けるかも
 * @param {Function} conditionCallback resolve が走るための真偽値を返す関数
 * @param {Function} nonresolve 条件が揃うまで実行する関数
 * @param {Function} resolve 条件が揃ったら走る関数
 * @param {Number} intervalMillSecond ポーリング間隔ミリ秒
 */
function waitAsync(conditionCallback, nonresolve, resolve, intervalMillSecond =
    100) {
    if (conditionCallback()) {
        // 待つまでもなく成立しているパターン用
        resolve();
        return;
    }
    // 条件が成立するまで setInterval でポーリング的なループ
    const intervalId = setInterval(() => {
        if (!conditionCallback()) {
            // 条件関数が false を返した時はループ続行
            nonresolve();
            return;
        }
        // 条件関数が true を返した時はループ用の interval を消去
        clearInterval(intervalId);
        // 条件関数が true を返した時は resolve 関数を実行
        resolve();
    }, intervalMillSecond)
}
