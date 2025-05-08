
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
    <Card className="p-5">
      <h3 className="font-bold text-lg mb-4">Nutrição Diária</h3>
      
      <div className="space-y-4">
        {/* Calories */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Calorias</span>
            <div className="text-sm">
              <span className="font-medium">{data.calories.consumed}</span>
              <span className="text-muted-foreground"> / {data.calories.goal} kcal</span>
            </div>
          </div>
          <Progress 
            value={caloriePercentage} 
            className="h-2"
            style={{ ["--progress-background" as any]: "#8B5CF6" }}
          />
        </div>
        
        {/* Macros Grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* Protein */}
          <div className="rounded-lg bg-muted p-2">
            <div className="text-xs text-muted-foreground mb-1">Proteínas</div>
            <div className="font-medium text-sm">{data.macros.protein.consumed}g
              <span className="text-xs text-muted-foreground"> / {data.macros.protein.goal}g</span>
            </div>
            <Progress 
              value={proteinPercentage} 
              className="h-1 mt-1"
              style={{ ["--progress-background" as any]: "#4ADE80" }}
            />
          </div>
          
          {/* Carbs */}
          <div className="rounded-lg bg-muted p-2">
            <div className="text-xs text-muted-foreground mb-1">Carboidratos</div>
            <div className="font-medium text-sm">{data.macros.carbs.consumed}g
              <span className="text-xs text-muted-foreground"> / {data.macros.carbs.goal}g</span>
            </div>
            <Progress 
              value={carbsPercentage} 
              className="h-1 mt-1"
              style={{ ["--progress-background" as any]: "#38BDF8" }}
            />
          </div>
          
          {/* Fat */}
          <div className="rounded-lg bg-muted p-2">
            <div className="text-xs text-muted-foreground mb-1">Gorduras</div>
            <div className="font-medium text-sm">{data.macros.fat.consumed}g
              <span className="text-xs text-muted-foreground"> / {data.macros.fat.goal}g</span>
            </div>
            <Progress 
              value={fatPercentage} 
              className="h-1 mt-1"
              style={{ ["--progress-background" as any]: "#FB923C" }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NutritionSummary;
