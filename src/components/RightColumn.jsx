import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import NextIcon from "../icons/NextIcon";
const Specializations = [
  {
    icon: <NextIcon />,
    title: "CÔNG NGHỆ THÔNG TIN",
  },
  {
    icon: <NextIcon />,
    title: "CÔNG NGHỆ Ô TÔ",
  },
  {
    icon: <NextIcon />,
    title: "ĐIỆN CÔNG NGHIỆP",
  },
];
const RightColumn = () => {
  return (
    <div>
      <div>
        <Heading heading="TUYỂN SINH"></Heading>
        <div>
          {Specializations.map((item) => (
            <Link className="flex items-center gap-2 px-2 py-2 mb-1 text-sm bg-primary text-grayf1">
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <Heading heading="HOẠT ĐỘNG SINH VIÊN"></Heading>
        <div>
          <iframe
            width="100%"
            height="196"
            src="https://www.youtube.com/embed/3VS901EjhXU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Heading heading="TIN MỚI"></Heading>
        <div className="">
          <Link
            to="/"
            className="grid grid-cols-2 gap-2 mb-2 lg:grid-cols-2 md:grid-cols-1"
          >
            <div className="w-fit">
              <img src="dl.jpg" />
            </div>
            <h3 className="text-[#212529] font-bold lg:-ml-[18px] md:ml-0 -ml-[20px]">
              Vai trò của công nghệ thông tin trong dạy học
            </h3>
          </Link>
          <Link
            to="/"
            className="grid grid-cols-2 gap-2 mb-2 lg:grid-cols-2 md:grid-cols-1"
          >
            <div className="w-fit">
              <img src="hoc-cnsstt.jpg" />
            </div>
            <h3 className="text-[#212529] font-bold lg:-ml-[18px] md:ml-0 -ml-[20px]">
              Sinh viên CNOTO đi thực tế tại công ty VAP
            </h3>
          </Link>
          <Link
            to="/"
            className="grid grid-cols-2 gap-2 mb-2 lg:grid-cols-2 md:grid-cols-1"
          >
            <div className="w-fit">
              <img src="caossthang.jpg" />
            </div>
            <h3 className="text-[#212529] font-bold lg:-ml-[18px] md:ml-0 -ml-[20px]">
              Sinh viên CNTT năm 2 đi thực tế tại công ty COMPAL
            </h3>
          </Link>

          <Link
            to="/"
            className="grid grid-cols-2 gap-2 mb-2 lg:grid-cols-2 md:grid-cols-1"
          >
            <div className="w-fit">
              <img src="dl.jpg" />
            </div>
            <h3 className="text-[#212529] font-bold lg:-ml-[18px] md:ml-0 -ml-[20px]">
              Lễ tập trung sinh viên cao đẳng Bách Khoa năm học 2022
            </h3>
          </Link>
        </div>
        <Heading heading="THEO DÕI CHÚNG TÔI"></Heading>
        <div>
          <div className="h-[72px] relative overflow-hidden">
            <img src="contact.png" className="object-cover w-full h-full" />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#040404] opacity-3"></div>
            <div className="absolute flex items-center gap-1 top-2 right-2 left-2 ">
              <img src="logo.jpg" className="w-[53px] h-[53px]" />
              <div className="text-[#fff]">
                <h4 className="text-lg font-medium truncat line-clamp-1 overflow-ellipsis">
                  Trường Cao Đẳng Bách Khoa Việt Nam
                </h4>
                <div className="flex items-center">
                  <div className="flex gap-1 px-2 py-1 item-center bg-grayf1 text-secondary">
                    <img src="facebook.png" className="w-[12px] h-[12px]" />
                    <span className="text-xs">Theo dõi trang</span>
                  </div>
                  <span className="text-xs">2,5k người theo dõi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2 mt-2 bg-[#f5f6f7] h-[400px] overflow-y-scroll">
            {Array(5)
              .fill(0)
              .map(() => (
                <div className=" bg-[#fff] px-2 py-2 rounded-md mb-2">
                  <div className="flex gap-2">
                    <img src="logo.jpg" className="w-[40px] h-[40px]" />
                    <h4 className="font-bold">
                      Trường Cao Đẳng Bách Khoa Việt Nam
                    </h4>
                    <img src="facebook.png" className="w-[24px] h-[24px]" />
                  </div>

                  <p className="my-3 text-sm">
                    Những tân sinh viên nào yêu bóng đá, thả like để cô biết 😊
                    Vào đội bóng Nam của Nhà Trường; Liên hệ cô Hồng Thuý:
                    0946725846
                  </p>
                  <img
                    src="anh-ao-cu.jpg"
                    className="w-full h-[150px] object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
