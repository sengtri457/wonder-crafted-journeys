import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";

const packages = [
  {
    image: "https://images.unsplash.com/photo-1548291686-277ba5bb43f2?auto=format&fit=crop&q=80&w=800",
    title: "Temple Explorer",
    duration: "3 Days",
    location: "Siem Reap",
    price: 299,
    description: "Discover the majestic temples of Angkor with expert guides.",
  },
  {
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=800",
    title: "Island Paradise",
    duration: "5 Days",
    location: "Koh Rong",
    price: 499,
    description: "Crystal waters, white sand beaches, and tropical sunsets.",
  },
  {
    image: "https://images.unsplash.com/photo-1543160822-7baa5ba6b8ff?auto=format&fit=crop&q=80&w=800",
    title: "Cultural Journey",
    duration: "7 Days",
    location: "Phnom Penh",
    price: 799,
    description: "A complete immersion into Cambodia's rich heritage and history.",
  },
];

const FeaturedPackages = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-accent/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Our Packages
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Curated <span className="text-gradient-gold">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                   From ${pkg.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-accent/50 px-2 py-1 rounded">
                    <Clock size={12} className="text-primary" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-accent/50 px-2 py-1 rounded">
                    <MapPin size={12} className="text-primary" />
                    {pkg.location}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {pkg.description}
                </p>
                
                <Link 
                  to="/packages" 
                  className="w-full block text-center btn-outline-gold text-sm !py-2.5 hover:bg-primary hover:text-white"
                >
                  View Itinerary
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Link to="/packages" className="text-primary font-medium hover:underline underline-offset-4">
               View All Tour Packages →
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
