import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIND MOVE Article",
  description: "A creative publishing space for stories, poems, articles and artists.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
