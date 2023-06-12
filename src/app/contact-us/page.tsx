import { Metadata } from "next";
import { SmallHero,Form } from "@/components/index";
const data = {
  title: "Contact Us",
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
      <Form />
    </>
  );
}
