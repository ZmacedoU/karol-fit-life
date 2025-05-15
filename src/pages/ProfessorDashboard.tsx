
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentTable from "@/components/professor/StudentTable";
import ProfessorHeader from "@/components/professor/ProfessorHeader";
import { motion } from "framer-motion";

const ProfessorDashboard: React.FC = () => {
  return (
    <div className="dark:bg-background min-h-screen relative">
      <ProfessorHeader />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 py-6"
      >
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="w-full mb-6 bg-purple-primary/20">
            <TabsTrigger value="students" className="flex-1">Alunos</TabsTrigger>
            <TabsTrigger value="workouts" className="flex-1">Treinos</TabsTrigger>
            <TabsTrigger value="diets" className="flex-1">Dietas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="students" className="mt-6">
            <StudentTable />
          </TabsContent>
          
          <TabsContent value="workouts" className="mt-6">
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold">Gerenciamento de Treinos</h3>
              <p className="text-muted-foreground mt-2">
                Selecione um aluno na aba Alunos para cadastrar ou editar treinos
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="diets" className="mt-6">
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold">Gerenciamento de Dietas</h3>
              <p className="text-muted-foreground mt-2">
                Selecione um aluno na aba Alunos para cadastrar ou editar dietas
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ProfessorDashboard;
