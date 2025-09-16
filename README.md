# Projeto: 4 Versões de Estilização em React

Este repositório contém a mesma tela de um mini e-commerce desenvolvida em **quatro versões diferentes**, cada uma utilizando uma técnica distinta de estilização no React:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **Styled-Components**

---

## 🎯 Objetivo

O objetivo deste projeto é **comparar diferentes formas de estilização em React**, mantendo a mesma tela e os mesmos comportamentos em cada abordagem.

---

## 🖼️ Tela implementada

- **Navbar fixa** com:
  - Logo  
  - Toggle de tema (claro/escuro com persistência em `localStorage`)  
  - Badge de carrinho  

- **Grid de produtos (cards)** responsivo:  
  - ≤480px → 1 coluna  
  - 481–768px → 2 colunas  
  - 769–1024px → 3 colunas  
  - ≥1025px → 4 colunas  

- **Card de produto**:  
  - Imagem 1:1 com `loading="lazy"`  
  - Título com 2 linhas e ellipsis  
  - Preço  
  - Avaliação com estrelas (★)  
  - Tag (“Novo” ou “Promo”)  
  - Botão **Adicionar** com variantes: `solid`, `outline`, `ghost`  

- **Interações e estados**:  
  - Hover com elevação/sombra  
  - Focus visível (acessibilidade)  
  - Disabled  
  - Loading com skeleton (sem layout shift)  

- **Dark mode** aplicado a cores/sombras/bordas  

- **Acessibilidade**:  
  - Navegação por teclado  
  - Uso de atributos `aria-*`  
  - Contraste ≥ 4.5:1  

- **Animações**:  
  - Transições suaves entre 150–250ms (`transform`, `opacity`)  

---

## 🚀 Como rodar cada versão

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/projeto-4-versoes.git
   cd projeto-4-versoes
   ```

2. Entre na pasta da versão desejada, por exemplo:
```
cd 03-tailwind
```

3. Instale as dependências:
```
npm install
```
4.Rode o projeto:
```
npm run dev
```
Abra no navegador o link indicado (exemplo: http://localhost:5173/).

## 🛠️ Tecnologias usadas

- React

- Vite

- CSS Global

- CSS Modules

- Tailwind CSS

- Styled-Components
