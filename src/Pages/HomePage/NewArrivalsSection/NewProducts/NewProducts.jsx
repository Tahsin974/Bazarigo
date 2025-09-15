// Import Swiper styles
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./NewProducts.module.css";
import { TbCurrencyTaka } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";

export default function NewProducts({ products }) {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          speed={1200}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onTouchStart={(swiper) => swiper.autoplay.stop()} // pause on touch (mobile)
          onTouchEnd={(swiper) => swiper.autoplay.start()} // resume after touch release
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            380: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            580: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            918: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            920: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className={`mySwiper ${styles["my-swiper-wrapper"]}`}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className={`card cursor-pointer bg-white  shadow-lg rounded-lg overflow-hidden group p-1.5 border border-gray-400 m-0   ${styles["my-card"]}`}
              >
                <figure
                  className={`relative   ${styles["card-animation"]} overflow-hidden  rounded-lg `}
                >
                  <img
                    src={product.image}
                    alt="products"
                    className="rounded-lg "
                  />
                  <div
                    className={`absolute rounded-lg top-0 h-full w-full ${styles["product-Info"]}`}
                  >
                    <div className="card-body text-white ">
                      <h2
                        style={{ fontFamily: "Poppins", fontWeight: 500 }}
                        className="text-[clamp(14px,2vw,16px)] font-semibold  absolute bottom-14 left-2 w-[130px] truncate"
                      >
                        {product.name}
                      </h2>

                      <h5 className=" font-bold text-[clamp(14px,2vw,16.5px)] flex items-center absolute bottom-4.5 left-2">
                        <TbCurrencyTaka className="text-white" />{" "}
                        {product.price.toLocaleString("en-IN")}
                      </h5>
                      <div className="card-actions justify-end absolute bottom-4.5 right-1.5">
                        <HashLink to={`/product-details/${product.id}#`}>
                          <button
                            style={{
                              fontFamily: "Montserrat",
                              fontWeight: 700,
                            }}
                            className="btn btn-outline  border-[#8ad15f] text-[#8ad15f] hover:bg-[#8ad15f]/75 hover:text-white active:bg-[#8ad15f]/75 active:text-white btn-xs  shadow-none rounded-2xl"
                          >
                            Buy Now
                          </button>
                        </HashLink>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="flex justify-center mt-7">
          <button style={{ fontFamily: "Montserrat", fontWeight: 700 }} className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg">
            View All <BsArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  );
}
{
  /* <div>
        <div className="grid lg:grid-cols-4 gap-5 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-7">
          <button style={{ fontFamily: "Montserrat", fontWeight: 700 }} className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg">
            View All <BsArrowRight />
          </button>
        </div>
      </div> */
}
