
import React from "react";
import BottomNav from "@/components/navigation/BottomNav";
import NutritionSummary from "@/components/dashboard/NutritionSummary";
import WaterConsumptionTracker from "@/components/dashboard/WaterConsumptionTracker";
import WorkoutFrequencyChart from "@/components/dashboard/WorkoutFrequencyChart";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import WorkoutOfTheDay from "@/components/dashboard/WorkoutOfTheDay";
import UpcomingClasses from "@/components/dashboard/UpcomingClasses";

const Dashboard: React.FC = () => {
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

  // Sample upcoming classes data
  const upcomingClassesData = [
    {
      title: "Membros Inferiores",
      date: "15/05 às 18:30",
      instructor: "Roberto",
      participants: [1, 2, 3]
    },
    {
      title: "Yoga Flow",
      date: "16/05 às 19:00",
      instructor: "Amanda",
      participants: [4, 5]
    }
  ];

  return (
    <div className="pb-20 dark:bg-background min-h-screen">
      {/* Header Profile Section */}
      <ProfileHeader 
        name="Nathan"
        imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
      />

      {/* Main Content */}
      <div className="px-5 py-6 space-y-6">
        {/* 1. Nutrition Summary */}
        <NutritionSummary data={nutritionData} />
        
        {/* 2. Workout of the day */}
        <WorkoutOfTheDay />
        
        {/* 3. Workout Frequency Chart */}
        <WorkoutFrequencyChart data={workoutFrequencyData} />

        {/* 4. Upcoming Classes */}
        <UpcomingClasses classes={upcomingClassesData} />

        {/* 5. Water Consumption Tracker */}
        <WaterConsumptionTracker initialValue={1.2} dailyGoal={3.0} />
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
