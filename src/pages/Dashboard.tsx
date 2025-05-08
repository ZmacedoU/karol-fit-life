
import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/navigation/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Home, Image, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // Helper function for the greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  // Format current date for display
  const formatDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    };
    return date.toLocaleDateString('pt-BR', options);
  };

  // Handle action button clicks
  const handleActionClick = (action: string) => {
    switch(action) {
      case 'agenda':
        navigate('/workout');
        break;
      case 'home':
        toast.info("Treinos em casa em breve!");
        break;
      case 'feed':
        toast.info("Feed de notícias em breve!");
        break;
      case 'more':
        toast.info("Mais opções em breve!");
        break;
      default:
        break;
    }
  };

  return (
    <div className="pb-20 bg-[#F9F9F9] min-h-screen">
      {/* Header Profile Section */}
      <div className="bg-white px-5 pt-12 pb-5 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-500 text-sm">{getGreeting()}</p>
              <h1 className="text-xl font-bold">Nathan</h1>
            </div>
          </div>
          <div className="relative">
            <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-blue-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <span className="absolute top-0 right-0 h-3 w-3 bg-blue-600 rounded-full border border-white"></span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-6 space-y-8">
        {/* Workout of the day card */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-white">
          <div className="relative h-48 overflow-hidden">
            <img 
              src="public/lovable-uploads/38f943d6-5d44-478f-b306-dd6cb9d4f8f0.png" 
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

        {/* Quick Action Icons */}
        <div className="grid grid-cols-4 gap-2">
          <div 
            className="flex flex-col items-center p-3" 
            onClick={() => handleActionClick('agenda')}
          >
            <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-1">
              <CalendarDays className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-xs font-medium text-gray-700">Agenda</span>
          </div>
          
          <div 
            className="flex flex-col items-center p-3" 
            onClick={() => handleActionClick('home')}
          >
            <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-1">
              <Home className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-xs font-medium text-gray-700">Em casa</span>
          </div>
          
          <div 
            className="flex flex-col items-center p-3" 
            onClick={() => handleActionClick('feed')}
          >
            <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-1">
              <Image className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-xs font-medium text-gray-700">Feed</span>
          </div>
          
          <div 
            className="flex flex-col items-center p-3" 
            onClick={() => handleActionClick('more')}
          >
            <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-1">
              <MoreHorizontal className="h-6 w-6 text-gray-700" />
            </div>
            <span className="text-xs font-medium text-gray-700">Outros</span>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Próximas aulas</h2>
            <button 
              className="text-blue-600 text-sm font-medium"
              onClick={() => navigate('/workout')}
            >
              Ver mais
            </button>
          </div>

          <div className="space-y-3">
            {/* Class Card */}
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="bg-gray-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <CalendarDays className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Membros Inferiores</h3>
                    <p className="text-xs text-gray-500">15/05 às 18:30 • Prof. Roberto</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                          alt="Participant" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Class Card */}
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="bg-gray-100 h-12 w-12 rounded-lg flex items-center justify-center">
                    <CalendarDays className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Yoga Flow</h3>
                    <p className="text-xs text-gray-500">16/05 às 19:00 • Prof. Amanda</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[4, 5].map((i) => (
                      <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                          alt="Participant" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
