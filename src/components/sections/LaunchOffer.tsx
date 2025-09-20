import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const LaunchOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-destructive/10 to-orange-500/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-destructive" />
            <span className="text-2xl font-bold text-destructive">Oferta de Lançamento</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Os 1.000 primeiros associados garantem{" "}
            <span className="text-primary">R$ 18,90/mês</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
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
            className="text-xl px-12 py-6 shadow-strong hover:shadow-medium transition-all"
          >
            🚀 Ativar meu plano agora
          </Button>
        </div>
      </div>
    </section>
  );
};