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
    <section className="py-20 bg-health-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            ⚡ Em menos de 10 minutos você fala com um médico
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
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