"use client";
import Link from "next/link";
import { useState } from "react";

import { Metadata } from "next";
import { SmallHero, Card, Container } from "@/components/index";
import Cards from "./data";
import { Button } from "@chakra-ui/react";
const imagePerRow = 3;
const data = {
  title: "Premium Templates",
  description:
    "This website provide components and templates of react , next js and typescript support with tailwind css and chakura ui.",
};
export const metadata: Metadata = {
  title: `${data.title}`,
  description: `${data.description}`,
  keywords: ["about us"],
};

export default function page() {
  const [next, setNext] = useState(6);
  const loadMorePets = () => {
    setNext(next + imagePerRow);
  };
  return (
    <>
      <SmallHero head={`${data.title}`} />
      <Container>
        <div className="cards-list grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
          {Cards.slice(0, next).map((item: any) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Container>
      <Button
        className="py-2 px-6 bg-red-500 text-white rounded-md"
        onClick={loadMorePets}
      >
        Load More
      </Button>
    </>
  );
}
