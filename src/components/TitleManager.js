import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeSEO = {
  "/": {
    title: "Home | Sudeep",
    canonical: "https://www.sudeep-dev.uk/",
  },
  "/about": {
    title: "About | Sudeep",
    canonical: "https://www.sudeep-dev.uk/about",
  },
  "/projects": {
    title: "Projects | Sudeep",
    canonical: "https://www.sudeep-dev.uk/projects",
  },
  "/skills": {
    title: "Skills | Sudeep",
    canonical: "https://www.sudeep-dev.uk/skills",
  },
  "/certifications": {
    title: "Certifications | Sudeep",
    canonical: "https://www.sudeep-dev.uk/certifications",
  },
  "/resume": {
    title: "Resume | Sudeep",
    canonical: "https://www.sudeep-dev.uk/resume",
  },
  "/contact": {
    title: "Contact | Sudeep",
    canonical: "https://www.sudeep-dev.uk/contact",
  },
};

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = routeSEO[location.pathname] || {
      title: "Sudeep Portfolio",
      canonical: "https://www.sudeep-dev.uk/",
    };

    document.title = seo.title;

    let link = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", seo.canonical);

  }, [location]);

  return null;
}

export default TitleManager;
