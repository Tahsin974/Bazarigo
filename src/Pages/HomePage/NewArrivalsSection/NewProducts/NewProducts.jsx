// Import Swiper styles
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./NewProducts.module.css";

export default function NewProducts({ products }) {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          speed={1200}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            580: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className={`mySwiper ${styles["my-swiper-wrapper"]}`}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card cursor-pointer bg-white max-w-96  shadow-lg rounded-lg">
                <figure className={`relative ${styles["card-animation"]}`}>
                  <img
                    src={product.image}
                    alt="products"
                    className="rounded-lg"
                  />
                  <div
                    className={`absolute rounded-lg top-0 h-full w-full ${styles["product-Info"]}`}
                  >
                    <div className="card-body text-white ">
                      <h2
                        style={{ fontFamily: "Poppins", fontWeight: 500 }}
                        className="card-title"
                      >
                        {product.name}
                      </h2>
                      <p style={{ fontFamily: "Roboto", fontWeight: 400 }}>
                        {product.description}
                      </p>
                      <div className="card-actions justify-end absolute bottom-3 right-3">
                        <button
                          style={{ fontFamily: "Montserrat", fontWeight: 700 }}
                          className="btn btn-primary"
                        >
                          Buy Now
                        </button>
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
