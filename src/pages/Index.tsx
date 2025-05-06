
import React from "react";
import AuthForm from "@/components/AuthForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-fitness-lightGray px-4">
      <div className="animate-scale-in">
        <div className="mb-8 text-center">
          <div className="h-20 w-20 bg-fitness-purple rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">KF</span>
          </div>
          <h1 className="text-3xl font-bold text-fitness-darkGray">Karol Fit Life</h1>
          <p className="text-gray-500 mt-2">Seu parceiro de treino e dieta</p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Index;
