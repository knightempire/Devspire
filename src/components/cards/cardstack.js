import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    useCase: "Perfect for businesses looking to establish an online presence with a complete shopping experience. Scalable architecture supports thousands of products and concurrent users.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "An intuitive project management tool that helps teams collaborate effectively. Features kanban boards, task assignments, deadline tracking, team chat, and file sharing.",
    techStack: ["Vue.js", "Firebase", "TypeScript", "Vuetify", "WebSockets"],
    useCase: "Ideal for development teams, marketing agencies, and any organization that needs to track project progress and facilitate team collaboration in real-time.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Platform",
    description: "Advanced data analytics platform leveraging machine learning to provide actionable business insights. Features automated reporting, predictive analytics, and data visualization.",
    techStack: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL", "Docker"],
    useCase: "Essential for data-driven companies seeking to transform raw data into meaningful insights through predictive modeling and comprehensive analytics.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 z-10"
    >
      <div className="w-full max-w-7xl h-[85vh] sm:h-[90vh] bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Desktop */}
        <div className="hidden lg:flex h-full">
          <div className="w-[35%] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="text-white font-semibold text-sm bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')} / 03
              </div>
            </div>
          </div>

          <div className="w-[65%] flex flex-col justify-center px-8 xl:px-12 py-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h2>
              <p className="text-lg xl:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 xl:gap-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 xl:px-4 py-2 xl:py-3 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg xl:rounded-xl font-medium text-sm xl:text-base border border-white/10 hover:shadow-md transition-all duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 dark:text-white">Use Case</h3>
              <p className="text-base xl:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.useCase}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet */}
        <div className="lg:hidden flex flex-col h-full">
          <div className="h-[40%] sm:h-[45%] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 z-20">
              <div className="text-white font-semibold text-sm bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')} / 03
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 py-6 sm:py-8 space-y-6 overflow-y-auto">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-2 bg-gradient-to-r from-blue-900 to-indigo-900 text-white border border-white/10 rounded-lg font-medium text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Use Case</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.useCase}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CardStack() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
