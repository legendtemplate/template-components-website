"use client";
import { useState, useEffect } from "react";
import { Components } from "@/types";
import Container from "@/components/container/page";
import { Button } from "@chakra-ui/react";
const imagePerRow = 3;
export default function Page() {
  const [next, setNext] = useState(6);
  const loadMorePets = () => {
    setNext(next + imagePerRow);
  };

  return (
    <div className="pt-5 pb-5">
      <Container>
        <div className="section-head ">
          <h4>
            <span>Component</span> Templates
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industrs
            <br />
            standard dummy text ever since the 1500s, when an unknown book.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {Component.slice(0, next).map((data: Components) => (
            <div
              className="item bg-white text-center py-7 px-6 shadow-lg transition-all mb-7 border-4 border-solid border-gray-200 rounded-xl hover:border-red-600 hover:bg-red-500 hover:shadow:xl hover:transition-all"
              key={data.id}
            >
              <h6 className="mb-5 text-gray-800 text-lg font-bold">
                {data.head}
              </h6>
              <p className="text-base">{data.para}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button
            className="py-2 px-6 bg-red-500 text-white rounded-md"
            onClick={loadMorePets}
          >
            Load More
          </Button>
        </div>
      </Container>
    </div>
  );
}

const Component: Components[] = [
  {
    id: 0,
    head: "Hero",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 1,
    head: "Features",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 2,
    head: " Footer",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 3,
    head: " Navbar",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 4,
    head: " Blogs Card",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 5,
    head: " Shopping Card",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 6,
    head: " Shopping Card",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 7,
    head: " Shopping Card",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
  {
    id: 8,
    head: " Shopping Card",
    para: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.",
  },
];
