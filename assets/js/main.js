// 作品集数据
const portfolioData = [
    {
        id: 1,
        title: "以琳咖啡品牌系统设计",
        category: "brand",
        featured: true,
        modalMode: "vertical",
        cover: "assets/brand/brand-coffee-cover.jpg",
        images: [
            "assets/brand/brand-coffee-long-01.jpg",
            "assets/brand/brand-coffee-long-02.jpg",
            "assets/brand/brand-coffee-long-03.jpg",
            "assets/brand/brand-coffee-long-04.jpg"
        ],
        description: "原创咖啡品牌系统设计，涵盖LOGO、色彩、字体、图形及多场景应用延展，打造统一、完整且具有辨识度的品牌视觉形象。"
    },
    {
        id: 2,
        title: "纳爱斯小程序界面设计",
        category: "ui",
        featured: true,
        modalMode: "vertical",
        cover: "assets/ui/ui-nesi-cover.jpg",
        images: [
            "assets/ui/ui-nesi-long-01.jpg",
            "assets/ui/ui-nesi-long-02.jpg",
            "assets/ui/ui-nesi-long-03.jpg",
            "assets/ui/ui-nesi-long-04.jpg",
            "assets/ui/ui-nesi-long-05.jpg",
            "assets/ui/ui-nesi-long-06.jpg",
            "assets/ui/ui-nesi-long-07.jpg"
        ],
        description: "纳爱斯小程序界面设计，围绕品牌调性统一、用户体验优先原则，打造集产品展示、商城购物、会员互动于一体的轻量化服务平台，强化品牌年轻化形象。"
    },
    {
        id: 3,
        title: "IP形象设计",
        category: "ip",
        featured: true,
        modalMode: "horizontal",
        cover: "assets/ip/ip-01.jpg",
        images: [
            "assets/ip/ip-01.jpg",
            "assets/ip/ip-02.jpg",
            "assets/ip/ip-03.jpg",
            "assets/ip/ip-04.jpg"
        ],
        description: "原创IP家族形象设计，IP名为\"萌\"面生活。 \"萌面\"一语双关，既指角色软萌可爱的外表，也暗含\"蒙面\"寓意，通过外表与内心的反差塑造更具深度与故事感的IP形象。\"生活\"则强调IP的社群属性与陪伴价值，让IP不止是形象，更是能与用户共情、共同成长的生活伙伴。设计围绕核心概念完成IP家族角色、视觉风格与世界观搭建，并延伸至表情、插画、周边等多场景应用，打造治愈、有温度、高辨识度的原创IP体系。"
    },
    {
        id: 4,
        title: "篆刻印章信息图表",
        category: "layout",
        modalMode: "horizontal",
        cover: "assets/layout/seal-01.jpg",
        images: [
            "assets/layout/seal-01.jpg",
            "assets/layout/seal-02.jpg",
            "assets/layout/seal-03.jpg"
        ],
        description: "版式设计：篆刻印章信息可视化探索。"
    },
    {
        id: 5,
        title: "宣传册设计",
        category: "layout",
        modalMode: "horizontal",
        cover: "assets/layout/brochure-01.jpg",
        images: [
            "assets/layout/brochure-01.jpg",
            "assets/layout/brochure-02.jpg",
            "assets/layout/brochure-03.jpg",
            "assets/layout/brochure-04.jpg",
            "assets/layout/brochure-05.jpg",
            "assets/layout/brochure-06.jpg",
            "assets/layout/brochure-07.jpg"
        ],
        description: "基于台州非遗美食\"白水洋豆腐\"进行的品牌宣传册设计。"
    },
    {
        id: 6,
        title: "展板设计",
        category: "layout",
        modalMode: "horizontal",
        cover: "assets/layout/poster-board-01.jpg",
        images: [
            "assets/layout/poster-board-01.jpg"
        ],
        description: "临海体育赛事经济概况展板设计。"
    },
    {
        id: 7,
        title: "折页设计",
        category: "layout",
        modalMode: "horizontal",
        cover: "assets/layout/fold-01.jpg",
        images: [
            "assets/layout/fold-01.jpg",
            "assets/layout/fold-02.jpg",
            "assets/layout/fold-03.jpg",
            "assets/layout/fold-04.jpg"
        ],
        description: "饮用水健康与安全三折页设计。"
    },
    {
        id: 8,
        title: "临海蜜桔包装设计",
        category: "other",
        modalMode: "horizontal",
        cover: "assets/other/orange-package-01.jpg",
        images: [
            "assets/other/orange-package-01.jpg",
            "assets/other/orange-package-02.jpg",
            "assets/other/orange-package-03.jpg",
            "assets/other/orange-package-04.jpg"
        ],
        description: "临海蜜桔包装设计，以手绘插画还原桔乡风貌，暖橙色调传递自然鲜甜质感，兼顾便携提手与信息可读性，打造兼具地域特色与市场竞争力的农产品包装。"
    },
    {
        id: 9,
        title: "公益海报",
        category: "other",
        modalMode: "horizontal",
        cover: "assets/other/charity-poster-01.jpg",
        images: [
            "assets/other/charity-poster-01.jpg"
        ],
        description: "反拐公益海报设计，以\"糖果陷阱\"为创意隐喻，用强烈色彩与符号化图形传递警示信息，呼吁关注儿童安全，传递温暖与社会责任感。"
    }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initFeatured();
    initCategoryPortfolio('all');
    initFilters();
    initModal();
    initScrollAnimations();
    initSmoothScroll();
    initHeroInteraction();
    initCustomCursor();
});

