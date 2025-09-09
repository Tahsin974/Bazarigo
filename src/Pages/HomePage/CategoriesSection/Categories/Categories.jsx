import { useEffect, useState } from "react";
import img1 from "../../../../assets/Catagory/Books & Stationery.webp";
import img2 from "../../../../assets/Catagory/Electronics.webp";
import img3 from "../../../../assets/Catagory/Fashion.webp";
import img4 from "../../../../assets/Catagory/Groceries.webp";
import img5 from "../../../../assets/Catagory/Health & Beauty.webp";
import img6 from "../../../../assets/Catagory/Home & Living.webp";
import img7 from "../../../../assets/Catagory/Sports & Outdoors.webp";
import img8 from "../../../../assets/Catagory/Toys & Kids.webp";
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
        category: "Books & Stationery",
        img: img1,
      },
      {
        id: 2,
        category: "Electronics",
        img: img2,
      },
      {
        id: 3,
        category: "Fashion",
        img: img3,
      },
      {
        id: 4,
        category: "Groceries",
        img: img4,
      },
      {
        id: 5,
        category: "Health & Beauty",
        img: img5,
      },
      {
        id: 6,
        category: "Home & Living",
        img: img6,
      },

      {
        id: 7,
        category: "Sports & Outdoors",
        img: img7,
      },
      {
        id: 8,
        category: "Toys & Kids",
        img: img8,
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
              className="flex flex-col items-center p-2 bg-white rounded-2xl  hover:shadow-md transition cursor-pointer  border border-gray-400 shadow-[#71c8f0]"
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
