// ═══════════════════════════════════════════════════════════════════════════
// QCOE Newsletter Hub v2 - Ultra Dynamic Application
// Inspired by packwire.com & advisorscada.com
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    console.log('🚀 QCOE Newsletter Hub v2 Initializing...');
    
    initCustomCursor();
    initScrollProgress();
    initNavbar();
    initLogoHome();
    initDropdowns();
    initTypingEffect();
    initScrollAnimations();
    initCounterAnimations();
    initOverviewCarousel();
    initTeamsCarousel();
    initTeamCards();
    initFilters();
    initManagerToggle();
    initMVPGrid();
    initAutomationTable();
    initAISection();
    initModal();
    initSmoothScroll();
    
    console.log('✅ All systems go!');
}

// ═══════════════════════════════════════════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════════════════════════════════════════

function initCustomCursor() {
    const follower = document.getElementById('cursorFollower');
    const dot = document.getElementById('cursorDot');
    
    if (!follower || !dot || window.innerWidth < 768) return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });
    
    // Smooth follow
    function animate() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animate);
    }
    animate();
    
    // Hover states
    const hoverElements = document.querySelectorAll('a, button, .team-card, .quick-card, .overview-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hover'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL PROGRESS BAR
// ═══════════════════════════════════════════════════════════════════════════

function initScrollProgress() {
    const progress = document.getElementById('scrollProgress');
    if (!progress) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progress.style.width = scrollPercent + '%';
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// LOGO HOME NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

function initLogoHome() {
    const logo = document.getElementById('logoHome');
    if (!logo) return;
    
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// DROPDOWN MENUS
// ═══════════════════════════════════════════════════════════════════════════

function initDropdowns() {
    // Team dropdown items
    document.querySelectorAll('.dropdown-item[data-team]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const teamId = item.dataset.team;
            openTeamModal(teamId);
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// TYPING EFFECT
// ═══════════════════════════════════════════════════════════════════════════

function initTypingEffect() {
    const element = document.getElementById('typingText');
    if (!element) return;
    
    const words = ['Status Hub', 'Team Insights', 'AI Analytics', 'Sprint Updates'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isPaused) {
            setTimeout(type, 1500);
            isPaused = false;
            isDeleting = true;
            return;
        }
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                isPaused = true;
            }
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
    
    // Start after a delay
    setTimeout(type, 1000);
}

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
    
    // Also observe team cards and stat cards for bar animations
    const animatedCards = document.querySelectorAll('.hero-stat-card, .overview-card, .team-bar-row');
    animatedCards.forEach(el => observer.observe(el));
    
}

// ═══════════════════════════════════════════════════════════════════════════
// COUNTER ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseFloat(element.dataset.count);
    const duration = 2000;
    const isFloat = target % 1 !== 0;
    let start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        const current = start + (target - start) * easeOutExpo;
        
        element.textContent = isFloat ? current.toFixed(1) : Math.round(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = isFloat ? target.toFixed(1) : target;
        }
    }
    
    requestAnimationFrame(update);
}

// ═══════════════════════════════════════════════════════════════════════════
// OVERVIEW CAROUSEL WITH BOOMERANG AUTO-PLAY
// ═══════════════════════════════════════════════════════════════════════════

let overviewIndex = 0;
let overviewDirection = 1;
let overviewInterval = null;
let overviewPaused = false;
const OVERVIEW_CARDS_COUNT = 3;
const OVERVIEW_DELAY = 15000; // 15 seconds

function initOverviewCarousel() {
    const cards = document.querySelectorAll('.overview-card');
    const prevBtn = document.getElementById('overviewPrev');
    const nextBtn = document.getElementById('overviewNext');
    const dots = document.querySelectorAll('.overview-dot');
    const carousel = document.getElementById('overviewCarousel');
    
    if (!cards.length) return;
    
    // Initialize first card as active
    updateOverviewCards();
    
    // Arrow controls
    prevBtn?.addEventListener('click', () => {
        pauseOverview();
        moveOverview(-1);
        resumeOverviewAfterDelay();
    });
    
    nextBtn?.addEventListener('click', () => {
        pauseOverview();
        moveOverview(1);
        resumeOverviewAfterDelay();
    });
    
    // Dot controls
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            pauseOverview();
            overviewIndex = parseInt(dot.dataset.index);
            updateOverviewCards();
            resumeOverviewAfterDelay();
        });
    });
    
    // Pause on hover
    carousel?.addEventListener('mouseenter', pauseOverview);
    carousel?.addEventListener('mouseleave', resumeOverviewAfterDelay);
    
    // Start auto-play
    startOverviewAutoPlay();
}

function startOverviewAutoPlay() {
    if (overviewInterval) clearInterval(overviewInterval);
    
    overviewInterval = setInterval(() => {
        if (!overviewPaused) {
            boomerangOverview();
        }
    }, OVERVIEW_DELAY);
    
    // Start progress animation
    animateOverviewProgress();
}

let overviewProgressPausedWidth = 0;
let overviewProgressStartTime = 0;

function pauseOverview() {
    overviewPaused = true;
    const autoplay = document.getElementById('overviewAutoplay');
    const bar = document.querySelector('.overview-autoplay-bar');
    autoplay?.classList.add('paused');
    
    // Calculate and freeze current progress width
    if (bar && overviewProgressStartTime) {
        const elapsed = Date.now() - overviewProgressStartTime;
        overviewProgressPausedWidth = Math.min((elapsed / OVERVIEW_DELAY) * 100, 100);
        bar.style.transition = 'none';
        bar.style.width = `${overviewProgressPausedWidth}%`;
    }
}

