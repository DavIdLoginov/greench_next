import { Rubik } from "next/font/google";
import "./globals.css";

const fontRubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Greench",
  description: "Greench: Эксперты в ландшафтном дизайне и озеленении",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontRubik.variable}`}>
        {children}
      </body>
    </html>
  );
}
