/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const AI_CONFIG = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
};

export const genAI = new GoogleGenAI({ apiKey: AI_CONFIG.apiKey });

export const CV_DATA = {
  name: "Satya Prakash",
  title: "CSE AI & ML Engineering Student",
  tagline: "Building Intelligent Systems through AI, ML & Software Development",
  contact: {
    phone: "+91 7061800527",
    email: "satya2006prakash@gmail.com",
    location: "Tumkur, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/satya-prakash-2b837a366?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/satya2006prakash",
    instagram: "https://www.instagram.com/niku_modi.official?igsh=MmdrY2Q4eGN1MnV4",
    x: "https://x.com/niku_modi_2006"
  },
  about: "I am a first-year Computer Science and Engineering student with a specialization in Artificial Intelligence and Machine Learning (AI & ML). I have a strong interest in Artificial Intelligence, Machine Learning, and Software Development, and I am passionate about learning how intelligent systems work and how technology can be used to solve real-world problems. My areas of interest include Python programming, Java, and C programming. I am actively building my technical skills through academic projects, coding practice, and online learning platforms. I enjoy participating in hackathons, technical events, and collaborative activities that help me enhance my problem-solving, teamwork, leadership, and communication skills. I am eager to explore emerging technologies and continuously expand my knowledge to develop innovative and impactful solutions in the field of AI and Machine Learning.",
  personalInfo: {
    dob: "17 July 2006",
    gender: "Male",
    nationality: "Indian",
    profilePic: "/src/profile.jpg",
    languages: ["English", "Hindi", "Balake Kannada"],
    availability: "Open to Opportunities"
  },
  education: [
    {
      degree: "Bachelor Of Engineering — C.S.E (AI & ML)",
      period: "2025 – 2029",
      institution: "Siddaganga Institute of Technology, Tumkur, Karnataka",
      score: "CGPA: 7.9 / 10",
      link: "https://sit.ac.in/",
      description: "Focusing on Artificial Intelligence, Machine Learning, and core Software Engineering principles. Actively building technical skills through academic coding, algorithm design, and exploring emerging intelligent technologies."
    },
    {
      degree: "School (12th) — Science (PCM)",
      period: "2023 – 2025",
      institution: "Adarsh +2 Uchcha Vidyalaya, Koderma, Jharkhand",
      score: "70% (CBSE Board)",
      link: "https://adarshvidyalaya.org.in/Home-Page",
      description: "Built a strong academic foundation in Physics, Chemistry, Mathematics while improving analytical thinking, discipline, and problem-solving skills."
    },
    {
      degree: "School (10th)",
      period: "2011 – 2023",
      institution: "St. Clare's School, Koderma, Jharkhand",
      score: "85% (ICSE Board)",
      link: "https://www.stclaresschoollokai.com/",
      description: "Provided a strong academic foundation while also encouraging participation in extracurricular activities, teamwork, and continuous learning."
    }
  ],
  skills: [
    { name: "Python Programming", level: 90, icon: "code" },
    { name: "Machine Learning", level: 75, icon: "brain" },
    { name: "Java", level: 80, icon: "terminal" },
    { name: "C Programming", level: 85, icon: "cpu" },
    { name: "Graphic Design", level: 88, icon: "palette" },
    { name: "Video Editing", level: 85, icon: "video" },
    { name: "Vibe Coding", level: 92, icon: "sparkles" },
    { name: "Problem Solving", level: 95, icon: "puzzle" }
  ],
  projects: [
    {
      id: "01",
      name: "College FAQ ChatBot",
      tech: ["HTML", "CSS", "JavaScript", "NLP"],
      description: "An Innovation and Design Thinking Laboratory project at Siddaganga Institute of Technology (SIT). Developed a web-based interactive chatbot providing instant, accurate, and user-friendly access to institutional information about admissions, courses, and campus life using keyword-based matching and dynamic responses. Features an integrated feedback system and admin panel."
    },
    {
      id: "02",
      name: "Money Manager Pro",
      tech: ["HTML", "CSS", "JavaScript", "Google Sheets API"],
      description: "Built a real-time expense and income tracker with live Google Sheets synchronization. Features include categorical budgeting and financial visualization for seamless money management."
    },
    {
      id: "03",
      name: "Nanocomposite Green Synthesis",
      tech: ["Nanotechnology", "Materials Science", "XRD Analysis", "PLA"],
      description: "An interdisciplinary research project at Siddaganga Institute of Technology (SIT) focused on the green synthesis of TiO2 nanoparticles and the development of sustainable PLA-TiO2 nanocomposites for electrical insulator applications. Conducted under the guidance of Dr. Rashmi, Head of Department, Electronics and Electrical Engineering."
    },
    {
      id: "04",
      name: "Personal Portfolio Website",
      tech: ["React", "Vite", "Tailwind CSS", "Vibe Coding"],
      description: "Created a personal portfolio website using 'Vibe Coding' to showcase my academic journey and technical skills. The site features interactive components, responsive design, and smooth animations using modern web technologies."
    }
  ],
  interests: [
    "Poster Designing", 
    "Video Editing", 
    "Photography", 
    "Videography", 
    "Canva", 
    "Thumbnails", 
    "Adobe Photoshop",
    "Artificial Intelligence",
    "Tech Innovation",
    "Hackathons"
  ]
};

