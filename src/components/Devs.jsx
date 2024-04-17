import React from "react";

const Furqat =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/furqat.webp";
const Ibrohim =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/ibrohim.webp";
const Zokir =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/zokir.webp";
const Kamron =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/kamron.webp";
const Dilshod =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/dilshod.webp";
const Shuhrat =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/shuhrat.webp";
const logLin =
  "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/public/images/wework/linkedin.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const data = [
  {
    profession: "CEO",
    name: "Furqat",
    surname: "Teshaev",
    imgSrc: Furqat,
    in: "https://www.linkedin.com/in/furkat-teshaev-b16701199/",
  },
  {
    profession: "#developer",
    name: "Kamron",
    surname: "Shodmonov",
    imgSrc: Kamron,
    in: "https://www.linkedin.com/in/kamronbekshodmonov/",
  },
  {
    profession: "#developer",
    name: "Ibrohim",
    surname: "Fattohov",
    imgSrc: Ibrohim,
    in: "https://www.linkedin.com/in/ibrohim-fattohov/",
  },
  {
    profession: "#developer",
    name: "Shuhrat",
    surname: "Ergashev",
    imgSrc: Shuhrat,
    in: "https://www.linkedin.com/in/shuhrat-ergashev-aa1771238/",
  },
  {
    profession: "#developer",
    name: "Dilshodbek",
    surname: "Khodjakov",
    imgSrc: Dilshod,
    in: "https://www.linkedin.com/in/dilshodbek-khodjakov/",
  },
  {
    profession: "#developer",
    name: "Zokirjon",
    surname: "Murotov",
    imgSrc: Zokir,
    in: "https://www.linkedin.com/in/zokirjon-murotov-2a5200239/",
  },
];

const Devs = () => {
  return (
    <div className="bg-wework py-32 overflow-hidden">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Bizning dasturchilar jamoasi
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
            Bizning dasturchilar jamoasi
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
            Bizning dasturchilar jamoasi
          </h3>
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
        className="my-14 overflow-visible"
      >
        {data?.map((items, i) => (
          <SwiperSlide
            key={i}
            className="w-[300px] overflow-hidden rounded-3xl"
          >
            <div className="flex flex-col bg-white py-14 px-2 pb-4 text-center shadow-xl rounded-3xl overflow-hidden h-full ">
              <div className="flex flex-col">
                <div className="h-[230px] overflow-hidden w-4/5 rounded-[50%_0_50%_50%] m-auto">
                  <img
                    src={items.imgSrc}
                    alt="gaby"
                    width={182}
                    height={160}
                    className={`inline-block m-auto w-full ${
                      items.imgSrc === Shuhrat
                        ? "-translate-y-16"
                        : items.imgSrc ===
                          "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/images/wework/ibrohim.webp"
                        ? "-translate-y-11"
                        : items.imgSrc ===
                          "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/images/wework/dilshod.webp"
                        ? "-translate-y-11"
                        : items.imgSrc ===
                          "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/images/wework/zokir.webp"
                        ? "-translate-y-14"
                        : items.imgSrc ===
                          "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/images/wework/kamron.webp"
                        ? "-translate-y-5"
                        : items.imgSrc ===
                          "https://raw.githubusercontent.com/NurislomRazzokov/albison/main/images/wework/furqat.webp"
                        ? "-translate-y-4"
                        : null
                    }`}
                  />
                </div>
                <Link to={items.in} target="_blank">
                  <img
                    src={logLin}
                    alt="greenbg"
                    className="w-28 h-28 absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-8 hover:translate-y-15 transition"
                  />
                </Link>
              </div>
              <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
              <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                {items.profession}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Devs;
