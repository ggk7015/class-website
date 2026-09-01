# 資二丙班級資訊站

一個響應式班級資訊網站，提供學生與家長便利的班級公告、宣導事項、重要規定、報名專區、課表與重要日程入口。

## 功能特色

### 核心功能
- **全站搜尋** - 即時搜尋公告、日程、規定、FAQ 等所有內容
- **響應式設計** - 自適應手機、平板、桌面等各种螢幕尺寸
- **SPA 架構** - 單頁應用程式，流暢的頁面切換體驗
- **PWA 支援** - 可加入手機主畫面，類原生應用體驗

### 內容模組
| 模組 | 說明 |
|------|------|
| 最新公告 | 班級公告、即時訊息、收藏功能 |
| 宣導事項 | 學校宣導、生活須知、分類篩選 |
| 重要規定 | 校規班規、學生手冊、快速查詢 |
| 線上辦理 | 報名專區、表單連結、狀態顯示 |
| 課表查詢 | 每日課表、節次時間、上下課提醒 |
| 重要日程 | 月曆視圖、行事曆、倒數天數 |
| 請假說明 | 請假流程、必備資料、常見問題 |
| 常見問題 | FAQ 手風琴、快速解答 |

### 技術特色
- Vanilla JavaScript (ES Modules) - 零依賴、輕量快速
- CSS Custom Properties - 統一的設計 Tokens
- Mobile First - 手機優先設計
- XSS 防護 - 所有動態內容皆經轉義處理
- 安全標頭 - CSP、X-Frame-Options 等安全設定

## 技術棧

| 技術 | 用途 |
|------|------|
| HTML5 | 語義化標記 |
| CSS3 | 響應式設計、CSS Grid、Flexbox |
| JavaScript ES6+ | 模組化、SPA 路由 |
| Node.js | 靜態檔案伺服器 |
| Vite | 開發工具、打包優化 |

## 本地開發

```bash
# 複製專案
git clone https://github.com/ggk7015/class-website.git
cd class-website

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 或直接使用 Node.js
node server.js
```

瀏覽器開啟 `http://localhost:8888`

## 部署

### GitHub Pages (自動部署)

本專案已設定 GitHub Actions，推送到 `main` 分支後會自動部署至 GitHub Pages。

1. 前往 GitHub Repository Settings
2. 選擇 Pages
3. Source 選擇 "GitHub Actions"
4. 推送程式碼後自動部署

網址: `https://ggk7015.github.io/class-website/`

### Tailscale 部署

```bash
# 啟動伺服器
node server.js

# 透過 Tailscale 存取
# http://100.103.66.24:8888
```

## 專案結構

```
class-website/
├── index.html          # 主要 HTML 檔案
├── css/
│   └── style.css       # 完整樣式表
├── js/
│   ├── app.js          # 主要應用程式邏輯
│   └── config.js       # 資料配置
├── public/
│   └── manifest.json   # PWA 配置
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages 部署
├── server.js           # Node.js 靜態伺服器
├── package.json        # 專案配置
└── README.md           # 本檔案
```

## 設計系統

### 色彩
- Primary: `#2563eb` (皇家藍)
- Danger: `#ef4444` (緊急紅)
- Success: `#10b981` (啟用綠)
- Warning: `#f59e0b` (警告橘)

### 字體
- 主要: Noto Sans TC, Inter
- 備選: -apple-system, BlinkMacSystemFont, Segoe UI

### 間距
- 使用 CSS Custom Properties 統一管理
- 響應式斷點: 640px, 769px, 1025px, 1440px

## 更新日誌

### v1.0.0 (2026-09-01)
- ✅ 初版發布
- ✅ 6 大功能模組
- ✅ 響應式設計
- ✅ 全站搜尋功能
- ✅ PWA 支援
- ✅ GitHub Actions 自動部署

## 授權條款

MIT License

## 聯絡方式

- GitHub: [@ggk7015](https://github.com/ggk7015)
