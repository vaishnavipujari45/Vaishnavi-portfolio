export const profile = {
  name: 'Vaishnavi Basavaraj Pujari',
  role: 'ASPIRING DATA ANALYST',
  tagline: 'Turning raw data into insights with SQL, Python & Power BI.',
  phone: '+91 9663892710',
  email: 'vaishnavipujari4444@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vaishnavi-pujari-602783256/',
  github: 'https://github.com/vaishnavipujari45',
  resumeFile: '/Vaishnavi_Pujari_DA_Resume.pdf',
  location: 'Belagavi, Karnataka, India',
  summary:
    "Aspiring Data Analyst skilled in SQL, Python, Excel, and Power BI with hands-on experience in data cleaning, exploratory data analysis, dashboard development, and business reporting through academic and self-driven projects. Proficient in transforming raw data into actionable insights that support data-driven decision-making and business growth.",
}

export const kpis = [
  { id: 'projects', label: 'Projects Shipped', value: 2, suffix: '', trend: '+2 this year' },
  { id: 'internships', label: 'Internships', value: 3, suffix: '', trend: 'AI/ML, Web x2' },
  { id: 'certifications', label: 'Certifications', value: 4, suffix: '', trend: 'Analytics, SQL, Python, BI' },
  { id: 'cgpa', label: 'CGPA', value: 8.16, suffix: '/10', trend: 'B.E. CS (AI & ML)' },
]

export const skills = [
  { name: 'SQL', level: 88, category: 'Database' },
  { name: 'Excel', level: 90, category: 'Data Analysis' },
  { name: 'Power BI', level: 85, category: 'Visualization' },
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'Pandas', level: 78, category: 'Programming' },
  { name: 'NumPy', level: 72, category: 'Programming' },
  { name: 'MySQL', level: 82, category: 'Database' },
  { name: 'Git', level: 70, category: 'Tools' },
]

// Categorized technical skills, rendered as an interactive radial skill map
// (not a table) — position is a percentage coordinate on the map canvas.
export const technicalSkillCategories = [
  {
    id: 'programming',
    name: 'Programming & Analysis',
    color: '#3B82F6',
    pos: { x: 50, y: 8 },
    skills: ['SQL', 'Python', 'Pandas', 'NumPy', 'Microsoft Excel'],
  },
  {
    id: 'visualization',
    name: 'Data Visualization',
    color: '#22D3EE',
    pos: { x: 90, y: 37 },
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 'database',
    name: 'Database Management',
    color: '#60A5FA',
    pos: { x: 75, y: 84 },
    skills: ['MySQL'],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    color: '#34D399',
    pos: { x: 25, y: 84 },
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Microsoft Office'],
  },
  {
    id: 'concepts',
    name: 'Core Concepts',
    color: '#FBBF24',
    pos: { x: 10, y: 37 },
    skills: [
      'Data Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Dashboard Creation',
      'Data Visualization',
      'Statistical Analysis',
    ],
  },
]

// Analytics focus areas — deliberately has NO numeric/percentage values.
// "Tools of the Trade" already covers proficiency, so this communicates
// *where the work happens* across the analytics lifecycle instead.
export const analyticsFocusAreas = [
  {
    name: 'Data Analysis',
    color: '#3B82F6',
    blurb: 'Cleaning & structuring raw datasets',
  },
  {
    name: 'Programming',
    color: '#60A5FA',
    blurb: 'SQL & Python for repeatable workflows',
  },
  {
    name: 'Data Visualization',
    color: '#22D3EE',
    blurb: 'Power BI, Tableau & Excel dashboards',
  },
  {
    name: 'Database',
    color: '#34D399',
    blurb: 'MySQL querying & schema design',
  },
  {
    name: 'Tools',
    color: '#FBBF24',
    blurb: 'Git, Jupyter & Microsoft Office workflow',
  },
]

export const projects = [
  {
    id: 'retail-sales',
    title: 'Retail Sales & Customer Insights Analysis',
    subtitle: 'SQL-driven retail performance dashboard',
    tags: ['SQL', 'Power BI', 'Excel'],
    description:
      'Analyzed 1,000+ retail transaction records to uncover sales trends and customer purchasing patterns, then built interactive dashboards to track KPIs.',
    features: [
      'Product, payment-mode & city-wise sales analysis',
      'Aggregate functions and GROUP BY queries at scale',
      'Interactive Power BI dashboards tracking live KPIs',
    ],
    insights: [
      { label: 'Records analyzed', value: '1,000+' },
      { label: 'Top product lines', value: 'Identified' },
      { label: 'Dimensions cut', value: 'City · Product · Payment' },
    ],
    repo: 'https://github.com/vaishnavipujari45/Retail-Sales-Customer-Insights-Analysis-.git',
    accent: '#3B82F6',
  },
  {
    id: 'cpi-inflation',
    title: 'India CPI Inflation Analysis',
    subtitle: 'Macro trend analysis in Excel',
    tags: ['Excel', 'Data Analysis'],
    description:
      "Cleaned and analyzed India's CPI dataset to identify inflation trends, running YoY/MoM breakdowns including food inflation and category contribution studies.",
    features: [
      'YoY and MoM inflation trend analysis',
      'COVID-19 & fuel price impact via correlation analysis',
      'Interactive Excel dashboards for category contribution',
    ],
    insights: [
      { label: 'Time cuts', value: 'YoY · MoM' },
      { label: 'Correlation studies', value: 'Fuel · COVID-19' },
      { label: 'Output', value: 'Interactive dashboards' },
    ],
    repo: 'https://github.com/vaishnavipujari45/India-CPI-Inflation-Analysis.git',
    accent: '#22D3EE',
  },
]

