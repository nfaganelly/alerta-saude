import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import howItWorksImage from "@/assets/how-it-works.jpg";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Logar com celular",
      description: "Acesso rápido e simples"
    },
    {
      number: "2", 
      title: "IA organiza sintomas",
      description: "Tecnologia que acelera o diagnóstico"
    },
    {
      number: "3",
      title: "Médico especialista ao vivo",
      description: "Atendimento humanizado e qualificado"
    },
    {
      number: "4",
      title: "Receita/atestado digital",
      description: "Documentos válidos em todo Brasil"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-health-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Como Funciona</h2>
          <Badge variant="secondary" className="text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
            ⚡ Em menos de 10 minutos você fala com um médico
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
            {steps.map((step) => (
              <Card key={step.number} className="p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-medium">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg md:text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-sm md:text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src={howItWorksImage} 
              alt="Quatro ilustrações dos passos: assinar, acessar, falar com médico, receber documento digital"
              className="rounded-2xl shadow-medium max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};