// 自定义光标
function initCustomCursor() {
    // 检测是否为移动端
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 移动端关闭鼠标动效
    if (isMobile) {
        document.body.style.cursor = 'default';
        return;
    }
    
    // 创建自定义光标元素
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // 粒子拖尾数组
    const trailParticles = [];
    const maxParticles = 3;
    
    // 鼠标移动事件 - 提高灵敏性
    document.addEventListener('mousemove', (e) => {
        // 更新光标位置
        cursor.style.left = e.clientX - 11 + 'px';
        cursor.style.top = e.clientY - 11 + 'px';
        
        // 创建粒子拖尾
        createTrailParticle(e.clientX, e.clientY);
    });
    
    // 创建粒子拖尾
    function createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'cursor-trail';
        particle.style.left = x - 3 + 'px';
        particle.style.top = y - 3 + 'px';
        
        document.body.appendChild(particle);
        trailParticles.push(particle);
        
        // 移除旧粒子
        setTimeout(() => {
            particle.remove();
            const index = trailParticles.indexOf(particle);
            if (index > -1) {
                trailParticles.splice(index, 1);
            }
        }, 800);
        
        // 限制粒子数量
        if (trailParticles.length > maxParticles) {
            const oldestParticle = trailParticles.shift();
            oldestParticle.remove();
        }
    }
    
    // 鼠标悬停事件
    const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .design-tag, .filter-btn');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // 点击事件和波纹效果
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // 点击波纹效果
    document.addEventListener('click', (e) => {
        createRipple(e.clientX, e.clientY);
    });
}

// 创建点击波纹
function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = x - 25 + 'px';
    ripple.style.top = y - 25 + 'px';
    ripple.style.width = '50px';
    ripple.style.height = '50px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Hero 交互 (鼠标跟随视差)
function initHeroInteraction() {
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.hero-content');
    
    hero.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        content.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
    
    hero.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

function renderCards(grid, items) {
    grid.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card fade-in';
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${item.cover}" alt="${item.title}" class="card-image-img object-contain">
            </div>
            <div class="card-overlay">
                <div class="card-info">
                    <h3>${item.title}</h3>
                    <p>${item.category.toUpperCase()}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        grid.appendChild(card);
    });
}

function observeCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.portfolio-card.fade-in');
    cards.forEach(card => observer.observe(card));
}

function initFeatured() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) {
        return;
    }

    const items = portfolioData.filter(item => item.featured);
    renderCards(grid, items);
    observeCards();
}

function initCategoryPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) {
        return;
    }

    const section = document.getElementById('portfolio');
    const items = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    renderCards(grid, items);
    observeCards();

    const single = items.length === 1;
    grid.classList.toggle('single', single);
    if (section) {
        section.classList.toggle('single', single);
    }
}

