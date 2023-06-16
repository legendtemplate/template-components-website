import { Metadata } from "next";
import { SmallHero, CssCard } from "@/components/index";

const data = {
  title: "HTML CSS and Js Components",
  description:
    "This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.",
  Url: "https://acme.com",
};

export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ["about us"],
  metadataBase: new URL(`${data.Url}`),
};

export default function page() {
  
  return (
    <>
      <SmallHero head={`${data.title}`} />
      <CssCard />
    </>
  );
}
