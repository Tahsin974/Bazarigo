import { useState } from "react";
import img1 from "../../../assets/Products/BAJEAL T350 Luminous USB Keyboard & Mouse Set Computer Gaming Mechanical Feel Floating Rainbow Backli.jpg";
import img2 from "../../../assets/Products/Chocolate High Quality Artificial Leather Wallet For Men - Wallet.jpg";
import img3 from "../../../assets/Products/Himalaya Men Power Bright Licorice Face Wash 100 ml.jpg";

const images = [img1, img2, img3];

export default function ImageGallery() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img
        src={mainImage}
        alt="Product"
        className="w-full h-auto rounded-xl shadow-md"
      />
      <div className="flex space-x-3 mt-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Thumbnail"
            className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
              mainImage === img ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
