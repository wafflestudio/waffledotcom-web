import { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/globals.css";
import "../styles/font.scss";
import Header from "../components/common/Header/Header";

export const metadata: Metadata = {
  title: "WaffleStudio",
  description: "맛있는 서비스가 탄생하는 곳 와플스튜디오",
  icons: {
    icon: "/favicon.ico",
  },
  robots: "noindex",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://wafflestudio.com",
    title: "와플스튜디오",
    siteName: "wafflestudio.com",
    description: "맛있는 서비스가 탄생하는 곳 와플스튜디오",
    images: [
      {
        url: "/static/images/logo/wafflestudio_logo.svg",
        width: 800,
        height: 600,
        alt: "WaffleStudio",
      },
    ],
  },
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
