import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-full flex-col bg-new-1">
      <div className="sticky h-[5rem]">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between text-white md:mt-1.5">
          <img
            src="https://aajwzuuqresmowecstsa.supabase.co/storage/v1/object/public/avatars/arunlogo.png"
            alt="logo"
            className="ml-2 mt-3 h-14 md:mt-0 md:h-16"
          />
          <ul className="hidden md:flex md:h-auto md:w-2/6 md:items-center md:justify-evenly md:font-inter md:font-medium md:tracking-normal">
            <li className="transition-all duration-700 ease-in-out hover:text-third-new active:text-cyan-500">
              <Link to="/about">About</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out hover:text-third-new active:text-cyan-500">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out hover:text-third-new active:text-cyan-500">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1o0Lxy8i0dvvYvHzujDCf6w5uXDhbRCIQ/view?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li className="transition-all duration-700 ease-in-out hover:text-third-new active:text-cyan-500">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <div className="mr-4 mt-4 text-4xl md:hidden">
            <ion-icon
              onClick={() => setOpen(!open)}
              name={!open ? "menu" : "close"}
            ></ion-icon>
          </div>
          <ul
            className={`z-100 bg-primary-new absolute w-full bg-opacity-45 text-center md:hidden ${open ? "top-[5rem]" : "top-[-450px]"} flex flex-col gap-y-6 font-inter transition-all duration-700 ease-in-out`}
          >
            <li className="border-b border-t border-gray-50 border-opacity-25 pb-5 pt-4">
              <Link to="/about">About</Link>
            </li>
            <li className="border-b border-gray-50 border-opacity-25 pb-5">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="border-b border-gray-50 border-opacity-25 pb-5">
              <a
                href="https://drive.google.com/file/d/1o0Lxy8i0dvvYvHzujDCf6w5uXDhbRCIQ/view?usp=sharing"
                target={"_blank"}
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="border-b border-gray-50 border-opacity-25 pb-5">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center text-white">
        <div className="flex h-5/6 w-auto flex-col items-start justify-center font-inter md:w-7/12 md:gap-y-1">
          <span className="animate-fadeInLeft font-semibold tracking-tight transition-all duration-700 ease-in-out md:text-xl md:font-semibold md:tracking-normal md:hover:ml-2 md:hover:scale-x-110">
            ARUN DONTHULA
          </span>
          <h1 className="text-fourth-color animate-fadeUpBottom font-inter text-3xl font-bolder transition-all duration-700 ease-in-out hover:text-third-new md:text-7xl md:font-bold md:tracking-tighter md:hover:ml-8 md:hover:scale-x-110">
            Software Engineer and
          </h1>
          <h1 className="text-fourth-color animate-fadeInBottom font-inter text-3xl font-bolder tracking-tighter transition-all duration-700 ease-in-out hover:text-third-new md:text-7xl md:font-bold md:tracking-tighter md:hover:ml-8 md:hover:scale-x-110">
            Self-Taught Front End Developer
          </h1>
          <span className="text-l text-fourth-color animate-fadeInBottom font-inter font-bold transition-all duration-700 ease-in-out md:text-xl md:font-semibold md:tracking-normal md:hover:ml-2 md:hover:scale-x-110">
            It&apos;s all about Software Development
          </span>
        </div>
        <div className="flex h-1/6 w-full items-center justify-center">
          <span className="flex animate-bounce items-center justify-center rounded-full bg-gray-300 p-1 text-2xl text-third-new hover:bg-third-new hover:text-white md:text-3xl">
            <ion-icon name="arrow-down-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
