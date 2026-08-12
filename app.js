/**
 * 浪网官方 - 主引擎及 SEO/GEO 优化系统
 */

// 浪网官方 - 文章数据库
const articlesData = [
    {
        id: "art-1",
        title: "2026 高速稳定翻墙机场推荐榜单：IEPL/IPLC 专线与 SS/V2Ray/Clash 节点实测测评",
        summary: "综合评测数十家主流翻墙机场，从节点响应延迟、4K/8K 视频播放流畅度、晚高峰抗封锁能力及性价比等维度为您挑选最值得入手的稳定机场。",
        category: ["机场推荐", "翻墙机场"],
        year: 2026,
        date: "2026年08月04日",
        isoDate: "2026-08-04T08:00:00+00:00",
        readTime: "8 分钟阅读",
        author: "浪网官方",
        likes: 386,
        bannerBg: "linear-gradient(135deg, #2563eb, #7c3aed)",
        bannerTitle: "2026 翻墙机场推荐榜",
        imageAlt: "浪网官方 2026 高速稳定翻墙机场推荐与评测示意图",
        content: `
            <p>在如今复杂多变的网络环境下，选择一家节点稳定、速度快且防封锁能力强的<b>翻墙机场</b>至关重要。浪网官方团队经过长期连通性测速与晚高峰压力测试，精心整理出本期优质机场推荐名录。</p>
            <h3>1. 选购翻墙机场的关键指标</h3>
            <ul>
                <li><b>传输线路类型</b>：优先选择纯正 IEPL/IPLC 内网专线，不经过公网防火墙，延迟低且极致稳定。</li>
                <li><b>节点覆盖范围</b>：涵盖香港、日本、新加坡、台湾、美国等多地原生 BGP 节点，支持 ChatGPT 与 Netflix 解锁。</li>
                <li><b>协议支持</b>：支持 Shadowsocks, V2Ray (VMess/VLess), Trojan, Hysteria 2 及 TUIC 等最新协议。</li>
            </ul>
            <blockquote>“专线机场虽然价格略高于普通公网中转，但在晚高峰期间几乎无丢包与卡顿，是办公与娱乐的首选。”</blockquote>
            <h3>2. 核心推荐机场评测明细</h3>
            <p>我们在每家机场均挂载了自动化测速程序，全天候检测带宽峰值与丢包率，详情请查阅文章测评表格。</p>
        `
    },
    {
        id: "art-2",
        title: "全网热门翻墙机场综合测试报告：晚高峰节点丢包率与 8K 流媒体测速分析",
        summary: "浪网官方独家机场测试报告，实时监测多款机场节点的连通性、Ping 延迟抖动以及晚高峰流媒体画质加载速度。",
        category: ["机场测试", "节点测速"],
        year: 2026,
        date: "2026年07月28日",
        isoDate: "2026-07-28T09:30:00+00:00",
        readTime: "10 分钟阅读",
        author: "浪网官方",
        likes: 512,
        bannerBg: "linear-gradient(135deg, #0284c7, #2563eb)",
        bannerTitle: "机场测试与延迟测评",
        imageAlt: "浪网官方 节点测速工具与晚高峰性能测试图表",
        content: `
            <p>连通性与节点丢包率是检验机场真实品质的试金石。本次<b>机场测试</b>涵盖了 15 家主流机场，累计测试节点数量超过 300 个。</p>
            <h3>晚高峰压测数据解析</h3>
            <p>在晚间 20:00 - 23:00 的网络拥堵高峰期，IEPL 专线机场表现依旧抢眼，香港与日本节点的平均 Ping 维持在 35ms - 50ms 之间，4K 拖动无缓冲延迟。</p>
            <pre><code>// 浪网官方测试结果样例
[节点] 香港 BGP 01 - 延迟: 32ms - 速度: 450Mbps - 状态: 极佳
[节点] 日本 IEPL 02 - 延迟: 48ms - 速度: 620Mbps - 状态: 极佳
[节点] 美西 专线 01 - 延迟: 135ms - 速度: 380Mbps - 状态: 良好</code></pre>
        `
    },
    {
        id: "art-3",
        title: "订阅转换工具全指南：Subconverter 与自建在线订阅转换防泄露配置教程",
        summary: "教您如何使用浪网官方订阅转换工具，轻松将各类机场节点转换成 Clash, Shadowrocket, Sing-Box 及 Quantumult X 格式，保护节点链接隐私。",
        category: ["订阅转换", "科学上网"],
        year: 2025,
        date: "2025年12月14日",
        isoDate: "2025-12-14T14:15:00+00:00",
        readTime: "6 分钟阅读",
        author: "浪网官方",
        likes: 274,
        bannerBg: "linear-gradient(135deg, #d946ef, #8b5cf6)",
        bannerTitle: "订阅转换安全指南",
        imageAlt: "订阅转换配置界面与链接生成工具示意图",
        content: `
            <p>在使用不同客户端时，常常需要将机场原始订阅链接转换为 Clash YAML 配置文件或 Sing-Box JSON 格式。<b>订阅转换</b>不仅方便多客户端使用，还能进行规则去广告和策略组重组。</p>
            <h3>订阅转换安全须知</h3>
            <p>切勿使用来源不明的第三方转换链接，防止机场链接被恶意偷取。推荐使用浪网官方安全托管转换后端或自建客户端转换程序。</p>
        `
    },
    {
        id: "art-4",
        title: "建站优化全攻略：个人独立博客与导航站高性能 CDN 及 SEO/GEO 优化实战",
        summary: "从域名选择、服务器节点配置、前端页面轻量化渲染，到 Google/Baidu 及 AI 搜索爬虫 (llms.txt) 的深度建站优化指南。",
        category: ["建站优化", "机场测试"],
        year: 2025,
        date: "2025年09月09日",
        isoDate: "2025-09-09T11:00:00+00:00",
        readTime: "7 分钟阅读",
        author: "浪网官方",
        likes: 410,
        bannerBg: "linear-gradient(135deg, #059669, #0891b2)",
        bannerTitle: "建站优化实战",
        imageAlt: "高性能 CDN 与建站优化架构示意图",
        content: `
            <p>对于个人博客与导航站来说，网页加载速度与搜索引擎收录效果决定了站点的长期竞争力。掌握<b>建站优化</b>的常用技巧，能帮您的站点脱颖而出。</p>
        `
    },
    {
        id: "art-5",
        title: "Clash / Shadowrocket / Sing-Box 客户端节点配置与故障排查秘籍",
        summary: "手把手教您在 Windows, Mac, iOS, Android 平台配置科学上网客户端，解决节点连通失败、DNS 污染及 Telegram 连不上等常见故障。",
        category: ["翻墙机场", "科学上网"],
        year: 2024,
        date: "2024年11月19日",
        isoDate: "2024-11-19T16:45:00+00:00",
        readTime: "9 分钟阅读",
        author: "浪网官方",
        likes: 315,
        bannerBg: "linear-gradient(135deg, #ea580c, #dc2626)",
        bannerTitle: "客户端配置指南",
        imageAlt: "科学上网客户端软件设置与规则排查流程图",
        content: `
            <p>在使用<b>翻墙机场</b>的过程中，掌握客户端的配置技巧可以极大提升上网体验。本文整理了全平台主流客户端的快速上手说明与故障排除清单。</p>
        `
    }
];

