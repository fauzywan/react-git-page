import { useState } from 'react';
import Button from './Button';

const buttonClickedHandler = () => {
  window.open('https://www.linkedin.com/in/iwan-fauzy-170802254/');
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[var(--secondary)] text-[var(--primary)] px-5 py-4 z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-bold">IWAN</div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex gap-5 font-bold text-md absolute md:static bg-[var(--secondary)] w-full left-0 top-[70px] md:w-auto px-5 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#projectMenu">Project</a>
          </li>

          <li>
            <a href="#achiveMenu">Achivement</a>
          </li>
        </ul>

        {/* Right button */}
        <div className="hidden md:block">
          <Button
            text="Let's Connect"
            onClick={buttonClickedHandler}
            className="hover:shadow-[0_0_2px_0] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
          />
        </div>
      </div>

      {/* Button for mobile menu */}
      {isMenuOpen && (
        <div className="block md:hidden mt-4 text-center">
          <Button
            text="Let's Connect"
            onClick={buttonClickedHandler}
            className="hover:shadow-[0_0_2px_0] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
