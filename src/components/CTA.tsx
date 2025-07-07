import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Pronto para ver seus clientes voltando sem esforço?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Comece hoje mesmo e transforme a forma como você se relaciona com seus clientes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300">
            Crie sua régua agora
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300">
            Falar no WhatsApp
          </Button>
        </div>
        
        <p className="text-primary-foreground/70 text-sm mt-6">
          Sem compromisso • Configuração em minutos • Suporte completo
        </p>
      </div>
    </section>
  );
};

export default CTA;