// Clear old browser storage cache if version mismatch
if (localStorage.getItem('langwang_app_version') !== 'v3.0') {
    localStorage.clear();
    localStorage.setItem('langwang_app_version', 'v3.0');
}

// App State
let state = {
    currentCategory: "全部",
    searchQuery: "",
    activeYear: null,
    bookmarks: JSON.parse(localStorage.getItem('saved_bookmarks') || '[]'),
    likedArticles: JSON.parse(localStorage.getItem('liked_articles') || '[]'),
    theme: localStorage.getItem('theme_preference') || 'dark',
    activeView: 'home'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    setupEventListeners();
    renderNav();
    renderArticles();
    renderArchiveWidget();
    renderTagsCloud();
    updateBookmarkBadge();
});

// Theme Management
function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme_preference', theme);
    
    const themeIcon = document.getElementById('theme-toggle-btn');
    if (themeIcon) {
        themeIcon.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        themeIcon.setAttribute('title', theme === 'dark' ? '切换为浅色模式' : '切换为深色模式');
    }
}

// Render Left Navigation Items (Matching User Screenshot "图2" exactly)
function renderNav() {
    const navItems = [
        { id: 'home', label: '首页', icon: '🏠', count: articlesData.length },
        { id: 'search', label: '浪网搜索', icon: '🔍', count: null },
        { id: 'contact', label: '联系我们', icon: '✉️', count: null },
        { id: 'tuijian', label: '机场推荐', icon: '✈️', count: articlesData.filter(a => a.category.includes('机场推荐')).length },
        { id: 'subconvert', label: '订阅转换', icon: '🔄', count: articlesData.filter(a => a.category.includes('订阅转换')).length },
        { id: 'daohang', label: '浪网导航', icon: '☰', count: null },
        { id: 'youhua', label: '建站优化', icon: '🤍', count: null },
        { id: 'guidang', label: '文章归档', icon: '📖', count: articlesData.length },
        { id: 'youlian', label: '友情链接', icon: '🧲', count: null }
    ];

    const compItems = [
        { id: 'fenlei', label: '分类', icon: '🏓', count: null },
        { id: 'yemian', label: '页面', icon: '📄', count: null }
    ];

    const container = document.getElementById('main-nav-list');
    if (container) {
        container.innerHTML = navItems.map(item => `
            <li>
                <a class="nav-link ${state.activeView === item.id ? 'active' : ''}" onclick="handleNavClick('${item.id}')" aria-label="${item.label}">
                    <span class="nav-link-content">
                        <span aria-hidden="true">${item.icon}</span>
                        <span>${item.label}</span>
                    </span>
                    ${item.count !== null ? `<span class="nav-badge">${item.count}</span>` : ''}
                </a>
            </li>
        `).join('');
    }

    const compContainer = document.getElementById('comp-nav-list');
    if (compContainer) {
        compContainer.innerHTML = compItems.map(item => `
            <li>
                <a class="nav-link ${state.activeView === item.id ? 'active' : ''}" onclick="handleNavClick('${item.id}')" aria-label="${item.label}">
                    <span class="nav-link-content">
                        <span aria-hidden="true">${item.icon}</span>
                        <span>${item.label}</span>
                    </span>
                </a>
            </li>
        `).join('');
    }
}

