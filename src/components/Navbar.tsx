import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Code, Award, User } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", icon: <Home size={20} />, text: "Home" },
    { to: "/about", icon: <User size={20} />, text: "About" },
    { to: "/projects", icon: <Code size={20} />, text: "Projects" },
    { to: "/experience", icon: <Briefcase size={20} />, text: "Experience" },
    { to: "/certifications", icon: <Award size={20} />, text: "Certifications" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-center md:justify-end space-x-6">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                group relative
                ${isActive ? 'text-blue-400' : 'text-gray-300'}
                hover:text-blue-400 transition-all duration-300
              `}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Content wrapper */}
              <div className="flex items-center space-x-2">
                {/* Icon */}
                <span className="transform transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                {/* Text - hidden on mobile */}
                <span className="hidden md:inline transform transition-transform duration-300 group-hover:translate-x-1">
                  {item.text}
                </span>
              </div>
              
              {/* Mobile underline - only visible on mobile */}
              <div className="md:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              {/* Desktop underline - only visible on desktop */}
              <div className="hidden md:block absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;