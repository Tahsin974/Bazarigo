import FeaturedProductsSection from "../FeaturedProductsSection/FeaturedProductsSection";
import FlashSaleSection from "../FlashSaleSection/FlashSaleSection";
import HeroSection from "../Hero-Section/HeroSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProductsSection />
      <FlashSaleSection />
    </div>
  );
}
