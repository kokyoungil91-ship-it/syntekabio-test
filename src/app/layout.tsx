import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsive Test Page",
  description:
    "반응형 웹 테스트 페이지.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
