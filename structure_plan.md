# Plano de Estrutura HTML e CSS

## Estrutura HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FUPFY - Follow-up Inteligente</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">FUPFY</div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#como-funciona">Como funciona</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#precos">Preços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <button class="btn-primary" id="btn-comecar">Começar agora</button>
        </nav>
        <div class="header-shadow"></div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Seus clientes não esqueceram de você. Eles só precisam de um lembrete no momento certo.</h1>
                <p>Automatize o follow-up dos seus clientes e aumente suas vendas</p>
                <div class="hero-buttons">
                    <button class="btn-primary" id="btn-comece-gratis">Comece grátis</button>
                    <button class="btn-secondary">Ver como funciona</button>
                </div>
            </div>
            <div class="hero-image">
                <!-- Ilustração do celular com balões -->
            </div>
        </div>
    </section>

    <!-- Como Funciona -->
    <section class="como-funciona" id="como-funciona">
        <div class="container">
            <h2>Como funciona</h2>
            <p>Em apenas 3 passos simples, você já está enviando follow-ups de forma automática</p>
            <div class="steps">
                <div class="step">
                    <div class="step-icon">1</div>
                    <h3>Registre clientes potenciais</h3>
                    <p>Adicione seus leads</p>
                </div>
                <div class="step">
                    <div class="step-icon">2</div>
                    <h3>Veja sua estratégia ganhar vida automaticamente</h3>
                    <p>Configure automações</p>
                </div>
                <div class="step">
                    <div class="step-icon">3</div>
                    <h3>Atraia e converta os resultados</h3>
                    <p>Veja os resultados</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Transformação -->
    <section class="transformacao">
        <div class="container">
            <h2>A transformação do seu negócio</h2>
            <p>Veja a diferença que o follow-up automático faz no seu negócio</p>
            <div class="comparison">
                <div class="before">
                    <h3>Antes</h3>
                    <!-- Lista com ícones X -->
                </div>
                <div class="after">
                    <h3>Depois</h3>
                    <!-- Lista com ícones check -->
                </div>
            </div>
        </div>
    </section>

    <!-- Por que escolher -->
    <section class="por-que-escolher">
        <div class="container">
            <h2>Por que escolher o FUPFY?</h2>
            <div class="benefits">
                <div class="benefit">
                    <div class="benefit-icon"></div>
                    <h3>Fácil de usar - não precisa de conhecimento técnico</h3>
                </div>
                <div class="benefit">
                    <div class="benefit-icon"></div>
                    <h3>Configuração simples e rápida - em menos de 5 minutos</h3>
                </div>
                <div class="benefit">
                    <div class="benefit-icon"></div>
                    <h3>Aumento de fidelização e vendas</h3>
                </div>
                <div class="benefit">
                    <div class="benefit-icon"></div>
                    <h3>Mais conversões negócios</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Planos -->
    <section class="planos" id="precos">
        <div class="container">
            <h2>Escolha o plano ideal para seu negócio</h2>
            <div class="pricing-cards">
                <div class="pricing-card">
                    <h3>Essencial</h3>
                    <div class="price">R$ 97</div>
                    <!-- Lista de recursos -->
                    <button class="btn-outline">Começar com esse plano</button>
                </div>
                <div class="pricing-card featured">
                    <h3>Crescer</h3>
                    <div class="price">R$ 197</div>
                    <!-- Lista de recursos -->
                    <button class="btn-primary">Começar com esse plano</button>
                </div>
                <div class="pricing-card">
                    <h3>Pro</h3>
                    <div class="price">R$ 297</div>
                    <!-- Lista de recursos -->
                    <button class="btn-outline">Começar com esse plano</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Depoimentos -->
    <section class="depoimentos" id="depoimentos">
        <div class="container">
            <h2>O que nossos clientes dizem</h2>
            <div class="testimonials">
                <!-- Cards de depoimentos -->
            </div>
        </div>
    </section>

    <!-- Empresas -->
    <section class="empresas">
        <div class="container">
            <h2>Mais de 500 empresas já confiam no FUPFY</h2>
            <div class="company-logos">
                <!-- Grid de logos -->
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
        <div class="container">
            <h2>Dúvidas frequentes</h2>
            <div class="faq-items">
                <!-- Itens de FAQ -->
            </div>
        </div>
    </section>

    <!-- Footer CTA -->
    <section class="footer-cta">
        <div class="container">
            <h2>Pronto para ver seus clientes voltando sem esforço?</h2>
            <p>Comece hoje mesmo e transforme a forma como você se relaciona com seus clientes</p>
            <div class="cta-buttons">
                <button class="btn-primary">Começar agora grátis</button>
                <button class="btn-secondary">Falar com consultor</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 FUPFY. Todos os direitos reservados.</p>
        </div>
    </footer>

    <!-- Modal -->
    <div class="modal-overlay" id="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h3>Comece agora mesmo!</h3>
                <button class="modal-close" id="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <form id="lead-form">
                    <input type="text" placeholder="Seu nome" required>
                    <input type="email" placeholder="Seu email" required>
                    <input type="tel" placeholder="Seu telefone" required>
                    <input type="text" placeholder="Nome da empresa">
                    <button type="submit" class="btn-primary">Começar agora</button>
                </form>
                <div class="success-message" id="success-message" style="display: none;">
                    <h3>Sucesso!</h3>
                    <p>Obrigado pelo seu interesse! Em breve entraremos em contato.</p>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

## Estrutura CSS:

### 1. Reset e Base
- Reset CSS básico
- Variáveis CSS para cores e tipografia
- Estilos base para body, html

### 2. Layout
- Container responsivo
- Grid e flexbox para layouts
- Breakpoints para mobile/desktop

### 3. Header
- Posição fixa
- Navbar responsiva
- Detalhe/sombra abaixo do menu

### 4. Seções
- Hero section com layout duas colunas
- Seções de conteúdo com espaçamento consistente
- Cards para planos e depoimentos

### 5. Componentes
- Botões com estados hover
- Modal overlay e conteúdo
- FAQ acordeão
- Cards responsivos

### 6. Responsividade
- Mobile-first approach
- Breakpoints: 768px, 1024px, 1200px
- Menu hambúrguer para mobile

### 7. Animações
- Transições suaves
- Efeitos hover
- Animações de entrada (opcional)

## Cores Principais:
- Primária: #6B46C1 (roxo)
- Secundária: #E5E7EB (cinza claro)
- Texto: #1F2937 (cinza escuro)
- Background: #FFFFFF (branco)
- Accent: #F3F4F6 (cinza muito claro)

## Tipografia:
- Font family: 'Inter', sans-serif ou similar
- Tamanhos: 14px, 16px, 18px, 24px, 32px, 48px
- Pesos: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

