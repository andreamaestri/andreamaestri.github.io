import type { Site, Metadata, Socials } from "@types";


export const SITE: Site = {
  NAME: "Andrea Maestri",
  EMAIL: "andreamaestri.work@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Andrea Maestri's personal website. Discover my work, projects, and blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Explore articles on various topics that I am passionate about, including technology, programming, and more.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "A showcase of my professional experience, including companies I've worked for and roles I've held.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Browse through my personal and collaborative projects, complete with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  { 
    ICON: "carbon:logo-github",
    NAME: "github",
    HREF: "https://github.com/andreamaestri",
  },
  { 
    ICON: "carbon:logo-linkedin",
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/andrea-maestri",
  }
];
