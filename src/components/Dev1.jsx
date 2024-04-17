import React from "react";

const Dev1 = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 min-[1150px]:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          <div>
            <img
              alt="man-icon"
              width="416"
              height="530"
              className="mx-auto md:mx-0 rounded-3xl"
              src="https://www.albison.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fceo.8d8dafd4.png&amp;w=1080&amp;q=75"
            />
          </div>
          <div className="relative">
            <img
              alt="comma-image"
              width="200"
              height="106"
              className="absolute comma-pos hidden min-[1150px]:block"
              src="https://www.albison.uz/_next/static/media/comma.0f3177ce.svg"
            />
            <h2 className="text-4xl min-[1150px]:text-[65px] min-[1150px]:leading-[1] pt-4 font-bold sm:leading-tight mt-5 text-center min-[1150px]:text-start">
              IT hamjamiyat yorug' kelajagimiz poydevori
            </h2>
            <p className="font-medium text-lightblack text-2xl mt-5 text-center min-[1150px]:text-start">
              Kuchli jamoamiz bo'lmaganida bunaqa qisqa vaqt ichida yirik
              yutuqlarga erisha olmagan bo'lardik. Har bir bitiruvchimiz o'z
              bilim va tajribalari bilan har doim beminnat ulashishga tayyorlar.
            </p>
            <p className="text-2xl font-semibold mt-12 min-[1150px]:ml-32 preline text-center min-[1150px]:text-start">
              Nurislom Razzoqov, CEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev1;