function resumeOverviewAfterDelay() {
    setTimeout(() => {
        if (overviewPaused) {
            overviewPaused = false;
            const autoplay = document.getElementById('overviewAutoplay');
            const bar = document.querySelector('.overview-autoplay-bar');
            autoplay?.classList.remove('paused');
            
            // Resume from where we paused
            if (bar) {
                const remainingPercent = 100 - overviewProgressPausedWidth;
                const remainingTime = (remainingPercent / 100) * OVERVIEW_DELAY;
                
                requestAnimationFrame(() => {
                    bar.style.transition = `width ${remainingTime}ms linear`;
                    bar.style.width = '100%';
                });
            }
        }
    }, 500);
}

function boomerangOverview() {
    // For circular carousel, just keep going forward (it wraps around)
    overviewIndex = (overviewIndex + 1) % OVERVIEW_CARDS_COUNT;
    updateOverviewCards();
    animateOverviewProgress();
}

function moveOverview(direction) {
    // Circular navigation
    overviewIndex = (overviewIndex + direction + OVERVIEW_CARDS_COUNT) % OVERVIEW_CARDS_COUNT;
    updateOverviewCards();
    animateOverviewProgress();
}

function updateOverviewCards() {
    const inner = document.getElementById('overviewInner');
    const cards = document.querySelectorAll('.overview-card');
    const dots = document.querySelectorAll('.overview-dot');
    
    // Rotate carousel so active card faces front
    // Card 0 is at 0°, Card 1 is at 120°, Card 2 is at -120° (240°)
    const rotations = [0, -120, 120];
    const rotation = rotations[overviewIndex] || 0;
    
    if (inner) {
        inner.style.transform = `rotateY(${rotation}deg)`;
    }
    
    // Update active states
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === overviewIndex);
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === overviewIndex);
    });
}

function animateOverviewProgress() {
    const bar = document.querySelector('.overview-autoplay-bar');
    if (!bar) return;
    
    // Reset progress tracking
    overviewProgressPausedWidth = 0;
    overviewProgressStartTime = Date.now();
    
    // Reset and animate
    bar.style.transition = 'none';
    bar.style.width = '0%';
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            bar.style.transition = `width ${OVERVIEW_DELAY}ms linear`;
            bar.style.width = '100%';
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// TEAMS CAROUSEL WITH BOOMERANG AUTO-PLAY
// ═══════════════════════════════════════════════════════════════════════════

let carouselIndex = 0;
let cardsPerView = 3;
let totalTeams = 0;
let boomerangDirection = 1; // 1 = forward, -1 = backward
let autoPlayInterval = null;
let autoPlayPaused = false;
const AUTO_PLAY_DELAY = 15000; // 15 seconds

function getCardsPerView() {
    // Card width is 340px + 25px gap = 365px per card
    const cardSpace = 365;
    const containerWidth = window.innerWidth - 80; // Account for padding
    const count = Math.floor(containerWidth / cardSpace);
    return Math.max(1, Math.min(count, 4)); // Min 1, max 4
}

function initTeamsCarousel() {
    cardsPerView = getCardsPerView();
    renderTeamCards();
    
    const prevBtn = document.getElementById('teamsPrev');
    const nextBtn = document.getElementById('teamsNext');
    
    prevBtn?.addEventListener('click', () => {
        moveCarousel(-1);
    });
    
    nextBtn?.addEventListener('click', () => {
        moveCarousel(1);
    });
    
    // Touch/swipe support
    const carousel = document.getElementById('teamsCarousel');
    let startX = 0;
    
    carousel?.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        pauseAutoPlay();
    });
    
    carousel?.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            moveCarousel(diff > 0 ? 1 : -1);
        }
    });
    
    // No auto-play pause needed - manual navigation only
    
    // Handle resize
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            carouselIndex = 0;
            updateCarouselPosition();
        }
    });
    
    // No auto-play for team reports - user controls only
}

function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    
    autoPlayInterval = setInterval(() => {
        if (!autoPlayPaused) {
            boomerangMove();
        }
    }, AUTO_PLAY_DELAY);
}

function pauseAutoPlay() {
    autoPlayPaused = true;
    const indicator = document.getElementById('autoplayIndicator');
    indicator?.classList.add('paused');
}

function resumeAutoPlayAfterDelay() {
    // Resume after 3 seconds of no interaction
    setTimeout(() => {
        autoPlayPaused = false;
        const indicator = document.getElementById('autoplayIndicator');
        indicator?.classList.remove('paused');
        // Reset the animation
        resetAutoplayAnimation();
    }, 3000);
}

function resetAutoplayAnimation() {
    const bar = document.querySelector('.autoplay-bar');
    if (bar) {
        // Force restart of the ::after animation by toggling a class
        bar.classList.remove('animating');
        bar.offsetHeight; // Trigger reflow
        bar.classList.add('animating');
    }
}

function boomerangMove() {
    const maxIndex = Math.max(0, totalTeams - cardsPerView);
    
    // Check if we need to reverse direction
    if (carouselIndex >= maxIndex) {
        boomerangDirection = -1;
    } else if (carouselIndex <= 0) {
        boomerangDirection = 1;
    }
    
    carouselIndex += boomerangDirection;
    carouselIndex = Math.max(0, Math.min(maxIndex, carouselIndex));
    
    updateCarouselPosition();
    resetAutoplayAnimation();
}

// Manager order priority (Marco first)
const MANAGER_ORDER = [
    'Marco De Jesus Ciriaco',
    'Marco de Jesus Ciriaco', // Handle case variation
    'Archana Gorantla',
    'Irina Easterling',
    'Manasa Jayaraman'
];

function normalizeManagerName(name) {
    // Normalize manager name for consistent comparison
    return name ? name.toLowerCase().replace(/\s+/g, ' ').trim() : '';
}

