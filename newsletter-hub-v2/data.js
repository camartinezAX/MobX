// ═══════════════════════════════════════════════════════════════════════════
// QCOE Newsletter Hub - Data Store
// All team data from bi-weekly reports
// ═══════════════════════════════════════════════════════════════════════════

const TEAMS_DATA = {
    'ue-borrow': {
        id: 'ue-borrow',
        name: 'UE-Borrow',
        shortName: 'UE',
        manager: 'Marco De Jesus Ciriaco',
        lead: 'Vamshi Bashetti',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'The team focused on creating test cases and executing functional testing for February release PBIs, ensuring improved quality, stability, and release readiness.',
        sprintGoal: 'Test case creation and functional testing for February release work items.',
        mvp: null,
        engineers: [
            { name: 'Rodrigo Miguel Campos Mendizabal', role: 'Quality Engineer' },
            { name: 'Vamshi Bashetti', role: 'QE Lead' }
        ],
        delivery: [
            { engineer: 'Rodrigo Miguel Campos', task: 'UE-Borrow PBI testing & automation', pbis: 3, automated: 17, manualPercent: 70, aiUsage: true },
            { engineer: 'Vamsi Bashetti', task: 'Work planner PBI testing', pbis: 5, automated: 14, manualPercent: 80, aiUsage: true }
        ],
        automation: [
            { app: 'elos Admin', status: 'completed', coverage: 80, target: 80, owner: 'Vamsi Bashetti', notes: 'Automation completed' },
            { app: 'AUS', status: 'completed', coverage: 80, target: 80, owner: 'Vamsi Bashetti', notes: 'Automation completed' },
            { app: 'elos', status: 'completed', coverage: 85, target: 85, owner: 'Rodrigo, Vamsi', notes: 'Automation completed' },
            { app: 'ULP', status: 'completed', coverage: 90, target: 90, owner: 'Vamsi, Rodrigo', notes: 'Automation completed' }
        ],
        aiTools: [
            { tool: 'Tachyon GPT / Copilot', useCase: 'Test Case Generation, Bug creation, Code generation', pbis: 3, timeSaved: '1.5h', usage: 'Progress February release PBIs and automation' }
        ],
        stats: { pbis: 8, automated: 31, engineers: 2, timeSaved: 1.5 }
    },
    
    'robo': {
        id: 'robo',
        name: 'ROBO',
        shortName: 'RO',
        manager: 'Irina Easterling',
        lead: 'Susana Delgado',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: false,
        usingAI: true,
        highlights: 'Team has been working on closing PBIs P2/P3 for 870 project. Focused on Performance Feature testing.',
        sprintGoal: 'Test Performance Feature for 870 and Test P1/P2 items.',
        mvp: { name: 'Entire ROBO Team', reason: 'All team has done their best to close Performance feature' },
        engineers: [
            { name: 'Alejandro Pérez', role: 'Quality Engineer' },
            { name: 'Amma Ashok', role: 'Quality Engineer' },
            { name: 'Gerardo Miranda', role: 'Quality Engineer' },
            { name: 'Nathalie Carlos', role: 'Quality Engineer' },
            { name: 'Orlando López', role: 'Quality Engineer' },
            { name: 'Noemi Pajarito', role: 'Quality Engineer' },
            { name: 'Cesar Benitez', role: 'Quality Engineer' },
            { name: 'Roberto Carlos Gonzalez', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'Alejandro Pérez', task: 'ROBO PBI testing & automation', pbis: 10, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Amma Ashok', task: 'ROBO PBI testing & automation', pbis: 10, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Gerardo Miranda', task: 'ROBO PBI testing & automation', pbis: 10, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Nathalie Carlos', task: 'ROBO PBI testing', pbis: 5, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Orlando López', task: 'ROBO PBI testing', pbis: 5, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Noemi Pajarito', task: 'ROBO PBI testing & automation', pbis: 12, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Cesar Benitez', task: 'ROBO PBI testing', pbis: 10, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Roberto Carlos Gonzalez', task: 'ROBO PBI testing', pbis: 10, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: 'Project 870 Phase 1 E2E Web', status: 'completed', coverage: 100, target: 100, owner: 'Alejandro Pérez', notes: 'Completed' },
            { app: 'Project 870 Phase 1 E2E Mobile', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Blocked - TestIM mobile issues' },
            { app: 'Project 870 Phase 2 E2E Web', status: 'in-progress', coverage: 53, target: 100, targetDate: '02/28/2025', owner: 'Gerardo Miranda', notes: 'In Progress' },
            { app: 'Project 870 Phase 2 E2E Mobile', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Blocked - TestIM mobile issues' },
            { app: 'Project 870 Phase 3 E2E Web', status: 'in-progress', coverage: 24, target: 100, targetDate: '02/28/2025', owner: 'Noemi Pajarito', notes: 'In Progress' },
            { app: 'Project 870 Phase 3 E2E Mobile', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Blocked - TestIM mobile issues' }
        ],
        aiTools: [
            { tool: 'XTforge AI', useCase: 'Test Case Generation', pbis: 16, timeSaved: '8h', usage: 'Time used reviewing tool usage' }
        ],
        stats: { pbis: 72, automated: 0, engineers: 8, timeSaved: 8 }
    },
    
    'qcoe': {
        id: 'qcoe',
        name: 'QCOE',
        shortName: 'QC',
        manager: 'Marco De Jesus Ciriaco',
        lead: 'Carlos Martinez',
        reportPeriod: '12/15/2025 - 12/26/2025',
        followingTDD: true,
        usingAI: true,
        highlights: 'All AI tool pilots completed and evaluated. Welcome Fabrizio to the team!',
        sprintGoal: 'AI TestGennie rollout and infrastructure updates.',
        mvp: null,
        engineers: [
            { name: 'Carlos Martinez', role: 'QE Lead' },
            { name: 'Fabrizio', role: 'Quality Engineer' }
        ],
        delivery: [],
        automation: [],
        aiTools: [
            { tool: 'TestGennie + Cursor', useCase: 'AI-Powered Test Generation', pbis: 0, timeSaved: '0h', usage: 'Rollout in progress' }
        ],
        initiatives: [
            { title: 'AI Pilots Status', status: 'completed', description: 'All AI tool pilots completed and evaluated' },
            { title: 'AI TestGennie Rollout', status: 'in-progress', items: ['Awaiting Rahul\'s review', 'Cursor license request in process', 'QE\'s Cursor AI installation in process'] },
            { title: 'Infrastructure Updates', status: 'in-progress', description: 'Continuing periodic EOL remediation testing on automation agents' },
            { title: 'GitHub Migration', status: 'in-progress', description: 'Repo and pipelines migration in progress' }
        ],
        reports: ['Production RCAs - Updated through Dec 17th', 'Mobile Test Regression Automation - Weekly summary', 'Mobile Test Sanity Automation - Weekly summary', 'State of Automation QCOE - Slides updated'],
        nextSprint: ['Continue expanding TestGennie adoption', 'Create markdown documentation for mobile automation AI integration', 'Investigate failing network requests and environment stability issues'],
        stats: { pbis: 0, automated: 0, engineers: 2, timeSaved: 0 }
    },
    
    'avengers': {
        id: 'avengers',
        name: 'Plan / Avengers',
        shortName: 'AV',
        manager: 'Irina Easterling',
        lead: 'Fernando González',
        reportPeriod: '12/15/2025 - 12/26/2025',
        followingTDD: false,
        usingAI: true,
        highlights: 'QA Team was focused on Production & Regression Mobile Bugs as priority.',
        sprintGoal: 'Releases, Production Bugs',
        mvp: null,
        engineers: [
            { name: 'Azucena Teresa Alvarez', role: 'Quality Engineer' },
            { name: 'Oscar Alaniz', role: 'Quality Engineer' },
            { name: 'German Rocha', role: 'Quality Engineer' },
            { name: 'Ramya Yamala', role: 'Quality Engineer' },
            { name: 'Rutuja Taware', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'All team', task: 'Prod Bugs', pbis: 0, automated: 0, manualPercent: 100, aiUsage: false },
            { engineer: 'All team', task: 'Sanity / Reg Bugs', pbis: 3, automated: 0, manualPercent: 100, aiUsage: false },
            { engineer: 'All team', task: 'Plan / Avengers PBIs', pbis: 3, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [],
        aiTools: [
            { tool: 'Tachyon GPT', useCase: 'Test Case Generation', pbis: 3, timeSaved: '0h', usage: 'Time spent updating test cases with scenarios and steps' }
        ],
        stats: { pbis: 6, automated: 0, engineers: 5, timeSaved: 0 }
    },
    
    'wfo': {
        id: 'wfo',
        name: 'WFO - OutSystems',
        shortName: 'WF',
        manager: 'Marco De Jesus Ciriaco',
        lead: 'Priyanka Baheti',
        reportPeriod: '12/15/2025 - 12/26/2025',
        followingTDD: 'Partial',
        usingAI: true,
        highlights: 'Participated in multiple project kickoffs: Decision Migration, Yodlee Webhook Phase 1, Compensation Management (Meritocracy), 927 Phase 2, Form Bridge Onboarding-FBO. Team helped choose Test Genie as AT tool.',
        sprintGoal: 'Multiple project kickoffs and E2E testing for Yodlee Webhook',
        mvp: { name: 'OS QE Team', reason: 'Exceptional sprint delivery across multiple projects' },
        engineers: [
            { name: 'Priyanka Baheti', role: 'QE Lead' },
            { name: 'Ernesto Pasillas Luevano', role: 'Quality Engineer' },
            { name: 'Sergio Osart Mata Charles', role: 'Quality Engineer' },
            { name: 'Lucas Couto de Andrade', role: 'Quality Engineer' },
            { name: 'Miguel Matamoros', role: 'Quality Engineer' },
            { name: 'Francisco Adan Santillan', role: 'Quality Engineer' },
            { name: 'Noelia Andrea Flores', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'Team', task: 'Prod Support, WP, Initiatives, UCAT, EWM', pbis: 20, automated: 20, manualPercent: 90, aiUsage: true }
        ],
        automation: [
            { app: 'Vendor Management (VM)', status: 'completed', coverage: 90, target: 80, owner: 'Priyanka Baheti', notes: 'Pipeline setup in ADO' },
            { app: 'UCAT', status: 'completed', coverage: 90, target: 80, owner: 'Ernesto Pasillas', notes: 'Pipeline setup in ADO' },
            { app: 'IBD KYC', status: 'completed', coverage: 80, target: 80, owner: 'Sergio Osart', notes: 'Pipeline setup in ADO' },
            { app: 'OLPP', status: 'completed', coverage: 80, target: 80, owner: 'Priyanka Baheti', notes: 'Pipeline setup in ADO' },
            { app: '927: Open Finance API', status: 'completed', coverage: 80, target: 80, owner: 'Priyanka Baheti', notes: 'Pipeline setup in ADO' },
            { app: 'OS Onboarding Admin Portal', status: 'completed', coverage: 90, target: 80, owner: 'Ernesto Pasillas', notes: 'Pipeline setup in ADO' },
            { app: 'Manage Portfolio-870', status: 'completed', coverage: 80, target: 80, owner: 'Sergio Osart', notes: 'Working on pipeline' },
            { app: 'Enterprise Wires (EWM)', status: 'in-progress', coverage: 70, target: 80, owner: 'Priyanka Baheti', notes: 'SFR/WHL/DepOps in progress' },
            { app: 'Work Planners (WP)', status: 'in-progress', coverage: 70, target: 80, owner: 'Lucas Couto', notes: 'On Hold - new dev moving to prod' },
            { app: 'AEW', status: 'in-progress', coverage: 70, target: 80, owner: 'Ernesto Pasillas', notes: 'New dev PBIs in progress' },
            { app: '24602 Yodlee Webhook', status: 'in-progress', coverage: 20, target: 80, owner: 'Priyanka Baheti', notes: 'New Project' },
            { app: 'Loan Demand Statement (PDS)', status: 'in-progress', coverage: 10, target: 80, owner: 'Priyanka Baheti', notes: 'In progress' },
            { app: 'OSG', status: 'in-progress', coverage: 10, target: 80, owner: 'Francisco Santillan', notes: 'In progress' },
            { app: 'Compensation (Meritocracy)', status: 'in-progress', coverage: 20, target: 80, owner: 'Miguel Matamoros', notes: 'In progress' },
            { app: 'Decision Migration', status: 'in-progress', coverage: 20, target: 80, owner: 'Francisco Santillan', notes: 'In progress' },
            { app: '1015 Content Engine', status: 'completed', coverage: 80, target: 80, owner: 'Francisco Santillan', notes: 'Completed' },
            { app: 'New Product Request (NPR)', status: 'in-progress', coverage: 75, target: 80, owner: 'Sergio Osart', notes: 'In progress' },
            { app: 'CRV', status: 'in-progress', coverage: 40, target: 80, owner: 'Noelia Flores', notes: 'In progress' }
        ],
        aiTools: [
            { tool: 'Tachyon GPT / Test Genie', useCase: 'Test Case Generation', pbis: 10, timeSaved: '4h', usage: 'New project QA preparation' }
        ],
        stats: { pbis: 20, automated: 20, engineers: 7, timeSaved: 4 }
    },
    
    'core-services': {
        id: 'core-services',
        name: 'Core Services',
        shortName: 'CS',
        manager: 'Marco de Jesus Ciriaco',
        lead: 'Jose Colina',
        reportPeriod: '12/15/2025 - 12/26/2025',
        followingTDD: true,
        usingAI: true,
        highlights: 'Completed testing on 58 items that were ready for test and previously pending. Team is still learning and adapting to Core Services concepts while making progress.',
        sprintGoal: 'Focus on testing ready-for-test items and ensure all Core Services release items were thoroughly validated.',
        mvp: null,
        engineers: [
            { name: 'Jose Colina', role: 'QE Lead' },
            { name: 'Jhanina Lazcano', role: 'Quality Engineer' },
            { name: 'Kranthi Kandukuri', role: 'Quality Engineer' },
            { name: 'Juan De Dios Felipe Sillas', role: 'Quality Engineer' },
            { name: 'Harry Miyer Cepeda Reales', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'Kranthi Kandukuri', task: 'In-sprint items testing and Banking Core Automation', pbis: 27, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Jhanina Lazcano', task: 'In-sprint items testing', pbis: 17, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Juan De Dios Felipe Sillas', task: 'In-sprint items testing', pbis: 5, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Harry Miyer Cepeda Reales', task: 'In-sprint items testing', pbis: 9, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: 'Rules Manager', status: 'completed', coverage: 100, target: 100, owner: 'QE team', notes: 'Endpoint validation completed' },
            { app: 'Banking Core', status: 'on-hold', coverage: 30, target: 100, owner: 'QE team', notes: 'Paused for ready-for-test items' },
            { app: 'Identity', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'After Banking Core completion' },
            { app: 'Securities', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'TBD' },
            { app: 'Notifications', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'TBD' },
            { app: 'Documents', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'TBD' },
            { app: 'Service Bus', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'TBD' },
            { app: 'Branding', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'TBD' },
            { app: 'Agreements', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', notes: 'TBD' }
        ],
        aiTools: [
            { tool: 'Microsoft Copilot / Tachyon', useCase: 'Test case creation / Test data', pbis: 29, timeSaved: '7h', usage: 'Validated three more ready-for-test items during sprint' }
        ],
        stats: { pbis: 58, automated: 0, engineers: 5, timeSaved: 7 }
    },
    
    'ibd': {
        id: 'ibd',
        name: 'WL-IBD',
        shortName: 'IB',
        manager: 'Irina Easterling',
        lead: 'Eliana Zelada',
        reportPeriod: '12/15/2025 - 12/28/2025',
        followingTDD: true,
        usingAI: true,
        highlights: 'Team concentrated on Regression for OLB Release 144.4 / Sanity UDB 1.233 and regression on Production.',
        sprintGoal: 'Regression for OLB Release 144.4 / Sanity UDB 1.233 and regression on PROD',
        mvp: { name: 'Carlos Baltazar & David Alvarado', reason: 'Worked OT to complete releases' },
        engineers: [
            { name: 'Eliana Zelada', role: 'QE Lead' },
            { name: 'Carlos Baltazar', role: 'Quality Engineer' },
            { name: 'John Carlo Tobillo', role: 'Quality Engineer' },
            { name: 'Masani Kousik', role: 'Quality Engineer' },
            { name: 'Shaik Shoaib', role: 'Quality Engineer' },
            { name: 'David Alvarado', role: 'Quality Engineer' },
            { name: 'Jade Golez', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'Jade Golez', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 6, automated: 1, manualPercent: 100, aiUsage: false },
            { engineer: 'John Carlo Tobillo', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 6, automated: 3, manualPercent: 100, aiUsage: false },
            { engineer: 'Masani Kousik', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 15, automated: 7, manualPercent: 100, aiUsage: true },
            { engineer: 'Shaik Shoaib', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 14, automated: 7, manualPercent: 100, aiUsage: true },
            { engineer: 'Juan Carlos Baltazar', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 20, automated: 3, manualPercent: 100, aiUsage: true },
            { engineer: 'David Alvarado', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 39, automated: 1, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: 'IBD-Web items project 723', status: 'in-progress', coverage: 90, target: 100, targetDate: 'Dec 31', owner: 'IBD team', notes: 'In progress' },
            { app: 'IBD-Mobile items project 723', status: 'blocked', coverage: 0, target: 0, owner: 'IBD Team', notes: 'Blocked - TestIM mobile issues' }
        ],
        aiTools: [
            { tool: 'Tachyon GPT', useCase: 'Test Case Generation', pbis: 2, timeSaved: '2h', usage: 'Work in regression' }
        ],
        stats: { pbis: 100, automated: 22, engineers: 7, timeSaved: 2 }
    }
};

// Aggregate stats
const AGGREGATE_STATS = {
    totalTeams: Object.keys(TEAMS_DATA).length,
    totalEngineers: Object.values(TEAMS_DATA).reduce((sum, t) => sum + t.engineers.length, 0),
    totalPBIs: Object.values(TEAMS_DATA).reduce((sum, t) => sum + t.stats.pbis, 0),
    totalAutomated: Object.values(TEAMS_DATA).reduce((sum, t) => sum + t.stats.automated, 0),
    totalTimeSaved: Object.values(TEAMS_DATA).reduce((sum, t) => sum + t.stats.timeSaved, 0),
    teamsUsingAI: Object.values(TEAMS_DATA).filter(t => t.usingAI).length,
    teamsFollowingTDD: Object.values(TEAMS_DATA).filter(t => t.followingTDD === true).length
};

// AI Tools aggregate
const AI_TOOLS_AGGREGATE = {};
Object.values(TEAMS_DATA).forEach(team => {
    team.aiTools.forEach(tool => {
        const toolName = tool.tool.split('/')[0].trim();
        if (!AI_TOOLS_AGGREGATE[toolName]) {
            AI_TOOLS_AGGREGATE[toolName] = { name: tool.tool, pbis: 0, timeSaved: 0, teams: [] };
        }
        AI_TOOLS_AGGREGATE[toolName].pbis += tool.pbis;
        AI_TOOLS_AGGREGATE[toolName].timeSaved += parseFloat(tool.timeSaved) || 0;
        AI_TOOLS_AGGREGATE[toolName].teams.push(team.name);
    });
});

// All automation items flattened
const ALL_AUTOMATION = [];
Object.values(TEAMS_DATA).forEach(team => {
    team.automation.forEach(item => {
        ALL_AUTOMATION.push({
            ...item,
            teamName: team.name,
            teamId: team.id
        });
    });
});

// MVPs
const MVPS = Object.values(TEAMS_DATA)
    .filter(t => t.mvp)
    .map(t => ({ team: t.name, ...t.mvp }));

console.log('📊 QCOE Newsletter Hub Data Loaded');
console.log(`   Teams: ${AGGREGATE_STATS.totalTeams}`);
console.log(`   Engineers: ${AGGREGATE_STATS.totalEngineers}`);
console.log(`   PBIs: ${AGGREGATE_STATS.totalPBIs}`);
console.log(`   Time Saved: ${AGGREGATE_STATS.totalTimeSaved}h`);

