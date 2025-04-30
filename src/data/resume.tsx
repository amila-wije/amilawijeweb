import { Icons } from "@/components/icons";
import { url } from "inspector";
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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
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
