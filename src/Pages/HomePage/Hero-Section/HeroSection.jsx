import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import "./HeroSection.css";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default function HeroSection() {
  return (
    <div >
      <Swiper
      spaceBetween={0}
      centeredSlides={true}
      speed={1200}
      effect={"fade"}
      
      autoplay={{
        delay: 3500,

        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="hero bg-gradient-red text-white h-[90vh] xl:py-16 lg:py-16 md:py-10 sm:py-8 py-4">
          <div className="hero-content text-center ">
            <div className="max-w-xl">
              <h4 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold py-8 move-up">👋</h4>
<h5 className="xl:text-5xl lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-bold">Welcome to Bazarigo</h5>
<h4 className="xl:text-2xl lg:text-2xl text-base sm:text-lg md:text-xl py-6">Your trusted marketplace for everything you love</h4>

              <div className="flex justify-center items-center gap-5 ">
                <button className="btn bg-[#FFF5EE] border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE]   btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full text-[#E62156]">
                  Shop Now
                </button>
                <button className="btn  border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE] btn-outline btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full hover:text-[#E62156]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero bg-gradient-blue text-white h-[90vh] xl:py-16 lg:py-16 md:py-10 sm:py-8 py-4">
          <div className="hero-content text-center ">
            <div className="max-w-xl ">
              <h4 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold py-8 move-up">🛒</h4>
<h5 className="xl:text-5xl lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-bold">Shop with Confidence</h5>
<h4 className="xl:text-2xl lg:text-2xl text-base sm:text-lg md:text-xl py-6">Secure shopping, fast delivery, easy returns</h4>

              <div className="flex justify-center items-center gap-5">
                <button className="btn bg-[#FFF5EE] border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE]   btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full  text-[#2d6fc2]">
                  Shop Now
                </button>
                <button className="btn  border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE] btn-outline btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full hover:text-[#2d6fc2]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero bg-gradient-green text-white h-[90vh] xl:py-16 lg:py-16 md:py-10 sm:py-8 py-4">
          <div className="hero-content text-center max-w-[1280px] mx-auto px-4">
            <div className="max-w-xl">
              <h4 className="xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold py-8 move-up">📦</h4>
<h5 className="xl:text-5xl lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-bold">Everything You Need</h5>
<h4 className="xl:text-2xl lg:text-2xl text-base sm:text-lg md:text-xl py-6">From groceries to gadgets — all in one place</h4>

              <div className="flex justify-center items-center gap-5">
                <button className="btn bg-[#FFF5EE] border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE]   btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full text-[#40AB4D]">
                  Shop Now
                </button>
                <button className="btn  border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE] btn-outline btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full hover:text-[#40AB4D]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
