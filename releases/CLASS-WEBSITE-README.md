# 資二丙班級 Portal

一個響應式班級資訊入口網站，提供課表、公告、線上辦公等功能。

## 功能特色

- **課表查詢** - 每日課表顯示、上下課時間
- **公告資訊** - 學校公告、班級通知
- **線上辦公** - 作業提交、文件查詢
- **PWA 支援** - 可安裝到手機主頁面
- **響應式設計** - 適應各種螢幕尺寸

## 技術棧

| 技術 | 說明 |
|------|------|
| HTML5 | 語義化標籤 |
| CSS3 | 響應式設計、CSS Grid、Flexbox |
| JavaScript ES6+ | 模組化、SPA 路由 |
| Node.js | 靜態檔案伺服器 |
| Vite | 開發工具、建構優化 |

## 快速開始

### 本機開發

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

### 線上部署

1. Fork 此專案
2. 啟用 GitHub Pages
3. 選擇 GitHub Actions 作為來源

## 下載

前往 [Releases](https://github.com/ggk7015/class-website/releases) 下載最新版本。

### 可用格式

| 格式 | 說明 | 下載 |
|------|------|------|
| HTML | 獨立網頁檔案 | [下載](https://github.com/ggk7015/class-website/releases/download/v1.0.0/class-website-html.zip) |
| Android | Android 專案 | [下載](https://github.com/ggk7015/class-website/releases/download/v1.0.0/android-project.zip) |
| IPK | OpenWrt 套件 | [下載](https://github.com/ggk7015/class-website/releases/download/v1.0.0/ipk-package.zip) |
| Source | 原始碼 | [下載](https://github.com/ggk7015/class-website/releases/download/v1.0.0/class-website-source.zip) |

## 建構 APK

### 方法 1：使用 Android Studio

1. 安裝 [Android Studio](https://developer.android.com/studio)
2. 建立新專案
3. 複製 `android-project/` 資料夾中的檔案
4. 使用 Build > Build APK 建構

### 方法 2：使用 Capacitor

```bash
# 安裝 Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# 初始化
npx cap init "Class2CPortal" "com.class2c.portal" --web-dir dist

# 新增 Android
npx cap add android

# 同步
npx cap sync

# 建構
cd android
./gradlew assembleDebug
```

### 方法 3：使用線上工具

使用 [WebIntoApp](https://www.webintoapp.com/) 或 [Gonative](https://gonative.io/) 線上轉換。

## IPK 安裝 (OpenWrt)

```bash
# 下載 IPK
wget https://github.com/ggk7015/class-website/releases/download/v1.0.0/class-website_1.0.0_all.ipk

# 安裝
opkg install class-website_1.0.0_all.ipk

# 存取
http://路由器IP:8080
```

## 檔案結構

```
class-website/
├── index.html          # 主要 HTML
├── css/
│   └── style.css       # 樣式表
├── js/
│   ├── app.js          # 主要邏輯
│   └── config.js       # 設定
├── public/
│   └── manifest.json   # PWA 設定
├── server.js           # Node.js 伺服器
├── package.json        # 專案設定
└── releases/
    ├── standalone/     # 獨立 HTML
    ├── android-project/ # Android 專案
    ├── ipk/            # IPK 套件
    └── source/         # 原始碼
```

## 自訂設定

### 修改課表

編輯 `js/config.js` 檔案中的課表資料。

### 更改主題

編輯 `css/style.css` 中的 CSS 變數。

### 新增功能

在 `js/app.js` 中新增模組。

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權條款

MIT License

## 相關連結

- [GitHub Repo](https://github.com/ggk7015/class-website)
- [線上展示](https://ggk7015.github.io/class-website)
- [問題回報](https://github.com/ggk7015/class-website/issues)
