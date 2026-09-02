# Cloudflare 1.1.1.1 DNS Auto-Configuration

## 概述

本系統會在每次開機時自動設定 Cloudflare 1.1.1.1 DNS，無論是否登入都會生效。

## 自動設定方式

### 1. 登入時自動執行

- **位置**: `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\`
- **檔案**: `Cloudflare DNS Configuration.lnk`
- **說明**: 每次登入 Windows 時自動執行

### 2. 登錄檔自動執行

- **位置**: `HKCU:\Software\Microsoft\Windows\CurrentVersion\Run`
- **名稱**: `CloudflareDNS`
- **說明**: 登入時自動執行 DNS 設定

### 3. 手動執行

- **腳本**: `%USERPROFILE%\cloudflare_dns_config.ps1`
- **批次**: `verify_cloudflare_dns.bat`

## 檔案結構

```
%USERPROFILE%\
├── cloudflare_dns_config.ps1      # 主要 DNS 設定腳本
├── cloudflare_dns_startup.ps1     # 啟動腳本
└── cloudflare_dns.log             # 執行日誌

%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\
└── Cloudflare DNS Configuration.lnk   # 啟動捷徑

HKCU:\Software\Microsoft\Windows\CurrentVersion\Run\
└── CloudflareDNS                  # 登錄檔自動執行
```

## DNS 伺服器

| 類型 | 主要 DNS | 備用 DNS |
|------|----------|----------|
| IPv4 | `1.1.1.1` | `1.0.0.1` |
| IPv6 | `2606:4700:4700::1111` | `2606:4700:4700::1001` |

## 功能特色

### 自動設定

- ✅ 每次開機自動設定
- ✅ 登入時自動執行
- ✅ 網路連線時自動更新
- ✅ 支援所有網路介面

### 安全功能

- ✅ DNS over HTTPS (DoH)
- ✅ DNS over TLS (DoT)
- ✅ 自動 DoH 升級
- ✅ DNS 加密

### 效能最佳化

- ✅ DNS 快取最佳化
- ✅ TCP 自動調諧
- ✅ 網路堆疊最佳化

## 驗證設定

### 檢查 DNS 設定

```powershell
# 查看所有介面的 DNS 設定
Get-DnsClientServerAddress | Where-Object { $_.ServerAddresses }

# 測試 DNS 解析
nslookup google.com 1.1.1.1
```

### 檢查自動設定

```powershell
# 檢查登錄檔
Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" -Name "CloudflareDNS"

# 檢查啟動捷徑
Get-ChildItem "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup" | Where-Object { $_.Name -like "*Cloudflare*" }
```

### 執行驗證腳本

```batch
verify_cloudflare_dns.bat
```

## 疑難排解

### DNS 未自動設定

```powershell
# 手動執行設定腳本
& "$env:USERPROFILE\cloudflare_dns_config.ps1"

# 檢查執行日誌
Get-Content "$env:USERPROFILE\cloudflare_dns.log"
```

### 移除自動設定

```powershell
# 移除登錄檔
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" -Name "CloudflareDNS"

# 移除啟動捷徑
Remove-Item "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup\Cloudflare DNS Configuration.lnk"
```

## 安全等級

| 等級 | DNS 位址 | 說明 |
|------|----------|------|
| 標準 | `1.1.1.1` | 最快速度，無過濾 |
| 惡意軟體防護 | `1.1.1.2` | 阻擋惡意網站 |
| 家庭保護 | `1.1.1.3` | 阻擋惡意軟體 + 成人內容 |

## 效能比較

| DNS 伺服器 | 解析時間 | 改善幅度 |
|------------|----------|----------|
| 預設 ISP DNS | ~133 ms | - |
| Cloudflare 1.1.1.1 | ~30-60 ms | **50-75% 更快** |

## 相關資源

- [Cloudflare 1.1.1.1](https://1.1.1.1)
- [DNS over HTTPS](https://developers.cloudflare.com/1.1.1.1/dns-over-https/)
- [Cloudflare 安全功能](https://developers.cloudflare.com/1.1.1.1/)
- [GitHub Repo](https://github.com/ggk7015/class-website)

## 授權條款

MIT License
