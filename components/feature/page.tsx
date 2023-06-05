import React from "react";
import { FaCheck } from "react-icons/fa";
import { Feature } from "@/types";
import Container from "../container/page";

export default function page() {
  return (
    <section className="py-5">
      <Container>
        <div className="justify-center py-3">
          <div className="section-head">
            <h4>
              <span>Features</span> Templates
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
          {Features.map((data: Feature) => (
            <div
              className=" mb-3 py-4 pl-4 flex items-center rounded-md bg-gray-100"
              key={data.id}
            >
              <p className=" text-red-500 text-xl ">
                <FaCheck />
              </p>
              <p className=" font-bold md:ml-16 ml-10 text-black hover:text-gray-500">
                <a href="#">{data.label}</a>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
const Features: Feature[] = [
  { id: 0, label: "6 Projects" },
  { id: 1, label: "80+ Components" },
  { id: 2, label: "Production Ready" },
  { id: 3, label: "Typescript Support" },
  { id: 4, label: "Ease of Use" },
  { id: 5, label: "Fully Responsive" },
  { id: 6, label: "Light and Dark Mode" },
  { id: 7, label: "Easy to Customize" },
  { id: 8, label: "Open Source" },
];
