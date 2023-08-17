import homeImage from "../image/home.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center md:justify-between md:px-6 md:pt-7">
        <div className="w-[90%] md:w-full -mt-1 md:flex md:justify-between md:items-center">
          <img
            src={homeImage}
            alt="homeImage"
            className="md:w-[350px] lg:w-[500px] order-last"
          />

          <div className="">
            <h1 className="w-full pb-4 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-700 md:text-left">
              digital currency
            </h1>

            <p className="block mt-3 text-sm text-center text-white md:text-xl lg:text-2xl md:text-left md:w-[70%]">
              Hello, welcome to our website. You can find out about the price of
              digital currencies in this website at any time and get relevant
              information. I hope you enjoy this program
            </p>
            <div className="flex justify-center md:justify-start md:mt-4">
              <Link to="/exchangRate">
                <button className="p-2 px-4 mt-4 text-sm text-white bg-gradient-to-r from-purple-500 to-blue-700 rounded-3xl md:text-lg focus:ring ">
                  Let's go !
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
