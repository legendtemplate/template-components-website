import { FaReact, FaCss3, FaJsSquare, FaNode, FaHtml5 } from "react-icons/fa";
import React from "react";
import Container from "@/components/container/page";

export default function page() {
  return (
    <>
      {/* <Container> */}
      <section className="my-10">
        <div className="section-head ">
          <h4>
            <span>Reliable </span> delivery
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industrs
            <br />
            standard dummy text ever since the 1500s, when an unknown book.
          </p>
        </div>

        <Container>
          <div className="grid sm:grid-cols-3 mt-10 grid-cols-1 gap-3 items-center justify-center ">
            <div className="features">
              <div className="feature grid grid-cols-3 gap-2 md:w-72 w-full relative pt-4 px-8 rounded-xl border-solid md:h-52 sm:h-40 h-60 border-t-4 border-red-500">
                <span className="lg:text-4xl text-3xl text-yellow-500 p-3">
                  <FaJsSquare />
                </span>
                <div className="flex flex-col">
                  <span className="lg:text-4xl text-3xl text-blue-300 p-3">
                    <FaCss3 />
                  </span>
                  <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                    <FaReact />
                  </span>
                </div>
                <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                  <FaReact />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="features md:w-72 w-full">
                <div className="feature grid grid-cols-3 gap-2 relative p-4 rounded-xl border-solid md:h-52 sm:h-40 h-60 border-t-4 border-blue-500">
                  <span className="lg:text-4xl text-3xl text-red-500 p-3">
                    <FaHtml5 />
                  </span>
                  <div className="flex flex-col">
                    <span className="lg:text-4xl text-3xl text-blue-300 p-3">
                      <FaCss3 />
                    </span>
                    <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                      <FaReact />
                    </span>
                  </div>
                  <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                    <FaReact />
                  </span>
                </div>
              </div>
              <div className="features md:w-72 w-full">
                <div className="feature grid grid-cols-3 gap-2 relative p-4 mt-12 rounded-xl border-solid md:h-52 sm:h-40 h-60 border-t-4 border-yellow-500">
                  <span className="lg:text-4xl text-3xl text-yellow-500 p-3">
                    <FaJsSquare />
                  </span>
                  <div className="flex flex-col">
                    <span className="lg:text-4xl text-3xl text-blue-300 p-3">
                      <FaCss3 />
                    </span>
                    <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                      <FaReact />
                    </span>
                  </div>
                  <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                    <FaReact />
                  </span>
                </div>
              </div>
            </div>
            <div className="features">
              <div className="feature grid grid-cols-3 gap-2 relative md:w-72 pt-4 px-8 rounded-xl border-solid md:h-52 sm:h-40 h-60 border-t-4 border-red-500">
                <span className="lg:text-4xl text-3xl p-1">
                  <FaNode />
                </span>
                <div className="flex flex-col">
                  <span className="lg:text-4xl text-3xl text-blue-300 p-3">
                    <FaCss3 />
                  </span>
                  <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                    <FaReact />
                  </span>
                </div>
                <span className="lg:text-4xl text-3xl text-blue-500 p-3">
                  <FaReact />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* </Container> */}
    </>
  );
}
