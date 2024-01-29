"use client";
import Navbar from "@common/navigation/Navbar";
import "./globals.css";
import useTheme from "@common/hooks/useTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <html data-theme={theme}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
