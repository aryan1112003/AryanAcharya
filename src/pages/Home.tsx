import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "AI Engineer specializing in machine learning, computer vision, and NLP";
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Machine Learning", "Computer Vision", "Natural Language Processing", "Deep Learning", "AI Development"];

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const typeTimer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);

    const wordTimer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(typeTimer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]"></div>
      </div>
      
      {/* Enhanced animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, ${Math.random() * 0.3})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              transform: `scale(${Math.random() * 2 + 1})`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 animate-glow bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
            ARYAN ACHARYA
          </h1>
          
          <div className="h-16 sm:h-20 mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-slide-up">
              {typedText}
            </p>
          </div>

          {/* Enhanced word animation container */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-blue-900/30 to-purple-900/50 blur-xl"></div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold h-12 bg-gray-900/80 backdrop-blur-sm inline-block px-6 py-2 rounded-full relative overflow-hidden">
              <span className="animate-fade-in-out gradient-text relative z-10">
                {words[currentWordIndex]}
              </span>
              {/* Animated border */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-xy"></div>
            </div>
          </div>

          {/* Social links with enhanced hover effects */}
          <div className="flex justify-center space-x-4 sm:space-x-8 mb-16">
            {[
              { icon: <Github size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />, href: "https://github.com/aryan1112003", color: "hover:text-purple-400" },
              { icon: <Linkedin size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />, href: "https://linkedin.com/in/aryan-acharya-9b939b316", color: "hover:text-blue-400" },
              { icon: <Mail size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />, href: "mailto:aryanacharya12003@gmail.com", color: "hover:text-green-400" },
              { icon: <Phone size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />, href: "tel:+919512082749", color: "hover:text-pink-400" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative group ${item.color} transition-all duration-300`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-float relative">
                  {item.icon}
                  <div className="absolute inset-0 bg-white/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Hover tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm whitespace-nowrap">
                  {item.href.split(':')[0]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;