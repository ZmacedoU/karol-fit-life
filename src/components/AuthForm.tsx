
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { motion } from "framer-motion";

interface AuthFormProps {
  showRegister?: boolean;
  customClass?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ showRegister = true, customClass = "" }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Card className={`w-full bg-transparent border-0 shadow-none ${customClass}`}>
      <CardContent className="p-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          <div className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/80" />
              <Input 
                placeholder="Username or Email" 
                className="purple-input glass-input pl-12" 
                type="email"
                autoComplete="email"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/80" />
              <Input 
                placeholder="Password" 
                className="purple-input glass-input pl-12 pr-12" 
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity hover:opacity-80"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-white/80" />
                ) : (
                  <Eye className="h-5 w-5 text-white/80" />
                )}
              </button>
            </div>
            
            <div className="text-right">
              <a 
                href="#" 
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          
          <Button 
            className="w-full bg-white text-purple-primary hover:bg-white/90 font-bold text-lg py-6 uppercase"
            onClick={() => window.location.href = "/dashboard"}
          >
            Login
          </Button>
        </motion.div>
      </CardContent>
      <CardFooter className="p-0 mt-6">
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
