"use client";
import { Card } from "@/types/index";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
const imagePerRow = 3;
export default function page() {
  const [next, setNext] = useState(6);
  const [filteredCards, setFilteredCards] = useState(Cards);

  const loadMorePets = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <div className="cards-list grid md:grid-cols-3 grid-cols-2 gap-5">
        {filteredCards.slice(0, next).map((data) => {
          const { href, img, label, id } = data;
          return (
            <Link href={data.href} key={id}>
              <div className="card my-7 mx-auto h-48 rounded-lg cursor-pointer">
                <div className="rounded-lg">
                  <img
                    className="object-cover rounded-lg"
                    src={data.img}
                    alt={data.label}
                    title={data.label}
                  />
                </div>
                <div className="text-white text-center font bold -mt-[100px] h-10 text-2xl">
                  <p>{data.label}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <Button
          className="py-2 px-6 bg-red-500 text-white rounded-md"
          onClick={loadMorePets}
        >
          Load More
        </Button>
      </div>
    </>
  );
}

const Cards: Card[] = [
  {
    id: 0,
    label: "Card Title 0",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 1,
    label: "Card Title 1",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 2,
    label: "Card Title 2",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 3,
    label: "Card Title 3",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 4,
    label: "Card Title 4",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 5,
    label: "Card Title 5",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 6,
    label: "Card Title 6",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 7,
    label: "Card Title 7",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
];
