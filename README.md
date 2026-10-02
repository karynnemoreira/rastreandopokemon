# 🔴 Rastreando Pokémon

Aplicação desenvolvida com **React + Vite** para praticar consumo de API, componentização e gerenciamento de estado.

A aplicação utiliza a **PokéAPI** para carregar uma lista de Pokémon e exibe seus **nomes e imagens**. Também possui uma busca que permite filtrar os Pokémon pelo nome.

## 🛠️ Tecnologias

* ⚛️ React
* ⚡ Vite
* 🟨 JavaScript
* 🌐 Axios
* 🎮 PokéAPI
* 🎨 HTML5 e CSS3

## 📁 Estrutura

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── Main.jsx
│   ├── Main.css
│   ├── Footer.jsx
│   └── Footer.css
│
├── App.jsx
└── main.jsx
```

## 🔎 Funcionalidades

* Lista de Pokémon carregada pela PokéAPI;
* Exibição do nome e imagem;
* Busca por nome;
* Filtragem utilizando `filter()`;
* Renderização utilizando `map()`;
* Mensagem quando nenhum Pokémon é encontrado.

## 📱 Responsividade

A interface é adaptada para:

* 📱 Celular;
* 📲 Tablet;
* 💻 Desktop.

São utilizados **Flexbox, CSS Grid, media queries e medidas flexíveis** como `%`, `vw`, `vh` e `rem`.

## ♿ Acessibilidade

O projeto utiliza:

* HTML semântico;
* `aria-label`;
* `label` associado ao campo de busca;
* `alt` nas imagens;
* estilos de `focus-visible`.

## 🚀 Como Executar

Clone o projeto e instale as dependências:

```bash
git clone URL_DO_REPOSITORIO
cd rastreando-pokemon
npm install
```

Caso necessário, instale o Axios:

```bash
npm install axios
```

Execute o projeto:

```bash
npm run dev
```

Depois, acesse o endereço informado pelo Vite no terminal.

## 🎯 Objetivo

Projeto desenvolvido para praticar **React, consumo de APIs, Axios, `useState`, `useEffect`, `filter()`, `map()` e desenvolvimento responsivo**.
