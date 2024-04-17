import React, { useEffect } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button";

const Header = () => {
  const nav = useNavigate("/");

  return (
    <>
      <nav className="navbar w-full fixed top-0 z-[99] bg-background shadow-xl">
        <div className="mx-auto max-w-7xl p-3 md:p-4 min-[1150px]:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-shrink-0 items-center border-right max-[1150px]:border-none ">
                <Link
                  className="text-2xl sm:text-4xl font-semibold text-black"
                  to="/"
                  onClick={() => {
                    scrollTo(0, 0);
                  }}
                >
                  Albison Academy
                </Link>
              </div>
              <div className="flex max-[1150px]:hidden items-center border-right">
                <div className="flex justify-end space-x-1">
                  <Link
                    className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      nav("/");
                      scrollTo(0, 901);
                    }}
                  >
                    Haqimizda
                  </Link>
                  <Link
                    className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      nav("/");
                      scrollTo(0, 5395);
                    }}
                  >
                    Kurslarimiz
                  </Link>
                  <Link
                    className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      nav("/");
                      scrollTo(0, 6501);
                    }}
                  >
                    KBS
                  </Link>
                  <Link
                    className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      nav("/");
                      scrollTo(0, 8851);
                    }}
                  >
                    Natijalarimiz
                  </Link>
                  <Link
                    to="honor"
                    className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                    onClick={() => {
                      scrollTo(0, 0);
                    }}
                  >
                    Sharaf kodeksi
                  </Link>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center max-[1150px]:hidden pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                <div className="hidden lg:block">
                  <a
                    href="tel:+998901122757"
                    type="button"
                    className=" text-xl bg-transparent py-3 px-6 lg:px-3 bg-navyblue-card hover:text-white"
                  >
                    +998 90 112 27 57
                  </a>
                </div>
              </div>
              <Sheet>
                <SheetTrigger className="block min-[1150px]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="block h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </SheetTrigger>
                <SheetContent side={"left"} className={"z-[999]"}>
                  <SheetHeader>
                    <SheetTitle className={"text-3xl"}>
                      <Link
                        to={"/"}
                        onClick={() => {
                          scrollTo(0, 0)();
                        }}
                      >
                        Albison Academy
                      </Link>
                    </SheetTitle>
                    <SheetDescription className={"pt-6"}>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link
                            className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                            onClick={(e) => {
                              e.preventDefault();
                              nav("/");
                              scrollTo(0, 601);
                            }}
                          >
                            Haqimizda
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                            onClick={(e) => {
                              e.preventDefault();
                              nav("/");
                              scrollTo(0, 5295);
                            }}
                          >
                            Kurslarimiz
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                            onClick={(e) => {
                              e.preventDefault();
                              nav("/");
                              scrollTo(0, 6301);
                            }}
                          >
                            KBS
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                            onClick={(e) => {
                              e.preventDefault();
                              nav("/");
                              scrollTo(0, 8451);
                            }}
                          >
                            Natijalarimiz
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="honor"
                            className="text-gray-600 hover:text-black px-2 py-4 rounded-md text-lg font-normal"
                            onClick={() => {
                              scrollTo(0, 0)();
                            }}
                          >
                            Sharaf kodeksi
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`${buttonVariants({
                              variant: "",
                            })} bg-navyblue`}
                            to={"tel:+998901122757"}
                          >
                            +998 90 112 27 57
                          </Link>
                        </li>
                      </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
