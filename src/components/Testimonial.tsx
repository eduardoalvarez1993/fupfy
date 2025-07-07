import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="depoimento" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            "Voltei a ver clientes antigos reaparecendo no salão — sem mandar mensagem manual! 
            O FUPFY cuida de tudo e eu só vejo os resultados chegando."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
              MR
            </div>
            <cite className="text-lg font-semibold text-foreground not-italic">
              Marina Rodrigues
            </cite>
            <p className="text-muted-foreground">
              Proprietária - Salão Beleza & Estilo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;