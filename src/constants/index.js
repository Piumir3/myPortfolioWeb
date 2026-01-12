import {
  API,
  atomicDesign,
  backend,
  bootstrap,
  companyIcon,
  creator,
  css,
  figma,
  fms,
  git,
  html,
  javascript,
  angular,
  lms,
  mobile,
  pdc,
  reactjs,
  tailwind,
  ts,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
  },
  {
    title: "Data-Driven UI",
    icon: backend,
  },
  {
    title: "Responsive Web Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Axienta (Pvt) Ltd",
    icon: companyIcon,
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Contributed to full-stack development of the SFA Dashboard project, utilizing Angular, ASP.NET Core Web API, Kendo UI, and MS SQL.",
      "Designed diagrams, documentation, and database structures, collaborating with teams to support project development.",
      "Utilized Visual Studio Code and Visual Studio for development, with Postman for API testing and SonarQube for code quality assurance.",
      "Participated in code reviews, gaining hands-on experience in software engineering practices and providing feedback to peers.",
    ],
  },
  {
    title: "Web Developer (Contract Basis)",
    company_name: "Hello Better Digital",
    icon: companyIcon,
    iconBg: "#383E56",
    date: "Dec 2023 - May 2024",
    points: [
      "Developed web applications using PHP, Silverstripe, React.js, and MySQL, leveraging Visual Studio Code and WebStorm for efficient coding.",
      "Engaged in group projects, including the Cloak Project, collaborating with team members to deliver high-quality solutions.",
      "Utilized Postman for API testing to ensure seamless backend integration.",
      "Participated in code reviews, leveraging SonarQube to maintain code quality and provide constructive feedback.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Parallax Technologies",
    icon: companyIcon,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Contributed to group projects such as the Searle Medical Project and Trans Express, using React.js and Tailwind CSS for responsive front-end development.",
      "Developed and maintained web applications with Visual Studio Code and WebStorm, ensuring efficient development workflows.",
      "Tested APIs using Postman and maintained code quality with SonarQube.",
      "Collaborated with cross-functional teams, participating in code reviews to enhance project outcomes.",
    ],
  },
];

const blogPosts = [
  {
    title:
      "Atomic Design in React: A Beginner’s Guide to Scalable UI Development",
    url: "https://piumir4.medium.com/atomic-design-in-react-a-beginners-guide-to-scalable-ui-development-1a339c5fcf7a",
    thumbnail: atomicDesign, // add local image or use a preview link if available
  },
  {
    title: "Understanding REST APIs: An Introduction for Beginners",
    url: "https://piumir4.medium.com/understanding-rest-apis-an-introduction-for-beginners-1f8252d1959a",
    thumbnail: API,
  },
  {
    title: "Angular and TypeScript: Introduction and Best Practices",
    url: "https://piumir4.medium.com/angular-and-typescript-introduction-and-best-practices-5a9e4997ea58",
    thumbnail: ts,
  },
];

const projects = [
  {
    name: "Sales Management System",
    description:
      "The aim of the project is to provide an easy solution to establishing a real-time communication between the off-site sales team and the onsite team handling sales and admin operations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: fms,
    source_code_link:
      "https://github.com/Piumir3/Field_Sales_Automation_System-WEB",
    source_code_link_mobile:
      "https://github.com/Piumir3/Field_Sales_Automation_System",
  },
  {
    name: "Library Management System",
    description:
      "The system builds an application to reduce the manual work of managing books, students, and librarians and maintaining the catalog of a library with keeping whole transactions of books.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "My SQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/IsharaSilva/Titans",
  },
  {
    name: "Potato Disease Prediction System",
    description:
      "Develop a system to detect diseases for potatoes and provide solutions for identifying diseases. Use ML algorithms to predict diseases based on images of potato leaves.",
    tags: [
      {
        name: "Image Processing",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: pdc,
    source_code_link:
      "https://github.com/IsharaSilva/Prediction-Recommedation-system-for-Potato-Cultivation",
  },
];

export { blogPosts, experiences, projects, services, technologies };
