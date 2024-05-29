import React from "react";

const progLang = ["C Programming", "Python", "Javascript", "Typescript"];
const frontLang = [
  "HTML",
  "CSS",
  "ReactJS",
  "BootStrap",
  "TailwindCSS",
  "Redux",
];
const backLang = ["NextJS", "Firebase", "Express"];
const dataLang = ["MySQL", "PostGres", "MongoDB", "Mongoose"];

const Skills = () => {
  return (
    <div className=" w-full border-t-2 border-gray-300 py-2 ">
      <div className="text-center flex items-center justify-center gap-1">
        <h1 className="text-[8vw] font-[Oswald] md:text-[3vw]">What I know</h1>
        <img
          src="https://www.svgrepo.com/show/530399/inspiration.svg"
          className="h-[8vw] w-[8vw] mt-1 md:h-[4vw] md:w-[4vw]"
        />
      </div>
      <div className="container w-full px-8 py-2  flex flex-wrap text-center font-[Bree+Serif] font-semibold md:px-8 md:py-2 md:flex-nowrap md:gap-10 md:m-auto">
        <div className="bg-orange-100 w-full border-[1px] rounded-md  min-h-[5vw] mt-5 p-2 md:min-h-[15vw] hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center gap-2 justify-center     text-[5vw] md:text-[1.3vw]">
            <img
              src="https://www.svgrepo.com/show/384724/application-coding-terminal.svg"
              className="h-[7vw] w-[7vw] md:h-[2vw] md:w-[2vw]"
            />
            <h2>Programming Langauges</h2>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[3.5vw] boxes  w-full p-1 justify-center md:text-[1vw]">
            {progLang.map((lang0, index) => (
              <div
                key={index}
                className=" bg-white border-[1px] border-red-600 rounded-md p-2 font-semibold"
              >
                {lang0}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-100 w-full border-[1px]    rounded-md  min-h-[5vw] mt-5 p-2 md:min-h-[15vw] hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center gap-2 justify-center text-[5vw] md:text-[1.5vw]">
            <img
              src="https://www.svgrepo.com/show/384705/laptop-computer-coding-code-script.svg"
              className="h-[7vw] w-[7vw] md:h-[2vw] md:w-[2vw]"
            />
            <h2>Front-End</h2>
          </div>
          <div className=" flex flex-wrap gap-2 text-[3.5vw] boxes  w-full p-1 justify-center mt-3 md:text-[1vw]">
            {frontLang.map((lang1, index) => (
              <div
                key={index}
                className="rounded-md border-purple-700 border-[1px] bg-white p-2 font-semibold"
              >
                {lang1}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-100 w-full border-[1px]    rounded-md  min-h-[5vw] mt-5 p-2  md:min-h-[15vw] hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center gap-2 justify-center text-[5vw] md:text-[1.5vw]">
            <img
              src="https://www.svgrepo.com/show/384696/compile-compiler-script-code-config.svg"
              className="h-[7vw] w-[7vw] md:h-[2vw] md:w-[2vw]"
            />
            <h2>Back-End</h2>
          </div>
          <div className=" flex flex-wrap gap-2 text-[3.5vw] boxes  w-full p-1 justify-center mt-3 md:text-[1vw]">
            {backLang.map((lang2, index) => (
              <div
                key={index}
                className=" bg-white border-[1px] border-red-600 rounded-md p-2 font-semibold"
              >
                {lang2}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-100 w-full border-[1px]    rounded-md  min-h-[5vw] mt-5 p-2 md:min-h-[15vw] hover:scale-105 transition-transform cursor-pointer">
          <div className="flex items-center gap-2 justify-center text-[5vw] md:text-[1.5vw]">
            <img
              src="https://www.svgrepo.com/show/384699/database-data-base-config-cog-options.svg"
              className="h-[7vw] w-[7vw] md:h-[2vw] md:w-[2vw]"
            />
            <h2>Database</h2>
          </div>
          <div className=" flex flex-wrap gap-2 text-[3.5vw] boxes  w-full p-1 justify-center mt-3 md:text-[1vw] ">
            {dataLang.map((lang3, index) => (
              <div
                key={index}
                className="rounded-md border-purple-700 bg-white border-[1px] p-2 font-semibold"
              >
                {lang3}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