function getManagerPriority(managerName) {
    const normalized = normalizeManagerName(managerName);
    for (let i = 0; i < MANAGER_ORDER.length; i++) {
        if (normalizeManagerName(MANAGER_ORDER[i]) === normalized) {
            return i;
        }
    }
    return MANAGER_ORDER.length; // Unknown managers go last
}

function getTeamsSortedByManager() {
    const teams = Object.values(TEAMS_DATA);
    
    // QCOE always first
    const qcoe = teams.find(t => t.id === 'qcoe');
    const otherTeams = teams.filter(t => t.id !== 'qcoe');
    
    // Sort other teams by manager priority, then by team name
    otherTeams.sort((a, b) => {
        const priorityA = getManagerPriority(a.manager);
        const priorityB = getManagerPriority(b.manager);
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        // Within same manager, sort by team name
        return a.name.localeCompare(b.name);
    });
    
    // Return QCOE first, then sorted teams
    return qcoe ? [qcoe, ...otherTeams] : otherTeams;
}

function renderTeamCards(filter = 'all') {
    const carousel = document.getElementById('teamsCarousel');
    if (!carousel) return;
    
    // Always sort by manager (Marco first, QCOE first overall)
    const teams = getTeamsSortedByManager();
    carouselIndex = 0;
    
    // Check if we need manager headers
    const showManagerHeaders = filter === 'manager';
    
    if (showManagerHeaders) {
        carousel.innerHTML = renderTeamsWithManagerHeaders(teams);
    } else {
        // Show manager name on cards in "All Teams" view
        carousel.innerHTML = teams.map(team => renderTeamCard(team, true)).join('');
    }
    
    // Count all visible items (teams + manager headers) AFTER rendering
    const visibleItems = carousel.querySelectorAll('.team-card:not(.manager-collapsed), .manager-header-card');
    totalTeams = visibleItems.length;
    
    updateCarouselProgress();
    updateArrowStates();
}

// Track collapsed manager states
const collapsedManagers = new Set();

function renderTeamsWithManagerHeaders(teams) {
    let html = '';
    
    // Group teams by manager first (preserve order)
    const managerOrder = [];
    const managerGroups = {};
    teams.forEach(team => {
        const managerName = team.manager || 'Unknown';
        const normalized = normalizeManagerName(managerName);
        if (!managerGroups[normalized]) {
            managerGroups[normalized] = { name: managerName, teams: [] };
            managerOrder.push(normalized);
        }
        managerGroups[normalized].teams.push(team);
    });
    
    // Render each manager group in order
    managerOrder.forEach(normalizedName => {
        const group = managerGroups[normalizedName];
        const isCollapsed = collapsedManagers.has(normalizedName);
        const teamCount = group.teams.length;
        
        // Manager header card (clickable)
        html += `
            <div class="manager-header-card ${isCollapsed ? 'collapsed' : ''}" 
                 data-manager-toggle="${normalizedName}"
                 title="Click to ${isCollapsed ? 'expand' : 'collapse'}">
                <div class="manager-icon">${isCollapsed ? '📁' : '📂'}</div>
                <div class="manager-name">${group.name}</div>
                <div class="manager-teams-count">${teamCount} team${teamCount > 1 ? 's' : ''}</div>
                <div class="manager-toggle-hint">${isCollapsed ? 'Click to expand' : 'Click to collapse'}</div>
            </div>
        `;
        
        // Render team cards with manager data attribute
        group.teams.forEach(team => {
            const cardHtml = renderTeamCard(team, false); // Don't show manager since we have header
            html += cardHtml;
        });
    });
    
    return html;
}

function getTeamCountForManager(teams, managerName) {
    const normalized = normalizeManagerName(managerName);
    return teams.filter(t => normalizeManagerName(t.manager) === normalized).length;
}

function initManagerToggle() {
    document.addEventListener('click', (e) => {
        const header = e.target.closest('.manager-header-card[data-manager-toggle]');
        if (!header) return;
        
        const managerId = header.dataset.managerToggle;
        const isCurrentlyCollapsed = collapsedManagers.has(managerId);
        
        // Toggle collapsed state
        if (isCurrentlyCollapsed) {
            collapsedManagers.delete(managerId);
        } else {
            collapsedManagers.add(managerId);
        }
        
        // Update header appearance
        header.classList.toggle('collapsed');
        const icon = header.querySelector('.manager-icon');
        const hint = header.querySelector('.manager-toggle-hint');
        if (icon) icon.textContent = isCurrentlyCollapsed ? '📂' : '📁';
        if (hint) hint.textContent = isCurrentlyCollapsed ? 'Click to collapse' : 'Click to expand';
        
        // Find and animate only this manager's team cards
        const carousel = document.getElementById('teamsCarousel');
        const teamCards = carousel.querySelectorAll(`.team-card[data-manager="${managerId}"]`);
        
        teamCards.forEach((card, index) => {
            // Stagger the animation
            setTimeout(() => {
                if (isCurrentlyCollapsed) {
                    // Expand - show cards
                    card.classList.remove('manager-collapsed');
                    card.classList.add('manager-expanding');
                    setTimeout(() => card.classList.remove('manager-expanding'), 400);
                } else {
                    // Collapse - hide cards
                    card.classList.add('manager-collapsing');
                    setTimeout(() => {
                        card.classList.remove('manager-collapsing');
                        card.classList.add('manager-collapsed');
                    }, 300);
                }
            }, index * 50); // 50ms stagger between cards
        });
        
        // Update carousel total after animation completes
        setTimeout(() => {
            updateVisibleTeamCount();
        }, 400);
    });
}

