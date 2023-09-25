import React from "react";
import hack from "../../../public/72.jpg";
import star from "../../../public/star2.svg";
const About = () => {
  return (
    <div
      id="about"
      className="w-full py-10 sm:py-20 relative bg-orange flex flex-col  justify-center items-center "
    >
      <div className="absolute hidden sm:block  overflow-hidden   z-0 left-0 w-full h-full  ">
        <div className=" accent-text  ">
          us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about &nbsp;&nbsp;us about{" "}
        </div>
        <div className="  accent-text  -translate-x-[450px] ">
          us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about &nbsp;&nbsp;us about{" "}
        </div>
        <div className="  accent-text -translate-x-[200px] ">
          us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about{" "}
        </div>
        <div className="   accent-text -translate-x-[500px]">
          us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about{" "}
        </div>
        <div className="   accent-text -translate-x-[100px]">
          us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about{" "}
        </div>
        <div className="   accent-text -translate-x-[250px]">
          us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about&nbsp;&nbsp;us about{" "}
        </div>
      </div>

      <div className="border-2  border-black z-10  relative p-7 shadow-3xl bg-white rounded-xl w-11/12 sm:w-9/12 ">
        <img
          className="absolute top-[-27px] left-[-40px]"
          width="80"
          height="80"
          src={star.src}
        />
        <div className="flex gap-8  justify-center items-center  flex-col md:flex-row  ">
          <div className="  md:w-5/12 h-full ">
            <img
              src={hack.src}
              className="rounded-xl  border-2  border-black "
            />
          </div>
          <div className=" md:w-7/12 h-full ">
            <h2 className="container flex flex-col  items-center text-black  text-3xl md:text-4xl font-extrabold  pb-4 ">
              About HackMol5.0
            </h2>
            {/* 
                Over the years HackMOL has established itself as the Biggest Hackathon of Punjab with a awe-inspiring attendance of over 700+, 1100+ & 1300+ hackers in successive editions but this year HackMOL has advanced to another level by serving as the premier and opening event of Techniti (the annual Tech Fest of NIT Jalandhar) with anticipation of over 1000+ hackers physically joining us
                It is organised at the end of Month of Learning (MOL), a series of workshops & seminars focused and centred around the latest technologies. */}
            HackMOL, a hackathon in Punjab, has grown in popularity over the years, with increasing attendance of 3000+ in previous editions and now serving as the opening event for Techniti, the annual tech festival of NIT Jalandhar. 
            <div className="hidden sm:inline">
              It is held at the end of the Month of Learning, a series of
              workshops and seminars focused on the latest technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

{
  /* <section className="skill" id="skills">
        <div className="container">
          <div className="skill-bx wow zoomIn">
            <h2>About HackMol4.0</h2>
            <div className="about-para">

            <p>Over the years HackMOL has established itself as the Biggest Hackathon of Punjab with a awe-inspiring attendance of over 700+, 1100+ & 1300+ hackers in successive editions but this year HackMOL has advanced to another level by serving as the premier and opening event of Techniti (the annual Tech Fest of NIT Jalandhar) with anticipation of over 1000+ hackers physically joining us.</p></div>
            
            <p>
Over the years HackMOL has established itself as the Biggest Hackathon of Punjab with a awe-inspiring attendance of over 700+, 1100+ & 1300+ hackers in successive editions but this year HackMOL has advanced to another level by serving as the premier and opening event of Techniti (the annual Tech Fest of NIT Jalandhar) with anticipation of over 1000+ hackers physically joining us

It is organised at the end of Month of Learning (MOL), a series of workshops & seminars focused and centred around the latest technologies.</p></div>

            {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Image" />
                                  <h5>Brand Identity</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Image" />
                                  <h5>Logo Design</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                          </Carousel> */
}
//   </div>
// </div>
//    <img className="background-image-left" src={colorSharp} alt="Image" /> */}
// </section>
