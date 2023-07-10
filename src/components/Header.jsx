import React from "react";
import { Link, NavLink } from "react-router-dom";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";
import SlideShow from "./Slide/SlideShow";

const menuLinks = [
  {
    url: "HOME",
    title: "HOME",
  },
  {
    url: "GIỚI THIỆU",
    title: "GIỚI THIỆU",
  },
  {
    url: "TUYỂN SINH",
    title: "TUYỂN SINH",
  },
  {
    url: "XÉT TUYỂN",
    title: "XÉT TUYỂN",
  },
  {
    url: "TIN TỨC – ĐÀO TẠO",
    title: "TIN TỨC – ĐÀO TẠO",
  },
  {
    url: "HỎI ĐÁP & TƯ VẤN",
    title: "HỎI ĐÁP & TƯ VẤN",
  },
  {
    url: "LIÊN HỆ",
    title: "LIÊN HỆ",
  },
];
const images = [
  "https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png",
  "https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png",
  "https://caodangbachkhoahanoi.edu.vn/wp-content/uploads/2023/06/slide-1.png",
];
const Header = () => {
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
            <span>
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
              <span className="absolute right-[37px] top-[6px] text-primary">
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
