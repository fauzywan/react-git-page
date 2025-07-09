import { useState, useEffect } from 'react';

const socialMedia = [
  {
    link: 'https://instagram.com/fauzywanz',
    icon: '<box-icon name="instagram-alt" type="logo" color="var(--primary)"></box-icon>',
  },
  {
    link: 'https://www.linkedin.com/in/iwan-fauzy-170802254/',
    icon: '<box-icon name="linkedin-square" type="logo" color="var(--primary)"></box-icon>',
  },
  {
    link: 'https://github.com/fauzywan',
    icon: '<box-icon name="github" type="logo" color="var(--primary)"></box-icon>',
  },
  {
    link: 'mailto:iwanfauzay46@gmail.com',
    icon: '<box-icon name="gmail" type="logo" color="var(--primary)"></box-icon>',
  },
];

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[var(--secondary)] mt-10 w-full py-6 px-5">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Social Media */}
          <div className="social-media flex flex-wrap justify-center sm:justify-start gap-4">
            {socialMedia.map((sosmed, index) => (
              <a
                key={index}
                href={sosmed.link}
                target="_blank"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{ __html: sosmed.icon }}
                className="hover:scale-110 transition-transform duration-200"
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-xs text-[var(--primary)]">
          © {new Date().getFullYear()} Iwan Fauzy. All rights reserved.
        </div>
      </footer>

      {/* Fixed Go to Top Button */}
      <button
        onClick={goToTop}
        aria-label="Go to top"
        className="fixed bottom-5 right-5 bg-[var(--secondary)] text-[var(--primary)] p-3 rounded-full shadow-lg opacity-60 hover:opacity-100 transition-opacity duration-300 z-50"
      >
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default Footer;
