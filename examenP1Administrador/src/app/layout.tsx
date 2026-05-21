import './globals.css';
import { GastosProvider } from '@/context/GastosContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <GastosProvider>
          {children}
        </GastosProvider>
      </body>
    </html>
  );
}