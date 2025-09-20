import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Header = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://plataforma.alertasaude.com.br/assets/images/logo.png" 
              alt="Alerta Saúde" 
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback para ícone local se a imagem não carregar
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="flex items-center gap-2" style={{display: 'none'}}>
              <Heart className="w-8 h-8 text-primary fill-current" />
              <span className="text-xl font-bold text-health-dark">Alerta Saúde</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={scrollToPricing}
              className="text-health-dark hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={scrollToPricing}
              className="text-health-dark hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
          </nav>

          <Button 
            onClick={scrollToPricing}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};