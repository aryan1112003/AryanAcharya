import React from 'react';
import { Code, Brain, Globe, BookOpen, Terminal, Laptop, Bot, Camera, Heart, Briefcase, MessageSquare, Music } from 'lucide-react';

function Projects() {
  const projectCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      projects: [
        {
          title: "Real-Time Language Translator for PDF",
          description: "Advanced PDF translation tool using AI for real-time language conversion.",
          link: "https://github.com/aryan1112003/Real-Time-Language-Translator-for-PDF",
          image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Story Generator",
          description: "Creative story generation platform using advanced NLP and GPT models.",
          link: "https://github.com/aryan1112003/AI-Story-Generator",
          image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Image Caption Generator",
          description: "CNN-RNN based model for generating descriptive captions for images.",
          link: "https://github.com/aryan1112003/Image-Caption-Generator",
          image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Code Generator",
          description: "Intelligent code generation system using machine learning.",
          link: "https://github.com/aryan1112003/ai-code-generator",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      title: "Personal Assistant Tools",
      icon: <Bot className="w-12 h-12 text-blue-400" />,
      projects: [
        {
          title: "AI Meeting Summary",
          description: "Automated tool for generating concise meeting summaries.",
          link: "https://github.com/aryan1112003/ai-meeting-summary",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Career Mentor",
          description: "Career guidance and mentorship platform powered by AI.",
          link: "https://github.com/aryan1112003/ai-career-mentor",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Health Assistant",
          description: "Personal health monitoring and recommendation system.",
          link: "https://github.com/aryan1112003/ai-health-assistant",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Personal Knowledge Assistant",
          description: "Smart knowledge management and learning assistant.",
          link: "https://github.com/aryan1112003/AI-Powered-Personal-Knowledge-Assistant",
          image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      title: "Lifestyle & Entertainment",
      icon: <Heart className="w-12 h-12 text-pink-400" />,
      projects: [
        {
          title: "AI Mood Based Playlist Generator",
          description: "Music recommendation system based on mood analysis.",
          link: "https://github.com/aryan1112003/AI-Mood-Based-Playlist-Generator",
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Workout Planner",
          description: "Personalized fitness planning using AI algorithms.",
          link: "https://github.com/aryan1112003/ai-workout-planner",
          image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Travel Planner",
          description: "Smart travel itinerary generator and organizer.",
          link: "https://github.com/aryan1112003/AI-Travel-Planner",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Diet Recommendation Platform",
          description: "Personalized nutrition and diet planning system.",
          link: "https://github.com/aryan1112003/Ai-Diet-Recommendation-Platform",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      title: "Computer Vision",
      icon: <Camera className="w-12 h-12 text-green-400" />,
      projects: [
        {
          title: "Safety Detection System",
          description: "YOLOv5-based system for monitoring restricted areas.",
          link: "https://github.com/aryan1112003/Safty_detection_restricade_area",
          image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Image Generator",
          description: "Advanced image generation using AI models.",
          link: "https://github.com/aryan1112003/AI-Image-Generator",
          image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Image Enhance",
          description: "AI-powered image enhancement and restoration tool.",
          link: "https://github.com/aryan1112003/image-enhance",
          image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Gesture Recognition",
          description: "Hand gesture recognition using OpenCV and Python.",
          link: "https://github.com/aryan1112003/gesture-recognition",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      title: "Professional Tools",
      icon: <Briefcase className="w-12 h-12 text-yellow-400" />,
      projects: [
        {
          title: "AI Resume Reviewer",
          description: "Automated resume analysis and improvement suggestions.",
          link: "https://github.com/aryan1112003/ai-resume-reviewer",
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Interview Preparation Application",
          description: "AI-powered interview preparation platform.",
          link: "https://github.com/aryan1112003/Interview-Preparation-Application",
          image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Job Search",
          description: "Intelligent job matching and search platform.",
          link: "https://github.com/aryan1112003/ai-job-search",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Data Analysis System",
          description: "Comprehensive data analysis and visualization platform.",
          link: "https://github.com/aryan1112003/Data-Analysis-System",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    {
      title: "Fun & Creative",
      icon: <MessageSquare className="w-12 h-12 text-orange-400" />,
      projects: [
        {
          title: "AI Meme Generator",
          description: "Creative meme generation using AI.",
          link: "https://github.com/aryan1112003/ai-meme-generator",
          image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Quote Generator",
          description: "Inspirational quote generation using NLP.",
          link: "https://github.com/aryan1112003/ai-quote-generator",
          image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Movie Oracle",
          description: "AI-powered movie recommendation system.",
          link: "https://github.com/aryan1112003/movie-oracle",
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "AI Chess",
          description: "Intelligent chess game with AI opponent.",
          link: "https://github.com/aryan1112003/Ai_Chess",
          image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Projects
        </h2>
        
        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center space-x-4 mb-8 bg-gray-800/50 p-4 rounded-lg">
              <div className="p-3 bg-gray-700/50 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                {category.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.projects.map((project, projectIndex) => (
                <a
                  key={projectIndex}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="relative z-20 p-6">
                    <h4 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center space-x-2 text-blue-400/70 group-hover:text-blue-300 transition-colors duration-300">
                      <Globe size={16} />
                      <span className="text-sm">View Project</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;