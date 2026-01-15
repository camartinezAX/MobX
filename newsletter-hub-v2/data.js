// ═══════════════════════════════════════════════════════════════════════════
// QCOE Newsletter Hub - Data Store
// All team data from bi-weekly reports
// Report Period: 12/29/2025 - 01/09/2026
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
            { engineer: 'Rodrigo Miguel Campos Mendizabal', task: 'UE-Borrow PBI testing & automation', pbis: 3, automated: 17, manualPercent: 70, aiUsage: true },
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
        highlights: 'Team has been working on closing PBIs P2/P3 for 870 project.',
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
            { app: 'Project 870 Phase 1 E2E Web', status: 'completed', coverage: 100, target: 100, owner: 'Alejandro Pérez', trend: 'up', notes: 'Automation In Progress' },
            { app: 'Project 870 Phase 1 E2E Mobile', status: 'blocked', coverage: 0, target: 100, owner: '-', trend: 'flat', notes: 'Blocked on mobile automation due to TestIM mobile issues' },
            { app: 'Project 870 Phase 2 E2E Web', status: 'in-progress', coverage: 53, target: 100, targetDate: '02/28/2025', owner: 'Gerardo Miranda', trend: 'up', notes: 'Automation In Progress' },
            { app: 'Project 870 Phase 2 E2E Mobile', status: 'blocked', coverage: 0, target: 100, owner: '-', trend: 'flat', notes: 'Blocked on mobile automation due to TestIM mobile issues' },
            { app: 'Project 870 Phase 3 E2E Web', status: 'in-progress', coverage: 24, target: 100, targetDate: '02/28/2025', owner: 'Noemi Pajarito', trend: 'up', notes: 'In Progress' },
            { app: 'Project 870 Phase 3 E2E Mobile', status: 'blocked', coverage: 0, target: 100, owner: '-', trend: 'flat', notes: 'Blocked' }
        ],
        aiTools: [
            { tool: 'XTforge AI', useCase: 'Test Case Generation', pbis: 16, timeSaved: '8h', usage: 'Saved time was used on reviewing how to use tool' }
        ],
        stats: { pbis: 72, automated: 0, engineers: 8, timeSaved: 8 }
    },
    
    'qcoe': {
        id: 'qcoe',
        name: 'QCOE',
        shortName: 'QC',
        manager: 'Marco De Jesus Ciriaco',
        lead: 'Carlos Martinez',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        isSpecialTeam: true, // QCOE doesn't do PBIs - focuses on AI initiatives, infrastructure, reports
        highlights: 'AI TestGennie rollout progressing. Cursor license request approved. Updated TestGennie AI-assisted markdown workflows and documentation.',
        sprintGoal: 'Complete AI TestGennie rollout and infrastructure updates.',
        mvp: { name: 'Fabrizio Mendez Alberti', reason: 'Just joined but has already demonstrated great initiative by supporting QCOE tasks and creating the mobile framework markdown for TestGennie' },
        engineers: [
            { name: 'Carlos Martinez', role: 'Lead Quality Engineer' },
            { name: 'Fabrizio Mendez Alberti', role: 'Quality Engineer' },
            { name: 'Yefferson Alexander Salcedo Mendievelso', role: 'Quality Engineer' }
        ],
        // Standard fields (empty for QCOE - they don't do PBIs)
        delivery: [],
        automation: [],
        aiTools: [],
        // QCOE-specific sections (no PBIs/delivery like other teams)
        testgennieRollout: [
            { item: 'Rahul\'s review completed', status: 'done' },
            { item: 'Cursor license request approved', status: 'done' },
            { item: 'QE\'s Cursor AI installation underway', status: 'in-progress' },
            { item: 'Team onboarding session: Setup & configuration walkthrough', status: 'in-progress' },
            { item: 'Knowledge transfer & live demo sessions with QE teams', status: 'in-progress' },
            { item: 'Dedicated sprint sessions per team for hands-on feedback', status: 'in-progress' }
        ],
        aiUpdates: {
            title: 'Markdown Documentation Enhancements',
            description: 'Updated TestGennie AI-assisted markdown workflows and documentation for:',
            items: [
                'TestGennie-powered test case generation',
                'TestGennie-powered bug report creation',
                'TestGennie-powered mobile script analysis & code completion'
            ]
        },
        infrastructureUpdates: 'Continuing periodic End-of-Life (EOL) remediation testing on automation agents to validate compatibility with updated security protocols.',
        reports: [
            { name: 'Production RCAs', status: 'Scheduled update for January 17th' },
            { name: 'Mobile Test Regression Automation', status: 'Weekly summary reports delivered' },
            { name: 'Mobile Test Sanity Automation', status: 'Weekly summary reports delivered' },
            { name: 'State of Automation QCOE', status: 'Slides updated with latest metrics' }
        ],
        pipelineConfig: [
            { name: 'GitHub Migration', description: 'Repo and pipelines migration to GitHub in progress' },
            { name: 'Cross-Team Pipeline Support', description: 'Providing ongoing assistance with pipeline creation, run configurations and troubleshooting for requesting teams' }
        ],
        nextSprint: [
            { title: 'Complete AI TestGennie Rollout', description: 'Finalize TestGennie adoption across all targeted QE teams' },
            { title: 'Production RCAs Update', description: 'Deliver January RCA update and explore AI-assisted analysis to streamline the process' },
            { title: 'Environment Stability Investigation', description: 'Collaborate with Prod Support (engagement confirmed) to conduct thorough analysis and resolve network request failures' }
        ],
        stats: { pbis: 0, automated: 0, engineers: 3, timeSaved: 0 }
    },
    
    'legacy-enrollment': {
        id: 'legacy-enrollment',
        name: 'Legacy Enrollment',
        shortName: 'LE',
        manager: 'Archana Gorantla',
        lead: 'Alejandro Blanco',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'The Legacy Enrollment team was able to support the following Release: CHG0071778 - Legacy Enrollment Emergency Release - Remove vesting types 12/22, for the #35 Enhancement: Enrollment Project.',
        sprintGoal: 'Work in the PBIs and Bugs for the CHG0071778 - Legacy Enrollment Emergency Release - Remove vesting types.',
        mvp: { name: 'Alberto Morales', reason: 'All your support in LE test activities and the Releases' },
        engineers: [
            { name: 'Alejandro Blanco', role: 'QE Lead' },
            { name: 'Alberto Morales', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'QE Engineer', task: 'CHG0071778 - Legacy Enrollment Emergency Release', pbis: 1, bugs: 1, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: 'Legacy Enrollment Regression Suite', status: 'completed', coverage: 90, target: 90, owner: 'Entire Team', trend: 'flat', notes: 'Cannot automate future requirements - Legacy Enrollment will come EOL when 20902 goes out' },
            { app: 'Sanity test suite', status: 'completed', coverage: 80, target: 80, owner: 'Entire Team', trend: 'flat', notes: 'Last 20% related to Admin Portal - cannot automate because it\'s a Desktop application' }
        ],
        aiTools: [
            { tool: 'Tachyon', useCase: 'CHG0071778 - Legacy Enrollment Emergency Release', pbis: 1, timeSaved: '0.5h', usage: 'Test Pending Bugs' }
        ],
        stats: { pbis: 2, automated: 0, engineers: 2, timeSaved: 0.5 }
    },
    
    'ue-admin-portal': {
        id: 'ue-admin-portal',
        name: 'UE Admin Portal',
        shortName: 'UA',
        manager: 'Archana Gorantla',
        lead: 'Mauricio Aguilar',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'The UE Admin Portal team focused on RFT items for v2.23.0 and projects 20902 & 870 automation coverage.',
        sprintGoal: 'Project 20902 - Automation Coverage & RFT Items for v2.23.0',
        mvp: { name: 'Jazmin Galvez', reason: 'Had the greatest number of automation PRs of this sprint, adding much value to reaching our automation coverage deadline' },
        engineers: [
            { name: 'Mauricio Aguilar', role: 'QE Lead' },
            { name: 'Dnyaneshwar Kapase', role: 'Quality Engineer' },
            { name: 'Alvaro Avalos', role: 'Quality Engineer' },
            { name: 'Jazmin Galvez', role: 'Quality Engineer' },
            { name: 'Kavita Reddy', role: 'Quality Engineer' },
            { name: 'Alexis Hernandez', role: 'Quality Engineer' },
            { name: 'Carlos Garcia', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'QE Team', task: '20902 Testing', pbis: 3, automated: 0, manualPercent: 85, aiUsage: true }
        ],
        automation: [
            { app: '20902 Consumer Deposits Web UE', status: 'in-progress', coverage: 80.63, target: 87.65, targetDate: '02/20/2026', owner: 'Mauricio Aguilar', trend: 'up', notes: 'Team worked fully on increasing automation coverage for the project' },
            { app: '870 Managed Portfolio', status: 'in-progress', coverage: 43.9, target: 97.5, targetDate: '02/20/2026', owner: 'Mauricio Aguilar', trend: 'up', notes: 'Team worked fully on increasing automation coverage for pending scenarios' },
            { app: 'UE Admin Portal UI/API', status: 'completed', coverage: 100, target: 100, owner: 'Sai Vishal Dharam, Mauricio Aguilar', trend: 'flat', notes: 'Test suite executed to support the release' }
        ],
        aiTools: [
            { tool: 'Tachyon', useCase: 'Test Case Generation', pbis: 6, timeSaved: '1.75h', usage: 'With the time saved, validated one more bug during the sprint' }
        ],
        stats: { pbis: 3, automated: 0, engineers: 7, timeSaved: 1.75 }
    },
    
    'sit': {
        id: 'sit',
        name: 'SIT (Enrollment)',
        shortName: 'SI',
        manager: 'Archana Gorantla',
        lead: 'Lavanya Nathan',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: false,
        usingAI: true,
        highlights: 'Team has achieved substantial progress in enhancing the mobile automation framework. We are nearing completion of the framework phase and will soon transition to automating test cases. Started automating smoke test cases for the 709 project.',
        sprintGoal: 'Mobile Regression V1.233.22, Mobile Automation Kickoff - Appium+JS with Browserstack, 709 Smoke Automation',
        mvp: { name: 'Sumitha Karuppanan', reason: 'Started Project 709 automation at full speed, focusing on smoke test cases to accelerate initial coverage' },
        engineers: [
            { name: 'Lavanya Nathan', role: 'QE Lead' },
            { name: 'Sai Vishal Dharam', role: 'Quality Engineer' },
            { name: 'Sumitha Karuppanan', role: 'Quality Engineer' },
            { name: 'Ashwini Patil', role: 'Quality Engineer' },
            { name: 'Jose Alejandro Blanco', role: 'Quality Engineer' },
            { name: 'Jyoti Mane', role: 'Quality Engineer' }
        ],
        delivery: [],
        automation: [
            { app: 'Project 709 (RIA) Phase 1 E2E WEB Scenarios', status: 'in-progress', coverage: 5.58, target: 90, targetDate: '02/28/2026', owner: 'Lavanya Nathan', notes: 'Team focused on Mobile Regression and Mobile Automation framework' },
            { app: 'Project 709 (RIA) Phase 1 E2E Mobile Browser', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Mobile Browser automation blocked - issues with IP Address banning (Ticket #70954)' },
            { app: 'Project 709 (RIA) Phase 1 E2E Mobile App Android', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Mobile automation planned to start in later weeks' },
            { app: 'Project 709 (RIA) Phase 1 E2E Mobile App iOS', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Mobile automation planned to start in later weeks' },
            { app: 'Bank Enrollment Regression Suite Mobile - Android', status: 'blocked', coverage: 76, target: 100, owner: '-', notes: 'Paused pending migration to VMG due to Testim issues' },
            { app: 'Invest Enrollment Regression Suite Mobile - Android', status: 'blocked', coverage: 71, target: 100, owner: '-', notes: 'Paused pending migration to VMG due to Testim issues' },
            { app: 'Project 21404 (Axos Elite) E2E Scenarios', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Paused due to Testim mobile issues - No Mobile Automation Team' },
            { app: 'Project 870 (MP) Mobile E2E Scenarios', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Paused due to Testim mobile issues - No Mobile Automation Team' },
            { app: 'Project 20502 Phase 1 (Onboard) E2E Scenarios', status: 'blocked', coverage: 0, target: 100, owner: '-', notes: 'Paused due to Testim mobile issues - No Mobile Automation Team' }
        ],
        aiTools: [
            { tool: 'MS 365 Copilot / Cursor AI', useCase: 'Code Generation, Code Review, Code Refactoring', pbis: 0, timeSaved: '16h', usage: 'Streamlined debugging of mobile automation framework and generated basic utilities for database and API integration' }
        ],
        stats: { pbis: 0, automated: 0, engineers: 6, timeSaved: 16 }
    },
    
    'wfo': {
        id: 'wfo',
        name: 'WFO - OutSystems',
        shortName: 'WF',
        manager: 'Marco De Jesus Ciriaco',
        lead: 'Priyanka Baheti',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: 'Partial',
        usingAI: true,
        highlights: 'Participated in project kickoffs: Decision Migration, Yodlee Webhook Phase 1 (Prod), Compensation Management (Meritocracy), 927 Phase 2, Prod Testing 027 Phase 1, Form Bridge Onboarding (FBO). Focused on manual testing for Decision Migration.',
        sprintGoal: 'Multiple project kickoffs and Decision Migration testing',
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
            { engineer: 'Team', task: 'Prod Support, WP, Initiatives, Vision Canvas, OSG, UCAT, EWM', pbis: 17, automated: 0, manualPercent: 90, aiUsage: true }
        ],
        automation: [
            { app: 'Vendor Management (VM)', status: 'completed', coverage: 90, target: 80, owner: 'Priyanka Baheti', trend: 'flat', notes: 'Updated automation suite - added 5 new scripts' },
            { app: 'UCAT', status: 'completed', coverage: 90, target: 80, owner: 'Ernesto Pasillas Luevano', trend: 'flat', notes: 'Pipeline setup in ADO' },
            { app: 'IBD KYC', status: 'completed', coverage: 80, target: 80, owner: 'Sergio Osart Mata Charles', trend: 'flat', notes: 'Pipeline setup in ADO' },
            { app: 'OLPP', status: 'completed', coverage: 80, target: 80, owner: 'Priyanka Baheti', trend: 'flat', notes: 'Pipeline setup in ADO' },
            { app: '927: Open Finance API', status: 'completed', coverage: 80, target: 80, owner: 'Priyanka Baheti', trend: 'flat', notes: 'Pipeline setup in ADO' },
            { app: 'OS Onboarding Admin Portal', status: 'completed', coverage: 90, target: 80, owner: 'Ernesto Pasillas Luevano', trend: 'flat', notes: 'Pipeline setup in ADO' },
            { app: 'Manage Portfolio-870', status: 'completed', coverage: 80, target: 80, owner: 'Sergio Osart Mata Charles', trend: 'flat', notes: 'Working on pipeline' },
            { app: 'Enterprise Wires (EWM)', status: 'in-progress', coverage: 70, target: 80, owner: 'Priyanka Baheti', trend: 'flat', notes: 'SFR-completed-80%, WHL-in process 80%, DepOps-in process 60%, Admin-0%' },
            { app: 'Work Planners (WP)', status: 'in-progress', coverage: 70, target: 80, owner: 'Lucas Couto de Andrade', trend: 'flat', notes: 'On Hold - new dev moving to production' },
            { app: 'AEW', status: 'in-progress', coverage: 70, target: 80, owner: 'Ernesto Pasillas Luevano', trend: 'flat', notes: 'New development PBIs being introduced' },
            { app: 'Oracle project', status: 'done', coverage: 41, target: 80, targetDate: '12/31/2025', owner: 'Miguel Matamoros', trend: 'flat', notes: 'Transitioning to EDW QE team' },
            { app: '24602 Yodlee Webhook', status: 'in-progress', coverage: 20, target: 80, owner: 'Priyanka Baheti', trend: 'flat', notes: 'New Project - working on automation as PBI progressing' },
            { app: 'Loan Demand Statement (PDS)', status: 'in-progress', coverage: 10, target: 80, owner: 'Priyanka Baheti', trend: 'flat', notes: 'In progress' },
            { app: 'OSG', status: 'in-progress', coverage: 10, target: 80, owner: 'Francisco Adan Santillan', trend: 'flat', notes: 'In progress' },
            { app: 'Compensation Management (Meritocracy)', status: 'in-progress', coverage: 20, target: 80, owner: 'Miguel Matamoros', trend: 'flat', notes: 'In progress' },
            { app: 'Decision Migration to Outsystems', status: 'in-progress', coverage: 20, target: 80, owner: 'Francisco Adan Santillan', trend: 'flat', notes: 'In progress' },
            { app: '1015 Content Engine', status: 'completed', coverage: 80, target: 80, owner: 'Francisco Adan Santillan', trend: 'flat', notes: 'Complete' },
            { app: 'New Product Request (NPR)', status: 'in-progress', coverage: 75, target: 80, targetDate: '01/31/2026', owner: 'Sergio Osart Mata Charles', trend: 'flat', notes: 'In progress' },
            { app: 'FBO Form Bridge Onboarding', status: 'in-progress', coverage: 25, target: 80, owner: 'Ernesto Pasillas Luevano', trend: 'flat', notes: 'In progress' },
            { app: 'CRV', status: 'in-progress', coverage: 40, target: 80, targetDate: '01/31/2026', owner: 'Noelia Andrea Flores', trend: 'flat', notes: 'In progress' }
        ],
        aiTools: [
            { tool: 'Tachyon GPT / Test Gennie', useCase: 'Test Case Generation', pbis: 7, timeSaved: '4h', usage: 'Saved time used by team for new project QA preparation' }
        ],
        stats: { pbis: 17, automated: 0, engineers: 7, timeSaved: 4 }
    },
    
    'ibd': {
        id: 'ibd',
        name: 'WL-IBD',
        shortName: 'IB',
        manager: 'Irina Easterling',
        lead: 'Eliana Zelada',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'Team concentrated on Prod bugs, regression OLB Release 144.5/ Sanity UDB 1.233',
        sprintGoal: 'Regression for OLB Release 144.4 / Sanity UDB 1.233 and regression on Production',
        mvp: { name: 'David Alvarado', reason: 'Had good progress in PBIs' },
        engineers: [
            { name: 'Eliana Zelada', role: 'QE Lead' },
            { name: 'Carlos Baltazar', role: 'Quality Engineer' },
            { name: 'John Carlo Tobillo', role: 'Quality Engineer (PTO)' },
            { name: 'Masani Kousik', role: 'Quality Engineer' },
            { name: 'Shaik Shoaib', role: 'Quality Engineer' },
            { name: 'David Alvarado', role: 'Quality Engineer' },
            { name: 'Jade Golez', role: 'Quality Engineer (PTO)' }
        ],
        delivery: [
            { engineer: 'Jade Golez', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 6, automated: 1, manualPercent: 100, aiUsage: true },
            { engineer: 'John Carlo Tobillo', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 10, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Masani Kousik', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 20, automated: 12, manualPercent: 100, aiUsage: false },
            { engineer: 'Shaik Shoaib', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 6, automated: 1, manualPercent: 100, aiUsage: false },
            { engineer: 'Juan Carlos Baltazar', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 12, automated: 1, manualPercent: 100, aiUsage: true },
            { engineer: 'David Alvarado', task: 'Release 144.4 / Sanity UDB 1.233', pbis: 30, automated: 9, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: 'IBD-Web items project 723', status: 'in-progress', coverage: 100, target: 100, targetDate: 'Dec 31', owner: 'IBD team', trend: 'up', notes: 'Completed' },
            { app: 'IBD-Mobile items project 723', status: 'blocked', coverage: 0, target: 0, owner: 'IBD Team', trend: 'flat', notes: 'Blocked on mobile automation due to TestIM mobile issues' }
        ],
        aiTools: [
            { tool: 'Tachyon GPT', useCase: 'Test Case Generation', pbis: 12, timeSaved: '9h', usage: 'Work in regression' }
        ],
        stats: { pbis: 84, automated: 24, engineers: 7, timeSaved: 9 }
    },
    
    'avengers': {
        id: 'avengers',
        name: 'Plan / Avengers',
        shortName: 'AV',
        manager: 'Irina Easterling',
        lead: 'Fernando González',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: false,
        usingAI: true,
        highlights: 'QA Team was focused on Production & Regression Mobile Bugs as priority. UDB 5.x',
        sprintGoal: 'Releases, Production Bugs',
        mvp: null,
        engineers: [
            { name: 'Fernando González', role: 'QE Lead' },
            { name: 'Azucena Teresa Alvarez', role: 'Quality Engineer' },
            { name: 'Oscar Alaniz', role: 'Quality Engineer' },
            { name: 'German Rocha', role: 'Quality Engineer' },
            { name: 'Ramya Yamala', role: 'Quality Engineer' },
            { name: 'Rutuja Taware', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'All team', task: 'Prod Bugs', pbis: 3, automated: 0, manualPercent: 100, aiUsage: false },
            { engineer: 'All team', task: 'Sanity / Reg Bugs', pbis: 5, automated: 0, manualPercent: 100, aiUsage: false },
            { engineer: 'All team', task: 'Plan / Avengers PBIs', pbis: 11, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [],
        aiTools: [
            { tool: 'Tachyon GPT', useCase: 'Test Case Generation', pbis: 11, timeSaved: '0h', usage: 'Time spent updating test cases with scenarios and steps necessary to cover acceptance criteria' }
        ],
        stats: { pbis: 19, automated: 0, engineers: 6, timeSaved: 0 }
    },
    
    'white-label-2': {
        id: 'white-label-2',
        name: 'White Label 2',
        shortName: 'W2',
        manager: 'Archana Gorantla',
        lead: 'Murugan Sivakumar',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'Focused on enhancing automation coverage for Project 709. Prioritized feature grooming for Projects 36101 and 36102, PBI refinement and end-to-end regression test case development. RFT items for release v2.23.0. UE Sanity pipeline for SSO flow.',
        sprintGoal: 'Validating PBIs and bugs for v2.23.0, end-to-end regression test case development for Projects 36101 and 36102',
        mvp: { name: 'Alejandro Saldanacontreras', reason: 'Contributed to project 709 smoke test automation' },
        engineers: [
            { name: 'Murugan Sivakumar', role: 'QE Lead' },
            { name: 'Nydia Duarte', role: 'Quality Engineer' },
            { name: 'Siddharth Ginnela', role: 'Quality Engineer' },
            { name: 'Alejandro Saldanacontreras', role: 'Quality Engineer' },
            { name: 'Sergei Tiulenev', role: 'Quality Engineer' }
        ],
        delivery: [],
        automation: [
            { app: 'Regression Suite Project 723- APW', status: 'completed', coverage: 100, target: 100, targetDate: '06/30/2025', owner: 'Siddharth', trend: 'flat', notes: 'Complete' },
            { app: 'Regression Suite Project 841- WL Admin portal', status: 'completed', coverage: 50, target: 50, owner: '-', trend: 'flat', notes: 'Will not automate further due to application sunsetting soon because of Project 723' },
            { app: 'Roles and Permission- Invest Admin portal', status: 'completed', coverage: 100, target: 100, targetDate: '08/06/2025', owner: 'Nydia, Ajay', trend: 'flat', notes: 'Complete' },
            { app: 'Self-Directed Trading Regression Suite', status: 'completed', coverage: 88, target: 88, owner: 'Entire team', trend: 'flat', notes: 'Coverage aligned with application\'s upcoming retirement once Project 709 Phase 2 concludes' }
        ],
        aiTools: [
            { tool: 'TestGennie / MS 365 Copilot', useCase: 'Test case generation PBIs, Bug creation, Code generation, Code Refactoring', pbis: 6, timeSaved: '11.5h', usage: 'Projects 36101 & 36102: End-to-end regression test case creation. Project 709: Automation implementation.' }
        ],
        stats: { pbis: 6, automated: 0, engineers: 5, timeSaved: 11.5 }
    },
    
    'white-label-1': {
        id: 'white-label-1',
        name: 'White Label 1',
        shortName: 'W1',
        manager: 'Archana Gorantla',
        lead: 'Murugan Sivakumar',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'Focused on enhancing automation coverage for Project 709. Prioritized feature grooming for Projects 36101 and 36102, PBI refinement and end-to-end regression test case development. RFT items for release v2.23.0. UE Sanity pipeline for SSO flow.',
        sprintGoal: 'Validating PBIs and bugs for v2.23.0, end-to-end regression test case development for Projects 36101 and 36102',
        mvp: null,
        engineers: [
            { name: 'Murugan Sivakumar', role: 'QE Lead' },
            { name: 'Alberto Morales', role: 'Quality Engineer' },
            { name: 'Ajaykrishna Nakka', role: 'Quality Engineer' },
            { name: 'Andres Valencia', role: 'Quality Engineer' }
        ],
        delivery: [],
        automation: [
            { app: 'Regression Suite Project 723- APW', status: 'completed', coverage: 100, target: 100, targetDate: '06/30/2025', owner: 'Siddharth', trend: 'flat', notes: 'Complete' },
            { app: 'Regression Suite Project 841- WL Admin portal', status: 'completed', coverage: 50, target: 50, owner: '-', trend: 'flat', notes: 'Will not automate further due to application sunsetting soon because of Project 723' },
            { app: 'Roles and Permission- Invest Admin portal', status: 'completed', coverage: 100, target: 100, targetDate: '08/06/2025', owner: 'Nydia, Ajay', trend: 'flat', notes: 'Complete' },
            { app: 'Self-Directed Trading Regression Suite', status: 'completed', coverage: 88, target: 88, owner: 'Entire team', trend: 'flat', notes: 'Coverage aligned with application\'s upcoming retirement once Project 709 Phase 2 concludes' }
        ],
        aiTools: [
            { tool: 'TestGennie / MS 365 Copilot', useCase: 'Test case generation PBIs, Bug creation, Code generation, Code Refactoring', pbis: 8, timeSaved: '10.15h', usage: 'Projects 36101 & 36102: End-to-end regression test case creation. Project 709: Automation implementation.' }
        ],
        stats: { pbis: 8, automated: 0, engineers: 4, timeSaved: 10.15 }
    },
    
    'core-services': {
        id: 'core-services',
        name: 'Core Services',
        shortName: 'CS',
        manager: 'Marco de Jesus Ciriaco',
        lead: 'Jose Colina',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'The team has completed testing on 41 items that were ready for test and previously pending, and has also the required items for the upcoming release. Due to recent changes in team composition, the team is still learning and adapting to Core Services concepts.',
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
            { engineer: 'Kranthi Kandukuri', task: 'In-sprint items testing and Banking Core Automation', pbis: 22, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Jhanina Lazcano', task: 'In-sprint items testing', pbis: 11, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Juan De Dios Felipe Sillas', task: 'In-sprint items testing', pbis: 7, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Harry Miyer Cepeda Reales', task: 'In-sprint items testing', pbis: 1, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: 'Rules Manager', status: 'completed', coverage: 100, target: 100, owner: 'QE team', trend: 'flat', notes: 'Endpoint validation automation has been successfully completed' },
            { app: 'Banking Core', status: 'on-hold', coverage: 30, target: 100, owner: 'QE team', trend: 'flat', notes: 'Automation paused to prioritize ready-for-test items' },
            { app: 'Identity', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'To be initiated after completing Banking Core' },
            { app: 'Securities', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'Target date TBD' },
            { app: 'Notifications', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'Target date TBD' },
            { app: 'Documents', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'Target date TBD' },
            { app: 'Service Bus', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'Target date TBD' },
            { app: 'Branding', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'Target date TBD' },
            { app: 'Agreements', status: 'not-started', coverage: 0, target: 100, owner: 'QE team', trend: 'flat', notes: 'Target date TBD' }
        ],
        aiTools: [
            { tool: 'Microsoft Copilot / Tachyon', useCase: 'Test case creation / Test data', pbis: 18, timeSaved: '4.5h', usage: 'With the time saved, validated one more ready-for-test items during the sprint' }
        ],
        stats: { pbis: 41, automated: 0, engineers: 5, timeSaved: 4.5 }
    },
    
    'cd': {
        id: 'cd',
        name: 'Consumer Deposits (CD)',
        shortName: 'CD',
        manager: 'Irina Easterling',
        lead: 'Willian Santana Castilho',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'Validate onboarding flow, execute regression, create automation scripts, and support release readiness. Completed onboarding-related tasks and PBIs. Created E2E regression test cases for FDIC opt-in/opt-out flows.',
        sprintGoal: 'Onboarding flow testing, regression coverage, bug triage, and automation script creation.',
        mvp: [
            { name: 'Willian Santana Castilho', reason: 'Created multiple test cases for onboarding flows and raised critical onboarding bugs' },
            { name: 'Oscar Ivan Valenzuela', reason: 'Raised and triaged key defects impacting onboarding navigation and UI stability' },
            { name: 'Kavin Kumar', reason: 'Raised and triaged key defects impacting onboarding navigation and UI stability' },
            { name: 'Rama Raju', reason: 'Supported onboarding testing and bug triage' }
        ],
        engineers: [
            { name: 'Willian Santana Castilho', role: 'QE Lead' },
            { name: 'Oscar Ivan Valenzuela', role: 'Quality Engineer' },
            { name: 'Kavin Kumar', role: 'Quality Engineer' },
            { name: 'Rama Raju', role: 'Quality Engineer' }
        ],
        delivery: [],
        metrics: {
            sprintTasksCompleted: 70,
            pbisApproved: 8,
            testCasesCreated: 46,
            automatedTestCases: 3,
            bugsRaised: 20
        },
        automation: [
            { app: 'Onboarding Flow', status: 'in-progress', coverage: 0, target: 100, targetDate: 'End of Sprint 3', owner: 'CD Team', notes: 'Initial scripts created' }
        ],
        risks: [
            'Dependency on enrollment DB in QA environment delayed some test execution',
            'Limited automation coverage in early sprint phases (planned improvement in next sprint)'
        ],
        aiTools: [
            { tool: 'Tachyon GPT / MS 365 Copilot', useCase: 'Test Case Generation, Knowledge Extraction, Test data preparation', pbis: 8, timeSaved: '3h', usage: 'Spending time on better reports and exploratory testing for regression and sanity activities' }
        ],
        stats: { pbis: 8, automated: 3, engineers: 4, timeSaved: 3 }
    },
    
    'borrow-credit-card': {
        id: 'borrow-credit-card',
        name: 'Borrow and Credit Card',
        shortName: 'BC',
        manager: 'Manasa Jayaraman',
        lead: 'Sergio Rubio',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: true,
        usingAI: true,
        highlights: 'ASL PBIs got unblocked and team started testing',
        sprintGoal: 'CC team to start testing ASL PBIs targeting QA complete on 884 for February',
        mvp: { name: 'Joel Jesus Sanchez', reason: 'Working with Github support team unblocking ASL PBIs testing' },
        engineers: [
            { name: 'Sergio Rubio', role: 'QE Lead' },
            { name: 'Harlinzon Sanabria', role: 'Quality Engineer' },
            { name: 'Joel Sanchez', role: 'Quality Engineer' },
            { name: 'Soledad Nina', role: 'Quality Engineer' },
            { name: 'Maya Justiniano', role: 'Quality Engineer' },
            { name: 'Carlos Banuelos', role: 'Quality Engineer' },
            { name: 'Gooty Pramod Kumar', role: 'Quality Engineer' },
            { name: 'Saicharan Yarramgari', role: 'Quality Engineer' },
            { name: 'Vijay Shinde', role: 'Quality Engineer' }
        ],
        delivery: [
            { engineer: 'Harlinzon Sanabria', task: '884 ASL PBI Testing', pbis: 7, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Carlos Banuelos', task: '884 ASL PBI Testing', pbis: 6, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Maya Justiniano', task: '884 ASL PBI Testing', pbis: 4, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Gooty Pramod Kumar', task: '884 ASL PBI Testing', pbis: 4, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Vijay Shinde', task: '884 ASL PBI Testing', pbis: 5, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Soledad Nina', task: '884 ASL PBI Testing', pbis: 4, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Saicharan Yarramgari', task: '884 ASL PBI Testing', pbis: 3, automated: 0, manualPercent: 100, aiUsage: true },
            { engineer: 'Joel Sanchez', task: '884 ASL PBI Testing', pbis: 6, automated: 0, manualPercent: 100, aiUsage: true }
        ],
        automation: [
            { app: '884 Project Web Credit Card E2E Regression', status: 'in-progress', coverage: 65, target: 70, targetDate: '08/30/2025', owner: 'Carlos Banuelos', trend: 'up', notes: 'All 884 PBIs associated with Credit Card fully automated. Missing ASL PBIs still under development' },
            { app: '884 Project Mobile Credit Card Regressions', status: 'blocked', coverage: 0, target: 100, owner: '-', trend: 'flat', notes: 'Automation blocked on mobile' },
            { app: '19051 Project SBLOC E2E Regression', status: 'completed', coverage: 100, target: 100, owner: 'Carlos Banuelos', trend: 'flat', notes: 'Automation completed' },
            { app: '951 Project - Move Money from LOC E2E Regression', status: 'completed', coverage: 100, target: 100, targetDate: '07/31/2025', owner: 'Harlinzon Sanabria', trend: 'up', notes: 'Automation completed' }
        ],
        aiTools: [
            { tool: 'Tachyon', useCase: 'Test Case Generation', pbis: 15, timeSaved: '6.5h', usage: 'Team used the time saved to start ASL PBI testing' }
        ],
        stats: { pbis: 39, automated: 0, engineers: 9, timeSaved: 6.5 }
    },
    
    'olb-sit': {
        id: 'olb-sit',
        name: 'OLB SIT',
        shortName: 'OS',
        manager: 'Manasa Jayaraman',
        lead: 'Esther Chuca, Grecia Machaca',
        reportPeriod: '12/29/2025 - 01/09/2026',
        followingTDD: false,
        usingAI: false,
        highlights: 'SIT script updates have been completed, and we have reached our target of 85%. Four new team members joined: Ricardo Verastegui, Edgar Balderas, Francisco Mendoza, Obed Alvarado. Current SIT team members will transition to focus on automating the OLB 3.0 Web application.',
        sprintGoal: 'Completing test data for QA/STG environment and doing fixes for SIT scripts',
        mvp: { name: 'Zy Guillermo, Pavitha Ranjithkumar', reason: 'Outstanding contributions to SIT script updates' },
        engineers: [
            { name: 'Esther Chuca', role: 'QE Lead' },
            { name: 'Grecia Machaca', role: 'QE Lead' },
            { name: 'Diana Fernandez', role: 'Quality Engineer' },
            { name: 'Prathyusha Karumuru', role: 'Quality Engineer' },
            { name: 'Zy Guillermo (Miko)', role: 'Quality Engineer' },
            { name: 'Kevin Herrera', role: 'Quality Engineer' },
            { name: 'Pavitha Ranjithkumar', role: 'Quality Engineer' },
            { name: 'Olimpia Colque', role: 'Quality Engineer' }
        ],
        newMembers: [
            { name: 'Ricardo Verastegui', focus: 'SIT responsibilities, pipelines for OLB 1.0 releases, maintenance, tech-debt' },
            { name: 'Edgar Balderas', focus: 'SIT responsibilities, pipelines for OLB 1.0 releases, maintenance, tech-debt' },
            { name: 'Francisco Mendoza', focus: 'SIT responsibilities, pipelines for OLB 1.0 releases, maintenance, tech-debt' },
            { name: 'Obed Alvarado', focus: 'SIT responsibilities, pipelines for OLB 1.0 releases, maintenance, tech-debt' }
        ],
        transitioningMembers: [
            { name: 'Prathyusha Karumuru', focus: 'OLB 3.0 Web application automation' },
            { name: 'Zy Guillermo', focus: 'OLB 3.0 Web application automation' },
            { name: 'Kevin Herrera', focus: 'OLB 3.0 Web application automation' },
            { name: 'Pavitha Ranjithkumar', focus: 'OLB 3.0 Web application automation' }
        ],
        delivery: [],
        automation: [],
        aiTools: [],
        notes: 'Currently conducting KT sessions with new team for OLB 3.0 project allocation. Scenarios not covered on automation documented in Confluence.',
        stats: { pbis: 0, automated: 0, engineers: 8, timeSaved: 0 }
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
    .map(t => {
        if (Array.isArray(t.mvp)) {
            return t.mvp.map(m => ({ team: t.name, ...m }));
        }
        return { team: t.name, ...t.mvp };
    })
    .flat();

console.log('📊 QCOE Newsletter Hub Data Loaded');
console.log(`   Report Period: 12/29/2025 - 01/09/2026`);
console.log(`   Teams: ${AGGREGATE_STATS.totalTeams}`);
console.log(`   Engineers: ${AGGREGATE_STATS.totalEngineers}`);
console.log(`   PBIs: ${AGGREGATE_STATS.totalPBIs}`);
console.log(`   Time Saved: ${AGGREGATE_STATS.totalTimeSaved}h`);
