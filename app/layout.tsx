import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Gems | Community Driven Web3 & SaaS Project Funding",
  description: "Unlock your project's potential. Launch, grow, and thrive with Gems, the ultimate premium decentralized fundraising and community empowerment platform.",
  keywords: ["Web3", "SaaS", "Gems", "Crypto Launchpad", "Fundraising", "Decentralized Finance", "Project Funding", "Token Sale"],
  authors: [{ name: "Gems Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-bg text-white antialiased selection:bg-neon-green/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
