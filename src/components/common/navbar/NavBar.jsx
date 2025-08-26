import { useEffect, useState, useRef } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Approach", url: "work-process" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Skills", url: "skills" },
  { id: 6, name: "Experience", url: "experience" },
];

// Reusable NavLink component for consistency
const NavLink = ({ item, onClick, isMobile = false }) => (
  <li onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={onClick}
      to={item.url}
      smooth={true}
      duration={500}
      spy={true}
      offset={-100}
      activeClass={isMobile ? "nav-active-mobile" : "nav-active"}
      className={`transition-all duration-300 hover:text-blue-600 hover:bg-gray-100 rounded-lg font-medium ${
        isMobile 
          ? "block px-6 py-3 hover:bg-blue-50" 
          : "px-4 py-3 mx-1"
      }`}
      aria-label={`Navigate to ${item.name} section`}
    >
      {item.name}
    </Link>
  </li>
);

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Effect for handling scroll position for styling
  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for closing the menu on scroll
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleScrollCloseMenu = () => {
      setIsMenuOpen(false);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };

    window.addEventListener("scroll", handleScrollCloseMenu, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollCloseMenu);
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full ${
        position > 50 ? "bg-white shadow-md py-0" : "bg-white/95 py-2"
      } z-50 transition-all duration-500`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="introduction"
            smooth={true}
            duration={500}
            className="flex items-center group"
            aria-label="Navigate to home section"
          >
            <img 
              src={logo} 
              className="h-10 sm:h-12 rounded-xl transition-all duration-300 group-hover:scale-105" 
              alt="Abdullah's logo" 
            />
            <p className="text-xl sm:text-2xl ml-3 font-semibold text-gray-800">
              Abdullah
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex menu menu-horizontal text-base">
              {navItems.map((item) => (
                <NavLink 
                  key={item.id} 
                  item={item} 
                  onClick={handleMenuClick} 
                />
              ))}
            </ul>
            <Link
              className="btn btn-primary ml-4 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
              to="contact"
              smooth={true}
              duration={500}
              aria-label="Navigate to contact section"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-screen opacity-100 mt-2" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <ul className="py-4 space-y-2 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <NavLink 
                key={item.id} 
                item={item} 
                onClick={handleMenuClick} 
                isMobile={true} 
              />
            ))}
            <li className="px-6 py-3 mt-2">
              <Link
                onClick={handleMenuClick}
                className="block w-full text-center btn btn-primary bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md"
                to="contact"
                smooth={true}
                duration={500}
                aria-label="Navigate to contact section"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        :global(.nav-active) {
          color: #2563eb;
          background-color: #eff6ff;
        }
        :global(.nav-active-mobile) {
          color: #2563eb;
          background-color: #eff6ff;
          font-weight: 600;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;