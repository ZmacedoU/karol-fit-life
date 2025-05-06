
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/navigation/BottomNav";

const Workout: React.FC = () => {
  const workoutGroups = [
    {
      day: "Segunda",
      title: "Treino A - Superiores",
      exercises: [
        { name: "Supino reto", sets: "4 séries", reps: "12 reps" },
        { name: "Remada curvada", sets: "4 séries", reps: "10-12 reps" },
        { name: "Desenvolvimento", sets: "3 séries", reps: "12 reps" },
        { name: "Rosca direta", sets: "3 séries", reps: "12 reps" },
        { name: "Tríceps corda", sets: "3 séries", reps: "12 reps" },
      ]
    },
    {
      day: "Quarta",
      title: "Treino B - Inferiores",
      exercises: [
        { name: "Agachamento livre", sets: "4 séries", reps: "12 reps" },
        { name: "Leg Press 45°", sets: "4 séries", reps: "12 reps" },
        { name: "Cadeira extensora", sets: "3 séries", reps: "12 reps" },
        { name: "Cadeira flexora", sets: "3 séries", reps: "12 reps" },
        { name: "Panturrilha em pé", sets: "4 séries", reps: "15 reps" },
      ]
    },
    {
      day: "Sexta",
      title: "Treino C - Completo",
      exercises: [
        { name: "Supino inclinado", sets: "3 séries", reps: "12 reps" },
        { name: "Puxada frontal", sets: "3 séries", reps: "12 reps" },
        { name: "Agachamento sumô", sets: "3 séries", reps: "12 reps" },
        { name: "Rosca martelo", sets: "3 séries", reps: "12 reps" },
        { name: "Tríceps francês", sets: "3 séries", reps: "12 reps" },
      ]
    }
  ];

  return (
    <div className="pb-20 animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-8 pb-5 bg-white">
        <h1 className="text-2xl font-bold mb-4">Treinos</h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar exercícios" className="pl-10 fitness-input" />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 mt-6">
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="weekly">Semanal</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
            <TabsTrigger value="exercises">Exercícios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="space-y-6">
            {workoutGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-fitness-purple mr-2" />
                  <h2 className="text-lg font-semibold">{group.day}: {group.title}</h2>
                </div>
                
                <Card className="fitness-card space-y-4">
                  {group.exercises.map((exercise, exerciseIndex) => (
                    <div 
                      key={exerciseIndex} 
                      className={`flex justify-between items-center py-2 ${
                        exerciseIndex < group.exercises.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <div>
                        <p className="font-medium">{exercise.name}</p>
                        <p className="text-sm text-gray-500">
                          {exercise.sets} • {exercise.reps}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 text-fitness-purple hover:text-fitness-darkPurple hover:bg-gray-100"
                      >
                        Detalhes
                      </Button>
                    </div>
                  ))}
                </Card>
              </div>
            ))}
            
            <Button className="w-full fitness-button mt-4">
              Iniciar treino de hoje
            </Button>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="text-center py-10">
              <p className="text-gray-500">Seu histórico de treinos aparecerá aqui</p>
            </div>
          </TabsContent>
          
          <TabsContent value="exercises">
            <div className="text-center py-10">
              <p className="text-gray-500">Biblioteca de exercícios em breve</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default Workout;
