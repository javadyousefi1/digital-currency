import Header from "../components/header";
import Styles from "../css/background.module.css";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <div className={Styles.background}>
      <div className="h-screen backdrop-blur-3xl ">
        <div className="relative z-10">
          <Toaster />
        </div>

        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
