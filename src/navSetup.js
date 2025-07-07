document.addEventListener("DOMContentLoaded", () => {
    // GitHub Pages のリポジトリパス取得（例: /repo-name/）
    const repoPath = "/" + location.pathname.split("/")[1] + "/";

    // 階層の深さを算出（リポジトリ名は除く）
    const depth = location.pathname
        .replace(repoPath, "")
        .split("/")
        .filter(s => s !== "")
        .length - 1;

    // 相対パスを生成（例: "../", "../../", ""）
    const base = "../".repeat(depth);

    // ナビゲーション項目（hrefはリポジトリルート基準）
    const navItems = [
        { label: "home", path: "" },
        { label: "member", path: "member/" },
        { label: "JS", path: "game/" },
        { label: "blog", path: "blog/" },
        { label: "|", path: null },
        { label: "公式Youtube", path: "https://www.youtube.com/@yukonaht_music", external: true }
    ];

    // <div class="nav-page"> を取得
    const navContainer = document.querySelector(".nav-page");
    if (!navContainer) return;

    // 中身を空に
    navContainer.innerHTML = "";

    // 要素を追加
    navItems.forEach(item => {
        const a = document.createElement("a");

        // 区切り線「|」の場合
        if (item.label === "|") {
            const ul = document.createElement("ul");
            ul.className = "nav-page";
            ul.textContent = "|";
            a.appendChild(ul);
            navContainer.appendChild(a);
            return;
        }

        // 外部リンクかどうか
        if (item.external) {
            a.href = item.path;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        } else {
            a.href = base + item.path;
        }

        const ul = document.createElement("ul");
        ul.textContent = item.label;

        a.appendChild(ul);
        navContainer.appendChild(a);
    });
});
