import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Result = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      img: "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/insta/zamira.webp",
      link: "https://youtube.com/embed/8hgvsfU7tsc?rel=0&showinfo=0",
    },
    {
      img: "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/insta/malika.webp",
      link: "https://youtube.com/embed/2aQ5GM1n9Qk?rel=0&showinfo=0",
    },
    {
      img: "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/insta/iroda.webp",
      link: "https://youtube.com/embed/GinnkDF7w1A?rel=0&showinfo=0",
    },
    {
      img: "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/insta/sunbula.webp",
      link: "https://youtube.com/embed/UpciodTd59I?rel=0&showinfo=0",
    },
  ];
  const [url, setUrl] = useState("");

  return (
    <>
      <div className="max-sm:hidden mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item, i) => {
            return (
              <div className="mx-auto imageContainer" key={i}>
                <img
                  width="306"
                  height="306"
                  className="rounded-2xl"
                  src={item.img}
                />
                <div>
                  <button
                    className="text-white font-semibold absolute z-10"
                    onClick={() => {
                      setUrl(item.link);
                      setOpen(true);
                    }}
                  >
                    <img
                      alt="instagram"
                      width="36"
                      height="36"
                      src="https://www.albison.uz/_next/static/media/youtube.45167709.svg"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="my-14 overflow-visible sm:hidden mt-[350px]"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i} className="w-[300px] h-[300px]">
            <div className="mx-auto imageContainer">
              <img
                width="306"
                height="306"
                className="rounded-2xl"
                src={item.img}
              />
              <div>
                <button
                  className="text-white font-semibold absolute z-10"
                  onClick={() => {
                    setUrl(item.link);
                    setOpen(true);
                  }}
                >
                  <img
                    alt="instagram"
                    width="36"
                    height="36"
                    src="https://www.albison.uz/_next/static/media/youtube.45167709.svg"
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`${
          open ? "fixed" : "hidden"
        } z-[9999] bg-black/50 backdrop-blur-sm top-0 left-0 w-full h-full`}
        onClick={() => {
          setUrl("");
          setOpen(false);
        }}
      >
        <button className="flex fixed top-8 right-5 bg-white rounded-full w-10 items-center aspect-square justify-center font-semibold text-2xl hover:bg-black hover:text-white">
          X
        </button>
      </div>
      <div
        className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          open ? "fixed" : "hidden"
        } z-[9999] flex flex-col justify-center items-center  w-3/5 h-[500px] m-auto rounded-[20px] max-sm:m-auto max-sm:w-[95%] max-sm:h-[300px]`}
      >
        <iframe
          src={url}
          width="100%"
          height="100%"
          allowFullScreen=""
          allow="autoplay"
          className="rounded-3xl"
          frameBorder={0}
        ></iframe>
      </div>
    </>
  );
};

export default Result;
