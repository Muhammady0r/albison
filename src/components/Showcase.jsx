import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 min-[1150px]:px-8 overflow-hidden">
      <div className="grid grid-cols-1 min-[1150px]:grid-cols-2 my-16">
        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center min-[1150px]:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              DASTURLASH MAKTABI
            </button>
          </div>
          <div className="py-3 text-center  min-[1150px]:text-start">
            <h1 className="text-5xl min-[1150px]:text-[80px] font-bold leading-[6rem] max-[1150px]:leading-[3rem]">
              Barqaror kelajak- bepul* ta’lim asosida
            </h1>
          </div>
          <div className="my-7 text-center min-[1150px]:text-start">
            <Link
              to="#"
              className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue-600 text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-blue-800"
              onClick={() => {
                scrollTo(0, 5395);
              }}
            >
              Boshlash
            </Link>
          </div>
        </div>
        <div className="min-[1150px]:-m-23  hidden min-[1150px]:block">
          <img
            alt="hero-image"
            width="800"
            height="642"
            src="https://www.albison.uz/images/banner/banner.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
