import { Card } from "@/components/ui/card";
import { Bot, Heart, Bug } from "lucide-react";
import aiFeaturesImage from "@/assets/ai-features.jpg";

export const AIFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "Alerta Sintomas",
      description: "IA analisa seus sintomas e organiza informações para o médico"
    },
    {
      icon: Heart,
      title: "Alerta Crônico", 
      description: "Monitoramento contínuo de condições de saúde de longo prazo"
    },
    {
      icon: Bug,
      title: "Alerta Dengue",
      description: "Detecção precoce e prevenção de doenças sazonais"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-health-dark text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${aiFeaturesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Tecnologia de IA Avançada</h2>
          <p className="text-lg md:text-xl opacity-90">
            Inteligência artificial que potencializa seu cuidado com a saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:scale-105 transition-all duration-300 hover:bg-white/20">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center">{feature.title}</h3>
                <p className="text-sm md:text-base text-center opacity-90">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};