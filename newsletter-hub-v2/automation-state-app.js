// ═══════════════════════════════════════════════════════════════════════════
// State of Automation - macOS Window Interface v2.0
// Multi-layered interactive dashboard with animated tiles and graphs
// ═══════════════════════════════════════════════════════════════════════════

let currentManager = null;
let currentCategory = null;
let currentFontScale = 100; // Percentage (80-150)

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 State of Automation - macOS Interface v2.0 Loading...');
    
    // Initialize font size from localStorage
    initFontSize();
    
    initWindows();
    initFullscreenHandlers();
    injectDetailModal();
    injectAnalyticsModal();
    initChartInteractions();
    console.log('✅ Ready!');
});

// ═══════════════════════════════════════════════════════════════════════════
// CHART LINE TOGGLE & POINT SELECTION INTERACTIONS
// ═══════════════════════════════════════════════════════════════════════════

function initChartInteractions() {
    // Use event delegation for toggle buttons
    document.addEventListener('click', (e) => {
        // Handle legend toggle buttons
        const toggleBtn = e.target.closest('.legend-toggle');
        if (toggleBtn) {
            handleLegendToggle(toggleBtn);
            return;
        }
        
        // Handle data point clicks
        const pointGroup = e.target.closest('.data-point-group');
        if (pointGroup && !pointGroup.classList.contains('points-hidden')) {
            handlePointClick(pointGroup);
            return;
        }
        
        // Click elsewhere on chart - deselect all points
        const chartContainer = e.target.closest('.velocity-line-chart-container');
        if (chartContainer) {
            const svg = chartContainer.querySelector('svg');
            if (svg) {
                svg.querySelectorAll('.data-point-group.selected').forEach(p => {
                    p.classList.remove('selected');
                });
            }
        }
    });
}

function handleLegendToggle(toggleBtn) {
    const lineYear = toggleBtn.dataset.line;
    
    // Toggle the button state
    toggleBtn.classList.toggle('active');
    const isActive = toggleBtn.classList.contains('active');
    
    // Find the chart container
    const chartContainer = toggleBtn.closest('.velocity-line-chart-container');
    if (!chartContainer) return;
    
    const svg = chartContainer.querySelector('svg');
    if (!svg) return;
    
    // Toggle the line visibility
    const line = svg.querySelector(`.line-${lineYear}`);
    if (line) {
        if (isActive) {
            line.classList.remove('line-hidden');
            line.classList.add('line-visible');
        } else {
            line.classList.remove('line-visible');
            line.classList.add('line-hidden');
        }
    }
    
    // Toggle the data points visibility
    const points = svg.querySelectorAll(`.data-point-group-${lineYear}`);
    points.forEach(point => {
        if (isActive) {
            point.classList.remove('points-hidden');
            point.classList.add('points-visible');
        } else {
            point.classList.remove('points-visible');
            point.classList.add('points-hidden');
            point.classList.remove('selected'); // Deselect if hidden
        }
    });
}

