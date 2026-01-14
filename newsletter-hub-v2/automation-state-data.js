// ═══════════════════════════════════════════════════════════════════════════
// State of Automation - December 2025 Data
// Structured data from the State of Automation PowerPoint
// ═══════════════════════════════════════════════════════════════════════════

const AUTOMATION_STATE = {
    reportDate: 'December 2025',
    leader: 'Rahul Jain',
    
    // Overall QE Structure
    orgStructure: {
        title: 'QE Org Structure',
        managers: ['Archana', 'Marco', 'Manasa', 'Irina']
    },
    
    // Managers and their teams/projects
    managers: {
        archana: {
            id: 'archana',
            name: 'Archana',
            avatar: 'AR',
            color: '#22c55e',
            teams: ['UE Invest WL1/WL2', 'UE API/Admin Portal', 'Legacy Enrollment', 'SIT Enrollment Web/Mobile'],
            // Velocity chart data with monthly breakdown
            velocityData: {
                title: 'Enrollment Cumulative Done Velocity',
                // Monthly cumulative done items
                data2024: [
                    { month: 'Jan', value: 226 },
                    { month: 'Feb', value: 478 },
                    { month: 'Mar', value: 778 },
                    { month: 'Apr', value: 970 },
                    { month: 'May', value: 1518 },
                    { month: 'Jun', value: 1973 },
                    { month: 'Jul', value: 2141 },
                    { month: 'Aug', value: 2440 },
                    { month: 'Sep', value: 2515 },
                    { month: 'Oct', value: 2641 },
                    { month: 'Nov', value: 2907 },
                    { month: 'Dec', value: 3431 }
                ],
                data2025: [
                    { month: 'Jan', value: 193 },
                    { month: 'Feb', value: 395 },
                    { month: 'Mar', value: 574 },
                    { month: 'Apr', value: 574 },
                    { month: 'May', value: 1241 },
                    { month: 'Jun', value: 1772 },
                    { month: 'Jul', value: 2095 },
                    { month: 'Aug', value: 2580 },
                    { month: 'Sep', value: 2875 },
                    { month: 'Oct', value: 2992 },
                    { month: 'Nov', value: 2940 },
                    { month: 'Dec', value: 2949 }
                ],
                total2024: 3431,
                total2025: 2949
            },
            projects: [
                // UE Invest WL1 and WL2
                {
                    category: 'UE Invest WL1 and WL2',
                    items: [
                        { project: 'Project 36101 (Crypto Trading) E2E Regression', nov: 0, dec: 0, target: 'TBD', impact: '-' },
                        { project: 'Project 36102 (Crypto Loan Enrollment) E2E Regression', nov: 0, dec: 0, target: 'TBD', impact: '-' },
                        { project: 'Project 723 (APW) E2E Regression', nov: 100, dec: 100, target: 'Done', impact: '50% faster test cycles. 8 hours saved. Every run.' },
                        { project: 'Project 841 (WL AP) E2E Scenario', nov: 50, dec: 50, target: 'Done', impact: '4 hours saved. Every run. Every time.' },
                        { project: 'Self-Directed Trading E2E Regression', nov: 88, dec: 88, target: 'Done', impact: '4 hours saved. Every run. Every time.' }
                    ]
                },
                // UE API/Admin Portal
                {
                    category: 'UE API/Admin Portal',
                    items: [
                        { project: 'Project 20902 (Consumer Deposits Web) Phase 1 E2E', nov: 70, dec: 83, target: 'Done', impact: '50% Faster test cycles. 60 Hours saved every run' },
                        { project: 'Project 870 (MP Enrollment) E2E Web Regression', nov: 90, dec: 100, target: 'Done', impact: '75% faster test cycles. 12 hours saved. Every run.' },
                        { project: 'Universal Enrollment - Admin Portal UI/API E2E', nov: 100, dec: 100, target: 'Done', impact: '60% faster test cycles. 24 hours saved. Every run.' }
                    ]
                },
                // Legacy Enrollment
                {
                    category: 'Legacy Enrollment',
                    items: [
                        { project: 'Legacy Enrollment Regression Suite, UAT', nov: 90, dec: 90, target: 'Done (90%)', impact: '8 hours saved. Every run. Every time.' },
                        { project: 'Legacy Enrollment Sanity test suite, UAT', nov: 80, dec: 80, target: 'Done (80%)', impact: '8 hours saved. Every run. Every time.' },
                        { project: 'Legacy Enrollment Smoke Test in PROD', nov: 85, dec: 85, target: 'Done (85%)', impact: '30 mins saved. Every run. Every time.' }
                    ]
                },
                // SIT Enrollment Web and Mobile
                {
                    category: 'SIT Enrollment Web and Mobile',
                    items: [
                        { project: 'Project 709 (RIA) Phase 1 E2E WEB Scenarios', nov: 5, dec: 50, target: '2/28/2026', impact: '-', note: 'Team focusing on 20902 project delivery' },
                        { project: 'UE Web Production Sanity Suite', nov: 40, dec: 90, target: 'Done', impact: '50% faster. 20 mins saved. Anyone can support UE release', note: 'CD Admin portal can\'t be automated (network credentials)' },
                        { project: 'UE Core Service Web Sanity Suite', nov: 0, dec: 100, target: 'Done', impact: '75% faster test cycles. 3 hours saved. Every run' },
                        { project: 'UE Decision System Smoke suite', nov: 0, dec: 100, target: 'Done', impact: '65% faster test cycles. 1 hour saved. Every run' },
                        { project: 'Bank Enrollment Regression Mobile - Android', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Bank Enrollment Regression Mobile - iOS', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 870 (MP) E2E Mobile Scenarios', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 21404, 20502 (onboard) Phase 1 E2E', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 709 (RIA) Phase 1 E2E Mobile Browser', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 709 (RIA) Phase 1 E2E Mobile Android', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 709 (RIA) Phase 1 E2E Mobile iOS', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Invest Enrollment Regression Mobile - Android', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Invest Enrollment Regression Mobile - iOS', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' }
                    ]
                }
            ],
            bugAnalysis: {
                title: 'Enrollment PROD Bugs',
                // Monthly cumulative bug data for chart
                bugData2024: [
                    { month: 'Jan', value: 16 },
                    { month: 'Feb', value: 27 },
                    { month: 'Mar', value: 52 },
                    { month: 'Apr', value: 55 },
                    { month: 'May', value: 62 },
                    { month: 'Jun', value: 79 },
                    { month: 'Jul', value: 83 },
                    { month: 'Aug', value: 98 },
                    { month: 'Sep', value: 114 },
                    { month: 'Oct', value: 125 },
                    { month: 'Nov', value: 137 },
                    { month: 'Dec', value: 147 }
                ],
                bugData2025: [
                    { month: 'Jan', value: 12 },
                    { month: 'Feb', value: 20 },
                    { month: 'Mar', value: 25 },
                    { month: 'Apr', value: 33 },
                    { month: 'May', value: 35 },
                    { month: 'Jun', value: 42 },
                    { month: 'Jul', value: 56 },
                    { month: 'Aug', value: 64 },
                    { month: 'Sep', value: 66 },
                    { month: 'Oct', value: 73 },
                    { month: 'Nov', value: 91 },
                    { month: 'Dec', value: 97 }
                ],
                doneVelocity: {
                    title: 'Enrollment Cumulative Done Velocity',
                    '2024': 3481,
                    '2025': 2993,
                    yoyChange: -14
                },
                bugsPerDone: {
                    '2024': { doneItems: 3481, bugs: 147, ratio: 0.04 },
                    '2025': { doneItems: 2993, bugs: 97, ratio: 0.03 },
                    improvement: '34% YOY reduction in bug leaks'
                },
                summary: [
                    'YTD 97 bugs leaked',
                    '15% Critical, 37% High, 46% Medium, 2% Low severity',
                    '34% YOY reduction in bug leaks',
                    '90% bugs were new issues',
                    '61% bugs were hard to detect during testing'
                ],
                rca: {
                    bugType: { new: 90, regression: 7, tbd: 3 },
                    obscurity: { yes: 61, no: 36, tbd: 3 },
                    product: [
                        { category: 'Not at fault', percent: 72 },
                        { category: 'Missed requirements', percent: 11 },
                        { category: 'Enhancement', percent: 8 }
                    ],
                    dev: [
                        { category: 'Configuration issues', percent: 38 },
                        { category: 'Data issues', percent: 13 },
                        { category: 'Missed unit test', percent: 6 }
                    ],
                    testing: [
                        { category: 'Missed functional test scenarios', percent: 27 },
                        { category: 'Environment-related factors', percent: 16 },
                        { category: 'Missed integration test scenarios', percent: 9 }
                    ]
                },
                actions: [
                    '54% - Test cases added to regression & sanity suite',
                    '25% - Unable to replicate in lower environments',
                    '15% - Converted to PBIs or moved to different area path',
                    '6% - Will be reviewed once root cause identified'
                ]
            }
        },
        
        marco: {
            id: 'marco',
            name: 'Marco De Jesus',
            avatar: 'MD',
            color: '#3b82f6',
            teams: ['Core Services', 'WFO - OutSystems', 'QCOE', 'UE-Borrow'],
            // Multiple Velocity Data for Marco's teams
            velocityDataMultiple: [
                {
                    title: 'Core Services Cumulative Done Velocity',
                    total2024: 773,
                    total2025: 1235,
                    data2024: [
                        { month: 'Jan', value: 151 },
                        { month: 'Feb', value: 278 },
                        { month: 'Mar', value: 332 },
                        { month: 'Apr', value: 451 },
                        { month: 'May', value: 491 },
                        { month: 'Jun', value: 547 },
                        { month: 'Jul', value: 575 },
                        { month: 'Aug', value: 655 },
                        { month: 'Sep', value: 692 },
                        { month: 'Oct', value: 731 },
                        { month: 'Nov', value: 735 },
                        { month: 'Dec', value: 773 }
                    ],
                    data2025: [
                        { month: 'Jan', value: 94 },
                        { month: 'Feb', value: 234 },
                        { month: 'Mar', value: 399 },
                        { month: 'Apr', value: 512 },
                        { month: 'May', value: 617 },
                        { month: 'Jun', value: 729 },
                        { month: 'Jul', value: 803 },
                        { month: 'Aug', value: 908 },
                        { month: 'Sep', value: 969 },
                        { month: 'Oct', value: 1048 },
                        { month: 'Nov', value: 1101 },
                        { month: 'Dec', value: 1235 }
                    ]
                },
                {
                    title: 'WFO Cumulative Done Velocity',
                    total2024: 1397,
                    total2025: 1045,
                    data2024: [
                        { month: 'Jan', value: 193 },
                        { month: 'Feb', value: 322 },
                        { month: 'Mar', value: 522 },
                        { month: 'Apr', value: 672 },
                        { month: 'May', value: 773 },
                        { month: 'Jun', value: 875 },
                        { month: 'Jul', value: 991 },
                        { month: 'Aug', value: 1092 },
                        { month: 'Sep', value: 1145 },
                        { month: 'Oct', value: 1245 },
                        { month: 'Nov', value: 1346 },
                        { month: 'Dec', value: 1397 }
                    ],
                    data2025: [
                        { month: 'Jan', value: 98 },
                        { month: 'Feb', value: 246 },
                        { month: 'Mar', value: 294 },
                        { month: 'Apr', value: 378 },
                        { month: 'May', value: 424 },
                        { month: 'Jun', value: 543 },
                        { month: 'Jul', value: 591 },
                        { month: 'Aug', value: 697 },
                        { month: 'Sep', value: 805 },
                        { month: 'Oct', value: 866 },
                        { month: 'Nov', value: 946 },
                        { month: 'Dec', value: 1045 }
                    ]
                },
                {
                    title: 'ULP Cumulative Done Velocity',
                    total2024: 556,
                    total2025: 272,
                    data2024: [
                        { month: 'Jan', value: 113 },
                        { month: 'Feb', value: 181 },
                        { month: 'Mar', value: 181 },
                        { month: 'Apr', value: 181 },
                        { month: 'May', value: 181 },
                        { month: 'Jun', value: 241 },
                        { month: 'Jul', value: 289 },
                        { month: 'Aug', value: 289 },
                        { month: 'Sep', value: 519 },
                        { month: 'Oct', value: 527 },
                        { month: 'Nov', value: 550 },
                        { month: 'Dec', value: 556 }
                    ],
                    data2025: [
                        { month: 'Jan', value: 42 },
                        { month: 'Feb', value: 69 },
                        { month: 'Mar', value: 91 },
                        { month: 'Apr', value: 111 },
                        { month: 'May', value: 129 },
                        { month: 'Jun', value: 145 },
                        { month: 'Jul', value: 156 },
                        { month: 'Aug', value: 167 },
                        { month: 'Sep', value: 173 },
                        { month: 'Oct', value: 196 },
                        { month: 'Nov', value: 222 },
                        { month: 'Dec', value: 272 }
                    ]
                }
            ],
            projects: [
                // Core Services
                {
                    category: 'Core Services',
                    items: [
                        { project: 'Rules Manager', nov: 100, dec: 100, target: 'Done', impact: '83% faster test cycles. 25 mins saved. Every run.' },
                        { project: 'Banking Core', nov: 18, dec: 26, target: 'Resuming 2026', impact: '20% faster test cycles. 12 mins saved. Every run.', status: 'on-hold', note: 'Automation getting resumed in 2026' },
                        { project: 'Identity', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started', note: 'After Banking Core completion' },
                        { project: 'Securities', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started' },
                        { project: 'Notifications', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started' },
                        { project: 'Documents', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started' },
                        { project: 'Service Bus', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started' },
                        { project: 'Branding', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started' },
                        { project: 'Agreements', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'not-started' }
                    ]
                },
                // WFO - OutSystems (Full list from PPT)
                {
                    category: 'WFO - OutSystems',
                    items: [
                        { project: 'Vendor Management (VM)', nov: 90, dec: 90, target: 'Done (80%)', impact: 'Pipeline setup in ADO' },
                        { project: 'UCAT', nov: 90, dec: 90, target: 'Done (80%)', impact: 'Pipeline setup in ADO' },
                        { project: 'IBD KYC', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Pipeline setup in ADO' },
                        { project: 'OLPP', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Pipeline setup in ADO' },
                        { project: '927: Open Finance API', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Pipeline setup in ADO' },
                        { project: 'OS Onboarding Admin Portal', nov: 90, dec: 90, target: 'Done (80%)', impact: 'Pipeline setup in ADO' },
                        { project: 'Manage Portfolio-870', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Working on pipeline' },
                        { project: '1015 Content Engine', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Completed' },
                        { project: 'Enterprise Wires (EWM)', nov: 70, dec: 70, target: '80%', impact: 'SFR/WHL/DepOps in progress' },
                        { project: 'Work Planners (WP)', nov: 70, dec: 70, target: '80%', impact: 'On Hold - new dev moving to prod' },
                        { project: 'AEW', nov: 70, dec: 70, target: '80%', impact: 'New dev PBIs in progress' },
                        { project: 'New Product Request (NPR)', nov: 75, dec: 75, target: '80%', impact: 'In progress' },
                        { project: 'CRV', nov: 40, dec: 40, target: '80%', impact: 'In progress' },
                        { project: '24602 Yodlee Webhook', nov: 0, dec: 20, target: '80%', impact: 'New Project' },
                        { project: 'Loan Demand Statement (PDS)', nov: 0, dec: 10, target: '80%', impact: 'In progress' },
                        { project: 'OSG', nov: 0, dec: 10, target: '80%', impact: 'In progress' },
                        { project: 'Compensation (Meritocracy)', nov: 0, dec: 20, target: '80%', impact: 'In progress' },
                        { project: 'Decision Migration', nov: 0, dec: 20, target: '80%', impact: 'In progress' }
                    ]
                },
                // UE-Borrow (under Marco)
                {
                    category: 'UE-Borrow',
                    items: [
                        { project: 'elos Admin', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Automation completed' },
                        { project: 'AUS', nov: 80, dec: 80, target: 'Done (80%)', impact: 'Automation completed' },
                        { project: 'elos', nov: 85, dec: 85, target: 'Done (85%)', impact: 'Automation completed' },
                        { project: 'ULP', nov: 90, dec: 90, target: 'Done (90%)', impact: 'Automation completed' }
                    ]
                }
            ],
            qcoe: {
                title: 'QCOE Initiatives',
                interviewProcess: {
                    title: 'Interview Process',
                    rounds: [
                        { round: 1, name: 'Hiring Manager Interview', duration: '30 min', focus: 'Background, Fit, Motivation' },
                        { round: 2, name: 'Technical Evaluation By QE Lead', duration: '30 min', focus: 'QE Processes, Testing Techniques' },
                        { round: 3, name: 'Automation & Coding By QE Lead', duration: '45 min', focus: 'Frameworks, CI/CD, Coding Tasks' },
                        { round: 4, name: 'Meet & Greet with Head of Quality', duration: '15 min', focus: 'Communication, Soft Skills, Leadership' }
                    ],
                    totalDuration: '2 hours'
                }
            },
            // Bug Analysis for all Marco's teams
            bugAnalysisMultiple: [
                {
                    title: 'Core Services PROD Bugs',
                    // Monthly cumulative bug data for chart
                    bugData2024: [
                        { month: 'Jan', value: 7 },
                        { month: 'Feb', value: 9 },
                        { month: 'Mar', value: 12 },
                        { month: 'Apr', value: 12 },
                        { month: 'May', value: 16 },
                        { month: 'Jun', value: 18 },
                        { month: 'Jul', value: 19 },
                        { month: 'Aug', value: 21 },
                        { month: 'Sep', value: 26 },
                        { month: 'Oct', value: 28 },
                        { month: 'Nov', value: 31 },
                        { month: 'Dec', value: 34 }
                    ],
                    bugData2025: [
                        { month: 'Jan', value: 0 },
                        { month: 'Feb', value: 15 },
                        { month: 'Mar', value: 18 },
                        { month: 'Apr', value: 21 },
                        { month: 'May', value: 35 },
                        { month: 'Jun', value: 43 },
                        { month: 'Jul', value: 52 },
                        { month: 'Aug', value: 65 },
                        { month: 'Sep', value: 81 },
                        { month: 'Oct', value: 77 },
                        { month: 'Nov', value: 86 },
                        { month: 'Dec', value: 103 }
                    ],
                    doneVelocity: {
                        title: 'Core Services Cumulative Done Velocity',
                        '2024': 773,
                        '2025': 1235,
                        yoyChange: 60
                    },
                    bugsPerDone: {
                        '2024': { doneItems: 773, bugs: 34, ratio: 0.04 },
                        '2025': { doneItems: 1235, bugs: 103, ratio: 0.08 },
                        improvement: 'Shipping 60% more code, but leaking more bugs'
                    },
                    summary: [
                        'YTD 103 bugs leaked',
                        '12% Critical, 33% High, 43% Medium severity',
                        '202% YOY increase in bug leaks',
                        '85% bugs were new issues',
                        '59% bugs were hard to detect during testing'
                    ],
                    rca: {
                        bugType: { new: 85, regression: 15, tbd: 0 },
                        obscurity: { yes: 59, no: 41, tbd: 0 },
                        product: [
                            { category: 'Enhancements', percent: 13 },
                            { category: 'Missed requirements', percent: 12 },
                            { category: 'Requirement change', percent: 7 }
                        ],
                        dev: [
                            { category: 'Design/Architecture', percent: 20 },
                            { category: 'Data issues', percent: 15 },
                            { category: 'Third party issues', percent: 7 }
                        ],
                        testing: [
                            { category: 'Missed functional test scenarios', percent: 20 },
                            { category: 'Integration testing', percent: 20 },
                            { category: 'Specific production test data', percent: 9 }
                        ]
                    },
                    actions: [
                        '53% - Addressed with new regression test validations and code fix',
                        '32% - Bugs are under review',
                        '12% - Due to environmental issues or production data setup'
                    ],
                    nextSteps: [
                        'Close Knowledge Gaps: Collocate team by Jan 2026',
                        'Enhance System Understanding: Brown bag sessions by April 2026',
                        'Increase automation coverage for Securities, Identity, Banking Core'
                    ]
                },
                {
                    title: 'WFO PROD Bugs',
                    // Monthly cumulative bug data for chart
                    bugData2024: [
                        { month: 'Jan', value: 2 },
                        { month: 'Feb', value: 6 },
                        { month: 'Mar', value: 8 },
                        { month: 'Apr', value: 12 },
                        { month: 'May', value: 17 },
                        { month: 'Jun', value: 21 },
                        { month: 'Jul', value: 27 },
                        { month: 'Aug', value: 32 },
                        { month: 'Sep', value: 28 },
                        { month: 'Oct', value: 32 },
                        { month: 'Nov', value: 41 },
                        { month: 'Dec', value: 45 }
                    ],
                    bugData2025: [
                        { month: 'Jan', value: 0 },
                        { month: 'Feb', value: 13 },
                        { month: 'Mar', value: 17 },
                        { month: 'Apr', value: 17 },
                        { month: 'May', value: 25 },
                        { month: 'Jun', value: 33 },
                        { month: 'Jul', value: 48 },
                        { month: 'Aug', value: 50 },
                        { month: 'Sep', value: 52 },
                        { month: 'Oct', value: 16 },
                        { month: 'Nov', value: 20 },
                        { month: 'Dec', value: 22 }
                    ],
                    doneVelocity: {
                        title: 'WFO Cumulative Done Velocity',
                        '2024': 1397,
                        '2025': 1045,
                        yoyChange: -25
                    },
                    bugsPerDone: {
                        '2024': { doneItems: 1397, bugs: 45, ratio: 0.03 },
                        '2025': { doneItems: 1045, bugs: 22, ratio: 0.02 },
                        improvement: '51% YOY decrease in bug leaks!'
                    },
                    summary: [
                        'YTD 21 bugs leaked',
                        '100% Medium severity',
                        '95% YOY decrease in bug leaks',
                        '66% bugs were new issues',
                        '57% bugs were hard to detect during testing'
                    ],
                    rca: {
                        bugType: { new: 66, regression: 24, tbd: 10 },
                        obscurity: { yes: 57, no: 29, tbd: 14 },
                        product: [
                            { category: 'Enhancements', percent: 4 },
                            { category: 'Missed requirements', percent: 4 },
                            { category: 'Knowledge Gap', percent: 9 }
                        ],
                        dev: [
                            { category: 'Configuration issues', percent: 43 },
                            { category: 'Design/Architecture', percent: 28 },
                            { category: 'Data issues', percent: 4 }
                        ],
                        testing: [
                            { category: 'Missed functional test scenarios', percent: 38 }
                        ]
                    },
                    actions: [
                        'Improving data quality in lower environments',
                        'Enhancing test coverage for functional and integration scenarios',
                        'QA team collaborating closely with dev team for better understanding'
                    ]
                },
                {
                    title: 'ULP PROD Bugs',
                    // Monthly cumulative bug data for chart
                    bugData2024: [
                        { month: 'Jan', value: 0 },
                        { month: 'Feb', value: 2 },
                        { month: 'Mar', value: 4 },
                        { month: 'Apr', value: 4 },
                        { month: 'May', value: 5 },
                        { month: 'Jun', value: 6 },
                        { month: 'Jul', value: 9 },
                        { month: 'Aug', value: 6 },
                        { month: 'Sep', value: 12 },
                        { month: 'Oct', value: 12 },
                        { month: 'Nov', value: 24 },
                        { month: 'Dec', value: 26 }
                    ],
                    bugData2025: [
                        { month: 'Jan', value: 0 },
                        { month: 'Feb', value: 2 },
                        { month: 'Mar', value: 3 },
                        { month: 'Apr', value: 1 },
                        { month: 'May', value: 8 },
                        { month: 'Jun', value: 8 },
                        { month: 'Jul', value: 6 },
                        { month: 'Aug', value: 6 },
                        { month: 'Sep', value: 9 },
                        { month: 'Oct', value: 21 },
                        { month: 'Nov', value: 11 },
                        { month: 'Dec', value: 11 }
                    ],
                    doneVelocity: {
                        title: 'ULP Cumulative Done Velocity',
                        '2024': 556,
                        '2025': 272,
                        yoyChange: -51
                    },
                    bugsPerDone: {
                        '2024': { doneItems: 556, bugs: 26, ratio: 0.05 },
                        '2025': { doneItems: 272, bugs: 11, ratio: 0.04 },
                        improvement: '58% YOY decrease in bug leaks!'
                    },
                    summary: [
                        'YTD 11 bugs leaked',
                        '45% Critical, 54% Medium severity',
                        '118% YOY decrease in bug leaks',
                        '55% bugs were new issues',
                        '36% bugs were hard to detect during testing'
                    ],
                    rca: {
                        bugType: { new: 55, regression: 36, tbd: 9 },
                        obscurity: { yes: 36, no: 55, tbd: 9 },
                        product: [
                            { category: 'Not at fault', percent: 45 },
                            { category: 'Missed requirements', percent: 27 },
                            { category: 'Knowledge gap', percent: 18 }
                        ],
                        dev: [
                            { category: 'Configuration issues', percent: 27 },
                            { category: 'Data issues', percent: 18 },
                            { category: 'Missed unit test', percent: 9 }
                        ],
                        testing: [
                            { category: 'Missed functional test scenarios', percent: 64 },
                            { category: 'Missed integration test scenarios', percent: 27 },
                            { category: 'Environment-related factors', percent: 9 }
                        ]
                    },
                    actions: [
                        '100% of bugs have test cases added to regression & sanity suite',
                        'Test Automation completed for all automatable test cases',
                        'ULP, eLOS, AUS, eLOS Admin fully automated'
                    ]
                }
            ]
        },
        
        manasa: {
            id: 'manasa',
            name: 'Manasa',
            avatar: 'MA',
            color: '#f59e0b',
            teams: ['Borrow', 'Credit Card', 'SIT OLB (Web and Mobile)'],
            // OLB Velocity chart data - PLACEHOLDER: Add actual chart values if available
            velocityData: {
                title: 'OLB Cumulative Done Velocity',
                months: [
                    { month: 'Jan', value: null },
                    { month: 'Feb', value: null },
                    { month: 'Mar', value: null },
                    { month: 'Apr', value: null },
                    { month: 'May', value: null },
                    { month: 'Jun', value: null },
                    { month: 'Jul', value: null },
                    { month: 'Aug', value: null },
                    { month: 'Sep', value: null },
                    { month: 'Oct', value: null },
                    { month: 'Nov', value: null },
                    { month: 'Dec', value: null }
                ],
                total2024: null, // Add actual value if available
                total2025: null  // Add actual value if available
            },
            projects: [
                // Borrow - Credit Card
                {
                    category: 'Borrow - Credit Card',
                    items: [
                        { project: 'Project 951 SBLOC (Move Money from LOC) E2E', nov: 100, dec: 100, target: 'Done', impact: '70% Faster test cycles. 3 hrs saved. Every run.' },
                        { project: 'Project 884 (Credit Card) Mobile E2E', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 884 (Credit Card) Web E2E', nov: 67, dec: 67, target: 'TBD', impact: '-', note: '30% not feasible for automation' },
                        { project: 'Project 19051 (SBLOC) E2E', nov: 100, dec: 100, target: 'Done', impact: '80% Faster test cycles. 2 hrs saved. Every run.' }
                    ]
                },
                // SIT Online Banking Web and Mobile
                {
                    category: 'SIT Online Banking Web and Mobile',
                    items: [
                        { project: 'Online Banking Web Axos', nov: 84, dec: 85, target: 'Done', impact: 'Cycle Time cut from 6 to 4 days. 33% faster, saving 2 working days' },
                        { project: 'Online Banking Web UFB', nov: 84, dec: 85, target: 'Done', impact: '33% Faster test. Cycle Time cut from 6 to 4 days.' },
                        { project: 'Online Banking API AXOS Regression', nov: 100, dec: 100, target: 'Done', impact: '100% improvement (from not executable to 52 minutes)' },
                        { project: 'Online Banking API AXOS Sanity', nov: 100, dec: 100, target: 'Done', impact: '100% improvement (from not executable to 38 minutes)' },
                        { project: 'Online Banking API UFB Regression', nov: 100, dec: 100, target: 'Done', impact: '100% improvement (from not executable to 26 minutes)' },
                        { project: 'Online Banking API UFB Sanity', nov: 100, dec: 100, target: 'Done', impact: '100% improvement (from not executable to 19 minutes)' },
                        { project: 'Online Banking Mobile iOS Axos', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Online Banking Mobile Android Axos', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Online Banking Mobile Android UFB', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Online Banking Mobile iOS UFB', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' }
                    ]
                }
            ]
        },
        
        irina: {
            id: 'irina',
            name: 'Irina Easterling',
            avatar: 'IE',
            color: '#ec4899',
            teams: ['Bank - Consumer Deposit', 'Invest - WL IBD', 'Invest - ROBO', 'Plan'],
            // UDB Velocity chart data with monthly breakdown
            velocityData: {
                title: 'UDB Cumulative Done Velocity',
                data2024: [
                    { month: 'Jan', value: 401 },
                    { month: 'Feb', value: 1194 },
                    { month: 'Mar', value: 1744 },
                    { month: 'Apr', value: 2216 },
                    { month: 'May', value: 2518 },
                    { month: 'Jun', value: 2944 },
                    { month: 'Jul', value: 3295 },
                    { month: 'Aug', value: 3545 },
                    { month: 'Sep', value: 3818 },
                    { month: 'Oct', value: 4029 },
                    { month: 'Nov', value: 4226 },
                    { month: 'Dec', value: 4405 }
                ],
                data2025: [
                    { month: 'Jan', value: 309 },
                    { month: 'Feb', value: 766 },
                    { month: 'Mar', value: 1207 },
                    { month: 'Apr', value: 1661 },
                    { month: 'May', value: 2147 },
                    { month: 'Jun', value: 2663 },
                    { month: 'Jul', value: 3141 },
                    { month: 'Aug', value: 3690 },
                    { month: 'Sep', value: 4306 },
                    { month: 'Oct', value: 4982 },
                    { month: 'Nov', value: 5632 },
                    { month: 'Dec', value: 6091 }
                ],
                total2024: 4405,
                total2025: 6091
            },
            projects: [
                // Bank - Consumer Deposit
                {
                    category: 'Bank - Consumer Deposit',
                    items: [
                        { project: 'Project 20502 (CD Customer Onboarding) Phase 2 E2E', nov: 0, dec: 0, target: 'TBD', impact: '-' },
                        { project: 'Project 29401 (FDIC Expanded Insurance) E2E', nov: 70, dec: 100, target: 'Done', impact: '25% faster test cycles. 2.5 hrs saved. Every run.' },
                        { project: 'Project 23902 (EWM Reg-E) Mobile Axos/UFB E2E', nov: 0, dec: 0, target: 'TBD', impact: '-', status: 'blocked' },
                        { project: 'Project 23902 (EWM Reg-E) Web Axos/UFB E2E', nov: 100, dec: 100, target: 'Done', impact: '88% faster test cycles. 14 hrs saved. Every run.' },
                        { project: 'Project 23902 (EWM Reg-E Enhancements) Web E2E', nov: 100, dec: 100, target: 'Done', impact: '83% faster test cycles. 2.5 hrs saved. Every run.' }
                    ]
                },
                // Invest - WL IBD
                {
                    category: 'Invest - WL IBD',
                    items: [
                        { project: 'Project 723 (IBD Accounts) E2E', nov: 60, dec: 100, target: '1/31/2026', impact: '35% faster test cycles. 7 hrs saved. Every run.' },
                        { project: 'Project 31201 (House Holding) E2E', nov: 0, dec: 0, target: 'TBD', impact: 'Automation not started yet' }
                    ]
                },
                // Invest - ROBO
                {
                    category: 'Invest - ROBO',
                    items: [
                        { project: 'Project 870 (Managed Portfolio) Phase 1 E2E', nov: 100, dec: 100, target: 'Done', impact: '18% faster test cycles. 5 hrs saved. Every run.' },
                        { project: 'Project 870 (Managed Portfolio) Phase 2 E2E', nov: 56, dec: 61, target: '02/28/2026', impact: '15% faster test cycles. 3 hrs saved. Every run.' },
                        { project: 'Project 870 (Managed Portfolio) Phase 3 E2E', nov: 24, dec: 32, target: '02/28/2026', impact: '10% faster test cycle. 1 hour saved. Every run.' }
                    ]
                },
                // Plan
                {
                    category: 'Plan',
                    items: [
                        { project: 'Production bugs', nov: null, dec: null, target: 'Ongoing', impact: 'Team focused on Prod bugs' },
                        { project: 'Manual Testing', nov: null, dec: null, target: 'Ongoing', impact: '25 items completed in December' },
                        { project: 'AppD crashes merged into UDB.233', nov: null, dec: null, target: 'Done', impact: 'Improved app stability' }
                    ]
                }
            ],
            bugAnalysis: {
                title: 'UDB PROD Bugs',
                // Monthly cumulative bug data for chart (includes APM)
                bugData2024: [
                    { month: 'Jan', value: 23 },
                    { month: 'Feb', value: 44 },
                    { month: 'Mar', value: 49 },
                    { month: 'Apr', value: 80 },
                    { month: 'May', value: 116 },
                    { month: 'Jun', value: 131 },
                    { month: 'Jul', value: 155 },
                    { month: 'Aug', value: 169 },
                    { month: 'Sep', value: 182 },
                    { month: 'Oct', value: 198 },
                    { month: 'Nov', value: 213 },
                    { month: 'Dec', value: 227 }
                ],
                bugData2025: [
                    { month: 'Jan', value: 33 },
                    { month: 'Feb', value: 63 },
                    { month: 'Mar', value: 98 },
                    { month: 'Apr', value: 122 },
                    { month: 'May', value: 152 },
                    { month: 'Jun', value: 178 },
                    { month: 'Jul', value: 214 },
                    { month: 'Aug', value: 247 },
                    { month: 'Sep', value: 261 },
                    { month: 'Oct', value: 290 },
                    { month: 'Nov', value: 304 },
                    { month: 'Dec', value: 304 }
                ],
                bugDataAPM: [
                    { month: 'Jan', value: 11 },
                    { month: 'Feb', value: 26 },
                    { month: 'Mar', value: 26 },
                    { month: 'Apr', value: 31 },
                    { month: 'May', value: 56 },
                    { month: 'Jun', value: 56 },
                    { month: 'Jul', value: 73 },
                    { month: 'Aug', value: 74 },
                    { month: 'Sep', value: 92 },
                    { month: 'Oct', value: 92 },
                    { month: 'Nov', value: 92 },
                    { month: 'Dec', value: 92 }
                ],
                doneVelocity: {
                    title: 'UDB Cumulative Done Velocity',
                    '2024': 4405,
                    '2025': 6091,
                    yoyChange: 38
                },
                bugsPerDone: {
                    '2024': { doneItems: 4405, bugs: 227, ratio: 0.05 },
                    '2025': { doneItems: 6091, bugs: 304, ratio: 0.05 },
                    improvement: 'Shipping 38% more code with same bug ratio'
                },
                summary: [
                    'YTD 304 bugs leaked',
                    '4% Critical, 45% High, 48% Medium, 4% Low',
                    '34% YOY increase in bug leaks',
                    '66% bugs were new issues',
                    '55% bugs were hard to find'
                ],
                rca: {
                    bugType: { new: 66, regression: 31, tbd: 3 },
                    obscurity: { yes: 55, no: 42, tbd: 3 },
                    product: [
                        { category: 'Not at fault', percent: 97.3 },
                        { category: 'Enhancements', percent: 1.7 },
                        { category: 'Requirements missed', percent: 1 }
                    ],
                    dev: [
                        { category: 'Missed unit test', percent: 55 },
                        { category: 'Dynatrace issues', percent: 30 },
                        { category: 'Not at fault', percent: 10 }
                    ],
                    testing: [
                        { category: 'Not at fault', percent: 54 },
                        { category: 'Missed functional test', percent: 34 },
                        { category: 'Non-customer data', percent: 8 },
                        { category: 'Missed integration test', percent: 3 }
                    ]
                },
                actions: [
                    '34% - New bugs caused by missing test scenarios. Scenarios now added to sanity and regression tests.',
                    '8% - Issues due to test data setup. Test data now aligned with customer-like environments.',
                    '5% - Dependency-related bugs (CS, SF). Plan to include E2E testing with internal teams.'
                ],
                nextSteps: [
                    'Expand automation coverage in upcoming projects',
                    'Goal: early detection of issues and reduce manual work'
                ]
            }
        }
    },
    
    // Summary stats
    summaryStats: {
        totalProjects: 65,
        completedProjects: 28,
        inProgress: 18,
        blocked: 13,
        notStarted: 6,
        averageCoverage: 72,
        totalHoursSaved: 156
    }
};

// Calculate aggregate statistics
function calculateAggregates() {
    let completed = 0, inProgress = 0, blocked = 0, notStarted = 0;
    let totalHoursSaved = 0;
    
    Object.values(AUTOMATION_STATE.managers).forEach(manager => {
        manager.projects.forEach(category => {
            category.items.forEach(item => {
                if (item.target === 'Done' || item.dec === 100) completed++;
                else if (item.status === 'blocked') blocked++;
                else if (item.dec > 0 && item.dec < 100) inProgress++;
                else if (item.dec === 0) notStarted++;
                
                // Parse hours saved from impact string
                const hoursMatch = item.impact?.match(/(\d+\.?\d*)\s*(hours?|hrs?)/i);
                if (hoursMatch) {
                    totalHoursSaved += parseFloat(hoursMatch[1]);
                }
            });
        });
    });
    
    return { completed, inProgress, blocked, notStarted, totalHoursSaved };
}

const AGGREGATES = calculateAggregates();

console.log('📊 State of Automation Data Loaded');
console.log(`   Report: ${AUTOMATION_STATE.reportDate}`);
console.log(`   Managers: ${Object.keys(AUTOMATION_STATE.managers).length}`);
console.log(`   Aggregates:`, AGGREGATES);
