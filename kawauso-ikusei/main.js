let timeInterval = setInterval(timeDisplay, 50);

function formatDate(date) {
    const pad = (num) => String(num).padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function timeDisplay() {
    document.getElementById("time").innerHTML = formatDate(new Date());
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
  