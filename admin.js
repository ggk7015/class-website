/**
 * ==========================================
 * 資二丙班級資訊站 - 後台管理系統 (admin.js)
 * ==========================================
 */

(function() {
  'use strict';

  // ===== Storage Keys =====
  const STORAGE_KEY = 'class2c_admin_data';
  const THEME_KEY = 'class2c_theme';
  const AUTH_KEY = 'class2c_auth';

  // ===== Default Credentials =====
  const DEFAULT_USER = 'admin';
  const DEFAULT_PASS_HASH = '9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0';

  // ===== Default Data =====
  const defaultData = {
    announcements: [],
    faq: [],
    events: [],
    guidelines: [],
    rules: [],
    registrations: []
  };

  // ===== State =====
  let appData = loadData();
  let currentPanel = 'dashboard';
  let editingItem = null;
  let editingType = null;
  let aiTargetType = null;
  let isAuthenticated = false;
  let mustChangePassword = false;

  // ===== Crypto Helpers =====
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function getAuthData() {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY)) || null;
    } catch { return null; }
  }

  function saveAuthData(data) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
  }

  function initAuth() {
    const auth = getAuthData();

    if (!auth) {
      saveAuthData({
        username: DEFAULT_USER,
        passwordHash: DEFAULT_PASS_HASH,
        mustChange: true
      });
    }

    const stored = getAuthData();
    if (stored && !stored.mustChange && stored.sessionValid) {
      isAuthenticated = true;
      mustChangePassword = false;
      showMainApp();
      initAll();
    } else if (stored && stored.mustChange) {
      mustChangePassword = true;
      showChangePasswordScreen();
    } else {
      showLoginScreen();
    }

    document.getElementById('login-form')?.addEventListener('submit', handleLogin);
    document.getElementById('change-password-form')?.addEventListener('submit', handleChangePassword);
  }

  function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('change-password-screen').style.display = 'none';
    document.getElementById('admin-main').style.display = 'none';
  }

  function showChangePasswordScreen() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('change-password-screen').style.display = 'flex';
    document.getElementById('admin-main').style.display = 'none';
  }

  function showMainApp() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('change-password-screen').style.display = 'none';
    document.getElementById('admin-main').style.display = 'flex';
  }

  async function handleLogin(e) {
    e.preventDefault();
    const user = document.getElementById('login-user')?.value.trim();
    const pass = document.getElementById('login-pass')?.value;
    const errorEl = document.getElementById('login-error');

    const auth = getAuthData();
    if (!auth) {
      errorEl.textContent = '系統錯誤，請重新整理頁面';
      return;
    }

    if (user !== auth.username) {
      errorEl.textContent = '帳號或密碼錯誤';
      return;
    }

    const passHash = await hashPassword(pass);
    if (passHash !== auth.passwordHash) {
      errorEl.textContent = '帳號或密碼錯誤';
      return;
    }

    errorEl.textContent = '';

    if (auth.mustChange) {
      mustChangePassword = true;
      showChangePasswordScreen();
    } else {
      isAuthenticated = true;
      saveAuthData({ ...auth, sessionValid: true });
      showMainApp();
      initAll();
    }
  }

  async function handleChangePassword(e) {
    e.preventDefault();
    const newPass = document.getElementById('new-password')?.value;
    const confirmPass = document.getElementById('confirm-password')?.value;
    const errorEl = document.getElementById('change-error');

    if (newPass.length < 4) {
      errorEl.textContent = '密碼至少 4 個字元';
      return;
    }

    if (newPass === '0000') {
      errorEl.textContent = '新密碼不可與舊密碼相同';
      return;
    }

    if (newPass !== confirmPass) {
      errorEl.textContent = '兩次密碼不一致';
      return;
    }

    const newHash = await hashPassword(newPass);
    const auth = getAuthData();
    saveAuthData({
      ...auth,
      passwordHash: newHash,
      mustChange: false,
      sessionValid: true
    });

    errorEl.textContent = '';
    isAuthenticated = true;
    mustChangePassword = false;
    showMainApp();
    initAll();
    showToast('密碼已更新，請牢記新密碼', 'success');
  }

  function handleLogout() {
    const auth = getAuthData();
    if (auth) {
      saveAuthData({ ...auth, sessionValid: false });
    }
    isAuthenticated = false;
    showLoginScreen();
  }

  // ===== Init =====
  function initAll() {
    initNavigation();
    initMobileMenu();
    initDashboard();
    initAnnouncements();
    initFAQ();
    initEvents();
    initGuidelines();
    initRules();
    initRegistrations();
    initAI();
    initTheme();
    initExportImport();
    initModal();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAuth();
  });

  // ===== Storage =====
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...defaultData, ...JSON.parse(raw) };
    } catch(e) {}
    return { ...defaultData };
  }

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch(e) {
      showToast('儲存失敗：' + e.message, 'error');
    }
  }

  // ===== Navigation =====
  function initNavigation() {
    document.querySelectorAll('.nav-item[data-panel]').forEach(btn => {
      btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
    });

    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => switchPanel(el.dataset.nav));
    });

    document.getElementById('btn-logout')?.addEventListener('click', handleLogout);
  }

  function switchPanel(panelId) {
    currentPanel = panelId;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-panel="${panelId}"]`)?.classList.add('active');
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`panel-${panelId}`)?.classList.add('active');
    updateDashboard();
    closeMobileMenu();
  }

  // ===== Mobile Menu =====
  function initMobileMenu() {
    const btn = document.getElementById('btnMenu');
    const sidebar = document.getElementById('sidebar');
    btn?.addEventListener('click', () => {
      btn.classList.toggle('active');
      sidebar.classList.toggle('open');
    });
  }

  function closeMobileMenu() {
    document.getElementById('btnMenu')?.classList.remove('active');
    document.getElementById('sidebar')?.classList.remove('open');
  }

  // ===== Dashboard =====
  function initDashboard() {
    updateDashboard();
  }

  function updateDashboard() {
    setText('stat-announcements', appData.announcements.length);
    setText('stat-faq', appData.faq.length);
    setText('stat-events', appData.events.length);
    setText('stat-guidelines', appData.guidelines.length);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ===== Announcements =====
  function initAnnouncements() {
    document.getElementById('btn-add-announcement')?.addEventListener('click', () => {
      openModal('新增公告', buildAnnouncementForm(), saveAnnouncement);
    });
    renderAnnouncementList();
  }

  function buildAnnouncementForm(item = {}) {
    return `
      <div class="form-group">
        <label class="form-label">標題 *</label>
        <input class="form-input" id="form-title" value="${esc(item.title || '')}" placeholder="公告標題">
      </div>
      <div class="form-group">
        <label class="form-label">日期</label>
        <input class="form-input" id="form-date" type="date" value="${item.date || new Date().toISOString().slice(0,10)}">
      </div>
      <div class="form-group">
        <label class="form-label">分類</label>
        <select class="form-select" id="form-category">
          ${['重要提醒','活動報名','網站公告','一般公告'].map(c => `<option value="${c}" ${item.category===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">內容 *</label>
        <textarea class="form-textarea" id="form-content" rows="5" placeholder="公告內容">${esc(item.content || '')}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">自訂標籤</label>
        <input class="form-input" id="form-customTag" value="${esc(item.customTag || '')}" placeholder="例如：📅 8/31 開學">
      </div>
      <div class="form-group">
        <label class="form-label">外部連結</label>
        <input class="form-input" id="form-externalUrl" value="${esc(item.externalUrl || '')}" placeholder="https://...">
      </div>
      <div class="form-group">
        <label class="form-label">截止日期</label>
        <input class="form-input" id="form-deadlineDate" type="date" value="${item.deadlineDate || ''}">
      </div>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" id="form-isImportant" ${item.isImportant ? 'checked' : ''}>
          <span>🔴 標記為重要</span>
        </label>
      </div>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" id="form-requireSignature" ${item.requireSignature ? 'checked' : ''}>
          <span>✍️ 需要家長簽名</span>
        </label>
      </div>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" id="form-requirePayment" ${item.requirePayment ? 'checked' : ''}>
          <span>💳 需要繳費</span>
        </label>
      </div>
    `;
  }

  function saveAnnouncement() {
    const title = document.getElementById('form-title')?.value.trim();
    const content = document.getElementById('form-content')?.value.trim();
    if (!title || !content) { showToast('請填寫標題與內容', 'error'); return false; }

    const item = {
      id: editingItem?.id || 'ann-' + Date.now(),
      title,
      date: document.getElementById('form-date')?.value || new Date().toISOString().slice(0,10),
      category: document.getElementById('form-category')?.value || '一般公告',
      content,
      customTag: document.getElementById('form-customTag')?.value || '',
      externalUrl: document.getElementById('form-externalUrl')?.value || '',
      deadlineDate: document.getElementById('form-deadlineDate')?.value || '',
      isImportant: document.getElementById('form-isImportant')?.checked || false,
      requireSignature: document.getElementById('form-requireSignature')?.checked || false,
      requirePayment: document.getElementById('form-requirePayment')?.checked || false
    };

    if (editingItem) {
      const idx = appData.announcements.findIndex(a => a.id === editingItem.id);
      if (idx >= 0) appData.announcements[idx] = item;
    } else {
      appData.announcements.unshift(item);
    }
    saveData();
    renderAnnouncementList();
    showToast(editingItem ? '公告已更新' : '公告已新增', 'success');
    return true;
  }

  function renderAnnouncementList() {
    const container = document.getElementById('list-announcements');
    if (!container) return;
    if (appData.announcements.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📢</div><div class="empty-state-text">尚無公告，點擊上方按鈕新增</div></div>';
      return;
    }
    container.innerHTML = appData.announcements.map(item => `
      <div class="content-item">
        <div class="content-item-info">
          <div class="content-item-title">${item.isImportant ? '🔴 ' : ''}${esc(item.title)}</div>
          <div class="content-item-meta">${esc(item.date)} · ${esc(item.category)}</div>
        </div>
        <div class="content-item-actions">
          <button class="btn-sm" onclick="adminApp.editItem('announcements','${item.id}')">✏️ 編輯</button>
          <button class="btn-danger" onclick="adminApp.deleteItem('announcements','${item.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // ===== FAQ =====
  function initFAQ() {
    document.getElementById('btn-add-faq')?.addEventListener('click', () => {
      openModal('新增 FAQ', buildFAQForm(), saveFAQ);
    });
    renderFAQList();
  }

  function buildFAQForm(item = {}) {
    return `
      <div class="form-group">
        <label class="form-label">問題 *</label>
        <input class="form-input" id="form-question" value="${esc(item.question || '')}" placeholder="Q1：如何...？">
      </div>
      <div class="form-group">
        <label class="form-label">回答 *</label>
        <textarea class="form-textarea" id="form-answer" rows="4" placeholder="回答內容">${esc(item.answer || '')}</textarea>
      </div>
    `;
  }

  function saveFAQ() {
    const question = document.getElementById('form-question')?.value.trim();
    const answer = document.getElementById('form-answer')?.value.trim();
    if (!question || !answer) { showToast('請填寫問題與回答', 'error'); return false; }

    const item = {
      id: editingItem?.id || 'faq-' + Date.now(),
      question,
      answer
    };

    if (editingItem) {
      const idx = appData.faq.findIndex(f => f.id === editingItem.id);
      if (idx >= 0) appData.faq[idx] = item;
    } else {
      appData.faq.push(item);
    }
    saveData();
    renderFAQList();
    showToast(editingItem ? 'FAQ 已更新' : 'FAQ 已新增', 'success');
    return true;
  }

  function renderFAQList() {
    const container = document.getElementById('list-faq');
    if (!container) return;
    if (appData.faq.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">❓</div><div class="empty-state-text">尚無 FAQ，點擊上方按鈕新增</div></div>';
      return;
    }
    container.innerHTML = appData.faq.map(item => `
      <div class="content-item">
        <div class="content-item-info">
          <div class="content-item-title">${esc(item.question)}</div>
          <div class="content-item-meta">${esc(item.answer.substring(0, 60))}${item.answer.length > 60 ? '...' : ''}</div>
        </div>
        <div class="content-item-actions">
          <button class="btn-sm" onclick="adminApp.editItem('faq','${item.id}')">✏️ 編輯</button>
          <button class="btn-danger" onclick="adminApp.deleteItem('faq','${item.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // ===== Events =====
  function initEvents() {
    document.getElementById('btn-add-event')?.addEventListener('click', () => {
      openModal('新增日程', buildEventForm(), saveEvent);
    });
    renderEventList();
  }

  function buildEventForm(item = {}) {
    return `
      <div class="form-group">
        <label class="form-label">標題 *</label>
        <input class="form-input" id="form-title" value="${esc(item.title || '')}" placeholder="例如：第一次段考">
      </div>
      <div class="form-group">
        <label class="form-label">開始日期 *</label>
        <input class="form-input" id="form-startDate" type="date" value="${item.startDate || ''}">
      </div>
      <div class="form-group">
        <label class="form-label">結束日期</label>
        <input class="form-input" id="form-endDate" type="date" value="${item.endDate || ''}">
      </div>
      <div class="form-group">
        <label class="form-label">顯示日期</label>
        <input class="form-input" id="form-dateDisplay" value="${esc(item.dateDisplay || '')}" placeholder="10/13 (二)">
      </div>
      <div class="form-group">
        <label class="form-label">分類</label>
        <select class="form-select" id="form-category">
          ${['exam','homework','club','assessment'].map(c => `<option value="${c}" ${item.category===c?'selected':''}>${{exam:'📝 段考',homework:'📚 作業抽查',club:'👥 社團',assessment:'🏅 測驗與檢定'}[c]}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">子分類（測驗與檢定用）</label>
        <select class="form-select" id="form-subtype">
          ${['','registration','test','certification','recognition'].map(s => `<option value="${s}" ${item.subtype===s?'selected':''}>${{registration:'📋 報名',test:'🏅 測驗',certification:'🏅 檢定',recognition:'🏅 認證','':'—'}[s]}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">說明</label>
        <input class="form-input" id="form-description" value="${esc(item.description || '')}" placeholder="簡述內容">
      </div>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" id="form-isImportant" ${item.isImportant ? 'checked' : ''}>
          <span>⭐ 標記為重要</span>
        </label>
      </div>
    `;
  }

  function saveEvent() {
    const title = document.getElementById('form-title')?.value.trim();
    const startDate = document.getElementById('form-startDate')?.value;
    if (!title || !startDate) { showToast('請填寫標題與開始日期', 'error'); return false; }

    const item = {
      id: editingItem?.id || 'evt-' + Date.now(),
      title,
      startDate,
      endDate: document.getElementById('form-endDate')?.value || '',
      dateDisplay: document.getElementById('form-dateDisplay')?.value || '',
      category: document.getElementById('form-category')?.value || 'club',
      subtype: document.getElementById('form-subtype')?.value || '',
      description: document.getElementById('form-description')?.value || '',
      isImportant: document.getElementById('form-isImportant')?.checked || false
    };

    if (editingItem) {
      const idx = appData.events.findIndex(e => e.id === editingItem.id);
      if (idx >= 0) appData.events[idx] = item;
    } else {
      appData.events.push(item);
    }
    appData.events.sort((a, b) => a.startDate.localeCompare(b.startDate));
    saveData();
    renderEventList();
    showToast(editingItem ? '日程已更新' : '日程已新增', 'success');
    return true;
  }

  function renderEventList() {
    const container = document.getElementById('list-events');
    if (!container) return;
    if (appData.events.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🗓️</div><div class="empty-state-text">尚無日程，點擊上方按鈕新增</div></div>';
      return;
    }
    const catIcons = { exam:'📝', homework:'📚', club:'👥', assessment:'🏅' };
    container.innerHTML = appData.events.map(item => `
      <div class="content-item">
        <div class="content-item-info">
          <div class="content-item-title">${item.isImportant ? '⭐ ' : ''}${esc(item.title)}</div>
          <div class="content-item-meta">${esc(item.startDate)}${item.endDate ? ' ~ ' + esc(item.endDate) : ''} · ${catIcons[item.category]||'🗓️'} ${esc(item.category)}</div>
        </div>
        <div class="content-item-actions">
          <button class="btn-sm" onclick="adminApp.editItem('events','${item.id}')">✏️ 編輯</button>
          <button class="btn-danger" onclick="adminApp.deleteItem('events','${item.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // ===== Guidelines =====
  function initGuidelines() {
    document.getElementById('btn-add-guideline')?.addEventListener('click', () => {
      openModal('新增宣導', buildGuidelineForm(), saveGuideline);
    });
    renderGuidelineList();
  }

  function buildGuidelineForm(item = {}) {
    return `
      <div class="form-group">
        <label class="form-label">標題 *</label>
        <input class="form-input" id="form-title" value="${esc(item.title || '')}" placeholder="例如：校園安全">
      </div>
      <div class="form-group">
        <label class="form-label">圖示</label>
        <input class="form-input" id="form-icon" value="${esc(item.icon || '')}" placeholder="🛡️">
      </div>
      <div class="form-group">
        <label class="form-label">摘要</label>
        <input class="form-input" id="form-summary" value="${esc(item.summary || '')}" placeholder="簡述宣導重點">
      </div>
      <div class="form-group">
        <label class="form-label">詳細內容（每行一條）</label>
        <textarea class="form-textarea" id="form-details" rows="5" placeholder="第一點&#10;第二點&#10;第三點">${item.details ? item.details.join('\n') : ''}</textarea>
      </div>
    `;
  }

  function saveGuideline() {
    const title = document.getElementById('form-title')?.value.trim();
    if (!title) { showToast('請填寫標題', 'error'); return false; }

    const detailsRaw = document.getElementById('form-details')?.value || '';
    const details = detailsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const item = {
      id: editingItem?.id || 'guide-' + Date.now(),
      title,
      icon: document.getElementById('form-icon')?.value || '📌',
      summary: document.getElementById('form-summary')?.value || '',
      details
    };

    if (editingItem) {
      const idx = appData.guidelines.findIndex(g => g.id === editingItem.id);
      if (idx >= 0) appData.guidelines[idx] = item;
    } else {
      appData.guidelines.push(item);
    }
    saveData();
    renderGuidelineList();
    showToast(editingItem ? '宣導已更新' : '宣導已新增', 'success');
    return true;
  }

  function renderGuidelineList() {
    const container = document.getElementById('list-guidelines');
    if (!container) return;
    if (appData.guidelines.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📌</div><div class="empty-state-text">尚無宣導，點擊上方按鈕新增</div></div>';
      return;
    }
    container.innerHTML = appData.guidelines.map(item => `
      <div class="content-item">
        <div class="content-item-info">
          <div class="content-item-title">${item.icon || '📌'} ${esc(item.title)}</div>
          <div class="content-item-meta">${esc(item.summary)} · ${item.details?.length || 0} 條細項</div>
        </div>
        <div class="content-item-actions">
          <button class="btn-sm" onclick="adminApp.editItem('guidelines','${item.id}')">✏️ 編輯</button>
          <button class="btn-danger" onclick="adminApp.deleteItem('guidelines','${item.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // ===== Rules =====
  function initRules() {
    document.getElementById('btn-add-rule')?.addEventListener('click', () => {
      openModal('新增規定', buildRuleForm(), saveRule);
    });
    renderRuleList();
  }

  function buildRuleForm(item = {}) {
    return `
      <div class="form-group">
        <label class="form-label">標題 *</label>
        <input class="form-input" id="form-title" value="${esc(item.title || '')}" placeholder="例如：學生獎懲要點">
      </div>
      <div class="form-group">
        <label class="form-label">圖示</label>
        <input class="form-input" id="form-icon" value="${esc(item.icon || '')}" placeholder="🏆">
      </div>
      <div class="form-group">
        <label class="form-label">摘要</label>
        <input class="form-input" id="form-summary" value="${esc(item.summary || '')}" placeholder="簡述規定內容">
      </div>
      <div class="form-group">
        <label class="form-label">連結網址 *</label>
        <input class="form-input" id="form-url" value="${esc(item.url || '')}" placeholder="https://...">
      </div>
      <div class="form-group">
        <label class="form-label">子項目（每行一條，選填）</label>
        <textarea class="form-textarea" id="form-items" rows="3" placeholder="項目一&#10;項目二">${item.items ? item.items.join('\n') : ''}</textarea>
      </div>
    `;
  }

  function saveRule() {
    const title = document.getElementById('form-title')?.value.trim();
    const url = document.getElementById('form-url')?.value.trim();
    if (!title || !url) { showToast('請填寫標題與連結', 'error'); return false; }

    const itemsRaw = document.getElementById('form-items')?.value || '';
    const items = itemsRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const item = {
      id: editingItem?.id || 'rule-' + Date.now(),
      title,
      icon: document.getElementById('form-icon')?.value || '📖',
      summary: document.getElementById('form-summary')?.value || '',
      url,
      items: items.length > 0 ? items : undefined
    };

    if (editingItem) {
      const idx = appData.rules.findIndex(r => r.id === editingItem.id);
      if (idx >= 0) appData.rules[idx] = item;
    } else {
      appData.rules.push(item);
    }
    saveData();
    renderRuleList();
    showToast(editingItem ? '規定已更新' : '規定已新增', 'success');
    return true;
  }

  function renderRuleList() {
    const container = document.getElementById('list-rules');
    if (!container) return;
    if (appData.rules.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📖</div><div class="empty-state-text">尚無規定，點擊上方按鈕新增</div></div>';
      return;
    }
    container.innerHTML = appData.rules.map(item => `
      <div class="content-item">
        <div class="content-item-info">
          <div class="content-item-title">${item.icon || '📖'} ${esc(item.title)}</div>
          <div class="content-item-meta">${esc(item.summary || item.url)}</div>
        </div>
        <div class="content-item-actions">
          <button class="btn-sm" onclick="adminApp.editItem('rules','${item.id}')">✏️ 編輯</button>
          <button class="btn-danger" onclick="adminApp.deleteItem('rules','${item.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // ===== Registrations =====
  function initRegistrations() {
    document.getElementById('btn-add-registration')?.addEventListener('click', () => {
      openModal('新增報名', buildRegistrationForm(), saveRegistration);
    });
    renderRegistrationList();
  }

  function buildRegistrationForm(item = {}) {
    return `
      <div class="form-group">
        <label class="form-label">標題 *</label>
        <input class="form-input" id="form-title" value="${esc(item.title || '')}" placeholder="活動名稱">
      </div>
      <div class="form-group">
        <label class="form-label">分類</label>
        <input class="form-input" id="form-category" value="${esc(item.category || '')}" placeholder="例如：志工服務">
      </div>
      <div class="form-group">
        <label class="form-label">期間</label>
        <input class="form-input" id="form-period" value="${esc(item.period || '')}" placeholder="2026/10/17（六）～ 10/18（日）">
      </div>
      <div class="form-group">
        <label class="form-label">對象</label>
        <input class="form-input" id="form-target" value="${esc(item.target || '')}" placeholder="全校同學">
      </div>
      <div class="form-group">
        <label class="form-label">說明</label>
        <textarea class="form-textarea" id="form-summary" rows="3" placeholder="活動說明">${esc(item.summary || '')}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">報名連結</label>
        <input class="form-input" id="form-url" value="${esc(item.url || '')}" placeholder="https://...">
      </div>
      <div class="form-group">
        <label class="form-label">狀態</label>
        <select class="form-select" id="form-status">
          ${['open','urgent','closed'].map(s => `<option value="${s}" ${item.status===s?'selected':''}>${{open:'✅ 開放報名',urgent:'🔥 即將截止',closed:'⌛ 已截止'}[s]}</option>`).join('')}
        </select>
      </div>
    `;
  }

  function saveRegistration() {
    const title = document.getElementById('form-title')?.value.trim();
    if (!title) { showToast('請填寫標題', 'error'); return false; }

    const item = {
      id: editingItem?.id || 'reg-' + Date.now(),
      title,
      category: document.getElementById('form-category')?.value || '',
      period: document.getElementById('form-period')?.value || '',
      target: document.getElementById('form-target')?.value || '',
      summary: document.getElementById('form-summary')?.value || '',
      url: document.getElementById('form-url')?.value || '',
      status: document.getElementById('form-status')?.value || 'open',
      deadline: '',
      eventEndDate: ''
    };

    if (editingItem) {
      const idx = appData.registrations.findIndex(r => r.id === editingItem.id);
      if (idx >= 0) appData.registrations[idx] = item;
    } else {
      appData.registrations.push(item);
    }
    saveData();
    renderRegistrationList();
    showToast(editingItem ? '報名已更新' : '報名已新增', 'success');
    return true;
  }

  function renderRegistrationList() {
    const container = document.getElementById('list-registrations');
    if (!container) return;
    if (appData.registrations.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📝</div><div class="empty-state-text">尚無報名，點擊上方按鈕新增</div></div>';
      return;
    }
    container.innerHTML = appData.registrations.map(item => `
      <div class="content-item">
        <div class="content-item-info">
          <div class="content-item-title">${esc(item.title)}</div>
          <div class="content-item-meta">${esc(item.category)} · ${esc(item.period)} · ${{open:'✅ 開放',urgent:'🔥 即將截止',closed:'⌛ 已截止'}[item.status]||item.status}</div>
        </div>
        <div class="content-item-actions">
          <button class="btn-sm" onclick="adminApp.editItem('registrations','${item.id}')">✏️ 編輯</button>
          <button class="btn-danger" onclick="adminApp.deleteItem('registrations','${item.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // ===== AI Panel =====
  function initAI() {
    let selectedProvider = 'gemini';

    document.querySelectorAll('.provider-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.provider-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedProvider = btn.dataset.provider;
        updateAIConfig(selectedProvider);
      });
    });

    document.querySelectorAll('.template-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        document.querySelectorAll('.template-tag').forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        aiTargetType = tag.dataset.template;
      });
    });

    document.getElementById('btn-ai-generate')?.addEventListener('click', () => generateAI(selectedProvider));
    document.getElementById('btn-ai-copy')?.addEventListener('click', copyAIResult);
    document.getElementById('btn-ai-apply')?.addEventListener('click', applyAIResult);
    document.getElementById('btn-ai-regenerate')?.addEventListener('click', () => generateAI(selectedProvider));

    updateAIConfig(selectedProvider);
  }

  function updateAIConfig(provider) {
    const endpointGroup = document.getElementById('custom-endpoint-group');
    const modelSelect = document.getElementById('ai-model');

    endpointGroup.style.display = provider === 'custom' ? 'block' : 'none';

    const models = {
      gemini: ['gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash'],
      gpt: ['gpt-4o', 'gpt-4o-mini', 'gpt-3.5-turbo'],
      manus: ['manus-default'],
      claude: ['claude-3.5-sonnet', 'claude-3-haiku'],
      deepseek: ['deepseek-chat', 'deepseek-coder'],
      custom: ['自訂模型']
    };

    modelSelect.innerHTML = (models[provider] || []).map(m => `<option value="${m}">${m}</option>`).join('');
  }

  async function generateAI(provider) {
    const apiKey = document.getElementById('ai-api-key')?.value.trim();
    const prompt = document.getElementById('ai-prompt')?.value.trim();

    if (!apiKey) { showToast('請輸入 API Key', 'error'); return; }
    if (!prompt) { showToast('請輸入需求描述', 'error'); return; }

    const loadingEl = document.querySelector('.loading-dots');
    const btnText = document.querySelector('.btn-ai-generate span:not(.btn-icon):not(.loading-dots)');
    loadingEl.style.display = 'inline';
    btnText.textContent = '生成中...';

    const systemPrompt = buildAISystemPrompt(aiTargetType);
    const fullPrompt = systemPrompt + '\n\n用戶需求：' + prompt;

    try {
      let result = '';
      if (provider === 'gemini') {
        result = await callGemini(apiKey, fullPrompt);
      } else if (provider === 'gpt') {
        result = await callOpenAI(apiKey, fullPrompt);
      } else if (provider === 'claude') {
        result = await callClaude(apiKey, fullPrompt);
      } else if (provider === 'deepseek') {
        result = await callDeepSeek(apiKey, fullPrompt);
      } else {
        const endpoint = document.getElementById('ai-endpoint')?.value || '';
        result = await callCustomAPI(apiKey, endpoint, fullPrompt);
      }

      document.getElementById('ai-result').style.display = 'block';
      document.getElementById('ai-result-content').textContent = result;
      showToast('AI 生成完成', 'success');
    } catch (err) {
      showToast('生成失敗：' + err.message, 'error');
    } finally {
      loadingEl.style.display = 'none';
      btnText.textContent = 'AI 生成';
    }
  }

  function buildAISystemPrompt(type) {
    const prompts = {
      announcement: '你是班級公告撰寫助手。請根據用戶需求生成一則班級公告，格式包含：標題、日期、內容。內容應正式、清楚、簡潔。使用繁體中文。',
      faq: '你是 FAQ 撰寫助手。請根據用戶需求生成問答對，格式為「問題：...」和「回答：...」。回答應簡潔實用。使用繁體中文。',
      event: '你是行事曆管理助手。請根據用戶需求生成日程資料，格式包含：標題、日期、分類(exam/homework/club/assessment)、說明。使用繁體中文。',
      guideline: '你是校園宣導撰寫助手。請根據用戶需求生成宣導內容，格式包含：標題、圖示(emoji)、摘要、詳細條列項目。使用繁體中文。',
      null: '你是班級資訊站內容助手。請根據用戶需求生成適合的內容。使用繁體中文，語氣正式但親切。'
    };
    return prompts[type] || prompts[null];
  }

  async function callGemini(apiKey, prompt) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!res.ok) throw new Error(`API 錯誤 ${res.status}`);
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '無結果';
  }

  async function callOpenAI(apiKey, prompt) {
    const model = document.getElementById('ai-model')?.value || 'gpt-4o-mini';
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model, messages: [{ role: 'user', content: prompt }], temperature: 0.7 })
    });
    if (!res.ok) throw new Error(`API 錯誤 ${res.status}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content || '無結果';
  }

  async function callClaude(apiKey, prompt) {
    const model = document.getElementById('ai-model')?.value || 'claude-3-5-sonnet-20241022';
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model, max_tokens: 2048, messages: [{ role: 'user', content: prompt }] })
    });
    if (!res.ok) throw new Error(`API 錯誤 ${res.status}`);
    const data = await res.json();
    return data.content?.[0]?.text || '無結果';
  }

  async function callDeepSeek(apiKey, prompt) {
    const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: prompt }], temperature: 0.7 })
    });
    if (!res.ok) throw new Error(`API 錯誤 ${res.status}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content || '無結果';
  }

  async function callCustomAPI(apiKey, endpoint, prompt) {
    if (!endpoint) throw new Error('請輸入 API 端點');
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model: 'custom', messages: [{ role: 'user', content: prompt }], temperature: 0.7 })
    });
    if (!res.ok) throw new Error(`API 錯誤 ${res.status}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content || data.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(data);
  }

  function copyAIResult() {
    const text = document.getElementById('ai-result-content')?.textContent || '';
    navigator.clipboard.writeText(text).then(() => showToast('已複製', 'success'));
  }

  function applyAIResult() {
    const text = document.getElementById('ai-result-content')?.textContent || '';
    if (!text) return;

    const type = aiTargetType || 'announcement';
    const parsed = parseAIResult(text, type);

    if (type === 'announcement') {
      openModal('新增公告（AI 生成）', buildAnnouncementForm(parsed), saveAnnouncement);
    } else if (type === 'faq') {
      openModal('新增 FAQ（AI 生成）', buildFAQForm(parsed), saveFAQ);
    } else if (type === 'event') {
      openModal('新增日程（AI 生成）', buildEventForm(parsed), saveEvent);
    } else if (type === 'guideline') {
      openModal('新增宣導（AI 生成）', buildGuidelineForm(parsed), saveGuideline);
    } else {
      openModal('新增公告（AI 生成）', buildAnnouncementForm(parsed), saveAnnouncement);
    }
  }

  function parseAIResult(text, type) {
    if (type === 'faq') {
      const qMatch = text.match(/問題[：:]\s*(.+)/);
      const aMatch = text.match(/回答[：:]\s*([\s\S]+)/);
      return { question: qMatch?.[1]?.trim() || '', answer: aMatch?.[1]?.trim() || text };
    }
    if (type === 'event') {
      const titleMatch = text.match(/標題[：:]\s*(.+)/);
      const dateMatch = text.match(/(\d{4}-\d{2}-\d{2})/);
      return { title: titleMatch?.[1]?.trim() || text.split('\n')[0], startDate: dateMatch?.[1] || '' };
    }
    const titleMatch = text.match(/標題[：:]\s*(.+)/);
    return { title: titleMatch?.[1]?.trim() || text.split('\n')[0], content: text };
  }

  // ===== Theme Panel =====
  function initTheme() {
    const theme = loadTheme();
    applyTheme(theme);

    document.querySelectorAll('.color-input').forEach(input => {
      input.addEventListener('input', () => {
        const hex = input.id.replace('theme-', '');
        const hexEl = document.getElementById(`theme-${hex}-hex`);
        if (hexEl) hexEl.textContent = input.value;
      });
    });

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyPreset(btn.dataset.preset);
      });
    });

    document.getElementById('btn-apply-theme')?.addEventListener('click', () => {
      const theme = collectTheme();
      saveTheme(theme);
      applyTheme(theme);
      showToast('主題已套用', 'success');
    });

    document.getElementById('btn-reset-theme')?.addEventListener('click', () => {
      const defaultTheme = getPresets().default;
      document.querySelectorAll('.color-input').forEach(input => {
        const key = input.id.replace('theme-', '');
        if (defaultTheme[key]) {
          input.value = defaultTheme[key];
          const hexEl = document.getElementById(`theme-${key}-hex`);
          if (hexEl) hexEl.textContent = defaultTheme[key];
        }
      });
      showToast('已重設為預設值', 'info');
    });
  }

  function getPresets() {
    return {
      default: { primary:'#2563eb','primary-dark':'#1d4ed8',bg:'#f8fafc',card:'#ffffff',text:'#1e293b','text-muted':'#64748b',danger:'#ef4444',success:'#10b981',warning:'#f59e0b' },
      green: { primary:'#10b981','primary-dark':'#059669',bg:'#f0fdf4',card:'#ffffff',text:'#1e293b','text-muted':'#64748b',danger:'#ef4444',success:'#10b981',warning:'#f59e0b' },
      purple: { primary:'#8b5cf6','primary-dark':'#7c3aed',bg:'#f5f3ff',card:'#ffffff',text:'#1e293b','text-muted':'#64748b',danger:'#ef4444',success:'#10b981',warning:'#f59e0b' },
      rose: { primary:'#f43f5e','primary-dark':'#e11d48',bg:'#fff1f2',card:'#ffffff',text:'#1e293b','text-muted':'#64748b',danger:'#ef4444',success:'#10b981',warning:'#f59e0b' },
      dark: { primary:'#3b82f6','primary-dark':'#1d4ed8',bg:'#0f172a',card:'#1e293b',text:'#f1f5f9','text-muted':'#94a3b8',danger:'#ef4444',success:'#10b981',warning:'#f59e0b' }
    };
  }

  function applyPreset(name) {
    const presets = getPresets();
    const preset = presets[name];
    if (!preset) return;
    document.querySelectorAll('.color-input').forEach(input => {
      const key = input.id.replace('theme-', '');
      if (preset[key]) {
        input.value = preset[key];
        const hexEl = document.getElementById(`theme-${key}-hex`);
        if (hexEl) hexEl.textContent = preset[key];
      }
    });
  }

  function collectTheme() {
    return {
      primary: document.getElementById('theme-primary')?.value || '#2563eb',
      'primary-dark': document.getElementById('theme-primary-dark')?.value || '#1d4ed8',
      bg: document.getElementById('theme-bg')?.value || '#f8fafc',
      card: document.getElementById('theme-card')?.value || '#ffffff',
      text: document.getElementById('theme-text')?.value || '#1e293b',
      'text-muted': document.getElementById('theme-text-muted')?.value || '#64748b',
      danger: document.getElementById('theme-danger')?.value || '#ef4444',
      success: document.getElementById('theme-success')?.value || '#10b981',
      warning: document.getElementById('theme-warning')?.value || '#f59e0b'
    };
  }

  function loadTheme() {
    try { return JSON.parse(localStorage.getItem(THEME_KEY)) || getPresets().default; }
    catch { return getPresets().default; }
  }

  function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--primary-dark', theme['primary-dark']);
    root.style.setProperty('--bg-main', theme.bg);
    root.style.setProperty('--bg-card', theme.card);
    root.style.setProperty('--text-main', theme.text);
    root.style.setProperty('--text-muted', theme['text-muted']);
    root.style.setProperty('--danger-color', theme.danger);
    root.style.setProperty('--success-color', theme.success);
    root.style.setProperty('--warning-color', theme.warning);
  }

  // ===== Export / Import =====
  function initExportImport() {
    document.getElementById('btn-export-json')?.addEventListener('click', exportJSON);
    document.getElementById('btn-generate-static')?.addEventListener('click', generateStaticPage);

    const zone = document.getElementById('file-upload-zone');
    const fileInput = document.getElementById('file-import');

    zone?.addEventListener('click', () => fileInput?.click());
    zone?.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    zone?.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone?.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      if (e.dataTransfer.files.length) importJSON(e.dataTransfer.files[0]);
    });
    fileInput?.addEventListener('change', (e) => {
      if (e.target.files.length) importJSON(e.target.files[0]);
    });
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `class2c-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('已匯出 JSON 檔案', 'success');
  }

  function importJSON(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        appData = { ...defaultData, ...data };
        saveData();
        renderAll();
        showToast('資料已匯入', 'success');
      } catch (err) {
        showToast('匯入失敗：檔案格式錯誤', 'error');
      }
    };
    reader.readAsText(file);
  }

  function generateStaticPage() {
    const configData = JSON.stringify(appData, null, 2);
    const blob = new Blob([`<!-- 資二丙班級資訊站 - 後台匯出資料 -->\n<script>window.ADMIN_EXPORT_DATA = ${configData};<\/script>`], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `class2c-admin-data-${new Date().toISOString().slice(0,10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('已匯出資料檔案', 'success');
  }

  function renderAll() {
    renderAnnouncementList();
    renderFAQList();
    renderEventList();
    renderGuidelineList();
    renderRuleList();
    renderRegistrationList();
    updateDashboard();
  }

  // ===== Modal =====
  function initModal() {
    document.getElementById('modal-close')?.addEventListener('click', closeModal);
    document.getElementById('modal-cancel')?.addEventListener('click', closeModal);
    document.getElementById('modal-save')?.addEventListener('click', () => {
      if (modalSaveCallback && modalSaveCallback() !== false) {
        closeModal();
      }
    });
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
  }

  let modalSaveCallback = null;

  function openModal(title, bodyHTML, onSave) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHTML;
    document.getElementById('modal-overlay').classList.add('active');
    modalSaveCallback = onSave;
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    modalSaveCallback = null;
    editingItem = null;
    editingType = null;
  }

  // ===== CRUD Helpers =====
  function editItem(type, id) {
    const list = appData[type];
    const item = list?.find(i => i.id === id);
    if (!item) return;

    editingItem = item;
    editingType = type;

    const formBuilders = {
      announcements: buildAnnouncementForm,
      faq: buildFAQForm,
      events: buildEventForm,
      guidelines: buildGuidelineForm,
      rules: buildRuleForm,
      registrations: buildRegistrationForm
    };

    const saveFunctions = {
      announcements: saveAnnouncement,
      faq: saveFAQ,
      events: saveEvent,
      guidelines: saveGuideline,
      rules: saveRule,
      registrations: saveRegistration
    };

    const titles = {
      announcements: '編輯公告',
      faq: '編輯 FAQ',
      events: '編輯日程',
      guidelines: '編輯宣導',
      rules: '編輯規定',
      registrations: '編輯報名'
    };

    openModal(titles[type] || '編輯項目', formBuilders[type](item), saveFunctions[type]);
  }

  function deleteItem(type, id) {
    if (!confirm('確定要刪除此項目嗎？')) return;
    appData[type] = appData[type].filter(i => i.id !== id);
    saveData();
    renderAll();
    showToast('已刪除', 'success');
  }

  // ===== Toast =====
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('hiding');
      toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
  }

  // ===== Util =====
  function esc(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== Expose to global =====
  window.adminApp = { editItem, deleteItem };

})();
