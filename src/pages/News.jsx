import React from "react";
import RightColumn from "../components/RightColumn";
import Heading from "../components/Heading";
import Pagination from "../components/Pagination";

const News = () => {
  return (
    <>
      <div className="lg:w-[1140px] m-auto w-full grid md:grid-cols-3 grid-cols-1 gap-7 lg:px-0 md:px-2 px-2">
        <div className="grid md:col-span-2 h-fit">
          <Heading heading="TIN TỨC – ĐÀO TẠO" />
          {Array(2)
            .fill(0)
            .map(() => (
              <>
                <div className="flex items-start gap-3 mb-2 md:mb-4">
                  <img
                    src="dl4.jpg"
                    className="md:object-cover object-contain lg:w-full md:w-[200px] w-[150px] rounded-sm"
                  />
                  <div>
                    <h3 className="text-base md:text-lg text-[#252525] font-semibold line-clamp-2 lg:line-clamp-3">
                      Vai trò của công nghệ thông tin trong dạy học
                    </h3>
                    <span className="my-1 text-sm md:text-base line-clamp-2 lg:line-clamp-5">
                      ông nghệ thông tin được ứng dụng trong mọi lĩnh vực của
                      đời sống xã hội như: y tế, quản lý, giải trí,… và đặc biệt
                      là ngành giáo dục. Có thể thấy, áp dụng công nghệ vào giáo
                      dục giúp cho quá trình dạy học diễn ra nhanh chóng, dễ
                      dàng và tiện lợi hơn. Vậy, vai trò của công nghệ thông tin
                      trong dạy …
                    </span>
                    <p className="flex items-center justify-end gap-2 text-sm font-medium text-right text-primary">
                      Xem thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-2 md:mb-4">
                  <img
                    src="DC__20.jpg"
                    className="md:object-cover object-contain lg:w-full md:w-[200px] w-[150px] rounded-sm"
                  />
                  <div>
                    <h3 className="text-base md:text-lg text-[#252525] font-semibold line-clamp-2 lg:line-clamp-3">
                      Thông tin tuyển sinh ngành ngôn ngữ Hàn Quốc, Trung Quốc
                    </h3>
                    <span className="my-1 text-sm md:text-base line-clamp-2 lg:line-clamp-5">
                      Với mục tiêu trở thành trường học hàng đầu về chất lượng
                      đào tạo, đáp ứng nhu cầu của thị trường lao động trong và
                      ngoài nước. Nhà trường xây dựng chương trình đào tạo 70%
                      thực hành tại trường và doanh nghiệp, đảm bảo chuẩn đầu ra
                      doanh nghiệp. Vì vậy nhà trường được rất nhiều phụ huynh
                      và học sinh
                    </span>
                    <p className="flex items-center justify-end gap-2 text-sm font-medium text-right text-primary">
                      Xem thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-2 md:mb-4">
                  <img
                    src="cnoto2.jpg"
                    className="md:object-cover object-contain lg:w-[300px] md:w-[200px] w-[150px] rounded-sm"
                  />
                  <div>
                    <h3 className="text-base md:text-lg text-[#252525] font-semibold line-clamp-2 lg:line-clamp-3">
                      Tuyển sinh ngành điện công nghiệp năm 2023
                    </h3>
                    <span className="my-1 text-sm md:text-base line-clamp-2 lg:line-clamp-5">
                      Ngành công nghệ thông tin (CNTT) đã được Đảng và Chính phủ
                      xác định là hạ tầng của hạ tầng. Từ năm 2020, Việt Nam cần
                      đến một triệu lao động ngành CNTT trong khi năng lực của
                      hệ thống giáo dục quốc dân chưa đáp ứng đủ về lượng và
                      chất như yêu cầu của các nhà tuyển dụng. Hệ đào tạo, thời
                      gian đào …
                    </span>
                    <p className="flex items-center justify-end gap-2 text-sm font-medium text-right text-primary">
                      Xem thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </>
            ))}
          <Pagination />
        </div>
        <RightColumn />
      </div>
    </>
  );
};

export default News;
