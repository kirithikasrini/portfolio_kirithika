# Kirithika Srinivasan — Editorial Personal Portfolio

A modern, high-end editorial personal portfolio inspired by the reference Instagram Reel, crafted with:
- **React.js & Vite**
- **Tailwind CSS**
- **Framer Motion** (smooth entrance transitions, floating identity card animation, hover states)
- **Lucide React** (icons)

---

## 🎨 Design Direction

- **Background:** `#F8F7F2` (Warm Ivory / Paper Tone)
- **Headings:** `Playfair Display` (High-fashion editorial serif)
- **Handwritten Accent:** `Caveat` (Blue script font for selected phrases)
- **Body & Clean Sans:** `Plus Jakarta Sans` with minimal black/grey tones (`#141414`, `#52504C`)
- **Accent Buttons:** Royal Blue (`#2563EB`, hover: `#1D4ED8`)
- **Spacing:** Generous whitespace, subtle borders (`#E6E3DA`), soft shadows (`shadow-soft-card`)

---

## 🏛️ Sections Built

1. **Hero Section (`src/components/Hero.jsx`):**
   - Left: Intro *"HELLO, I'M"*, large serif title *"Kirithika Srinivasan"*, blue script *"a software developer."*, description, and two CTA buttons (*"Explore My Work"* & *"Download Resume"*).
   - Right: A floating, slightly rotated digital identity card featuring Kirithika's portrait, role (*Software Developer | AI/ML Enthusiast*), verification chip, and decorative QR code graphic with continuous gentle floating motion.
2. **About Me (`src/components/About.jsx`):**
   - Heading: *"A little about me"*
   - Academic details: Integrated M.Tech in CSE at Sri Sairam Engineering College (Graduation year: 2027).
   - Core interests: Software Development, AI, Machine Learning.
   - Factual statistics: 2022–2027 Program Timeline, 3 Industry Internships, 3+ Featured Projects.
3. **Selected Work (`src/components/Projects.jsx`):**
   - Heading: *"Things I've created"*
   - Large project showcase cards with visual mockups and GitHub links:
     - **Customer Churn Prediction:** Machine Learning, Decision Tree & Random Forest (`https://github.com/kirithikasrini/Customer_Churn`).
     - **Herbal Plant Detection:** AI/ML-based herbal plant identification (`https://github.com/kirithikasrini/herbal_plant-detection`).
     - **Hostel Management System:** React-based web application (`https://github.com/sairams-hostel/hostel_management-client`).
4. **Experience (`src/components/Experience.jsx`):**
   - Clean vertical timeline:
     - **Team Tweaks Technologies** – Frontend Development Intern (June 2025 – July 2025)
     - **Lluminant Works Solutions** – Data Analyst Intern (June 2024 – July 2024)
     - **Jasper International Engineering Consultants** – Web Developer Intern (June 2024)
5. **Skills (`src/components/Skills.jsx`):**
   - Elegant text-based categories without artificial progress bars:
     - **Programming:** Java, Python, JavaScript
     - **Frontend:** React.js, HTML, CSS, Tailwind CSS
     - **Database:** PostgreSQL, SQL
     - **AI/ML:** Machine Learning, Data Preprocessing, Model Development
     - **Tools:** Git, GitHub, VS Code
6. **Achievements & Certifications (`src/components/Achievements.jsx`):**
   - Second Prize – Inspirathon 3.0 (Smart Herbal Detector), April 2026.
   - First Place – Paper and Poster Presentation, October 2025.
   - NPTEL Machine Learning Elite.
   - Google Cloud Foundations Elite.
7. **Contact (`src/components/Contact.jsx`):**
   - Heading: *"Let's create something meaningful."*
   - Direct email reach-out with instant copy button (`kirithikasrini04@gmail.com`).
   - Verified links to [LinkedIn](https://www.linkedin.com/in/kirithika-srinivasan-8b3555257) and [GitHub](https://github.com/kirithikasrini).
8. **Footer (`src/components/Footer.jsx`):**
   - Minimal copyright with back-to-top button.

---

## 💻 Running the Website Locally

Run the following command in your terminal (`d:\resume`):

```powershell
npm run dev
```

Then open `http://localhost:5173` in your browser.

To create a production build:
```powershell
npm run build
```
*(Production bundle built successfully into `/dist`)*.
