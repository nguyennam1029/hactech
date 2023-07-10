import React from "react";
import RightColumn from "../components/RightColumn";
import Heading from "../components/Heading";
import Pagination from "../components/Pagination";

const Contact = () => {
  return (
    <>
      <div className="lg:w-[1140px] m-auto w-full grid md:grid-cols-3 grid-cols-1 gap-7 lg:px-0 md:px-2 px-2">
        <div className="grid md:col-span-2 h-fit">
          <Heading heading="Đăng ký xét tuyển trực tuyến" />
          <div className="py-[30px] md:px-10 lg:px-[80px] px-5 bg-secondary text-grayf1 rounded-md">
            <h5 className="mb-6 text-lg font-bold text-center md:text-xl">
              ĐĂNG KÝ XÉT TUYỂN
            </h5>
            <form>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full h-10 px-4 rounded-3xl mb-7 bg-grayf1 text-[#7d7d7d]"
              />
              <input
                type="text"
                placeholder="Ngày / Tháng / Năm sinh"
                className="w-full h-10 px-4 rounded-3xl mb-7 bg-grayf1 text-[#7d7d7d]"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full h-10 px-4 rounded-3xl mb-7 bg-grayf1 text-[#7d7d7d]"
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                className="w-full h-10 px-4 rounded-3xl mb-7 bg-grayf1 text-[#7d7d7d]"
              />

              <div className="w-full h-10 px-4 rounded-3xl mb-7 bg-grayf1 text-[#7d7d7d] overflow-hidden">
                <select
                  name="Chọn ngành đăng kí"
                  id="Chọn ngành đăng kí"
                  className="w-full h-full outline-none bg-grayf1"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div
                type="text"
                placeholder="Địa chỉ"
                className="w-full h-10 px-4 rounded-3xl mb-4 text-[#212529] font-semibold bg-[#f2bb22] flex items-center justify-center gap-2"
              >
                ĐĂNG KÝ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </div>
            </form>
          </div>
        </div>
        <RightColumn />
      </div>
    </>
  );
};

export default Contact;
