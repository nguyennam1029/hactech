import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";

const menuLinks = [
  {
    url: "/",
    title: "HOME",
  },
  {
    url: "gioi-thieu",
    title: "GIỚI THIỆU",
  },
  {
    url: "tuyen-sinh",
    title: "TUYỂN SINH",
  },
  {
    url: "xet-tuyen",
    title: "XÉT TUYỂN",
  },
  {
    url: "tin-tuc",
    title: "TIN TỨC – ĐÀO TẠO",
  },
  {
    url: "tu-van",
    title: "HỎI ĐÁP & TƯ VẤN",
  },
  {
    url: "lien-he",
    title: "LIÊN HỆ",
  },
];
const images = [
  "https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png",
  "https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png",
  "https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png",
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* MENU TOP  */}
      <div className="lg:w-[1140px] w-full m-auto grid md:grid-cols-4 grid-cols-1 py-4 sm:px-2 ">
        <Link to="/" className="m-auto md:m-0">
          <img
            src="logo.jpg"
            className="lg:w-[106px] lg:h-[106px] w-[90px] h-[90px]"
          />
        </Link>
        <div className="hidden col-span-2 text-center md:grid-cols-2 md:block text-secondary">
          <h2 className="text-base font-bold uppercase lg:text-lg ">
            BỘ LAO ĐỘNG THƯƠNG BINH VÀ XÃ HỘI
          </h2>
          <h1 className="text-lg lg:text-2xl font-bold uppercase text-[#f2bb22] my-1">
            TUYỂN SINH CAO ĐẲNG BÁCH KHOA
          </h1>
          <div className="flex items-center justify-evenly sm:text-sm">
            <p className="flex items-center gap-1">
              <PhoneIcon />
              Hotline: 0384236899
            </p>
            -
            <p className="flex items-center gap-1">
              <EmailIcon />
              Email: ts.caodangbachkhoa@gmail.com
            </p>
          </div>
        </div>
        <div className="items-center justify-end hidden gap-1 md:flex">
          <Link to="/">
            <img
              src="./facebook.png"
              className="lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]"
            />
          </Link>
          <Link to="/">
            <img
              src="./twitter.png"
              className="lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]"
            />
          </Link>
          <Link to="/">
            <img
              src="./google-plus.png"
              className="lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]"
            />
          </Link>

          <Link to="/">
            <img
              src="./youtube.png"
              className="lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]"
            />
          </Link>
        </div>
      </div>
      {/* MENU  */}
      <div className="w-full bg-[#0e3e27] md:bg-primary border-b-4 border-b-[#f2bb22]">
        <div className="lg:w-[1140px] w-full m-auto h-fit">
          <div className="flex items-center justify-between lg:hidden md:bg-[#337ab7] bg-primary py-3 px-3 md:px-3 font-bold text-grayf1">
            <p>MENU</p>
            <span onClick={toggleNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center justify-end ld:justify-between">
            <ul className="items-center hidden lg:flex">
              {menuLinks.map((item) => (
                <NavLink
                  to={item.url}
                  className="px-3 text-grayf1 py-3 text-sm uppercase hover:bg-[#f2bb22] h-full block"
                >
                  {item.title}
                </NavLink>
              ))}
            </ul>
            <div className="md:w-[254px] w-full relative mx-4 md:mx-0 my-1 md:mx-0">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full px-4 outline-none rounded-2xl h-9"
              />
              <span className="absolute md:right-[18px] right-9 top-[6px] text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <ul
        className={`
             
             lg:items-center lg:w-auto fixed top-0 left-0 h-full bg-gray-800 w-4/5 z-40  transform transition-transform duration-300 ease-in-out  bg-[#000000] text-grayf1 font-bold py-5 `}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-110%)",
        }}
      >
        <h3 className="text-xl font-medium text-center uppercase my-7">menu</h3>
        <p onClick={toggleNavbar} className="absolute top-0 right-0 px-3 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </p>

        {menuLinks.map((item) => (
          <li
            className="py-4 px-3 border-y border-t-[#4b4e50] border-b-[#161b1f] bg-[#262d33] md:text-base text-sm font-thin"
            key={item.title}
          >
            <NavLink to={item.url} className="text-white hover:text-gray-300">
              {item.title}
            </NavLink>

            {item.subMenu && (
              <div className="w-full px-2 py-2 mt-2 rounded-md bg-grayf6 text-grayf1">
                <div className="flex flex-col">
                  {item.subMenu &&
                    item.subMenu.map((item) => (
                      <NavLink
                        to="/"
                        key={item.name}
                        className="py-2 ml-1 text-sm uppercase border-b border-b-gray80"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {isOpen && (
        <div
          onClick={toggleNavbar}
          className="fixed top-0 right-0 left-0 bottom-0 bg-[#000] opacity-50"
        ></div>
      )}
      {/* SLIDE  */}
      {/* <SlideShow>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div className="w-full px-4 bg-cover bg-center bg-no-repeat bg-url('https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png')"></div>
          ))}
      </SlideShow> */}
    </div>
  );
};

export default Header;
