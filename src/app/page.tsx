import { Hero, Hire, Feature, Technology, Comp } from "@/components/index";
import { Metadata } from "next";

const data = {
  title: "Website Templates and Components",
  description:
    "This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.",
};

export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ["Next.js", "React", "JavaScript"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Technology />
      <Hire />
      <Comp />
      <Feature />
    </>
  );
}
