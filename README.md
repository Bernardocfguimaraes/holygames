# 🎮 HolyGames - Game Discovery Platform

![HolyGames Banner](https://via.placeholder.com/1200x400?text=HolyGames+Preview) 
> *Uma plataforma imersiva de descoberta de jogos com design Cyber-Minimalista.*

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 📖 Sobre o Projeto

O **HolyGames** é uma aplicação web desenvolvida para explorar, pesquisar e visualizar detalhes de jogos. Diferente de catálogos comuns, o foco deste projeto foi criar uma **experiência de usuário (UX)** premium e imersiva.

O projeto utiliza a arquitetura moderna do **Next.js (App Router)**, focando em performance com Server Components e SEO dinâmico. A interface segue uma identidade visual própria baseada no conceito **"Cyber-Minimalist"**, utilizando uma paleta de cores escura (Zinc) com acentos vibrantes (Violeta) para destacar a interatividade sem cansar a vista.

### ✨ Diferenciais
* **Design System Consistente:** Paleta de cores `Zinc-950` + `Violet-500` aplicada globalmente.
* **UX Refinada:** Implementação de *Skeleton Loading* para evitar layout shift e *Framer Motion* para micro-interações suaves.
* **Performance:** Uso intensivo de Server Side Rendering (SSR) para carregamento instantâneo de dados.

---

## 📸 Screenshots & Features

### 1. Home Page Imersiva
A página inicial apresenta um "Jogo do Dia" com destaque cinemático, gradientes para leitura perfeita e um grid de jogos com animações de entrada.
<img width="1839" height="914" alt="image" src="https://github.com/user-attachments/assets/b25da7f1-8483-4c7b-a60c-5a2d18bbe1e7" />


### 2. Detalhes do Jogo (Cinematic View)
Página dinâmica `[id]` que consome a API para gerar metadados de SEO automáticos. Layout dividido entre narrativa (sinopse) e dados técnicos, com hero section em tela cheia.
<img width="1823" height="901" alt="image" src="https://github.com/user-attachments/assets/d6fd705a-d323-4417-abc4-06e536453257" />


### 3. Perfil do Jogador
Interface gamificada estilo "Carteirinha de Membro", com banner customizável, avatar sobreposto e grid de favoritos.
<img width="1556" height="831" alt="image" src="https://github.com/user-attachments/assets/f48801dd-2d3a-48f3-8708-be57ea4d74cb" />


---

## 🛠️ Tecnologias Utilizadas

* **Core:** [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estática rigorosa)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
* **Animações:** [Framer Motion](https://www.framer.com/motion/) (Entradas, Hovers e Transições)
* **Ícones:** React Icons (Lucide/FontAwesome)
* **Fontes:** Geist Sans & Geist Mono (Google Fonts)

---

## ⚡ Funcionalidades Técnicas

### 🔍 Otimização de Imagens
Uso do componente `<Image />` do Next.js com `fill`, `sizes` e `priority` para garantir LCP (Largest Contentful Paint) verde no Lighthouse.

### 💀 Skeleton Loading
Implementação de estados de carregamento visuais (`loading.tsx`) que imitam a estrutura final da página, melhorando a percepção de velocidade do usuário.

```tsx
// Exemplo do componente Skeleton criado
export function GameCardSkeleton() {
  return (
    <div className="w-full bg-zinc-900 rounded-xl p-4 border border-zinc-800 animate-pulse">
      <div className="w-full h-56 bg-zinc-800 rounded-lg mb-3"></div>
      <div className="flex justify-between items-center mt-3">
        <div className="h-5 w-3/4 bg-zinc-800 rounded"></div>
      </div>
    </div>
  )
}

````

### 🚀 SEO Dinâmico
Cada página de jogo gera seus próprios meta-tags para compartilhamento em redes sociais (Open Graph), garantindo que os links fiquem bonitos no WhatsApp, Twitter e Discord.

TypeScript
````
export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
    const response = await fetchGameData(params.id);
    
    return {
        title: `HolyGames - ${response.title}`,
        description: `${response.description.slice(0, 100)}...`,
        openGraph: { 
            title: response.title,
            images: [response.image_url] 
        }
    };

````
---

### 🚀 Como rodar o projeto
Clone o repositório:

````
Bash

git clone https://github.com/seu-usuario/holygames.git

````
Instale as dependências:

````
Bash

npm install
# ou
yarn install

````
Configure as Variáveis de Ambiente: Crie um arquivo .env.local na raiz e adicione a API:

````
Snippet de código

NEXT_API_URL="sua_url_da_api"

````
Execute o servidor de desenvolvimento:

````
Bash

npm run dev

````
Abra http://localhost:3000 no seu navegador.

<div align="center">

### 👨‍💻 Autor
Bernardo Guimarães Desenvolvedor Full Stack em formação, apaixonado por interfaces modernas e performance web.

Desenvolvido com 💜 durante estudos de Next.js.

</div>
