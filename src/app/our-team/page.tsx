import { SmallHero, Team } from "@/components/index";
import { Metadata } from "next";

const data = {
  title: "Our Teams",
  description:
    "This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.",
};
export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ["about us"],
};
export default function page() {
  return (
    <>
      <SmallHero head={`${data.title}`} />
      <Team />
    </>
  );
}
