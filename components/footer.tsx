import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      {/* Uncomment the following lines if you want to display additional information */}
      
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Hemanshu. All rights reserved.
      </small>
      {/* <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>  */}
     

      
    </footer>
  );
}
