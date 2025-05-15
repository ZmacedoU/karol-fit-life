
import React, { useEffect, useState } from "react";
import AuthForm from "@/components/AuthForm";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#421C52] via-[#642C79] to-[#853B92] relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/5"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: Math.random() * 20 + 10,
              ease: "easeInOut"
            }}
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
            }}
          />
        ))}
      </div>
      
      {/* Gradient spotlight effect that follows mouse */}
      <div 
        className="absolute inset-0 bg-radial-gradient opacity-30 z-0"
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Background circles */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[#5D1E6F]/40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#9A2B6E]/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="mb-8 text-center">
          <motion.div 
            className="h-56 w-auto mx-auto mb-4 flex justify-center"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            <img 
              src="/lovable-uploads/426c5dc9-698e-47e0-abb8-bc883d3c9fe3.png" 
              alt="Karoline Personal" 
              className="h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gradient-wine text-2xl font-serif tracking-wider"
          >
            Transforme seu corpo, eleve sua mente
          </motion.h1>
        </div>
        
        <AuthForm showRegister={false} customClass="wine-theme" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 text-center text-white/50 text-sm"
        >
          Direitos autorais Karoline Personal © {new Date().getFullYear()}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
