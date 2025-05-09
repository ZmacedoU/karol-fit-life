
import React, { useState } from "react";
import BottomNav from "@/components/navigation/BottomNav";
import NutritionSummary from "@/components/dashboard/NutritionSummary";
import WorkoutFrequencyChart from "@/components/dashboard/WorkoutFrequencyChart";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import WorkoutOfTheDay from "@/components/dashboard/WorkoutOfTheDay";
import { Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaterConsumptionDialog from "@/components/dashboard/WaterConsumptionDialog";

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
    { day: "Ter", frequency: 2 },
    { day: "Qua", frequency: 0 },
    { day: "Qui", frequency: 1 },
    { day: "Sex", frequency: 2 },
    { day: "Sáb", frequency: 1 },
    { day: "Dom", frequency: 0 }
  ];

  return (
    <div className="pb-20 dark:bg-background min-h-screen relative">
      {/* Header Profile Section */}
      <ProfileHeader 
        name="Nathan"
        imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
      />

      {/* Main Content */}
      <div className="px-5 py-6 space-y-8">
        {/* 1. Nutrition Summary */}
        <NutritionSummary data={nutritionData} />
        
        {/* 2. Workout of the day */}
        <WorkoutOfTheDay />
        
        {/* 3. Workout Frequency Chart */}
        <WorkoutFrequencyChart data={workoutFrequencyData} />
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
