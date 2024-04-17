import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <img
          alt="dots-image"
          width="100"
          height="100"
          className="absolute bottom-1 -left-20"
          src="https://www.albison.uz/_next/static/media/dots.640173b7.svg"
        />
        <h3 className="text-center text-blue text-lg tracking-widest">
          Biz haqimizda
        </h3>
        <h4 className="text-center text-4xl min-[1150px]:text-[65px] leading-[1] font-bold">
          Aslida kimmiz?
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-30">
          <div className="bg-navyblue-card bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group">
            <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
              Biz haqimizda
            </h4>
            <img
              alt="https://www.albison.uz/images/aboutus/imgOne.svg"
              width="100"
              height="100"
              className="mb-2"
              src="https://www.albison.uz/images/aboutus/imgOne.svg"
            />
            <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-2">
              Biz o’quv markazi emas, balki IT-ni o’rganishdan ishga
              kirguningizgacha ta’lim beradigan dunyodagi yagona ta’lim maskani.
              Bunday imkoniyatlarga grant asosida ega bo’lish uchun shartlarimiz
              bilan tanishib chiqing
            </h4>
            <Link
              target="_blank"
              className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              to="https://www.youtube.com/watch?v=6Yy4WC0zUKE&amp;t=2s&amp;ab_channel=AlbisonAcademy"
            >
              Batafsil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="bg-navyblue-card bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group">
            <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
              Qizlar uchun
            </h4>
            <img
              alt="https://www.albison.uz/images/aboutus/imgTwo.svg"
              width="100"
              height="100"
              className="mb-2"
              src="https://www.albison.uz/images/aboutus/imgTwo.svg"
            />
            <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-2">
              IT Girls kursi IELTS 7+ bo’lgan qizlar uchun maxsus kurs bo’lib,
              barcha bitiruvchilar hozirda IT kompaniyalarda ishlab kelmoqda. Bu
              kursga qabul faqat yilda bir marta bo'lib, xotin-qizlar kuni
              munosabati bilan tashkil etiladi{" "}
            </h4>
            <Link
              target="_blank"
              className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              to="https://www.spot.uz/oz/2023/03/10/it-girls/"
            >
              Batafsil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="bg-navyblue-card bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group">
            <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
              Ishga kirish
            </h4>
            <img
              alt="https://www.albison.uz/images/aboutus/imgThree.svg"
              width="100"
              height="100"
              className="mb-2"
              src="https://www.albison.uz/images/aboutus/imgThree.svg"
            />
            <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-2">
              Xayriya kurslari eng qisqa vaqt ichida kadrlarni tayyorlab, ishga
              joylashtirish uchun ishlab chiqilgan. Kursdan keyin siz xohlagan
              ishga joylashish yoki Albison jamoası bilan birgalikda o’sishda
              davom etishingiz mumkin
            </h4>
            <Link
              target="_blank"
              className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              to="https://www.youtube.com/@albisonuz/shorts"
            >
              Batafsil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
