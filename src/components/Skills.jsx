import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Django', level: 85 },
  { name: 'Flask', level: 80 },
  { name: 'React', level: 75 },
  { name: 'JavaScript', level: 80 },
  { name: 'C++', level: 70 },
  { name: 'Data Analytics', level: 85 },
  { name: 'AWS', level: 65 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Git', level: 90 },
];

function SkillsTorus() {
  return (
    <Torus args={[2.5, 0.3, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} />
    </Torus>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Skills & <span className="neon-text">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-16"
        >
          Technologies I work with regularly
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-80">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7b2cbf" />
              <Environment preset="night" />
              <SkillsTorus />
              <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
          </div>

          <div className="space-y-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
