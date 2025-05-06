
import React from "react";
import BottomNav from "@/components/navigation/BottomNav";
import ActivityProgress from "@/components/dashboard/ActivityProgress";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import MealCard from "@/components/dashboard/MealCard";

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

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="pb-20 animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-8 pb-5 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{getGreeting()}, João</h1>
            <p className="text-gray-500 text-sm">Quarta-feira, 6 de Maio</p>
          </div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 space-y-6 mt-4">
        {/* Progress Cards */}
        <div className="grid grid-cols-2 gap-4">
          <ActivityProgress 
            title="Calorias" 
            current={1250} 
            goal={2200} 
            unit="kcal"
            color="#8B5CF6" 
          />
          <ActivityProgress 
            title="Proteínas" 
            current={80} 
            goal={140} 
            unit="g"
            color="#10B981" 
          />
          <ActivityProgress 
            title="Água" 
            current={1.2} 
            goal={3} 
            unit="L"
            color="#0EA5E9" 
          />
          <ActivityProgress 
            title="Passos" 
            current={5780} 
            goal={10000} 
            unit=""
            color="#F97316" 
          />
        </div>

        {/* Workout Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Seus treinos</h2>
            <a href="/workout" className="text-sm text-fitness-purple">Ver todos</a>
          </div>
          <div className="space-y-3">
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
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Refeições do dia</h2>
            <a href="/diet" className="text-sm text-fitness-purple">Ver todas</a>
          </div>
          <div className="space-y-3">
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

      <BottomNav />
    </div>
  );
};

export default Dashboard;
