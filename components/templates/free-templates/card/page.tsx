'use client'
import {Card} from '@/types/index'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import Container from '@/components/container/page';

const imagePerRow = 3
export default function page() {
    const [next, setNext] = useState(6);
  const loadMorePets = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
    <Container>
      <div className="cards-list grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
        {Cards.slice(0, next).map((data: Card) => (
          <Link href={data.href} key={data.id}>
            <div className="card my-7 mx-auto h-48 rounded-lg cursor-pointer">
            <div className="rounded-lg">
              <img
                className="object-cover rounded-lg"
                src={data.img}
                alt={data.label}
                title={data.label}
              />{" "}
            </div>
            <div className="text-white text-center font bold -mt-[100px] h-10 text-2xl">
              <p>{data.label}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </Container>
      <div className="flex justify-center items-center my-8">
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
    label: "Blog Websites",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
  {
    id: 1,
    label: "Ecommerce Websites",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
},
{
    id: 2,
    label: "Landing Pages",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
},
{
    id: 3,
    label: "Education Websites",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
{
    id: 4,
    label: "Resume Websites",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
{
    id: 5,
    label: "Coming Soon",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
{
    id: 6,
    label: "Coming Soon",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
{
    id: 7,
    label: "Coming Soon",
    href: "/",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
  },
];
