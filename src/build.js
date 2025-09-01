// src/build.js
import fs from "fs";
import path from "path";
import matter from "gray-matter"; // npm install gray-matter

// blog/posts ディレクトリのパス
const postsDir = path.join(process.cwd(), "blog", "posts");

// 出力先 blog/posts.json
const outFile = path.join(process.cwd(), "blog", "posts.json");

// Markdown ファイルを取得
const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

const posts = files.map(file => {
  const fullPath = path.join(postsDir, file);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(raw);

  // 日付を YYYY-MM-DD 形式に整形
  let dateStr = "";
  if (data.date) {
    const d = new Date(data.date);
    if (!isNaN(d)) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      dateStr = `${yyyy}-${mm}-${dd}`;
    }
  }

  return {
    title: data.title || file.replace(/\.md$/, ""),
    date: dateStr,
    file,               // preview.html?file= で使用
    thumb: data.thumb || "thumbnail.png",
    tags: data.tags || []
  };
});

// 日付降順にソート
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// blog/posts.json に保存
fs.writeFileSync(outFile, JSON.stringify(posts, null, 2), "utf-8");

console.log(`✅ blog/posts.json を生成しました (${posts.length}件)`);
