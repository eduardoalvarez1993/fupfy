const clients = [
  { name: "Salão Premium", logo: "SP" },
  { name: "Petshop Central", logo: "PC" },
  { name: "Clínica Saúde+", logo: "CS" },
  { name: "Oficina Express", logo: "OE" },
  { name: "Estética Bella", logo: "EB" },
  { name: "Dentista Pro", logo: "DP" },
  { name: "Auto Center", logo: "AC" },
  { name: "Spa Relax", logo: "SR" }
];

const Clients = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mais de 500 empresas já confiam no FUPFY
          </h2>
          <p className="text-lg text-muted-foreground">
            Junte-se aos empreendedores que já estão colhendo os resultados
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary font-bold text-lg">{client.logo}</span>
              </div>
              <span className="text-sm text-muted-foreground text-center group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            E centenas de outros pequenos negócios em todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;