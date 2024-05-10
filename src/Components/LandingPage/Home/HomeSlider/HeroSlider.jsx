"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import slider0 from "../../../../../public/assets/slider/slider0.jpg";
import slider1 from "../../../../../public/assets/slider/slider1.jpg";
import slider2 from "../../../../../public/assets/slider/slider2.jpg";
import slider3 from "../../../../../public/assets/slider/slider3.jpg";
import slider4 from "../../../../../public/images/blog-1.jpg";
import slider5 from "../../../../../public/images/blog-2.jpg";
import slider6 from "../../../../../public/images/blog-3.jpg";
import slider7 from "../../../../../public/images/blog-4.jpg";

const HeroSlider = () => {
  const carouselOptions = {
    align: "start",
    loop: true,
  };

  return (
    <section className="">
      <main className="">
        <div className="overflow-hidden h-[69.2vh]  ">
          <Carousel
            opts={carouselOptions}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
          >
            <CarouselContent>
              {/* <CarouselPrevious /> */}
              <CarouselItem>
                <Image src={slider0} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider1} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider2} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider3} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider4} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider5} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider6} alt="Image" />
              </CarouselItem>
              <CarouselItem>
                <Image src={slider7} alt="Image" />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselNext /> */}
          </Carousel>
        </div>
      </main>
    </section>
  );
};

export default HeroSlider;
