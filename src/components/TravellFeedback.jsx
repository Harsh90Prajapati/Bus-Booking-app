// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TravelerFeedback = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I had to attend my friend's wedding in Lucknow and all the trains were full but IntoCity SmartBus saved me. I got my ticket at the last minute and reached my destination on time. It was a great ride and my journey was very comfortable.",
      author: "Parth Gupta",
      rating: 5,
    },
    {
      id: 2,
      quote: "I live in Delhi but my hometown is Lucknow. Whenever I go there, my parents are always worried about my safety while I am on the way but IntoCity SmartBus ensured my safety with 24/7 CCTV & GPS tracking. Thank you, guys.",
      author: "Gaurav",
      rating: 5,
    },
    {
      id: 3,
      quote: "Whenever I travel, the thought of stinky public toilets on the road haunts me but thanks to IntoCity SmartBus with attached clean toilets. It made my journey even more comfortable.",
      author: "Kanika",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800"
        >
          Travellers Feedback
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100"
            >
              <div className="p-6">
                <div className="flex justify-center text-blue-400 mb-4">
                  <FaQuoteLeft className="text-3xl opacity-70" />
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-blue-50 pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-blue-800">{testimonial.author}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-32 h-1 bg-blue-300 mx-auto my-12"
        />

        {/* Additional Rating Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={`summary-${testimonial.id}`}
              className="bg-white rounded-lg px-6 py-4 shadow-md flex items-center gap-3"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-blue-800">{testimonial.author}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TravelerFeedback;