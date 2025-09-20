import { Button } from "@/components/ui/button";
import { PriceBadge } from "@/components/ui/price-badge";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-health-gray to-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Saúde no bolso, no tempo e na{" "}
                <span className="text-primary">palma da mão</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Não dependa mais de filas, burocracia ou altos custos para cuidar da sua saúde.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PriceBadge price="R$ 18,90" popular />
                <p className="text-lg font-medium">
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
              className="text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-all"
            >
              👉 Quero meu acesso agora
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
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