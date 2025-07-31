import type React from "react";
import type { Metadata } from "next";
import { graphikArabic } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "الصفحة الرسمية للواء عصام الرتمي - أمين حزب الجبهة الوطنية بمحافظة الفيوم",
  description:
    "الموقع الرسمي للواء عصام عبد الغني الرتمي - أمين حزب الجبهة الوطنية بمحافظة الفيوم ومرشح مجلس الشيوخ 2025",
  keywords:
    "اللواء عصام الرتمي, الفيوم, حزب الجبهة الوطنية, مجلس الشيوخ, التنمية المستدامة, مبادرة صديق",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={graphikArabic.className}>{children}</body>
    </html>
  );
}
