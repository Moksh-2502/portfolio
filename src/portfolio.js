import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Moksh",
  title: "Hi all, I'm Moksh",
  subTitle: emoji(
    "I am an aspiring developer,from building ai models to full stack development i like to do it all as every project brings something new to learn"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DC1RHleNPATbt6Cr3h5vQE9OwhR77cUl/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Moksh-2502",
  linkedin: "https://www.linkedin.com/in/moksh-mehndiratta-a70989297/",
  gmail: "mokshmdg40@gmail.com",
  instagram: "https://www.instagram.com/moksh_pvtt_/",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "I Create",
  skills: [
    emoji("From poetry in books to poetry in python"),
    emoji("Solving maze to Solving Leetcode"),
    emoji("Optimizing models to search engine optimization")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "flask", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Tensorflow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "keras", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/download.jpeg"),
      subHeader: "Batchelor of Science in Computer Science",
      duration: "September 2022 - April 2026",
      desc: "Some Bad decisions to ",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "60%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Programming", progressPercentage: "90%" },
    { Stack: "Ai & Ml", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI-First Software Engineer II",
      company: "Trilogy (via Crossover)",
      companylogo: require("./assets/images/trilogy.png"),
      date: "April 2025 – Present",
      desc: "Leading AI-powered SaaS product development",
      descBullets: [
        "Engineered AI-powered functionality for enterprise SaaS platforms using TypeScript, Angular, and NestJS with LangChain microservices",
        "Maintained 100% test coverage in clean-architecture codebase with automated CI/CD via GitHub Actions",
        "Led KBFS team focusing on secure file systems and contributed to Flow.ai development for intelligent automation workflows"
      ]
    },
    {
      role: "Tech Manager",
      company: "Wisethug Pvt Ltd",
      companylogo: require("./assets/images/wisethug.JPG"),
      date: "May 2023 – September 2024",
      desc: "Led marketplace platform development with high availability",
      descBullets: [
        "Architected and deployed a Flask + React marketplace supporting 10K daily active users with 99.9% uptime",
        "Implemented AWS Elastic Beanstalk deployment with auto-scaling for consistent performance during traffic spikes",
        "Managed development team and release cycles while optimizing user acquisition funnel"
      ]
    },
    {
      role: "Software Developer",
      company: "Techtale",
      companylogo: require("./assets/images/techtale.png"),
      date: "January 2025 – April 2025",
      desc: "Optimized full-stack solutions for performance and scalability",
      descBullets: [
        "Built responsive interfaces with React and Next.js following modern UI/UX principles",
        "Developed Node.js backend services with optimized MongoDB queries reducing API latency by 40%",
        "Implemented RESTful APIs and real-time features using WebSockets for dynamic content delivery"
      ]
    },
    {
      role: "Operations Manager",
      company: "Chegaro",
      companylogo: require("./assets/images/chegaro.png"),
      date: "September 2024 – March 2025",
      desc: "Transformed e-commerce operations for efficiency and customer satisfaction",
      descBullets: [
        "Reduced customer resolution time from 18 hours to 6 hours through automated email systems",
        "Implemented priority queue system for support tickets based on customer tier and issue severity",
        "Streamlined inventory management and order fulfillment processes improving delivery metrics by 35%"
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Innovative solutions showcasing technical expertise and creative problem-solving",
  projects: [
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "NariSuraksha",
      projectDesc:
        "Women's safety mobile app with emergency SOS alerts, cloud video upload, and AI-powered gesture recognition for threat detection.",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Mayank4352/Security"
        }
      ]
    },
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "MoneyLand",
      projectDesc:
        "Blockchain platform for real estate tokenization enabling fractional property ownership with secure smart contracts and transparent transactions.",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Moksh-2502/MoneyLand"
        }
      ]
    },
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "HealthBound",
      projectDesc:
        "AI-powered medical diagnostic tool predicting 2,000+ conditions with 90% accuracy from symptoms input, supporting early diagnosis.",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Moksh-2502/Hackathon"
        }
      ]
    },
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "Token Launchpad",
      projectDesc:
        "dApp for creating and deploying custom ERC-20 tokens on Polygon with configurable parameters and live contract preview functionality.",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Moksh-2502/token-launchpad"
        }
      ]
    },
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "ragktflow",
      projectDesc:
        "Open-source RAG system for developer knowledge transfer with contextual documentation search and automated code assistance.",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Moksh-2502/ragktflow"
        }
      ]
    }
  ],
  display: true
};



const blogSection = {
  title: "Blogs",
  subtitle: "Alongside Developing I like to write to, you can read some at",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/@aparu/never-regret-thy-fall-o-icarus-661fe91342b52",
      title: "Never regret thy fall , O Icarus",
      description:
        "supressed"
    },
    {
      url: "https://medium.com/@aparu/eres-mio-bcb976795a9b",
      title: "Eres Mio",
      description:
        "A Dream."
    }
  ],
  display: true
};




const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const certificationsSection = {
  title: "Certifications & Achievements",
  subtitle: "Professional development and recognition",
  certifications: [
    {
      title: "AI-First Engineer at Trilogy",
      subtitle: "Selected via rigorous multi-stage Crossover hiring process focused on performance.",
      logo: require("./assets/images/trilogy.png"),
      certificate_link: ""
    },
    {
      title: "Object-Oriented Data Structures in C++",
      subtitle: "UIUC | Grade: 99%",
      logo: require("./assets/images/oops.jpeg"),
      certificate_link: "https://coursera.org/verify/JH8UBFPMR5Y2"
    },
    {
      title: "Exploratory Data Analysis for ML",
      subtitle: "IBM | Grade: 97.5%",
      logo: require("./assets/images/ibm.jpeg"),
      certificate_link: "https://coursera.org/verify/HUDVXSYFYLAJ"
    },
    {
      title: "Supervised ML: Classification",
      subtitle: "IBM | Grade: 91.6%",
      logo: require("./assets/images/supervised.jpeg"),
      certificate_link: "https://coursera.org/verify/37U3649Y23HL"
    },
    {
      title: "Unsupervised Machine Learning",
      subtitle: "IBM | Grade: 97.6%",
      logo: require("./assets/images/unsupervised.jpeg"),
      certificate_link: "https://coursera.org/verify/GJF2BSADMUZM"
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "DeepLearning.AI | Grade: 97.6%",
      logo: require("./assets/images/deep.jpeg"),
      certificate_link: "https://coursera.org/verify/D0UN7YWVWA2Z"
    },
    {
      title: "Smart India Hackathon Internal Round",
      subtitle: "Qualified from 100+ teams for SIH internal selection.",
      logo: require("./assets/images/sih.png"),
      certificate_link: ""
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "You can reach out to me.",
  number: "+91-6280253587",
  email_address: "mokshmdg40@gmail.com"
};


const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection,
  certificationsSection
};
