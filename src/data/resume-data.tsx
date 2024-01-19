import {
  BarepapersLogo,
  ClevertechLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Masood ul Rehman",
  initials: "MR",
  location: "Multan, Pakistan",
  locationLink: "https://www.google.com/maps/place/Multan",
  about:
    "Frontend expert focused on building products with extra attention to detail",
  summary:
    "As a Frontend developer I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. At my last job at The Tech Square I was the lead frontend developer and I worked with  other team members to complete the project effectively.  I work mostly with TypeScript, React, Node js , React query, Node.js, and express. I have in total 3 years of experience in working remotely with companies all around the world.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/81099787?s=400&u=8b977a8af7375ec29ce5529fd90e29c78f2a3238&v=4",
  personalWebsiteUrl: "https://masoodulrehman.com",
  contact: {
    email: "masooddulrehman@gmail.com",
    tel: "+923079737041",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Masood-ul-Rehman",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/masood-ul-rehman/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/MasoodulRehman4",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "MNSUAM",
      degree: "Bachelor's Degree in Information Technologie",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "The Tech Square",
      link: "https://thetechsquare.com/",
      badges: ["On site"],
      title: "Frontend developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Worked on the superadmin dashboard for US based event organizing company. Implemented payment funtionlities for ticket payment, Used React TypeScript React query Zustand for state management",
    },
    {
      company: "Upwork",
      link: "https://upwork.com",
      badges: ["Remote"],
      title: "Frontend developer and designer",
      logo: ClevertechLogo,
      start: "2019",
      end: "Current",
      description:
        "Started as a website designer then moved to developement. Worked on 54+ projects which includes design as well as developement projects. Used React or next for forntend development. Worked on wordpress projects as well",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/",
    "Node.js",
    "React query",
    "express",
  ],
  projects: [
    {
      title: "Shopify clone",
      techStack: ["Final year project", "React", "Redux", "express", "node js"],
      description:
        "A platform to build and ecommerce stores. User can create multiple stores and add delte products in particular stores.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/Masood-ul-Rehman/ShopifyFYP",
      },
    },
    {
      title: "Sankara Food",
      techStack: ["Client Project", "TypeScript", "Next.js", "Website design"],
      description: "A food delivery application built in Next.js.",
      logo: MonitoLogo,
      link: {
        label: "Sankara Food",
        href: "https://sankara-three.vercel.app/",
      },
    },
    {
      title: "PAP",
      techStack: ["Client Project", "Next.js", "tailwind css"],
      description:
        "A website design and development project for crypto event organizing company.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },

    {
      title: "Merchvisor",
      techStack: [
        "Client Project",
        "React.js",
        "material ui",
        "website design",
      ],
      description:
        "Generates recomentdations of vehicles to buy. This app collects the user prefences first then recommend wha to buy",
      logo: BarepapersLogo,
      link: {
        label: "Merchvisor",
        href: "https://www.behance.net/gallery/159474973/Mechvisor-Landing-page-design",
      },
    },
    {
      title: "LinkTree clone",
      techStack: ["Side Project", "Next.js", "postgress sql", "in progress"],
      description:
        "Clone of Linktree a popular application for showing your applications",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://links-nbw3dqepo-masood-ul-rehman.vercel.app/",
      },
    },
  ],
} as const;
