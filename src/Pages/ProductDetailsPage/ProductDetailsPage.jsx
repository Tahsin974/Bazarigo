// import { useParams } from "react-router";
import ProductInfo from "./Product-Info/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";
import ProductTabs from "./ProductTabs/ProductTabs";
import PageTitle from "../../Components/PageTitle/PageTitle";

export default function ProductDetailsPage() {
  // const { productId } = useParams();
  return (
    <>
      <PageTitle>Product Details Page</PageTitle>
      <div className="min-h-screen bg-gray-50 xl:px-12 lg:px-12 md:px-12 px-2 xl:py-12 lg:py-12 md:py-12 py-4">
        <div className="container mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:p-6 lg:p-6 md:p-6 sm:p-5 p-3 bg-white rounded-3xl shadow">
            {/* Left - Images */}
            <ImageGallery />

            {/* Right - Info */}
            <ProductInfo />
          </div>

          {/* Tabs below */}
          <div className="xl:p-6 lg:p-6 md:p-6 sm:p-5 p-3 bg-white rounded-3xl shadow">
            <ProductTabs />
          </div>
        </div>
      </div>
    </>
  );
}
