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
    if (window.innerWidth < 700) return 1;
    if (window.innerWidth < 1000) return 2;
    return 3;
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

function renderTeamCards() {
    const carousel = document.getElementById('teamsCarousel');
    if (!carousel) return;
    
    const teams = Object.values(TEAMS_DATA);
    totalTeams = teams.length;
    carouselIndex = 0;
    
    carousel.innerHTML = teams.map(team => `
        <div class="team-card" data-team="${team.id}">
            <div class="team-card-header">
                <div class="team-avatar">${team.shortName}</div>
                <div>
                    <div class="team-name">${team.name}</div>
                    <div class="team-lead">Lead: ${team.lead || 'N/A'}</div>
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
    `).join('');
    
    updateCarouselProgress();
    updateArrowStates();
}

function moveCarousel(direction) {
    const maxIndex = Math.max(0, totalTeams - cardsPerView);
    const newIndex = carouselIndex + direction;
    
    // Don't move if at bounds
    if (newIndex < 0 || newIndex > maxIndex) return;
    
    carouselIndex = newIndex;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const carousel = document.getElementById('teamsCarousel');
    const cards = carousel?.querySelectorAll('.team-card:not([style*="display: none"])');
    if (!cards?.length) return;
    
    const cardWidth = cards[0].offsetWidth + 25; // include gap
    const offset = carouselIndex * cardWidth;
    
    carousel.style.transform = `translateX(-${offset}px)`;
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';
    
    // Update center card focus
    updateCenterCardFocus(cards);
    
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
    const maxIndex = Math.max(1, totalTeams - cardsPerView + 1);
    const percent = ((carouselIndex + 1) / maxIndex) * 100;
    
    if (progress) {
        progress.style.width = Math.min(percent, 100) + '%';
    }
}

function updateArrowStates() {
    const prevBtn = document.getElementById('teamsPrev');
    const nextBtn = document.getElementById('teamsNext');
    const maxIndex = Math.max(0, totalTeams - cardsPerView);
    
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
            filterTeams(chip.dataset.filter);
            
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
        const team = TEAMS_DATA[card.dataset.team];
        let show = true;
        
        switch (filter) {
            case 'tdd':
                show = team.followingTDD === true;
                break;
            case 'mvp':
                show = team.mvp !== null;
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
        
        ${team.aiTools.length > 0 ? `
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
`;
document.head.appendChild(modalStyles);

