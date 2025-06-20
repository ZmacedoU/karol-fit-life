
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, User, Utensils, Droplet } from "lucide-react";
import WaterConsumptionDialog from "@/components/dashboard/WaterConsumptionDialog";

const BottomNav: React.FC = () => {
  const [isWaterDialogOpen, setIsWaterDialogOpen] = useState(false);
  
  const navItems = [
    { icon: Home, label: "Início", path: "/dashboard" },
    { icon: Calendar, label: "Treinos", path: "/workout" },
    { icon: Droplet, label: "Água", path: "", onClick: () => setIsWaterDialogOpen(true) },
    { icon: Utensils, label: "Dieta", path: "/diet" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 px-2">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item, index) => (
            item.path ? (
              <Link
                to={item.path}
                key={index}
                className="flex flex-col items-center justify-center w-full h-full text-fitness-darkGray hover:text-fitness-orange transition-colors"
              >
                <item.icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.onClick}
                className="flex flex-col items-center justify-center w-full h-full text-fitness-darkGray hover:text-blue-500 transition-colors"
              >
                <item.icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            )
          ))}
        </div>
      </div>

      {/* Full Screen Water Consumption Dialog */}
      <WaterConsumptionDialog 
        open={isWaterDialogOpen} 
        onOpenChange={setIsWaterDialogOpen} 
      />
    </>
  );
};

export default BottomNav;
