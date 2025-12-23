import './globals.css';

export const metadata = {
  title: 'Sora Prompt Crafter | Anime 2D Generator',
  description:
    'Construa prompts detalhados para Sora 2 focados em animação 2D de animes com cenas cinematográficas.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
