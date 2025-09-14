import img1 from "../assets/Catagory/Books & Stationery.webp";
import img2 from "../assets/Catagory/Electronics.webp";
import img3 from "../assets/Catagory/Fashion.webp";
import img4 from "../assets/Catagory/Groceries.webp";
import img5 from "../assets/Catagory/Health & Beauty.webp";
import img6 from "../assets/Catagory/Home & Living.webp";
import img7 from "../assets/Catagory/Sports & Outdoors.webp";
import img8 from "../assets/Catagory/Toys & Kids.webp";

export const myCategories = [
  {
    id: 1,
    category: "Books & Stationery",
    img: img1,
    subcategories: [
      { name: "Books", count: 140 },
      { name: "Office Supplies", count: 88 },
      { name: "Art & Craft", count: 67 },
    ],
  },
  {
    id: 2,
    category: "Electronics",
    img: img2,
    subcategories: [
      { name: "Mobile Phones", count: 245 },
      { name: "Laptops & Computers", count: 189 },
      { name: "Cameras", count: 67 },
      { name: "Accessories", count: 203 },
    ],
  },
  {
    id: 3,
    category: "Fashion",
    img: img3,
    subcategories: [
      { name: "Men’s Clothing", count: 120 },
      { name: "Women’s Clothing", count: 140 },
      { name: "Shoes", count: 95 },
      { name: "Accessories", count: 88 },
    ],
  },
  {
    id: 4,
    category: "Groceries",
    img: img4,
    subcategories: [
      { name: "Food & Beverages", count: 200 },
      { name: "Snacks", count: 150 },
      { name: "Household Essentials", count: 130 },
    ],
  },
  {
    id: 5,
    category: "Home & Living",
    img: img6,
    subcategories: [
      { name: "Furniture", count: 76 },
      { name: "Kitchen & Dining", count: 112 },
      { name: "Home Decor", count: 98 },
      { name: "Bedding", count: 64 },
    ],
  },
  {
    id: 6,
    category: "Health & Beauty",
    img: img5,
    subcategories: [
      { name: "Skincare", count: 142 },
      { name: "Haircare", count: 85 },
      { name: "Personal Care", count: 97 },
      { name: "Fitness", count: 78 },
    ],
  },
  {
    id: 7,
    category: "Sports & Outdoors",
    img: img7,
    subcategories: [
      { name: "Exercise Equipment", count: 66 },
      { name: "Sportswear", count: 89 },
      { name: "Outdoor Gear", count: 54 },
    ],
  },
  {
    id: 8,
    category: "Toys & Kids",
    img: img8,
    subcategories: [
      { name: "Toys", count: 120 },
      { name: "Baby Products", count: 70 },
      { name: "Kids’ Clothing", count: 85 },
    ],
  },
];
