import React, { useState } from "react";

import { Switch } from "@/components/ui/switch";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Service = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-[65px] sm:leading-[1] font-black">
          To'g'ri tanlov o'z <br /> qo'lingizda
        </h3>
        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <img
              alt="right-icon"
              width="21"
              height="14"
              src="https://www.albison.uz/_next/static/media/right.4fd2bf3c.svg"
            />
            <h4 className="text-lg font-semibold">3 oy intensiv kurs </h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <img
              alt="right-icon"
              width="21"
              height="14"
              src="https://www.albison.uz/_next/static/media/right.4fd2bf3c.svg"
            />
            <h4 className="text-lg font-semibold">Cheksiz imkoniyatlar </h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <img
              alt="right-icon"
              width="21"
              height="14"
              src="https://www.albison.uz/_next/static/media/right.4fd2bf3c.svg"
            />
            <h4 className="text-lg font-semibold">
              Ishlab berish majburiyatisiz
            </h4>
          </div>
        </div>
        <div className="mt-6 relative flex justify-center">
          <h3 className="text-sm font-medium mr-5">Oylik</h3>
          <Switch
            changeBG={false}
            className={"scale-110"}
            onCheckedChange={(e) => {
              setAnnual(e);
            }}
          />
          <h3 className="text-sm font-medium ml-5">Yillik</h3>
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
        className="overflow-visible lg:hidden mb-[350px]"
      >
        <SwiperSlide className="w-[475px] h-64">
          <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              O’quv markazlar
            </h4>
            <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
              $100{annual ? "0" : ""}*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">
              {annual ? "Yillik" : "Oylik"}
            </p>
            <a
              target="_blank"
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
              href="https://www.google.com/search?q=it+o%27quv+markazlari+uzbekistan&amp;oq=it+o%27quv+markazlari+uz&amp;gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHjIKCAYQIRgWGB0YHtIBCDY0NDNqMGo3qAIAsAIA&amp;sourceid=chrome&amp;ie=UTF-8"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                9 oylik kurs
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitiruvchilarga sertifikat berish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Faqat qimmat IT kurslarda mavjud
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[475px] h-64">
          <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              Albison Academy
            </h4>
            <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
              $0*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">
              {annual ? "Yillik" : "Oylik"}
            </p>
            <a
              target="_blank"
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
              href="https://t.me/albisonbot"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                3 oylik kurs + amaliyot
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitiruvchilarga ish taklif qilish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Jamoa uchun bepul ingliz tili kurslari{" "}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitirgandan keyin ham qo’llab- quvvatlash{" "}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Global IT kompaniyalarga tayyorlash{" "}
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[475px] h-64">
          <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              Oliygohlar
            </h4>
            <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
              $300{annual ? "0" : ""}*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">
              {annual ? "Yillik" : "Oylik"}
            </p>
            <a
              target="_blank"
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
              href="https://www.google.com/search?q=oliygohlar+uzbekistan&amp;sca_esv=593118487&amp;sxsrf=AM9HkKnwsZCNKau2lCYVXdoT1SRjAHg63A%3A1703264388243&amp;ei=hMCFZci2DsfMwPAPvrqk8AY&amp;udm=&amp;ved=0ahUKEwjIiMemwqODAxVHJhAIHT4dCW4Q4dUDCBA&amp;uact=5&amp;oq=oliygohlar+uzbekistan&amp;gs_lp=Egxnd3Mtd2l6LXNlcnAiFW9saXlnb2hsYXIgdXpiZWtpc3RhbjIIEAAYiQUYogQyCBAAGIAEGKIEMggQABiABBiiBEjgSVDBIljAQnAGeACQAQGYAc8BoAHdEqoBBjAuMTQuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAgoQLhhDGIAEGIoFwgIHEC4YgAQYDcICBhAuGAcYHsICCBAAGAcYHhgKwgIHEAAYgAQYDcICCBAuGAcYHhgKwgIJEAAYgAQYDRgKwgIKEAAYCBgHGB4YCsICFRAuGAcYHhiXBRjcBBjeBBjgBNgBAcICCBAuGAgYHhgNwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgKwgIXEC4YCBgeGA0YlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBkAYIugYGCAEQARgU&amp;sclient=gws-wiz-serp"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                4 yillik o’qish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitiruvchilarga diplom berish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Faqat chet el oliygohlarida mavjud
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[475px] h-64">
          <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              O’quv markazlar
            </h4>
            <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
              $100{annual ? "0" : ""}*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">
              {annual ? "Yillik" : "Oylik"}
            </p>
            <a
              target="_blank"
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
              href="https://www.google.com/search?q=it+o%27quv+markazlari+uzbekistan&amp;oq=it+o%27quv+markazlari+uz&amp;gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHjIKCAYQIRgWGB0YHtIBCDY0NDNqMGo3qAIAsAIA&amp;sourceid=chrome&amp;ie=UTF-8"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                9 oylik kurs
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitiruvchilarga sertifikat berish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Faqat qimmat IT kurslarda mavjud
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[475px] h-64">
          <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              Albison Academy
            </h4>
            <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
              $0*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">
              {annual ? "Yillik" : "Oylik"}
            </p>
            <a
              target="_blank"
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
              href="https://t.me/albisonbot"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                3 oylik kurs + amaliyot
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitiruvchilarga ish taklif qilish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Jamoa uchun bepul ingliz tili kurslari{" "}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitirgandan keyin ham qo’llab- quvvatlash{" "}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Global IT kompaniyalarga tayyorlash{" "}
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[475px] h-64">
          <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              Oliygohlar
            </h4>
            <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
              $300{annual ? "0" : ""}*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">
              {annual ? "Yillik" : "Oylik"}
            </p>
            <a
              target="_blank"
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
              href="https://www.google.com/search?q=oliygohlar+uzbekistan&amp;sca_esv=593118487&amp;sxsrf=AM9HkKnwsZCNKau2lCYVXdoT1SRjAHg63A%3A1703264388243&amp;ei=hMCFZci2DsfMwPAPvrqk8AY&amp;udm=&amp;ved=0ahUKEwjIiMemwqODAxVHJhAIHT4dCW4Q4dUDCBA&amp;uact=5&amp;oq=oliygohlar+uzbekistan&amp;gs_lp=Egxnd3Mtd2l6LXNlcnAiFW9saXlnb2hsYXIgdXpiZWtpc3RhbjIIEAAYiQUYogQyCBAAGIAEGKIEMggQABiABBiiBEjgSVDBIljAQnAGeACQAQGYAc8BoAHdEqoBBjAuMTQuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAgoQLhhDGIAEGIoFwgIHEC4YgAQYDcICBhAuGAcYHsICCBAAGAcYHhgKwgIHEAAYgAQYDcICCBAuGAcYHhgKwgIJEAAYgAQYDRgKwgIKEAAYCBgHGB4YCsICFRAuGAcYHhiXBRjcBBjeBBjgBNgBAcICCBAuGAgYHhgNwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgKwgIXEC4YCBgeGA0YlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBkAYIugYGCAEQARgU&amp;sclient=gws-wiz-serp"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                4 yillik o’qish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Bitiruvchilarga diplom berish
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                Faqat chet el oliygohlarida mavjud
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">-</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Carousel className={"max-lg:hidden"}>
        <CarouselContent className={"overflow-visible"}>
          <CarouselItem
            className={"basis-1/3 max-lg:basis-1/2 max-md:basis-full"}
          >
            <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
              <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
                O’quv markazlar
              </h4>
              <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
                $100{annual ? "0" : ""}*
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {annual ? "Yillik" : "Oylik"}
              </p>
              <a
                target="_blank"
                className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
                href="https://www.google.com/search?q=it+o%27quv+markazlari+uzbekistan&amp;oq=it+o%27quv+markazlari+uz&amp;gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHjIKCAYQIRgWGB0YHtIBCDY0NDNqMGo3qAIAsAIA&amp;sourceid=chrome&amp;ie=UTF-8"
              >
                Tanlov sizdan
              </a>
              <div className="overflow-scroll">
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  9 oylik kurs
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Bitiruvchilarga sertifikat berish
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Faqat qimmat IT kurslarda mavjud
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  -
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  -
                </h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem
            className={"basis-1/3 max-lg:basis-1/2 max-md:basis-full"}
          >
            <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
              <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
                Albison Academy
              </h4>
              <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
                $0*
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {annual ? "Yillik" : "Oylik"}
              </p>
              <a
                target="_blank"
                className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
                href="https://t.me/albisonbot"
              >
                Tanlov sizdan
              </a>
              <div className="overflow-scroll">
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  3 oylik kurs + amaliyot
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Bitiruvchilarga ish taklif qilish
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Jamoa uchun bepul ingliz tili kurslari{" "}
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Bitirgandan keyin ham qo’llab- quvvatlash{" "}
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Global IT kompaniyalarga tayyorlash{" "}
                </h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem
            className={"basis-1/3 max-lg:basis-1/2 max-md:basis-full"}
          >
            <div className="text-center border-2 border-blue-600 p-5 bg-navyblue-card rounded-3xl min-w-[275px] transition group overflow-scroll">
              <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
                Oliygohlar
              </h4>
              <h2 className="text-5xl sm:text-[65px] sm:leading-[1] font-extrabold mb-3 group-hover:text-white">
                $300{annual ? "0" : ""}*
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {annual ? "Yillik" : "Oylik"}
              </p>
              <a
                target="_blank"
                className="text-sm font-bold text-blue bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 rounded-full py-4 px-12 mb-6"
                href="https://www.google.com/search?q=oliygohlar+uzbekistan&amp;sca_esv=593118487&amp;sxsrf=AM9HkKnwsZCNKau2lCYVXdoT1SRjAHg63A%3A1703264388243&amp;ei=hMCFZci2DsfMwPAPvrqk8AY&amp;udm=&amp;ved=0ahUKEwjIiMemwqODAxVHJhAIHT4dCW4Q4dUDCBA&amp;uact=5&amp;oq=oliygohlar+uzbekistan&amp;gs_lp=Egxnd3Mtd2l6LXNlcnAiFW9saXlnb2hsYXIgdXpiZWtpc3RhbjIIEAAYiQUYogQyCBAAGIAEGKIEMggQABiABBiiBEjgSVDBIljAQnAGeACQAQGYAc8BoAHdEqoBBjAuMTQuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAgoQLhhDGIAEGIoFwgIHEC4YgAQYDcICBhAuGAcYHsICCBAAGAcYHhgKwgIHEAAYgAQYDcICCBAuGAcYHhgKwgIJEAAYgAQYDRgKwgIKEAAYCBgHGB4YCsICFRAuGAcYHhiXBRjcBBjeBBjgBNgBAcICCBAuGAgYHhgNwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgKwgIXEC4YCBgeGA0YlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBkAYIugYGCAEQARgU&amp;sclient=gws-wiz-serp"
              >
                Tanlov sizdan
              </a>
              <div className="overflow-scroll">
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  4 yillik o’qish
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Bitiruvchilarga diplom berish
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  Faqat chet el oliygohlarida mavjud
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  -
                </h3>
                <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                  -
                </h3>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Service;
