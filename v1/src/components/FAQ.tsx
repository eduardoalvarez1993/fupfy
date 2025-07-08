import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Não! O FUPFY funciona 100% online. Você acessa tudo pelo navegador, sem precisar instalar nada no seu celular ou computador."
  },
  {
    question: "Funciona com WhatsApp?",
    answer: "Sim! O FUPFY se integra perfeitamente com o WhatsApp Business, enviando mensagens diretamente para seus clientes através da plataforma que eles já usam."
  },
  {
    question: "Serve para o meu tipo de negócio?",
    answer: "O FUPFY foi criado especialmente para pequenos negócios como salões de beleza, clínicas, petshops, oficinas, consultórios e qualquer empresa que precise manter contato regular com clientes."
  },
  {
    question: "Tem período de teste gratuito?",
    answer: "Sim! Todos os planos incluem 7 dias de teste gratuito. Você pode experimentar todas as funcionalidades sem compromisso e cancelar quando quiser."
  },
  {
    question: "É difícil de configurar?",
    answer: "Muito simples! Em menos de 10 minutos você responde algumas perguntas sobre seu negócio e o sistema já cria sua estratégia de follow-up automaticamente."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Claro! Não há fidelidade ou multa por cancelamento. Você pode cancelar sua assinatura a qualquer momento pelo próprio painel do sistema."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte por e-mail para o plano Essencial, WhatsApp para o plano Crescer e suporte prioritário para o plano Pro. Nossa equipe está sempre pronta para ajudar!"
  },
  {
    question: "Meus dados ficam seguros?",
    answer: "Sim! Utilizamos criptografia de ponta e seguimos todas as normas da LGPD para proteger seus dados e os de seus clientes. Sua privacidade é nossa prioridade."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Encontre respostas para as principais dúvidas sobre o FUPFY
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background rounded-xl border border-border px-6 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <button className="text-primary font-semibold hover:underline">
            Fale conosco no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;