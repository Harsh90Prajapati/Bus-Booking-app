// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaStar, FaGooglePlay, FaApple } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";

const AppDownloadSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-300 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Main container with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-blue-800"
            >
              ENJOY THE APP!
            </motion.h2>

            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="space-y-3 mb-8 text-lg"
            >
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center justify-center lg:justify-start gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Quick access
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center justify-center lg:justify-start gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Superior live tracking
              </motion.li>
            </motion.ul>

            {/* Ratings */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaStar className="text-yellow-400" />
                <span className="font-bold">4.5</span>
                <span className="text-sm text-gray-500">50M+ downloads</span>
                <FaGooglePlay className="text-blue-600 ml-2" />
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaStar className="text-yellow-400" />
                <span className="font-bold">4.6</span>
                <span className="text-sm text-gray-500">50M+ downloads</span>
                <SiAppstore className="text-blue-600 ml-2" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - QR Code Placeholder */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex-1 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-4 rounded-xl shadow-lg mb-6"
            >
              <div className="w-48 h-48 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">
                [QR Code]
              </div>
            </motion.div>
            <p className="text-gray-600 mb-4">Scan to download</p>
            <p className="text-blue-800 font-medium mb-6">Download the App on</p>

            {/* Download buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaApple className="text-xl" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownloadSection;