# About Me Portfolio

This repository hosts a dynamic, JavaScript-driven personal portfolio. The landing page is assembled in `script.js` and stylized with `styles.css`, showcasing education, projects, skills, and contact links.

## 本地预览 / Run locally

- 直接打开：双击 `index.html`，或在浏览器中拖入该文件即可查看。
- 使用本地服务器（推荐，避免某些浏览器的本地文件限制）：
  1. 在项目根目录运行 `python -m http.server 8000`。
  2. 浏览器访问 `http://localhost:8000`。

## 部署到静态托管

1. 创建（或复用）一个启用 **Static website hosting** 的 S3 Bucket 或其他静态站点服务。
2. 上传 `index.html`、`styles.css`、`script.js` 以及 `photo/` 资源目录。
3. 根据需要配置公开读取权限。
4. 使用托管服务提供的站点 URL 查看上线效果。
