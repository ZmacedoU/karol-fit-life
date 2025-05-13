
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
  // Calculate how many days in the week have been completed (needed for progress bar)
  const completedDays = data.filter(day => day.frequency > 0).length;
  const totalDays = data.length;
  const progress = Math.round((completedDays / totalDays) * 100);
  
  return (
    <Card className="p-5">
      <div className="grid grid-cols-7 gap-2 mb-3 animate-fade-in">
        {data.map((day, index) => (
          <div 
            key={day.day} 
            className={`flex flex-col items-center ${index === new Date().getDay() ? 'relative' : ''}`}
          >
            <div 
              className={`
                h-12 w-12 rounded-full flex items-center justify-center mb-1
                ${day.frequency > 0 
                  ? 'bg-fitness-orange text-white' 
                  : 'bg-muted/30 text-muted-foreground'}
                ${index === new Date().getDay() ? 'ring-2 ring-fitness-orange ring-offset-2 ring-offset-background' : ''}
                transition-all duration-300 transform hover:scale-105
              `}
            >
              {day.frequency > 0 ? (
                <Check className="h-5 w-5" />
              ) : null}
            </div>
            <span className="text-xs font-medium">{day.day}</span>
          </div>
        ))}
      </div>
      
      <div className="w-full bg-muted/30 h-1 rounded-full overflow-hidden">
        <div 
          className="bg-fitness-orange h-full rounded-full animate-scale-in transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
};

export default WorkoutFrequencyChart;
