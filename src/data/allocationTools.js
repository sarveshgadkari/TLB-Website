export const allocationTools = [
  {
    id: 'zoho',
    name: 'Zoho',
    shortName: 'Zoho',
    category: 'CRM & Operations',
    color: '#E42527',
    icon: 'fas fa-layer-group',
    brand: false,
    tagline: 'Unified business suite for growing teams.',
    summary:
      'A connected suite covering CRM, finance, people, campaigns, and service — allocated when a company wants one vendor across daily operations.',
    description:
      'Zoho is allocated to organizations that need CRM, books, people, and marketing under one login. TLBISBIG helps map the right Zoho apps, licensing, and rollout so sales, finance, and operations share a single source of truth.',
    capabilities: [
      'CRM, campaigns, and customer service',
      'Books, inventory, and billing',
      'People, projects, and workplace apps',
      'Phased licensing and implementation',
    ],
    bestFor: 'SMEs that want an all-in-one stack without enterprise CRM complexity.',
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    shortName: 'QuickBooks',
    category: 'Finance',
    color: '#2CA01C',
    icon: 'fas fa-file-invoice-dollar',
    brand: false,
    tagline: 'Accounting, payroll, and cash-flow control.',
    summary:
      'Allocated to finance teams that need clean books, invoicing, payroll, and reporting with accountant-ready workflows.',
    description:
      'QuickBooks is the working ledger for many growing companies. We place the right Online or Desktop path, connect banks and payroll, and align chart-of-accounts so leadership can see cash, tax, and job profitability clearly.',
    capabilities: [
      'Invoicing, expenses, and bank feeds',
      'Payroll and contractor payments',
      'Job costing and management reports',
      'Accountant collaboration and close process',
    ],
    bestFor: 'Founders, bookkeepers, and CFOs who need reliable monthly close.',
  },
  {
    id: 'slack',
    name: 'Slack',
    shortName: 'Slack',
    category: 'Collaboration',
    color: '#611F69',
    icon: 'fab fa-slack',
    brand: true,
    tagline: 'Channel-based team communication.',
    summary:
      'Allocated when email is too slow and teams need channels, huddles, and app workflows in one workspace.',
    description:
      'Slack becomes the operating room for daily work. We design channel architecture, guest access, and integrations (CRM, tickets, alerts) so conversations stay searchable and decisions do not get lost.',
    capabilities: [
      'Channels, huddles, and canvas docs',
      'Workflow builder and app integrations',
      'Enterprise Grid and guest controls',
      'Notification and culture playbooks',
    ],
    bestFor: 'Distributed teams that need faster coordination than email.',
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    shortName: 'Google',
    category: 'Collaboration',
    color: '#4285F4',
    icon: 'fab fa-google',
    brand: true,
    tagline: 'Email, Drive, Meet, and shared documents.',
    summary:
      'Allocated as the collaboration backbone: identity, Gmail, Drive, Docs, Sheets, and Meet for every employee.',
    description:
      'Google Workspace is placed when a company needs cloud identity plus real-time documents. We handle domain setup, shared drives, security defaults, and migration from legacy mail so teams can work from any device.',
    capabilities: [
      'Business email and calendar',
      'Shared drives and file governance',
      'Docs, Sheets, Slides, and Meet',
      'Admin, 2FA, and device policies',
    ],
    bestFor: 'Teams that live in shared documents and video-first meetings.',
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    shortName: 'M365',
    category: 'Collaboration',
    color: '#00A4EF',
    icon: 'fab fa-microsoft',
    brand: true,
    tagline: 'Office, Teams, SharePoint, and enterprise identity.',
    summary:
      'Allocated to organizations standardized on Outlook, Excel, Teams, and SharePoint with Azure AD control.',
    description:
      'Microsoft 365 is the enterprise productivity layer. We allocate the right Business or Enterprise plan, stand up Teams and SharePoint information architecture, and connect identity so compliance and collaboration travel together.',
    capabilities: [
      'Outlook, Word, Excel, and PowerPoint',
      'Teams meetings and collaboration',
      'SharePoint and OneDrive governance',
      'Entra ID, compliance, and licensing',
    ],
    bestFor: 'Companies that already run on Microsoft or need regulated productivity.',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    shortName: 'Salesforce',
    category: 'CRM & Operations',
    color: '#00A1E0',
    icon: 'fab fa-salesforce',
    brand: true,
    tagline: 'Enterprise CRM and revenue operations.',
    summary:
      'Allocated when pipeline, service, and marketing must scale with custom objects, automation, and reporting.',
    description:
      'Salesforce is the institutional CRM for complex selling motions. TLBISBIG scopes Sales Cloud (and adjacent clouds), data model, and integrations so leadership can forecast, assign, and serve accounts with discipline.',
    capabilities: [
      'Leads, opportunities, and forecasting',
      'Service, CPQ, and marketing clouds',
      'Flow automation and AppExchange',
      'Data model, roles, and dashboards',
    ],
    bestFor: 'Growth and enterprise teams with multi-stage revenue operations.',
  },
  {
    id: 'odoo',
    name: 'Odoo',
    shortName: 'Odoo',
    category: 'Finance',
    color: '#714B67',
    icon: 'fas fa-cubes',
    brand: false,
    tagline: 'Modular ERP for sales, stock, and accounting.',
    summary:
      'Allocated when CRM, inventory, manufacturing, and accounting need to live in one modular ERP.',
    description:
      'Odoo is chosen when a company has outgrown spreadsheets but does not want a rigid legacy ERP. We allocate Community or Enterprise apps, configure warehouses and accounting, and sequence go-live so operations stay running.',
    capabilities: [
      'Sales, CRM, and e-commerce',
      'Inventory, MRP, and purchasing',
      'Accounting and reporting',
      'Studio customization and apps',
    ],
    bestFor: 'Product and operations-heavy businesses that need an ERP they can grow into.',
  },
  {
    id: 'reevo',
    name: 'Reevo',
    shortName: 'Reevo',
    category: 'CRM & Operations',
    color: '#6C5CE7',
    icon: 'fas fa-bolt',
    brand: false,
    tagline: 'AI-native CRM for modern revenue teams.',
    summary:
      'Allocated to sales orgs that want an AI-first CRM: capture, coaching, and pipeline hygiene without heavy admin.',
    description:
      'Reevo is placed where traditional CRM feels like data entry. We help teams evaluate AI capture, meeting intelligence, and pipeline workflows, then allocate licensing and onboarding so reps actually live in the system.',
    capabilities: [
      'AI activity capture and summaries',
      'Pipeline hygiene and forecasting',
      'Meeting intelligence and coaching',
      'Fast onboarding for lean sales teams',
    ],
    bestFor: 'Revenue teams that want CRM insights without a large ops staff.',
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    shortName: 'BambooHR',
    category: 'People',
    color: '#73C41D',
    icon: 'fas fa-user-tie',
    brand: false,
    tagline: 'HRIS for hiring, records, and people ops.',
    summary:
      'Allocated as the people system of record: applicant tracking, employee data, time off, and performance.',
    description:
      'BambooHR is the HR backbone for many SMEs. We allocate the right bundle, migrate employee records, and connect payroll or SSO so HR stops living in folders and managers self-serve the basics.',
    capabilities: [
      'ATS and onboarding',
      'Employee records and org charts',
      'Time off, performance, and e-sign',
      'Payroll and benefits connections',
    ],
    bestFor: 'Companies professionalizing HR beyond spreadsheets and email.',
  },
  {
    id: 'smbl',
    name: 'SMBL',
    shortName: 'SMBL',
    category: 'Capital & Growth',
    color: '#F0B429',
    icon: 'fas fa-landmark',
    brand: false,
    tagline: 'Small-medium business lending and capital access.',
    summary:
      'Allocated when a company needs working capital, equipment, or growth facilities with a guided underwriting path.',
    description:
      'SMBL is our capital-access lane for qualified small and mid-sized businesses. We help assemble financials, match facility type, and coordinate the application so owners are not shopping lenders blind.',
    capabilities: [
      'Working capital and term facilities',
      'Equipment and growth financing',
      'Application packaging and readiness',
      'Introductions to aligned capital partners',
    ],
    bestFor: 'Operators who need capital with a structured, advisor-led process.',
  },
  {
    id: 'mystartup',
    name: 'MyStartup',
    shortName: 'MyStartup',
    category: 'Capital & Growth',
    color: '#FF6B35',
    icon: 'fas fa-rocket',
    brand: false,
    tagline: 'Formation, launch, and early operating system.',
    summary:
      'Allocated to founders who need entity, compliance, and early operating tools in one guided path.',
    description:
      'MyStartup is placed at the beginning of the company lifecycle. We help founders sequence formation, banking, and first operating tools so the venture starts with a clean legal and financial spine.',
    capabilities: [
      'Entity formation and compliance checklist',
      'Launch playbooks and first-year ops',
      'Tooling for banking, books, and CRM',
      'Advisor-guided startup allocation',
    ],
    bestFor: 'New ventures that need a structured start, not a pile of disconnected apps.',
  },
  {
    id: 'instrumentl',
    name: 'Instrumentl',
    shortName: 'Instrumentl',
    category: 'Capital & Growth',
    color: '#3D5AFE',
    icon: 'fas fa-search-dollar',
    brand: false,
    tagline: 'Grant research, matching, and tracker.',
    summary:
      'Allocated to nonprofits and mission teams that need a living grant pipeline instead of spreadsheet hunting.',
    description:
      'Instrumentl is the research engine for grant funding. We allocate seats, train teams on matches and deadlines, and connect the tracker to your development process so opportunities are pursued on time.',
    capabilities: [
      'Grant matching and discovery',
      'Deadline and task tracking',
      'Funder intelligence and reports',
      'Team workflows for development staff',
    ],
    bestFor: 'Nonprofits, schools, and mission orgs building a serious grant pipeline.',
  },
  {
    id: 'artemis',
    name: 'Artemis',
    shortName: 'Artemis',
    category: 'Capital & Growth',
    color: '#C9A227',
    icon: 'fas fa-bullseye',
    brand: false,
    tagline: 'Research and program allocation intelligence.',
    summary:
      'Allocated when leadership must compare initiatives, capital asks, and research opportunities against strategy.',
    description:
      'Artemis supports research and allocation decisions — scoring programs, capital requests, and strategic bets so resources follow priority. We help configure intake, scoring, and reporting for boards and operators.',
    capabilities: [
      'Initiative intake and scoring',
      'Capital and program allocation views',
      'Research tracking and evidence packs',
      'Board-ready allocation reports',
    ],
    bestFor: 'Teams that need a disciplined way to decide where money and research time go.',
  },
  {
    id: 'trello',
    name: 'Trello',
    shortName: 'Trello',
    category: 'Work Management',
    color: '#0079BF',
    icon: 'fab fa-trello',
    brand: true,
    tagline: 'Visual boards for work in motion.',
    summary:
      'Allocated for lightweight project tracking: boards, cards, and Power-Ups without heavy agile ceremony.',
    description:
      'Trello is the visual workbench for teams that think in lists. We design board templates, automations, and Power-Ups so intake, delivery, and reporting stay simple — then graduate to Jira when the process outgrows boards.',
    capabilities: [
      'Boards, lists, and card workflows',
      'Butler automation and Power-Ups',
      'Inbox, calendar, and dashboard views',
      'Templates for ops, marketing, and delivery',
    ],
    bestFor: 'Teams that want visible work without a full project-management suite.',
  },
  {
    id: 'jira',
    name: 'Jira',
    shortName: 'Jira',
    category: 'Work Management',
    color: '#0052CC',
    icon: 'fab fa-jira',
    brand: true,
    tagline: 'Issue tracking and agile delivery.',
    summary:
      'Allocated to product and engineering teams that need sprints, issues, SLAs, and cross-project reporting.',
    description:
      'Jira is the delivery system of record for software and structured programs. We allocate Jira Software or Service Management, design projects and workflows, and connect Confluence or Bitbucket so delivery is measurable.',
    capabilities: [
      'Scrum, Kanban, and roadmaps',
      'Custom workflows and automation',
      'JSM for IT and service desks',
      'Dashboards, SLAs, and integrations',
    ],
    bestFor: 'Engineering, IT, and PMO teams that need audit-ready delivery tracking.',
  },
];

export const toolCategories = [...new Set(allocationTools.map((tool) => tool.category))];
