"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FigmaLogo, GithubLogo } from "./icons";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, figmaURL }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" className="rounded-full shadow-none" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
          {figmaURL && (
            <Button variant="outline" className="rounded-full shadow-none" asChild>
              <a href={figmaURL} target="_blank" rel="noopener noreferrer">
                <FigmaLogo className="mr-1 h-4 w-4" />
                View Figma
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Website", "Design", "Other"];

  const projects = [
    {
      title: "Portfolio Web | Pariya",
      description:
        "A personal website showcasing skills and projects across IT Support, Web Applications, and other areas, with a focus on clear presentation of work.",
      image: "/webportfolio.webp",
      technologies: ["Next.js", "ReactJS", "Tailwind", "GitHub", "Vercel"],
      liveUrl: "https://pariya-portfolio.vercel.app/",
      githubUrl: "https://github.com/pariya-dev/pariya-portfolio",
      figmaURL: null,
      category: ["Website",]
    },
    {
      title: "WASHSHIP",
      description:
        "UX and UI design for the WASHPP application to ensure efficient usage, featuring a simple and user-friendly interface.",
      image: "/washship.webp",
      technologies: ["Figma"],
      liveUrl: "https://www.figma.com/proto/kwgm8buqI1iuI9mDnE2bVh/WASSHIP-PRO?node-id=186-100&p=f&t=iyeo5WN7FVxfrerl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1",
      githubUrl: null, 
      figmaURL: "https://www.figma.com/design/kwgm8buqI1iuI9mDnE2bVh/WASSHIP-PRO?node-id=0-1&p=f",
      category: ["Design"]
    },
    {
      title: "Inventory Food App",
      description:
        "Inventory Food App – An app to manage a ready-to-eat food store, built with AppSheet and using Google Sheets as the database.",
      image: "/Inventory Food App.webp",
      technologies: ["AppSheet","Google Sheet"],
      liveUrl: "https://www.appsheet.com/start/70c17b0b-2e3d-4aff-8989-1a3a6d5667cd",
      githubUrl: null,
      figmaURL: null,
      category: ["Other"]
    },
    {
      title: "RecoveryTour",
      description:
        "UX and UI design for the RecoveryTour website, emphasizing an engaging brand identity and easy navigation for visitors.",
      image: "/nationalparktourism.webp",
      technologies: ["Figma","Wix"],
      liveUrl: "https://6727210002.wixsite.com/recoverytour",
      githubUrl: null,
      figmaURL: "https://www.figma.com/design/zxCOMOtGHkrxywbi4ikK29/National-Park-Tourism-Web-Design",
      category: ["Website","Design"]
    },
    {
      title: "PET FEEDER",
      description:
        "UX and UI design for the RecoveryTour website, emphasizing an engaging brand identity and easy navigation for visitors.",
      image: "/PET_FEEDER.webp",
      technologies: ["C++","Blynk"],
      liveUrl: null,
      githubUrl: "https://github.com/pariya-dev/PET_FEEDER/",
      figmaURL: null,
      category: ["Other"]
    },
  ];

const filteredProjects =
  selectedCategory === "All"
    ? projects
    : projects.filter((p) => 
        Array.isArray(p.category) 
          ? p.category.includes(selectedCategory)
          : p.category === selectedCategory
      );


  const pageVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="projects"
      className="relative py-20 px-6"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-md mx-auto mt-20">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={sectionVariants}>
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div className="flex justify-center gap-3 mb-14 flex-wrap" variants={sectionVariants}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariants}>
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={sectionVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
