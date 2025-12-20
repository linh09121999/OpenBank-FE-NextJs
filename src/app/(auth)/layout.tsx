import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import BackToTop from "@/components/BackToTop";
import Loading from "@/components/loadling";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Bank",
  description: "Open Bank Project",
  icons: {
    icon: "/logo-2.png", // đường dẫn tính từ /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative overflow-hidden antialiased flex flex-col w-full h-full `}
      >
        <BackToTop />
        <Loading />
        <AuthProvider>
          <main className="min-h-screen content-center relative bg-black/30">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
