import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import "../index.css";
import free2 from '../assets/ss/free2.jpeg';
import free1 from '../assets/ss/free1.jpeg';
import pers1 from '../assets/ss/pers1.jpeg';
import pers2 from '../assets/ss/pers2.jpeg';
import pers3 from '../assets/ss/pers3.jpeg';
import free3 from '../assets/ss/free3.jpeg';
import pers4 from '../assets/ss/pers4.jpeg';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tasks = [
    {
        heading:"CalorieBuddy",
        desc: "A Calorie Counter and Tracker which has a BMI Calculator and Recipe app finder through API",
        toolKit: ["HTML", "CSS", "Javascript"," API", "Github"],
        img:pers1
    }, 
   
    {
        heading:"LearnEasy",
        desc: "A curriculum guide based website for First year Undergraduate students with Notes, PYQs, Video lectures all at one place.",
        toolKit: ["HTML", "CSS", "Javascript"],
        img: pers2
        
    }, 
    {
      heading:"Lazarev Re-creation",
      desc: "An award winning website for it's subtle and outstanding animation re-created completely with complete  animation efforts.",
      toolKit: ["Javascript", "GreenSock Animations", "CSS"],
      img: pers3
      
  }, 
   ];

   const tasks2 = [
    
    {
      heading:"Product Website",
      desc: "A Front-End based Website for a Local store displaying it's products and live feedback from it's customers as well as information regarding the products",
      toolKit: ["HTML", "CSS", "Javascript"],
      img: free1
      
  }, 
  {
    heading:"Infotech Website",
    desc: "An Infotech Website providing services in web-designing and web-building including multiple features and functionalities",
    toolKit: ["ReactJS", "Framer Motion", "Javascript"],
    img: free2
    
}, {
  heading:"NairaVerse",
  desc: "A Fin-tech website which helps in opening bank accounts or carrying out transactions through multiple banks internationally using STRIPE's API",
  toolKit: ["STRIPE API", "ReactJS", "Javascript"],
  img: free3
  
},
   ];

  return (
    <div className="w-full min-h-screen py-5 md:min-h-0">
      <div className="text-center text-[8vw] font-[Oswald] flex items-center justify-center gap-1 md:text-[3vw]">
        <h1>Projects</h1>
        <img
          src="https://www.svgrepo.com/show/530415/target.svg"
          className="h-[8vw] w-[8vw] mt-1 md:w-[4vw] md:h-[4vw]"
        />
      </div>
      <div className="tabs-wrapper relative w-full h-[13vw] p-1 mt-2 border-2 border-red-100 flex gap-2 md:h-[4vw]">
        <div
          className={`highlight absolute top-0 h-full w-1/2 rounded-md bg-orange-400 transition-transform duration-500 ${
            activeTab === "tab1"
              ? "transform -translate-x-2"
              : "transform translate-x-full"
          } `}
        />
        <div
          className="tab1 flex w-2/3 justify-center items-center gap-1 cursor-pointer"
          onClick={() => handleTabClick("tab1")}
        >
          <img
            src="https://www.svgrepo.com/show/530231/collect.svg"
            className="h-[8vw] w-[8vw] z-9  relative md:h-[3vw] md:w-[3vw]"
          />
          <div
            className={`relative w-content h-[10vw] mt-2   font-[Bree+Serif] font-semibold ${
              activeTab === "tab1" ? "text-white" : "text-black"
            } md:flex md:items-center md:justify-center md:mt-0 md:text-[1.5vw]`}
          >
            Personal
          </div>
        </div>
        <div
          className="flex tab2 w-2/3 justify-center items-center gap-1 cursor-pointer"
          onClick={() => handleTabClick("tab2")}
        >
          <img
            src="https://www.svgrepo.com/show/530241/tips.svg"
            className="h-[8vw] w-[8vw] z-9  relative md:h-[3vw] md:w-[3vw]"
          />
          <div
            className={`relative  w-content h-[10vw] mt-2  font-[Bree+Serif] font-semibold ${
              activeTab === "tab2" ? "text-white" : "text-black"
            } md:flex md:items-center  md:justify-center md:mt-0 md:text-[1.5vw]`}
          >
            Freelance
          </div>
        </div>
      </div>
      <div className="tab-content w-full mt-2 p-2 ">
        {activeTab === "tab1" && (
          <div className="tab1Content md:flex md:justify-evenly md:flex-wrap">
            {tasks.map((task, index) => (
            <div key={index} className="text-center mt-4 md:w-1/4">
              <div className="project1 w-full relative">
                {/* <img
                  src="https://www.freeiconspng.com/thumbs/macbook/white-technology-macbook-image-12.png"
                  className="p-2 relative z-99 mt-2 h-[60vw] md:h-[16vw]"
                /> */}

                <img
                  className=" h-[50vw] border-[2px]  rounded-2xl m-auto w-[70vw] md:h-[15vw] md:w-[30vw]"
                  src={task.img}
                />

                <div className="font-[Bree+Serif] font-semibold text-[5vw] mt-4 md:text-[1.8vw] md:w-full">
                  {task.heading}
                  <h1 className="text-[4vw] text-gray-600 md:text-[1.2vw] md:w-full">
                    {task.desc}
                  </h1>
                </div>
                <div className="tools mt-2 flex flex-wrap gap-3 text-center justify-center items-center text-[3vw] md:text-[1vw] ">
                  {task.toolKit.map((tool, toolIndex) => (
                    <span key={toolIndex} className="bg-red-100 p-2 rounded-xl text-gray-800">
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="justify-center items-center gap-1 flex rounded-xl p-2 mt-3 text-[4vw] text-white bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 m-auto md:text-[1.2vw] ">
                  <AiFillGithub className="mt-1" />
                  Live Demo
                </button>
              </div>
            </div>
            ))}
          </div>
        )}
        {activeTab === "tab2" &&  (
        <div className="tab2Content md:flex md:justify-evenly md:flex-wrap">
            {tasks2.map((task, index) => (
            <div key={index} className="text-center mt-4 md:w-1/4">
              <div className="project1 w-full relative">
                <img
                  src="https://www.freeiconspng.com/thumbs/macbook/white-technology-macbook-image-12.png"
                  className="p-2 relative z-99 mt-2 h-[60vw] md:h-[16vw]"
                />

                <img
                  className="absolute top-[5vw] left-[14vw] h-[45vw] rounded-sm w-[68vw] overflow-hidden md:h-[12vw] md:w-[17.5vw] md:top-5 md:left-[3.7vw]"
                  src={task.img}
                />

                <div className="font-[Bree+Serif] font-semibold text-[5vw] md:text-[2vw] md:w-full">
                  {task.heading}
                  <h1 className="text-[4vw] text-gray-600 md:text-[1.2vw] md:w-full">
                    {task.desc}
                  </h1>
                </div>
                <div className="tools mt-2 flex flex-wrap gap-3 text-center justify-center items-center text-[3vw] md:text-[1vw] ">
                  {task.toolKit.map((tool, toolIndex) => (
                    <span key={toolIndex} className="bg-red-100 p-2 rounded-xl text-gray-800">
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="justify-center items-center gap-1 flex rounded-xl p-2 mt-3 text-[4vw] text-white bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 m-auto md:text-[1.2vw] ">
                  <AiFillGithub className="mt-1" />
                  Live Demo
                </button>
              </div>
            </div>
            ))}
          </div>)}
      </div>
    </div>
  );
};

export default Projects;
