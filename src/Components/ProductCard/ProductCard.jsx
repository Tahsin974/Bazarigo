import Rating from "react-rating";
import "./ProductCard.css";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
export default function ProductCard({ product }) {
  const { name, price, originalPrice, reviews, rating, image } = product;

  return (
    <div>
      <div className="card bg-[#f1f1f7] max-w-96 hover:shadow-lg  p-2 h-[300px]">
        <figure>
          <img
            src={image}
            alt="products"
            className=" w-auto rounded-lg h-[185px]"
          />
        </figure>
        <div className="px-1 pt-4 ">
          {/* Product Title */}
          <h2
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
            className="text-[14px] font-semibold w-[165px] truncate"
          >
            {name}
          </h2>

          {/* Price Section */}
          {originalPrice ? (
            <div className="flex items-center justify-between  w-[150px] mb-1 mt-1">
              <span className="bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] bg-clip-text text-transparent font-bold text-base flex items-center">
                <TbCurrencyTaka className="text-[#4679d8]" />{" "}
                {price.toLocaleString("en-IN")}
              </span>
              <span className="text-gray-400 line-through ml-2 flex items-center text-base">
                <TbCurrencyTaka /> {originalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-1 mt-1">
              <div>
                <span className="bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] bg-clip-text text-transparent font-bold text-base flex items-center">
                  <TbCurrencyTaka className="text-[#4679d8]" />{" "}
                  {price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          )}

          {/* Ratings */}
          <div className="flex items-center  gap-1 ">
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
            <span className="text-[14px] text-gray-600 mb-1">({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
