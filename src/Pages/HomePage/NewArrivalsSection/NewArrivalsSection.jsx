import img from "../../../assets/Products/Radhuni Turmeric Powder & Chili Powder Combo Pack - 100gm Each.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import NewProducts from "./NewProducts/NewProducts";

export default function NewArrivalsSection() {
  const productDetailsData = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 89999,
      originalPrice: 105999,
      description:
        "Experience the ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system.",
      features: [
        "256GB Storage",
        "Titanium Blue Color",
        "A17 Pro Chip for Superfast Performance",
        "48MP Triple Camera System",
        "iOS 17 with Enhanced Security",
      ],
      image: img,
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
      image: img,
      rating: 4.8,
      reviews: 98,
      category: "Mobile Phones",
      availability: "In Stock",
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 145000,
      originalPrice: 165000,
      description:
        "Ultra-slim MacBook Air with M2 chip for incredible speed and battery life.",
      features: [
        "16GB RAM, 512GB SSD",
        "M2 Chip for Ultra Performance",
        "13.6-inch Retina Display",
        "Lightweight Aluminum Body",
        "macOS Ventura pre-installed",
      ],
      image: img,
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
      image: img,
      rating: 4.6,
      reviews: 85,
      category: "Headphones",
      availability: "In Stock",
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 48999,
      originalPrice: 54999,
      description:
        "Next-gen smartwatch with health tracking, notifications, and sleek design.",
      features: [
        "45mm Display",
        "GPS + Cellular Option",
        "Heart Rate Monitoring",
        "Water Resistant up to 50m",
        "watchOS 10 with Fitness Tracking",
      ],
      image: img,
      rating: 4.8,
      reviews: 40,
      category: "Smartwatches",
      availability: "In Stock",
    },
    {
      id: 6,
      name: "Dell XPS 15",
      price: 185000,
      originalPrice: 199000,
      description:
        "High-performance laptop with 4K display and powerful processor for professionals.",
      features: [
        "32GB RAM, 1TB SSD",
        "Intel Core i9 13th Gen",
        "15.6-inch 4K OLED Display",
        "NVIDIA RTX 4070 Graphics",
        "Windows 11 Pro",
      ],
      image: img,
      rating: 4.9,
      reviews: 52,
      category: "Laptops",
      availability: "In Stock",
    },
    {
      id: 7,
      name: "Canon EOS R6 Mark II",
      price: 210000,
      description:
        "Professional mirrorless camera with advanced autofocus and 4K video recording.",
      features: [
        "24.2MP Full-Frame Sensor",
        "4K 60fps Video",
        "Dual Pixel CMOS AF II",
        "In-Body Image Stabilization",
        "Weather-Sealed Body",
      ],
      image: img,
      rating: 4.8,
      reviews: 33,
      category: "Cameras",
      availability: "Limited Stock",
    },
    {
      id: 8,
      name: "Nintendo Switch OLED",
      price: 39999,
      originalPrice: 42999,
      description:
        "Versatile gaming console with enhanced OLED display and portable design.",
      features: [
        "7-inch OLED Display",
        "64GB Internal Storage",
        "Detachable Joy-Con Controllers",
        "Handheld & Docked Modes",
        "Wide Adjustable Stand",
      ],
      image: img,
      rating: 4.7,
      reviews: 120,
      category: "Gaming Consoles",
      availability: "In Stock",
    },
  ];
  return (
    <section className=" bg-white xl:px-12 lg:px-12 md:px-12 px-4 xl:py-12 lg:py-12 md:py-12 py-4 text-black h-[max-content] my-24 space-y-5">
      {/* Section Title */}

      <SectionTitle>New Arrivals</SectionTitle>

      {/* New Arrivals  Products */}
      <div>
        <NewProducts products={productDetailsData} />
      </div>
    </section>
  );
}
