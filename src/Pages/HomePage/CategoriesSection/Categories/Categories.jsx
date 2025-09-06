import { useEffect, useState } from "react";
import img1 from "../../../../assets/Catagory/Men’s-Fashion.webp";
import img2 from "../../../../assets/Catagory/Women’s-Fashion.webp";
import img3 from "../../../../assets/Catagory/Electronics.webp";
import img4 from "../../../../assets/Catagory/Beauty-and-Health.webp";
import img5 from "../../../../assets/Catagory/Home-and-Living.webp";
import img6 from "../../../../assets/Catagory/Groceries.webp";
import img7 from "../../../../assets/Catagory/Sports-and-Outdoors.webp";
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
        img: img1,
      },
      {
        id: 2,
        category: "Women’s Fashion",
        img: img2,
      },
      {
        id: 3,
        category: "Electronics",
        img: img3,
      },
      {
        id: 4,
        category: "Beauty & Health",
        img: img4,
      },
      {
        id: 5,
        category: "Home & Living",
        img: img5,
      },
      {
        id: 6,
        category: "Groceries",
        img: img6,
      },
      {
        id: 7,
        category: "Sports & Outdoors",
        img: img7,
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
              <h4
                style={{ fontFamily: "Montserrat", fontWeight: 700 }}
                className="text-gray-700 font-bold text-center mt-auto"
              >
                {cat.category}
              </h4>
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
