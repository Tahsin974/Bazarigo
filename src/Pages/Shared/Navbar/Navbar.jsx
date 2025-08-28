import { IoCloseOutline, IoSearch } from "react-icons/io5";
import logo from "../../../assets/Logo/Bazarigo.svg";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useRef } from "react";
export default function Navbar({ children }) {
  const menuRef = useRef(null);
  const handleMenuButton = () => {
    if (menuRef.current) {
      menuRef.current.checked = false;
    }
  };
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Categories</a>
      </li>
      <li>
        <a>Deals</a>
      </li>
      <li>
        <a>Brands</a>
      </li>
      <li>
        <a>Support</a>
      </li>
    </>
  );
  const searchBar = (
    <>
      <li>
        <label className="input rounded-3xl lg:w-xl xl:w-xl max-w-xl bg-white text-black   border border-black ">
          <input
            type="search"
            className="grow "
            placeholder="Search for products..."
          />
          <button className="btn bg-white border-none text-black rounded-r-full shadow-none btn-sm">
            <IoSearch className="text-lg" />
          </button>
        </label>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input
        ref={menuRef}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="xl:sticky lg:sticky fixed top-0 z-20 w-full ">
          <div className=" flex justify-center items-center w-full xl:px-12 lg:px-12 md:px-12 px-4 py-4 bg-white text-black ">
            <div className="navbar-start items-center gap-4">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn border-white shadow-none bg-white text-black lg:hidden "
              >
                <FiMenu />
              </label>
              <figure>
                <img src={logo} alt="brand-logo" height={50} width={120} />
              </figure>
            </div>
            <div className="navbar-center hidden xl:flex lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-1.5 items-center ">
                {searchBar}
              </ul>
            </div>
            <div className="navbar-end xl:gap-8 lg:gap-8 md:gap-6 sm:gap-5 gap-4">
              <div>
                <div className="indicator">
                  <FaHeart size={20} className="mt-1 text-gray-600" />

                  <span className="badge badge-xs indicator-item bg-red-600 border-0 text-white rounded-full">
                    8
                  </span>
                </div>
              </div>
              <div>
                <FaRegUser size={20} className="text-gray-600" />
              </div>
              <div>
                <BsCart4 size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
          <div className="navbar bg-[#202044] text-white hidden lg:flex ">
            <div className="mx-auto ">
              <ul className="menu menu-horizontal px-1 text-lg font-semibold space-x-2.5">
                {navOptions}
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-[#202044] text-white min-h-full w-80 p-4 space-y-1.5">
          <div className="flex justify-between items-center gap-4">
            <figure>
              <img src={logo} alt="brand-logo" height={50} width={120} />
            </figure>
            <button
              onClick={handleMenuButton}
              className="btn btn-circle bg-white text-black  "
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>
          {/* Sidebar content here */}
          {navOptions}
          {searchBar}
        </ul>
      </div>
    </div>
  );
}

{
  /* <div className="navbar text-black w-full">
  <div className="flex-none lg:hidden">
    <label
      htmlFor="my-drawer-3"
      aria-label="open sidebar"
      className="btn btn-square btn-ghost"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-6 w-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
  </div>
  <div className="mx-2 flex-1 px-2">
    <figure>
      <img src={logo} alt="brand-logo" height={50} width={120} />
    </figure>
  </div>
  <div className="hidden flex-none lg:block">
    <ul className="menu menu-horizontal">
     
      <li>
        <a>Navbar Item 1</a>
      </li>
      <li>
        <a>Navbar Item 2</a>
      </li>
    </ul>
  </div>
</div>; */
}
