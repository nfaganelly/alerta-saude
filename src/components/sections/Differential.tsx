import { Card } from "@/components/ui/card";
import { Building2, Smartphone, DollarSign } from "lucide-react";

export const Differential = () => {
  const differentials = [
    {
      icon: Building2,
      title: "Sem estrutura física",
      description: "Diferente dos planos de saúde, não temos hospitais físicos e burocracia."
    },
    {
      icon: Smartphone,
      title: "100% digital e coletivo",
      description: "Nosso modelo é totalmente digital, o que reduz custos operacionais."
    },
    {
      icon: DollarSign,
      title: "Preço justo",
      description: "Resultado: preço justo, sem taxas escondidas, sem carência."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-health-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Por que conseguimos oferecer um preço tão baixo?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 md:p-8 text-center border-2 hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-medium">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">➡️ {item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};