function updateVisibleTeamCount() {
    const carousel = document.getElementById('teamsCarousel');
    const visibleItems = carousel.querySelectorAll('.team-card:not(.manager-collapsed), .manager-header-card');
    totalTeams = visibleItems.length;
    updateArrowStates();
}

function renderTeamCard(team, showManager = true) {
    // Special card for QCOE team
    if (team.isSpecialTeam && team.id === 'qcoe') {
        return renderQCOECard(team, showManager);
    }
    
    // Get manager short name (first name only)
    const managerShort = team.manager ? team.manager.split(' ')[0] : 'N/A';
    
    // Standard team card
    return `
        <div class="team-card" data-team="${team.id}" data-manager="${normalizeManagerName(team.manager)}">
            <div class="team-card-header">
                <div class="team-avatar">${team.shortName}</div>
                <div>
                    <div class="team-name">${team.name}</div>
                    <div class="team-lead">Lead: ${team.lead || 'N/A'}</div>
                    ${showManager ? `<div class="team-manager">Manager: ${managerShort}</div>` : ''}
                </div>
            </div>
            <div class="team-card-stats">
                <div class="team-stat">
                    <div class="team-stat-value">${team.stats.pbis}</div>
                    <div class="team-stat-label">PBIs</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value">${team.engineers.length}</div>
                    <div class="team-stat-label">Engineers</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value">${team.stats.timeSaved}h</div>
                    <div class="team-stat-label">AI Saved</div>
                </div>
            </div>
            <div class="team-badges">
                <span class="team-badge ${team.followingTDD === true ? 'tdd-yes' : 'tdd-no'}">
                    ${team.followingTDD === true ? '✓ TDD' : '✗ TDD'}
                </span>
                ${team.usingAI ? '<span class="team-badge ai">🤖 AI</span>' : ''}
                ${team.mvp ? '<span class="team-badge mvp">🏆 MVP</span>' : ''}
            </div>
        </div>
    `;
}

// Special card rendering for QCOE team
function renderQCOECard(team, showManager = true) {
    // Calculate rollout progress
    const rolloutDone = team.testgennieRollout ? team.testgennieRollout.filter(i => i.status === 'done').length : 0;
    const rolloutTotal = team.testgennieRollout ? team.testgennieRollout.length : 0;
    const reportsCount = team.reports ? team.reports.length : 0;
    const managerShort = team.manager ? team.manager.split(' ')[0] : 'N/A';
    
    return `
        <div class="team-card qcoe-special" data-team="${team.id}" data-manager="${normalizeManagerName(team.manager)}">
            <div class="team-card-header">
                <div class="team-avatar qcoe-avatar">${team.shortName}</div>
                <div>
                    <div class="team-name">${team.name}</div>
                    <div class="team-lead">Lead: ${team.lead || 'N/A'}</div>
                    ${showManager ? `<div class="team-manager">Manager: ${managerShort}</div>` : ''}
                </div>
            </div>
            <div class="team-card-stats">
                <div class="team-stat">
                    <div class="team-stat-value">${rolloutDone}/${rolloutTotal}</div>
                    <div class="team-stat-label">Rollout</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value">${reportsCount}</div>
                    <div class="team-stat-label">Reports</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-value">${team.engineers.length}</div>
                    <div class="team-stat-label">Engineers</div>
                </div>
            </div>
            <div class="team-badges">
                <span class="team-badge qcoe-badge">🚀 TestGennie</span>
                <span class="team-badge qcoe-badge">📊 Reports</span>
                ${team.mvp ? '<span class="team-badge mvp">🏆 MVP</span>' : ''}
            </div>
        </div>
    `;
}

function moveCarousel(direction) {
    const carousel = document.getElementById('teamsCarousel');
    
    // Count visible items (not collapsed)
    const visibleItems = carousel ? 
        carousel.querySelectorAll('.team-card:not(.manager-collapsed), .manager-header-card').length : 
        totalTeams;
    
    const maxIndex = Math.max(0, visibleItems - cardsPerView);
    const newIndex = carouselIndex + direction;
    
    // Don't move if at bounds
    if (newIndex < 0 || newIndex > maxIndex) return;
    
    carouselIndex = newIndex;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const carousel = document.getElementById('teamsCarousel');
    // Include both visible team cards and manager headers (exclude collapsed)
    const visibleCards = carousel?.querySelectorAll('.team-card:not(.manager-collapsed), .manager-header-card');
    if (!visibleCards?.length) return;
    
    // Find the first visible card to get width
    const firstVisibleCard = visibleCards[0];
    const cardWidth = firstVisibleCard.offsetWidth + 25; // include gap
    
    // Calculate offset based on visible items only
    // We need to calculate the actual pixel offset by counting visible items up to carouselIndex
    let offset = 0;
    let visibleCount = 0;
    const allItems = carousel.querySelectorAll('.team-card, .manager-header-card');
    
    for (let i = 0; i < allItems.length && visibleCount < carouselIndex; i++) {
        const item = allItems[i];
        if (!item.classList.contains('manager-collapsed')) {
            offset += item.offsetWidth + 25;
            visibleCount++;
        }
    }
    
    carousel.style.transform = `translateX(-${offset}px)`;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';
    
    // Update center card focus (only for visible team cards)
    const teamCards = carousel?.querySelectorAll('.team-card:not(.manager-collapsed)');
    updateCenterCardFocus(teamCards);
    
    // Update total to visible items only
    totalTeams = visibleCards.length;
    
    updateCarouselProgress();
    updateArrowStates();
}