function handleNavClick(viewId) {
    state.activeView = viewId;
    if (viewId === 'search') {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
        state.currentCategory = '全部';
    } else if (viewId === 'tuijian') {
        state.currentCategory = '机场推荐';
    } else if (viewId === 'subconvert') {
        state.currentCategory = '订阅转换';
    } else if (viewId === 'youhua') {
        state.currentCategory = '建站优化';
    } else if (viewId === 'contact' || viewId === 'daohang' || viewId === 'youlian' || viewId === 'fenlei' || viewId === 'yemian') {
        showToast(`已切换至【${viewId === 'fenlei' ? '分类' : viewId === 'yemian' ? '页面' : viewId}】板块`);
        state.currentCategory = '全部';
    } else {
        state.currentCategory = '全部';
    }
    renderNav();
    renderArticles();
}

function switchView(viewId) {
    handleNavClick(viewId);
}

// Filter Engine
function getFilteredArticles() {
    return articlesData.filter(article => {
        if (state.currentCategory === 'Saved') {
            if (!state.bookmarks.includes(article.id)) return false;
        } else if (state.currentCategory !== '全部' && state.currentCategory !== 'All') {
            if (!article.category.includes(state.currentCategory)) return false;
        }

        if (state.activeYear && article.year !== state.activeYear) return false;

        if (state.searchQuery.trim() !== "") {
            const query = state.searchQuery.toLowerCase();
            const titleMatch = article.title.toLowerCase().includes(query);
            const summaryMatch = article.summary.toLowerCase().includes(query);
            const tagMatch = article.category.some(c => c.toLowerCase().includes(query));
            return titleMatch || summaryMatch || tagMatch;
        }

        return true;
    });
}

