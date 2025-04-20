import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCopy, FaArrowRight } from "react-icons/fa";

const OffersSlider = () => {
  const offers = [
    {
      title: "Diskretty amedios | Showcase",
      description: "Get upto ₹200 Cashback Using MobilKwik Wallet",
      cta: "Block Now",
      highlight: "₹200 Cashback",
      validity: "",
      code: "",
    },
    {
      title: "Upto Rs.200 Cashback using MobilKwik wallet",
      description: "Get upto Rs.200 Cashback using MobilKwik wallet",
      cta: "",
      highlight: "",
      validity: "Valid Upto 30 Jun",
      code: "",
    },
    {
      title: "Code: SMART | 10% off upto Rs.50",
      description: "Use Coupon Code: SMART",
      cta: "Copy coupon code",
      highlight: "10% off",
      validity: "Valid Upto 31 Dec",
      code: "SMART",
    },
    {
      title: "Save 10% Off",
      description: "upto ₹200 callout Trip with Standard Swings Card",
      cta: "Buy Now",
      highlight: "10% Off",
      validity: "",
      code: "",
    },
    {
      title: "Upto ₹200 off on each trip with Savings Card",
      description: "Get Upto Rs.200 off with our Savings Card",
      cta: "",
      highlight: "",
      validity: "Valid Upto 1 Jan",
      code: "",
    },
    {
      title: "Exclusive Offer For First Time Users",
      description: "10% OFF UP TO ₹150 CLUB MILES",
      cta: "",
      highlight: "10% OFF",
      validity: "",
      code: "WELCOME",
    },
  ];

  const sliderRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: sliderRef,
  });

  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section className="bg-gray-50 py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-2"
        >
          Offers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 text-center mb-8"
        >
          Grab best offers for easy bus ticket booking
        </motion.p>

        <div className="relative">
          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="overflow-x-auto pb-6 hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <motion.div
              style={{ x }}
              className="flex gap-6 w-[200%] px-4"
            >
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  
                  className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all flex-shrink-0"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                    {offer.highlight && (
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded mb-2">
                        {offer.highlight}
                      </span>
                    )}
                    <p className="text-gray-600 mb-4 flex-grow">{offer.description}</p>
                    
                    <div className="mt-auto">
                      {offer.validity && (
                        <p className="text-sm text-gray-500 mb-2">{offer.validity}</p>
                      )}
                      {offer.code && (
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                            {offer.code}
                          </span>
                          <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                            <FaCopy className="mr-1" /> Copy
                          </button>
                        </div>
                      )}
                      {offer.cta && (
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2">
                          {offer.cta} <FaArrowRight />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style> */}
    </section>
  );
};

export default OffersSlider;