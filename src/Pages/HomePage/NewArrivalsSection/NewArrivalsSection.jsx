import img1 from "../../../assets/Products/Himalaya Men Power Bright Licorice Face Wash 100 ml.jpg";
import img2 from "../../../assets/Products/Digital Print Three-Piece Pakistani Dress.jpg";
import img3 from "../../../assets/Products/Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt By Tamanna eExport.jpg";
import img4 from "../../../assets/Products/Tresemme Shampoo Keratin Smooth 580ml.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import NewProducts from "./NewProducts/NewProducts";

export default function NewArrivalsSection() {
  const productDetailsData = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 89999,

      description:
        "Experience the ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system.",
      features: [
        "256GB Storage",
        "Titanium Blue Color",
        "A17 Pro Chip for Superfast Performance",
        "48MP Triple Camera System",
        "iOS 17 with Enhanced Security",
      ],
      image: img1,
      rating: 4.9,
      reviews: 145,
      category: "Mobile Phones",
      availability: "In Stock",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 84999,
      description:
        "Samsung's flagship with massive storage, high refresh display, and pro camera features.",
      features: [
        "512GB Storage",
        "Phantom Black Color",
        "200MP Quad Camera System",
        "120Hz Dynamic AMOLED Display",
        "Fast Charging & Wireless Charging",
      ],
      image: img2,
      rating: 4.8,
      reviews: 98,
      category: "Mobile Phones",
      availability: "In Stock",
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 145000,

      description:
        "Ultra-slim MacBook Air with M2 chip for incredible speed and battery life.",
      features: [
        "16GB RAM, 512GB SSD",
        "M2 Chip for Ultra Performance",
        "13.6-inch Retina Display",
        "Lightweight Aluminum Body",
        "macOS Ventura pre-installed",
      ],
      image: img3,
      rating: 4.7,
      reviews: 60,
      category: "Laptops",
      availability: "In Stock",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      price: 34999,
      description:
        "Premium noise-canceling wireless headphones for ultimate sound quality.",
      features: [
        "Noise Cancellation Technology",
        "30-hour Battery Life",
        "Touch Sensor Controls",
        "High-Resolution Audio Support",
        "Comfortable Over-ear Design",
      ],
      image: img4,
      rating: 4.6,
      reviews: 85,
      category: "Headphones",
      availability: "In Stock",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 34999,
      description:
        "Premium noise-canceling wireless headphones for ultimate sound quality.",
      features: [
        "Noise Cancellation Technology",
        "30-hour Battery Life",
        "Touch Sensor Controls",
        "High-Resolution Audio Support",
        "Comfortable Over-ear Design",
      ],
      image: img4,
      rating: 4.6,
      reviews: 85,
      category: "Headphones",
      availability: "In Stock",
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      price: 34999,
      description:
        "Premium noise-canceling wireless headphones for ultimate sound quality.",
      features: [
        "Noise Cancellation Technology",
        "30-hour Battery Life",
        "Touch Sensor Controls",
        "High-Resolution Audio Support",
        "Comfortable Over-ear Design",
      ],
      image: img4,
      rating: 4.6,
      reviews: 85,
      category: "Headphones",
      availability: "In Stock",
    },
  ];
  return (
    <section className=" bg-white xl:px-12 lg:px-12 md:px-12 px-2 xl:py-12 lg:py-12 md:py-12 py-4 text-black h-[max-content] xl:mt-16 lg:mt-16 md:mt-15 sm:mt-14 mt-12 space-y-2">
      {/* Section Title */}

      <SectionTitle>New Arrivals</SectionTitle>

      {/* New Arrivals  Products */}
      <div>
        <NewProducts products={productDetailsData} />
      </div>
    </section>
  );
}
