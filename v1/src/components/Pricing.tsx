import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "97",
    description: "Ideal para começar",
    features: [
      "Até 300 mensagens/mês",
      "Suporte por e-mail",
      "Configuração básica",
      "Relatórios mensais"
    ],
    highlighted: false
  },
  {
    name: "Crescer",
    price: "197",
    description: "Mais popular",
    features: [
      "Até 1.000 mensagens/mês",
      "Suporte via WhatsApp",
      "Relatórios de engajamento",
      "Personalização avançada",
      "Integração com CRM"
    ],
    highlighted: true
  },
  {
    name: "Pro",
    price: "297",
    description: "Para negócios em expansão",
    features: [
      "Mensagens ilimitadas",
      "Suporte prioritário",
      "Personalização total",
      "Análises detalhadas",
      "Múltiplas campanhas",
      "API disponível"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece pequeno e cresça conforme sua necessidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.highlighted 
                  ? "border-primary scale-105 relative" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Recomendado
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground ml-2">/mês</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={plan.highlighted ? "default" : "outline"} 
                className="w-full text-lg py-6 hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Começar com este plano
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Todos os planos incluem 7 dias de teste grátis • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;