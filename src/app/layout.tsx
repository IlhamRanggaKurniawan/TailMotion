import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";
import Header from "@/components/myComponents/Header";
import Footer from "@/components/myComponents/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
