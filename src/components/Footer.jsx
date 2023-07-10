import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-2 py-8 mt-10 bg-secondary text-grayf1">
      <div className="lg:w-[1140px] m-auto w-full md:px-0 px-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-7">
        <div>
          <h5 className="text-xl font-medium">THÔNG TIN LIÊN HỆ</h5>
          <p className="w-10 mt-3 mb-5 border-b-2 border-b-grayf1"></p>
          <h6 className="font-bold">TUYỂN SINH CAO ĐẲNG BÁCH KHOA</h6>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            0964094899 / 0384236899{" "}
          </p>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
              />
            </svg>
            ts.caodangbachkhoa@gmail.com
          </p>
          <Link to="/" className="flex items-center gap-2">
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
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
            https://caodangbachkhoahanoi.edu.vn
          </Link>
        </div>

        <div>
          <h5 className="text-xl font-medium">TUYỂN SINH</h5>
          <p className="w-10 mt-3 mb-5 border-b-2 border-b-grayf1"></p>
          {Array(3)
            .fill(0)
            .map(() => (
              <Link to="/" className="flex items-center gap-2">
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
                    d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                  />
                </svg>
                Công Nghệ Thông Tin
              </Link>
            ))}
        </div>

        <div>
          <h5 className="text-xl font-medium">FANPAGE FACEBOOK</h5>
          <p className="w-10 mt-3 mb-5 border-b-2 border-b-grayf1"></p>

          <div className="relative">
            <div className="h-[130px] relative overflow-hidden">
              <img src="contact.png" className="object-cover w-full h-full" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#040404] opacity-50"></div>
              <div className="absolute gap-1 top-2 right-2 left-2 ">
                <div className="flex items-center">
                  <img src="logo.jpg" className="w-[53px] h-[53px]" />
                  <div className="text-[#fff]">
                    <h4 className="text-lg font-medium truncat line-clamp-1 overflow-ellipsis">
                      Trường Cao Đẳng Bách Khoa Việt Nam
                    </h4>
                  </div>
                </div>
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
        </div>

        <div>
          <h5 className="text-xl font-medium">BẢN ĐỒ</h5>
          <p className="w-10 mt-3 mb-5 border-b-2 border-b-grayf1"></p>
          <img src="Google-Map-US_10.png " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
