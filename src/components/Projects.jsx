import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Django backend, React frontend, and PostgreSQL.',
    tech: ['Django', 'React', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/Surya20062425',
    live: '#',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence with Python, Pandas, and Plotly.',
    tech: ['Python', 'Pandas', 'Plotly', 'Flask'],
    github: 'https://github.com/Surya20062425',
    live: '#',
  },
  {
    title: 'Flask API Service',
    description: 'RESTful API service with authentication, rate limiting, and comprehensive testing.',
    tech: ['Flask', 'Python', 'JWT', 'Pytest'],
    github: 'https://github.com/Surya20062425',
    live: '#',
  },
  {
    title: 'Voice Agent',
    description: 'A voice agent for free that answers everything using edge-tts and speech recognition.',
    tech: ['Python', 'edge-tts', 'SpeechRecognition', 'OpenAI'],
    github: 'https://github.com/Surya20062425',
    live: '#',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Featured <span className="neon-text">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16"
        >
          A selection of my work. View my GitHub for more.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="gradient-border"
            >
              <div className="glass-card p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-cyan-300 transition"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <ExternalLink className="w-5 h-5" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
