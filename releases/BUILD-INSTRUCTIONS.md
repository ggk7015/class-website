# Class2C Portal - Build Instructions

## Standalone HTML

直接打開 class-website.html 即可使用。

## Android APK

### 方法 1：使用 Android Studio

1. 安裝 [Android Studio](https://developer.android.com/studio)
2. 建立新專案
3. 複製 ndroid/ 資料夾中的檔案
4. 複製 dist/ 資料夾到 pp/src/main/assets/public/
5. 使用 Build > Build APK 建構

### 方法 2：使用 Capacitor

`ash
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
`

### 方法 3：使用線上工具

使用 [WebIntoApp](https://www.webintoapp.com/) 或 [Gonative](https://gonative.io/) 線上轉換。

## IPK (OpenWrt)

`ash
# 建立 IPK 套件
mkdir -p package/class-website
cp -r dist/* package/class-website/
cp package.json package/class-website/

# 建立 control 文件
mkdir -p package/class-website/CONTROL
cat > package/class-website/CONTROL/control << EOF
Package: class-website
Version: 1.0.0
Depends: uhttpd
Architecture: all
Description: Class2C Portal Website
EOF

# 建立 IPK
cd package
tar czf ../class-website_1.0.0_all.tar.gz class-website
opkg-build .
`

## 源碼

下載 class-website-source.zip 取得完整源碼。
