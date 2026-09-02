# Cloudflare 1.1.1.1 DNS Configuration

## 概述

本指南說明如何將系統全域設定為使用 Cloudflare 1.1.1.1 DNS，以獲得最佳網路速度、安全性和隱私保護。

## DNS 伺服器位址

| 類型 | 主要 DNS | 備用 DNS |
|------|----------|----------|
| IPv4 | `1.1.1.1` | `1.0.0.1` |
| IPv6 | `2606:4700:4700::1111` | `2606:4700:4700::1001` |

## 安全等級

| 等級 | DNS 位址 | 說明 |
|------|----------|------|
| 標準 | `1.1.1.1` | 最快速度，無過濾 |
| 惡意軟體防護 | `1.1.1.2` | 阻擋惡意網站 |
| 家庭保護 | `1.1.1.3` | 阻擋惡意軟體 + 成人內容 |

## 功能特色

### 性能優化
- ✅ DNS over HTTPS (DoH)
- ✅ DNS over TLS (DoT)
- ✅ 自動 DoH 升級
- ✅ 優化的 DNS 快取
- ✅ TCP 自動調諧
- ✅ Chimney Offload
- ✅ RSS (Receive Side Scaling)

### 安全功能
- ✅ DNS 加密 (DoH/DoT)
- ✅ 惡意軟體防護
- ✅ 防火牆規則優化
- ✅ 隱私保護
- ✅ 零日漏洞防護

## 安裝方式

### Windows

1. 執行 `configure_cloudflare_dns.bat`
2. 執行 `cloudflare_security_optimize.bat`
3. 重啟電腦以套用所有設定

### 手動設定

```powershell
# 設定 DNS 伺服器
Set-DnsClientServerAddress -InterfaceIndex (Get-NetAdapter | Where-Object {$_.Status -eq "Up"}).ifIndex -ServerAddresses ("1.1.1.1", "1.0.0.1")

# 啟用 DNS over HTTPS
Set-DnsClientDohServerAddress -ServerAddress "1.1.1.1" -DohTemplate "https://cloudflare-dns.com/dns-query" -AllowFallbackToUdp $false -AutoUpgrade $true

# 清除 DNS 快取
Clear-DnsClientCache
```

## 驗證設定

### 測試 DNS 解析速度

```powershell
# 測試 Cloudflare DNS
Measure-Command { Resolve-DnsName -Name "google.com" -Type A }
```

### 檢查 DNS 設定

```powershell
# 查看所有介面的 DNS 設定
Get-DnsClientServerAddress | Where-Object { $_.ServerAddresses }

# 測試 DNS 解析
nslookup google.com 1.1.1.1
```

## 效能比較

| DNS 伺服器 | 解析時間 | 改善幅度 |
|------------|----------|----------|
| 預設 ISP DNS | ~133 ms | - |
| Cloudflare 1.1.1.1 | ~30-60 ms | **50-75% 更快** |

## 網路最佳化

### TCP 設定

```powershell
# 最佳化 TCP 設定
netsh int tcp set global autotuninglevel=normal
netsh int tcp set global chimney=enabled
netsh int tcp set global dca=enabled
netsh int tcp set global netdma=enabled
netsh int tcp set global ecncapability=disabled
netsh int tcp set global rss=enabled
```

### 防火牆規則

```powershell
# 允許 DNS 流量
netsh advfirewall firewall add rule name="Allow DNS (TCP)" dir=out action=allow protocol=tcp remoteport=53
netsh advfirewall firewall add rule name="Allow DNS (UDP)" dir=out action=allow protocol=udp remoteport=53
netsh advfirewall firewall add rule name="Allow DNS over HTTPS" dir=out action=allow protocol=tcp remoteport=443
```

## 疑難排解

### DNS 解析失敗

```powershell
# 重新設定 DNS
Set-DnsClientServerAddress -InterfaceIndex (Get-NetAdapter | Where-Object {$_.Status -eq "Up"}).ifIndex -ServerAddresses ("1.1.1.1", "1.0.0.1")

# 清除 DNS 快取
Clear-DnsClientCache

# 重啟 DNS 客戶端服務
Restart-Service Dnscache
```

### 連線速度慢

```powershell
# 重置 TCP/IP 堆疊
netsh int ip reset

# 重設 Winsock
netsh winsock reset

# 重啟電腦
Restart-Computer
```

## 相關資源

- [Cloudflare 1.1.1.1](https://1.1.1.1)
- [DNS over HTTPS](https://developers.cloudflare.com/1.1.1.1/dns-over-https/)
- [Cloudflare 安全功能](https://developers.cloudflare.com/1.1.1.1/)
- [GitHub Repo](https://github.com/ggk7015/class-website)

## 授權條款

MIT License
