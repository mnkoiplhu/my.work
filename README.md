# 书页之间 · 读书记录网站

## 目录结构
- `index.html`：主页，包含指向全部 5 个分页面的链接
- `about.html`：阅读宣言
- `bookshelf.html`：2026 年度书单（可筛选）
- `notes.html`：读书札记
- `map.html`：阅读地图
- `growth.html`：阅读成长
- `css/style.css`、`js/main.js`：样式与交互
- `images/*.svg`：原创插画与书籍封面

所有链接与资源引用均为相对路径，可整站直接发布到 GitHub Pages。

## 发布到 GitHub Pages
1. 在 GitHub 新建仓库，名称建议 `reading-record`（公开仓库）。
2. 把本 `website` 文件夹里的**全部文件和子文件夹**上传到仓库根目录。
   网页版可点 “Add file → Upload files”，拖入整个文件夹内容后提交。
3. 进入仓库 `Settings → Pages`，Build and deployment 选择 `Deploy from a branch`，
   Branch 选 `main`，目录选 `/ (root)`，保存。
4. 等待几分钟，访问 `https://你的用户名.github.io/reading-record/` 确认外网可打开。
5. 把该地址填到课程提交框的“网站地址”里。

## 本地预览
直接双击 `index.html` 即可预览；若要模拟相对路径服务器，可在本目录运行：
`python -m http.server 8000`，然后访问 `http://localhost:8000/`。