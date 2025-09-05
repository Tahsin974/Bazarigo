import { useEffect, useState } from "react";
import img from "../../../../assets/Products/img.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Categories.module.css";
export default function Categories() {
  // Mock data (later you can fetch from backend API)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Example of fetching dynamic categories (replace with API call later)
    const mockCategories = [
      {
        id: 1,
        category: "Men’s Fashion",
        img: img,
      },
      {
        id: 2,
        category: "Women’s Fashion",
        img: img,
      },
      {
        id: 3,
        category: "Electronics",
        img: img,
      },
      {
        id: 4,
        category: "Beauty & Health",
        img: img,
      },
      {
        id: 5,
        category: "Home & Living",
        img: img,
      },
      {
        id: 6,
        category: "Groceries",
        img: img,
      },
      {
        id: 7,
        category: "Sports & Outdoors",
        img: img,
      },
    ];

    setCategories(mockCategories);
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
