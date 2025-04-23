import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "FinVision",
  description: "One stop solution for all your financial tracking needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${crimsonPro.className}`}>

          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-50 py-12 fixed bottom-0 w-full">
            <div className="container mx-auto text-center px-4 text-gray-600 text-lg">
              <p>Made with ❤️ by @FinVision</p>
            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
