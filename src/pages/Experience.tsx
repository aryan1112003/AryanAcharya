import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: "AI Intern",
      company: "Innoventa Pvt. Ltd",
      period: "Jan 2024 – Apr 2024",
      location: "Ahmedabad, India",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      responsibilities: [
        "Developed a safety detection system using YOLOv5",
        "Deployed scalable AI systems on AWS and GCP",
        "Collaborated with cross-functional teams to implement AI solutions",
        "Optimized model performance and reduced inference time"
      ]
    },
    {
      title: "ML Intern",
      company: "OpenXcell",
      period: "Aug 2023 – Sep 2023",
      location: "Ahmedabad, India",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      responsibilities: [
        "Built predictive models, improving forecast accuracy",
        "Created data dashboards with Matplotlib and Seaborn",
        "Processed and analyzed large datasets using Python",
        "Implemented data visualization solutions for stakeholders"
      ]
    },
    {
      title: "Education",
      company: "Silver Oak University",
      period: "2021 - 2024",
      location: "Ahmedabad, India",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      responsibilities: [
        "B.Tech in Computer Engineering",
        "Relevant Coursework: AI, ML, Cloud Computing, Data Structures",
        "Active member of the university's AI research group",
        "Participated in multiple hackathons and coding competitions"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 pt-20 sm:pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center gradient-text animate-glow">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5">
            <div className="h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 animate-pulse"></div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                
                {/* Content container */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                }`}>
                  <div className="bg-gray-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-800/50 hover:border-blue-500/30 group">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-800/80 rounded-lg group-hover:bg-blue-900/20 transition-colors duration-300">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold gradient-text">{exp.title}</h3>
                        <p className="text-base sm:text-lg text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                    
                    {/* Timeline info */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-sm sm:text-base text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li 
                          key={respIndex}
                          className="flex items-start gap-2 text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;