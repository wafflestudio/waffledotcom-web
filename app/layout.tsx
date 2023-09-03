import { ReactNode } from "react";
import "../styles/globals.css";
import "../styles/font.scss";
import Header from "../components/common/Header/Header";

export const metadata = {
  title: "WaffleStudio",
  description: "맛있는 서비스가 탄생하는 곳 와플스튜디오",
  icons: {
    icon: "/favicon.ico",
  },
  robots: "noindex",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
