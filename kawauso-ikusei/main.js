let timeInterval = setInterval(timeDisplay, 50);

function formatDate(date) {
    const pad = (num) => String(num).padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function timeDisplay() {
    document.getElementById("time").innerHTML = formatDate(new Date());
}