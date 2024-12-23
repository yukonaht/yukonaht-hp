let time = 0;
let otterpower = localStorage.getItem(document.getElementById("name").value);
let powerCount = true;
let playerName = document.getElementById("name").value;

if (playerName === "") {
    document.getElementById("name").value = "player" + Math.floor(Math.random() * 1000);
};

let timeInterval = setInterval(() => {
    document.getElementById("time").innerHTML = formatDate(new Date());
    document.getElementById("powerValue").innerHTML = otterpower;
    time++;
    if(time === 5000) {
        otterpower++;
        time = 0;
    }
}, 1);

document.getElementById("save").addEventListener("click",() => {
    localStorage.setItem(document.getElementById("name").value, otterpower);
});

document.getElementById("road").addEventListener("click",() => {
    otterpower = localStorage.getItem(document.getElementById("name").value);
});

function formatDate(date) {
    const pad = (num) => String(num).padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/**
 * 条件が揃ったら resolve 関数を走らせる。
 * Promise や Proxy を使いこなせばもっとスマートに書けるかも
 * @param {Function} conditionCallback resolve が走るための真偽値を返す関数
 * @param {Function} nonresolve 条件が揃うまで実行する関数
 * @param {Function} resolve 条件が揃ったら走る関数
 * @param {Number} intervalMillSecond ポーリング間隔ミリ秒
 */
function waitAsync(conditionCallback, nonresolve, resolve, intervalMillSecond = 100) {
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
