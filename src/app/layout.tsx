import type { Metadata } from "next";
import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";
import { COPY } from "@/constants/copy";
import { SITE } from "@/constants/site";
import "./globals.css";

const themeInitScript = `(function(){try{var k="darkroom-ui-theme";var t=localStorage.getItem(k);var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})();`;

export const metadata: Metadata = {
  title: `${SITE.name} — ${COPY.en.hero.tagline}`,
  description: COPY.en.hero.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
