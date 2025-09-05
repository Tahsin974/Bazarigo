import { TbShoppingBag } from "react-icons/tb";

export default function SectionTitle({ children }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl  bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] bg-clip-text text-transparent font-bold relative inline-block pb-4">
        {children}
        {/* Underline with Icon */}
        <span className="block max-w-xs h-[4px] bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] mx-auto relative mt-7">
          <span
            className="absolute -top-5 left-1/2 -translate-x-1/2 p-[2px] rounded-full 
  bg-gradient-to-r from-[#4cc0ff] to-[#4679d8] flex items-center justify-center shadow-md"
          >
            <span className="bg-white rounded-full flex items-center justify-center p-2">
              <TbShoppingBag className="text-[#4679d8] text-3xl" />
            </span>
          </span>
        </span>
      </h1>
    </div>
  );
}
