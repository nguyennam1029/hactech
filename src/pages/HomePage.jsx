import React from "react";
import WrapGrid from "../components/WrapGrid";
import Heading from "../components/Heading";
import RightColumn from "../components/RightColumn";
import Slide from "../components/Slide";
const HomePage = () => {
  return (
    <>
      <div className="relative w-full aspect-w-2 aspect-h-1">
        <Slide />
      </div>
      <div className="lg:w-[1140px] m-auto w-full grid md:grid-cols-3 grid-cols-1 gap-7 md:px-0 px-2">
        <div className="grid md:col-span-2 h-fit">
          <WrapGrid
            urlL2="flashss.png"
            urlR2="zdsdsd.jpg "
            title2="Giải đáp thắc mắc: Công nghệ thông tin làm nghề gì? Giải đáp thắc mắc: Công nghệ thông tin làm nghề"
          />
          <WrapGrid
            heading="CÔNG NGHỆ Ô TÔ"
            urlHot="flash.png"
            title="TRƯỜNG CAO ĐẲNG BÁCH KHOA TẠI HÀ NỘI THÔNG BÁO TUYỂN"
            des="Với mục tiêu trở thành trường học hàng đầu về chất lượng đào tạo, đáp ứng nh"
            urlL="dien-con.jpg"
            urlL2="hahaha.jpg"
            urlR2="nganh-cong-nghe-ssc.jpg"
          />
          <WrapGrid
            heading="NGÔN NGỮ TRUNG QUỐC"
            urlHot="china.jpg"
            urlR2="anh-ao-cu-nhan-chup-1-nguoi-300x200.jpg"
            urlL2="edew-300x200.jpg"
            title="Cơ hội làm việc của sinh viên ngôn ngữ Trung sau khi ra trường"
            des="Học tiếng Trung có lợi ích gì? Việc chọn học thêm một ngôn ngữ thứ ba, lại còn là"
          />

          <WrapGrid
            heading="NGÔN NGỮ HÀN QUỐC"
            urlHot="nganh-ngon-ngu-tieng-han-quoc-trang-tuyen-sinh-300x200.jpg"
            urlL2="nganh-ngon-ngu-han-quoc-4-300x200.jpg"
            urlR2="nganh-cong-nghe-ssc.jpg"
            title="Cơ hội làm việc của sinh viên ngôn ngữ Trung sau khi ra trường"
            des="Học tiếng Trung có lợi ích gì? Việc chọn học thêm một ngôn ngữ thứ ba, lại còn là"
          />
          <WrapGrid
            heading="TIN TỨC - ĐÀO TẠO"
            urlHot="dl4-300x200.jpg"
            title="TRƯỜNG CAO ĐẲNG BÁCH KHOA TẠI HÀ NỘI THÔNG BÁO TUYỂN"
            des="Với mục tiêu trở thành trường học hàng đầu về chất lượng đào tạo, đáp ứng nh"
            urlL="dien-con.jpg"
            urlL2="hahaha.jpg"
            urlR2="nganh-cong-nghe-ssc.jpg"
          />
        </div>

        {/* RIGHT  */}
        <RightColumn />
      </div>
      <div className="lg:w-[1140px] m-auto w-full md:px-0 px-2">
        <div>
          <Heading heading="HOẠT ĐỘNG SINH VIÊN" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
            {Array(2)
              .fill(0)
              .map(() => (
                <>
                  <div className="relative last:hidden md:last:block">
                    <img
                      src="caothang.jpg"
                      className="object-cover w-full h-full"
                    />
                    <h4 className="absolute left-0 right-0 text-grayf1 py-2 uppercase bottom-0 flex gap-1 items-center justify-center bg-[#000000] opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Khoa công nghệ thông tin
                    </h4>
                  </div>
                  <div className="relative last:hidden md:last:block">
                    <img
                      src="20170106141817-3_841774935798.jpg"
                      className="object-cover w-full h-full"
                    />
                    <h4 className="absolute left-0 right-0 text-grayf1 py-2 uppercase bottom-0 flex gap-1 items-center justify-center bg-[#000000] opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Khoa công nghệ thông tin
                    </h4>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div>
          <Heading heading="VIDEO" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/tMCl2tkclwQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="">
              <iframe
                width="100%"
                height="244"
                src="https://www.youtube.com/embed/GQ-toR8F7rc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <Heading heading="HỎI ĐÁP VÀ TƯ VẤN" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {Array(2)
              .fill(0)
              .map(() => (
                <>
                  <div className="flex items-center  rounded-md border border-[#ccc] bg-[#f7f7f7]">
                    <h4 className="px-4 py-[18px] font-bold text-[#252525] text-lg ">
                      Câu hỏi: Em đăng ký học Công nghệ thông tin thì sẽ học cụ
                      thể những gì ? Học phí là bao nhiêu ?
                    </h4>
                    <p className="flex items-center justify-center h-full px-4 text-2xl font-bold bg-primary text-grayf1">
                      +
                    </p>
                  </div>
                  <div className="flex items-center  rounded-md border border-[#ccc] bg-[#f7f7f7]">
                    <h4 className="px-4 py-[18px] font-bold text-[#252525] text-lg ">
                      Câu hỏi: Em đăng ký ngành Công nghệ ô tô, trong quá trình
                      học có được thực hành, thực tập không ạ?
                    </h4>
                    <p className="flex items-center justify-center h-full px-4 text-2xl font-bold bg-primary text-grayf1">
                      +
                    </p>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div>
          <Heading heading="HỎI ĐÁP VÀ TƯ VẤN" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:py-[30px] md:px-[50px] py-4 px-5 bg-secondary text-grayf1">
              <h5 className="mb-4 text-xl font-bold text-center">
                ĐĂNG KÝ XÉT TUYỂN
              </h5>
              <form>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full h-10 px-4 rounded-3xl mb-4 bg-grayf1 text-[#7d7d7d]"
                />
                <input
                  type="text"
                  placeholder="Ngày / Tháng / Năm sinh"
                  className="w-full h-10 px-4 rounded-3xl mb-4 bg-grayf1 text-[#7d7d7d]"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full h-10 px-4 rounded-3xl mb-4 bg-grayf1 text-[#7d7d7d]"
                />
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  className="w-full h-10 px-4 rounded-3xl mb-4 bg-grayf1 text-[#7d7d7d]"
                />

                <div className="w-full h-10 px-4 rounded-3xl mb-4 bg-grayf1 text-[#7d7d7d] overflow-hidden">
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
            <div>
              <img src="subscribe-bg.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
