
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const AuthForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("login");
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Card className="w-[350px] sm:w-[450px] animate-fade-in">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Karol Fit Life</CardTitle>
        <CardDescription className="text-center">
          {activeTab === "login" 
            ? "Entre para acessar sua conta" 
            : "Crie sua conta para começar"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Cadastro</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Seu email" 
                  className="pl-10 fitness-input" 
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Sua senha" 
                  className="pl-10 pr-10 fitness-input" 
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="text-sm text-right">
                <a 
                  href="#" 
                  className="text-xs text-fitness-purple hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <Button 
              className="w-full fitness-button"
              onClick={() => window.location.href = "/dashboard"}
            >
              Entrar
            </Button>
          </TabsContent>
          <TabsContent value="register" className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Nome completo" 
                  className="pl-10 fitness-input" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Seu email" 
                  className="pl-10 fitness-input" 
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Crie uma senha" 
                  className="pl-10 pr-10 fitness-input" 
                  type={showPassword ? "text" : "password"}
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full fitness-button">
              Cadastrar
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-center text-xs text-muted-foreground flex flex-col space-y-2">
        <p>
          Ao continuar, você concorda com os 
          <a href="#" className="text-fitness-purple underline ml-1">
            Termos de Serviço
          </a>
        </p>
        <p>© 2025 Karol Fit Life. Todos os direitos reservados.</p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
