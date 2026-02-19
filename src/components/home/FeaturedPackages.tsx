import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";

const packages = [
  {
    title: "Temple Explorer",
    duration: "3 Days",
    location: "Siem Reap",
    price: 299,
    description: "Discover the majestic temples of Angkor with expert guides.",
  },
  {
    title: "Island Paradise",
    duration: "5 Days",
    location: "Koh Rong & Koh Rong Samloem",
    price: 499,
    description: "Crystal waters, white sand beaches, and tropical sunsets.",
  },
  {
    title: "Cultural Journey",
    duration: "7 Days",
    location: "Phnom Penh, Battambang, Siem Reap",
    price: 799,
    description: "A complete immersion into Cambodia's rich heritage and history.",
  },
];

const FeaturedPackages = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
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
              className="glass rounded-2xl p-8 card-hover flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock size={14} className="text-primary" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={14} className="text-primary" />
                  {pkg.location}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                {pkg.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {pkg.description}
              </p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">From</span>
                  <p className="text-3xl font-serif font-bold text-primary">
                    ${pkg.price}
                  </p>
                </div>
                <Link to="/packages" className="btn-gold text-sm !px-6 !py-2">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
