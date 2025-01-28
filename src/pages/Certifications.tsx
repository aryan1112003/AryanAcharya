import React from 'react';
import { Award, Calendar } from 'lucide-react';

function Certifications() {
  const certifications = [
    {
      title: "Google Solutions Architect - Associate",
      issuer: "Google Cloud",
      date: "2024",
      description: "Expertise in designing and implementing cloud solutions on GCP",
      color: "from-blue-400 to-blue-600",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "TensorFlow Developer",
      issuer: "Google",
      date: "2023",
      description: "Proficiency in building and training neural networks using TensorFlow",
      color: "from-green-400 to-green-600",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive understanding of deep learning architectures and applications",
      color: "from-purple-400 to-purple-600",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-16 text-center gradient-text animate-glow">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-500 rounded-xl overflow-hidden"
            >
              {/* Icon container - Centered */}
              <div className="flex justify-center pt-8">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-20 rounded-full blur-lg transform group-hover:scale-125 transition-transform duration-500`}></div>
                  <div className={`relative p-4 bg-gradient-to-r ${cert.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-float`}>
                    {cert.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className={`text-xl font-bold mb-3 text-center bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:animate-glow`}>
                  {cert.title}
                </h4>
                
                <div className="flex items-center justify-center space-x-2 text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>
                
                <p className="text-gray-400 text-center mb-4 text-sm">
                  {cert.description}
                </p>
                
                <div className="text-center text-gray-500 text-sm">
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;