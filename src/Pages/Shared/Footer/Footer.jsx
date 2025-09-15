import logo from "../../../assets/Logo/Bazarigo.svg";
import facebook from "../../../assets/Footer/facebook.png";
import instagram from "../../../assets/Footer/instagram.png";
import youtube from "../../../assets/Footer/youtube.png";
import nagad from "../../../assets/payments/nagad.png";
import bKash from "../../../assets/payments/bkash.png";
import rocket from "../../../assets/payments/rocket.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <div>
      <footer className="xl:grid lg:grid flex flex-wrap  xl:grid-cols-4  lg:grid-cols-4  grid-cols-2 gap-y-6 xl:gap-x-6 lg:gap-x-6 gap-x-20 bg-[#F4F4F6] text-black xl:p-10 lg:p-10  md:p-10 py-10 px-4 border-b  border-gray-500 xl:justify-items-center lg:justify-items-center ">
        <aside className="space-y-2  ">
          <figure>
            <img src={logo} alt="brand-logo" height={50} width={120} />
          </figure>
          <p style={{ fontFamily: "Roboto", fontWeight: 400 }}>
            Shop with confidence, pay with ease, <br />
            and enjoy fast delivery – only on Bazarigo.
          </p>

          {/* social links */}
          <div className="flex gap-4 w-[max-context]  ">
            <a href="https://www.facebook.com/share/16BK5Q6WY5/">
              <img src={facebook} alt="facebook logo" className="h-6 w-6" />
            </a>

            <a href="https://www.instagram.com/bazarigo.online.shop?igsh=bzJxaXZvN3JyaDI1">
              <img src={instagram} alt="instagram logo" className="h-6 w-6" />
            </a>
            <a>
              <img src={youtube} alt="youtube  logo" className="h-6 " />
            </a>
          </div>
        </aside>
        <nav>
          <ul style={{ fontFamily: "Roboto", fontWeight: 400 }}>
            <h6
              style={{ fontFamily: "Montserrat", fontWeight: 700 }}
              className="mb-2 text-black  xl:text-base lg:text-base md:text-base text-sm"
            >
              Categories
            </h6>
            <li>
              <HashLink to="/Fashion#" className="link link-hover">
                Fashion
              </HashLink>
            </li>
            <li>
              <HashLink to="/Electronics#" className="link link-hover">
                Electronics
              </HashLink>
            </li>
            <li>
              <HashLink to="/Groceries#" className="link link-hover">
                Groceries
              </HashLink>
            </li>
            <li>
              <HashLink to="/Health & Beauty#" className="link link-hover">
                Health & Beauty
              </HashLink>
            </li>
          </ul>
        </nav>
        <nav>
          <ul style={{ fontFamily: "Roboto", fontWeight: 400 }}>
            <h6
              style={{ fontFamily: "Montserrat", fontWeight: 700 }}
              className="mb-2 text-black xl:text-base lg:text-base md:text-base text-sm"
            >
              Quick Links
            </h6>
            <li>
              <a href="#" className="link link-hover">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
            className="mb-2 text-black xl:text-base lg:text-base md:text-base text-sm"
          >
            Customer Service
          </h6>

          <div
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="space-y-2 "
          >
            <p className="flex items-center gap-2">
              <span>
                <FaPhoneAlt size={15} />
              </span>{" "}
              <a href="tel:+8801797454118" className="hover:underline">
                01797-454-118
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <MdOutlineMailOutline size={18} />
              </span>{" "}
              <a
                href="mailto:bazarigo.official@gmail.com"
                className="hover:underline"
              >
                bazarigo.official@gmail.com
              </a>
            </p>
            <p className=" flex items-center gap-2">
              <span>
                <IoMdTime size={18} />
              </span>{" "}
              <span className="text-sm">
                Support Hours: 9 AM – 5 PM (Everyday)
              </span>
            </p>
          </div>

          <ul
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="mt-4 space-y-2 "
          >
            <li>
              <a href="#" className="link link-hover">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Terms & Conditions
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <p
              style={{ fontFamily: "Montserrat", fontWeight: 700 }}
              className="mb-2 xl:text-base lg:text-base md:text-base text-sm"
            >
              Payment Methods
            </p>
            <div className="flex gap-3">
              <img src={bKash} alt="bKash" className="h-6" />
              <img src={nagad} alt="Nagad" className="h-6" />
              <img src={rocket} alt="Rocket" className="h-6" />
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-[#F4F4F6] text-black p-4 justify-center items-center font-semibold">
        <p>© {new Date().getFullYear()} Bazarigo. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
