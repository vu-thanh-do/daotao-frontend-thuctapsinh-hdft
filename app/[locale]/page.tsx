import {  Viewport } from 'next';
import { notFound } from "next/navigation";
export async function generateViewport(): Promise<Viewport> {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#F97316" },
      { media: "(prefers-color-scheme: dark)", color: "#EA580C" },
    ],
  };
}

interface ProxyHomepageProps {
  params: Promise<{ locale: "vi" | "en" }>;
}
const HomePage = async ({ params }: ProxyHomepageProps) => {
  const { locale } = await params;
  if (!["vi", "en"].includes(locale)) {
    notFound();
  }

 

  return (
    <>
     hi
    </>

  );
};

export default HomePage;

