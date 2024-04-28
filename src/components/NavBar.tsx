import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [showNavLinks, setshowNavLinks] = useState(false);
  const toggleNavbar = () => setshowNavLinks(!showNavLinks);
  return (
    <div>
      <nav className="w-full max-w-screen-2xl flex justify-between items-center px-8 py-2 relative">
        {/* logo*/}
        <div className="w-full">
          <a href="/">
            <img
              src="/public/frame-5088@2x.png"
              alt=""
              className="w-[150px] lg:w-[250px]"
            />
          </a>
        </div>
        {/* navlinks */}
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            showNavLinks ? "absolute opacity-100" : "hidden opacity-0"
          } top-14 inset-0 h-full w-full md:opacity-100  md:top-0 md:flex md:items-center`}
        >
          <div className="flex flex-col  items-end   md:flex-row gap-6 lg:gap-8 md:justify-center w-full text-black font-bold  text-sm lg:text-lg md:px-0 px-8 py-7">
            <div className="hover:underline hidden md:block cursor-pointer">
              <a href="/">Home</a>
            </div>
            <div className="hover:underline  cursor-pointer">
              <a href="#">Products</a>
            </div>
            <div className="hover:underline  cursor-pointer">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
        {/* harmburger */}
        <div className="w-full flex justify-end ">
          <div className="block md:hidden " onClick={toggleNavbar}>
            {showNavLinks ? <IoMdClose size={30} /> : <IoMenu size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
