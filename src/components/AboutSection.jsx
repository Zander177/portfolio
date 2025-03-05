"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from '@/components/TabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>WordPress</li>
                <li>JavaScript</li>
                <li>Elementor</li>
                <li>HTML & CSS</li>
                <li>PHP</li>
                <li>LAMP Stack</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
            </ul>
        )
    },
    {
        title: "Wordpress",
        id: "wordpress",
        content: (
            <ul className="list-disc pl-2">
                <li>Elementor</li>
                <li>Divi</li>
                <li>WP Bakery</li>
                <li>Advanced Custom Fields</li>
                <li>PHP</li>
                <li>WooCommerce</li>
                <li>Rank Math SEO</li>
                <li>Yoast SEO</li>
                
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                
                <li>Foundations of User Experience(UX) Design Google</li>
                <li>Complete Web & Mobile Designer in 2023: UI/UX, Figma Udemy </li>
                <li>Figma UI UX Design Essentials Udemy</li>
                <li>Adobe Illustrator Advanced Training Course Udemy </li>
                <li>Adobe Photoshop Advanced Training Course Udemy</li>
                <br></br>
                <br></br>
                <br></br>
            </ul>
        )
    }
]


export const AboutSection = () => {
    const [ tab, setTab ] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
    });
    }

  return (
    <section id="about" className="text-white">
        
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/about-image.png" width={500} height={500} alt="about-me" className="rounded-lg"/>

    <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">I am a passionate WordPress developer with extensive experience in creating dynamic and user-friendly websites. I specialize in using Elementor and various other page builders to design and develop responsive websites. My technical skill set includes proficiency in JavaScript, HTML, CSS, and Advanced Custom Fields (ACF). Additionally, I have hands-on experience with WooCommerce for building e-commerce platforms and troubleshooting WordPress issues. With a strong foundation in UX and UI design, I focus on crafting seamless, visually appealing websites that deliver exceptional user experiences. I am always eager to learn new techniques and collaborate with others to bring creative ideas to life.</p>
        <div className="flex flex-row justify-start mt-8">

            <TabButton 
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}> 
            {" "} Skills {" "}
            </TabButton>

            

            <TabButton 
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}> 
            {" "} Certifications {" "}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("wordpress")}
            active={tab === "wordpress"}> 
            {" "} Wordpress {" "}
            </TabButton>
          
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
        </div>
    </section>
  )
};

export default AboutSection;