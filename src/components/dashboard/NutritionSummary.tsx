
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface NutritionData {
  calories: {
    consumed: number;
    goal: number;
  };
  macros: {
    protein: { consumed: number; goal: number };
    carbs: { consumed: number; goal: number };
    fat: { consumed: number; goal: number };
  };
}

interface NutritionSummaryProps {
  data: NutritionData;
}

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ data }) => {
  const caloriePercentage = (data.calories.consumed / data.calories.goal) * 100;
  const proteinPercentage = (data.macros.protein.consumed / data.macros.protein.goal) * 100;
  const carbsPercentage = (data.macros.carbs.consumed / data.macros.carbs.goal) * 100;
  const fatPercentage = (data.macros.fat.consumed / data.macros.fat.goal) * 100;

  return (
    <Card className="p-4 h-full">
      <h3 className="font-bold text-lg mb-3">Nutrição Diária</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-[calc(100%-40px)]">
        {/* Circular Calories Progress */}
        <div className="relative flex-shrink-0 mx-auto md:mx-0" style={{ width: "130px", height: "130px" }}>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              strokeLinecap="round"
            />
            
            {/* Progress circle with gradient */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#calorieGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - caloriePercentage / 100)}`}
              transform="rotate(-90 50 50)"
              className="transition-all duration-500 ease-in-out"
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="calorieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Centered text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{data.calories.consumed}</span>
            <span className="text-xs text-muted-foreground">/ {data.calories.goal} kcal</span>
          </div>
        </div>
        
        {/* Macros Grid */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {/* Protein */}
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-transparent border border-border/50 p-3 shadow-sm">
            <div className="text-xs text-muted-foreground mb-2">Proteínas</div>
            <div className="font-medium text-sm mb-2">{data.macros.protein.consumed}g
              <span className="text-xs text-muted-foreground"> / {data.macros.protein.goal}g</span>
            </div>
            <Progress 
              value={proteinPercentage} 
              className="h-1.5"
              style={{ ["--progress-background" as any]: "#4ADE80" }}
            />
          </div>
          
          {/* Carbs */}
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-transparent border border-border/50 p-3 shadow-sm">
            <div className="text-xs text-muted-foreground mb-2">Carboidratos</div>
            <div className="font-medium text-sm mb-2">{data.macros.carbs.consumed}g
              <span className="text-xs text-muted-foreground"> / {data.macros.carbs.goal}g</span>
            </div>
            <Progress 
              value={carbsPercentage} 
              className="h-1.5"
              style={{ ["--progress-background" as any]: "#38BDF8" }}
            />
          </div>
          
          {/* Fat */}
          <div className="rounded-lg bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-transparent border border-border/50 p-3 shadow-sm">
            <div className="text-xs text-muted-foreground mb-2">Gorduras</div>
            <div className="font-medium text-sm mb-2">{data.macros.fat.consumed}g
              <span className="text-xs text-muted-foreground"> / {data.macros.fat.goal}g</span>
            </div>
            <Progress 
              value={fatPercentage} 
              className="h-1.5"
              style={{ ["--progress-background" as any]: "#FB923C" }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NutritionSummary;
