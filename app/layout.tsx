import type { Metadata } from 'next';
import { Smooch_Sans } from 'next/font/google';
import './globals.css';

const smoochSans = Smooch_Sans({
   variable: '--font-smooch-sans',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
   title: 'Oratix ',
   description:
      'With Oratix your voice becomes the smartest way to prepare and succeed in interviews through AI',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="dark">
         <body className={`${smoochSans.variable} antialiased`}>
            {children}
         </body>
      </html>
   );
}