// Render Articles Feed with Schema.org Microdata
function renderArticles() {
    const container = document.getElementById('articles-feed');
    const filtered = getFilteredArticles();

    renderFilterBar();

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h3>未找到相关文章</h3>
                <p>请尝试搜索其他关键词或重置分类筛选。</p>
                <button class="clear-btn" style="margin-top: 12px;" onclick="resetFilters()">重置所有筛选</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(article => {
        const isSaved = state.bookmarks.includes(article.id);
        const isLiked = state.likedArticles.includes(article.id);
        const likeCount = article.likes + (isLiked ? 1 : 0);

        return `
            <article class="article-card" id="${article.id}" itemscope itemtype="https://schema.org/BlogPosting">
                <meta itemprop="mainEntityOfPage" content="https://langwang.example.com/#${article.id}">
                <meta itemprop="datePublished" content="${article.isoDate}">
                <meta itemprop="dateModified" content="${article.isoDate}">

                <figure class="article-banner">
                    <div class="banner-gradient" style="background: ${article.bannerBg}" role="img" aria-label="${article.imageAlt}">
                        <span class="banner-text">${article.bannerTitle}</span>
                    </div>
                    <figcaption class="sr-only">${article.imageAlt}</figcaption>
                </figure>

                <div class="article-details">
                    <div class="article-header-meta">
                        <div class="article-category">
                            ${article.category.map(cat => `
                                <span class="category-tag" onclick="filterByCategory('${cat}')" itemprop="keywords">${cat}</span>
                            `).join('')}
                        </div>
                        <button class="bookmark-btn ${isSaved ? 'saved' : ''}" onclick="toggleBookmark('${article.id}', event)" title="${isSaved ? '取消收藏' : '收藏文章'}" aria-label="收藏文章">
                            ${isSaved ? '🔖' : '📑'}
                        </button>
                    </div>

                    <h2 class="article-title" itemprop="headline" onclick="openArticleModalById('${article.id}')">${article.title}</h2>
                    <p class="article-summary" itemprop="description">${article.summary}</p>

                    <div class="article-meta-line">
                        <div class="author-info" itemprop="author" itemscope itemtype="https://schema.org/Organization">
                            <div class="author-avatar-sm" aria-hidden="true">
                                <img src="langwang_avatar.jpg" alt="浪网" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
                            </div>
                            <span itemprop="name">${article.author}</span>
                            <span>•</span>
                            <time datetime="${article.isoDate}">${article.date}</time>
                        </div>
                        <div class="meta-stats">
                            <span class="stat-item" title="预估阅读时间">⏱️ ${article.readTime}</span>
                            <span class="stat-item" onclick="toggleLike('${article.id}', event)" title="点赞本篇文章">
                                ${isLiked ? '❤️' : '🤍'} ${likeCount}
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// Render Filter Pill Bar
function renderFilterBar() {
    const categories = ["全部", "机场推荐", "机场测试", "翻墙机场", "订阅转换", "建站优化", "科学上网"];
    const container = document.getElementById('filter-bar-container');
    if (!container) return;

    let filterHTML = `
        <div class="filter-bar" role="tablist">
            ${categories.map(cat => `
                <button class="filter-pill ${state.currentCategory === cat ? 'active' : ''}" onclick="filterByCategory('${cat}')" role="tab" aria-selected="${state.currentCategory === cat}">
                    ${cat}
                </button>
            `).join('')}
        </div>
    `;

    if (state.searchQuery || state.activeYear || (state.currentCategory !== '全部' && state.currentCategory !== 'Saved')) {
        filterHTML += `
            <div class="active-filter-indicator">
                <span>当前分类: <strong>${state.currentCategory}</strong> ${state.activeYear ? `(${state.activeYear}年)` : ''} ${state.searchQuery ? `"${state.searchQuery}"` : ''}</span>
                <button class="clear-btn" onclick="resetFilters()">重置筛选</button>
            </div>
        `;
    }

    container.innerHTML = filterHTML;
}

function filterByCategory(cat) {
    state.currentCategory = cat;
    state.activeView = 'home';
    renderNav();
    renderArticles();
}

function resetFilters() {
    state.currentCategory = "全部";
    state.searchQuery = "";
    state.activeYear = null;
    state.activeView = "home";
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = "";
    renderNav();
    renderArticles();
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderArticles();
        });
    }

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    const modalOverlay = document.getElementById('article-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('scroll', () => {
            const scrollTop = modalOverlay.scrollTop;
            const scrollHeight = modalOverlay.scrollHeight - modalOverlay.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            const progressBar = document.getElementById('modal-progress-bar');
            if (progressBar) progressBar.style.width = `${progress}%`;
        });
    }
}

function toggleBookmark(articleId, event) {
    if (event) event.stopPropagation();
    const idx = state.bookmarks.indexOf(articleId);
    if (idx > -1) {
        state.bookmarks.splice(idx, 1);
        showToast("已从收藏列表中移除文章");
    } else {
        state.bookmarks.push(articleId);
        showToast("文章已成功加入书签 🔖");
    }
    localStorage.setItem('saved_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkBadge();
    renderNav();
    renderArticles();
}

function updateBookmarkBadge() {
    const badge = document.getElementById('bookmark-badge-count');
    if (badge) {
        badge.innerText = state.bookmarks.length;
        badge.style.display = state.bookmarks.length > 0 ? 'inline-block' : 'none';
    }
}

function toggleLike(articleId, event) {
    if (event) event.stopPropagation();
    const idx = state.likedArticles.indexOf(articleId);
    if (idx > -1) {
        state.likedArticles.splice(idx, 1);
    } else {
        state.likedArticles.push(articleId);
        showToast("已点赞本篇文章 ❤️");
    }
    localStorage.setItem('liked_articles', JSON.stringify(state.likedArticles));
    renderArticles();
}

function renderArchiveWidget() {
    const archives = [
        { year: 2026, count: 2 },
        { year: 2025, count: 2 },
        { year: 2024, count: 1 }
    ];

    const container = document.getElementById('archive-widget-list');
    if (!container) return;

    container.innerHTML = archives.map(item => `
        <li class="archive-item ${state.activeYear === item.year ? 'active' : ''}" onclick="filterByYear(${item.year})">
            <span>📅 ${item.year} 年</span>
            <span class="archive-count">${item.count} 篇</span>
        </li>
    `).join('');
}

function filterByYear(year) {
    state.activeYear = state.activeYear === year ? null : year;
    renderArchiveWidget();
    renderArticles();
}

function renderTagsCloud() {
    const tags = ["翻墙机场", "机场推荐", "机场测试", "订阅转换", "建站优化", "科学上网", "浪网导航", "IEPL专线"];
    const container = document.getElementById('tag-cloud-container');
    if (!container) return;

    container.innerHTML = tags.map(tag => `
        <span class="sidebar-tag" onclick="filterByCategory('${tag}')">#${tag}</span>
    `).join('');
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('newsletter-email');
    if (input && input.value) {
        showToast(`订阅成功！浪网官方测评周报将发送至 ${input.value}`);
        input.value = '';
    }
}

function openArticleModalById(id) {
    const article = articlesData.find(a => a.id === id);
    if (article) openArticleModal(article);
}

function openArticleModal(article) {
    const modal = document.getElementById('article-modal');
    const isLiked = state.likedArticles.includes(article.id);
    const likeCount = article.likes + (isLiked ? 1 : 0);
    const isSaved = state.bookmarks.includes(article.id);

    document.getElementById('modal-hero-cover').style.background = article.bannerBg;
    document.getElementById('modal-hero-text').innerText = article.bannerTitle;
    document.getElementById('modal-title').innerText = article.title;
    document.getElementById('modal-author').innerText = article.author;
    document.getElementById('modal-date').innerText = article.date;
    document.getElementById('modal-date').setAttribute('datetime', article.isoDate);
    document.getElementById('modal-read-time').innerText = article.readTime;
    document.getElementById('modal-content').innerHTML = article.content;

    const modalActions = document.getElementById('modal-actions');
    modalActions.innerHTML = `
        <button class="action-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike('${article.id}'); openArticleModalById('${article.id}');">
            ${isLiked ? '❤️ 已赞' : '🤍 点赞'} (${likeCount})
        </button>
        <button class="action-like-btn ${isSaved ? 'liked' : ''}" onclick="toggleBookmark('${article.id}'); openArticleModalById('${article.id}');">
            ${isSaved ? '🔖 已在书签' : '📑 加入书签'}
        </button>
    `;

    injectArticleJSONLD(article);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function injectArticleJSONLD(article) {
    let script = document.getElementById('dynamic-article-jsonld');
    if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-article-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.summary,
        "author": {
            "@type": "Organization",
            "name": article.author
        },
        "datePublished": article.isoDate,
        "dateModified": article.isoDate,
        "keywords": article.category.join(', '),
        "publisher": {
            "@type": "Organization",
            "name": "浪网官方"
        }
    });
}

function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
