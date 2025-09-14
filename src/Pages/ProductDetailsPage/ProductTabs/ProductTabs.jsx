import { useState } from "react";
import Reviews from "./Reviews";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10">
      {/* Tab Headers */}
      <div className="flex gap-6 border-b pb-2">
        {["description", "details", "reviews"].map((tab) => (
          <button
            key={tab}
            className={`capitalize pb-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        {activeTab === "description" && (
          <p>
            This premium cotton hoodie is crafted with high-quality materials,
            offering both comfort and durability.
          </p>
        )}
        {activeTab === "details" && (
          <ul className="list-disc ml-5 text-gray-700">
            <li>100% Cotton</li>
            <li>Available in 4 sizes</li>
            <li>Machine washable</li>
          </ul>
        )}
        {activeTab === "reviews" && <Reviews />}
      </div>
    </div>
  );
}
