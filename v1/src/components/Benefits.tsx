import { Check, Settings, Heart, Building } from "lucide-react";

const benefits = [
  {
    icon: Settings,
    title: "Funciona sozinho, 24/7",
    description: "Trabalha para você mesmo quando está dormindo ou ocupado"
  },
  {
    icon: Check,
    title: "Configuração simples e rápida", 
    description: "Pronto em minutos, sem complicações ou sistemas complexos"
  },
  {
    icon: Heart,
    title: "Ajuda na fidelização e retorno",
    description: "Seus clientes se sentem lembrados e voltam mais vezes"
  },
  {
    icon: Building,
    title: "Feito para pequenos negócios",
    description: "Criado especialmente para salões, clínicas, petshops e oficinas"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o FUPFY?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido pensando nas necessidades reais dos pequenos negócios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;