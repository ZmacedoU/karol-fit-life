
import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkoutCardProps {
  title: string;
  time: string;
  exercises: number;
  isToday?: boolean;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  time,
  exercises,
  isToday = false,
}) => {
  return (
    <Card className={`p-4 ${isToday ? 'border-l-4 border-l-fitness-purple' : ''}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{time} • {exercises} exercícios</span>
          </div>
        </div>
        <Button 
          variant={isToday ? "default" : "outline"} 
          size="sm" 
          className={isToday ? "h-8 bg-fitness-purple hover:bg-fitness-darkPurple" : "h-8"}
        >
          {isToday ? "Iniciar" : "Ver"}
        </Button>
      </div>
    </Card>
  );
};

export default WorkoutCard;
