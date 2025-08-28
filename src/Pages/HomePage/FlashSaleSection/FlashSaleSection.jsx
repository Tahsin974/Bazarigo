export default function FlashSaleSection() {
  return (
    <div>
      <div className="hero bg-[#c12972] text-white h-[80vh] ">
        <div className="hero-content text-center">
          <div className="max-w-md ">
            <h1 className="text-5xl font-bold">🔥 Flash Sale!</h1>
            <p className="py-6 ">
              Limited time offers up to{" "}
              <span className="font-bold text-[#E62156]">70% OFF</span> on top
              products! Don’t miss the best deals of the season — only valid for
              the next 24 hours.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center justify-items-center items-center py-8 max-w-sm mx-auto">
              <div className="flex flex-col py-3 px-5 bg-[#FFF5EE] rounded-box text-[#E62156]">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }} aria-label="10 hours">
                    10
                  </span>
                </span>
                hours
              </div>
              <div className="flex flex-col py-3 px-5 bg-[#FFF5EE] rounded-box text-[#E62156]">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }} aria-label="24 minutes">
                    24
                  </span>
                </span>
                min
              </div>
              <div className="flex flex-col py-3 px-5 bg-[#FFF5EE] rounded-box text-[#E62156]">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 59 }} aria-label="59 seconds">
                    59
                  </span>
                </span>
                sec
              </div>
            </div>

            <button className="btn bg-[#FFF5EE] border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE]   btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full text-[#E62156]">
              Shop Flash Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
