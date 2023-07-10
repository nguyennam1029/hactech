import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const WrapGrid = ({
  heading = "CÔNG NGHỆ THÔNG TIN",
  urlL = "./8-muc-luong.jpg",
  urlHot = "cntt.jpg",
  urlR = "./cntt2.jpg",
  title = "Triển vọng và nhu cầu tuyển dụng của ngành công nghệ thông tin",
  des = " Ở thời điểm hiện tại, ngành công nghệ thông tin vẫn đang trên đà biến đổi và",
}) => {
  return (
    <>
      <Heading heading={heading}></Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="grid col-span-2 h-fit">
          <Link to="">
            <img src={urlHot} className="w-full" />
            <h3 className="text-lg text-[#252525] my-3 font-semibold">
              {title}
            </h3>
            <span>{des}</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-4">
          {Array(2)
            .fill(0)
            .map(() => (
              <>
                <Link to="/" className="relative block h-[169px]">
                  <img src={urlL} className="h-full" />
                  <p className="px-2 py-[4px] absolute left-0 right-0 bottom-0 overflow-hidden text-sm bg-primary opacity-80 text-grayf1 truncat line-clamp-2">
                    Học lập trình ra làm gì? Cơ hội nghề nghiệp Học lập trình ra
                    làm gì? Cơ hội nghề nghiệp
                  </p>
                </Link>
                <Link to="/" className="relative block h-[169px]">
                  <img src={urlR} className="h-full" />
                  <p className="px-2 py-[4px] absolute left-0 right-0 bottom-0 overflow-hidden text-sm bg-primary opacity-80 text-grayf1 truncat line-clamp-2">
                    Giải đáp thắc mắc: Công nghệ thông tin làm nghề
                  </p>
                </Link>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default WrapGrid;
