
import React, { useState } from "react";
import BottomNav from "@/components/navigation/BottomNav";
import NutritionSummary from "@/components/dashboard/NutritionSummary";
import WorkoutFrequencyChart from "@/components/dashboard/WorkoutFrequencyChart";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import WorkoutOfTheDay from "@/components/dashboard/WorkoutOfTheDay";
import { Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaterConsumptionDialog from "@/components/dashboard/WaterConsumptionDialog";

// Helper function to generate motivational message based on workout data
const getMotivationalMessage = (data: Array<{ day: string; frequency: number }>) => {
  const completedDays = data.filter(day => day.frequency > 0).length;
  const totalDays = data.length;
  
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  if (completedDays === 0) return "Vamos começar a semana com tudo!";
  if (completedDays === totalDays) return "Parabéns! Você completou todos os treinos da semana!";
  
  if (today === 5) return "Sexta também é dia! Não desista agora.";
  if (today === 3 && completedDays >= 3) return "Metade da semana concluída! Continue assim!";
  if (completedDays >= 4) return "Estamos quase completando a semana de treino, não desista agora!";
  
  return "Mantenha a consistência, cada treino conta!";
};

// Helper function to calculate consecutive workout days
const getConsecutiveDays = (data: Array<{ day: string; frequency: number }>) => {
  // For demonstration purposes, we're returning 5
  // In a real app, this would calculate the actual streak based on historical data
  return 5;
};

const Dashboard: React.FC = () => {
  const [isWaterDialogOpen, setIsWaterDialogOpen] = useState(false);
  
  // Sample nutrition data
  const nutritionData = {
    calories: {
      consumed: 1450,
      goal: 2200,
    },
    macros: {
      protein: { consumed: 85, goal: 140 },
      carbs: { consumed: 135, goal: 250 },
      fat: { consumed: 45, goal: 70 }
    }
  };

  // Sample workout frequency data
  const workoutFrequencyData = [
    { day: "Seg", frequency: 1 },
    { day: "Ter", frequency: 1 },
    { day: "Qua", frequency: 0 },
    { day: "Qui", frequency: 1 },
    { day: "Sex", frequency: 0 },
    { day: "Sáb", frequency: 0 },
    { day: "Dom", frequency: 0 }
  ];

  // Get the motivational message for the user
  const motivationalMessage = getMotivationalMessage(workoutFrequencyData);
  
  // Get consecutive days
  const consecutiveDays = getConsecutiveDays(workoutFrequencyData);

  return (
    <div className="pb-20 dark:bg-background min-h-screen relative">
      {/* Header Profile Section with motivational message */}
      <ProfileHeader 
        name="Nathan"
        imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
        motivationalMessage={motivationalMessage}
        consecutiveDays={consecutiveDays}
      />

      {/* Main Content - Two Column Grid Layout */}
      <div className="px-5 py-3 grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh-185px)]">
        {/* Left Column - Nutrition Summary */}
        <div className="h-full">
          <NutritionSummary data={nutritionData} />
        </div>
        
        {/* Right Column - Workout Info */}
        <div className="h-full flex flex-col gap-4">
          {/* Workout of the day - Takes up more space */}
          <div className="flex-grow">
            <WorkoutOfTheDay />
          </div>
          
          {/* Workout Frequency Chart - Takes less space */}
          <div className="h-[42%]">
            <WorkoutFrequencyChart data={workoutFrequencyData} />
          </div>
        </div>
      </div>

      {/* Water Consumption Floating Button */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          onClick={() => setIsWaterDialogOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600"
          aria-label="Registro de água"
        >
          <Droplet className="h-6 w-6" />
        </Button>
      </div>

      {/* Water Consumption Dialog */}
      <WaterConsumptionDialog 
        open={isWaterDialogOpen} 
        onOpenChange={setIsWaterDialogOpen} 
      />

      <BottomNav />
    </div>
  );
};

export default Dashboard;
