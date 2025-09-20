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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="p-8 text-center border-2 hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-destructive/10 text-destructive px-6 py-4 rounded-lg font-semibold text-lg">
            <AlertTriangle className="w-6 h-6" />
            Isso custa tempo, dinheiro e coloca sua saúde em risco. Agora existe outra forma.
          </div>
        </div>
      </div>
    </section>
  );
};