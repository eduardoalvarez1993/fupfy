import { X, Check, Clock, Users, MessageSquare, TrendingUp } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A transformação do seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Veja como o FUPFY muda completamente a forma como você se relaciona com seus clientes
          </p>
          <div className="bg-primary/10 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-primary">
              💡 Trazer um cliente de volta custa até 5x menos do que conquistar um novo
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Antes */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-destructive/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Antes</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Perder tempo com planilhas e lembretes manuais</p>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Enviar mensagens uma por uma, quando lembra</p>
              </div>
              
              <div className="flex items-start">
                <Users className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Clientes esquecem de voltar e você perde vendas</p>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Gastar muito para conquistar novos clientes</p>
              </div>
            </div>
          </div>

          {/* Depois */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-primary/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Depois</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Sistema automático cuida de tudo para você</p>
              </div>
              
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Mensagens personalizadas enviadas na hora certa</p>
              </div>
              
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Clientes lembrados retornam mais frequentemente</p>
              </div>
              
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Mais retorno com menos esforço e investimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;