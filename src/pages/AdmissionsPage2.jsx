import React from "react";
import RightColumn from "../components/RightColumn";
import Heading from "../components/Heading";

const AdmissionsPage2 = () => {
  return (
    <>
      <div className="lg:w-[1140px] m-auto w-full grid md:grid-cols-3 grid-cols-1 gap-7 lg:px-0 md:px-2 px-2">
        <div className="grid md:col-span-2 h-fit">
          <Heading heading="XÉT TUYỂN" />
          <div className="text-center ">Xet tuyển</div>
        </div>
        <RightColumn />
      </div>
    </>
  );
};

export default AdmissionsPage2;
