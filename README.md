# Sora 2 Anime Prompt Crafter

Aplicação Next.js para montar prompts completos pensados para o Sora 2 com foco em animação 2D de animes. A interface traz presets cinematográficos, sugestões de enquadramentos e um editor detalhado que converte suas ideias em um prompt pronto para uso.

## 🚀 Como executar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o modo de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra `http://localhost:3000` no navegador.

## 🧱 Estrutura principal

- `app/page.js`: Interface principal com editor de campos, presets e geração do prompt.
- `app/globals.css`: Estilos globais com visual inspirado em dashboards futuristas.
- `next.config.js`, `jsconfig.json`: Configurações da aplicação Next.js.

## 📝 Scripts úteis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm run start`: executa a build em modo produção.
- `npm run lint`: roda o ESLint com as regras do Next.js.

## 🌐 Deploy

O projeto está preparado para deploy na Vercel e já inclui build `next build` otimizado.
