import React from "react";
import hack from "../../../public/72.jpg";
import star from "../../../public/star2.svg";
const Merch = () => {
  return (
    <div
      id="about"
      className="w-full py-10 sm:py-20 relative bg-indigo-700  flex flex-col  justify-center items-center "
    >

      <div className="border-2  border-black z-10  relative shadow-3xl bg-white rounded-xl w-11/12 sm:w-9/12 ">
        <img
          className="absolute top-[-27px] left-[-40px]"
          width="80"
          height="80"
          src={star.src}
        />
        <div className="flex justify-center   flex-col md:flex-row-reverse  ">
          <div className="  md:w-6/12 bg-cover h-80 md:h-96 bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('https://cdn.discordapp.com/attachments/831790690395750400/1069181706982150284/t-shirt_mockup_red_bg.jpg')`,
          }}
          >

          </div>
          <div className=" md:w-7/12 md:h-96 flex flex-col justify-center p-7  py-10 ">
            <h2 className="text-base font-semibold leading-7 text-red-500">😉 Goodies sneakpeak</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight">Official T-shirts for HackMOL 4.0</p>
            <p className="mt-4 text-base leading-7 text-gray-500">Swags for winners of HackMOL 4.0 as well as for the volunteers. These t-shirts can be bought as well by anyone for a very reasonable price. We would start receiving orders in a short while. You will get a notification through a mail. </p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Merch;


