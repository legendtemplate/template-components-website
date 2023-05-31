"use client";
import { PCard } from "@/types/index";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/container/page";

const imagePerRow = 3;
export default function page() {
  const [next, setNext] = useState(6);
  const loadMorePets = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {Cards.slice(0, next).map((data: PCard) => (
            <Link href={data.href} key={data.id}>
              <div className="flex flex-col relative ml-6 hover:shadow-lg transition-all ">
                <div className="img w-full relative">
                  <img
                    className="w-full object-cover"
                    src={data.img}
                    alt={data.label}
                    title={data.label}
                  />
                </div>
                <div className="tag absolute top-4 ">
                  <span className="bg-red-400 p-2 rounded-md ml-3 text-white">
                    {data.tag}
                  </span>
                </div>
                <div className="head bg-gray-50 w-full py-3 px-3">
                  <h4 className="py-2 text-base font-semibold">{data.head}</h4>
                  <div>
                    <span className="font-normal text-sm text-gray-400">
                      By {data.author}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center my-3">
                    <div className="flex-grow text-lg font-bold text-red-400">
                      {data.dollar}$
                    </div>
                    <div>
                      <button className="px-3 py-2 text-sm border-2 border-solid border-gray-400 text-black hover:bg-gray-200 hover:text-red-400">22</button>
                    </div>
                    <div>
                      <button className="px-3 py-2 text-sm hover:bg-red-400 hover:text-white border-2 border-red-400 border-solid">Live Preview</button>
                    </div>
                  </div>
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
const Cards: PCard[] = [
  {
    id: 0,
    label: "Blog Websites 1",
    href: "/premium-templates/blog-website",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
    tag: "Business",
    author: "Muzammil",
    head: "Avada | Website Builder For WordPress & WooCommerce",
    dollar: 45,
    Live: "",
  },
  {
    id: 1,
    label: "Blog Websites 2",
    href: "/premium-templates/blog-website",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
    tag: "Business",
    author: "Muzammil",
    head: "Avada | Website Builder For WordPress & WooCommerce",
    dollar: 45,
    Live: "",
  },
  {
    id: 2,
    label: "Blog Websites 3",
    href: "/premium-templates/blog-website",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
    tag: "Business",
    author: "Muzammil",
    head: "Avada | Website Builder For WordPress & WooCommerce",
    dollar: 45,
    Live: "",
  },
];
