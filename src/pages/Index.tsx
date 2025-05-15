
import React from "react";
import AuthForm from "@/components/AuthForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4A071E] via-[#3A0619] to-[#250311] px-4">
      <div className="animate-scale-in w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="h-56 w-auto mx-auto mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/e0fd001c-0828-4e6a-ab50-c214de822f44.png" 
              alt="Karol Personal" 
              className="h-full w-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Karol Personal</h1>
          <p className="text-[#E6C3CE] text-sm mb-6">Transforme seu corpo, transforme sua vida</p>
        </div>
        
        <div className="bg-[#2D0416]/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#6D2237]/30">
          <AuthForm showRegister={false} />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[#A27A87] text-xs">
            © {new Date().getFullYear()} | Direitos autorais Karoline Personal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
