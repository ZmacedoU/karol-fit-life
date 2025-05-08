
import React from "react";
import { useNavigate } from "react-router-dom";

const WorkoutOfTheDay: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src="/lovable-uploads/38f943d6-5d44-478f-b306-dd6cb9d4f8f0.png" 
          alt="Workout" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <h3 className="text-white font-medium text-sm">TREINO DO DIA</h3>
          <div className="flex gap-1 mt-1">
            {['S','T','Q','Q','S','S','D'].map((day, index) => (
              <span key={index} className="w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-medium" style={{
                backgroundColor: index === 2 ? '#3b82f6' : 'rgba(255,255,255,0.2)',
                color: index === 2 ? 'white' : 'rgba(255,255,255,0.8)'
              }}>
                {day}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-white text-xl font-bold">Membros Superiores</h2>
              <p className="text-gray-300 text-xs">Prof. Carlos Anselmo | 40min</p>
            </div>
            <button 
              className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium"
              onClick={() => navigate('/workout')}
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-center">
        <div className="flex gap-1">
          {[0,1,2].map((dot, i) => (
            <span 
              key={i} 
              className={`block rounded-full ${i === 0 ? 'w-2 h-2 bg-blue-600' : 'w-1.5 h-1.5 bg-gray-300'}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutOfTheDay;
