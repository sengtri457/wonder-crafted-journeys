import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
    title: "Expert Local Guides",
    description: "Our certified Cambodian guides bring authentic stories and deep cultural knowledge to every tour.",
  },
  {
    image: "https://images.unsplash.com/photo-1544642050-7f28784d845e?auto=format&fit=crop&q=80&w=800",
    title: "Safe & Reliable",
    description: "Fully insured trips with 24/7 support. Your safety and comfort are our top priorities.",
  },
  {
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
    title: "Authentic Experiences",
    description: "Go beyond tourist spots. Connect with local communities and traditions firsthand.",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    title: "Premium Service",
    description: "From luxury transport to handpicked accommodations, experience Cambodia in style.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Travel with <span className="text-gradient-gold">Confidence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl h-80 shadow-lg cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:via-black/50" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-center">
                 <h3 className="text-xl font-serif font-bold text-white mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {feature.title}
                 </h3>
                 <p className="text-sm text-white/80 leading-relaxed opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {feature.description}
                 </p>
              </div>
              
              {/* Border accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