function updateCenterCardFocus(cards) {
    if (!cards?.length) return;
    
    // Calculate which card is in the center of the view
    const centerOffset = Math.floor(cardsPerView / 2);
    const centerIndex = carouselIndex + centerOffset;
    
    // Remove focus from all cards
    cards.forEach((card, index) => {
        card.classList.remove('center-focus');
    });
    
    // Get visible cards based on current filter
    const visibleCards = Array.from(cards).filter(card => 
        card.style.display !== 'none'
    );
    
    // Add focus to center card
    if (visibleCards[centerIndex]) {
        visibleCards[centerIndex].classList.add('center-focus');
    } else if (visibleCards[carouselIndex]) {
        // Fallback to first visible card if center calculation is off
        visibleCards[carouselIndex].classList.add('center-focus');
    }
}

function updateCarouselProgress() {
    const progress = document.getElementById('teamsProgress');
    const carousel = document.getElementById('teamsCarousel');
    
    // Count visible items
    const visibleItems = carousel ? 
        carousel.querySelectorAll('.team-card:not(.manager-collapsed), .manager-header-card').length : 
        totalTeams;
    
    const maxIndex = Math.max(1, visibleItems - cardsPerView + 1);
    const percent = ((carouselIndex + 1) / maxIndex) * 100;
    
    if (progress) {
        progress.style.width = Math.min(percent, 100) + '%';
    }
}

function updateArrowStates() {
    const prevBtn = document.getElementById('teamsPrev');
    const nextBtn = document.getElementById('teamsNext');
    const carousel = document.getElementById('teamsCarousel');
    
    // Count visible items (not collapsed)
    const visibleItems = carousel ? 
        carousel.querySelectorAll('.team-card:not(.manager-collapsed), .manager-header-card').length : 
        totalTeams;
    
    const maxIndex = Math.max(0, visibleItems - cardsPerView);
    
    if (prevBtn) {
        if (carouselIndex <= 0) {
            prevBtn.classList.add('disabled');
            prevBtn.disabled = true;
        } else {
            prevBtn.classList.remove('disabled');
            prevBtn.disabled = false;
        }
    }
    
    if (nextBtn) {
        if (carouselIndex >= maxIndex) {
            nextBtn.classList.add('disabled');
            nextBtn.disabled = true;
        } else {
            nextBtn.classList.remove('disabled');
            nextBtn.disabled = false;
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// TEAM CARDS CLICK
// ═══════════════════════════════════════════════════════════════════════════

function initTeamCards() {
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.team-card[data-team]');
        if (card) {
            openTeamModal(card.dataset.team);
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// FILTERS
// ═══════════════════════════════════════════════════════════════════════════

function initFilters() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            const filter = chip.dataset.filter;
            
            // For 'all' and 'manager', re-render the cards
            if (filter === 'all' || filter === 'manager') {
                renderTeamCards(filter);
            } else {
                // For other filters, just show/hide existing cards
                renderTeamCards('all'); // Reset to all first
                filterTeams(filter);
            }
            
            // Reset carousel to beginning
            carouselIndex = 0;
            updateCarouselPosition();
        });
    });
}

function filterTeams(filter) {
    const cards = document.querySelectorAll('.team-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const teamId = card.dataset.team;
        if (!teamId) return; // Skip manager headers
        
        const team = TEAMS_DATA[teamId];
        if (!team) return;
        
        let show = true;
        
        switch (filter) {
            case 'tdd':
                show = team.followingTDD === true;
                break;
            case 'mvp':
                show = team.mvp !== null && team.mvp !== undefined;
                break;
            case 'ai':
                show = team.stats.timeSaved > 2;
                break;
        }
        
        card.style.display = show ? '' : 'none';
        card.style.opacity = show ? '1' : '0';
        
        if (show) visibleCount++;
    });
    
    // Update total for arrow states
    totalTeams = visibleCount;
    updateArrowStates();
}

// ═══════════════════════════════════════════════════════════════════════════
// MVP GRID
// ═══════════════════════════════════════════════════════════════════════════

function initMVPGrid() {
    // MVP cards are now hardcoded in HTML for reliability
    console.log('MVP section loaded');
}

// ═══════════════════════════════════════════════════════════════════════════
// AUTOMATION TABLE
// ═══════════════════════════════════════════════════════════════════════════

