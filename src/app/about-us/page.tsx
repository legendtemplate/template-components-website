import { Metadata } from "next";
import { SmallHero,About } from "@/components/index";
const data = {
  title: "About Us",
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
      <About />
    </>
  );
}
