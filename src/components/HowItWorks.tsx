import step1Icon from "@/assets/step1-icon.jpg";
import step2Icon from "@/assets/step2-icon.jpg";
import step3Icon from "@/assets/step3-icon.jpg";

const steps = [
  {
    number: "01",
    title: "Responda algumas perguntas sobre o seu negócio",
    description: "Conte sobre seus clientes, frequência de visitas e tipo de serviço. É rápido e simples.",
    icon: step1Icon
  },
  {
    number: "02", 
    title: "Veja sua régua de comunicação pronta",
    description: "Receba uma estratégia personalizada de follow-up, criada especialmente para o seu tipo de negócio.",
    icon: step2Icon
  },
  {
    number: "03",
    title: "Ative e acompanhe os resultados",
    description: "Suas mensagens são enviadas automaticamente. Você só acompanha os clientes voltando!",
    icon: step3Icon
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples, você terá sua estratégia de follow-up funcionando
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={step.icon} 
                    alt={`Passo ${step.number}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;