
import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface WorkoutFrequencyChartProps {
  data: Array<{
    day: string;
    frequency: number;
  }>;
}

const WorkoutFrequencyChart: React.FC<WorkoutFrequencyChartProps> = ({ data }) => {
  return (
    <Card className="p-5">
      <h3 className="font-bold text-lg mb-4">Frequência Semanal</h3>
      <div className="h-[180px] animate-fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            barSize={24}
            className="animate-scale-in"
          >
            <XAxis 
              dataKey="day"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: "8px 12px",
              }}
              formatter={(value) => [`${value} treino(s)`]}
              labelFormatter={(label) => `${label}`}
            />
            <Bar
              dataKey="frequency"
              radius={[4, 4, 0, 0]}
              fill="#8B5CF6"
              animationDuration={800}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <rect 
                  key={`rect-${index}`} 
                  fillOpacity={entry.frequency > 0 ? 1 : 0.3} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default WorkoutFrequencyChart;
