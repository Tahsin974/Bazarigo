import Reviews from "./Reviews";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function ProductTabs() {
  return (
    <div className="my-4 text-black">
      <TabGroup>
        <TabList className="flex gap-4 border-b border-gray-400 text-blue-600">
          <Tab className=" px-3 py-1 text-sm/6 font-semibold   focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:border-b-2 data-selected:data-hover:border-b-2">
            Description
          </Tab>
          <Tab className="  px-3 py-1 text-sm/6 font-semibold   focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:border-b-2 data-selected:data-hover:border-b-2">
            Details
          </Tab>
          <Tab className=" px-3 py-1 text-sm/6 font-semibold   focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:border-b-2 data-selected:data-hover:border-b-2">
            Reviews
          </Tab>
        </TabList>
        <TabPanels className="mt-6  ">
          <TabPanel className="rounded-xl bg-white/5 mt-3">
            <div style={{ fontFamily: "Roboto", fontWeight: 400 }}>
              <p className="mb-3">
                This{" "}
                <span className="font-semibold">premium cotton hoodie</span>
                is designed for everyday comfort while maintaining a modern,
                streetwear-inspired style. Crafted with soft, breathable cotton,
                it ensures warmth without sacrificing breathability.
              </p>
              <p className="mb-3">
                The hoodie features a{" "}
                <span className="font-semibold">relaxed fit</span>, making it
                perfect for layering during cooler months or wearing on its own
                in mild weather. Whether you're lounging at home, heading to the
                gym, or going out with friends, this hoodie is versatile enough
                for any occasion.
              </p>
              <p>
                With reinforced stitching and premium fabric quality, this
                hoodie is built to last, keeping its shape and softness even
                after multiple washes.
              </p>
            </div>
          </TabPanel>
          <TabPanel className="mt-3">
            <ul
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
              className="list-disc ml-5 text-gray-700 space-y-2"
            >
              <li>
                <strong>Material:</strong> 100% soft combed cotton
              </li>
              <li>
                <strong>Fit:</strong> Relaxed unisex fit for all-day comfort
              </li>
              <li>
                <strong>Sizes:</strong> Available in S, M, L, XL
              </li>
              <li>
                <strong>Colors:</strong> Black, White, Navy, Gray
              </li>
              <li>
                <strong>Care:</strong> Machine washable (cold wash recommended)
              </li>
              <li>
                <strong>Features:</strong> Adjustable drawstring hood, spacious
                front kangaroo pocket, and ribbed cuffs & hem
              </li>
              <li>
                <strong>Durability:</strong> Reinforced seams for long-lasting
                wear
              </li>
              <li>
                <strong>Season:</strong> Ideal for spring, autumn, and winter
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="mt-3">
            <Reviews />
          </TabPanel>
        </TabPanels>
      </TabGroup>
      {/* Tab Headers */}
      {/* <div className="flex gap-6 border-b pb-2">
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
      </div> */}

      {/* Tab Content */}
      {/* <div className="mt-5">
        {activeTab === "description" && (
          <div style={{ fontFamily: "Roboto", fontWeight: 400 }}>
            <p className="mb-3">
              This <span className="font-semibold">premium cotton hoodie</span>
              is designed for everyday comfort while maintaining a modern,
              streetwear-inspired style. Crafted with soft, breathable cotton,
              it ensures warmth without sacrificing breathability.
            </p>
            <p className="mb-3">
              The hoodie features a{" "}
              <span className="font-semibold">relaxed fit</span>, making it
              perfect for layering during cooler months or wearing on its own in
              mild weather. Whether you're lounging at home, heading to the gym,
              or going out with friends, this hoodie is versatile enough for any
              occasion.
            </p>
            <p>
              With reinforced stitching and premium fabric quality, this hoodie
              is built to last, keeping its shape and softness even after
              multiple washes.
            </p>
          </div>
        )}
        {activeTab === "details" && (
          <ul
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="list-disc ml-5 text-gray-700 space-y-2"
          >
            <li>
              <strong>Material:</strong> 100% soft combed cotton
            </li>
            <li>
              <strong>Fit:</strong> Relaxed unisex fit for all-day comfort
            </li>
            <li>
              <strong>Sizes:</strong> Available in S, M, L, XL
            </li>
            <li>
              <strong>Colors:</strong> Black, White, Navy, Gray
            </li>
            <li>
              <strong>Care:</strong> Machine washable (cold wash recommended)
            </li>
            <li>
              <strong>Features:</strong> Adjustable drawstring hood, spacious
              front kangaroo pocket, and ribbed cuffs & hem
            </li>
            <li>
              <strong>Durability:</strong> Reinforced seams for long-lasting
              wear
            </li>
            <li>
              <strong>Season:</strong> Ideal for spring, autumn, and winter
            </li>
          </ul>
        )}
        {activeTab === "reviews" && <Reviews />}
      </div> */}
    </div>
  );
}
