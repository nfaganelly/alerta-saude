import { Button } from "@/components/ui/button";
import { PriceBadge } from "@/components/ui/price-badge";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Saúde no bolso, no tempo e na{" "}
                <span className="text-primary">palma da mão</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Não dependa mais de filas, burocracia ou altos custos para cuidar da sua saúde.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <PriceBadge price="R$ 18,90" popular />
                <p className="text-base md:text-lg font-medium">
                  Teleconsultas ilimitadas + IA Diagnóstica
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Sem carência</Badge>
                <Badge variant="secondary">Sem pegadinhas</Badge>
                <Badge variant="secondary">Garantia 7 dias</Badge>
              </div>
            </div>

            <Button 
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-all"
            >
              👉 Quero meu acesso agora
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Pessoa em casa falando com médico por videochamada no celular, ambiente claro e acolhedor"
              className="rounded-2xl shadow-strong max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};