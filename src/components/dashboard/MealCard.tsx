
import React from "react";
import { Card } from "@/components/ui/card";

interface MealCardProps {
  type: string;
  time: string;
  calories: number;
  completed: boolean;
  foods: Array<{ name: string; amount: string }>;
}

const MealCard: React.FC<MealCardProps> = ({
  type,
  time,
  calories,
  completed,
  foods,
}) => {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-lg">{type}</h3>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium mr-3">{calories} kcal</span>
          <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center">
            {completed ? (
              <div className="h-4 w-4 bg-fitness-purple rounded-full" />
            ) : null}
          </div>
        </div>
      </div>
      <div className="space-y-1">
        {foods.map((food, index) => (
          <div key={index} className="text-sm flex justify-between">
            <span>{food.name}</span>
            <span className="text-gray-500">{food.amount}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MealCard;
