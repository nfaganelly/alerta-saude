import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-health-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Com menos de <span className="text-secondary">R$ 0,70 por dia</span>,<br />
            você garante atendimento rápido,<br />
            moderno e sem complicação.
          </h2>
          
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-secondary hover:bg-secondary/90 text-white shadow-strong hover:shadow-medium transition-all"
          >
            👉 Quero meu acesso agora
          </Button>
        </div>
      </div>
    </section>
  );
};