import React, { useEffect, useRef } from "react";
import { SiAuth0 } from "react-icons/si";
import { FaHtml5, FaInstagram } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import lottie from 'lottie-web';
import animationData from "../assets/animation1.json";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy(); // Cleanup function to destroy the animation instance when component unmounts
    };
  }, []);

  return <div ref={animationContainer} className="mt-[20px] p-0"></div>;
};

const Landing = () => {
  const handleDownload = () => {
    // Replace this with the URL of your hosted PDF file
    const pdfUrl = "https://drive.google.com/file/d/1sjLnnWBW0HhJgeheYQ-rH3oneT4CXpWf/view?usp=sharing";
  
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = "Resume_Rohit_Tiwari.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div>
      <div className=" w-full min-h-screen p-5 flex flex-col justify-center items-center md:min-h-0 md:flex md:flex-row-reverse">
        <div className="md:mr-10">
          {/* <img
            className="w-[70vw] h-[70vw] mt-[350px] p-0  md:w-[40vw] md:h-[20vw] md:mt-20"
            src="https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Angularjs.jpg"
          /> */}
                    <LottieAnimation/>
        </div>
        <div className="w-full flex flex-col  md:flex md:mt-[100px]">
          <h1 className="text-[8vw] text-center font-bold font-[Bebas Neue] md:text-[4vw] md:text-left md:px-10 py-3">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 md:text-[4vw] md:text-left">
              ROHIT TIWARI
            </span>
          </h1>
          <div className="flex gap-1 items-center justify-center md:justify-start md:px-10">
            <div className="mt-1 text-red-600">
              <img
                src="https://www.svgrepo.com/show/530402/honor.svg"
                className="h-[6vw] w-[6vw] md:w-[3vw] md:h-[3vw] "
              />
            </div>
            <h1 className="text-[6vw] text-center font-semibold text-gray-800 md:text-left md:text-[3vw]">
              Front End Developer
            </h1>
          </div>

          <h3 className="text-[4vw] text-center font-semibold md:text-[1.2vw] md:text-left md:w-[90%] md:leading-tight md:tracking-tight md:px-20 py-4">
            A highly motivated Engineering Student with a solid understanding of
            Front-End Development and scripting languages, seeking an Internship
            opportunity to leverage my technical skills and contribute towards
            the growth of respective teams and companies.
          </h3>
          <div className="flex items-center justify-center md:justify-start md:px-16">
            <button
              onClick={handleDownload}
              className="bg-orange-600 text-white rounded-xl p-2 m-2 text-center"
            >
              Download Resume
            </button>
          </div>

          <div className="text-center mt-4 px-5 py-2 text-[7vw] font-[Bree Serif] font-semibold md:text-[1.6vw]">
            <div className="flex gap-2 items-center justify-center md:justify-start md:gap-0">
              <img
                src="https://www.svgrepo.com/show/19485/lightening.svg"
                className="h-[5vw] w-[5vw] mt-1 md:h-[2vw]"
              />
              <h1 className="font-[Oswald]"> Connect with Me!</h1>
            </div>
            <div className="icons w-full  h-[15vw] mt-4 justify-center flex text-[9vw] gap-4 flex-wrap md:text-[3vw] md:px-10 md:h-[4vw] md:justify-start">

              <a href="https://x.com/BeyonderCR1" target="_blank"><FaSquareXTwitter className=""/></a>
              <a href="https://www.linkedin.com/in/rohit-tiwari-b5152a30b/" target="_blank"><FaLinkedin className="text-blue-900" /></a>
              <a href="https://github.com/Rohit-3D2Y" target="_blank"> <FaGithub className="text-black"/></a>
              <a href="https://github.com/Rohit-3D2Y" target="_blank"> <FaInstagram
               className="text bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 text-white p-1 rounded-[7px]"
              /></a>


              {/* ICONS */}
              {/* <a href="https://www.youtube.com/watch?v=5ZdHfJVAY-s&list=PLWeicLYR0ASmCnrYAGqsrsmUJTGH7eGDf&index=26" target="_blank"><FaHtml5 className="text-red-600" data-tip="HTML-5" /></a>
              <FaCss3Alt className="text-blue-600" />
              <IoLogoJavascript className="text-yellow-400 bg-black" />
              <FaBootstrap className="text-purple-600" />
              <RiTailwindCssFill className="text-blue-400" />
              <FaReact className="text-blue-300" />
              <SiMysql className="text-yellow-800" />
              <RiNextjsFill />
              <FaGithub /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
