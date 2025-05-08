
import React from "react";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorFrequency" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="day"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              tickLine={{ stroke: 'var(--muted-foreground)' }}
              axisLine={{ stroke: 'var(--muted-foreground)' }}
            />
            <YAxis 
              tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              tickLine={{ stroke: 'var(--muted-foreground)' }}
              axisLine={{ stroke: 'var(--muted-foreground)' }}
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "#fff"
              }}
              formatter={(value) => [`${value} treino(s)`, 'Frequência']}
              labelFormatter={(label) => `${label}`}
            />
            <Area
              type="monotone"
              dataKey="frequency"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorFrequency)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default WorkoutFrequencyChart;
