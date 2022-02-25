import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CaretRight, CaretLeft } from "phosphor-react";

interface Props {}

export function Carousel({}: Props) {
  const [currentCarousel, setCurrentCarousel] = useState(0);

  return (
    <>
      <img src="../public/assets/carousel1.jpg" alt="" />
      <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={42} totalSlides={4} className="relative">
        <div className="flex flex-col">
          <ButtonBack className="w-32 h-full  inline bg-gray-300 bg-opacity-10 group hover:bg-opacity-30 absolute z-30 bottom-6">
            <CaretLeft className="w-32 h-32 opacity-40 text-gray-300 group-hover:text-gray-400" />
          </ButtonBack>
          <ButtonNext className="z-30 w-32 h-full  bg-gray-300 bg-opacity-10 group hover:bg-opacity-30 absolute right-0 bottom-6">
            <CaretRight className="w-32 h-32 opacity-40 text-gray-300 group-hover:text-gray-400" />
          </ButtonNext>
          <Slider>
            <Slide index={0}>
              <div className="relative w-full h-full">
                <Image src={"/assets/carousel2.jpg"} alt="" layout="fill" />
              </div>
            </Slide>
            <Slide className="relative w-auto h-auto" index={1}>
              <div className="relative w-full h-full">
                <Image src={"/assets/carousel2.jpg"} alt="" layout="fill" />
              </div>
            </Slide>
            <Slide className="relative w-auto h-auto" index={2}>
              <div className="relative w-full h-full">
                <Image src={"/assets/carousel2.jpg"} alt="" layout="fill" />
              </div>
            </Slide>
            <Slide className="relative w-auto h-auto" index={3}>
              <div className="relative w-full h-full">
                <Image src={"/assets/carousel2.jpg"} alt="" layout="fill" />
              </div>
            </Slide>
          </Slider>
        </div>
        <div className="w-screen flex justify-center bg-slate-700 z-40">
          <DotGroup className="z-20 w-1/3 flex justify-evenly bg-gray-300 bg-opacity-50" dotNumbers />
        </div>
      </CarouselProvider>
      {/* <div id="default-carousel" data-carousel="slide" className="relative">
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="/assets/carousel1.jpg"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <div className="duration-700 ease-in-out" data-carousel-item="">
            <img
              src="../../assets/carousel2.jpg"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="../../assets/carousel1.jpg"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="../../assets/carousel1.jpg"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="../../assets/carousel1.jpg"
              className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 bg-white rounded-full dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => setCurrentCarousel(0)}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => setCurrentCarousel(1)}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div> */}
    </>
  );
}
