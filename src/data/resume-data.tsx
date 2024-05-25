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
    "Full-stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full-stack developer I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. At my last job at The Tech Square I was the lead frontend developer and I worked with  other team members to complete the project effectively.  I work mostly with TypeScript, React, Node js , React query, Node.js, and express. I have in total 3 years of experience in working remotely with companies all around the world.",
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
        url: "https://x.com/i_am_Masood_",
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
      company: "Upwork",
      link: "https://upwork.com",
      badges: ["Remote"],
      title: "Full-stack developer and designer",
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
    "python",
  ],
  projects: [
    {
      title: "Bamrec Super Admin",
      techStack: [
        "React",
        "React query",
        "tailwind css",
        "Node js",
        "Mongodb",
        "Fastify",
      ],
      description:
        "A super admin dashboard which I worked on at The Tech Square. Bamrec is the event company which allows organization to create events, superadmin can view the events running its details and more. I was the lead frontend developer on this project and worked on few apis as well.",
      link: {
        label: "rekt.news",
        href: "https://dev.superadmin.bamrec.com/",
      },
    },
    {
      title: "Rekt News Feed",
      techStack: [
        "Python",
        "flask",
        "redis",
        "flask",
        "mongodb",
        "react",
        "Next.js",
      ],
      description:
        "A rekt upcoming feature that will allow users to see the latest news and updates related to crypto from top crypto enthusiasts. This will be a feed that will be updated after 24 hours and will be available to all users.",
      link: {
        label: "rekt.news",
        href: "https://rekt.news/leaderboard/",
      },
    },
    {
      title: "Shopify Clone",
      techStack: ["Final year project", "React", "Redux", "express", "node js"],
      description:
        "A platform to build and ecommerce stores. User can create multiple stores and add delte products in particular stores.",
      link: {
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
  ],
} as const;
