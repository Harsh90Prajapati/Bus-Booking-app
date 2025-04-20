// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const JourneyAssistance = () => {
  const features = [
    {
      icon: <img width="100" height="100" src="https://img.icons8.com/bubbles/100/bus.png" alt="bus"/>,
      title: "Booking a SmartBus",
      description: "Easy online booking with instant confirmation"
    },
    {
      icon: <img width="100" height="100" src="https://img.icons8.com/clouds/100/refund.png" alt="refund"/>,
      title: "100% Refund",
      description: "Cancel anytime with full refund policy"
    },
    {
      icon: <img width="100" height="100" src="https://img.icons8.com/clouds/100/ticket.png" alt="ticket"/>,
      title: "Boarding a SmartBus",
      description: "Hassle-free boarding process"
    },
    {
      icon: <img width="100" height="100" src="https://img.icons8.com/bubbles/100/driver.png" alt="driver"/>,
      title: "Boarding Crew",
      description: "Professional and helpful staff"
    },
    {
      icon: <img width="100" height="100" src="https://img.icons8.com/clouds/100/meeting-room.png" alt="meeting-room"/>,
      title: "AC Lounges",
      description: "Comfortable waiting areas"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          SmartBus <span className="text-blue-600">Assists You</span> at Every Step of Your Journey
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex justify-center mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyAssistance;