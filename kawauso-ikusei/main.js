// Supabaseのセットアップ
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ksvdggybgpwfivohbxgn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdmRnZ3liZ3B3Zml2b2hieGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NTUwMjYsImV4cCI6MjA1NjUzMTAyNn0.Q69y-106Q-bNmigGR4D431KSjBShR8Rw5_DMAQaKN3U";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// 変数定義
let otterpower = 0;
let playerName = "";
let powerIncrementFlag = false;

// プレイヤー名の決定
playerName = "player" + String(Math.floor(Math.random() * 10000)).padStart(4, '0');

// セットアップ
document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("playerName").innerHTML = playerName;
    await loadPlayerData();
    repeatTasks();
});

async function loadPlayerData() {
    const { data, error } = await supabase
        .from("savedata")
        .select("power, powerIncrementFlag, saved_at")
        .eq("playerName", playerName)
        .single();

    if (data) {
        otterpower = data.power;
        powerIncrementFlag = data.powerIncrementFlag;
    } else {
        otterpower = 10;
        powerIncrementFlag = false;
    }

    document.getElementById("playerName").innerHTML = playerName;                                                                           
}

async function savePlayerData() {
    const { error } = await supabase
        .from("savedata")
        .upsert({ playerName, power: otterpower, powerIncrementFlag, saved_at: new Date().toISOString() });
    if (error) console.error("Save Error:", error);
}

async function repeatTasks() {
    await Promise.all([timeSet(), powerIncrement(), autoSave()]);
}

async function timeSet() {
    while (true) {
        document.getElementById("time").innerText = new Date().toLocaleString();
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function powerIncrement() {
    while (true) {
        document.getElementById("powerValue").innerText = otterpower;
        if (powerIncrementFlag) otterpower++;
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

async function autoSave() {
    while (true) {
        await savePlayerData();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }
}

document.getElementById("powerIncrement").addEventListener("click", () => {
    if (otterpower >= 10 && !powerIncrementFlag) {
        otterpower -= 10;
        powerIncrementFlag = true;
        alert('購入しました');
        document.getElementById("powerIncrement").innerHTML = `<p>購入済み</p>`;
    } else {
        alert(powerIncrementFlag ? '購入済みです' : 'パウワァが足りません');
    }
});

document.getElementById("save").addEventListener("click", savePlayerData);
