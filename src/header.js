document.addEventListener("DOMContentLoaded", () => {
    const bigHeader = document.getElementById("big-header");
    const smallHeader = document.createElement("header");
    smallHeader.id = "small-header";

    const siteLink = document.createElement("a");
    siteLink.classList.add("site-link");
    siteLink.href = "../";
    smallHeader.appendChild(siteLink);

    const siteIcon = document.createElement("img");
    siteIcon.src = "../img/yukonaht.png";
    siteIcon.alt = "yukonaht-HP";
    siteIcon.width = 60;
    siteIcon.height = 60;
    siteLink.appendChild(siteIcon);

    const siteTitle = document.createElement("h1");
    siteTitle.textContent = "yukonaht HP";
    siteLink.appendChild(siteTitle);

    document.body.appendChild(smallHeader);

    window.addEventListener("scroll", () => {
        // 小さいヘッダーの表示切替
        if (window.scrollY >= bigHeader.offsetHeight) {
            smallHeader.classList.add("visible");
        } else {
            smallHeader.classList.remove("visible");
        }
    });
});
