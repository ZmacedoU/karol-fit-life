
import React from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface WorkoutFrequencyChartProps {
  data: Array<{
    day: string;
    frequency: number;
  }>;
}

const WorkoutFrequencyChart: React.FC<WorkoutFrequencyChartProps> = ({ data }) => {
  // Calculate how many days in the week have been completed
  const completedDays = data.filter(day => day.frequency > 0).length;
  const totalDays = data.length;
  
  return (
    <Card className="p-5">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg">Frequência Semanal</h3>
      </div>
      
      <div className="grid grid-cols-7 gap-3 mb-5 animate-fade-in py-3">
        {data.map((day, index) => (
          <div 
            key={day.day} 
            className={`flex flex-col items-center ${index === new Date().getDay() ? 'relative' : ''}`}
          >
            <div 
              className={`
                h-14 w-14 rounded-full flex items-center justify-center mb-2
                ${day.frequency > 0 
                  ? 'bg-fitness-purple text-white' 
                  : 'bg-muted/30 text-muted-foreground'}
                ${index === new Date().getDay() ? 'ring-2 ring-fitness-purple ring-offset-2 ring-offset-background' : ''}
                transition-all duration-300 transform hover:scale-105
              `}
            >
              {day.frequency > 0 ? (
                <Check className="h-6 w-6" />
              ) : null}
            </div>
            <span className="text-xs font-medium">{day.day}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WorkoutFrequencyChart;
