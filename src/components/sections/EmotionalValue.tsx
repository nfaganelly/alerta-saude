import { Heart, DollarSign, Clock, Shield } from "lucide-react";

export const EmotionalValue = () => {
  const values = [
    { icon: Heart, label: "Tranquilidade" },
    { icon: DollarSign, label: "Economia" },
    { icon: Clock, label: "Praticidade" },
    { icon: Shield, label: "Prevenção" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Mais do que consultas, você ganha:</h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-xl font-semibold">
                  <Icon className="w-8 h-8 text-primary" />
                  <span>{value.label}</span>
                </div>
              );
            })}
          </div>

          <div className="bg-background rounded-2xl p-8 inline-block shadow-medium">
            <p className="text-2xl font-bold text-primary mb-2">
              👉 É como ter um plano de saúde digital, só que acessível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};