export const projectFilters = ['All', 'Excel', 'SQL', 'Power BI', 'Python']

export const certifications = [
  {
    id: 'c1',
    title: 'Introduction to Analytics & Excel',
    category: 'Data Analysis',
    link: 'https://drive.google.com/file/d/1c_I2f0a5zCudXhNT_Aj8lFV5TEG8FlKf/view?usp=drive_link',
  },
  {
    id: 'c2',
    title: 'SQL for Data Analysis',
    category: 'Data Analysis',
    link: 'https://drive.google.com/file/d/1h1r0yfQfWvkx5fMOu8NcR6_cvkbQR0d9/view?usp=drive_link',
  },
  {
    id: 'c3',
    title: 'Python Programming',
    category: 'Programming',
    link: 'https://drive.google.com/file/d/1ec5rAiT_uro8OwUjTNPH4wN4pgn1BnTZ/view?usp=drive_link',
  },
  {
    id: 'c4',
    title: 'Data Visualization with Power BI',
    category: 'Visualization',
    link: 'https://drive.google.com/file/d/1EQ_mWWc4QzY2UY7QXcrkxrMltKeqmZMp/view?usp=drive_link',
  },
]

// Derived automatically from `certifications` above so the chart can never
// drift out of sync with the actual certificate count/order.
export const certCategoryData = Object.values(
  certifications.reduce((acc, cert) => {
    const colors = { 'Data Analysis': '#3B82F6', Visualization: '#22D3EE', Programming: '#60A5FA' }
    if (!acc[cert.category]) {
      acc[cert.category] = { name: cert.category, value: 0, color: colors[cert.category] || '#34D399' }
    }
    acc[cert.category].value += 1
    return acc
  }, {})
)

export const timeline = [
  {
    id: 't1',
    type: 'experience',
    title: 'AI/ML Intern — Electric Vehicle Domain',
    org: 'VisionAstraa EV Academy',
    date: 'Feb 2026 – May 2026',
    points: ['Analyzed EV data & developed ML models for energy optimization', 'Data preprocessing in Python; studied vehicle charging patterns'],
    link: '#',
  },
  {
    id: 't2',
    type: 'project',
    title: 'Retail Sales & Customer Insights Analysis',
    org: 'Self-driven Project',
    date: '2026',
    points: ['SQL analysis on 1,000+ transactions', 'Power BI KPI dashboards'],
    link: '#',
  },
  {
    id: 't3',
    type: 'experience',
    title: 'Web Development Intern',
    org: 'InternPe',
    date: 'Aug 2025 – Sep 2025',
    points: ['Built web applications', 'Handled API data integration & processing'],
    link: '#',
  },
  {
    id: 't4',
    type: 'project',
    title: 'India CPI Inflation Analysis',
    org: 'Self-driven Project',
    date: '2025',
    points: ['YoY / MoM inflation analysis in Excel', 'Correlation studies on fuel & COVID-19 impact'],
    link: '#',
  },
  {
    id: 't5',
    type: 'experience',
    title: 'Web Development Intern',
    org: 'VaultofCodes',
    date: 'Apr 2025 – May 2025',
    points: ['Built responsive web pages', 'Integrated frontend & backend systems'],
    link: '#',
  },
  {
    id: 't6',
    type: 'education',
    title: 'B.E. Computer Science (AI & ML)',
    org: 'VTU Belagavi, Karnataka',
    date: '2022 – 2026',
    points: ['CGPA: 8.16'],
    link: '#',
  },
  {
    id: 't7',
    type: 'education',
    title: '12th (PCMC)',
    org: 'Karnataka Board',
    date: '2020 – 2022',
    points: ['79%'],
    link: '#',
  },
  {
    id: 't8',
    type: 'education',
    title: 'SSLC',
    org: 'Karnataka Board',
    date: '2019 – 2020',
    points: ['93.6%'],
    link: '#',
  },
]
