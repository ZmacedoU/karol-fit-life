
import React from "react";
import BottomNav from "@/components/navigation/BottomNav";
import ActivityProgress from "@/components/dashboard/ActivityProgress";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import MealCard from "@/components/dashboard/MealCard";
import StatisticsChart from "@/components/dashboard/StatisticsChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBarIcon, CalendarDays, Activity } from "lucide-react";

const Dashboard: React.FC = () => {
  const workouts = [
    { title: "Treino A - Superior", time: "Hoje, 18:00", exercises: 8, isToday: true },
    { title: "Treino B - Inferior", time: "Amanhã, 17:30", exercises: 7, isToday: false },
  ];

  const meals = [
    { 
      type: "Café da manhã", 
      time: "07:30", 
      calories: 420, 
      completed: true,
      foods: [
        { name: "Ovos mexidos", amount: "2 unid." },
        { name: "Pão integral", amount: "2 fatias" },
        { name: "Café preto", amount: "200ml" },
      ] 
    },
    { 
      type: "Almoço", 
      time: "12:30", 
      calories: 650, 
      completed: false,
      foods: [
        { name: "Peito de frango", amount: "150g" },
        { name: "Arroz integral", amount: "100g" },
        { name: "Brócolis", amount: "100g" },
      ] 
    },
  ];

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
      <div className="px-5 py-4 bg-card">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{getGreeting()}, João</h1>
            <p className="text-muted-foreground text-xs">Quarta-feira, 6 de Maio</p>
          </div>
          <div className="h-9 w-9 bg-fitness-purple rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">JP</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-5 mt-3">
        {/* Progress Summary - 2x2 grid with smaller cards */}
        <div className="grid grid-cols-2 gap-3">
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

        {/* Charts Section - Compact version */}
        <div className="mt-4">
          <Tabs defaultValue="calories" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-2 h-8">
              <TabsTrigger value="calories" className="text-xs px-1">Calorias</TabsTrigger>
              <TabsTrigger value="protein" className="text-xs px-1">Proteína</TabsTrigger>
              <TabsTrigger value="weight" className="text-xs px-1">Peso</TabsTrigger>
              <TabsTrigger value="workouts" className="text-xs px-1">Treinos</TabsTrigger>
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

        {/* Compact Sections */}
        <div className="flex flex-col space-y-4">
          {/* Workout Section */}
          <div>
            <div className="flex items-center mb-2">
              <Activity className="h-4 w-4 mr-1 text-fitness-purple" />
              <h2 className="text-base font-semibold">Seus treinos</h2>
              <a href="/workout" className="ml-auto text-xs text-fitness-purple">Ver todos</a>
            </div>
            <div className="space-y-2">
              {workouts.map((workout, index) => (
                <WorkoutCard
                  key={index}
                  title={workout.title}
                  time={workout.time}
                  exercises={workout.exercises}
                  isToday={workout.isToday}
                />
              ))}
            </div>
          </div>

          {/* Meals Section */}
          <div>
            <div className="flex items-center mb-2">
              <CalendarDays className="h-4 w-4 mr-1 text-fitness-purple" />
              <h2 className="text-base font-semibold">Refeições do dia</h2>
              <a href="/diet" className="ml-auto text-xs text-fitness-purple">Ver todas</a>
            </div>
            <div className="space-y-2">
              {meals.map((meal, index) => (
                <MealCard
                  key={index}
                  type={meal.type}
                  time={meal.time}
                  calories={meal.calories}
                  completed={meal.completed}
                  foods={meal.foods}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
