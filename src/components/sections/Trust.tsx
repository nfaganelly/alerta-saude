import { Card } from "@/components/ui/card";
import { Shield, FileText, MapPin, Award } from "lucide-react";

export const Trust = () => {
  const trustItems = [
    {
      icon: Award,
      title: "Médicos registrados no CFM",
      description: "Profissionais qualificados e credenciados"
    },
    {
      icon: FileText,
      title: "Receitas e atestados válidos",
      description: "Documentos aceitos em todo o Brasil"
    },
    {
      icon: Shield,
      title: "Tecnologia de IA segura",
      description: "Dados protegidos e diagnósticos confiáveis"
    },
    {
      icon: MapPin,
      title: "Garantia de 7 dias",
      description: "Reembolso se não gostar do serviço"
    }
  ];

  return (
    <section className="py-20 bg-health-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Confiança e Credibilidade</h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia avançada com a segurança que você merece
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};