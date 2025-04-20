// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const IndianTravelDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Leh-Ladakh, Jammu & Kashmir",
      image: "https://vibrant.holiday/media_images/package/images/16793872850.jpg",
      description: "Land of high passes with breathtaking landscapes, crystal lakes, and Buddhist monasteries. Perfect for adventure seekers and nature lovers.",
      rating: 4.8,
      highlight: "Pangong Lake • Nubra Valley • Khardung La"
    },
    {
      id: 2,
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      description: "India's beach paradise with golden sands, vibrant nightlife, and Portuguese heritage. A perfect blend of relaxation and excitement.",
      rating: 4.6,
      highlight: "Palolem Beach • Fort Aguada • Basilica of Bom Jesus"
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      description: "Serene network of lagoons and lakes best experienced on a traditional houseboat. Lush greenery and tranquil waters define God's Own Country.",
      rating: 4.9,
      highlight: "Alleppey • Kumarakom • Vembanad Lake"
    },
    {
      id: 4,
      name: "Rajasthan",
      image: "https://th.bing.com/th/id/R.8f6f0a17183c46c2d1a138c85dc3722d?rik=2WxrFbraqwB8Wg&riu=http%3a%2f%2fwww.manahotels.in%2ftraveller%2fwp-content%2fuploads%2f2011%2f02%2fJodhpur.jpg&ehk=htw58F%2b%2bMRczO7b9U6boLi0zu%2bWMmYisqtm87iTG9mw%3d&risl=&pid=ImgRaw&r=0",
      description: "The land of kings with majestic forts, desert landscapes, and vibrant culture. Experience royal heritage and warm hospitality.",
      rating: 4.7,
      highlight: "Jaipur • Udaipur • Jaisalmer • Ranthambore"
    },
    {
      id: 5,
      name: "Varanasi, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
      description: "Spiritual capital of India on the banks of Ganges. Witness mesmerizing Ganga Aarti and ancient temples in the oldest living city.",
      rating: 4.5,
      highlight: "Dashashwamedh Ghat • Kashi Vishwanath • Sarnath"
    },
    {
      id: 6,
      name: "Andaman Islands",
      image: "https://travelogyindia.b-cdn.net/storage/app/upload/jolly-buoy-island-andaman.jpg",
      description: "Tropical paradise with pristine beaches, coral reefs, and colonial history. Perfect for diving, snorkeling, and beach relaxation.",
      rating: 4.8,
      highlight: "Radhanagar Beach • Cellular Jail • Havelock Island"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Explore Incredible India
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center gap-1 text-yellow-300">
                    <FaStar />
                    <span className="font-medium text-white">{destination.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{destination.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-medium">{destination.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
            View More Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndianTravelDestinations;