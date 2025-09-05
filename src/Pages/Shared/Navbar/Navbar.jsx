import { IoCloseOutline, IoSearch } from "react-icons/io5";
import logo from "../../../assets/Logo/Bazarigo.svg";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useRef, useState } from "react";
import { BiSupport } from "react-icons/bi";
export default function Navbar({ children }) {
  const menuRef = useRef(null);
  const [handleCollapse, setHandleCollapse] = useState(false);
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
        <a
          onClick={() => setHandleCollapse(!handleCollapse)}
          className="flex justify-between items-center cursor-pointer  font-bold hover:bg-gray-200"
        >
          <span>Categories</span>
          <span className="text-lg">{handleCollapse ? "−" : "+"}</span>
        </a>

        <>
          <ul
            className={`overflow-hidden transition-all duration-600 ease-in-out font-semibold ${
              handleCollapse ? "max-h-96" : "max-h-0"
            }`}
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Men’s Fashion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Women’s Fashion
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Beauty & Health
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Home & Living
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Groceries
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Sports & Outdoors
              </a>
            </li>
          </ul>
        </>
      </li>

      <li>
        <a>Flash Sale</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );
  const searchBar = (
    <>
      <li>
        <label className="input rounded-3xl lg:w-xl xl:w-xl md:w-xl  bg-white text-black   border border-black ">
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
          <div className=" flex justify-center items-center w-full xl:px-12 lg:px-12 md:px-12 px-4 py-5 bg-white text-black ">
            <div className="navbar-start items-center gap-4">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn border-white shadow-none bg-white text-black lg:hidden "
              >
                <FiMenu />
              </label>
              <figure>
                <img src={logo} alt="brand-logo" height={75} width={150} />
              </figure>
            </div>
            <div className="navbar-center hidden xl:flex lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-1.5 items-center ">
                {searchBar}
              </ul>
            </div>
            <div className="navbar-end xl:gap-8 lg:gap-8 md:gap-6 sm:gap-5 gap-4">
              <div>
                <BiSupport className="text-gray-600 xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg" />
              </div>
              <div>
                <div className="indicator">
                  <FaHeart className="mt-1 text-gray-600 xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base" />

                  <span className="badge badge-xs indicator-item bg-red-600 border-0 text-white rounded-full">
                    8
                  </span>
                </div>
              </div>

              <div>
                <BsCart4 className="text-gray-600 xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base" />
              </div>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer">
                  <FaRegUser className="text-gray-600 xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white text-black font-semibold  rounded-box z-1 mt-3 w-40 p-0 py-1 shadow "
                >
                  <li className="hover:bg-gray-100 ">
                    <a className="text-sm">Profile</a>
                  </li>
                  <li className="hover:bg-gray-100 ">
                    <a className="text-sm">Become Seller</a>
                  </li>
                  <li className="hover:bg-gray-100 ">
                    <a className="text-sm">Logout</a>
                  </li>
                </ul>
              </div>
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

        <ul className="menu bg-slate-200 text-black min-h-full w-80 p-4 space-y-1.5">
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
          <ul className="menu menu-vertical px-1 text-lg font-bold space-x-2.5 py-1">
            {navOptions}
          </ul>
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