function initAutomationTable() {
    const table = document.getElementById('automationTable');
    if (!table) return;
    
    const items = [...ALL_AUTOMATION].sort((a, b) => b.coverage - a.coverage);
    
    table.innerHTML = `
        <thead>
            <tr>
                <th>Application</th>
                <th>Team</th>
                <th>Status</th>
                <th>Coverage</th>
                <th>Target</th>
                <th>Owner</th>
            </tr>
        </thead>
        <tbody>
            ${items.slice(0, 15).map(item => `
                <tr>
                    <td><strong>${item.app}</strong></td>
                    <td>${item.teamName}</td>
                    <td><span class="status-pill ${item.status}">${formatStatus(item.status)}</span></td>
                    <td>
                        <div class="progress-cell">
                            <div class="progress-mini">
                                <div class="progress-mini-fill ${item.coverage >= 80 ? 'high' : item.coverage >= 50 ? 'medium' : 'low'}" 
                                     style="width: ${item.coverage}%"></div>
                            </div>
                            <span>${item.coverage}%</span>
                        </div>
                    </td>
                    <td>${item.target}%</td>
                    <td>${item.owner}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

function formatStatus(status) {
    return status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// ═══════════════════════════════════════════════════════════════════════════
// AI SECTION
// ═══════════════════════════════════════════════════════════════════════════

function initAISection() {
    renderAITools();
    renderTeamBars();
}

function renderAITools() {
    const grid = document.getElementById('aiToolsGrid');
    if (!grid) return;
    
    const tools = [
        { name: 'Tachyon GPT', icon: '🧠', use: 'Test Cases & Bug Creation', pbis: 37, saved: 10.5 },
        { name: 'Microsoft Copilot', icon: '🤖', use: 'Code & Test Data', pbis: 29, saved: 7 },
        { name: 'XTforge AI', icon: '🧬', use: 'Test Generation', pbis: 16, saved: 8 },
        { name: 'TestGennie', icon: '🚀', use: 'AI Test Suite (Rollout)', pbis: 10, saved: 4 }
    ];
    
    grid.innerHTML = tools.map(tool => `
        <div class="ai-tool-card reveal-scale">
            <div class="ai-tool-icon">${tool.icon}</div>
            <div class="ai-tool-name">${tool.name}</div>
            <div class="ai-tool-use">${tool.use}</div>
            <div class="ai-tool-stats">
                <div>
                    <div class="ai-tool-stat-value">${tool.pbis}</div>
                    <div class="ai-tool-stat-label">PBIs</div>
                </div>
                <div>
                    <div class="ai-tool-stat-value">${tool.saved}h</div>
                    <div class="ai-tool-stat-label">Saved</div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTeamBars() {
    const container = document.getElementById('teamBars');
    if (!container) return;
    
    const teams = Object.values(TEAMS_DATA)
        .filter(t => t.stats.timeSaved > 0)
        .sort((a, b) => b.stats.timeSaved - a.stats.timeSaved);
    
    const maxSaved = Math.max(...teams.map(t => t.stats.timeSaved));
    
    container.innerHTML = teams.map(team => {
        const fillPercent = (team.stats.timeSaved / maxSaved) * 100;
        return `
        <div class="team-bar-row">
            <div class="team-bar-name">${team.name}</div>
            <div class="team-bar-track">
                <div class="team-bar-fill" style="width: ${fillPercent}%"></div>
            </div>
            <div class="team-bar-value">${team.stats.timeSaved}h</div>
        </div>
    `}).join('');
}

// ═══════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════

function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('teamModal');
    const closeBtn = document.getElementById('modalClose');
    
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openTeamModal(teamId) {
    const team = TEAMS_DATA[teamId];
    if (!team) return;
    
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('teamModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = renderTeamDetail(team);
    
    overlay?.classList.add('open');
    modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('teamModal');
    
    overlay?.classList.remove('open');
    modal?.classList.remove('open');
    document.body.style.overflow = '';
}

function renderTeamDetail(team) {
    // Special rendering for QCOE team (different format - no PBIs)
    if (team.isSpecialTeam && team.id === 'qcoe') {
        return renderQCOEDetail(team);
    }
    
    return `
        <div class="modal-header-section">
            <div class="modal-team-avatar">${team.shortName}</div>
            <div class="modal-team-info">
                <h2>${team.name}</h2>
                <p>Manager: <strong>${team.manager || 'N/A'}</strong> • Lead: <strong>${team.lead || 'N/A'}</strong></p>
                <span class="modal-period">${team.reportPeriod}</span>
            </div>
        </div>
        
        <div class="modal-stats-row">
            <div class="modal-stat">
                <span class="modal-stat-value">${team.stats.pbis}</span>
                <span class="modal-stat-label">PBIs</span>
            </div>
            <div class="modal-stat">
                <span class="modal-stat-value">${team.stats.automated}</span>
                <span class="modal-stat-label">Automated</span>
            </div>
            <div class="modal-stat">
                <span class="modal-stat-value">${team.engineers.length}</span>
                <span class="modal-stat-label">Engineers</span>
            </div>
            <div class="modal-stat">
                <span class="modal-stat-value">${team.stats.timeSaved}h</span>
                <span class="modal-stat-label">AI Saved</span>
            </div>
        </div>
        
        ${team.highlights ? `
            <div class="modal-section highlights">
                <h3>✨ Sprint Highlights</h3>
                <p>${team.highlights}</p>
            </div>
        ` : ''}
        
        ${team.mvp ? `
            <div class="modal-section mvp">
                <div class="mvp-mini-badge">🏆 MVP</div>
                <h3>${team.mvp.name}</h3>
                <p>${team.mvp.reason}</p>
            </div>
        ` : ''}
        
        ${team.sprintGoal ? `
            <div class="modal-section">
                <h3>⭐ Sprint Goal</h3>
                <p>${team.sprintGoal}</p>
            </div>
        ` : ''}
        
        ${team.engineers.length > 0 ? `
            <div class="modal-section">
                <h3>👥 Team Members (${team.engineers.length})</h3>
                <div class="modal-engineers">
                    ${team.engineers.map(eng => `
                        <div class="modal-engineer">
                            <span class="eng-avatar">${eng.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                            <span class="eng-name">${eng.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        ${team.aiTools && team.aiTools.length > 0 ? `
            <div class="modal-section ai">
                <h3>🧠 AI Tools Used</h3>
                ${team.aiTools.map(tool => `
                    <div class="modal-ai-tool">
                        <strong>${tool.tool}</strong>
                        <p>${tool.useCase}</p>
                        <div class="ai-tool-mini-stats">
                            <span>${tool.pbis} PBIs</span>
                            <span>${tool.timeSaved} saved</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

// Special rendering for QCOE team (initiatives, infrastructure, reports format)
function renderQCOEDetail(team) {
    return `
        <div class="modal-header-section">
            <div class="modal-team-avatar">${team.shortName}</div>
            <div class="modal-team-info">
                <h2>${team.name}</h2>
                <p>Manager: <strong>${team.manager || 'N/A'}</strong> • Lead: <strong>${team.lead || 'N/A'}</strong></p>
                <span class="modal-period">${team.reportPeriod}</span>
            </div>
        </div>
        
        ${team.mvp ? `
            <div class="modal-section mvp">
                <div class="mvp-mini-badge">🏆 MVP</div>
                <h3>${team.mvp.name}</h3>
                <p>${team.mvp.reason}</p>
            </div>
        ` : ''}
        
        ${team.engineers.length > 0 ? `
            <div class="modal-section">
                <h3>👥 Team Members (${team.engineers.length})</h3>
                <div class="modal-engineers">
                    ${team.engineers.map(eng => `
                        <div class="modal-engineer">
                            <span class="eng-avatar">${eng.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                            <span class="eng-name">${eng.name}</span>
                            <span class="eng-role">${eng.role}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        ${team.testgennieRollout ? `
            <div class="modal-section">
                <h3>🚀 AI TestGennie Rollout</h3>
                <div class="qcoe-checklist">
                    ${team.testgennieRollout.map(item => `
                        <div class="qcoe-item ${item.status}">
                            <span class="qcoe-status">${item.status === 'done' ? '✓' : '◐'}</span>
                            <span class="qcoe-text">${item.item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        ${team.aiUpdates ? `
            <div class="modal-section highlights">
                <h3>📝 ${team.aiUpdates.title}</h3>
                <p>${team.aiUpdates.description}</p>
                <ul class="qcoe-list">
                    ${team.aiUpdates.items.map(item => `<li>✓ ${item}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
        
        ${team.infrastructureUpdates ? `
            <div class="modal-section">
                <h3>🔧 Infrastructure Updates</h3>
                <p>${team.infrastructureUpdates}</p>
            </div>
        ` : ''}
        
        ${team.reports && team.reports.length > 0 ? `
            <div class="modal-section">
                <h3>📊 Reports</h3>
                <div class="qcoe-reports">
                    ${team.reports.map(report => `
                        <div class="qcoe-report">
                            <strong>${report.name}</strong>
                            <span>${report.status}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        ${team.pipelineConfig && team.pipelineConfig.length > 0 ? `
            <div class="modal-section">
                <h3>⚙️ Pipeline Configuration</h3>
                ${team.pipelineConfig.map(item => `
                    <div class="qcoe-pipeline">
                        <strong>${item.name}</strong>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}
        
        ${team.nextSprint && team.nextSprint.length > 0 ? `
            <div class="modal-section">
                <h3>🎯 Focus for Next Sprint</h3>
                ${team.nextSprint.map(item => `
                    <div class="qcoe-next">
                        <strong>${item.title}</strong>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════════════════

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL MODAL STYLES
// ═══════════════════════════════════════════════════════════════════════════

const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-header-section {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
        padding-bottom: 25px;
        border-bottom: 1px solid var(--glass-border);
    }
    
    .modal-team-avatar {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--axos-orange), var(--axos-orange-dark));
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Syne', sans-serif;
        font-size: 32px;
        font-weight: 800;
        color: var(--axos-navy-dark);
        box-shadow: 0 10px 30px rgba(250, 167, 74, 0.4);
    }
    
    .modal-team-info h2 {
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 8px;
    }
    
    .modal-team-info p {
        color: var(--text-muted);
        font-size: 14px;
    }
    
    .modal-period {
        display: inline-block;
        margin-top: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        color: var(--axos-orange);
        padding: 4px 12px;
        background: var(--glow-orange-soft);
        border-radius: 15px;
    }
    
    .modal-stats-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }
    
    .modal-stat {
        text-align: center;
        padding: 20px;
        background: var(--glass);
        border-radius: 15px;
    }
    
    .modal-stat-value {
        display: block;
        font-family: 'JetBrains Mono', monospace;
        font-size: 28px;
        font-weight: 700;
        color: var(--axos-orange);
    }
    
    .modal-stat-label {
        font-size: 12px;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .modal-section {
        margin-bottom: 25px;
        padding: 20px;
        background: var(--glass-light);
        border-radius: 15px;
    }
    
    .modal-section h3 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 12px;
    }
    
    .modal-section p {
        font-size: 14px;
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .modal-section.highlights {
        background: var(--glow-orange-soft);
        border: 1px solid var(--glass-border);
    }
    
    .modal-section.mvp {
        background: linear-gradient(135deg, var(--glow-orange-soft), var(--glass));
        border: 2px solid var(--axos-orange);
        text-align: center;
    }
    
    .mvp-mini-badge {
        display: inline-block;
        padding: 6px 16px;
        background: var(--axos-orange);
        color: var(--axos-navy-dark);
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 12px;
    }
    
    .modal-engineers {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .modal-engineer {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        background: var(--glass);
        border-radius: 10px;
    }
    
    .eng-avatar {
        width: 32px;
        height: 32px;
        background: var(--axos-navy-light);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        color: var(--axos-orange);
    }
    
    .eng-name {
        font-size: 13px;
        font-weight: 500;
    }
    
    .modal-ai-tool {
        padding: 15px;
        background: var(--glass);
        border-radius: 12px;
        margin-bottom: 10px;
    }
    
    .modal-ai-tool strong {
        color: var(--axos-orange);
    }
    
    .modal-ai-tool p {
        margin: 8px 0;
    }
    
    .ai-tool-mini-stats {
        display: flex;
        gap: 20px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        color: var(--axos-orange);
    }
    
    @media (max-width: 600px) {
        .modal-header-section {
            flex-direction: column;
            text-align: center;
        }
        
        .modal-stats-row {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    /* QCOE Special Styles */
    .qcoe-checklist {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .qcoe-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--glass);
        border-radius: 10px;
        border-left: 3px solid var(--text-muted);
    }
    
    .qcoe-item.done {
        border-left-color: #10b981;
    }
    
    .qcoe-item.in-progress {
        border-left-color: var(--axos-orange);
    }
    
    .qcoe-status {
        font-size: 18px;
        min-width: 24px;
    }
    
    .qcoe-item.done .qcoe-status {
        color: #10b981;
    }
    
    .qcoe-item.in-progress .qcoe-status {
        color: var(--axos-orange);
    }
    
    .qcoe-text {
        font-size: 14px;
    }
    
    .qcoe-list {
        list-style: none;
        padding: 0;
        margin: 15px 0 0 0;
    }
    
    .qcoe-list li {
        padding: 8px 0;
        font-size: 14px;
        color: var(--text-light);
        border-bottom: 1px solid var(--glass-border);
    }
    
    .qcoe-list li:last-child {
        border-bottom: none;
    }
    
    .qcoe-reports {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .qcoe-report {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background: var(--glass);
        border-radius: 10px;
    }
    
    .qcoe-report strong {
        color: var(--text-primary);
    }
    
    .qcoe-report span {
        font-size: 12px;
        color: var(--axos-orange);
        font-family: 'JetBrains Mono', monospace;
    }
    
    .qcoe-pipeline, .qcoe-next {
        padding: 15px;
        background: var(--glass);
        border-radius: 12px;
        margin-bottom: 10px;
    }
    
    .qcoe-pipeline strong, .qcoe-next strong {
        color: var(--axos-orange);
        display: block;
        margin-bottom: 8px;
    }
    
    .qcoe-pipeline p, .qcoe-next p {
        margin: 0;
        font-size: 13px;
        color: var(--text-light);
    }
    
    .eng-role {
        font-size: 11px;
        color: var(--text-muted);
        margin-left: auto;
    }
    
    /* QCOE Team Card Special Styles */
    .team-card.qcoe-special {
        background: linear-gradient(135deg, var(--axos-navy-light), rgba(250, 167, 74, 0.1));
        border: 1px solid rgba(250, 167, 74, 0.3);
    }
    
    .team-card.qcoe-special:hover {
        border-color: var(--axos-orange);
        box-shadow: 0 20px 40px rgba(250, 167, 74, 0.2);
    }
    
    .qcoe-avatar {
        background: linear-gradient(135deg, #8b5cf6, #6366f1) !important;
    }
    
    .team-badge.qcoe-badge {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2));
        border: 1px solid rgba(139, 92, 246, 0.4);
        color: #a78bfa;
    }
    
    /* Manager Header Cards */
    .manager-header-card {
        flex-shrink: 0;
        width: 180px;
        min-height: 200px;
        background: linear-gradient(135deg, rgba(250, 167, 74, 0.15), rgba(250, 167, 74, 0.05));
        border: 2px dashed rgba(250, 167, 74, 0.4);
        border-radius: 20px;
        padding: 25px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .manager-header-card:hover {
        border-color: var(--axos-orange);
        background: linear-gradient(135deg, rgba(250, 167, 74, 0.25), rgba(250, 167, 74, 0.1));
        transform: scale(1.02);
    }
    
    .manager-header-card.collapsed {
        background: linear-gradient(135deg, rgba(100, 100, 100, 0.15), rgba(100, 100, 100, 0.05));
        border-color: rgba(150, 150, 150, 0.4);
    }
    
    .manager-header-card.collapsed .manager-name {
        color: var(--text-muted);
    }
    
    .manager-icon {
        font-size: 40px;
        margin-bottom: 5px;
        transition: transform 0.3s ease;
    }
    
    .manager-header-card:hover .manager-icon {
        transform: scale(1.1);
    }
    
    .manager-name {
        font-family: 'Syne', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: var(--axos-orange);
        line-height: 1.3;
    }
    
    .manager-teams-count {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        color: var(--text-muted);
        padding: 4px 12px;
        background: var(--glass);
        border-radius: 20px;
    }
    
    .manager-toggle-hint {
        font-size: 10px;
        color: var(--text-muted);
        opacity: 0;
        transition: opacity 0.3s ease;
        margin-top: 5px;
    }
    
    .manager-header-card:hover .manager-toggle-hint {
        opacity: 1;
    }
    
    /* Team card base transition for collapse/expand */
    .team-card {
        transition: width 0.3s ease, min-width 0.3s ease, padding 0.3s ease, 
                    margin 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
    }
    
    /* Collapsing animation */
    .team-card.manager-collapsing {
        transform: scaleX(0.8) translateX(-20px);
        opacity: 0;
    }
    
    /* Collapsed state */
    .team-card.manager-collapsed {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        margin-right: -25px !important; /* Compensate for gap */
        opacity: 0 !important;
        overflow: hidden !important;
        border: none !important;
        pointer-events: none;
        transform: scaleX(0);
    }
    
    /* Expanding animation */
    .team-card.manager-expanding {
        animation: expandCard 0.4s ease forwards;
    }
    
    @keyframes expandCard {
        0% {
            transform: scaleX(0.5) translateX(-30px);
            opacity: 0;
        }
        50% {
            transform: scaleX(1.02);
            opacity: 0.8;
        }
        100% {
            transform: scaleX(1) translateX(0);
            opacity: 1;
        }
    }
    
    /* Team manager label */
    .team-manager {
        font-size: 11px;
        color: var(--axos-orange);
        margin-top: 2px;
        opacity: 0.8;
    }
    
    /* Modal close button fix */
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: var(--glass);
        border: 1px solid var(--glass-border);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: var(--axos-orange);
        transform: rotate(90deg);
    }
    
    .modal-close svg {
        width: 20px;
        height: 20px;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
    }
`;
document.head.appendChild(modalStyles);

