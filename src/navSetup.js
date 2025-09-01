//document.addEventListener("DOMContentLoaded", () => {
    // GitHub Pages のリポジトリパス取得（例: /repo-name/）
    const repoPath = "/" + location.pathname.split("/")[1] + "/";

    // 階層の深さを算出（リポジトリ名は除く）
    // 例: /repo-name/member/ の場合、depth は 1
    let depth = location.pathname
        .replace(repoPath, "")
        .split("/")
        .filter(s => s !== "")
        .length - 1;

    if (depth <= 0) {
        // ルートディレクトリの場合
        depth = 0;
    }

    // 相対パスを生成（例: "../", "../../", ""）
    const base = "../".repeat(depth);

    // ナビゲーション項目
    const navItems = [
        { label: "home", path: "" },
        { label: "member", path: "member/" },
        { label: "blog", path: "blog/" },
        { label: "|", path: null },
        { label: "公式Youtube", path: "https://www.youtube.com/@yukonaht_music", external: true }
    ];

    // <div class="nav-page"> を取得
    const navContainer = document.querySelector("#auto-nav .nav-page");
    if (!navContainer) return;

    // 中身を空に（header-site は navContainer の外なので残る）
    navContainer.innerHTML = "";

    // ナビ項目を追加
    navItems.forEach(item => {
        const a = document.createElement("a");

        if (item.label === "|") {
            // 区切り線
            const ul = document.createElement("ul");
            ul.className = "nav-page";
            ul.textContent = "|";
            a.appendChild(ul);
            navContainer.appendChild(a);
            return;
        }

        // リンク設定
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
