import { useEffect, useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Categories.module.css";
import { HashLink } from "react-router-hash-link";
import { myCategories } from "../../../../Data/mockCategories";

export default function Categories() {
  // Mock data (later you can fetch from backend API)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Example of fetching dynamic categories (replace with API call later)
    setCategories(myCategories);
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className={`mySwiper ${styles["my-swiper-wrapper"]}`}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <HashLink to={`/${cat.category}#`} key={cat.id}>
              <div className="flex flex-col items-center p-2 bg-white rounded-2xl  hover:shadow-md transition cursor-pointer  border border-gray-400 shadow-[#71c8f0]">
                <img
                  src={cat.img}
                  alt={cat.category}
                  className="  rounded-2xl border mb-3"
                />
                <h4
                  style={{ fontFamily: "Montserrat", fontWeight: 700 }}
                  className="text-gray-700 font-bold text-center mt-auto xl:text-[15px] lg:text-[15px] md:text-[12px] "
                >
                  {cat.category}
                </h4>
              </div>
            </HashLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
{
  /* <div className="grid lg:grid-cols-6 gap-4 justify-items-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center p-2 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer  border border-gray-400 "
          >
            <img
              src={cat.img}
              alt={cat.category}
              className="  rounded-2xl border mb-3"
            />
            <p className="text-gray-700 font-bold text-center mt-auto">
              {cat.category}
            </p>
          </div>
        ))}
      </div> */
}
