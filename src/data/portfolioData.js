export const portfolioData = {
  personal: {
    name: "Kirithika Srinivasan",
    title: "Integrated M.Tech, CSE | Frontend & Data Analyst",
    scriptTitle: "frontend & data analyst.",
    phone: "+91 9360303848",
    email: "kirithikasrini04@gmail.com",
    address: "F8 Sree Apartments, 9 Subba Street, West Mambalam, Chennai - 600033, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/kirithika-srinivasan-8b3555257",
    github: "https://github.com/kirithikasrini",
    leetcode: "https://leetcode.com/u/kirithika_srini04/",
    objective: "I build clean, user-focused web interfaces and turn raw data into clear insights. As an Integrated M.Tech CSE student, I’m looking for opportunities where frontend development and data analysis come together to solve real problems.",
    cgpa: "8.56",
    idNumber: "KS-CSE-2022",
    photoUrl: "/kirithika.jpg"
  },
  // Alias for backward compatibility
  get hero() {
    return this.personal;
  },

  education: [
    {
      institution: "Sri Sairam Engineering College",
      degree: "Integrated M.Tech, CSE",
      score: "8.56 CGPA",
      period: "Since 2022",
      badge: "Current"
    },
    {
      institution: "GRT Mahalakshmi Vidyalaya",
      degree: "12th grade",
      score: "Higher Secondary",
      period: "May 2022",
      badge: "Schooling"
    },
    {
      institution: "Sri B.S Mootha Girls Senior Secondary School",
      degree: "10th Grade",
      score: "Secondary",
      period: "April 2020",
      badge: "Schooling"
    }
  ],

  experience: [
    {
      company: "Team Tweaks Technologies Pvt. Ltd",
      role: "Frontend Development Intern",
      mode: "On-site",
      period: "June 2025 – July 2025",
      description: "Built responsive, user-friendly web applications using React.js, Tailwind CSS, and REST APIs. Created reusable UI components, managed state with React Hooks, and implemented dynamic routing with React Router. Integrated mock REST APIs using Axios and JSON Server, delivering a smooth experience across screen sizes."
    },
    {
      company: "Lluminant Works Solution Pvt Ltd",
      role: "Data Analyst Intern - MDM",
      mode: "On-site",
      period: "June 2024 – July 2024",
      description: "Managed enterprise datasets in PostgreSQL and performed data validation to improve data quality and consistency. Used SQL and Java to support data processing and workflow automation. Presented project findings and contributed to Master Data Management (MDM) initiatives."
    }
  ],

  projects: [
    {
      id: "herbal-plant",
      title: "AI - based Herbal Plant Recognition",
      tools: ["Computer Vision", "TFlite", "Image Processing"],
      category: "Computer Vision + TFlite",
      bullets: [
        "Applied computer vision to automate herbal plant species identification, and medicinal research.",
        "Implemented real - time plant identification pipeline using image processing and prediction confidence scores."
      ],
      githubUrl: "https://github.com/kirithikasrini/herbal_plant-detection",
      publicationUrl: "https://doi.org/10.1007/978-3-032-13029-7_3",
      publicationLabel: "Springer Nature CCIS Published"
    },
    {
      id: "hostel-mgmt",
      title: "Hostel Management Web Application – Sri Sairam Engineering College",
      tools: ["React", "REST API", "Tailwind CSS"],
      category: "React & REST API",
      bullets: [
        "Automated hostel operations and reduced paperworks by enabling digital management of students records, rooms allocation and attendance tracking.",
        "Enabled centralized access for wardens and students with role-based workflows."
      ],
      githubUrl: "https://github.com/sairams-hostel/hostel_management-client"
    },
    {
      id: "walmart-sales",
      title: "Walmart Sales Data Analysis",
      tools: ["Pandas", "Matplotlib", "Seaborn"],
      category: "Data Analysis",
      bullets: [
        "Analysis Walmart’s sales data to uncover trends and patterns in product performance across regions.",
        "Provided actionable insights to inform business strategies and inventory management."
      ],
      githubUrl: "https://github.com/kirithikasrini"
    },
    {
      id: "customer-churn",
      title: "Customer Churn Analytics & Prediction System",
      tools: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly"],
      category: "Machine Learning & Streamlit",
      bullets: [
        "Developed an end-to-end customer churn prediction system by performing data preprocessing, feature engineering, exploratory data analysis, and machine learning model development."
      ],
      githubUrl: "https://github.com/kirithikasrini/Customer_Churn"
    }
  ],

  skills: {
    programming: ["Python", "Java"],
    web: ["React.JS", "Tailwind CSS", "Bootstrap"],
    database: ["PostgreSQL", "MySQL", "MongoDB"],
    dataScience: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
    tools: ["Excel", "Seaborn", "Matplotlib", "Tableau"]
  },

  awards: [
    {
      title: "EXCELATHON 2.0 Hackathon",
      honor: "Overall Winner | Logistics & Transportation Domain | Virtusa",
      date: "June 2026",
      bullets: [
        "Led the development of a complete Last-Mile Delivery & Driver Tracking System featuring a dispatcher dashboard and Android driver application.",
        "Implemented real-time GPS tracking, route assignment, proof of delivery, and failed-delivery management using Spring Boot, Vue.js, Kotlin, and MySQL.",
        "Delivered and deployed a scalable solution that addressed real-world logistics challenges, earning the Overall Winner award."
      ]
    },
    {
      title: "NCAAIET ’24 – Best paper award",
      honor: "National Conference on Advancement in Artificial Intelligent and Emerging Trends, Sri Sairam Engineering College",
      date: "Sept 2024",
      bullets: [
        "Presented a paper on an AI-based medicinal plant identification app using machine learning for accurate species detection.",
        "Recognized for promoting AI in sustainable healthcare and pharmaceutical research."
      ]
    },
    {
      title: "INSPIRATHON 3.0",
      honor: "Sri Sairam Engineering College – Second Prize",
      date: "April 2026",
      bullets: [
        "Awarded Second Prize for developing Smart Herbal Detector for AYUSH and Community Healthcare under the UN Sustainable Development Goal (SDG 15): Life on Land.",
        "Designed an AI-powered solution for medicinal plant identification to support AYUSH practices, promote biodiversity conservation, and enable accessible community healthcare through accurate plant recognition."
      ]
    },
    {
      title: "NPTEL Motivated Learner + Discipline Star (CSE) - Certificate",
      honor: "SWAYAM / NPTEL",
      date: "Jul -Dec 2025",
      bullets: [
        "Awarded dual recognition for excellence and consistent performance across multiple Computer Science NPTEL courses."
      ]
    },
    {
      title: "NPTEL Domain Based – Data Science (CSE) – Certificate",
      honor: "SWAYAM / NPTEL",
      date: "Jan -June 2026",
      bullets: [
        "Earned the NPTEL Domain Certificate in Data Science by successfully completing the required set of NPTEL courses in Data Science with qualifying performance."
      ]
    }
  ],

  publications: [
    {
      title: "Springer Publication – Medicinal Plant Identification using Image Processing",
      venue: "Communications in Computer and Information Science (CCIS), Vol. 2654, Springer (AAIMB 2024)",
      date: "Jan 2026",
      doiUrl: "https://doi.org/10.1007/978-3-032-13029-7_3",
      doiText: "DOI: 10.1007/978-3-032-13029-7_3 - Improving Medicinal Plant Identification with Grayscale and Canny Edge Detection",
      summary: "Improved plant classification performance using image processing techniques."
    }
  ],

  volunteering: [
    {
      role: "Organizer – 24 hours Hackathon",
      organization: "Sri Sairam Engineering College",
      period: "Oct 2025",
      bullets: [
        "Organized a 24-hour National – Level Hackathon “CodeCraft’25”, ensuring smooth coordination across all event sessions and technical tracks.",
        "Facilitated participation from 80+ teams representing multiple college with diverse domains including AI/ML, Web development and Mobile App Development."
      ]
    },
    {
      role: "Volunteer – Hackathon Support Team",
      organization: "Sri Sairam Engineering College",
      period: "Sept 2024",
      bullets: [
        "Actively supported the organizing team during the 2-Day National Level Hackathon “CodeCraft’24”, ensuring smooth coordination across event sessions."
      ]
    },
    {
      role: "Volunteer – Eco-Friendly Recycling Service Station Inauguration",
      organization: "Sri Sairam Engineering College",
      period: "Nov 2022",
      bullets: [
        "Volunteered in organizing and supporting the inauguration of the Eco-Friendly Recycling Service Station (Solid Waste Management) under the Unnat Bharat Abhiyan (UBA) initiative, promoting sustainable waste management and environmental awareness on campus."
      ]
    }
  ]
};
