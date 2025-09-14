import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import img1 from "../../../assets/Hero-Section/Fashion.webp";
import img2 from "../../../assets/Hero-Section/Health & Beauty.webp";
import img3 from "../../../assets/Hero-Section/Home & Living.webp";
import img4 from "../../../assets/Hero-Section/Electronics.webp";
import img5 from "../../../assets/Hero-Section/Groceries.webp";
import img6 from "../../../assets/Hero-Section/Sports & Outdoors.webp";
import img7 from "../../../assets/Hero-Section/Electronics 2.webp";
import img8 from "../../../assets/Hero-Section/Fashion 2.webp";
import img9 from "../../../assets/Hero-Section/Health & Beauty 2.webp";
import img10 from "../../../assets/Hero-Section/Toys & Kids.webp";

import styles from "./HeroSection.module.css";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default function HeroSection() {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={1200}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className={styles.mySwiper} // scoped class
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img1} className="h-full w-full" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img2} className="h-full w-full" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img3} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img4} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img5} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 6 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img6} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 7 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img7} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 8 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img8} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 9 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img9} className="h-full w-full" />
          </div>
        </SwiperSlide>
        {/* Slide 10 */}
        <SwiperSlide>
          <div className={`${styles["image-wrapper"]} w-full`}>
            <img src={img10} className="h-full w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
