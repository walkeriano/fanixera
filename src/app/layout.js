import { Nunito } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome";
import { AuthProvider } from "@/state/auth/auth-provider";

const nunito = Nunito({
  subsets: ["latin"]
});

export const metadata = {
  title: "Tomi cibermarketing",
  description: "Beneficios para disfrutar de la vida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
