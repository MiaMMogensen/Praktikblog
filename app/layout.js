import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Praktikblog – Mia Mogensen",
  description: "Praktiklog for frontend praktik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Header />

        <main>{children}</main>

        <footer>
          <p>© 2026 Mia Michelle Mogensen</p>
        </footer>
      </body>
    </html>
  );
}
