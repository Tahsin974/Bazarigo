import Rating from "react-rating";
import "./ProductCard.css";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export default function ProductCard({ product }) {
  const { name, price, originalPrice, reviews, rating, image } = product;

  return (
    <div>
      <div className="card bg-[#f1f1f7]  hover:shadow-md hover:shadow-[#71c8f0]  p-2 h-[300px] overflow-hidden group">
        <figure className="overflow-hidden">
          <img
            src={image}
            alt="products"
            className=" w-auto h-[185px] rounded-lg  transform transition-transform duration-600 group-hover:scale-125 group-active:scale-125"
          />
        </figure>
        <div className="xl:px-1 lg:px-1 md:px-1 sm:px-1 pt-4 ">
          {/* Product Title */}
          <h2
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
            className="text-[14px]  xl:w-[165px] lg:w-[165px] md:w-[165px] w-[120px] truncate"
          >
            {name}
          </h2>

          {/* Price Section */}
          {originalPrice ? (
            <div className="flex items-center justify-between  max-w-[120px] mb-1 mt-2">
              <h4 className="bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] bg-clip-text text-transparent font-bold  text-[clamp(13px,2vw,14px)] flex items-center  ">
                <span>
                  <TbCurrencyTaka className="text-[#4679d8]" />
                </span>
                <span>{price.toLocaleString("en-IN")}</span>
              </h4>
              <h4 className="text-gray-400 line-through ml-3 flex items-center  text-[clamp(13px,2vw,14px)]  ">
                <span>
                  <TbCurrencyTaka />
                </span>
                <span>{originalPrice.toLocaleString("en-IN")}</span>
              </h4>
            </div>
          ) : (
            <div className="flex  items-center justify-between mb-1 mt-1">
              <div>
                <h4 className="bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] bg-clip-text text-transparent font-bold  text-[clamp(13px,2vw,14px)] flex items-center  ">
                  <span>
                    <TbCurrencyTaka className="text-[#4679d8] " />
                  </span>
                  <span>{price.toLocaleString("en-IN")}</span>
                </h4>
              </div>
            </div>
          )}

          {/* Ratings */}
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-0 gap-1 ">
              <div
                className="flex items-center
            "
              ></div>
              <Rating
                initialRating={rating}
                emptySymbol={
                  <IoIosStarOutline className="text-[#f1bb32] text-sm " />
                }
                fullSymbol={<IoIosStar className="text-[#f1bb32] text-sm " />}
                readonly
              />
              <span className="text-[12px] text-gray-600 mb-1">
                ({reviews})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
