# RuView Releases

WiFi DensePose 系統預編譯版本和原始碼。

## 版本資訊

- **版本**: v0.3.2
- **構建日期**: 2026-09-02
- **遊戲版本**: Minecraft 26.2

## 可用檔案

### 預編譯版本

| 檔案 | 平台 | 大小 | 說明 |
|------|------|------|------|
| `binaries/wifi-densepose.exe` | Windows | ~4.6 MB | Windows 可執行檔案 |

### 原始碼

| 檔案 | 格式 | 大小 | 說明 |
|------|------|------|------|
| `source/ruview-v0.3.2-source.zip` | ZIP | ~47 MB | 完整原始碼壓縮檔 |
| `source/ruview-v0.3.2-source.tar.gz` | tar.gz | - | Linux/macOS 壓縮檔 (如有) |

## 使用方式

### Windows

1. 下載 `binaries/wifi-densepose.exe`
2. 放置到桌面或任意目錄
3. 執行程式

### 從原始碼構建

```bash
# 下載原始碼
unzip ruview-v0.3.2-source.zip
cd ruview

# 安裝 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 構建
cargo build --release

# 執行
./target/release/wifi-densepose
```

## 系統需求

- Windows 10/11 (x64)
- 或 Linux (x64)
- 或 macOS (x64/ARM64)

## 相關連結

- [GitHub Repo](https://github.com/ggk7015/class-website)
- [RuView 專案](https://github.com/ggk7015/RuView)

## 授權條款

MIT License
