import axios from "../image/axios.png";
import tailwind from "../image/tailwind.png";
import React from "../image/react.png";
import { FaAngleRight } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="container px-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-700">
          About app
        </h1>
        <p className="mt-3 text-justify text-white">
          I hope that you have enjoyed this program and that you have used it
          enough, and this program will show you the price of digital currency
          in real time using API, and you can show the market stagnation.
        </p>

        <div className="flex items-center justify-start mt-6 gap-x-4">
          <div className="w-[30px]">
            <img src={React} alt="axios" />
          </div>
          <img src={tailwind} alt="axios" className="w-[40px]" />
          <img src={axios} alt="axios" className="w-[40px]" />
        </div>

        <a href="https://javadyousefi.com">
          <div className="flex items-center mt-8 text-white">
            <FaAngleRight />
            visit my website
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
