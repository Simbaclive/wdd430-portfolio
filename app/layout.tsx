import "./globals.css";
import Header from '@/components/header'; // Make sure this matches your filename (header.tsx or Header.tsx)
import Footer from '@/components/footer'; // Make sure this matches your filename (footer.tsx or Footer.tsx)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}