
import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="logo">
          <Image 
            src="/images/logo.png" // Replace this with the actual path to your logo image
            alt="Logo" 
            width={100} // Adjust the width as needed
            height={30} // Adjust the height as needed
          />
        </div>
        <p className="text-slate-600">© All Rights Reserved. 2025</p>
      </div>
    </footer>
  );
};

export default Footer;