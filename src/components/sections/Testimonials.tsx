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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O que nossos usuários dizem</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={testimonialsImage}
              alt="Retratos de usuários satisfeitos com o serviço"
              className="rounded-2xl shadow-medium max-w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium mb-3">"{testimonial.quote}"</p>
                    <p className="text-muted-foreground">
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