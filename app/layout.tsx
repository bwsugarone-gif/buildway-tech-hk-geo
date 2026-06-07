import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const companyName = "Buildway Tech (HK) Limited";

export const metadata: Metadata = {
  title: {
    default:
      "Buildway Tech (HK) Limited | 香港中小企 AI 數碼化顧問、自動化、公司知識庫",
    template: `%s | ${companyName}`,
  },
  description:
    "Buildway Tech (HK) Limited 協助香港中小企老闆透過 AI 數碼化減少行政工作、整理資料、加快報價並提升管理效率。專注於 AI 自動化流程與企業知識庫建設。",
  applicationName: companyName,
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
