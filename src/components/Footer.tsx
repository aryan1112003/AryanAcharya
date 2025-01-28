import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md py-8 relative overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center space-x-8">
            {[
              { icon: <Github size={24} />, href: "https://github.com/aryan1112003", label: "GitHub" },
              { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/aryan-acharya-9b939b316", label: "LinkedIn" },
              { icon: <Mail size={24} />, href: "mailto:aryanacharya12003@gmail.com", label: "Email" },
              { icon: <Phone size={24} />, href: "tel:+919512082749", label: "Phone" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative"
                aria-label={item.label}
              >
                <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400">
                  {item.icon}
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Aryan Acharya</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;