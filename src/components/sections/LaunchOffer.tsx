import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const LaunchOffer = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-destructive/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-destructive" />
            <span className="text-xl md:text-2xl font-bold text-destructive">Oferta de Lançamento</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Os 1.000 primeiros associados garantem{" "}
            <span className="text-primary">R$ 18,90/mês</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
            Depois, volta a R$ 29,90. Não perca esta oportunidade única!
          </p>

          <Button 
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg" 
            className="w-full md:w-auto text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 shadow-strong hover:shadow-medium transition-all"
          >
            🚀 Ativar meu plano agora
          </Button>
        </div>
      </div>
    </section>
  );
};