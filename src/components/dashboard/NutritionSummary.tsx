
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
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <div className="absolute inset-0 bg-gradient-to-br from-fitness-chart3 to-fitness-chart1"></div>
      <div className="absolute inset-0 flex flex-col p-5 text-white">
        <h3 className="font-bold text-lg mb-4">Nutrição Diária</h3>
      
        <div className="space-y-4">
          {/* Calories */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Calorias</span>
              <div className="text-sm">
                <span className="font-medium">{data.calories.consumed}</span>
                <span className="text-white/80"> / {data.calories.goal} kcal</span>
              </div>
            </div>
            <Progress 
              value={caloriePercentage} 
              className="h-2 bg-white/20"
              style={{ ["--progress-background" as any]: "#fff" }}
            />
          </div>
          
          {/* Macros Grid */}
          <div className="grid grid-cols-3 gap-2">
            {/* Protein */}
            <div className="rounded-lg bg-white/20 p-2">
              <div className="text-xs text-white/80 mb-1">Proteínas</div>
              <div className="font-medium text-sm">{data.macros.protein.consumed}g
                <span className="text-xs text-white/80"> / {data.macros.protein.goal}g</span>
              </div>
              <Progress 
                value={proteinPercentage} 
                className="h-1 mt-1 bg-white/20"
                style={{ ["--progress-background" as any]: "#fff" }}
              />
            </div>
            
            {/* Carbs */}
            <div className="rounded-lg bg-white/20 p-2">
              <div className="text-xs text-white/80 mb-1">Carboidratos</div>
              <div className="font-medium text-sm">{data.macros.carbs.consumed}g
                <span className="text-xs text-white/80"> / {data.macros.carbs.goal}g</span>
              </div>
              <Progress 
                value={carbsPercentage} 
                className="h-1 mt-1 bg-white/20"
                style={{ ["--progress-background" as any]: "#fff" }}
              />
            </div>
            
            {/* Fat */}
            <div className="rounded-lg bg-white/20 p-2">
              <div className="text-xs text-white/80 mb-1">Gorduras</div>
              <div className="font-medium text-sm">{data.macros.fat.consumed}g
                <span className="text-xs text-white/80"> / {data.macros.fat.goal}g</span>
              </div>
              <Progress 
                value={fatPercentage} 
                className="h-1 mt-1 bg-white/20"
                style={{ ["--progress-background" as any]: "#fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionSummary;
