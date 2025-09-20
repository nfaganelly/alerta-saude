import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Stethoscope, DollarSign } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Consultas ilimitadas sempre que precisar"
    },
    {
      icon: Clock,
      text: "Atendimento imediato, sem filas"
    },
    {
      icon: Stethoscope,
      text: "Equipe médica especializada (clínico geral, pediatria, gineco, dermato e mais)"
    },
    {
      icon: DollarSign,
      text: "Apenas R$ 18,90/mês – menos do que uma pizza"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Com o Alerta Saúde, você tem:</h2>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg">{benefit.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground italic">
                Sem contrato fixo, cancele quando quiser.
              </p>
              
              <Button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg" 
                className="shadow-medium hover:shadow-strong transition-all"
              >
                Quero meu acesso agora
              </Button>
            </div>
          </div>

          <div className="bg-health-gray rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center text-muted-foreground">
              <Users className="w-24 h-24 mx-auto mb-4 opacity-20" />
              <p>Imagem de pessoa em atendimento online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};