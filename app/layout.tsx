import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import "./globals.css";

// Fuente principal para el cuerpo de texto
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

// Fuente decorativa para títulos (amigable para niños)
const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-fredoka",
    display: "swap",
});

export const metadata: Metadata = {
    title: "ABC Kids - Day Care",
    description: "Education and daycare center",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${poppins.variable} ${fredoka.variable} bg-bg antialiased`}>
            {children}
        </body>
        </html>
    );
}
