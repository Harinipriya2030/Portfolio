import React from "react";

const Home = () => {
  return (
    <div
      id=""
      className="mx-5 flex h-screen flex-col items-center justify-center p-10 text-center font-montserrat"
    >
      <h1 className="name">Hi, I'm HariniPriya!</h1>
      <h2 className="mx-10 text-[18px] font-bold uppercase text-purple-900 dark:text-gray-300 sm:text-[20px] md:text-[25px]">
        Frontend Developer
      </h2>
      <p className="mt-2 w-[300px] px-4 text-center text-[14px] text-purple-800 dark:text-gray-400 sm:w-[350px] sm:text-[18px] md:w-[400px] md:text-[20px]">
        A creative developer turning visions into engaging digital designs.
      </p>
      <a href="Harinipriya_resume.pdf" download={true} target="_blank">
        <button className="du my-2 rounded-md bg-gradient-to-br from-purple-400 to-blue-400 to-50% px-4 py-2 font-semibold transition-all duration-500 hover:scale-x-105 hover:bg-gradient-to-tr dark:from-gray-500 dark:hover:from-gray-600 dark:hover:to-transparent">
          Resume
        </button>
      </a>
    </div>
  );
};

export default Home;
