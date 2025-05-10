
import React from "react";
import AuthForm from "@/components/AuthForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-fitness-lightGray px-4">
      <div className="animate-scale-in">
        <div className="mb-8 text-center">
          <div className="h-28 w-auto mx-auto mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/e0fd001c-0828-4e6a-ab50-c214de822f44.png" 
              alt="Vinicius Di Fiore Treinador" 
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-gray-500 mt-2">Seu treinador pessoal</p>
        </div>
        <AuthForm showRegister={false} />
      </div>
    </div>
  );
};

export default Index;
