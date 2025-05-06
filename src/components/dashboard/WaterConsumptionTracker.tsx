
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Droplet, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

interface WaterConsumptionTrackerProps {
  initialValue?: number;
  dailyGoal?: number;
}

const WaterConsumptionTracker: React.FC<WaterConsumptionTrackerProps> = ({
  initialValue = 0,
  dailyGoal = 3.0,
}) => {
  const [consumption, setConsumption] = useState(initialValue);
  
  // Preset water amounts in liters
  const waterAmounts = [0.1, 0.25, 0.5];
  
  // Calculate fill percentage
  const fillPercentage = Math.min((consumption / dailyGoal) * 100, 100);
  
  // Handle adding water
  const addWater = (amount: number) => {
    const newAmount = Math.min(consumption + amount, dailyGoal);
    setConsumption(newAmount);
    toast.success(`${amount}L de água adicionado`);
  };
  
  // Handle decreasing water
  const decreaseWater = (amount: number) => {
    const newAmount = Math.max(consumption - amount, 0);
    setConsumption(newAmount);
    toast.info(`${amount}L de água removido`);
  };
  
  // Get color based on progress
  const getColor = () => {
    if (fillPercentage < 30) return "#38BDF8";
    if (fillPercentage < 70) return "#60A5FA";
    return "#2563EB";
  };

  return (
    <Card className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg">Consumo de Água</h3>
        <div className="text-sm text-muted-foreground">
          Meta: {dailyGoal}L
        </div>
      </div>
      
      <div className="flex gap-5 items-center">
        {/* Water visualization container */}
        <div className="relative w-24 h-32 bg-fitness-lightGray rounded-xl overflow-hidden flex-shrink-0">
          <div 
            className="absolute bottom-0 w-full transition-all duration-500 ease-out"
            style={{
              height: `${fillPercentage}%`,
              background: `linear-gradient(to top, ${getColor()}, ${getColor()}90)`,
              boxShadow: `0 0 10px ${getColor()}60`
            }}
          >
            {/* Water wave effect */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 animate-pulse"></div>
          </div>
          
          {/* Droplet icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80">
            <Droplet className="w-10 h-10" />
          </div>
          
          {/* Current consumption */}
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <span className="text-white font-bold text-lg glass-morphism rounded-md px-2">
              {consumption.toFixed(1)}L
            </span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex-1 space-y-4">
          {/* Slider */}
          <div>
            <Slider
              value={[fillPercentage]}
              max={100}
              step={1}
              onValueChange={(value) => {
                setConsumption((value[0] / 100) * dailyGoal);
              }}
              className="mt-2"
            />
          </div>
          
          {/* Quick add buttons */}
          <div className="flex flex-wrap gap-2">
            {waterAmounts.map((amount) => (
              <Button
                key={amount}
                size="sm"
                variant="outline"
                className="flex items-center gap-1 flex-1 min-w-[70px]"
                onClick={() => addWater(amount)}
              >
                <div className="flex items-center">
                  <Droplet className="w-3 h-3 mr-1" />
                  <Plus className="w-3 h-3" />
                </div> +{amount}L
              </Button>
            ))}
            
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 min-w-[70px]"
              onClick={() => decreaseWater(0.1)}
            >
              <div className="flex items-center">
                <Droplet className="w-3 h-3 mr-1" />
                <Minus className="w-3 h-3" />
              </div> -0.1L
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WaterConsumptionTracker;
