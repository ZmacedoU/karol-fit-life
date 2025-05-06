
import React from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, User, Utensils } from "lucide-react";

const BottomNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: "Início", path: "/dashboard" },
    { icon: Calendar, label: "Treinos", path: "/workout" },
    { icon: Utensils, label: "Dieta", path: "/diet" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 px-2">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex flex-col items-center justify-center w-full h-full text-fitness-darkGray hover:text-fitness-purple transition-colors"
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
