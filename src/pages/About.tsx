import React from 'react';
import { Code, Database, Cloud, Globe, Terminal, Brain, Server, BarChart } from 'lucide-react';

function About() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      skills: ["Python", "JavaScript", "Java", "C++", "TypeScript", "SQL", "HTML/CSS", "R", "Go", "Rust", "Shell Scripting", "Scala"]
    },
    {
      title: "AI & ML Frameworks",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "YOLO", "Transformers", "Pandas", "NumPy", "Hugging Face", "SpaCy", "NLTK"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="w-8 h-8 text-green-400" />,
      skills: [
        "Kubernetes", "Docker", "Jenkins", "GitLab CI/CD", "GitHub Actions", 
        "Terraform", "Ansible", "Helm", "ArgoCD", "Prometheus", 
        "Grafana", "ELK Stack", "Istio", "Harbor", "Vault",
        "SonarQube", "Nexus", "Consul", "Puppet", "Chef"
      ]
    },
    {
      title: "Cloud & Platform Engineering",
      icon: <Cloud className="w-8 h-8 text-yellow-400" />,
      skills: [
        "AWS", "Google Cloud", "Azure", "OpenShift", "OpenStack",
        "AWS EKS", "GCP GKE", "Azure AKS", "CloudFormation", "AWS Lambda",
        "Cloud Functions", "Azure Functions", "Route53", "CloudFront",
        "S3", "EC2", "RDS", "DynamoDB", "Cloud SQL", "Cosmos DB"
      ]
    },
    {
      title: "Data Engineering",
      icon: <BarChart className="w-8 h-8 text-pink-400" />,
      skills: [
        "Apache Spark", "Hadoop", "Airflow", "Kafka", "Snowflake",
        "dbt", "Apache Beam", "Apache Flink", "Apache NiFi", "Databricks",
        "Amazon EMR", "BigQuery", "Redshift", "Delta Lake", "Hive",
        "MongoDB", "Cassandra", "Redis", "Elasticsearch", "Neo4j"
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      skills: ["Flask", "Django", "Node.js", "Express", "FastAPI", "GraphQL", "MongoDB", "PostgreSQL", "Redis", "RabbitMQ"]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "Tailwind CSS", "Material-UI", "Redux", "WebSockets", "Three.js"]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-8 h-8 text-teal-400" />,
      skills: ["VS Code", "PyCharm", "Jupyter", "Postman", "Linux", "Bash", "Vim", "Docker Compose", "Nginx", "Apache"]
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center gradient-text animate-glow">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 p-8 rounded-xl mb-16 animate-slide-up hover-card">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am an AI Engineer with a passion for developing innovative solutions using machine learning, computer vision, and natural language processing. Currently pursuing my B.Tech in Computer Engineering at Silver Oak University, I combine academic excellence with practical industry experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in AI has led me to work on diverse projects, from developing safety systems to creating creative AI applications. I believe in the power of AI to transform industries and improve lives.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl transform hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 border border-gray-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gray-800/50 rounded-lg animate-float">
                    {category.icon}
                  </div>
                  <h4 className="text-2xl font-bold gradient-text">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-800/50 px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:bg-blue-500/20 transition-colors duration-300 animate-slide-up"
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { lang: "English", level: "Professional Proficiency" },
                { lang: "Hindi", level: "Native" },
                { lang: "Gujarati", level: "Native" }
              ].map((lang, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
                >
                  <p className="text-xl font-bold mb-3 text-white">
                    {lang.lang}
                  </p>
                  <p className="text-gray-300">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;