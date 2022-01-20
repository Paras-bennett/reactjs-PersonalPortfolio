// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "PARAS JAIN",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am capable of everything from hand coding to project management. My immediate objective is to utilize my effective communication skills and innate technical abilities in a progressive environment that seeks to lead their industry or respective disciplines. "
    
    
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "C++",
    // svg: '',
    faClass: "fab fa-cuttlefish",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "SQL",
    // svg: '',
    faClass: "fas fa-database",
  }
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Work Experience";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Software Analyst Trainee",
    skills: ["OnGraph Technologies Limited "],
    time:"[Sept 2021 - Dec 2021]",
    url: "https://www.ongraph.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Map Creator Community Program",
    skills: ["Here Technologies "],
    time: "[Jun 2021 - Aug 2021]",
    url: "https://mapcreator.here.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Cyber Security Intern",
    skills: ["CISCO "],
    time:"[Jun 2021 - Jul 2021]",
    url: "https://bookmedia.co/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Fullstack Developer Intern",
    skills: ["Bookmedia Publishing "],
    time:"[Mar 2021 - May 2021]",
    url: "https://www.linkedin.com/company/rexoralabs/?originalSubdomain=in",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Front-end Developer Intern",
    skills: ["Rexora Edulabs Pvt. Ltd. "],
    time:"[Feb 2021]",
    url: "https://www.bennett.edu.in/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Bachelors in Technology",
    skills: ["Bennett University "],
    time:"[2018 - 2022]",
    url: "https://github.com/kaustubhai",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Projects";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Tracker Application",
    url: "https://github.com/Paras-bennett/tracker",
    info : "Tracker is a team communication application that unifies team objectives and improves workflow."
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Red Light - Green Light",
    url: "https://github.com/Paras-bennett/squid_game",
    info : "This is a simple clone of Squid Game's First Task [RED LIGHT, GREEN LIGHT] using Three.js."

  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Grayscale to Color Conversion",
    url: "https://github.com/Paras-bennett/gray-to-color",
    info: "Converting Grayscale Images to Colored Images using CNN. Used Modules: sys, PIL, deepcopy, sklearn."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc4",
    name: "YouTube Clone Website",
    url: "https://github.com/Paras-bennett/YouTube-cl0ne",
    info: "A Reactjs YouTube Clone Website where you can search and upload videos."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc5",
    name: "Social Distance Detection",
    url: "https://github.com/Paras-bennett/social-distance-detection",
    info: "A detector that detects whether the people is maintaining the physical distance or not."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc6",
    name: "E-commerce Website",
    url: "https://github.com/Paras-bennett/e-commerce",
    info: "A fully functional eCommerce web application using commerce.js. Skill used React.js"
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc7",
    name: "Drowsiness Detection System",
    url: "https://github.com/Paras-bennett/DROWSINESS_DETECTION",
    info: "A Driver sleeping alert system that could find if a person had closed his/her for a longer period of time."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc8",
    name: "Movies Review Android App",
    url: "https://github.com/Paras-bennett/Movie_APP",
    info: "An application to help users discover popular movies and also provides a detail view for each movie."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc9",
    name: " Hulu Clone Website",
    url: "https://hulu-cl0ne.netlify.app/",
    info: "A complete UI Clone of Hulu website using Reactjs where you can search for movies."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc10",
    name: "Netflix Clone Website",
    url: "https://netfl1x-clone.netlify.app/",
    info: "A complete UI Clone of Netflix website using Reactjs where you can see the subscription pricing and surf movies."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc11",
    name: "BIOMETRIC ATTENDANCE SYSTEM",
    //url: "https://github.com/Paras-bennett/Movie_APP",
    info: "A microcontroller-based project of marking of attendance using ATMega32 8bit microcontroller."
  },
  {
    // Add image in './styles/images.css' in #misc4
    id: "misc12",
    name: "SMART IRRIGATION SYSTEM",
    //url: "https://github.com/Paras-bennett/Movie_APP",
    info: "A cost effective system which conserves electricity and water by pumping water according to the humidity and temperature change of the soil."
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me through my socials or Email.",
  copyright: "Paras Jain",
  contactUrl: "https://formspree.io/f/xrgjeark",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Paras-bennett",
  facebook: "https://www.facebook.com/parasj08/",
  twitter: "https://twitter.com/Parasjain323",
  instagram: "https://www.instagram.com/paras_j_08/",
  linkedin: "https://www.linkedin.com/in/paras-jain08/",
  resume : "https://drive.google.com/file/d/1Ay6Py7aNksMjb1nkmrrRmBp1QNgnYtOg/view?usp=sharing"
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
