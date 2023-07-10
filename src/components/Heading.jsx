import React from "react";
import { Link } from "react-router-dom";

const Heading = ({ heading = "CÔNG NGHỆ THÔNG TIN" }) => {
  return (
    <Link to="/" className="block mb-4 border-b border-b-primary mt-7 h-fit">
      <h2 className="px-4 w-fit py-[10px] lg:text-xl md:text-lg sm:text-[17px] bg-primary rounded-tr-[30px] text-grayf1 font-medium">
        {heading}
      </h2>
    </Link>
  );
};

export default Heading;
