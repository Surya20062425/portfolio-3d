import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About <span className="neon-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a Full Stack Developer with 5+ years of experience building scalable web applications
            and data solutions. My expertise spans Python, Django, Flask, React, and modern cloud-native
            architectures. I'm passionate about writing clean code, solving real-world problems, and
            building products that matter.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With a strong foundation in data analytics and a keen eye for detail, I bridge the gap
            between backend systems and user-facing interfaces. I thrive in collaborative environments
            where innovation meets practicality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
