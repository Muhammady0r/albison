import React from "react";
import { Link } from "react-router-dom";

const Joinus = () => {
  return (
    <div className="bg-joinus my-32 max-sm:relative max-sm:-bottom-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            SHOSHILING
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            Dasturchilar bilan dasturlashni <br /> oson o'rganing.
          </h2>
          <p className="text-lightblack text-base font-normal">
            Dasturlashni o`rganib yuqori daromadli kasbga ega bo`lmoqchisiz 😎{" "}
            <br /> Lekin uyqusiz tunlar va tinimsiz mehnatga tayyormisiz? 🤔
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-center bg-transparent">
            <div className="sm:mr-3 mt-4">
              <Link
                target="_blank"
                className="md:text-xl py-5 lg:px-28 bg-blue-600 hover:bg-blue-500 w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue flex justify-center items-center max-lg:px-[92px]"
                href="https://t.me/albisonbot"
              >
                Tayyorman!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
