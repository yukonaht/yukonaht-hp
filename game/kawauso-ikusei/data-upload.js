document.getElementById('save').addEventListener("click", async (e) => {
    const name = document.getElementById('name').value;
    const power = otterpower;
    const powerFlag = powerIncrementFlag;

    const githubToken = '11BL26X2A0dzrm2zNktRHl_Ke7OSjyJCvHJlctH3C2Gphf0v6tBSrj6oaIvL6dGARDO2XWQ4NWMLEpB2lW'; // 生成したトークン
    const owner = 'talus_yujiro'; // GitHub ユーザー名
    const repo = 'yukonaht-HP'; // リポジトリ名
    const path = `data/${Date.now()}.json`; // 保存するファイル名
    const content = btoa(JSON.stringify({ name, power, powerFlag })); // Base64 エンコード

    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${githubToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'New form submission',
            content: content
        })
    });

    if (response.ok) {
        alert('データ保存できました');
    } else {
        alert('データ保存に失敗しました');
    }
})