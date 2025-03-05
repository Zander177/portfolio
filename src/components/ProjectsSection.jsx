"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectTag from '@/components/ProjectTag';
import { motion, useInView} from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Sessions Billiards Website",
      description: "Wordpress Website",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://sessionsbc.co.za/",
      previewUrl: "/images/projects/1.png",     
    },
    {
      id: 2,
      title: "WeTrack Website",
      description: "Wordpress Website",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://we-track.co.za/",
      previewUrl: "/images/projects/2.png",
    },
    {
      id: 3,
      title: "SOLE Mate Apparel ",
      description: "E-Commerce Website",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://smapparel.co.za/",
      previewUrl: "/images/projects/3.png",
    },
    {
      id: 4,
      title: "Afri Training",
      description: "Wordpress Website",
      image: "/images/projects/6.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://afritraining.co.za/",
      previewUrl: "/images/projects/6.png",
    },
    {
      id: 5,
      title: "Cogni Kids",
      description: "E-Commerce Website",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://cognikids.co.za/",
      previewUrl: "/images/projects/5.png",
    },
    {
      id: 6,
      title: "4 Dimensional Interiors",
      description: "WordPress Website",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/images/projects/4.png",
    },
  ];

export const ProjectsSection = () => {
  const  [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>  
    project.tag.includes(tag)
  );

  const cardVariants = {
    intial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1 },
  };

  return (
    
   <section className="px-6 sm:px-8 lg:px-16" id="projects"> 
    
    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>

   <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">

   <ProjectTag 
    onClick={handleTagChange} 
    name="All" 
    isSelected={tag === "All"} 
    />
    
    <ProjectTag 
    onClick={handleTagChange} 
    name="Web" 
    isSelected={tag === "Web"} 
    />

    <ProjectTag 
    onClick={handleTagChange} 
    name="Mobile" 
    isSelected={tag === "Mobile"} 
    />

    
   </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => ( 
        <motion.li 
        key={index} 
        variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.4}}
        >
        
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
        </motion.li>
    ))}
    </ul>
    </section>
  );
};

export default ProjectsSection;
