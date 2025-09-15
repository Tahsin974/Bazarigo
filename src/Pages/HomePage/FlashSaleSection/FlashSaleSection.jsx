import { useEffect, useState } from "react";
import "./FlashSaleSection.css";
export default function FlashSaleSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Check if we already saved a targetDate
    let savedTarget = localStorage.getItem("flashSaleEnd");
    let targetDate;

    if (savedTarget) {
      targetDate = new Date(savedTarget).getTime();
    } else {
      // Example: countdown runs for 1 day (24h) from first visit
      targetDate = new Date().getTime() + 48 * 60 * 60 * 1000;
      localStorage.setItem("flashSaleEnd", new Date(targetDate).toISOString());
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="flex justify-center items-center bgGradientRed text-white wrapper xl:my-16 lg:my-16 md:my-15 sm:my-14 my-12 xl:py-8 lg:py-8 md:py-6 py-3">
        <div className=" text-center">
          <div className="max-w-2xl px-0.5">
            <h1
              style={{ fontFamily: "Montserrat", fontWeight: 700 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold "
            >
              🔥 Flash Sale!
            </h1>
            <p
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
              className="xl:py-6 lg:py-6 md:py-5 sm:py-4 py-2 xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[14px] text-[12px] "
            >
              The Clock is Ticking! Don't miss out on these incredible savings.
              Our flash sale is on for a limited time—shop now before everything
              is gone.
            </p>
            <div
              className={
                "grid grid-cols-4 gap-4 text-center justify-items-center items-center xl:py-6 lg:py-6 md:py-5 sm:py-4 py-3 countdown-container mx-auto"
              }
            >
              <div className="flex flex-col xl:py-3 xl:px-5  lg:py-3 lg:px-5  md:py-2 md:px-3 py-1 px-2 bg-[#FFF5EE] rounded-box text-[#FF4C4C]">
                <span className="countdown font-mono text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                  <span
                    style={{ "--value": timeLeft.days }}
                    aria-label="0 days"
                  >
                    {timeLeft.days}
                  </span>
                </span>
                <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                  days
                </span>
              </div>
              <div className="flex flex-col xl:py-3 xl:px-5  lg:py-3 lg:px-5  md:py-2 md:px-3 py-1 px-2 bg-[#FFF5EE] rounded-box text-[#FF4C4C]">
                <span className="countdown font-mono text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                  <span
                    style={{ "--value": timeLeft.hours }}
                    aria-label="10 hours"
                  >
                    {timeLeft.hours}
                  </span>
                </span>
                <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                  hours
                </span>
              </div>
              <div className="flex flex-col xl:py-3 xl:px-5  lg:py-3 lg:px-5  md:py-2 md:px-3 py-1 px-2 bg-[#FFF5EE] rounded-box text-[#FF4C4C]">
                <span className="countdown font-mono text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                  <span
                    style={{ "--value": timeLeft.minutes }}
                    aria-label="24 minutes"
                  >
                    {timeLeft.minutes}
                  </span>
                </span>
                <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                  min
                </span>
              </div>
              <div className="flex flex-col xl:py-3 xl:px-5  lg:py-3 lg:px-5  md:py-2 md:px-3 py-1 px-2 bg-[#FFF5EE] rounded-box text-[#E62156]">
                <span className="countdown font-mono text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                  <span
                    style={{ "--value": timeLeft.seconds }}
                    aria-label="59 seconds"
                  >
                    {timeLeft.seconds}
                  </span>
                </span>
                <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                  sec
                </span>
              </div>
            </div>

            <button
              style={{ fontFamily: "Montserrat", fontWeight: 700 }}
              className="btn bg-[#FFF5EE] border-[#FFF5EE] hover:bg-[#FFF5EE] hover:border-[#FFF5EE]   btn-sm md:btn-md lg:btn-lg xl:btn-lg rounded-full text-[#E62156]"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
