import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

const Work1 = "https://cdn.jsdelivr.net/gh/ChrisSlat0910/chris-portfolio-web@main/src/assets/project-1.jpeg";
const Work2 = "https://cdn.jsdelivr.net/gh/ChrisSlat0910/chris-portfolio-web@main/src/assets/project-2.jpg";
const Work3 = "https://cdn.jsdelivr.net/gh/ChrisSlat0910/chris-portfolio-web@main/src/assets/project-3.jpeg";
const Work4 = "https://cdn.jsdelivr.net/gh/ChrisSlat0910/chris-portfolio-web@main/src/assets/project-4.jpeg";
const Work5 = "https://cdn.jsdelivr.net/gh/ChrisSlat0910/chris-portfolio-web@main/src/assets/project-5.jpg";
const Work6 = "https://cdn.jsdelivr.net/gh/ChrisSlat0910/chris-portfolio-web@main/src/assets/project-6.jpg";

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Christovel',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Slat',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indonesian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'North Sulawesi, Manado',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+62 8956 1510 9851',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'chrisslat9@gmail.com',
  },

  {
    id: 9,
    title: 'linkedin: ',
    description: '-----',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Bahasa Indonesia, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '50+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '50+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '3',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - PRESENT',
    title: 'Web Developer',
    desc: 'I`ve worked as a freelance web developer, creating websites for various clients. My expertise lies in coding and designing user-friendly interfaces.Through these projects, I`ve gained proficiency in front-end and back-end development, delivering functional and visually appealing websites tailored to my clients` needs.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - Present',
    title: 'Graphic Designer',
    desc: 'As a freelance graphic designer, I`ve undertaken various projects, including logo design, poster creation, and social media graphics. Through these experiences, I`ve refined my skills in graphic design software and developed a keen eye for aesthetic composition and effective visual communication. Each project has been an opportunity for me to showcase my creativity and expertise in design.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - 2020',
    title: 'Video <span> Editor </span>',
    desc: 'As an amateur freelance video editor, I have worked on various small projects, developing my skills in video editing software and creativity. This hands-on experience has allowed me to refine my techniques and deliver engaging visual content.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2023',
    title: 'Bachelor of Computer Science - Manado State Polytechnic',
    desc: 'Here is where I pursued my Bachelor of Computer Science. During my studies there, I gained extensive knowledge and practical experience in the field of information technology, further solidifying my passion for the digital world.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016 - 2019',
    title: 'Senior High School 7 Manado',
    desc: 'Here is where I started delving into the digital world by learning on my own. During my time there, I began teaching myself various digital skills, which laid the foundation for my ongoing passion and expertise in this field.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2014 - 2016',
    title: 'Junior High School 1 Tareran',
    desc: 'This is where my interest in the digital world began. It was during my time there that I first encountered computers and digital technology, which sparked a passion that has continued to grow ever since."',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
