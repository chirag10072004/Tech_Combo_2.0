import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaAws, 
  FaDocker, 
  FaBrain 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiKubernetes, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiTailwindcss 
} from 'react-icons/si'
import { TbBrandAzure } from 'react-icons/tb'

const AboutTechStack = () => {
  const techs = [
    { name: 'React', icon: <FaReact className="h-5 w-5 text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="h-5 w-5 text-white bg-black rounded-full" /> },
    { name: 'Node.js', icon: <FaNodeJs className="h-5 w-5 text-[#339933]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="h-5 w-5 text-[#3178C6] rounded-sm" /> },
    { name: 'Python', icon: <FaPython className="h-5 w-5 text-[#3776AB]" /> },
    { name: 'Java', icon: <FaJava className="h-5 w-5 text-[#007396]" /> },
    { name: 'AWS', icon: <FaAws className="h-5 w-5 text-[#FF9900]" /> },
    { name: 'Azure', icon: <TbBrandAzure className="h-5 w-5 text-[#0089D6]" /> },
    { name: 'Docker', icon: <FaDocker className="h-5 w-5 text-[#2496ED]" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="h-5 w-5 text-[#326CE5]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="h-5 w-5 text-[#47A248]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="h-5 w-5 text-[#4169E1]" /> },
    { name: 'MySQL', icon: <SiMysql className="h-5 w-5 text-[#4479A1]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" /> },
    { name: 'AI / Machine Learning', icon: <FaBrain className="h-5 w-5 text-[#EC4899]" /> },
  ]

  // Stagger animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative py-20 bg-[#071329] overflow-hidden border-t border-b border-blue-950/35">
      {/* Subtle Grid Accent and Glow Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1f39_1px,transparent_1px),linear-gradient(to_bottom,#0f1f39_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-green-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 block">
            Technologies We Work With
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Our Technology Stack
          </h2>
          <div className="w-8 h-[2px] bg-blue-500 mx-auto rounded" />
        </div>

        {/* Badges Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
        >
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              variants={badgeVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(59, 130, 246, 0.6)',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.25)'
              }}
              className="flex items-center space-x-3 px-5 py-2.5 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-slate-300 hover:text-white cursor-default transition-all duration-300"
            >
              {tech.icon}
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default AboutTechStack
