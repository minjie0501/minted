import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CaretRight, CaretLeft } from "phosphor-react";
import { is } from "immer/dist/internal";

interface Props {
  imgs: string[];
}

export function ItemImages({ imgs }: Props) {
  const [currentCarousel, setCurrentCarousel] = useState(0);

  // TODO: carousel doesnt work when mapping through the images

  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 flex bg-gray-700 bg-opacity-80"
      >
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={150}
              totalSlides={imgs.length}
              className="relative"
            >
              <div className="flex flex-col">
                {/* <ButtonBack className="w-12 h-full  inline bg-gray-300 bg-opacity-10 group hover:bg-opacity-30 absolute z-30 bottom-6">
                  <CaretLeft className="w-12 h-12 opacity-40 text-gray-300 group-hover:text-gray-400" />
                </ButtonBack>
                <ButtonNext className="z-30 w-32 h-full  bg-gray-300 bg-opacity-10 group hover:bg-opacity-30 absolute right-0 bottom-6">
                  <CaretRight className="w-32 h-32 opacity-40 text-gray-300 group-hover:text-gray-400" />
                </ButtonNext> */}
                <Slider>
                  {imgs.map((image, idx) => {
                    <Slide className="relative w-auto h-auto" index={idx}>
                      <div className="relative w-full h-full ">
                        <Image src={image} alt="item" layout="fill" className="object-contain" />
                      </div>
                    </Slide>;
                  })}
                  {/* <Slide className="relative w-auto h-auto " index={1}>
                    <div className="relative w-full h-full ">
                      <Image src={"/assets/carousel3.jpg"} alt="" layout="fill" className="object-cover" />
                    </div>
                  </Slide>
                  <Slide className="relative w-auto h-auto" index={2}>
                    <div className="relative w-full h-full">
                      <Image src={"/assets/carousel2.jpg"} alt="" layout="fill" className="object-cover" />
                    </div>
                  </Slide>
                  <Slide className="relative w-auto h-auto" index={3}>
                    <div className="relative w-full h-full">
                      <Image src={"/assets/carousel3.jpg"} alt="" layout="fill" className="object-cover" />
                    </div>
                  </Slide> */}
                </Slider>
              </div>
              {/* <div className="w-screen flex justify-center bg-slate-700 z-40">
          <DotGroup className="z-20 w-1/3 flex justify-evenly bg-gray-300 bg-opacity-50" dotNumbers />
        </div> */}
            </CarouselProvider>
          </div>
        </div>
      </div>
    </>
  );
}
