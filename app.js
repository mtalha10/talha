// app.js
const siteProps = {
  name: "Muhammad Talha",
  title: "Data Scientist",
  email: "talhaanwarr6@gmail.com",
  gitHub: "mtalha10",
  linkedIn: "mtalha10",
};

// Smooth scrolling to portfolio section
// function scrollToPortfolio() {
//   const portfolioSection = document.getElementById('portfolio');
//   portfolioSection.scrollIntoView({ behavior: 'smooth' });
// }


// Update the DOM with the site properties
document.getElementById("name").textContent = siteProps.name;
document.getElementById("title").textContent = siteProps.title;
document.querySelector(".about-description").textContent = "I'm a Computer Science student studying at Szabist,Islamabad. Associate Data Scientist, proficient in Python, SQL, and machine learning, as well as leadership in technology as a Microsoft Beta Student Ambassador.";

// Build the skills list
const skillsList = [
  "Python & SQL",
  "Data Manipulation and Analysis",
  "Machine learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
];
const skillsListElement = document.querySelector(".skills-list");
skillsList.forEach((skill) => {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillsListElement.appendChild(skillItem);
});

// Build the portfolio projects
const projectList = [
  {
    title: "Health and Fitness App: A Machine Learning-Based App",
    description: "Health and Fitness App helps monitor, improve well-being through tracking activity, sleep, calories.",
    url: "https://github.com/mtalha10/Health-and-Fitness-App",
  },
  {
    title: "Spotify: Predicting Track Popularity with Music Analytics",
    description: "This project analyzes a Spotify track dataset to explore music genres. It includes EDA, visualizations, ML models to predict popularity.",
    url: "https://github.com/mtalha10/Spotify-Data-Predicting-Track-Popularity-with-Music-Analytics",
  },
  {
    title: "My Resume Site",
    description: "Created my resume with FRont-End Development techniques and deployed to GitHub pages and Azure.",
    url: "https://github.com/mtalha10/portfolio",
  },
  {
    title: "Building NLP Applications with Hugging Face",
    description: " i leveraged cutting-edge NLP techniques to analyze fashion reviews and extract insights.",
    url: "https://github.com/mtalha10/NLP-Application-with-Hugging-Face-",
  },
];

const portfolioProjectsElement = document.querySelector(".portfolio-projects");
projectList.forEach((project) => {
  const projectBox = document.createElement("div");
  projectBox.classList.add("box");

  const projectLink = document.createElement("a");
  projectLink.href = project.url;
  projectLink.target = "_blank";
  projectLink.rel = "noopener noreferrer";

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("small");
  projectDescription.textContent = project.description;

  projectLink.appendChild(projectTitle);
  projectBox.appendChild(projectLink);
  projectBox.appendChild(projectDescription);
  portfolioProjectsElement.appendChild(projectBox);
});

// Build the social links
const socialLinks = [
  { icon: "images/socials/envelope.svg", link: `mailto:${siteProps.email}` },
  { icon: "images/socials/github.svg", link: `https://github.com/${siteProps.gitHub}` },
  { icon: "images/socials/linkedin.svg", link: `https://www.linkedin.com/in/${siteProps.linkedIn}` },
];

const socialLinksElement = document.querySelector(".social-links");
socialLinks.forEach((link) => {
  const socialLink = document.createElement("a");
  socialLink.href = link.link;
  socialLink.target = "_blank";
  socialLink.rel = "noopener noreferrer";

  const socialIcon = document.createElement("img");
  socialIcon.src = link.icon;
  socialIcon.alt = link.icon.split("/").pop().split(".")[0];
  socialIcon.classList.add("social-icon");

  socialLink.appendChild(socialIcon);
  socialLinksElement.appendChild(socialLink);
});

// Set the footer text
document.querySelector(".footer-text").textContent = `© ${siteProps.name}`;