import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, GraduationCap, Award, Briefcase, ChevronDown, Terminal } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "E-Commerce Platform for Local Artisans",
      tech: ["React", "Spring Boot", "MySQL", "JWT"],
      highlights: [
        "Full-stack platform enabling artisans to showcase handcrafted products",
        "JWT authentication with role-based access - 12-point security increase",
        "Optimized APIs for faster retrieval, resolved CORS challenges"
      ]
    },
    {
      title: "Automated Timetable Generation System",
      tech: ["Python", "Flask", "React", "Genetic Algorithm"],
      highlights: [
        "Genetic Algorithm for optimal teacher, subject & classroom allocation",
        "40% reduction in scheduling effort, 15% faster turnaround",
        "Fitness function for balanced schedules across 25+ projects"
      ]
    },
    {
      title: "Cattle Breed Classification with Deep Learning",
      tech: ["Python", "CNN", "TensorFlow", "Flask"],
      highlights: [
        "CNN with transfer learning for accurate breed classification",
        "Large-scale image preprocessing with augmentation & normalization",
        "Hyperparameter tuning for high accuracy across multiple breeds"
      ]
    }
  ];

  const skills = {
    "Languages": ["Java", "Python", "SQL", "HTML/CSS"],
    "Frameworks": ["React", "Bootstrap", "Spring Boot"],
    "Tools": ["Git", "VS Code", "IntelliJ"]
  };

  const education = [
    {
      institution: "M Kumarasamy College of Engineering",
      degree: "B.Tech Artificial Intelligence and Data Science",
      period: "Pursuing",
      score: "7.5 CGPA"
    },
    {
      institution: "Sri Kalaivani Matric Hr Sec School",
      degree: "Higher Secondary",
      period: "2021-2022",
      score: "83%"
    },
    {
      institution: "Sri Matha Matric Hr Sec School",
      degree: "Secondary",
      period: "2019-2020",
      score: "95%"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Minimal Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span className="font-bold text-lg">MG</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-emerald-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex gap-4">
            <a href="https://github.com/Mathi8843" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mathivanan-g-29015325a/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-blue-950/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="text-emerald-400 text-sm font-mono mb-4">Hi, I'm</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Mathivanan G
          </h1>
          <div className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
            AI Engineer & Full Stack Developer
          </div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building intelligent systems and scalable applications with modern tech.
            Specializing in AI, data science, and full-stack development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all">
              Get in touch
            </a>
            <a href="#projects" className="px-8 py-4 border border-gray-700 hover:border-emerald-500 rounded-lg transition-all">
              View work
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <div className="text-emerald-400 text-sm font-mono mb-4">About me</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Passionate about solving real-world problems</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a B.Tech student at M Kumarasamy College of Engineering, specializing in AI and Data Science.
                I love building full-stack applications that combine intelligent algorithms with seamless user experiences.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My work spans from e-commerce platforms with JWT security to deep learning models for image classification,
                always focusing on performance, scalability, and clean code.
              </p>

              {/* Education Timeline */}
              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    {education.map((edu, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-medium text-gray-300">{edu.institution}</div>
                          <div className="text-emerald-400 text-sm font-semibold">{edu.score}</div>
                        </div>
                        <div className="text-sm text-gray-500">{edu.degree} • {edu.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>Java, Ethical Hacking - NPTEL (2024)</div>
                      <div>Data Analysis with Python - IBM (2025)</div>
                      <div>Data Science Tools - IBM (2025)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div>
              <div className="text-emerald-400 text-sm font-mono mb-4">Tech stack</div>
              <h3 className="text-3xl font-bold mb-8">Skills & Technologies</h3>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-900 border border-gray-800 hover:border-emerald-500 rounded-lg text-sm transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-emerald-400 text-sm font-mono mb-4">Featured work</div>
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group border border-gray-900 hover:border-gray-700 rounded-2xl p-8 transition-all hover:bg-gray-950/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors cursor-pointer" />
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-emerald-400 text-sm font-mono mb-4">Get in touch</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto mb-12">
            <a
              href="tel:+919345779722"
              className="flex items-center justify-center gap-3 p-6 border border-gray-800 hover:border-emerald-500 rounded-xl transition-all group"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-xs text-gray-500">Phone</div>
                <div className="font-medium group-hover:text-emerald-400 transition-colors">+91-9345779722</div>
              </div>
            </a>
            <a
              href="mailto:mathivanan@example.com"
              className="flex items-center justify-center gap-3 p-6 border border-gray-800 hover:border-emerald-500 rounded-xl transition-all group"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-xs text-gray-500">Email</div>
                <div className="font-medium group-hover:text-emerald-400 transition-colors">Get in touch</div>
              </div>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Mathi8843"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-800 hover:border-emerald-500 rounded-full transition-all hover:bg-emerald-500/10"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mathivanan-g-29015325a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-800 hover:border-emerald-500 rounded-full transition-all hover:bg-emerald-500/10"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-900 text-center text-gray-600 text-sm">
        <div className="max-w-6xl mx-auto">
          © 2025 Mathivanan G. Crafted with React & Tailwind
        </div>
      </footer>
    </div>
  );
}

export default App;
