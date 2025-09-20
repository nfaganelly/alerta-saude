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
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Por que conseguimos oferecer um preço tão baixo?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 text-center border-2 hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">➡️ {item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};