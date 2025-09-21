import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-health-dark text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Com menos de <span className="text-secondary">R$ 0,70 por dia</span>,<br />
            você garante atendimento rápido,<br />
            moderno e sem complicação.
          </h2>
          
          <Button 
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg" 
            className="w-full md:w-auto text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 bg-primary hover:bg-primary/90 text-white shadow-strong hover:shadow-medium transition-all"
          >
            👉 Quero meu acesso agora
          </Button>
        </div>
      </div>
    </section>
  );
};