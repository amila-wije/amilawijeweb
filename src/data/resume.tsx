import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amila Wijesinghe",
  initials: "EG",
  url: "https://dillion.io",
  location: "Ginigathena, Sri Lanka",
  locationLink:
    "https://www.google.com/maps/place/Ginigathena,+Sri+Lanka/@6.973679,80.3996583,12z/data=!3m1!4b1!4m6!3m5!1s0x3ae2f8a7c9e0d5b7:0x4f2a8c8e8c8e8c8e!8m2!3d6.973679!4d80.3996583!16s%2Fg%2F11b6g6g6g",
  description: "Fullstack Developer",
  summary:
    "I'm a passionate software developer with a strong interest in building scalable and efficient applications.I'm always looking for new challenges and opportunities to learn and grow.When I'm not coding, you can find me exploring new places, trying out new foods, or reading a good book.I'm a firm believer in the importance of work-life balance and strive to maintain a healthy balance between my professional and personal life.",
  avatarUrl: "/my.jpg",
  skills: [
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MongoDB",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "amilasampathas97@gmail.com",
    tel: "0767505006",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amila-wije",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amila-sampath-73461b265",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Amilaspth",
        icon: Icons.x,

        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/+94767505006",
        icon: Icons.whatsapp,
        navbar: false,
      },

      email: {
        name: "amilasampathas97@gmail.com",
        url: "amilasampathas97@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PurePitch",
      href: "https://www.linkedin.com/company/purepitch-bv/posts/?feedView=all",
      badges: [],
      subtitle: "Fullstack Engineer intern",
      location: "Remote",
      logoUrl: "/purepitch.png",
      start: "May 2021",
      role: "Bitcoin Protocol Engineer",
      end: "Oct 2022",
      description:
        "Assisted in developing and maintaining web application features using Next.js and NestJS, with MongoDB as the database. Worked with a microservices-based architecture to build scalable and modular backend services. • Contributed to creating responsive frontend components and improving user experience using TanStack (React Query). Collaborated with the team to implement new features, resolve issues, and enhance overall application performance",
    },
    {
      company: "Cloudev Technologies",
      badges: [],
      href: "https://www.linkedin.com/company/cloudev-technology/posts/?feedView=all",
      location: "Remote",
      subtitle: "Fullstack Engineer - Trainee",
      title: "Fullstack Engineer - Trainee",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQG4NN3VL-DKrw/company-logo_200_200/B56Zcb0_8xHoAM-/0/1748518570413/cloudev_technologies_logo?e=1779321600&v=beta&t=_NNtwoeLhmd2gqQkH6lZrcxmrlQzFQTjdewo9bCxGhw",
      start: "January 2021",
      end: "April 2021",
      description:
        `Designed and developed modern web applications using React and
Next.js, integrating Firebase and MongoDB for scalable backend and
database solutions. Implemented responsive UI components and real-time
functionalities, while improving performance and user experience.`,
    },
    
  ],
  education: [
    {
      school: "South Eastern University of Sri Lanka",
      href: "https://seu.ac.lk/",
      degree: "B.sc(Hon's) in Computer Sciences",
      logoUrl: "/seu.png",
      start: "2020",
      end: "present",
    },
    {
      school: "Laxapana Central Collage",
      href: "http://www.laxapanacc.sch.lk/",
      degree: "A/l in Mathematical Stream",
      logoUrl: "/LCC_logo.png",
      start: "2007",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Movie Explorer",
      href: "https://movie-explorer-psi-two.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "MovieExplorer is a React-based web application that allows users to browse movies using the TMDb (The Movie Database) API. It features a horizontal slideshow for trending movies, a search functionality, infinite scrolling for popular or searched movies, dark mode support, and a detailed movie dialog with trailer links. The app is designed to provide an engaging user experience with a focus on performance and responsiveness.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amila-wije/Movie-Explorer.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "movie.mp4",
    },
    {
      title: "Shop.co",
      href: "https://shop-co-iota-livid.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "This is a fully functional e-commerce website developed using the MERN stack. The platform enables users to browse products, add items to a cart, place orders, while administrators can manage products, orders, and users. The application is designed to provide a seamless shopping experience with a responsive UI and secure backend.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amila-wije/Shop.co",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "web.mp4",
    },

    {
      title: "TODO List",
      href: "https://github.com/amila-wije/MERN-TODO.git",
      dates: "2025",
      active: true,
      description:
        "A simple and efficient task management application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to create, read, update, and delete (CRUD) tasks. The frontend, developed with React and styled using modern UI components, communicates with a Node.js/Express backend API, which handles routing and logic. Task data is stored in a MongoDB database, ensuring persistent and scalable storage.",
      technologies: ["MongoDB", "Express", "React", "Node.js", " Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amila-wije/MERN-TODO.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "web2.mp4",
    },

    {
      title: "Age Calculator",
      href: "https://age-cal-lovat.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "This is a Age calculator developed using the MERN stack. The platform enables users to select their Birthdate.",
      technologies: ["React", " JavaScript", "HTML", " Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amila-wije/AgeCAL.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "web1.mp4",
    },

    {
      title: "Smart PLUG Base",
      href: "https://github.com/amila-wije/smart-plugbase",
      dates: "2024",
      active: true,
      description:
        "About a versatile solution for energy monitoring, remote control, automation, and theft protection. Built with Arduino and Android Studio, it supports smart home integration, serving electric vehicle owners, farmers, and industries efficiently.",
      technologies: ["Java", "Android Studio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amila-wije/smart-plugbase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "smart.mp4",
    },
  ],
  hackathons: [],
} as const;
