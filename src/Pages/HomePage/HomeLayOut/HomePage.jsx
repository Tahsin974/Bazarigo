import FeatureProductsSection from "../FeatureProductsSection/FeatureProductsSection";
import FlashSaleSection from "../FlashSaleSection/FlashSaleSection";
import HeroSection from "../Hero-Section/HeroSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeatureProductsSection />
      <FlashSaleSection />
    </div>
  );
}
