"use client";
import { PCard } from "@/types/index";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/container/page";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "@/types/index";
const imagePerRow = 3;

export default function page() {
  const [next, setNext] = useState(6);
  const [filteredCards, setFilteredCards] = useState(Cards);
  const [cat, setCat] = useState();
// load data
  const loadMorePets = () => {
    setNext(next + imagePerRow);
  };

  useEffect(() => {
    setFilteredCards(
      Cards.filter(data => {
        return (
          (!cat || cat === data.cat)
        )
      })
    )
  }, [cat])

  const Cats = Array.from(
    new Set(Cards.map(data => data.cat))
  )

  return (
    <>
      <Container>
     <select 
     className="outline-0 select my-6 border-0 curdor-pointer py-3 px-6 bg-red-500 text-white"
        onChange={(e :any) => setCat(e.target.value)}>
        <option value="" className="bg-gray-400 text-lg text-white" disabled selected>
          Select Templates
        </option>

        {Cats.map(cat => {
          return <option className='py-2 px-6 text-lg bg-gray-400' key={cat}>{cat}</option>
        })}
      </select>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {filteredCards.slice(0, next).map((data: PCard) => (
            <Link href={data.href} key={data.id}>
              <div className="flex flex-col relative ml-6 hover:shadow-lg transition-all ">
                <div className="img w-full relative">
                  <img
                    className="w-full object-cover md:h-52 h-auto "
                    src={data.img}
                    alt={data.label}
                    title={data.label}
                  />
                </div>
                <div className="tag absolute top-4 ">
                  <span className="bg-red-400 p-2 text-sm rounded-md ml-3 text-white">
                    {data.tag}
                  </span>
                </div>
                <div className="head bg-white w-full py-3 px-3">
                  <h4 className="py-2 text-base font-semibold">{data.head}</h4>
                  <div>
                    <span className="font-normal text-sm text-gray-400">
                      By {data.author}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center my-3">
                    <div className="flex-grow text-lg font-bold text-red-400 pl-4">
                      {data.dollar}$
                    </div>
                    <div>
                      <button className="px-3 py-3 text-sm border-2 border-solid border-gray-400 text-black hover:bg-gray-200 hover:text-red-400">
                        <FaShoppingCart />
                      </button>
                      
        {/* <AddToCartBtn product={props.product} /> */}

                    </div>
                    <div>
                      <button className="px-3 py-2 text-sm hover:bg-red-400 hover:text-white border-2 border-red-400 border-solid">
                        Live Preview
                      </button>
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
    img: "/templates/blog/2.webp",
    tag: "Business",
    author: "Muzammil",
    head: "Avada | Website Builder For WordPress & WooCommerce",
    dollar: 45,
    Live: "",
    cat : "Html"
  },
  {
    id: 1,
    label: "Blog Websites 2",
    href: "/premium-templates/blog-website",
    img: "/templates/blog/blog_website_next.jpg",
    tag: "Business-2",
    author: "Muzammil",
    head: "Avada | Website Builder For WordPress & WooCommerce",
    dollar: 45,
    Live: "",
    cat : "Next Js"
  },
  {
    id: 2,
    label: "Blog Websites 3",
    href: "/premium-templates/blog-website",
    img: "/templates/blog/blog_website.jpg",
    tag: "Business",
    author: "Muzammil",
    head: "Avada | Website Builder For WordPress & WooCommerce",
    dollar: 45,
    Live: "",
    cat : "Sanity"
  },
];



