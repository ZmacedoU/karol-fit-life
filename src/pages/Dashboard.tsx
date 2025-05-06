
import React from "react";
import BottomNav from "@/components/navigation/BottomNav";
import ActivityProgress from "@/components/dashboard/ActivityProgress";
import StatisticsChart from "@/components/dashboard/StatisticsChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard: React.FC = () => {
  // Dados para os gráficos
  const caloriesData = [
    { name: "Seg", value: 2100 },
    { name: "Ter", value: 1950 },
    { name: "Qua", value: 2200 },
    { name: "Qui", value: 2050 },
    { name: "Sex", value: 1850 },
    { name: "Sáb", value: 1700 },
    { name: "Dom", value: 1250 },
  ];

  const proteinData = [
    { name: "Seg", value: 145 },
    { name: "Ter", value: 132 },
    { name: "Qua", value: 150 },
    { name: "Qui", value: 140 },
    { name: "Sex", value: 125 },
    { name: "Sáb", value: 110 },
    { name: "Dom", value: 80 },
  ];

  const weightData = [
    { name: "01/05", value: 81.5 },
    { name: "08/05", value: 80.8 },
    { name: "15/05", value: 80.2 },
    { name: "22/05", value: 79.5 },
    { name: "29/05", value: 79.0 },
    { name: "05/06", value: 78.5 },
  ];

  const workoutData = [
    { name: "Seg", value: 75 },
    { name: "Ter", value: 0 },
    { name: "Qua", value: 85 },
    { name: "Qui", value: 0 },
    { name: "Sex", value: 90 },
    { name: "Sáb", value: 60 },
    { name: "Dom", value: 0 },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="pb-20 animate-fade-in">
      {/* Compact Header */}
      <div className="px-5 py-5 bg-card">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{getGreeting()}, João</h1>
            <p className="text-muted-foreground text-xs">Quarta-feira, 6 de Maio</p>
          </div>
          <div className="h-10 w-10 bg-fitness-purple rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">JP</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-8">
        {/* Progress Summary - 2x2 grid with more spacing */}
        <div className="grid grid-cols-2 gap-4">
          <ActivityProgress 
            title="Calorias" 
            current={1250} 
            goal={2200} 
            unit="kcal"
            color="#9b87f5"
          />
          <ActivityProgress 
            title="Proteínas" 
            current={80} 
            goal={140} 
            unit="g"
            color="#4ADE80"
          />
          <ActivityProgress 
            title="Água" 
            current={1.2} 
            goal={3} 
            unit="L"
            color="#38BDF8"
          />
          <ActivityProgress 
            title="Passos" 
            current={5780} 
            goal={10000} 
            unit=""
            color="#FB923C"
          />
        </div>

        {/* Charts Section - Enhanced spacing */}
        <div className="mt-6">
          <Tabs defaultValue="calories" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4 h-10">
              <TabsTrigger value="calories" className="text-sm">Calorias</TabsTrigger>
              <TabsTrigger value="protein" className="text-sm">Proteína</TabsTrigger>
              <TabsTrigger value="weight" className="text-sm">Peso</TabsTrigger>
              <TabsTrigger value="workouts" className="text-sm">Treinos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calories" className="mt-0">
              <StatisticsChart 
                title="Consumo de Calorias" 
                data={caloriesData} 
                color="#9b87f5"
                valueFormatter={(value) => `${value} kcal`}
              />
            </TabsContent>
            
            <TabsContent value="protein" className="mt-0">
              <StatisticsChart 
                title="Consumo de Proteínas" 
                data={proteinData} 
                color="#4ADE80"
                valueFormatter={(value) => `${value}g`}
              />
            </TabsContent>
            
            <TabsContent value="weight" className="mt-0">
              <StatisticsChart 
                title="Evolução de Peso" 
                data={weightData} 
                color="#38BDF8"
                valueFormatter={(value) => `${value} kg`}
              />
            </TabsContent>
            
            <TabsContent value="workouts" className="mt-0">
              <StatisticsChart 
                title="Intensidade dos Treinos" 
                data={workoutData} 
                color="#FB923C"
                valueFormatter={(value) => value ? `${value}%` : 'Descanso'}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
