import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ContactSheetProvider } from "@/components/layout/contact-sheet-provider";
import { SidebarProvider } from "@/components/layout/sidebar";

export const metadata: Metadata = {
  title: "Global Digital Transformation Agency | Creative Lines Digital",
  description:
    "We are a one-stop global digital transformation company that masters the best mobile app and web development solutions. Trust our expertise with any and every digital solution you require.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
          <ContactSheetProvider>
            {children}
          </ContactSheetProvider>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
