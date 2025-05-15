
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const ProfessorHeader: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-purple-primary py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/2c1e5507-507b-47c8-a3ae-35e5337dde8a.png" 
            alt="Karol Personal" 
            className="h-10 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold text-white">Painel do Professor</h1>
            <p className="text-white/80 text-sm">Gerenciamento de alunos</p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          className="text-white hover:bg-purple-dark"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          Sair
        </Button>
      </div>
    </header>
  );
};

export default ProfessorHeader;
