import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "SHPE @ UCR",
  description:
    "The official University of California, Riverside (UCR) chapter of the Society of Hispanic Professional Engineers (SHPE). Join our STEM community today!",
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
