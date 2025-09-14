import { useParams } from "react-router";
import ProductInfo from "./Product-Info/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import ProductTabs from "./ProductTabs/ProductTabs";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Images */}
          <ImageGallery />

          {/* Right - Info */}
          <ProductInfo />
        </div>

        {/* Tabs below */}
        <ProductTabs />
      </div>
    </div>
  );
}
