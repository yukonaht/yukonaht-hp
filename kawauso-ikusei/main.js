let time = 0;
let timeInterval = setInterval(() => {
    document.getElementById("time").innerHTML = formatDate(new Date());
    time++;
}, 1);




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
