const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-light">FUPFY</h3>
          <p className="text-background/70 mb-4">
            Automatização inteligente de follow-up para pequenos negócios
          </p>
          <div className="border-t border-background/20 pt-4">
            <p className="text-background/60 text-sm">
              © 2024 FUPFY. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;