# EpicBurger Interface 🍔

Web interface moderna para **EpicBurger**, construída com **React + Vite**, permitindo o gerenciamento de produtos, categorias e pedidos de uma hamburgueria digital através de uma **SPA responsiva**, integrada a uma API REST backend.

---

## 🎯 Visão Geral

O **EpicBurger Interface** foi desenvolvido para fornecer uma **experiência administrativa clara e eficiente**, garantindo que a equipe operacional possa gerenciar todo o fluxo do negócio sem esforço.

Ele consome a **API DevBurguer**, mantendo a separação entre frontend e backend, e foca exclusivamente na **experiência do usuário** e apresentação dos dados.

---

## 📸 Demonstração da Interface

Exemplos visuais da aplicação em diferentes dispositivos, evidenciando o design responsivo e moderno.

### 📱 Versão Mobile

<p align="center">
  <img src="src/assets/devburgerMockupsmartphone.png" width="600" />
</p>

### 💻 Versão Desktop

<p align="center">
  <img src="src/assets/devburgerMockupDescktop.png" width="700" />
</p>

---

## 🧩 Problema e Solução

Sistemas de gestão para restaurantes exigem uma interface intuitiva que permita à equipe:

* Gerenciar o catálogo de produtos
* Organizar categorias do menu
* Acompanhar e atualizar pedidos rapidamente
* Operar em qualquer dispositivo

O **EpicBurger Interface** oferece uma **SPA responsiva**, focada em **usabilidade e velocidade**, consumindo uma API REST bem estruturada.

---

## 👥 Público-Alvo

* Equipes administrativas de restaurantes e hamburguerias
* Desenvolvedores frontend que consomem APIs REST
* Recrutadores e avaliadores técnicos analisando aplicações React

---

## 🧠 Nível Técnico

**Intermediário / Avançado**

O projeto demonstra domínio de:

* Arquitetura SPA em React
* Consumo de APIs REST
* Padronização de componentes e estilização moderna
* Código organizado e reutilizável

---

## 🛠 Tecnologias Utilizadas

* **React** — construção de interfaces reativas
* **Vite** — ambiente de desenvolvimento rápido
* **Styled Components** — CSS-in-JS para componentes estilizados
* **JavaScript (ES6+)**
* **ESLint & Prettier** — padronização de código
* **API REST** — integração com backend Node.js

---

## ✨ Funcionalidades Principais

* Listagem e gerenciamento de produtos e categorias
* Adição de produtos ao carrinho com animação hover/zoom
* SPA responsiva e moderna para desktop e mobile
* Comunicação com API REST para operações CRUD
* Estilização padronizada com identidade da marca **EpicBurger**

---

## ▶️ Como Executar o Projeto Localmente

### Pré-requisitos

* Node.js (>=16.x)
* npm ou yarn

### Passos

```bash
git clone https://github.com/GilvaneAlves/EpicBurger-Interface.git
cd EpicBurger-Interface
npm install
# ou
yarn install
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

> ⚠️ **Observação:** a API DevBurguer deve estar em execução para o correto funcionamento da interface.

---

## 📁 Estrutura de Pastas (Resumo)

```text
epicburger-interface/
├── public/
├── src/
│   ├── assets/        # Imagens e ícones
│   ├── components/    # Componentes reutilizáveis (Button, CardProduct, Header, Footer, etc.)
│   ├── containers/    # Páginas/containers (Home, Cart, etc.)
│   ├── hooks/         # Contextos e hooks personalizados
│   ├── routes/        # Rotas da aplicação
│   ├── services/      # Comunicação com API
│   ├── styles/        # Estilos globais e temas
│   ├── utils/         # Funções utilitárias
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── .eslintrc / .prettierrc
└── README.md
```

---

## 🛣 Roadmap / Melhorias Futuras

* Testes automatizados (Jest / React Testing Library)
* Migração para TypeScript
* Autenticação e controle de sessão
* Documentação da API integrada (Swagger)
* Internacionalização (i18n)

---

## 📄 Licença

MIT License