function handlePointClick(pointGroup) {
    const svg = pointGroup.closest('svg');
    if (!svg) return;
    
    // Check if this point is already selected
    const wasSelected = pointGroup.classList.contains('selected');
    
    // Deselect all points in the same chart
    svg.querySelectorAll('.data-point-group.selected').forEach(p => {
        p.classList.remove('selected');
    });
    
    // If it wasn't selected, select it now
    if (!wasSelected) {
        pointGroup.classList.add('selected');
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// FONT SIZE CONTROL
// ═══════════════════════════════════════════════════════════════════════════

function initFontSize() {
    // Load saved font size
    const saved = localStorage.getItem('stateOfAutomationFontSize');
    currentFontScale = saved ? parseInt(saved) : 100;
    applyFontScale(currentFontScale);
    
    // Wire up the font control buttons - main page
    document.getElementById('fontDecrease')?.addEventListener('click', () => changeFontSize(-10));
    document.getElementById('fontIncrease')?.addEventListener('click', () => changeFontSize(10));
    
    // Wire up the fullscreen window font controls
    document.getElementById('fullscreenFontDecrease')?.addEventListener('click', () => changeFontSize(-10));
    document.getElementById('fullscreenFontIncrease')?.addEventListener('click', () => changeFontSize(10));
}

function changeFontSize(delta) {
    // Clamp between 80% and 150%
    currentFontScale = Math.max(80, Math.min(150, currentFontScale + delta));
    applyFontScale(currentFontScale);
    
    // Save to localStorage
    localStorage.setItem('stateOfAutomationFontSize', currentFontScale.toString());
}

function applyFontScale(scale) {
    // Convert percentage to multiplier (e.g., 100 -> 1, 120 -> 1.2)
    const multiplier = scale / 100;
    
    // Set CSS variable on the document
    document.documentElement.style.setProperty('--font-scale', multiplier);
    
    // Update ALL font size displays
    const displays = [
        document.getElementById('fontSizeDisplay'),
        document.getElementById('fullscreenFontDisplay'),
        document.getElementById('detailFontDisplay'),
        document.getElementById('analyticsFontDisplay')
    ];
    
    displays.forEach(display => {
        if (display) {
            display.textContent = `${scale}%`;
        }
    });
    
    console.log(`Font scale set to ${scale}% (${multiplier}x)`);
}

// ═══════════════════════════════════════════════════════════════════════════
// INJECT MODALS
// ═══════════════════════════════════════════════════════════════════════════

function injectDetailModal() {
    const modal = document.createElement('div');
    modal.id = 'detailModal';
    modal.className = 'detail-modal';
    modal.innerHTML = `
        <div class="detail-modal-backdrop"></div>
        <div class="detail-modal-window">
            <div class="detail-modal-titlebar">
                <div class="window-action-btn collapse" onclick="closeDetailModal()">
                    <svg viewBox="0 0 24 24"><path d="M4 14h6v6M20 10h-6V4M10 14l-7 7M14 10l7-7"/></svg>
                </div>
                <div class="detail-modal-title" id="detailModalTitle">Category</div>
                <div class="font-size-control titlebar-font-control">
                    <button class="font-size-btn" id="detailFontDecrease" title="Decrease Text Size">A−</button>
                    <span class="font-size-display" id="detailFontDisplay">100%</span>
                    <button class="font-size-btn" id="detailFontIncrease" title="Increase Text Size">A+</button>
                </div>
            </div>
            <div class="detail-modal-content" id="detailModalContent"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.detail-modal-backdrop').addEventListener('click', closeDetailModal);
    
    // Wire up font controls
    modal.querySelector('#detailFontDecrease').addEventListener('click', () => changeFontSize(-10));
    modal.querySelector('#detailFontIncrease').addEventListener('click', () => changeFontSize(10));
}

function injectAnalyticsModal() {
    const modal = document.createElement('div');
    modal.id = 'analyticsModal';
    modal.className = 'analytics-modal';
    modal.innerHTML = `
        <div class="analytics-modal-backdrop"></div>
        <div class="analytics-modal-window">
            <div class="analytics-modal-titlebar">
                <div class="window-action-btn collapse" onclick="closeAnalyticsModal()">
                    <svg viewBox="0 0 24 24"><path d="M4 14h6v6M20 10h-6V4M10 14l-7 7M14 10l7-7"/></svg>
                </div>
                <div class="analytics-modal-title" id="analyticsModalTitle">Analytics</div>
                <div class="font-size-control titlebar-font-control">
                    <button class="font-size-btn" id="analyticsFontDecrease" title="Decrease Text Size">A−</button>
                    <span class="font-size-display" id="analyticsFontDisplay">100%</span>
                    <button class="font-size-btn" id="analyticsFontIncrease" title="Increase Text Size">A+</button>
                </div>
            </div>
            <div class="analytics-modal-content" id="analyticsModalContent"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.analytics-modal-backdrop').addEventListener('click', closeAnalyticsModal);
    
    // Wire up font controls
    modal.querySelector('#analyticsFontDecrease').addEventListener('click', () => changeFontSize(-10));
    modal.querySelector('#analyticsFontIncrease').addEventListener('click', () => changeFontSize(10));
}

// ═══════════════════════════════════════════════════════════════════════════
// RENDER WINDOWS
// ═══════════════════════════════════════════════════════════════════════════

function initWindows() {
    const grid = document.getElementById('windowsGrid');
    if (!grid) return;
    
    const managers = AUTOMATION_STATE.managers;
    
    grid.innerHTML = Object.values(managers).map(manager => {
        const stats = calculateManagerStats(manager);
        
        return `
            <div class="mac-window" data-manager="${manager.id}">
                <div class="window-titlebar">
                    <div class="window-action-btn expand">
                        <svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                    <div class="window-title">${manager.name} — Automation Status</div>
                    <div class="window-title-spacer"></div>
                </div>
                <div class="window-preview">
                    <div class="preview-header">
                        <div class="preview-avatar" style="background: ${manager.color}">${manager.avatar}</div>
                        <div class="preview-info">
                            <h3>${manager.name}</h3>
                            <p>${manager.teams.length} teams · ${stats.totalProjects} projects</p>
                        </div>
                    </div>
                    <div class="preview-stats">
                        <div class="preview-stat">
                            <div class="preview-stat-value">${stats.completed}</div>
                            <div class="preview-stat-label">Completed</div>
                        </div>
                        <div class="preview-stat">
                            <div class="preview-stat-value">${stats.inProgress}</div>
                            <div class="preview-stat-label">In Progress</div>
                        </div>
                        <div class="preview-stat">
                            <div class="preview-stat-value">${stats.blocked}</div>
                            <div class="preview-stat-label">Blocked</div>
                        </div>
                    </div>
                    <div class="preview-teams">
                        ${manager.teams.slice(0, 4).map(team => 
                            `<span class="preview-team-chip">${team}</span>`
                        ).join('')}
                        ${manager.teams.length > 4 ? `<span class="preview-team-chip">+${manager.teams.length - 4} more</span>` : ''}
                    </div>
                    <div class="click-hint">
                        <svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                        Click to expand
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.mac-window').forEach(window => {
        window.addEventListener('click', () => {
            openFullscreen(window.dataset.manager);
        });
    });
}

function calculateManagerStats(manager) {
    let completed = 0, inProgress = 0, blocked = 0, notStarted = 0, totalProjects = 0;
    
    manager.projects.forEach(category => {
        category.items.forEach(item => {
            totalProjects++;
            const status = getProjectStatus(item);
            if (status === 'completed') completed++;
            else if (status === 'in-progress') inProgress++;
            else if (status === 'blocked') blocked++;
            else notStarted++;
        });
    });
    
    return { completed, inProgress, blocked, notStarted, totalProjects };
}

function getProjectStatus(item) {
    if (item.status === 'blocked') return 'blocked';
    if (item.status === 'on-hold') return 'in-progress';
    if (item.status === 'not-started') return 'not-started';
    if (item.dec === 100 || item.target === 'Done' || item.target?.includes('Done')) return 'completed';
    if (item.dec > 0 && item.dec < 100) return 'in-progress';
    return 'not-started';
}

function getCategoryStats(category) {
    let completed = 0;
    let inProgress = 0;
    let blocked = 0;
    
    category.items.forEach(item => {
        const status = getProjectStatus(item);
        if (status === 'completed') completed++;
        else if (status === 'in-progress') inProgress++;
        else if (status === 'blocked') blocked++;
        else blocked++; // not-started counted as blocked for display
    });
    
    return { completed, inProgress, blocked };
}

function getProgressClass(value) {
    if (value >= 80) return 'high';
    if (value >= 40) return 'medium';
    return 'low';
}

// ═══════════════════════════════════════════════════════════════════════════
// FULLSCREEN HANDLERS
// ═══════════════════════════════════════════════════════════════════════════

function initFullscreenHandlers() {
    const overlay = document.getElementById('fullscreenOverlay');
    const closeBtn = document.getElementById('closeFullscreen');
    
    overlay?.addEventListener('click', closeFullscreen);
    closeBtn?.addEventListener('click', closeFullscreen);
    
    // Keyboard handlers for all modals (ESC to close)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close in reverse order of z-index
            const analyticsModal = document.getElementById('analyticsModal');
            const detailModal = document.getElementById('detailModal');
            const fullscreenWindow = document.getElementById('fullscreenWindow');
            
            if (analyticsModal?.classList.contains('active')) {
                closeAnalyticsModal();
            } else if (detailModal?.classList.contains('active')) {
                closeDetailModal();
            } else if (fullscreenWindow?.classList.contains('active')) {
                closeFullscreen();
            }
        }
    });
}

function openFullscreen(managerId) {
    const manager = AUTOMATION_STATE.managers[managerId];
    if (!manager) return;
    
    const overlay = document.getElementById('fullscreenOverlay');
    const window = document.getElementById('fullscreenWindow');
    const title = document.getElementById('fullscreenTitle');
    const content = document.getElementById('fullscreenContent');
    
    title.textContent = `${manager.name} — State of Automation`;
    content.innerHTML = renderFullscreenContent(manager);
    
    overlay.classList.add('active');
    window.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize collapsible sections
    initCollapsibleSections();
}

function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    const window = document.getElementById('fullscreenWindow');
    
    overlay.classList.remove('active');
    window.classList.remove('active');
    document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════════════════════
// RENDER FULLSCREEN CONTENT - TILE-BASED LAYOUT
// ═══════════════════════════════════════════════════════════════════════════

function renderFullscreenContent(manager) {
    currentManager = manager;
    const stats = calculateManagerStats(manager);
    
    // Get analytics data for each category
    const analyticsMap = getAnalyticsMap(manager);
    
    return `
        <div class="fullscreen-header">
            <div class="fullscreen-avatar" style="background: ${manager.color}">${manager.avatar}</div>
            <div class="fullscreen-info">
                <h2>${manager.name}</h2>
                <div class="fullscreen-teams-list">
                    ${manager.teams.map(team => `<span class="fullscreen-team-chip">${team}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="fullscreen-stats">
            <div class="fullscreen-stat-card">
                <div class="fullscreen-stat-value">${stats.totalProjects}</div>
                <div class="fullscreen-stat-label">Total Projects</div>
            </div>
            <div class="fullscreen-stat-card">
                <div class="fullscreen-stat-value" style="color: #22c55e">${stats.completed}</div>
                <div class="fullscreen-stat-label">Completed</div>
            </div>
            <div class="fullscreen-stat-card">
                <div class="fullscreen-stat-value" style="color: #eab308">${stats.inProgress}</div>
                <div class="fullscreen-stat-label">In Progress</div>
            </div>
            <div class="fullscreen-stat-card">
                <div class="fullscreen-stat-value" style="color: #ef4444">${stats.blocked}</div>
                <div class="fullscreen-stat-label">Blocked</div>
            </div>
        </div>
        
        <div class="category-tiles-section">
            <h3 class="tiles-section-title">
                <span class="tiles-icon">📁</span>
                Select a Category to View Details
            </h3>
            <div class="category-tiles-grid">
                ${manager.projects.map((category, idx) => {
                    const catStats = getCategoryStats(category);
                    const hasAnalytics = analyticsMap[category.category];
                    return renderCategoryTile(category, catStats, idx, manager.color, hasAnalytics);
                }).join('')}
                ${manager.qcoe ? renderQCOETile(manager.qcoe) : ''}
            </div>
        </div>
    `;
}

function getAnalyticsMap(manager) {
    const map = {};
    
    // Map bug analysis to categories (Marco has multiple)
    if (manager.bugAnalysisMultiple) {
        manager.bugAnalysisMultiple.forEach(ba => {
            // Match by title keywords
            if (ba.title.includes('Core Services')) map['Core Services'] = { bugAnalysis: ba };
            if (ba.title.includes('WFO')) map['WFO - OutSystems'] = { bugAnalysis: ba };
            if (ba.title.includes('ULP')) map['UE-Borrow'] = { bugAnalysis: ba };
        });
    }
    
    // Map velocity data (Marco has multiple)
    if (manager.velocityDataMultiple) {
        manager.velocityDataMultiple.forEach(vd => {
            if (vd.title.includes('Core Services')) {
                map['Core Services'] = { ...map['Core Services'], velocityData: vd };
            }
            if (vd.title.includes('WFO')) {
                map['WFO - OutSystems'] = { ...map['WFO - OutSystems'], velocityData: vd };
            }
            if (vd.title.includes('ULP')) {
                map['UE-Borrow'] = { ...map['UE-Borrow'], velocityData: vd };
            }
        });
    }
    
    // Single bug analysis (for Archana, Irina) - applies to ALL their categories (team-wide data)
    if (manager.bugAnalysis && !manager.bugAnalysisMultiple) {
        const analyticsData = { bugAnalysis: manager.bugAnalysis, velocityData: manager.velocityData };
        // Apply to all categories for this manager
        manager.projects.forEach(category => {
            map[category.category] = analyticsData;
        });
    }
    
    return map;
}

function renderCategoryTile(category, stats, idx, color, hasAnalytics) {
    const total = stats.completed + stats.inProgress + stats.blocked;
    const completionPercent = total > 0 ? Math.round((stats.completed / total) * 100) : 0;
    const delay = idx * 0.1;
    
    const icons = {
        'Core Services': '⚙️',
        'WFO - OutSystems': '🔧',
        'UE-Borrow': '💳',
        'Borrow - Credit Card': '💳',
        'SIT Online Banking Web and Mobile': '🏦',
        'Bank - Consumer Deposit': '🏛️',
        'Invest - WL IBD': '📈',
        'Invest - ROBO': '🤖',
        'Plan': '📋',
        'UE Invest WL1 and WL2': '💼',
        'UE API/Admin Portal': '🔌',
        'Legacy Enrollment': '📜',
        'SIT Enrollment Web and Mobile': '📱'
    };
    
    const icon = icons[category.category] || '📂';
    
    return `
        <div class="category-tile" 
             style="--tile-delay: ${delay}s; --tile-color: ${color}"
             onclick="openCategoryDetail('${category.category.replace(/'/g, "\\'")}')">
            <div class="tile-glow"></div>
            <div class="tile-content">
                <div class="tile-icon">${icon}</div>
                <div class="tile-info">
                    <h4 class="tile-title">${category.category}</h4>
                    <p class="tile-subtitle">${category.items.length} projects</p>
                </div>
                <div class="tile-stats">
                    <div class="tile-completion">
                        <svg class="tile-ring" viewBox="0 0 36 36">
                            <path class="tile-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="tile-ring-fill" stroke-dasharray="${completionPercent}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <text x="18" y="20.5" class="tile-ring-text">${completionPercent}%</text>
                        </svg>
                    </div>
                </div>
                ${hasAnalytics ? `<div class="tile-analytics-badge" title="Analytics Available">📊</div>` : ''}
            </div>
            <div class="tile-footer">
                <span class="tile-stat done">✓ ${stats.completed}</span>
                <span class="tile-stat progress">◐ ${stats.inProgress}</span>
                <span class="tile-stat blocked">⊘ ${stats.blocked}</span>
            </div>
            <div class="tile-arrow">
                <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </div>
        </div>
    `;
}

function renderQCOETile(qcoe) {
    return `
        <div class="category-tile qcoe-tile" 
             style="--tile-delay: 0.5s; --tile-color: #f59e0b"
             onclick="openQCOEDetail()">
            <div class="tile-glow"></div>
            <div class="tile-content">
                <div class="tile-icon">⭐</div>
                <div class="tile-info">
                    <h4 class="tile-title">${qcoe.title}</h4>
                    <p class="tile-subtitle">Quality Center of Excellence</p>
                </div>
            </div>
            <div class="tile-footer">
                <span class="tile-stat">Interview Process · Tools · Training</span>
            </div>
            <div class="tile-arrow">
                <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </div>
        </div>
    `;
}

function renderCategorySection(category, color) {
    const stats = getCategoryStats(category);
    
    return `
        <div class="category-section">
            <div class="category-header" data-collapsed="false">
                <div>
                    <div class="category-title">${category.category}</div>
                </div>
                <div class="category-badges">
                    ${stats.completed > 0 ? `<span class="category-badge completed">${stats.completed} Done</span>` : ''}
                    ${stats.inProgress > 0 ? `<span class="category-badge in-progress">${stats.inProgress} Active</span>` : ''}
                    ${stats.blocked > 0 ? `<span class="category-badge blocked">${stats.blocked} Blocked</span>` : ''}
                </div>
                <div class="category-toggle">
                    <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                </div>
            </div>
            <div class="category-content">
                <div class="project-table">
                    <div class="project-table-header">
                        <span>Project</span>
                        <span>Nov 2025</span>
                        <span>Dec 2025</span>
                        <span>Target</span>
                        <span>Impact</span>
                    </div>
                    ${category.items.map(item => renderProjectRow(item)).join('')}
                </div>
            </div>
        </div>
    `;
}

function getCategoryStats(category) {
    let completed = 0, inProgress = 0, blocked = 0;
    category.items.forEach(item => {
        const status = getProjectStatus(item);
        if (status === 'completed') completed++;
        else if (status === 'in-progress') inProgress++;
        else if (status === 'blocked') blocked++;
    });
    return { completed, inProgress, blocked };
}

function renderProjectRow(item) {
    const status = getProjectStatus(item);
    const change = item.nov !== null && item.dec !== null ? item.dec - item.nov : null;
    
    return `
        <div class="project-row ${status}">
            <div class="project-name">
                ${item.project}
                ${item.note ? `<span class="project-note">${item.note}</span>` : ''}
            </div>
            <div class="progress-cell">
                ${item.nov !== null ? `
                    <div class="progress-bar">
                        <div class="progress-fill ${getProgressClass(item.nov)}" style="width: ${item.nov}%"></div>
                    </div>
                    <span class="progress-value">${item.nov}%</span>
                ` : '<span class="progress-value">-</span>'}
            </div>
            <div class="progress-cell">
                ${item.dec !== null ? `
                    <div class="progress-bar">
                        <div class="progress-fill ${getProgressClass(item.dec)}" style="width: ${item.dec}%"></div>
                    </div>
                    <span class="progress-value">${item.dec}%</span>
                    ${change > 0 ? `<span class="change-badge up">+${change}</span>` : ''}
                    ${change < 0 ? `<span class="change-badge down">${change}</span>` : ''}
                ` : '<span class="progress-value">-</span>'}
            </div>
            <div>
                <span class="status-badge ${status}">${item.target || 'TBD'}</span>
            </div>
            <div class="impact-text">${item.impact || '-'}</div>
        </div>
    `;
}

function getProgressClass(value) {
    if (value >= 80) return 'high';
    if (value >= 40) return 'medium';
    return 'low';
}

// ═══════════════════════════════════════════════════════════════════════════
// VELOCITY SECTION
// ═══════════════════════════════════════════════════════════════════════════

function renderVelocitySection(velocityData) {
    const hasData = velocityData.total2024 || velocityData.total2025;
    if (!hasData) return '';
    
    let yoyChange = null;
    let yoyDirection = '';
    if (velocityData.total2024 && velocityData.total2025) {
        yoyChange = Math.round(((velocityData.total2025 - velocityData.total2024) / velocityData.total2024) * 100);
        yoyDirection = yoyChange >= 0 ? 'up' : 'down';
    }
    
    // Check if we have monthly chart data
    const hasChartData = velocityData.data2024 && velocityData.data2025;
    
    return `
        <div class="analysis-section">
            <h3 class="analysis-title">📈 ${velocityData.title}</h3>
            <div class="analysis-grid">
                <div class="analysis-card">
                    <h4>Year-over-Year Comparison</h4>
                    <div class="velocity-comparison">
                        <div class="velocity-year">
                            <div class="velocity-year-label">2024</div>
                            <div class="velocity-year-value">${velocityData.total2024?.toLocaleString() || 'N/A'}</div>
                        </div>
                        ${yoyChange !== null ? `
                            <div class="velocity-change ${yoyDirection}">
                                <div class="velocity-change-arrow">${yoyChange >= 0 ? '↑' : '↓'}</div>
                                <div class="velocity-change-value">${Math.abs(yoyChange)}%</div>
                            </div>
                        ` : ''}
                        <div class="velocity-year">
                            <div class="velocity-year-label">2025</div>
                            <div class="velocity-year-value">${velocityData.total2025?.toLocaleString() || 'N/A'}</div>
                        </div>
                    </div>
                </div>
            </div>
            ${hasChartData ? renderAnimatedLineChart(velocityData) : ''}
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// ANIMATED LINE CHART
// ═══════════════════════════════════════════════════════════════════════════

function renderAnimatedLineChart(velocityData) {
    const data2024 = velocityData.data2024;
    const data2025 = velocityData.data2025;
    
    // Chart dimensions
    const width = 800;
    const height = 350;
    const padding = { top: 40, right: 60, bottom: 60, left: 70 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    
    // Find max value for scaling
    const allValues = [...data2024.map(d => d.value), ...data2025.map(d => d.value)];
    const maxValue = Math.max(...allValues);
    const yMax = Math.ceil(maxValue / 500) * 500; // Round up to nearest 500
    
    // Generate Y-axis ticks
    const yTicks = [];
    for (let i = 0; i <= yMax; i += 500) {
        yTicks.push(i);
    }
    
    // Scale functions
    const xScale = (index) => padding.left + (index / 11) * chartWidth;
    const yScale = (value) => padding.top + chartHeight - (value / yMax) * chartHeight;
    
    // Generate path for line
    const generatePath = (data) => {
        return data.map((d, i) => {
            const x = xScale(i);
            const y = yScale(d.value);
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };
    
    const path2024 = generatePath(data2024);
    const path2025 = generatePath(data2025);
    
    // Calculate path length for animation (approximate)
    const pathLength = chartWidth * 1.5;
    
    // Generate data points with labels (grouped for hover)
    // First and last points show labels by default
    const generateDataPoints = (data, year) => {
        return data.map((d, i) => {
            const x = xScale(i);
            const y = yScale(d.value);
            const delay = (i * 0.15).toFixed(2);
            const labelY = year === '2024' ? y - 18 : y + 28; // Position labels above for 2024, below for 2025
            const isEndpoint = i === 0 || i === data.length - 1;
            return `
                <g class="data-point-group data-point-group-${year} ${isEndpoint ? 'show-label' : ''}" style="animation-delay: ${delay}s" data-month="${d.month}" data-value="${d.value}" data-year="${year}">
                    <rect class="label-bg" x="${x - 28}" y="${labelY - 12}" width="56" height="18" rx="4" fill="rgba(0,0,0,0.85)"/>
                    <circle class="data-point data-point-${year}" cx="${x}" cy="${y}" r="6" style="animation-delay: ${delay}s"/>
                    <text class="data-label data-label-${year}" x="${x}" y="${labelY}" text-anchor="middle" style="animation-delay: ${delay}s">${d.value.toLocaleString()}</text>
                </g>
            `;
        }).join('');
    };
    
    return `
        <div class="velocity-line-chart-container">
            <h4>📊 Monthly Cumulative Velocity Trend</h4>
            <svg class="velocity-line-chart" viewBox="0 0 ${width} ${height}">
                <!-- Grid lines -->
                <g class="chart-grid">
                    ${yTicks.map(tick => `
                        <line class="grid-line" x1="${padding.left}" y1="${yScale(tick)}" x2="${width - padding.right}" y2="${yScale(tick)}"/>
                    `).join('')}
                </g>
                
                <!-- Y-axis labels -->
                <g class="y-axis">
                    ${yTicks.map(tick => `
                        <text class="y-label" x="${padding.left - 10}" y="${yScale(tick) + 4}" text-anchor="end">${tick.toLocaleString()}</text>
                    `).join('')}
                </g>
                
                <!-- X-axis labels (months) -->
                <g class="x-axis">
                    ${data2024.map((d, i) => `
                        <text class="x-label" x="${xScale(i)}" y="${height - 20}" text-anchor="middle">${d.month}</text>
                    `).join('')}
                </g>
                
                <!-- 2024 Line (Blue) -->
                <path class="velocity-line line-2024" d="${path2024}" 
                    stroke-dasharray="${pathLength}" 
                    stroke-dashoffset="${pathLength}"/>
                
                <!-- 2025 Line (Orange) -->
                <path class="velocity-line line-2025" d="${path2025}" 
                    stroke-dasharray="${pathLength}" 
                    stroke-dashoffset="${pathLength}"/>
                
                <!-- Data points and labels -->
                ${generateDataPoints(data2024, '2024')}
                ${generateDataPoints(data2025, '2025')}
            </svg>
            
            <!-- Legend -->
            <div class="chart-legend-bottom chart-toggles" data-chart="velocity">
                <button class="legend-toggle active" data-line="2024" data-chart="velocity">
                    <span class="legend-line legend-2024"></span>
                    <span>2024</span>
                    <span class="toggle-indicator">✓</span>
                </button>
                <button class="legend-toggle active" data-line="2025" data-chart="velocity">
                    <span class="legend-line legend-2025"></span>
                    <span>2025</span>
                    <span class="toggle-indicator">✓</span>
                </button>
            </div>
            <div class="chart-hint">💡 Toggle lines with legend buttons • Click a point to lock it • Click elsewhere to deselect</div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// ANIMATED BUG LINE CHART
// ═══════════════════════════════════════════════════════════════════════════

function renderAnimatedBugLineChart(bugData) {
    const data2024 = bugData.bugData2024;
    const data2025 = bugData.bugData2025;
    const dataAPM = bugData.bugDataAPM; // Optional third line
    
    // Chart dimensions
    const width = 800;
    const height = 320;
    const padding = { top: 40, right: 60, bottom: 60, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    
    // Find max value for scaling
    let allValues = [...data2024.map(d => d.value), ...data2025.map(d => d.value)];
    if (dataAPM) allValues = [...allValues, ...dataAPM.map(d => d.value)];
    const maxValue = Math.max(...allValues);
    const yMax = Math.ceil(maxValue / 50) * 50; // Round up to nearest 50 for bugs
    
    // Generate Y-axis ticks
    const yTicks = [];
    const tickInterval = yMax <= 100 ? 20 : yMax <= 200 ? 40 : 50;
    for (let i = 0; i <= yMax; i += tickInterval) {
        yTicks.push(i);
    }
    
    // Scale functions
    const xScale = (index) => padding.left + (index / 11) * chartWidth;
    const yScale = (value) => padding.top + chartHeight - (value / yMax) * chartHeight;
    
    // Generate path for line
    const generatePath = (data) => {
        return data.map((d, i) => {
            const x = xScale(i);
            const y = yScale(d.value);
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };
    
    const path2024 = generatePath(data2024);
    const path2025 = generatePath(data2025);
    const pathAPM = dataAPM ? generatePath(dataAPM) : null;
    const pathLength = chartWidth * 1.5;
    
    // Generate data points with labels (grouped for hover)
    // First and last points show labels by default
    const generateBugDataPoints = (data, year, labelOffset = -18) => {
        return data.map((d, i) => {
            const x = xScale(i);
            const y = yScale(d.value);
            const delay = (i * 0.12).toFixed(2);
            const labelY = y + labelOffset;
            const isEndpoint = i === 0 || i === data.length - 1;
            return `
                <g class="data-point-group data-point-group-${year} ${isEndpoint ? 'show-label' : ''}" style="animation-delay: ${delay}s" data-month="${d.month}" data-value="${d.value}" data-year="${year}">
                    <rect class="label-bg" x="${x - 22}" y="${labelY - 12}" width="44" height="18" rx="4" fill="rgba(0,0,0,0.85)"/>
                    <circle class="data-point data-point-${year}" cx="${x}" cy="${y}" r="6" style="animation-delay: ${delay}s"/>
                    <text class="data-label data-label-${year}" x="${x}" y="${labelY}" text-anchor="middle" style="animation-delay: ${delay}s">${d.value}</text>
                </g>
            `;
        }).join('');
    };
    
    return `
        <div class="velocity-line-chart-container bug-chart-variant">
            <h4>🐛 Cumulative Bugs Trend</h4>
            <svg class="velocity-line-chart" viewBox="0 0 ${width} ${height}">
                <!-- Grid lines -->
                <g class="chart-grid">
                    ${yTicks.map(tick => `
                        <line class="grid-line" x1="${padding.left}" y1="${yScale(tick)}" x2="${width - padding.right}" y2="${yScale(tick)}"/>
                    `).join('')}
                </g>
                
                <!-- Y-axis labels -->
                <g class="y-axis">
                    ${yTicks.map(tick => `
                        <text class="y-label" x="${padding.left - 10}" y="${yScale(tick) + 4}" text-anchor="end">${tick}</text>
                    `).join('')}
                </g>
                
                <!-- X-axis labels (months) -->
                <g class="x-axis">
                    ${data2024.map((d, i) => `
                        <text class="x-label" x="${xScale(i)}" y="${height - 20}" text-anchor="middle">${d.month}</text>
                    `).join('')}
                </g>
                
                <!-- 2024 Line (Blue) -->
                <path class="velocity-line line-2024" d="${path2024}" 
                    stroke-dasharray="${pathLength}" 
                    stroke-dashoffset="${pathLength}"/>
                
                <!-- 2025 Line (Orange) -->
                <path class="velocity-line line-2025" d="${path2025}" 
                    stroke-dasharray="${pathLength}" 
                    stroke-dashoffset="${pathLength}"/>
                
                ${pathAPM ? `
                    <!-- APM Line (Red) -->
                    <path class="velocity-line line-apm" d="${pathAPM}" 
                        stroke-dasharray="${pathLength}" 
                        stroke-dashoffset="${pathLength}"/>
                ` : ''}
                
                <!-- Data points and labels -->
                ${generateBugDataPoints(data2024, '2024', -18)}
                ${generateBugDataPoints(data2025, '2025', 28)}
                ${dataAPM ? generateBugDataPoints(dataAPM, 'apm', -35) : ''}
            </svg>
            
            <!-- Legend -->
            <div class="chart-legend-bottom chart-toggles" data-chart="bugs">
                <button class="legend-toggle active" data-line="2024" data-chart="bugs">
                    <span class="legend-line legend-2024"></span>
                    <span>2024</span>
                    <span class="toggle-indicator">✓</span>
                </button>
                <button class="legend-toggle active" data-line="2025" data-chart="bugs">
                    <span class="legend-line legend-2025"></span>
                    <span>2025</span>
                    <span class="toggle-indicator">✓</span>
                </button>
                ${dataAPM ? `
                    <button class="legend-toggle active" data-line="apm" data-chart="bugs">
                        <span class="legend-line legend-apm"></span>
                        <span>APM</span>
                        <span class="toggle-indicator">✓</span>
                    </button>
                ` : ''}
            </div>
            <div class="chart-hint">💡 Toggle lines with legend buttons • Click a point to lock it • Click elsewhere to deselect</div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// BUG ANALYSIS SECTION
// ═══════════════════════════════════════════════════════════════════════════

function renderBugAnalysisSection(bugData) {
    return `
        <div class="analysis-section">
            <h3 class="analysis-title">🐛 ${bugData.title}</h3>
            
            <div class="analysis-grid">
                <!-- Done Velocity -->
                <div class="analysis-card">
                    <h4>Done Velocity</h4>
                    <div class="velocity-comparison">
                        <div class="velocity-year">
                            <div class="velocity-year-label">2024</div>
                            <div class="velocity-year-value">${bugData.doneVelocity['2024']?.toLocaleString()}</div>
                        </div>
                        <div class="velocity-change ${bugData.doneVelocity.yoyChange >= 0 ? 'up' : 'down'}">
                            <div class="velocity-change-arrow">${bugData.doneVelocity.yoyChange >= 0 ? '↑' : '↓'}</div>
                            <div class="velocity-change-value">${Math.abs(bugData.doneVelocity.yoyChange)}%</div>
                        </div>
                        <div class="velocity-year">
                            <div class="velocity-year-label">2025</div>
                            <div class="velocity-year-value">${bugData.doneVelocity['2025']?.toLocaleString()}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Bugs Per Done -->
                <div class="analysis-card">
                    <h4>Bugs Per Done Item</h4>
                    <div class="velocity-comparison">
                        <div class="velocity-year">
                            <div class="velocity-year-label">2024</div>
                            <div class="velocity-year-value">${bugData.bugsPerDone['2024'].ratio}</div>
                        </div>
                        <div class="velocity-change up">
                            <div class="velocity-change-arrow">→</div>
                        </div>
                        <div class="velocity-year">
                            <div class="velocity-year-label">2025</div>
                            <div class="velocity-year-value">${bugData.bugsPerDone['2025'].ratio}</div>
                        </div>
                    </div>
                    <p style="text-align: center; margin-top: 15px; color: #22c55e; font-size: 13px;">
                        ${bugData.bugsPerDone.improvement}
                    </p>
                </div>
                
                <!-- Summary -->
                <div class="analysis-card">
                    <h4>Summary</h4>
                    <ul class="summary-list">
                        ${bugData.summary.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- Bug Type RCA -->
                <div class="analysis-card">
                    <h4>Bug Type Distribution</h4>
                    <div class="rca-bar-row">
                        <span class="rca-label">New Issues</span>
                        <div class="rca-bar">
                            <div class="rca-fill primary" style="width: ${bugData.rca.bugType.new}%"></div>
                        </div>
                        <span class="rca-value">${bugData.rca.bugType.new}%</span>
                    </div>
                    <div class="rca-bar-row">
                        <span class="rca-label">Regression</span>
                        <div class="rca-bar">
                            <div class="rca-fill warning" style="width: ${bugData.rca.bugType.regression}%"></div>
                        </div>
                        <span class="rca-value">${bugData.rca.bugType.regression}%</span>
                    </div>
                    <div style="margin-top: 25px;">
                        <h4 style="margin-bottom: 15px;">Obscurity</h4>
                        <div class="rca-bar-row">
                            <span class="rca-label">Hard to Find</span>
                            <div class="rca-bar">
                                <div class="rca-fill danger" style="width: ${bugData.rca.obscurity.yes}%"></div>
                            </div>
                            <span class="rca-value">${bugData.rca.obscurity.yes}%</span>
                        </div>
                        <div class="rca-bar-row">
                            <span class="rca-label">Easy to Find</span>
                            <div class="rca-bar">
                                <div class="rca-fill success" style="width: ${bugData.rca.obscurity.no}%"></div>
                            </div>
                            <span class="rca-value">${bugData.rca.obscurity.no}%</span>
                        </div>
                    </div>
                </div>
                
                <!-- RCA Categories -->
                <div class="analysis-card">
                    <h4>Product RCA</h4>
                    ${bugData.rca.product.map(item => `
                        <div class="rca-bar-row">
                            <span class="rca-label">${item.category}</span>
                            <div class="rca-bar">
                                <div class="rca-fill primary" style="width: ${item.percent}%"></div>
                            </div>
                            <span class="rca-value">${item.percent}%</span>
                        </div>
                    `).join('')}
                    
                    <h4 style="margin-top: 20px;">Dev RCA</h4>
                    ${bugData.rca.dev.map(item => `
                        <div class="rca-bar-row">
                            <span class="rca-label">${item.category}</span>
                            <div class="rca-bar">
                                <div class="rca-fill warning" style="width: ${item.percent}%"></div>
                            </div>
                            <span class="rca-value">${item.percent}%</span>
                        </div>
                    `).join('')}
                    
                    <h4 style="margin-top: 20px;">Testing RCA</h4>
                    ${bugData.rca.testing.map(item => `
                        <div class="rca-bar-row">
                            <span class="rca-label">${item.category}</span>
                            <div class="rca-bar">
                                <div class="rca-fill danger" style="width: ${item.percent}%"></div>
                            </div>
                            <span class="rca-value">${item.percent}%</span>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Actions -->
                <div class="analysis-card">
                    <h4>Actions Taken</h4>
                    <ul class="actions-list">
                        ${bugData.actions.map(action => `<li>${action}</li>`).join('')}
                    </ul>
                    ${bugData.nextSteps ? `
                        <h4 style="margin-top: 20px;">Next Steps</h4>
                        <ul class="actions-list">
                            ${bugData.nextSteps.map(step => `<li>${step}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// QCOE SECTION
// ═══════════════════════════════════════════════════════════════════════════

function renderQCOESection(qcoe) {
    if (!qcoe.interviewProcess) return '';
    
    return `
        <div class="analysis-section">
            <h3 class="analysis-title">⭐ ${qcoe.title}</h3>
            
            <div class="analysis-card" style="max-width: 800px;">
                <h4>Interview Process (${qcoe.interviewProcess.totalDuration})</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                    ${qcoe.interviewProcess.rounds.map(round => `
                        <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; text-align: center;">
                            <div style="width: 40px; height: 40px; background: var(--axos-orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 800; color: #0a0f1a;">
                                ${round.round}
                            </div>
                            <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px;">${round.name}</div>
                            <div style="color: var(--axos-orange); font-size: 12px; margin-bottom: 10px;">${round.duration}</div>
                            <div style="font-size: 11px; color: rgba(255,255,255,0.5);">${round.focus}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// COLLAPSIBLE SECTIONS
// ═══════════════════════════════════════════════════════════════════════════

function initCollapsibleSections() {
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            const isCollapsed = header.dataset.collapsed === 'true';
            header.dataset.collapsed = (!isCollapsed).toString();
            header.classList.toggle('collapsed', !isCollapsed);
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// DETAIL MODAL FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function openCategoryDetail(categoryName) {
    if (!currentManager) return;
    
    const category = currentManager.projects.find(p => p.category === categoryName);
    if (!category) return;
    
    currentCategory = categoryName;
    const analyticsMap = getAnalyticsMap(currentManager);
    const analytics = analyticsMap[categoryName];
    
    const modal = document.getElementById('detailModal');
    const title = document.getElementById('detailModalTitle');
    const content = document.getElementById('detailModalContent');
    
    title.textContent = categoryName;
    content.innerHTML = renderDetailContent(category, analytics, currentManager.color);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate items in
    setTimeout(() => {
        content.querySelectorAll('.detail-project-row').forEach((row, i) => {
            setTimeout(() => row.classList.add('visible'), i * 50);
        });
    }, 100);
}

function closeDetailModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    if (!document.getElementById('analyticsModal').classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

function openQCOEDetail() {
    if (!currentManager || !currentManager.qcoe) return;
    
    const modal = document.getElementById('detailModal');
    const title = document.getElementById('detailModalTitle');
    const content = document.getElementById('detailModalContent');
    
    title.textContent = currentManager.qcoe.title;
    content.innerHTML = renderQCOEDetailContent(currentManager.qcoe);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderDetailContent(category, analytics, color) {
    const stats = getCategoryStats(category);
    
    return `
        <div class="detail-header" style="--accent-color: ${color}">
            <div class="detail-stats-row">
                <div class="detail-stat">
                    <span class="detail-stat-value" style="color: #22c55e">${stats.completed}</span>
                    <span class="detail-stat-label">Completed</span>
                </div>
                <div class="detail-stat">
                    <span class="detail-stat-value" style="color: #eab308">${stats.inProgress}</span>
                    <span class="detail-stat-label">In Progress</span>
                </div>
                <div class="detail-stat">
                    <span class="detail-stat-value" style="color: #ef4444">${stats.blocked}</span>
                    <span class="detail-stat-label">Blocked</span>
                </div>
            </div>
        </div>
        
        <div class="detail-projects">
            <div class="detail-table-header">
                <span>Project</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Status</span>
                <span>Impact</span>
            </div>
            ${category.items.map((item, i) => renderDetailProjectRow(item, i)).join('')}
        </div>
        
        ${analytics ? renderAnalyticsButtons(analytics) : ''}
    `;
}

function renderDetailProjectRow(item, index) {
    const status = getProjectStatus(item);
    const change = item.nov !== null && item.dec !== null ? item.dec - item.nov : null;
    
    return `
        <div class="detail-project-row ${status}" style="--row-delay: ${index * 0.05}s">
            <div class="project-name-cell">
                <span class="project-name">${item.project}</span>
                ${item.note ? `<span class="project-note">${item.note}</span>` : ''}
            </div>
            <div class="progress-cell">
                ${item.nov !== null ? `
                    <div class="mini-progress">
                        <div class="mini-progress-fill ${getProgressClass(item.nov)}" style="width: ${item.nov}%"></div>
                    </div>
                    <span>${item.nov}%</span>
                ` : '-'}
            </div>
            <div class="progress-cell">
                ${item.dec !== null ? `
                    <div class="mini-progress">
                        <div class="mini-progress-fill ${getProgressClass(item.dec)}" style="width: ${item.dec}%"></div>
                    </div>
                    <span>${item.dec}%</span>
                    ${change > 0 ? `<span class="change-up">+${change}</span>` : ''}
                ` : '-'}
            </div>
            <div>
                <span class="status-pill ${status}">${item.target || 'TBD'}</span>
            </div>
            <div class="impact-cell">${item.impact || '-'}</div>
        </div>
    `;
}

function renderAnalyticsButtons(analytics) {
    return `
        <div class="analytics-buttons-section">
            <div class="analytics-divider">
                <span>📊 Analytics Available</span>
            </div>
            <div class="analytics-buttons">
                ${analytics.velocityData ? `
                    <button class="analytics-btn velocity-btn" onclick="openVelocityAnalytics()">
                        <span class="btn-icon">📈</span>
                        <span class="btn-text">
                            <span class="btn-title">Done Velocity</span>
                            <span class="btn-subtitle">Year-over-Year Comparison</span>
                        </span>
                        <span class="btn-arrow">→</span>
                    </button>
                ` : ''}
                ${analytics.bugAnalysis ? `
                    <button class="analytics-btn bugs-btn" onclick="openBugAnalytics()">
                        <span class="btn-icon">🐛</span>
                        <span class="btn-text">
                            <span class="btn-title">PROD Bugs Analysis</span>
                            <span class="btn-subtitle">RCA, Trends & Actions</span>
                        </span>
                        <span class="btn-arrow">→</span>
                    </button>
                ` : ''}
            </div>
        </div>
    `;
}

function renderQCOEDetailContent(qcoe) {
    if (!qcoe.interviewProcess) return '<p>No QCOE details available.</p>';
    
    return `
        <div class="qcoe-detail">
            <h3 class="qcoe-section-title">Interview Process</h3>
            <p class="qcoe-duration">Total Duration: ${qcoe.interviewProcess.totalDuration}</p>
            
            <div class="interview-rounds">
                ${qcoe.interviewProcess.rounds.map((round, i) => `
                    <div class="interview-round" style="--round-delay: ${i * 0.15}s">
                        <div class="round-number">${round.round}</div>
                        <div class="round-info">
                            <h4>${round.name}</h4>
                            <span class="round-duration">${round.duration}</span>
                            <p class="round-focus">${round.focus}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════════════════
// ANALYTICS MODAL FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function openVelocityAnalytics() {
    if (!currentManager || !currentCategory) return;
    
    const analyticsMap = getAnalyticsMap(currentManager);
    const analytics = analyticsMap[currentCategory];
    if (!analytics || !analytics.velocityData) return;
    
    const modal = document.getElementById('analyticsModal');
    const title = document.getElementById('analyticsModalTitle');
    const content = document.getElementById('analyticsModalContent');
    
    title.textContent = analytics.velocityData.title;
    content.innerHTML = renderVelocityAnalyticsContent(analytics.velocityData);
    
    modal.classList.add('active');
    
    // Trigger graph animation
    setTimeout(() => animateVelocityGraph(), 100);
}

function openBugAnalytics() {
    if (!currentManager || !currentCategory) return;
    
    const analyticsMap = getAnalyticsMap(currentManager);
    const analytics = analyticsMap[currentCategory];
    if (!analytics || !analytics.bugAnalysis) return;
    
    const modal = document.getElementById('analyticsModal');
    const title = document.getElementById('analyticsModalTitle');
    const content = document.getElementById('analyticsModalContent');
    
    title.textContent = analytics.bugAnalysis.title;
    content.innerHTML = renderBugAnalyticsContent(analytics.bugAnalysis);
    
    modal.classList.add('active');
    
    // Trigger graph animations
    setTimeout(() => animateBugGraphs(), 100);
}

function closeAnalyticsModal() {
    const modal = document.getElementById('analyticsModal');
    modal.classList.remove('active');
}

function renderVelocityAnalyticsContent(velocityData) {
    const yoyChange = velocityData.total2024 && velocityData.total2025 
        ? Math.round(((velocityData.total2025 - velocityData.total2024) / velocityData.total2024) * 100)
        : null;
    const isUp = yoyChange >= 0;
    
    // Check if we have monthly chart data
    const hasChartData = velocityData.data2024 && velocityData.data2025;
    
    return `
        <div class="velocity-analytics">
            <div class="velocity-hero">
                <div class="velocity-comparison-large">
                    <div class="velocity-year-large">
                        <span class="year-label">2024</span>
                        <span class="year-value" id="velocity2024">0</span>
                        <span class="year-unit">done items</span>
                    </div>
                    <div class="velocity-arrow ${isUp ? 'up' : 'down'}">
                        <div class="arrow-circle">
                            <span class="arrow-icon">${isUp ? '↑' : '↓'}</span>
                        </div>
                        <span class="arrow-percent" id="velocityChange">0%</span>
                    </div>
                    <div class="velocity-year-large">
                        <span class="year-label">2025</span>
                        <span class="year-value" id="velocity2025">0</span>
                        <span class="year-unit">done items</span>
                    </div>
                </div>
            </div>
            
            ${hasChartData ? renderAnimatedLineChart(velocityData) : `
                <div class="velocity-graph-container">
                    <h4>📊 Cumulative Velocity Trend</h4>
                    <div class="velocity-bars">
                        <div class="velocity-bar-group">
                            <div class="bar-label">2024</div>
                            <div class="velocity-bar bar-2024">
                                <div class="bar-fill" id="bar2024" data-value="${velocityData.total2024}"></div>
                            </div>
                            <div class="bar-value">${velocityData.total2024?.toLocaleString()}</div>
                        </div>
                        <div class="velocity-bar-group">
                            <div class="bar-label">2025</div>
                            <div class="velocity-bar bar-2025">
                                <div class="bar-fill" id="bar2025" data-value="${velocityData.total2025}"></div>
                            </div>
                            <div class="bar-value">${velocityData.total2025?.toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            `}
        </div>
    `;
}

function renderBugAnalyticsContent(bugData) {
    // Check if we have monthly bug chart data
    const hasBugChartData = bugData.bugData2024 && bugData.bugData2025;
    
    return `
        <div class="bug-analytics">
            <div class="bug-hero">
                <div class="bug-comparison">
                    <div class="bug-year">
                        <span class="year-label">2024</span>
                        <div class="bug-stat">
                            <span class="bug-value" id="bugs2024">0</span>
                            <span class="bug-unit">bugs</span>
                        </div>
                        <div class="done-stat">
                            <span>${bugData.bugsPerDone['2024'].doneItems.toLocaleString()} done</span>
                            <span class="ratio">Ratio: ${bugData.bugsPerDone['2024'].ratio}</span>
                        </div>
                    </div>
                    <div class="bug-arrow ${bugData.doneVelocity.yoyChange >= 0 ? 'up' : 'down'}">
                        <span class="arrow-icon">${bugData.doneVelocity.yoyChange >= 0 ? '↑' : '↓'}</span>
                        <span class="arrow-percent" id="bugChange">0%</span>
                    </div>
                    <div class="bug-year">
                        <span class="year-label">2025</span>
                        <div class="bug-stat">
                            <span class="bug-value" id="bugs2025">0</span>
                            <span class="bug-unit">bugs</span>
                        </div>
                        <div class="done-stat">
                            <span>${bugData.bugsPerDone['2025'].doneItems.toLocaleString()} done</span>
                            <span class="ratio">Ratio: ${bugData.bugsPerDone['2025'].ratio}</span>
                        </div>
                    </div>
                </div>
                <div class="improvement-banner ${bugData.doneVelocity.yoyChange < 0 ? 'positive' : 'negative'}">
                    ${bugData.bugsPerDone.improvement}
                </div>
            </div>
            
            ${hasBugChartData ? renderAnimatedBugLineChart(bugData) : ''}
            
            <div class="bug-charts-grid">
                <div class="bug-chart-card">
                    <h4>🔍 Bug Type Distribution</h4>
                    <div class="donut-chart" id="bugTypeChart">
                        <svg viewBox="0 0 100 100">
                            <circle class="donut-ring" cx="50" cy="50" r="40"/>
                            <circle class="donut-segment new-bugs" cx="50" cy="50" r="40" 
                                    stroke-dasharray="0 251.2" id="donutNew"/>
                            <circle class="donut-segment regression-bugs" cx="50" cy="50" r="40"
                                    stroke-dasharray="0 251.2" id="donutRegression"/>
                        </svg>
                        <div class="donut-center">
                            <span class="donut-value" id="donutTotal">0</span>
                            <span class="donut-label">bugs</span>
                        </div>
                    </div>
                    <div class="chart-legend">
                        <div class="legend-item"><span class="dot new"></span> New: ${bugData.rca.bugType.new}%</div>
                        <div class="legend-item"><span class="dot regression"></span> Regression: ${bugData.rca.bugType.regression}%</div>
                    </div>
                </div>
                
                <div class="bug-chart-card">
                    <h4>🔎 Obscurity Analysis</h4>
                    <div class="obscurity-bars">
                        <div class="obscurity-bar-row">
                            <span class="obscurity-label">Hard to Find</span>
                            <div class="obscurity-bar">
                                <div class="obscurity-fill hard" id="obscurityHard" style="width: 0%"></div>
                            </div>
                            <span class="obscurity-value">${bugData.rca.obscurity.yes}%</span>
                        </div>
                        <div class="obscurity-bar-row">
                            <span class="obscurity-label">Easy to Find</span>
                            <div class="obscurity-bar">
                                <div class="obscurity-fill easy" id="obscurityEasy" style="width: 0%"></div>
                            </div>
                            <span class="obscurity-value">${bugData.rca.obscurity.no}%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="rca-section">
                <h4>📋 Root Cause Analysis</h4>
                <div class="rca-tabs">
                    <button class="rca-tab active" onclick="switchRCATab('product', this)">Product</button>
                    <button class="rca-tab" onclick="switchRCATab('dev', this)">Development</button>
                    <button class="rca-tab" onclick="switchRCATab('testing', this)">Testing</button>
                </div>
                <div class="rca-content" id="rcaContent">
                    ${renderRCABars(bugData.rca.product, 'product')}
                </div>
            </div>
            
            <div class="summary-section">
                <h4>📝 Summary</h4>
                <ul class="summary-list-animated">
                    ${bugData.summary.map((item, i) => `
                        <li style="--item-delay: ${i * 0.1}s">${item}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="actions-section">
                <h4>✅ Actions Taken</h4>
                <ul class="actions-list-animated">
                    ${bugData.actions.map((item, i) => `
                        <li style="--item-delay: ${i * 0.1}s">${item}</li>
                    `).join('')}
                </ul>
            </div>
            
            ${bugData.nextSteps ? `
                <div class="next-steps-section">
                    <h4>🚀 Next Steps</h4>
                    <ul class="next-steps-list">
                        ${bugData.nextSteps.map((item, i) => `
                            <li style="--item-delay: ${i * 0.1}s">${item}</li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function renderRCABars(rcaData, type) {
    const colors = {
        product: '#3b82f6',
        dev: '#f59e0b',
        testing: '#ef4444'
    };
    
    return `
        <div class="rca-bars" data-type="${type}">
            ${rcaData.map((item, i) => `
                <div class="rca-bar-item" style="--bar-delay: ${i * 0.1}s">
                    <div class="rca-bar-label">${item.category}</div>
                    <div class="rca-bar-track">
                        <div class="rca-bar-fill" style="--fill-color: ${colors[type]}; width: 0%" data-width="${item.percent}"></div>
                    </div>
                    <div class="rca-bar-value">${item.percent}%</div>
                </div>
            `).join('')}
        </div>
    `;
}

function switchRCATab(type, btn) {
    if (!currentManager || !currentCategory) return;
    
    const analyticsMap = getAnalyticsMap(currentManager);
    const analytics = analyticsMap[currentCategory];
    if (!analytics || !analytics.bugAnalysis) return;
    
    // Update active tab
    document.querySelectorAll('.rca-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    
    // Update content
    const content = document.getElementById('rcaContent');
    content.innerHTML = renderRCABars(analytics.bugAnalysis.rca[type], type);
    
    // Animate bars
    setTimeout(() => animateRCABars(), 50);
}

// ═══════════════════════════════════════════════════════════════════════════
// GRAPH ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

function animateVelocityGraph() {
    const analyticsMap = getAnalyticsMap(currentManager);
    const analytics = analyticsMap[currentCategory];
    if (!analytics || !analytics.velocityData) return;
    
    const v2024 = analytics.velocityData.total2024;
    const v2025 = analytics.velocityData.total2025;
    const change = Math.round(((v2025 - v2024) / v2024) * 100);
    
    // Animate numbers
    animateNumber('velocity2024', 0, v2024, 1500);
    animateNumber('velocity2025', 0, v2025, 1500);
    animateNumber('velocityChange', 0, Math.abs(change), 1500, '%');
    
    // Animate bars
    const maxVal = Math.max(v2024, v2025);
    const bar2024 = document.getElementById('bar2024');
    const bar2025 = document.getElementById('bar2025');
    
    if (bar2024) {
        setTimeout(() => {
            bar2024.style.width = `${(v2024 / maxVal) * 100}%`;
        }, 200);
    }
    if (bar2025) {
        setTimeout(() => {
            bar2025.style.width = `${(v2025 / maxVal) * 100}%`;
        }, 400);
    }
}

function animateBugGraphs() {
    const analyticsMap = getAnalyticsMap(currentManager);
    const analytics = analyticsMap[currentCategory];
    if (!analytics || !analytics.bugAnalysis) return;
    
    const bugData = analytics.bugAnalysis;
    const b2024 = bugData.bugsPerDone['2024'].bugs;
    const b2025 = bugData.bugsPerDone['2025'].bugs;
    
    // Animate numbers
    animateNumber('bugs2024', 0, b2024, 1200);
    animateNumber('bugs2025', 0, b2025, 1200);
    animateNumber('bugChange', 0, Math.abs(bugData.doneVelocity.yoyChange), 1200, '%');
    animateNumber('donutTotal', 0, b2025, 1500);
    
    // Animate donut chart
    const newPercent = bugData.rca.bugType.new;
    const regPercent = bugData.rca.bugType.regression;
    const circumference = 2 * Math.PI * 40;
    
    const donutNew = document.getElementById('donutNew');
    const donutReg = document.getElementById('donutRegression');
    
    if (donutNew) {
        setTimeout(() => {
            donutNew.style.strokeDasharray = `${(newPercent / 100) * circumference} ${circumference}`;
        }, 300);
    }
    if (donutReg) {
        setTimeout(() => {
            const newArc = (newPercent / 100) * circumference;
            const regArc = (regPercent / 100) * circumference;
            donutReg.style.strokeDashoffset = `-${newArc}`;
            donutReg.style.strokeDasharray = `${regArc} ${circumference}`;
        }, 500);
    }
    
    // Animate obscurity bars
    const obscurityHard = document.getElementById('obscurityHard');
    const obscurityEasy = document.getElementById('obscurityEasy');
    
    if (obscurityHard) {
        setTimeout(() => {
            obscurityHard.style.width = `${bugData.rca.obscurity.yes}%`;
        }, 400);
    }
    if (obscurityEasy) {
        setTimeout(() => {
            obscurityEasy.style.width = `${bugData.rca.obscurity.no}%`;
        }, 600);
    }
    
    // Animate RCA bars
    animateRCABars();
    
    // Animate summary items
    document.querySelectorAll('.summary-list-animated li, .actions-list-animated li, .next-steps-list li').forEach((li, i) => {
        setTimeout(() => li.classList.add('visible'), 800 + (i * 100));
    });
}

function animateRCABars() {
    document.querySelectorAll('.rca-bar-fill').forEach((bar, i) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
        }, i * 100);
    });
}

function animateNumber(elementId, start, end, duration, suffix = '') {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    const startTime = performance.now();
    const diff = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        const current = Math.round(start + diff * easeProgress);
        el.textContent = current.toLocaleString() + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}
