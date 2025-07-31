import localFont from "next/font/local";

export const graphikArabic = localFont({
  src: [
    {
      path: "./_graphik_arabic/Graphik Arabic Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_graphik_arabic/Graphik Arabic Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_graphik_arabic/Graphik Arabic Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-graphik-arabic",
  display: "swap",
});
