# EpicBurger Interface 🍔

Interface web para gerenciamento de pedidos de uma hamburgueria digital, construída como uma **SPA (Single Page Application)** com React e integrada a uma **API REST**, focada em **usabilidade, organização de código e simulação de ambiente real**.

---

## 🎯 Visão Geral

O **EpicBurger Interface** foi desenvolvido para fornecer uma experiência administrativa eficiente, permitindo gerenciar **produtos**, **categorias** e **pedidos** de forma simples e intuitiva.

A aplicação consome a **API EpicBurguer**, mantendo uma **arquitetura desacoplada** entre frontend e backend, simulando um cenário real de aplicação fullstack.

---

## 🚀 Destaques Técnicos

- **SPA com React + Vite** – aplicação rápida e otimizada
- **Gerenciamento de estado** com Context API
- **Integração REST** via Axios (camada de services)
- **Validação de formulários** com React Hook Form + Yup
- **Pagamentos integrados** com Stripe
- **Arquitetura em camadas** (Components, Containers, Hooks, Services)
- **Interface responsiva** (desktop e mobile)
- **Feedback visual** com notificações (Toast)

---

## 🧠 Arquitetura e Organização

O projeto segue uma estrutura escalável e modular:

```
src/
├── assets/          # Imagens, ícones e recursos estáticos
├── components/      # Componentes reutilizáveis
├── containers/      # Páginas e layouts principais
├── hooks/           # Custom hooks e lógica compartilhada
├── routes/          # Configuração de rotas
├── services/        # Camada de integração com API
├── styles/          # Estilização e temas globais
├── utils/           # Funções auxiliares
├── App.jsx          # Componente raiz
└── main.jsx         # Ponto de entrada
```

Essa separação **facilita manutenção, testes e evolução** do projeto.

---

## 🛠 Tecnologias Utilizadas

| Categoria | Tecnologias 
| **Navegação** | React Router DOM |
| **Estilização** | Styled Components, Material UI (MUI) |
| **Notificações** | React Toastify |

---

## ✨ Funcionalidades

✅ Gerenciamento de **produtos e categorias**  
✅ Criação e acompanhamento de **pedidos**  
✅ Integração completa com **API backend**  
✅ Interface **responsiva** e adaptável  
✅ **Validação de formulários** robusta  
✅ **Feedback visual** para ações do usuário  
✅ Fluxo seguro de **pagamento com Stripe**

---

## 💳 Integração com Pagamento

O frontend integra com o backend utilizando **Stripe Elements**:

1. Solicita ao backend a criação da **sessão de pagamento**
2. Recebe o `client_secret` de confirmação
3. Finaliza o pagamento de forma segura via **Stripe Elements**

---

## 📸 Demonstração Visual

### 📱 Mobile
<img src="./src/assets/devburgerMockupsmartphone.png" alt="EpicBurger Mobile" width="700" />

  


### 💻 Desktop

<img src="./src/assets/devburgerMockupDescktop.png" alt="EpicBurger Desktop" width="700" />
  


---

## ▶️ Como Executar

### Pré-requisitos

- **Node.js** >= 16
- **npm** ou **yarn**
- **API EpicBurguer** rodando localmente

### Passos

```bash
# Clonar repositório
git clone https://github.com/GilvaneAlves/EpicBurger-Interface.git

# Entrar no diretório
cd EpicBurger-Interface

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em **`http://localhost:5173`**

⚠️ **Importante:** Certifique-se de que a API EpicBurguer está em execução antes de iniciar o frontend.

---

## 🔄 Fluxo de Desenvolvimento

1. **Clone e instale** as dependências
2. **Configure as variáveis de ambiente** (se necessário)
3. **Execute o servidor** com `npm run dev`
4. **Acesse** a aplicação no navegador
5. **Integre-se** à API backend para testes completos

---

## 🛣 Melhorias Futuras

- 🧪 Testes automatizados (Jest / React Testing Library)
- 📘 Migração para **TypeScript**
- 🔐 Autenticação completa com **controle de sessão**
- 📊 **Redux** ou Zustand para gerenciamento avançado de estado
- 🌍 Internacionalização **(i18n)**
- 🔄 Integração com **CI/CD**
- ♿ Melhorias de acessibilidade (WCAG)

---

## 📄 Licença

MIT License – Uso livre para fins pessoais e comerciais.

---

## 👨‍💻 Autor

**Gilvane Alves Dias**  
Desenvolvedor Full Stack

🔗 **GitHub:** [github.com/GilvaneAlves](https://github.com/GilvaneAlves)

---
