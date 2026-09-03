(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const i of d)if(i.type==="childList")for(const e of i.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function r(d){const i={};return d.integrity&&(i.integrity=d.integrity),d.referrerPolicy&&(i.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?i.credentials="include":d.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(d){if(d.ep)return;d.ep=!0;const i=r(d);fetch(d.href,i)}})();const w={siteName:"資二丙班級資訊站",siteSubtitle:"班級公告、學習與生活資訊",classBadge:"資二丙班",logoIcon:"🏫",leaveUrl:"",schoolCalendarUrl:"https://www.ymsh.hcc.edu.tw/ischool/rfile/41a4a72b41dc498a3c74d5eb8d8784c6",lineOfficialNotice:"如有緊急事項，請透過班級 LINE 官方帳號與導師聯繫。"},D={scienceVolunteer2026:{id:"act-science-volunteer-2026",title:"2026 新竹縣科普博覽會青年志工招募",category:"志工服務",eventDate:"2026/10/17（六）～ 10/18（日）",target:"全校同學（對志工服務有興趣者）",url:"https://www.surveycake.com/s/VAP3M",status:"open",announcementContent:`有興趣參加志工服務的同學，可以參考以下活動：

🚀 活動：2026 新竹縣科普博覽會
📅 日期：10/17（六）～10/18（日）
📍 地點：新竹縣體育館

🙋 服務內容：
擔任闖關遊戲關主，協助遊戲解說、帶領民眾闖關及蓋章。

⏰ 服務時段：
• 10:00–12:00
• 12:00–14:00
• 14:00–17:00

🎁 志工服務時數：
全程參與可取得「志工服務時數證明」。

有興趣的同學請自行閱讀活動及報名相關規定，確認符合資格後再報名。`,registrationSummary:`📅 活動日期：2026/10/17（六）～ 10/18（日）
📍 地點：新竹縣體育館
🙋 服務內容：擔任闖關遊戲關主，協助遊戲解說、帶領民眾闖關及蓋章。
⏰ 服務時段：10:00–12:00 / 12:00–14:00 / 14:00–17:00
🎁 全程參與可取得「志工服務時數證明」。`}},S=[{id:"ann-008",date:"2026/08/31",category:"重要提醒",title:"8/31 開學日重要時程提醒",content:`8/31 開學，當日重要時程如下：

• 08:10–08:30 ｜ 開學典禮
• 領取學期成績單
• 10:10 ｜ 正式上課
• 16:00 ｜ 放學

請同學留意當日各項時程，並依學校規定準時到校及上課。`,isImportant:!0,customTag:"📅 8/31 開學",requireSignature:!1,requirePayment:!1,deadlineDate:"",externalUrl:""},{id:"ann-007",date:"2026/08/25",category:"活動報名",title:D.scienceVolunteer2026.title,content:D.scienceVolunteer2026.announcementContent,eventEndDate:"2026-10-18",isImportant:!1,customTag:"🙋 志工招募",requireRegistration:!0,requireSignature:!1,requirePayment:!1,deadlineDate:"",externalUrl:D.scienceVolunteer2026.url,btnLabel:"👉 前往報名"},{id:"ann-003",date:"2026/08/25",category:"網站公告",title:"新學期資二丙班級資訊站正式上線",content:`歡迎家長與同學使用資二丙班級資訊站！

本站提供簡單、快速的班級最新公告、宣導事項、重要規定、報名專區與課表日程查詢。

【LINE 使用小提醒】
若從 LINE 官方帳號點擊連結後無法正常開啟，請點選右下角「⋯」，再選擇「以預設瀏覽器開啟」。`,isImportant:!1,requireSignature:!1,requirePayment:!1,deadlineDate:"",externalUrl:""}],N=[{id:"guide-1",title:"校園安全",icon:"🛡️",summary:"落實課間安全規範，遇緊急情況立即通知導師或校警室。",details:["校園內請勿奔跑追逐，上下樓梯請靠右行走並握緊扶手。","發現校園設施破損或異常人員進入，請立即回報總務處或導師。","遵守各專科教室（實驗室、電腦教室）安全衛生管理守則。"]},{id:"guide-2",title:"交通安全與校車規範",icon:"🚦",summary:"搭乘校車、公車、家長接送或步行通學之安全守則。",details:["家長汽機車接送請於指定接送區停靠，騎乘機車學生與家長皆須佩戴安全帽。","搭乘校車同學請依序排隊上車，車輛行駛中請全程繫妥安全帶並禁止嬉戲。","步行過馬路請走斑馬線，遵循交通號誌，切勿邊走邊看手機。"]},{id:"guide-3",title:"網路安全與資安防護",icon:"🌐",summary:"保護個人數位隱私，建立良好網路社交禮儀與帳號安全。",details:["切勿在網路或社群平台公開個人身分證字號、地址及密碼等敏感資料。","尊重他人智慧財產權與個人隱私，未經同意不得散布他人照片或影片。","合理控制每日使用手機與 3C 產品時間，避免影響視力與日常作息。"]},{id:"guide-4",title:"反詐騙專區",icon:"⚠️",summary:"提高警覺！不輕信不明訊息，謹記防詐騙三步驟：聽、掛、查證。",details:["如接到自稱學校老師、檢警或網購客服電話要求匯款，100% 是詐騙。","請勿點擊不明簡訊中的微縮網址或 LINE 私訊抽獎連結。","遇疑似詐騙情形，請立即撥打 165 反詐騙專線或與導師聯繫。"]},{id:"guide-5",title:"健康教育與衛生防護",icon:"🩺",summary:"預防傳染病、落實個人衛生習慣與規律作息。",details:["勤洗手、注意個人呼吸道衛生，生病請佩戴口罩並落實在家休息。","每日補充充足水分，少喝含糖飲料，養成規律作息與適度運動。","落實資源回收與垃圾分類（環保愛地球）。"]},{id:"guide-6",title:"環保與校園清潔宣導",icon:"♻️",summary:"落實資源回收、減塑生活與每日打掃工作。",details:["一般垃圾與資源回收（鐵鋁罐、寶特瓶、紙類）請確實分類。","鼓勵自行攜帶餐具與水壺，減少使用一次性餐具。","打掃時間請認真落實負責區域衛生整潔。"]}],M=[{id:"rule-1",title:"學生獎懲要點",icon:"🏆",summary:"學生獎勵、懲處及相關規定",url:"https://www.ymsh.hcc.edu.tw/ischool/rfile/ac31f21a2bfd50c7279377bcb589ce90"},{id:"rule-2",title:"學生服儀規定",icon:"👔",summary:"學生服裝與儀容相關規範",url:"https://www.ymsh.hcc.edu.tw/resource/openfid.php?id=60323"},{id:"rule-3",title:"學生請假辦法",icon:"📝",summary:"學生請假程序與相關規定",url:"https://www.ymsh.hcc.edu.tw/resource/openfid.php?id=60830"},{id:"rule-4",title:"考試相關規定",icon:"📝",items:["考場與考試規則","考試規定施行細則","學生考試期間請假暨缺考補考辦法"],url:"https://www.ymsh.hcc.edu.tw/ischool/resources/WID_57_1_dde47bdd9b4b33cb9b7213b8fd73d6edd8146eaa/CLS_57_1_2e445bdc715dcbe5d4f6cca5bc59d0b19db3eade/844ed10be236167c71945e25c361c07e.pdf"}],H=[{id:D.scienceVolunteer2026.id,title:D.scienceVolunteer2026.title,category:D.scienceVolunteer2026.category,period:D.scienceVolunteer2026.eventDate,deadline:"",eventEndDate:"2026-10-18",target:D.scienceVolunteer2026.target,summary:D.scienceVolunteer2026.registrationSummary,url:D.scienceVolunteer2026.url,status:D.scienceVolunteer2026.status,btnLabel:"👉 前往報名"}],C={periodsInfo:[{period:1,time:"08:15 - 09:00"},{period:2,time:"09:10 - 09:55"},{period:3,time:"10:10 - 10:55"},{period:4,time:"11:05 - 11:50"},{period:"lunch",time:"11:50 - 13:10",label:"🍱 午餐與午休"},{period:5,time:"13:15 - 14:00"},{period:6,time:"14:10 - 14:55"},{period:7,time:"15:05 - 15:50"}],classSchedule:{1:{dayName:"星期一",lessons:[{period:1,subject:"美術"},{period:2,subject:"國語文"},{period:3,subject:"經濟學"},{period:4,subject:"體育"},{period:5,subject:"多媒體製作與應用"},{period:6,subject:"多媒體製作與應用"},{period:7,subject:"多媒體製作與應用"}]},2:{dayName:"星期二",lessons:[{period:1,subject:"班會"},{period:2,subject:"彈性學習時間"},{period:3,subject:"多元選修"},{period:4,subject:"多元選修"},{period:5,subject:"經濟學"},{period:6,subject:"數學"},{period:7,subject:"應用數學"}]},3:{dayName:"星期三",lessons:[{period:1,subject:"英語文"},{period:2,subject:"數學"},{period:3,subject:"數位科技應用"},{period:4,subject:"數位科技應用"},{period:5,subject:"綜合活動"},{period:6,subject:"綜合活動"},{period:7,subject:"財務報表分析"}]},4:{dayName:"星期四",lessons:[{period:1,subject:"應用數學"},{period:2,subject:"化學"},{period:3,subject:"國語文學概論"},{period:4,subject:"經濟學"},{period:5,subject:"健康與護理"},{period:6,subject:"會計學"},{period:7,subject:"財務報表分析"}]},5:{dayName:"星期五",lessons:[{period:1,subject:"國語文"},{period:2,subject:"國語文"},{period:3,subject:"英語文"},{period:4,subject:"體育"},{period:5,subject:"經濟學"},{period:6,subject:"生活英語會話"},{period:7,subject:"會計學"}]}},teacherSchedule:{1:{dayName:"星期一",lessons:[{period:2,subject:"數學",targetClass:"九年六班"},{period:3,subject:"數學",targetClass:"七年四班"},{period:6,subject:"數學演習",targetClass:"資一乙"},{period:7,subject:"數學",targetClass:"九年七班"}]},2:{dayName:"星期二",lessons:[{period:1,subject:"班會",targetClass:"資二丙"},{period:2,subject:"數學",targetClass:"七年四班"},{period:3,subject:"數學",targetClass:"九年六班"},{period:5,subject:"數學演習",targetClass:"資一乙"},{period:6,subject:"數學",targetClass:"資二丙"},{period:7,subject:"應用數學",targetClass:"資二丙"}]},3:{dayName:"星期三",lessons:[{period:1,subject:"數學",targetClass:"九年六班"},{period:2,subject:"數學",targetClass:"資二丙"},{period:3,subject:"健康教育",targetClass:"九年七班"},{period:4,subject:"數學",targetClass:"九年七班"},{period:7,subject:"數學",targetClass:"資一乙"}]},4:{dayName:"星期四",lessons:[{period:1,subject:"應用數學",targetClass:"資二丙"},{period:2,subject:"數學",targetClass:"九年七班"},{period:3,subject:"數學",targetClass:"七年四班"},{period:4,subject:"數學",targetClass:"廣技一丙"},{period:5,subject:"健康與護理",targetClass:"資二丙"},{period:6,subject:"健康教育",targetClass:"九年六班"}]},5:{dayName:"星期五",lessons:[{period:1,subject:"數學",targetClass:"廣技一丙"},{period:2,subject:"數學",targetClass:"資一乙"},{period:3,subject:"數學",targetClass:"七年四班"},{period:4,subject:"數學",targetClass:"九年七班"},{period:5,subject:"社團"},{period:6,subject:"社團"},{period:7,subject:"數學",targetClass:"九年六班"}]}}},$={categories:{all:{label:"全部",icon:"🗓️"},exam:{label:"段考",icon:"📝"},homework:{label:"作業抽查",icon:"📚"},club:{label:"社團",icon:"👥"},assessment:{label:"測驗與檢定",icon:"🏅"}},timeline:[{id:"evt-ass-4",title:"115年度全國技術士技能檢定報名",category:"assessment",subtype:"registration",startDate:"2026-09-04",dateDisplay:"09/04 (五)",description:"115年度全國技術士技能檢定報名",isImportant:!1},{id:"evt-club-1",title:"社團活動",category:"club",startDate:"2026-09-16",dateDisplay:"09/16 (三)",description:"本學期第 1 次社團活動",isImportant:!1},{id:"evt-club-2",title:"社團活動",category:"club",startDate:"2026-09-23",dateDisplay:"09/23 (三)",description:"本學期第 2 次社團活動",isImportant:!1},{id:"evt-club-3",title:"社團活動",category:"club",startDate:"2026-10-07",dateDisplay:"10/07 (三)",description:"本學期第 3 次社團活動",isImportant:!1},{id:"evt-exam-1",title:"第一次段考",category:"exam",startDate:"2026-10-13",endDate:"2026-10-14",dateDisplay:"10/13 (二) ～ 10/14 (三)",description:"第一學期第一次定期考查",isImportant:!0},{id:"evt-ass-1",title:"數學競試",category:"assessment",subtype:"test",startDate:"2026-10-20",dateDisplay:"10/20 (二)",description:"適用高中職一、二年級數學競試",isImportant:!1},{id:"evt-club-4",title:"社團活動",category:"club",startDate:"2026-10-21",dateDisplay:"10/21 (三)",description:"本學期第 4 次社團活動",isImportant:!1},{id:"evt-club-5",title:"社團活動",category:"club",startDate:"2026-10-28",dateDisplay:"10/28 (三)",description:"本學期第 5 次社團活動",isImportant:!1},{id:"evt-hw-1",title:"期中作業抽查",category:"homework",startDate:"2026-10-28",endDate:"2026-10-29",dateDisplay:"10/28 (三) ～ 10/29 (四)",description:"期中各科習作與隨堂講義抽查",isImportant:!1},{id:"evt-ass-5",title:"TQC檢定報名",category:"assessment",subtype:"registration",startDate:"2026-11-02",endDate:"2026-11-06",dateDisplay:"11/02 (一) ～ 11/06 (五)",description:"TQC檢定報名",isImportant:!1},{id:"evt-club-6",title:"社團活動",category:"club",startDate:"2026-11-04",dateDisplay:"11/04 (三)",description:"本學期第 6 次社團活動",isImportant:!1},{id:"evt-ass-6",title:"全國第3梯次技術士技能檢定－學科測驗",category:"assessment",subtype:"certification",startDate:"2026-11-08",dateDisplay:"11/08 (日)",description:"全國第3梯次技術士技能檢定－學科測驗",isImportant:!1},{id:"evt-club-7",title:"社團活動",category:"club",startDate:"2026-11-25",dateDisplay:"11/25 (三)",description:"本學期第 7 次社團活動",isImportant:!1},{id:"evt-exam-2",title:"第二次段考",category:"exam",startDate:"2026-11-26",endDate:"2026-11-27",dateDisplay:"11/26 (四) ～ 11/27 (五)",description:"第一學期第二次定期考查",isImportant:!0},{id:"evt-club-8",title:"社團活動",category:"club",startDate:"2026-12-09",dateDisplay:"12/09 (三)",description:"本學期第 8 次社團活動",isImportant:!1},{id:"evt-ass-2",title:"高中職一、二年級英語單字認證比賽",category:"assessment",subtype:"recognition",startDate:"2026-12-15",dateDisplay:"12/15 (二)",description:"高中職一、二年級英語單字認證比賽",isImportant:!1},{id:"evt-ass-3",title:"TQC檢定",category:"assessment",subtype:"certification",startDate:"2026-12-21",endDate:"2026-12-28",dateDisplay:"12/21 (一) ～ 12/28 (一)",description:"TQC 資訊技能認證正式檢定",isImportant:!1},{id:"evt-hw-2",title:"期末作業抽查",category:"homework",startDate:"2026-12-22",endDate:"2026-12-23",dateDisplay:"12/22 (二) ～ 12/23 (三)",description:"期末各科作業學習單抽查",isImportant:!1},{id:"evt-ass-7",title:"全國技術士術科測驗",category:"assessment",subtype:"certification",startDate:"2027-01-04",endDate:"2027-01-15",dateDisplay:"01/04 (一) ～ 01/15 (五)",description:"電腦軟體應用乙級、印前製程圖文組版丙級",isImportant:!1},{id:"evt-exam-3",title:"第三次段考",category:"exam",startDate:"2027-01-18",endDate:"2027-01-20",dateDisplay:"01/18 (一) ～ 01/20 (三)",description:"第一學期期末考查與成績結算",isImportant:!0}]},V=[{id:"faq-1",question:"Q1：如何聯絡導師？",answer:"請透過班級 LINE 官方帳號私訊聯絡。"},{id:"faq-2",question:"Q2：如何進行學生請假？",answer:"請點擊首頁下方快速功能「請假說明」查看相關資料與重要提醒。線上請假入口尚未開放，請依學校現行規定辦理。"},{id:"faq-3",question:"Q3：如何查看班級最新公告與重要通知？",answer:"請進入首頁的「📢 最新公告」卡片。標示 🔴 重要、家長簽名或繳費標籤之通知請優先處理。"},{id:"faq-4",question:"Q4：LINE 裡面的連結打不開怎麼辦？",answer:"若從 LINE 點擊連結後無法正常顯示或輸入，請點擊 LINE 頁面右下角的「⋯」（更多選項），選擇「以預設瀏覽器開啟」（例如 Safari 或 Chrome）。"}];let q="class";function T(){const t=new Date,n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${a}`}function P(t,n){if(!t)return!1;const r=String(t).trim().replaceAll("/","-");return!!r&&n>r}function Q(t,n,r){if(String(t||"").trim()||!n)return!1;const a=String(n).trim().replaceAll("/","-");return!!a&&r>a}function j(t,n){if(!t)return!1;const r=String(t).trim().replaceAll("/","-");return!!r&&n>r}function R(t,n){const r=String(t||"").trim().replaceAll("/","-"),a=/^(\d{4})-(\d{2})-(\d{2})$/.exec(r);if(!a)return"";const d=Number(a[1]),i=Number(a[2]),e=Number(a[3]),u=new Date(d,i-1,e);if(u.getFullYear()!==d||u.getMonth()!==i-1||u.getDate()!==e)return"";u.setDate(u.getDate()+n);const y=u.getFullYear(),c=String(u.getMonth()+1).padStart(2,"0"),l=String(u.getDate()).padStart(2,"0");return`${y}-${c}-${l}`}function k(t,n){if(String(t.expireDate||"").trim())return j(t.expireDate,n);if(String(t.eventEndDate||"").trim())return j(t.eventEndDate,n);const r=t.publishDate||t.date,a=R(r,6);return j(a,n)}document.addEventListener("DOMContentLoaded",()=>{U(),O(),Z(),_(),F(),G(),Y(),z(),W(),J(),X()});function U(){document.getElementById("site-logo-icon").textContent=w.logoIcon,document.getElementById("site-class-badge").textContent=w.classBadge,document.getElementById("site-title-text").textContent=w.siteName,document.getElementById("site-subtitle-text").textContent=w.siteSubtitle,document.getElementById("home-teacher-notice").textContent=w.lineOfficialNotice,document.getElementById("footer-site-name").textContent=w.siteName}function O(){const t=document.getElementById("header-home-content"),n=document.getElementById("header-subpage-content"),r=document.getElementById("subpage-title-text"),a=document.getElementById("btn-back"),d=document.querySelectorAll(".feature-card, .quick-btn"),i=document.querySelectorAll(".page-view"),e={"view-announcements":"最新公告","view-guidelines":"宣導事項","view-rules":"重要規定","view-registrations":"線上辦理","view-timetable":"課表查詢","view-events":"重要日程","view-leave":"請假說明","view-faq":"常見問題 FAQ"};function u(c,l=!0){i.forEach(h=>{h.id===c?(h.classList.remove("hidden"),h.classList.add("view-active")):(h.classList.add("hidden"),h.classList.remove("view-active"))}),c==="view-home"?(t.classList.remove("hidden"),n.classList.add("hidden"),l&&history.pushState({view:"view-home"},"","#")):(t.classList.add("hidden"),n.classList.remove("hidden"),r.textContent=e[c]||"詳細資訊",l&&history.pushState({view:c},"",`#${c}`)),window.scrollTo({top:0,behavior:"smooth"});const s=document.querySelector(".app-container");s&&(s.scrollTop=0)}d.forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-target-view");l&&u(l)})}),a.addEventListener("click",()=>{u("view-home")}),window.addEventListener("popstate",c=>{if(c.state&&c.state.view)u(c.state.view,!1);else{const l=window.location.hash.replace("#","");l&&e[l]?u(l,!1):u("view-home",!1)}});const y=window.location.hash.replace("#","");y&&e[y]&&u(y,!1)}function _(){const t=document.getElementById("announcements-list"),n=document.getElementById("announcements-history-list"),r=document.getElementById("ann-history-toggle");if(!t||!n)return;t.innerHTML="",n.innerHTML="";const a=T(),d=S.filter(e=>!k(e,a));let i=d.findIndex(e=>e.isImportant);i===-1&&(i=0),d.forEach((e,u)=>{const y=u===i;let c="",l=!1;e.isImportant&&(c+='<span class="tag-badge tag-important">🔴 重要</span>',l=!0),e.customTag&&(c+=`<span class="tag-badge tag-category">${m(e.customTag)}</span>`,l=!0),e.requireSignature&&(c+='<span class="tag-badge tag-signature">✍️ 家長簽名</span>',l=!0),e.requirePayment&&(c+='<span class="tag-badge tag-payment">💳 繳費</span>',l=!0),e.requireRegistration&&(c+='<span class="tag-badge tag-payment" style="background-color: #0284c7;">📝 開放報名</span>',l=!0),e.deadlineDate&&(c+=`<span class="tag-badge tag-deadline">📅 ${m(e.deadlineDate)} 前</span>`,l=!0),!l&&e.category&&(c+=`<span class="tag-badge tag-category">${m(e.category)}</span>`);const s=e.date.length>5?e.date.substring(5):e.date,h=document.createElement("article");h.className=`announcement-card ${e.isImportant?"is-important":""} ${y?"is-expanded":""}`;const L=e.btnLabel||"查看相關資料 / 連結 →";h.innerHTML=`
      <!-- 收合摘要列 (整張卡片皆可點擊) -->
      <div class="ann-summary-header" aria-expanded="${y}">
        <div class="ann-meta-row">
          <span class="ann-date">${m(s)}</span>
          <div class="ann-action-tags">${c}</div>
        </div>
        <div class="ann-title-row">
          <h3 class="ann-title">${m(e.title)}</h3>
          <span class="ann-toggle-chevron">⌄</span>
        </div>
      </div>

      <!-- 展開詳細內容內頁 -->
      <div class="ann-expanded-body">
        <div class="ann-full-content">${m(e.content)}</div>

        ${e.deadlineDate?`
          <div class="ann-deadline-info">
            📅 截止日期：${m(e.deadlineDate)}
          </div>
        `:""}

        ${e.externalUrl?`
          <div class="ann-external-link">
            <a href="${e.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn-inline-link">
              <span>${m(L)}</span>
            </a>
          </div>
        `:""}

        <div class="ann-collapse-footer">
          <button class="btn-collapse-ann" aria-label="收起公告">
            <span>⌃ 收起</span>
          </button>
        </div>
      </div>
    `;const o=h.querySelector(".ann-summary-header");o.addEventListener("click",()=>{const f=h.classList.contains("is-expanded");document.querySelectorAll(".announcement-card").forEach(v=>{v.classList.remove("is-expanded");const b=v.querySelector(".ann-summary-header");b&&b.setAttribute("aria-expanded","false")}),f||(h.classList.add("is-expanded"),o.setAttribute("aria-expanded","true"))});const p=h.querySelector(".btn-collapse-ann");p&&p.addEventListener("click",f=>{f.stopPropagation(),h.classList.remove("is-expanded"),o.setAttribute("aria-expanded","false")});const g=h.querySelector(".btn-inline-link");g&&g.addEventListener("click",f=>{f.stopPropagation()}),t.appendChild(h)}),S.filter(e=>k(e,a)).forEach(e=>{const u=document.createElement("div");u.className="ann-history-row";const y=e.date.length>5?e.date.substring(5):e.date;u.innerHTML=`
        <span class="ann-history-date">${m(y)}</span>
        <span class="ann-history-title">${m(e.title)}</span>
      `,n.appendChild(u)}),r&&!r.dataset.bound&&(r.addEventListener("click",()=>{const e=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!e)),n.hidden=e;const u=r.querySelector(".ann-history-chevron");u&&(u.textContent=e?"⌄":"⌃")}),r.dataset.bound="true")}function F(){const t=document.getElementById("guidelines-container");t&&(t.innerHTML="",N.forEach((n,r)=>{const a=document.createElement("div");a.className="guide-card",r===0&&a.classList.add("expanded");const d=n.details.map(i=>`<li>${m(i)}</li>`).join("");a.innerHTML=`
      <div class="guide-card-header">
        <div class="guide-header-left">
          <span class="guide-icon">${n.icon}</span>
          <div class="guide-title-box">
            <h3 class="guide-title">${m(n.title)}</h3>
            <span class="guide-summary">${m(n.summary)}</span>
          </div>
        </div>
        <div class="guide-toggle-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>
      <div class="guide-card-body">
        <ul class="guide-detail-list">${d}</ul>
      </div>
    `,a.querySelector(".guide-card-header").addEventListener("click",()=>{a.classList.toggle("expanded")}),t.appendChild(a)}))}function G(){const t=document.getElementById("rules-container");t&&(t.innerHTML="",M.forEach(n=>{const r=document.createElement("a");r.className="rule-link-card",r.href=n.url,r.target="_blank",r.rel="noopener noreferrer",r.innerHTML=`
      <span class="rule-link-icon" aria-hidden="true">${n.icon}</span>
      <div class="rule-link-content">
        <h3 class="rule-link-title">${m(n.title)}</h3>
        ${n.items?`
          <ul class="rule-link-items">
            ${n.items.map(a=>`<li>${m(a)}</li>`).join("")}
          </ul>
        `:`<p class="rule-link-summary">${m(n.summary)}</p>`}
      </div>
      <span class="rule-link-action">
        查看正式規定 <span aria-hidden="true">→</span>
      </span>
    `,t.appendChild(r)}))}function Y(){const t=document.getElementById("reg-list-urgent"),n=document.getElementById("reg-list-open"),r=document.getElementById("reg-list-closed"),a=document.getElementById("reg-history-toggle");if(!t||!n||!r)return;t.innerHTML="",n.innerHTML="",r.innerHTML="";const d=T();H.forEach(i=>{if(i.status==="closed"||P(i.deadline,d)||Q(i.deadline,i.eventEndDate,d)){const l=document.createElement("div");l.className="reg-history-row";const s=i.period.replace(/\d{4}\//g,"").replace(/\s*～\s*/g,"–");l.innerHTML=`
        <span class="reg-history-date">${m(s)}</span>
        <span class="reg-history-title">${m(i.title)}</span>
      `,r.appendChild(l);return}const u=document.createElement("div");u.className=`reg-card status-${i.status}`;let y="開放報名中";i.status==="urgent"&&(y="🔥 即將截止"),i.status==="closed"&&(y="已截止");const c=i.btnLabel||"前往報名 →";u.innerHTML=`
      <div class="reg-card-header">
        <span class="reg-category-pill">${m(i.category)}</span>
        <span class="reg-status-badge">${y}</span>
      </div>
      <h4 class="reg-card-title">${m(i.title)}</h4>
      <div class="reg-meta-row">
        <span>🗓️ 報名/活動期間：${m(i.period)}</span>
        <span>🎯 對象：${m(i.target)}</span>
      </div>
      <p class="reg-summary">${m(i.summary)}</p>
      ${i.url&&i.status!=="closed"?`
        <div class="reg-action-link">
          <a href="${i.url}" target="_blank" rel="noopener noreferrer" class="btn-reg-apply">
            <span>${m(c)}</span>
          </a>
        </div>
      `:""}
    `,i.status==="urgent"?t.appendChild(u):i.status==="open"?n.appendChild(u):r.appendChild(u)}),t.children.length===0&&(t.innerHTML='<p class="action-hint">目前無即將截止項目</p>'),a&&!a.dataset.bound&&(a.addEventListener("click",()=>{const i=a.getAttribute("aria-expanded")==="true";a.setAttribute("aria-expanded",String(!i)),r.hidden=i;const e=a.querySelector(".reg-history-chevron");e&&(e.textContent=i?"⌄":"⌃")}),a.dataset.bound="true")}function z(){const t=document.getElementById("btn-mode-class"),n=document.getElementById("btn-mode-teacher"),r=document.getElementById("mode-desc-box"),a=document.getElementById("day-tabs-bar"),d=document.getElementById("current-day-title"),i=document.getElementById("today-indicator"),e=document.getElementById("timetable-lessons-list");if(!a||!e)return;const u=new Date().getDay();let y=u>=1&&u<=5?u:1;function c(l,s){q=s,s==="class"?(t.classList.add("active"),n.classList.remove("active"),r.innerHTML="<span>資二丙每週課表（點選星期切換）</span>"):(t.classList.remove("active"),n.classList.add("active"),r.innerHTML="<span>導師每週授課課表（點選星期切換）</span>"),document.querySelectorAll(".day-tab").forEach(o=>{const p=parseInt(o.getAttribute("data-day"),10);o.classList.toggle("active",p===l)});const h={1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五"};d.textContent=`${h[l]} ${s==="class"?"資二丙課表":"導師課表"}`,i.style.display=l===u?"inline-block":"none",e.innerHTML="";const L=C.periodsInfo;if(s==="class"){const o=C.classSchedule[l];if(!o)return;L.forEach(p=>{if(p.period==="lunch"){const g=document.createElement("div");g.className="lesson-card break-card",g.innerHTML=`<span class="break-text">${p.label}</span>`,e.appendChild(g)}else{const g=o.lessons.find(f=>f.period===p.period);if(g){const f=document.createElement("div");f.className="lesson-card",f.innerHTML=`
              <div class="lesson-left">
                <div class="period-badge">${g.period}</div>
                <div class="lesson-info">
                  <span class="subject-name">${m(g.subject)}</span>
                </div>
              </div>
            `,e.appendChild(f)}}})}else{const o=C.teacherSchedule[l];if(!o)return;L.filter(p=>typeof p.period=="number"&&p.period<=7).forEach(p=>{const g=o.lessons.find(v=>v.period===p.period),f=document.createElement("div");if(f.className="lesson-card",g){const v=g.targetClass?`${m(g.subject)}｜${m(g.targetClass)}`:m(g.subject);f.innerHTML=`
              <div class="lesson-left">
                <div class="period-badge">${g.period}</div>
                <div class="lesson-info">
                  <span class="subject-name">${v}</span>
                  <span class="time-range">${p.time}</span>
                </div>
              </div>
            `}else f.innerHTML=`
              <div class="lesson-left">
                <div class="period-badge">${p.period}</div>
                <div class="lesson-info"></div>
              </div>
            `;e.appendChild(f)})}}t.addEventListener("click",()=>{const l=document.querySelector(".day-tab.active"),s=l?parseInt(l.getAttribute("data-day"),10):y;c(s,"class")}),n.addEventListener("click",()=>{const l=document.querySelector(".day-tab.active"),s=l?parseInt(l.getAttribute("data-day"),10):y;c(s,"teacher")}),a.addEventListener("click",l=>{const s=l.target.closest(".day-tab");if(s){const h=parseInt(s.getAttribute("data-day"),10);c(h,q)}}),c(y,"class")}function W(){const t=document.getElementById("next-event-title"),n=document.getElementById("next-event-date"),r=document.getElementById("next-event-note"),a=document.getElementById("events-month-groups"),d=document.getElementById("events-filter-bar"),i=document.getElementById("btn-school-calendar");i&&w.schoolCalendarUrl&&i.setAttribute("href",w.schoolCalendarUrl);const e=$.timeline||[],u={registration:{icon:"📋",label:"報名"},test:{icon:"🏅",label:"測驗"},certification:{icon:"🏅",label:"檢定"},recognition:{icon:"🏅",label:"認證"}},y=T();let c=e.find(o=>o.startDate>=y&&o.isImportant);if(c||(c=e.find(o=>o.startDate>=y)),!c&&e.length>0&&(c=e[e.length-1]),c){const o=$.categories[c.category]||{label:"日程"};t&&(t.textContent=c.title),n&&(n.textContent=`📅 ${c.dateDisplay||c.startDate}`),r&&(r.textContent=c.description||`類別：${o.label}`)}if(!a)return;function l(o){const p=$.categories[o.category]||{label:"日程",icon:"🗓️"},g=o.category==="assessment"&&u[o.subtype]?u[o.subtype]:p;return o.category==="exam"||o.category==="homework"||o.category==="assessment"?`
        <div class="event-item-level-a ${`cat-${o.category}`}">
          <div class="item-level-a-top">
            <span class="item-level-a-date">📅 ${m(o.dateDisplay)}</span>
            <span class="tag-badge-sm tag-cat-${o.category}">${g.icon} ${m(g.label)}</span>
          </div>
          <h4 class="item-level-a-title">${m(o.title)}</h4>
        </div>
      `:`
        <div class="event-item-level-c">
          <span class="item-level-c-text">
            <span>📅 ${m(o.dateDisplay)}</span>
            <span class="tag-badge-sm tag-cat-club">👥 社團</span>
            <span>${m(o.description||o.title)}</span>
          </span>
        </div>
      `}function s(o){if(o.length===0)return'<p class="action-hint" style="text-align:center; padding: 1rem;">此分類目前尚無日程資料</p>';const p={},g=[];o.forEach(v=>{p[v.startDate]||(p[v.startDate]=[],g.push(v.startDate)),p[v.startDate].push(v)});let f="";return g.forEach(v=>{const b=p[v];if(b.length===1)f+=l(b[0]);else{const E=b[0].dateDisplay,I=b.map(x=>l(x)).join("");f+=`
          <div class="day-group-box">
            <div class="day-group-date-header">📅 ${m(E)}</div>
            <div class="day-group-items">${I}</div>
          </div>
        `}}),f}function h(o){if(o.length===0)return"";const p=o.find(f=>(f.endDate||f.startDate)>=y),g=o[o.length-1];return(p||g).startDate.slice(0,7)}function L(o){d&&d.querySelectorAll(".filter-chip").forEach(b=>{b.classList.toggle("active",b.getAttribute("data-category")===o)});const p=e.filter(b=>o==="all"?!0:b.category===o).slice().sort((b,E)=>b.startDate.localeCompare(E.startDate));if(p.length===0){a.innerHTML='<p class="action-hint events-empty-state">此分類目前尚無日程資料</p>';return}if(o!=="all"){a.innerHTML=s(p);return}const g={};p.forEach(b=>{const E=b.startDate.slice(0,7);g[E]||(g[E]=[]),g[E].push(b)});const f=Object.keys(g).sort((b,E)=>b.localeCompare(E)),v=h(p);a.innerHTML=f.map(b=>{const E=g[b],I=Number(b.slice(5,7)),x=b===v,B=`events-month-panel-${b}`;return`
        <section class="event-month-group" data-month-key="${b}">
          <button
            type="button"
            class="event-month-header"
            aria-expanded="${x}"
            aria-controls="${B}"
          >
            <span class="event-month-heading">
              <span>📅 ${I} 月</span>
              <span class="event-month-count">${E.length} 項日程</span>
            </span>
            <span class="event-month-chevron" aria-hidden="true">${x?"⌃":"⌄"}</span>
          </button>
          <div id="${B}" class="event-month-panel" ${x?"":"hidden"}>
            ${s(E)}
          </div>
        </section>
      `}).join("")}d&&!d.dataset.bound&&(d.addEventListener("click",o=>{const p=o.target.closest(".filter-chip");p&&L(p.getAttribute("data-category"))}),d.dataset.bound="true"),a.dataset.bound||(a.addEventListener("click",o=>{const p=o.target.closest(".event-month-header");if(!p)return;const g=p.getAttribute("aria-controls"),f=document.getElementById(g);if(!f)return;const v=p.getAttribute("aria-expanded")==="true";p.setAttribute("aria-expanded",String(!v)),f.hidden=v;const b=p.querySelector(".event-month-chevron");b&&(b.textContent=v?"⌄":"⌃")}),a.dataset.bound="true"),L("all")}function J(){const t=document.getElementById("btn-go-leave");t&&t.setAttribute("href",w.leaveUrl)}function X(){const t=document.getElementById("faq-accordion-container");t&&(t.innerHTML="",V.forEach((n,r)=>{const a=document.createElement("div");a.className="faq-item",r===0&&a.classList.add("active"),a.innerHTML=`
      <button class="faq-question-btn" aria-expanded="${r===0}">
        <span>${m(n.question)}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="faq-answer-panel">
        <p>${m(n.answer)}</p>
      </div>
    `;const d=a.querySelector(".faq-question-btn");d.addEventListener("click",()=>{const i=a.classList.contains("active");document.querySelectorAll(".faq-item").forEach(e=>{e.classList.remove("active"),e.querySelector(".faq-question-btn").setAttribute("aria-expanded","false")}),i||(a.classList.add("active"),d.setAttribute("aria-expanded","true"))}),t.appendChild(a)}))}function m(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function A(t,n){if(!n||!t)return m(t);const r=m(t),a=new RegExp(`(${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return r.replace(a,'<span class="search-highlight">$1</span>')}function Z(){const t=document.getElementById("global-search"),n=document.getElementById("btn-search-clear"),r=document.getElementById("btn-clear-search"),a=document.getElementById("search-results"),d=document.getElementById("search-results-list"),i=document.getElementById("search-results-count");if(!t)return;let e;function u(y){if(!y||y.length<2){a.classList.add("hidden");return}const c=[],l=y.toLowerCase();S.forEach(s=>{`${s.title} ${s.content} ${s.category}`.toLowerCase().includes(l)&&c.push({type:"公告",title:s.title,excerpt:s.content.substring(0,80)+"...",viewId:"view-announcements",data:s})}),N.forEach(s=>{`${s.title} ${s.summary} ${s.details.join(" ")}`.toLowerCase().includes(l)&&c.push({type:"宣導",title:s.title,excerpt:s.summary,viewId:"view-guidelines",data:s})}),M.forEach(s=>{`${s.title} ${s.summary||""}`.toLowerCase().includes(l)&&c.push({type:"規定",title:s.title,excerpt:s.summary,viewId:"view-rules",data:s})}),$.timeline.forEach(s=>{`${s.title} ${s.description}`.toLowerCase().includes(l)&&c.push({type:"日程",title:s.title,excerpt:`${s.dateDisplay} - ${s.description}`,viewId:"view-events",data:s})}),V.forEach(s=>{`${s.question} ${s.answer}`.toLowerCase().includes(l)&&c.push({type:"FAQ",title:s.question,excerpt:s.answer,viewId:"view-faq",data:s})}),H.forEach(s=>{`${s.title} ${s.category} ${s.summary}`.toLowerCase().includes(l)&&c.push({type:"報名",title:s.title,excerpt:s.summary.substring(0,80)+"...",viewId:"view-registrations",data:s})}),i.textContent=`找到 ${c.length} 筆結果`,c.length===0?d.innerHTML='<p class="action-hint" style="text-align:center;padding:1rem;">找不到符合的內容</p>':(d.innerHTML=c.slice(0,20).map(s=>`
        <div class="search-result-item" data-view="${s.viewId}">
          <div class="search-result-category">${s.type}</div>
          <div class="search-result-title">${A(s.title,y)}</div>
          <div class="search-result-excerpt">${A(s.excerpt,y)}</div>
        </div>
      `).join(""),d.querySelectorAll(".search-result-item").forEach(s=>{s.addEventListener("click",()=>{const h=s.getAttribute("data-view"),L=document.getElementById("header-home-content"),o=document.getElementById("header-subpage-content"),p=document.getElementById("subpage-title-text"),g=document.querySelectorAll(".page-view"),f={"view-announcements":"最新公告","view-guidelines":"宣導事項","view-rules":"重要規定","view-registrations":"線上辦理","view-timetable":"課表查詢","view-events":"重要日程","view-leave":"請假說明","view-faq":"常見問題 FAQ"};g.forEach(v=>{v.id===h?(v.classList.remove("hidden"),v.classList.add("view-active")):(v.classList.add("hidden"),v.classList.remove("view-active"))}),L.classList.add("hidden"),o.classList.remove("hidden"),p.textContent=f[h]||"詳細資訊",history.pushState({view:h},"",`#${h}`),window.scrollTo({top:0,behavior:"smooth"})})})),a.classList.remove("hidden")}t.addEventListener("input",y=>{clearTimeout(e);const c=y.target.value.trim();n.classList.toggle("hidden",!c),e=setTimeout(()=>u(c),300)}),n.addEventListener("click",()=>{t.value="",n.classList.add("hidden"),a.classList.add("hidden"),t.focus()}),r&&r.addEventListener("click",()=>{t.value="",n.classList.add("hidden"),a.classList.add("hidden")})}
