import React from "react";
import p1 from "../../../public/prices/price1.svg";
import p2 from "../../../public/prices/price2.svg";
import p3 from "../../../public/prices/price3.svg";
import coin from "../../../public/prices/coinbox.svg";
import grid from "../../../public/grid.svg";

function TrackAndPrices() {
  const [state, setState] = React.useState(0);
  const trackArray = [
    {
      title: "Track 1 - Freshers",
      description:
        " Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.",
    },
    {
      title: "Track 2 - Beginner",
      description:
        " Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.",
    },
    {
      title: "Track-3 Main",
      description:
        " Create and customize your storefront with our all-in-one platform or choose to use your personal site instead. With Zapier, you can seamlessly connect your Gumroad account to thousands of apps in your current stack.",
    },
  ];

  return (
    <div
      id="prizes"
      className="py-10 md:py-36  bg-[#D0A4FF] overflow-hidden   relative FF7B54 mt-0 "
    >
    <div className="absolute top-0 right-0 " >
    <img src={grid.src} className=" block w-full h-full z-0"></img>
    <img src={grid.src} className=" block w-full h-full z-0"></img>

  </div>
      
      <img
        src={coin.src}
        className="absolute top-0 -right-1 w-16 sm:w-24  z-0"
      ></img>
      <h1 className="text-center relative z-10 text-3xl md:text-5xl font-bold mb-8">
        Prizes and Rewards
      </h1>
      <div className="flex relative z-10 w-full flex-wrap justify-center items-center gap-5 ">
        <div className="border-2 border-black bg-[#90A8ED]  w-11/12 md:w-[380px] flex flex-col items-center px-5 py-10  shadow-3xl rounded-xl font-bold  ">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-3xl">
              1<span className="text-lg">st</span>
            </h1>
            <img src={p1.src}></img>
          </div>

          <div className=" flex flex-col items-end mb-10">
            <h2 className="text-5xl  font-bold">
              <span className="text-lg">₹</span> 30k
            </h2>
            <div className="text-lg leading-3 font-bold">cash</div>
          </div>
          <div className=" self-start mx-0">
            <p className=" font-normal text-xl">
              • Goodies Box (2000 INR of worth)
            </p>
            <p className=" font-normal text-xl">• Geeks for Geeks 800/- INR</p>
            <p className=" font-normal text-xl">• Coupons on all courses</p>

            <p className=" font-normal text-xl"> • Echo-ar free premium</p>
            <p className=" font-normal text-xl">• tier services</p>
            <p className=" font-normal text-xl">
              • Online Mock Interviews from{" "}
            </p>
            <p className=" font-normal text-xl">• Interview Buddy </p>
          </div>
        </div>
        <div className="border-2 border-black bg-[#90A8ED]  w-11/12 md:w-[380px] flex flex-col items-center px-5 py-10  shadow-3xl rounded-xl font-bold  ">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-3xl">
              2<span className="text-lg">nd</span>
            </h1>
            <img src={p2.src}></img>
          </div>

          <div className=" flex flex-col items-end mb-10">
            <h2 className="text-5xl  font-bold">
              <span className="text-lg">₹</span> 20k
            </h2>
            <div className="text-lg leading-3 font-bold ">cash</div>
          </div>
          <div className=" self-start mx-0">
            <p className=" font-normal text-xl">
              • Goodies Box (2000 INR of worth)
            </p>
            <p className=" font-normal text-xl">• Geeks for Geeks 800/- INR</p>
            <p className=" font-normal text-xl">• Coupons on all courses</p>

            <p className=" font-normal text-xl"> • Echo-ar free premium</p>
            <p className=" font-normal text-xl">• tier services</p>
            <p className=" font-normal text-xl">
              • Online Mock Interviews from{" "}
            </p>
            <p className=" font-normal text-xl">• Interview Buddy </p>
          </div>
        </div>
        <div className="border-2 border-black bg-[#90A8ED]  w-11/12 md:w-[380px] flex flex-col items-center px-5 py-10  shadow-3xl rounded-xl font-bold  ">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-3xl">
              3<span className="text-lg">rd</span>
            </h1>
            <img src={p3.src}></img>
          </div>

          <div className=" flex flex-col items-end mb-10">
            <h2 className="text-5xl  font-bold">
              <span className="text-lg">₹</span> 10k
            </h2>
            <div className="text-lg leading-3 font-bold ">cash</div>
          </div>
          <div className=" self-start mx-0">
            <p className=" font-normal text-xl">
              • Goodies Box (2000 INR of worth)
            </p>
            <p className=" font-normal text-xl">• Geeks for Geeks 800/- INR</p>
            <p className=" font-normal text-xl">• Coupons on all courses</p>

            <p className=" font-normal text-xl"> • Echo-ar free premium</p>
            <p className=" font-normal text-xl">• tier services</p>
            <p className=" font-normal text-xl">
              • Online Mock Interviews from{" "}
            </p>
            <p className=" font-normal text-xl">• Interview Buddy </p>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-20  relative z-10 text-3xl md:text-5xl font-bold mb-8">
        Special Prizes
      </h1>
      <div className="flex w-full justify-center items-center flex-col gap-10 ">
      <div className="items-center sm:items-stretch  w-10/12 flex gap-5 flex-col sm:flex-row  justify-center ">
        <img
          src={grid.src}
          className="absolute bottom-0 right-0 w-full height-full z-0"
        ></img>
<div className="border-2 border-black bg-[#FFD392] z-10 w-11/12 md:w-[380px]  flex flex-col items-center px-5 py-10  shadow-3xl rounded-xl font-bold  ">
          <h2 className="text-4xl mb-6 font-bold"> Fresher&apos;s Track</h2>
          <div className=" self-start mx-0">
            <p className=" font-normal text-[16] mb-2">
              • Eligibility for the Freshers Track is limited to first-year students.
            </p>
            <p className=" font-normal text-[16] mb-2">
              • The winner will receive a exclusive Hackmol T-shirt.
            </p>
            <p className=" font-normal text-[16]">
              • Special goodies and swags box, as well as an opportunity to showcase their project, will be given
            </p>
          </div>
        </div>
        <div className="border-2 border-black bg-[#FFD392] z-10 w-11/12 md:w-[380px]  flex flex-col items-center px-5 py-10  shadow-3xl rounded-xl font-bold  ">
          <h2 className="text-4xl mb-6 font-bold"> Filecoin </h2>
          <div className=" self-start mx-0">
            <p className=" font-normal text-[16] mb-2">
              • ₹20,000 for best use of IPFS and/or Filecoin built at
              Devfolio-powered community Hackathons. Find them here.
            </p>
            <p className=" font-normal text-[16]">
              • Microgrants up to 5000 USD, open grants up to 50,000 USD
            </p>
          </div>
        </div>
        
        <div className="border-2 border-black bg-[#FFD392] z-10 w-11/12 md:w-[380px]  flex flex-col items-center px-5 py-8  shadow-3xl rounded-xl font-bold  ">
          <h2 className="text-4xl mb-6 font-bold"> Solana </h2>
          <div className=" self-start mx-0">
            <p className=" font-normal text-[16] mb-2">
            •<span className="font-bold"> young gun</span> - $USDC 100 for the
                best project beginners just starting out on Solana

            </p>
            <p className=" font-normal text-[16] mb-2">
            • <span className="font-bold"> rising teknoking </span> - $USDC
                250 for the best project that goes into depth, demonstrating
                higher-order code

            </p>
            <p className=" font-normal text-[16]">
            • <span className="font-bold"> master glasseater </span> - $USDC
                500 for the best advanced project that is almost ready for
                full-time development.

            </p>
            <p className=" font-normal text-[16]">
            •Eligibility to apply for equity free grants ranging upto $USDC
                5000 if you wish to continue building post the hackathon

            </p>
          </div>
        </div>
      </div>

  
      <div className="flex w-full justify-center items-center flex-col gap-10 ">
      <div className="items-center sm:items-stretch  w-10/12 flex gap-5 flex-col sm:flex-row  justify-center ">
        <div className="border-2 border-black bg-[#FFD392] z-10 w-11/12 md:w-[380px]  flex flex-col items-center px-5 py-8  shadow-3xl rounded-xl font-bold  ">
          <h2 className="text-4xl mb-6 font-bold"> Replit </h2>
          <div className=" self-start mx-0">
            <p className=" font-normal text-[16] mb-2">
              • $50 to winning project of the hackathon (must be deployed on
              Replit)
            </p>
            <p className=" font-normal text-[16] mb-2">
              • Replit schwags to 5 eligible submissions deployed on Replit.
            </p>
            <p className=" font-normal text-[16]">
              • Eligibility for internship / full time role interviews at Replit
            </p>
          </div>
        </div>
          <div className="border-2 border-black bg-[#FFD392] z-10 w-11/12 md:w-[380px]  flex flex-col items-center px-5 py-8  shadow-3xl rounded-xl font-bold  ">
          <h2 className="text-4xl mb-6 font-bold"> Polygon </h2>
          <div className=" self-start mx-0">
            <p className=" font-normal text-[16] mb-2">
              • ₹10,000 for the best hack built on Ethereum
            </p>
            <p className=" font-normal text-[16] mb-2">
              • ₹15,000 for the best hack built on Ethereum + Polygon
            </p>
            <p className=" font-normal text-[16]">
              • Eligibility to apply for internship/full-time roles and seed
              funding of up to 5,000 USD for winners!
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

{
  /* <div id='prizes' className='flex md:flex-row flex-col   border-2 border-black bg-white w-full'>
      <div className='flex flex-row justify-center py-36 px-[83px] bg-green p-8 w-full md:w-1/2 h-[60%] border border-r-black border-r-[1.69312px] items-start'>

        <div className='flex flex-col justify-center items-center p-0 gap-[24px]  w-[100%] h-[80%] left-[119.49px] top-[191px]'>

          <div className='flex justify-center items-center p-0   w-[398px]  h-[64px]  gap-[40px]  max-sm:gap-[15px]'>
            <div className='flex flex-col justify-center items-center border border-black bg-green rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[294px]  h-[64px] border border-black border-[1px] shadow-[5px_5px_0px_#000000]'>



              <h1 className='font-bold text-[19px]'>Fresher&apos;s Track</h1>

            </div>
            <button className='flex flex-col justify-center items-center border border-black bg-white rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[64px] h-[60px]  border border-black border-[0.820513px] shadow-[4.10256px_4.10256px_0px_#000000]' onClick={() => setState(0)}>

              <div className='w-[30px] h-[30px]'  >   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right" /></svg></div>
            </button>

          </div>
          <div className='flex justify-center items-center p-0   w-[398px]  h-[64px]  gap-[40px] max-sm:gap-[15px]'>
            <div className='flex flex-col justify-center items-center border border-black bg-orange rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[294px] h-[64px] border border-black border-[1px] shadow-[5px_5px_0px_#000000]'>

              <h1 className='font-bold text-[19px]'>Beginner’s Track</h1>
            </div>
            <button className='flex flex-col justify-center items-center border border-black bg-white rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[64px] h-[60px] border border-black border-[0.820513px] shadow-[4.10256px_4.10256px_0px_#000000]' onClick={() => setState(1)}>

              <div className='w-[30px] h-[30px]'  >   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right" /></svg></div>
            </button>

          </div>
          <div className='flex justify-center items-center p-0   w-[398px]  h-[64px]  gap-[40px] max-sm:gap-[15px]'>
            <div className='flex flex-col justify-center items-center border border-black bg-blue rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[294px] h-[64px] border border-black border-[1px] shadow-[5px_5px_0px_#000000]'>

              <h1 className='font-bold text-[19px]'>Main Track</h1>
            </div>
            <button className='flex flex-col justify-center items-center border border-black bg-white rounded-[12px] px-[40px] py-[20px] gap-[20px] w-[64px] h-[60px] border border-black border-[0.820513px] shadow-[4.10256px_4.10256px_0px_#000000]' onClick={() => setState(2)}>

              <div className='w-[30px] h-[30px]'  >   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right" /></svg></div>
            </button>

          </div>

        </div>
      </div>


      {/* right portion of this section */
}
{
  /* <div className='flex  flex-row  bg-white items-center w-full md:w-1/2 px-[55px] py-24  md:py-[8px] '>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col font-bold text-[200%]  '>
            {trackArray[state].title}
          </div>
          <div className='flex font-semibold text-[18px] text-center '>
            {trackArray[state].description}
          </div>
        </div>
      </div>
    </div>  */
}

export default TrackAndPrices;
