import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold neon-text">Suryaprakash</div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition group"
            >
              <item.icon className="w-4 h-4 group-hover:text-primary transition" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