// 初始化分类过滤
function initFilters() {
    const filterLinks = document.querySelectorAll('[data-filter]');
    const portfolioTitle = document.getElementById('portfolioTitle');
    const titleMap = {
        brand: '品牌设计 / BRAND DESIGN',
        ui: 'UI设计 / UI DESIGN',
        ip: 'IP形象设计 / IP DESIGN',
        layout: '版式设计 / LAYOUT DESIGN',
        other: '其他设计 / OTHER DESIGN',
        all: '作品集 / PORTFOLIO',
    };

    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter') || link.dataset.filter;
            
            // 如果是在下拉菜单中点击，则跳转到作品集区域
            if (link.closest('.dropdown-menu')) {
                const portfolioSection = document.getElementById('portfolio');
                window.scrollTo({
                    top: portfolioSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            if (portfolioTitle && titleMap[filter]) {
                portfolioTitle.textContent = titleMap[filter];
            }
            const buttons = document.querySelectorAll('.category-filters .filter-btn');
            buttons.forEach(btn => btn.classList.toggle('active', (btn.dataset.filter || btn.getAttribute('data-filter')) === filter));
            initCategoryPortfolio(filter);
        });
    });
}

// 初始化弹窗
function initModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (modal._keyHandler) {
            window.removeEventListener('keydown', modal._keyHandler);
            modal._keyHandler = null;
        }
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openModal(item) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    const imagesHtml = item.images.map((img) => {
        if (item.modalMode === 'horizontal') {
            return `
                <div class="modal-slide">
                    <img src="${img}" alt="${item.title}" class="modal-image modal-image-horizontal">
                </div>
            `;
        }
        return `<img src="${img}" alt="${item.title}" class="modal-image w-full h-auto">`;
    }).join('');

    const imagesContainer = item.modalMode === 'horizontal'
        ? `
            <div class="modal-image-scroller" data-scroller="1">
                ${imagesHtml}
            </div>
            <button type="button" class="modal-nav modal-nav-prev" aria-label="上一张">‹</button>
            <button type="button" class="modal-nav modal-nav-next" aria-label="下一张">›</button>
        `
        : `<div class="modal-image-list">${imagesHtml}</div>`;
    
    modalBody.innerHTML = `
        <div class="modal-detail">
            <div class="modal-header">
                <h2>${item.title}</h2>
                <p class="modal-category">${item.category.toUpperCase()}</p>
                <p class="modal-desc">${item.description}</p>
            </div>
            ${imagesContainer}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (item.modalMode === 'horizontal') {
        const scroller = modalBody.querySelector('[data-scroller="1"]');
        const prev = modalBody.querySelector('.modal-nav-prev');
        const next = modalBody.querySelector('.modal-nav-next');

        const scrollToIndex = (delta) => {
            if (!scroller) {
                return;
            }
            const width = scroller.clientWidth;
            const index = Math.round(scroller.scrollLeft / Math.max(1, width));
            const nextIndex = Math.max(0, Math.min(index + delta, item.images.length - 1));
            scroller.scrollTo({ left: nextIndex * width, behavior: 'smooth' });
        };

        prev?.addEventListener('click', () => scrollToIndex(-1));
        next?.addEventListener('click', () => scrollToIndex(1));
    }

    if (modal._keyHandler) {
        window.removeEventListener('keydown', modal._keyHandler);
        modal._keyHandler = null;
    }

    modal._keyHandler = (e) => {
        if (modal.style.display !== 'block') {
            return;
        }
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (modal._keyHandler) {
                window.removeEventListener('keydown', modal._keyHandler);
                modal._keyHandler = null;
            }
            return;
        }

        if (item.modalMode === 'horizontal') {
            const scroller = modalBody.querySelector('[data-scroller="1"]');
            const width = scroller?.clientWidth || 0;
            if (!scroller || width <= 0) {
                return;
            }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const delta = e.key === 'ArrowLeft' ? -1 : 1;
                const index = Math.round(scroller.scrollLeft / Math.max(1, width));
                const nextIndex = Math.max(0, Math.min(index + delta, item.images.length - 1));
                scroller.scrollTo({ left: nextIndex * width, behavior: 'smooth' });
            }
        }
    };
    window.addEventListener('keydown', modal._keyHandler);
}

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.portfolio-card, .about-content, .about-image');
    animateElements.forEach(el => observer.observe(el));
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hasAttribute('data-filter')) {
                return;
            }
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 更新 active 状态
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// 导航栏背景变化和滚动监听
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--soft-shadow)';
        navbar.style.height = '70px';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.height = '80px';
    }
    
    // 滚动监听，高亮对应导航项
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
