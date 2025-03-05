"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 px-6 sm:px-8 lg:px-16"> {/* Padding added here */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">Hello, I'm{" "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Zander',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Graphic Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#565656] text-base sm:text-lg mb-6 lg:text-xl">
          Crafting seamless, user-friendly websites with precision and passion.
          </p>
          <div>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the contact section
              }}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-cyan-300 to-blue-600 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <button
  onClick={() => window.open('/docs/Resumé 2025 Zander.pdf', '_blank')} // Path to the PDF and _blank to open in new tab
  className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-cyan-300 to-blue-600 hover:bg-slate-800 text-white mt-3 transition-all duration-500"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-all duration-500">
    Download CV
  </span>
</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;