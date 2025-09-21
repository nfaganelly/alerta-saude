import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialsImage from "@/assets/testimonials.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Consegui falar com um médico em menos de 5 minutos.",
      author: "Mariana, 32 anos",
      location: "São Paulo"
    },
    {
      quote: "Meu filho passou mal à noite e consegui consulta imediata.",
      author: "Carlos, 41 anos", 
      location: "Rio de Janeiro"
    },
    {
      quote: "Por R$ 18,90 achei que não ia ser sério, mas fiquei impressionada.",
      author: "Juliana, 28 anos",
      location: "Belo Horizonte"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">O que nossos usuários dizem</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src={testimonialsImage}
              alt="Retratos de usuários satisfeitos com o serviço"
              className="rounded-2xl shadow-medium max-w-full h-auto"
            />
          </div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 md:p-6 border-l-4 border-l-primary hover:scale-105 transition-all duration-300 hover:shadow-medium">
                <div className="flex gap-3 md:gap-4">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-base md:text-lg font-medium mb-2 md:mb-3">"{testimonial.quote}"</p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      – {testimonial.author}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};