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
      <div className="cards-list grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
        {Cards.slice(0, next).map((data: Card) => (
          <Link href={data.href} key={data.id}>
            <div className="card mb-10 mx-auto h-auto rounded-lg cursor-pointer">
            <div className="rounded-lg">
              <img
                className="object-cover rounded-lg"
                src={data.img}
                alt={data.label}
                title={data.label}
              />{" "}
            </div>
            <div className="text-white text-center font bold -mt-[40px] h-10 text-2xl">
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
    href: "/premium-templates/blog-website",
    img: "/templates/blog_website.png",
  },
  {
    id: 1,
    label: "Ecommerce Websites",
    href: "/premium-templates/ecommerce-website",
    img: "/templates/ecommerce_website.png",
},
{
    id: 2,
    label: "Landing Pages",
    href: "/",
    img: "/templates/landing_page_website.png",
},
{
    id: 3,
    label: "Education Websites",
    href: "/",
    img: "/templates/education_website.png",
  },
{
    id: 4,
    label: "Resume Websites",
    href: "/",
    img: "/templates/resume_website.png",
  },
{
    id: 5,
    label: "Coming Soon",
    href: "/",
    img: "/templates/coming_soon.png",
  },
{
    id: 6,
    label: "Coming Soon",
    href: "/",
    img: "/templates/coming_soon.png",
  },
{
    id: 7,
    label: "Coming Soon",
    href: "/",
    img: "/templates/coming_soon.png",
  },
];
