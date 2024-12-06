import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong drive for creating modern and efficient web applications. With hands-on experience gained through internships and academic projects, I have built expertise in front-end technologies like React and back-end tools like Node.js, MySQL, and MongoDB. My focus is on crafting innovative solutions that combine functionality with seamless user experiences, and I am eager to contribute to impactful projects that push the boundaries of technology`;

export const ABOUT_TEXT = `As a recent graduate with a degree in software engineering, I am excited to take the next step in my career and apply my knowledge to real-world challenges. Throughout my academic journey and internships, I have developed a solid foundation in technologies like React, Node.js, and MySQL. Now, I aim to refine these skills further and gain hands-on experience by working on impactful projects. My ultimate goal is to grow into a highly skilled software engineer who delivers efficient and innovative solutions. I am passionate about continuous learning, problem-solving, and collaborating with teams to create software that makes a difference.`;

export const EXPERIENCES = [
  {
    year: "2024 (March - June)",
    role: "Full Stack Developer Intern",
    company: "OCP Port de Casablanca",
    description: `
      Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
      Designed and implemented microservices-based solutions with Spring Cloud.
      Collaborated with cross-functional teams to deliver projects on time.
    `,
    technologies: ["MongoDB", "React.js", "Node.js", "Express.js", "Spring Cloud"],
  },
  {
    year: "2023 (July - August)",
    role: "Frontend Developer Intern",
    company: "Nextronic, Casablanca",
    description: `
      Built responsive and interactive user interfaces using React.js and Node.js.
      Integrated RESTful APIs for seamless frontend-backend communication.
      Optimized frontend performance for improved user experience.
    `,
    technologies: ["React.js", "Node.js", "HTML5", "CSS3"],
  },
  {
    year: "2022 (July - August)",
    role: "Backend Developer Intern",
    company: "Nextronic, Casablanca",
    description: `
      Designed and developed backend scripts using Python.
      Implemented features to improve internal data management.
      Conducted testing and debugging to ensure application reliability.
    `,
    technologies: ["Python", "MySQL"],
  },
  {
    year: "2021 (May)",
    role: "Junior Developer Observer",
    company: "ENSA, Khouribga",
    description: `
      Gained foundational programming skills in Java through academic workshops.
      Participated in activities to understand core computer science concepts.
    `,
    technologies: ["Java"],
  },
];


export const PROJECTS = [
  {
    title: "Bank Management Application",
    image: project1,
    description:
      "Developed a banking management application to handle customer accounts and transactions using C++.",
    technologies: ["C++"],
    date: "March 2022",
  },
  {
    title: "Web Application with Django",
    image: project2,
    description:
      "Designed and implemented a web application with user authentication and data management using Django.",
    technologies: ["Django", "Python"],
    date: "April 2022",
  },
  {
    title: "Web Application with Node.js and React",
    image: project3,
    description:
      "Built a full-stack web application featuring real-time data handling and dynamic user interfaces.",
    technologies: ["Node.js", "React"],
    date: "February 2023",
  },
  {
    title: "Bank Management System",
    image: project4,
    description:
      "Created an advanced banking system for account and transaction management using J2EE and Angular.",
    technologies: ["J2EE", "Angular"],
    date: "May 2023",
  },
];

export const CONTACT = {
  address: "Casablanca, Morocco",
  phoneNo: "+212 635 675 795",
  email: "ilyas.chani.dev@gmail.com",
};

