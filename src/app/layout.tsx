import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/board/footer";

export const metadata = {
  title: "Society of Hispanic Professional Engineers",
  description: "SHPE @ UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col bg-white">
        <ReactQueryClientProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
