import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <p className="">Made with &#x2665;&#xfe0f; by <span className="underline">fajar13k</span></p>
      <div className="flex gap-4">
        <a className="hover:text-amber-500" href="https://www.linkedin.com/in/fajarnazmif" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a className="hover:text-amber-500" href="https://github.com/fajar13k" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a className="hover:text-amber-500" href="https://www.facebook.com/fajar13k" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
      </div>
    </>
  );
};

export default Footer;