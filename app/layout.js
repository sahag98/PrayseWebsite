import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Prayse",
  description:
    "Welcome to Prayse! Easily create and manage your personal prayer list, helping you stay organized and focused in your spiritual life.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
