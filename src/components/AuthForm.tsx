
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

interface AuthFormProps {
  showRegister?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ showRegister = true }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("login");
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Card className="w-[350px] sm:w-[450px] animate-fade-in bg-white/10 backdrop-blur-sm border-fitness-red/20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-white">Acesso</CardTitle>
        <CardDescription className="text-center text-gray-300">
          Entre para acessar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        {showRegister ? (
          <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10">
              <TabsTrigger value="login" className="data-[state=active]:bg-fitness-orange">Login</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-fitness-orange">Cadastro</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                  <Input 
                    placeholder="Seu email" 
                    className="pl-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                    type="email"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                  <Input 
                    placeholder="Sua senha" 
                    className="pl-10 pr-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-white/70" />
                    ) : (
                      <Eye className="h-4 w-4 text-white/70" />
                    )}
                  </button>
                </div>
                <div className="text-sm text-right">
                  <a 
                    href="#" 
                    className="text-xs text-fitness-orange hover:underline"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <Button 
                className="w-full bg-fitness-orange hover:bg-fitness-darkOrange text-white"
                onClick={() => window.location.href = "/dashboard"}
              >
                Entrar
              </Button>
            </TabsContent>
            <TabsContent value="register" className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                  <Input 
                    placeholder="Nome completo" 
                    className="pl-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                  <Input 
                    placeholder="Seu email" 
                    className="pl-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                    type="email"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                  <Input 
                    placeholder="Crie uma senha" 
                    className="pl-10 pr-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                    type={showPassword ? "text" : "password"}
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-white/70" />
                    ) : (
                      <Eye className="h-4 w-4 text-white/70" />
                    )}
                  </button>
                </div>
              </div>
              <Button className="w-full bg-fitness-orange hover:bg-fitness-darkOrange text-white">
                Cadastrar
              </Button>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                <Input 
                  placeholder="Seu email" 
                  className="pl-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-white/70" />
                <Input 
                  placeholder="Sua senha" 
                  className="pl-10 pr-10 fitness-input bg-white/10 text-white border-white/20 focus:border-fitness-orange" 
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-white/70" />
                  ) : (
                    <Eye className="h-4 w-4 text-white/70" />
                  )}
                </button>
              </div>
              <div className="text-sm text-right">
                <a 
                  href="#" 
                  className="text-xs text-fitness-orange hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <Button 
              className="w-full bg-fitness-orange hover:bg-fitness-darkOrange text-white"
              onClick={() => window.location.href = "/dashboard"}
            >
              Entrar
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-center text-xs text-gray-400 flex flex-col space-y-2">
        <p>© 2025 Vinicius Di Fiore. Todos os direitos reservados.</p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
