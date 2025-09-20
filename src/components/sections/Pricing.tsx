import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PriceBadge } from "@/components/ui/price-badge";
import { Check } from "lucide-react";

export const Pricing = () => {
  const individualFeatures = [
    "Consultas ilimitadas",
    "Atendimento 24/7",
    "Receitas digitais",
    "IA diagnóstica",
    "Sem carência"
  ];

  const familyPlans = [
    { lives: 2, price: "R$ 32,90", discount: "15% desconto" },
    { lives: 3, price: "R$ 45,90", discount: "20% desconto" },
    { lives: "4+", price: "R$ 55,90", discount: "25% desconto" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Escolha seu plano</h2>
          <p className="text-xl text-muted-foreground">
            Proteja toda a família gastando menos que 1 consulta particular
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Plano Individual */}
          <Card className="p-8 border-2 border-primary relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-secondary">
              Mais Popular
            </Badge>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Plano Individual</h3>
              <div className="space-y-2">
                <PriceBadge price="R$ 18,90" popular />
                <p className="text-sm text-muted-foreground">Com fidelidade de 12 meses</p>
                <p className="text-lg">Sem fidelidade: R$ 32,90/mês</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {individualFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full" size="lg">
              Quero meu plano agora
            </Button>
          </Card>

          {/* Planos Família */}
          <Card className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">Planos Família</h3>
              <p className="text-muted-foreground">Descontos progressivos para múltiplas vidas</p>
            </div>

            <div className="space-y-4">
              {familyPlans.map((plan, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-health-gray rounded-lg">
                  <div>
                    <span className="font-semibold">{plan.lives} vidas</span>
                    <Badge variant="secondary" className="ml-2">{plan.discount}</Badge>
                  </div>
                  <span className="text-xl font-bold text-primary">{plan.price}/mês</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6" size="lg">
              Ver planos família
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};