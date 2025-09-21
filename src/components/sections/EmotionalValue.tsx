import { Heart, DollarSign, Clock, Shield } from "lucide-react";

export const EmotionalValue = () => {
  const values = [
    { icon: Heart, label: "Tranquilidade" },
    { icon: DollarSign, label: "Economia" },
    { icon: Clock, label: "Praticidade" },
    { icon: Shield, label: "Prevenção" }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Mais do que consultas, você ganha:</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <span>{value.label}</span>
                </div>
              );
            })}
          </div>

          <div className="bg-health-gray rounded-2xl p-6 md:p-8 inline-block shadow-medium hover:shadow-strong transition-all duration-300">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">
              👉 É como ter um plano de saúde digital, só que acessível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};