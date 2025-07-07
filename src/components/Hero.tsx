import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8">
          <img 
            src={heroImage} 
            alt="FUPFY - Automatização inteligente de follow-up" 
            className="mx-auto rounded-2xl shadow-xl max-w-2xl w-full"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Traga seus clientes de volta,{" "}
          <span className="text-primary">sem esforço</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          O FUPFY automatiza o relacionamento com seus clientes e aumenta a recompra 
          com mensagens personalizadas, no tempo certo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="hero" className="text-lg px-8 py-6">
            Comece grátis
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Ver como funciona
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;