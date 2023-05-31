import { Metadata } from "next";
import SmallHero from "@/components/Small-Hero/page";
import Card from "@/components/components/chakura-ui-react-typescript/card/page";
const data = {
  title: "Chakura React and Typescript Components",
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
      <Card />
      </>
  );
}
