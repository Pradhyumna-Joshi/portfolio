import React from "react";
import { skills } from "../data/skills";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="max-w-[1024px]  h-screen pt-[110px]  mx-auto flex items-center text-white relative"
    >
      <div className="absolute right-0 top-0  border-[120px] blur-[200px] border-purple-600 w-[100px] h-[100px]"></div>
      {/* <div className="flex-1 mr-10 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-xl  ">
        <div className="w-full h-full flex flex-wrap items-center   justify-evenly gap-[60px] p-10 rounded-xl   ">
          {skills.map((item, index) => (
            <div key={index}>
              <img className="" src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div> */}
      <div className="hidden lg:flex lg:flex-1 ">
        <div className="flex flex-wrap">
          {skills.map((item, index) => (
            <div key={index}>
              <img
                className="opacity-[0.1] duration-300 hover:opacity-100 hover:scale-[1.1] p-1 w-[120px] h-[120px]"
                src={item.image}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center  p-5 md:p-0   flex-col pt-[50px] gap-5 ">
        <h1 className=" text-4xl  font-bold">About Me</h1>
        <p className="flex flex-col gap-5 ">
          <h1>📱 Passionate about Coding and building Mobile applications.</h1>
          <h1>💻 Full stack Web Developer.</h1>
          <h1>
            {" "}
            👨‍🎓 Currently a final year student pursuing Computer Science @PES
            University.
          </h1>
          <h1>🎨 Finding joy in artistic pursuits🌱Art enthusiast.</h1>
          <div className=" w-full h-full flex flex-col   ">
            <h1 className="text-center  text-lg font-bold">Education</h1>
            <div className="flex items-center bg-transparent">
              <div className="bg-transparent relative">
                <div className="m-5 h-[100px] w-[0.1px] bg-purple-500"></div>
                <div className="absolute top-8 left-4 w-[10px] h-[10px]  border-2  border-white rounded-[50%]"></div>
              </div>

              <div>
                <h1 className="text-lg font-bold">
                  B.Tech in Computer Science
                </h1>
                <h1 className="text-md font-semibold">PES University</h1>
                <h1 className="text-sm font-100">Bangalore</h1>
                <h1 className="text-sm font-100">2020-24</h1>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
