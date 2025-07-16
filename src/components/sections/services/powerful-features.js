"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Activity, Globe, Zap, Terminal, FileText, BarChart3, CheckCircle, Clock } from "lucide-react"
import { useState, useEffect } from "react"

export default function PowerfulFeaturesSection() {
  const [deploymentStep, setDeploymentStep] = useState(0)
  const [isDeploying, setIsDeploying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeploying) {
        setIsDeploying(true)
        setDeploymentStep(0)

        // Animate through deployment steps
        setTimeout(() => setDeploymentStep(1), 1000)
        setTimeout(() => setDeploymentStep(2), 2500)
        setTimeout(() => setDeploymentStep(3), 4000)
        setTimeout(() => setDeploymentStep(4), 5500)
        setTimeout(() => {
          setIsDeploying(false)
          setDeploymentStep(0)
        }, 7000)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isDeploying])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        duration: 0.6,
      },
    },
  }

  const premiumHoverVariants = {
    hover: {
      scale: 1.03,
      y: -8,
      rotateX: 5,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  }

  return (
    <div className="min-h-screen  bg-gradient-to-br via-black  text-white text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Powerful Features
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the tools that make our platform stand out from the competition
          </p>
        </motion.div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Metrics - Enhanced */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 border border-[#1f1f1f] relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-purple-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.05))",
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.1))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Floating orbs */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold">Performance</h3>
                <motion.div
                  className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { name: "Performance", score: 100, color: "#10b981" },
                  { name: "SEO", score: 100, color: "#f59e0b" },
                  { name: "Accessibility", score: 100, color: "#3b82f6" },
                  { name: "Best Practices", score: 100, color: "#8b5cf6" },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    className="text-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 relative">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="#1a1a1a" strokeWidth="4" fill="none" />
                        <motion.circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke={metric.color}
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                      >
                        <span className="text-xs font-bold">{metric.score}</span>
                      </motion.div>
                    </div>
                    <div className="text-xs text-gray-400">{metric.name}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-[#0a0a0a] rounded-lg p-3 border border-[#1a1a1a] backdrop-blur-sm"
                whileHover={{ borderColor: "#22c55e" }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2 text-xs">
                  {[
                    { label: "FCP", value: "0.8s", color: "text-green-400" },
                    { label: "LCP", value: "1.2s", color: "text-green-400" },
                    { label: "CLS", value: "0.0", color: "text-blue-400" },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                    >
                      <span className="text-gray-400">{metric.label}</span>
                      <span className={`font-mono ${metric.color}`}>{metric.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Premium Deployment Pipeline */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 border border-[#1f1f1f] relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center"
                  animate={{ rotate: isDeploying ? 360 : 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Terminal className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold">Deployment</h3>
                {isDeploying && (
                  <motion.div
                    className="ml-auto flex items-center gap-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Clock className="w-3 h-3 text-blue-400 animate-spin" />
                    <span className="text-xs text-blue-400">Deploying...</span>
                  </motion.div>
                )}
              </div>

              <motion.div
                className="bg-[#0a0a0a] rounded-lg p-3 mb-4 border border-[#1a1a1a]"
                whileHover={{ borderColor: "#3b82f6" }}
              >
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#ff5f57] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#28ca42] rounded-full"></div>
                </div>
                <div className="font-mono text-xs space-y-1">
                  <motion.div
                    className="text-green-400"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    <span className="text-gray-400">{">"}</span> npm run build
                  </motion.div>
                  <motion.div
                    className="text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="text-gray-400">{">"}</span> vercel deploy
                  </motion.div>
                  <AnimatePresence>
                    {deploymentStep >= 4 && (
                      <motion.div
                        className="text-green-400 flex items-center gap-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle className="w-3 h-3" />
                        <span>✓ Deployed to production</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Premium Pipeline Steps */}
              <div className="relative mb-3">
                {/* Connecting line */}
                <div className="absolute top-3 left-3 right-3 h-0.5 bg-gray-700 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: isDeploying ? `${(deploymentStep / 4) * 100}%` : "0%",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                <div className="grid grid-cols-4 gap-2 relative">
                  {[
                    { label: "Build", icon: "1" },
                    { label: "Test", icon: "2" },
                    { label: "Deploy", icon: "3" },
                    { label: "Live", icon: "4" },
                  ].map((step, index) => (
                    <motion.div
                      key={step.label}
                      className="text-center relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      <motion.div
                        className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center text-xs font-bold relative z-10 ${
                          deploymentStep > index
                            ? "bg-green-500 text-white"
                            : deploymentStep === index + 1
                              ? "bg-blue-500 text-white"
                              : "bg-gray-600 text-gray-400"
                        }`}
                        animate={
                          deploymentStep === index + 1
                            ? {
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                                  "0 0 0 8px rgba(59, 130, 246, 0)",
                                  "0 0 0 0 rgba(59, 130, 246, 0)",
                                ],
                              }
                            : deploymentStep > index
                              ? {
                                  scale: [1, 1.1, 1],
                                  boxShadow: [
                                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                                    "0 0 0 6px rgba(34, 197, 94, 0)",
                                    "0 0 0 0 rgba(34, 197, 94, 0)",
                                  ],
                                }
                              : {}
                        }
                        transition={{
                          duration: 0.6,
                          repeat: deploymentStep === index + 1 ? Number.POSITIVE_INFINITY : 0,
                        }}
                      >
                        <AnimatePresence mode="wait">
                          {deploymentStep > index ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                            >
                              <CheckCircle className="w-3 h-3" />
                            </motion.div>
                          ) : (
                            <motion.span key="number" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              {step.icon}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <div
                        className={`text-xs transition-colors duration-300 ${
                          deploymentStep > index
                            ? "text-green-400"
                            : deploymentStep === index + 1
                              ? "text-blue-400"
                              : "text-gray-500"
                        }`}
                      >
                        {step.label}
                      </div>

                      {/* Step completion animation */}
                      <AnimatePresence>
                        {deploymentStep === index + 1 && (
                          <motion.div
                            className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-blue-400 rounded-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="text-xs text-gray-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span>Auto-deploy enabled</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Global Network */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 border border-[#1f1f1f] relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold">Global Network</h3>
                <motion.div
                  className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <motion.div
                className="bg-[#0a0a0a] rounded-lg p-4 mb-4 h-32 relative border border-[#1a1a1a]"
                whileHover={{ borderColor: "#06b6d4" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 relative"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Enhanced world dots with continents */}
                    {Array.from({ length: 80 }).map((_, i) => {
                      const angle = (i / 80) * Math.PI * 2
                      const radius = 25 + Math.random() * 20
                      const x = Math.cos(angle) * radius + 48
                      const y = Math.sin(angle) * radius + 48
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-gray-600 rounded-full"
                          style={{ left: x, top: y }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 0.6, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.01 }}
                          whileHover={{ scale: 2, opacity: 1 }}
                        />
                      )
                    })}

                    {/* Enhanced active points with connections */}
                    {[
                      { top: "20%", left: "30%", delay: 0 },
                      { top: "60%", left: "70%", delay: 0.5 },
                      { top: "40%", left: "20%", delay: 1 },
                      { top: "30%", left: "80%", delay: 1.5 },
                    ].map((pos, i) => (
                      <motion.div key={i}>
                        <motion.div
                          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
                          style={pos}
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [1, 0.5, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(6, 182, 212, 0.7)",
                              "0 0 0 8px rgba(6, 182, 212, 0)",
                              "0 0 0 0 rgba(6, 182, 212, 0)",
                            ],
                          }}
                          transition={{
                            delay: 1 + pos.delay,
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        {/* Connection lines */}
                        {i < 3 && (
                          <motion.div
                            className="absolute w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent origin-bottom"
                            style={{
                              left: pos.left,
                              top: pos.top,
                              transform: `rotate(${45 * i}deg)`,
                            }}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 1.5 + pos.delay, duration: 0.8 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                {[
                  { label: "Regions", value: "8", color: "text-cyan-400" },
                  { label: "Uptime", value: "99.9%", color: "text-green-400" },
                  { label: "Latency", value: "<50ms", color: "text-blue-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <motion.div
                      className={`font-bold text-lg ${stat.color}`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Project Structure */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 border border-[#1f1f1f] relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FileText className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold">Project Structure</h3>
              </div>

              <motion.div
                className="bg-[#0a0a0a] rounded-lg p-3 border border-[#1a1a1a]"
                whileHover={{ borderColor: "#a855f7" }}
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#ff5f57] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#28ca42] rounded-full"></div>
                </div>

                <div className="font-mono text-xs space-y-1">
                  {[
                    { name: "📁 src", level: 0, type: "folder" },
                    { name: "📁 components", level: 1, type: "folder" },
                    { name: "📁 pages", level: 1, type: "folder" },
                    { name: "⚛️ layout.tsx", level: 2, type: "file" },
                    { name: "⚛️ page.tsx", level: 2, type: "file" },
                    { name: "📁 lib", level: 1, type: "folder" },
                    { name: "📁 styles", level: 1, type: "folder" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer rounded px-2 py-1"
                      style={{ paddingLeft: `${item.level * 12}px` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "rgba(147, 51, 234, 0.1)",
                        scale: 1.02,
                      }}
                    >
                      <motion.span
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      >
                        {item.name.split(" ")[0]}
                      </motion.span>
                      <span className={item.type === "folder" ? "text-purple-400" : "text-blue-400"}>
                        {item.name.split(" ").slice(1).join(" ")}
                      </span>
                      {item.type === "file" && (
                        <motion.div
                          className="ml-auto w-1 h-1 bg-green-400 rounded-full"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span>Next.js 15 Ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Resource Scaling */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 border border-[#1f1f1f] relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1))",
                  "linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1))",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Activity className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold">Auto Scaling</h3>
              </div>

              <motion.div
                className="bg-[#0a0a0a] rounded-lg p-3 mb-4 h-20 relative border border-[#1a1a1a] overflow-hidden"
                whileHover={{ borderColor: "#f97316" }}
              >
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 60 Q 30 40 60 45 T 120 40 T 180 35 L 180 80 L 0 80 Z"
                    fill="url(#scaleGradient)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 2 }}
                  />
                  <motion.path
                    d="M 0 60 Q 30 40 60 45 T 120 40 T 180 35"
                    stroke="#f97316"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 2 }}
                  />
                  {/* Animated data points */}
                  {[30, 60, 120, 150].map((x, i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={45 - i * 2}
                      r="2"
                      fill="#f97316"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                    />
                  ))}
                </svg>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                  <motion.div
                    className="font-bold text-2xl text-orange-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                  >
                    4
                  </motion.div>
                  <div className="text-gray-400">Active Servers</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                  <motion.div
                    className="font-bold text-2xl text-green-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    2.1s
                  </motion.div>
                  <div className="text-gray-400">Avg Response</div>
                </motion.div>
              </div>

              <div className="mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span>Load balancing active</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Analytics Dashboard */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 border border-[#1f1f1f] relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(147, 51, 234, 0.1))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(99, 102, 241, 0.1))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <BarChart3 className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold">Analytics</h3>
                <motion.div
                  className="ml-auto w-2 h-2 bg-indigo-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Page Views", value: "2.4M", change: "+12%", color: "indigo" },
                  { label: "Users", value: "847K", change: "+8%", color: "blue" },
                  { label: "Sessions", value: "1.2M", change: "+15%", color: "purple" },
                  { label: "Bounce Rate", value: "2.1%", change: "-5%", color: "green" },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="bg-[#0a0a0a] rounded-lg p-2 border border-[#1a1a1a] relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: `#${metric.color === "indigo" ? "6366f1" : metric.color === "blue" ? "3b82f6" : metric.color === "purple" ? "8b5cf6" : "22c55e"}`,
                      y: -2,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    />
                    <div className="text-xs text-gray-400 mb-1 relative z-10">{metric.label}</div>
                    <div className="flex items-center justify-between relative z-10">
                      <motion.span
                        className="font-bold text-sm"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                      >
                        {metric.value}
                      </motion.span>
                      <motion.span
                        className={`text-xs ${metric.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      >
                        {metric.change}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-indigo-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span>Real-time tracking</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
