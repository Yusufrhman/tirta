"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RightImage from "@/public/right.png";

const Carousel = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 4000,
  rounded = 0,
  objFit = "",
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const roundedClass = `rounded-[${rounded}px]`;

  return (
    <div className={`w-full h-full overflow-hidden relative ${roundedClass}`}>
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {slide.src ? (
              <div
                className={`relative w-full h-full overflow-hidden ${roundedClass} bg-maui-white`}
              >
                <Image
                  src={slide.src}
                  alt={`Slide ${index}`}
                  layout="fill"
                  objectFit={objFit}
                  className={`absolute inset-0 ${roundedClass}`}
                  style={{
                    borderRadius: `${rounded}px`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                  <p className="font-goldman text-center font-bold text-[20px] md:text-[35px] lg:text-[50px] text-[#ECECEC]">
                    {slide.text}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={`relative w-full h-full overflow-hidden flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-20 ${roundedClass}`}
              >
                <p className="font-goldman text-center font-bold text-[20px] md:text-[35px] lg:text-[50px] text-[#ECECEC]">
                  {slide.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between py-4 ">
        <div>
          <button
            onClick={prev}
            className="hover:opacity-80 transition-opacity"
          >
            <div className="h-[45px] md:h-[80px] w-[45px] md:w-[80px]">
              <Image
                src={RightImage}
                alt="Left Small Image"
                className="object-cover transform scale-x-[-1]"
              />
            </div>
          </button>
        </div>
        <button onClick={next} className="transition-opacity hover:opacity-50">
          <div className="h-[45px] md:h-[80px] w-[45px] md:w-[80px]">
            <Image
              src={RightImage}
              alt="Right Small Image"
              className="object-cover"
            />
          </div>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
