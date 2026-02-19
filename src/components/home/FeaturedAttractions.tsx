import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import angkorWat from "@/assets/angkor-wat.jpg";
import kohRong from "@/assets/koh-rong.jpg";
import royalPalace from "@/assets/royal-palace.jpg";
import kampot from "@/assets/kampot.jpg";

const attractions = [
  { name: "Angkor Wat", location: "Siem Reap", image: angkorWat, category: "Temples" },
  { name: "Koh Rong", location: "Sihanoukville", image: kohRong, category: "Islands" },
  { name: "Royal Palace", location: "Phnom Penh", image: royalPalace, category: "Cities" },
  { name: "Kampot", location: "Southern Cambodia", image: kampot, category: "Nature" },
];

const FeaturedAttractions = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Top Destinations
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Featured <span className="text-gradient-gold">Attractions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden card-hover aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-primary tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground mt-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/attractions" className="btn-outline-gold inline-block">
            View All Attractions
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAttractions;
