
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface ActivityProgressProps {
  title: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
}

const ActivityProgress: React.FC<ActivityProgressProps> = ({
  title,
  current,
  goal,
  unit,
  color,
}) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);
  
  return (
    <Card className="fitness-card">
      <div className="flex flex-col mb-2">
        <span className="text-sm text-gray-500">{title}</span>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xl font-semibold">
            {current} <span className="text-sm font-normal">{unit}</span>
          </span>
          <span className="text-sm text-gray-500">Meta: {goal} {unit}</span>
        </div>
      </div>
      <Progress 
        value={percentage} 
        className="h-2"
        style={{ 
          backgroundColor: "#F3F4F6",
          ["--progress-background" as any]: color 
        }}
      />
    </Card>
  );
};

export default ActivityProgress;
