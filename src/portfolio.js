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
      role: "Software Engineer",
      company: "Wisethug",
      companylogo: require("./assets/images/wisethug.JPG"),
      date: "May 2024 – July 2024",
      desc: "Worked as a full stack developer and created an E-commerce Website for them",
      descBullets: [
        "Implemented a Responsive Design that allowed the application to be used on various devices with the same user experience",
        "Using Flask created a seamless experience for users",
        "Created a fully functional E-commerce website"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some projects I worked on, shaping tech with passion and innovation",
  projects: [
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "AI-Powered Healthcare Solution",
      projectDesc:
        "Developed a machine learning-based healthcare platform that predicts disease outcomes and helps doctors make better decisions. Technologies: Python, TensorFlow, Flask.",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Moksh-2502/Hackathon"
        }
      ]
    },
    {
      image: require("./assets/images/project.jpeg"),
      projectName: "Naari-Suraksha",
      projectDesc:
        "An app and an integration for women safety with features like helpline button to ai detection you can read more on github",
      footerLink: [
        {
          name: "View Project Details",
          url: "https://github.com/Mayank4352/Naari-Suraksha"
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
  resumeSection
};
