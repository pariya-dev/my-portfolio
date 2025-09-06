"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Award } from "lucide-react";

// ✅ Timeline Item Component
const ExperienceItem = ({ title, company, period, description, technologies = [], icon: Icon }) => (
  <motion.div
    className="relative pl-8 not-last:pb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
      <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
    </div>

    {/* Content */}
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-9 h-9 bg-accent rounded-full flex items-center justify-center">
          {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
        </div>
        <span className="text-lg font-semibold">{company}</span>
      </div>
      <div>
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="flex items-center gap-2 mt-1 text-sm">
          <span>{period}</span>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

// ✅ Data แยกตามหัวข้อ
const workExperiences = [
  {
    title: "Admin",
    company: "JARAN UNBOX",
    period: "June – November 2023",
    description: "Answered customer inquiries via chat, shipped products, and created content on Facebook & Instagram.",
    technologies: ["Facebook", "Instagram", "Line", "Canva", "MS Office"],
    icon: Building2,
  },
  {
    title: "Internship Student",
    company: "National Broadcasting, Khon Kaen",
    period: "March – May 2021",
    description: "Operated broadcasting systems, recorded radio programs, and maintained equipment.",
    technologies: ["MS Office", "Adobe Audition"],
    icon: Building2,
  },
];

const educations = [
  {
    title: "Bachelor’s Degree in Information Systems & Multimedia Technology",
    company: "North-Eastern University",
    period: "2024 – Present",
    description: "Studying Information Systems and Multimedia Technology.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Figma"],
    icon: GraduationCap,
  },
  {
    title: "Diploma in Information Technology",
    company: "Khon Kaen Technical College",
    period: "2020 – 2022",
    description: "Completed diploma in IT.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python"],
    icon: GraduationCap,
  },
];

const certificates = [
  {
    title: "Professional Digital Solutions for Tourism and Service Businesses",
    company: "Department of Skill Development",
    period: "2025",
    description: "Completed front-end web development course using Miro, Figma, Wix.",
    technologies: ["Miro", "Figma", "Wix",],
    icon: Award,
  },
  {
    title: "LINK® Certified Network Cabling For Engineering (LCCE)",
    company: "Interlink Training",
    period: "2025",
    description: "Certified in network cabling with hands-on engineering practice.",
    icon: Award,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-10 px-6">
      <div className="max-w-screen-md mx-auto mt-10">
        {/* Work Experience */}
        <motion.h2
          className="text-lg sm:text-3xl font-bold tracking-tight text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Work Experience
        </motion.h2>
        <div className="relative space-y-6">
          {workExperiences.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>

        {/* Education */}
        <motion.h2
          className="text-lg sm:text-3xl font-bold tracking-tight text-center mt-12 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Education
        </motion.h2>
        <div className="relative space-y-6">
          {educations.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>

        {/* Certificates */}
        <motion.h2
          className="text-lg sm:text-3xl font-bold tracking-tight text-center mt-12 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Certificates
        </motion.h2>
        <div className="relative space-y-6">
          {certificates.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
