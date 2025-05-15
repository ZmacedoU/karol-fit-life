
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-wine-deep via-wine-medium to-wine-light relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient spotlight effect that follows mouse */}
      <div 
        className="absolute inset-0 bg-radial-gradient opacity-20 z-0"
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
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
              src="/lovable-uploads/e0fd001c-0828-4e6a-ab50-c214de822f44.png" 
              alt="Karol Personal" 
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
          className="mt-8 text-center text-wine-light/70 text-sm"
        >
          Direitos autorais Karoline Personal © {new Date().getFullYear()}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
