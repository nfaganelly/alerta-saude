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
    <section className="py-20 bg-health-dark text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${aiFeaturesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tecnologia de IA Avançada</h2>
          <p className="text-xl opacity-90">
            Inteligência artificial que potencializa seu cuidado com a saúde
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-center opacity-90">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};