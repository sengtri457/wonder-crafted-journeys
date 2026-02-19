import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-angkor.jpg";
const transportations = [
  {
    id: 1,
    title: "Vintage Jeep (1979 Land Rover)",
    description: "This is a 1979 Land Rover, has been restored to fit with all the road conditions, with 4 wheels drive, for the adventure trip to the remote temples such as to Phnom Kulen, Koh Ker, Preah Khan Kampong Svay and to Preah Vihear Temples. This vehicle is restored to fit with the off road and real adventure in all seasons – Rainy & Dry season with can be adjusted roof cover depend on the weather. It is really unique transportation in Siem Reap Angkor. It is a natural air-conditioning. For the rental fee will cost depend on near or far destination. Experience this unique transportation you will have a lot of fun.",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=1000",
    imageRight: false, 
  },
  {
    id: 2,
    title: "Remork Moto (Tuk Tuk)",
    description: "This one is another unique transportation known to the local people as \"Remork Moto\", means a Motor Rickshaw or known by the tourist as \"Tuk Tuk\", It is the most popular transportation for Cambodian people using for carrying their family from one place to others. As you know for Cambodian people have big family and can not put all of their children in one Motor scooter that why they need to have another extra cart at the back which loaded from 5 to 10 people. For you recommend to sit for two in one. It is also very popular to the tourists. You should experience this one as well.",
    image: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&q=80&w=1000", 
    imageRight: true,
  },
  {
    id: 3, 
    title: "Taxi (Camry)",
    description: "Air-conditioned Toyota Camry, comfortable for up to 4 passengers. Available for airport transfers, city tours, and long-distance travel to other provinces. Our drivers are experienced, friendly, and knowledgeable about the routes.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000", // Generic car image
    imageRight: false,
  },
  {
    id: 4,
    title: "Mini Van (12-15 Seats)",
    description: "Perfect for small groups or families. Our 12-15 seater vans are modern, air-conditioned, and spacious. Includes a professional driver to ensure your safety and comfort during your journey throughout Cambodia.",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=1000", // Generic van image
    imageRight: true,
  }
];

const Transportation = () => {
  return (
    <Layout>
      {/* Banner Image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src={heroImage} 
          alt="Angkor Wat Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#b45309] uppercase tracking-wide leading-tight px-4">
              CAMBODIA TRANSPORTATION SERVICE & CAMBODIA TOURIST GUIDE ASSOCIATION
            </h1>
            <p className="text-foreground/80 font-medium text-lg md:text-xl">
              Your choices to Explore Cambodia with different types of Transportation
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {transportations.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${item.imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-lg shadow-xl border-4 border-white">
                     <img 
                       src={item.image} 
                       alt={item.title} 
                       className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-[#b45309] mb-4 hidden md:block">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-loose text-justify md:text-left">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transportation;
