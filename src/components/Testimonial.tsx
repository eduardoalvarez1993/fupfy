import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Rodrigues",
    company: "Salão Beleza & Estilo",
    segment: "Salão de Beleza",
    initials: "MR",
    text: "O FUPFY cuida de tudo e eu só vejo os clientes voltando!",
    photo: null
  },
  {
    name: "Carlos Eduardo Silva",
    company: "Petshop Amigo Fiel",
    segment: "Petshop",
    initials: "CS",
    text: "Meus clientes não esquecem mais das vacinas dos pets. Fantástico!",
    photo: null
  },
  {
    name: "Ana Paula Costa",
    company: "Clínica Vida Saudável",
    segment: "Clínica",
    initials: "AC",
    text: "As consultas de retorno aumentaram 60% desde que comecei a usar.",
    photo: null
  },
  {
    name: "Roberto Santos",
    company: "Oficina do Roberto",
    segment: "Oficina",
    initials: "RS",
    text: "Agora meus clientes voltam para revisão sem eu precisar ligar.",
    photo: null
  },
  {
    name: "Fernanda Lima",
    company: "Estética Renovar",
    segment: "Estética",
    initials: "FL",
    text: "Sistema simples que realmente funciona. Recomendo para todos!",
    photo: null
  }
];

const Testimonial = () => {
  return (
    <section id="depoimento" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de empresários que transformaram seus negócios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.segment}</p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic mb-4 group-hover:text-foreground transition-colors">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;