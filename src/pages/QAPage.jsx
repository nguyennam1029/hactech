import React from "react";
import RightColumn from "../components/RightColumn";
import Heading from "../components/Heading";

const QAPage = () => {
  return (
    <>
      <div className="lg:w-[1140px] m-auto w-full grid md:grid-cols-3 grid-cols-1 gap-7 lg:px-0 md:px-2 px-2">
        <div className="grid md:col-span-2 h-fit">
          <Heading heading="HỎI ĐÁP & TƯ VẤN" />
          <div className="text-center ">HỎI ĐÁP & TƯ VẤN</div>
        </div>
        <RightColumn />
      </div>
    </>
  );
};

export default QAPage;
