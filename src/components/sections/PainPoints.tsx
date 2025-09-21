import { AlertTriangle, Clock, DollarSign, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const PainPoints = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Espera dias por um agendamento no SUS?",
      description: "Filas intermináveis e demora para conseguir atendimento"
    },
    {
      icon: DollarSign,
      title: "Paga R$ 200–300 em uma consulta particular?",
      description: "Valores altos que pesam no orçamento familiar"
    },
    {
      icon: Heart,
      title: "Investe R$ 400+ em um plano que quase não usa?",
      description: "Mensalidades caras com pouco retorno real"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="p-6 md:p-8 text-center border-2 hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-medium">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-destructive" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{point.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{point.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-destructive/10 text-destructive px-4 md:px-6 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Isso custa tempo, dinheiro e coloca sua saúde em risco. Agora existe outra forma.</span>
          </div>
        </div>
      </div>
    </section>
  );
};