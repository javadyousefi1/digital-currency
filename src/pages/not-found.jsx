import { Link } from "react-router-dom";
import notfound from "../image/404.png";
const NotFound = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src={notfound} alt="404" className="w-[80%] md:w-[20%]" />
        </div>
        <h1 className="text-2xl text-center text-white ">404</h1>
        <p className="text-sm text-center text-white ">
          Your page not found
        </p>
        <div className="text-center">
          <Link to="/">
            <button className="mt-3 text-xs text-white">Go to home !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
