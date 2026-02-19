import Layout from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { attractions } from "@/data/attractions";

const categories = ["All", "Temples", "Islands", "Nature", "Cities"];

const Attractions = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = filter === "All" ? attractions : attractions.filter((a) => a.category === filter);

  return (
    <Layout>
      <section className="pt-32 pb-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Explore</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Attraction <span className="text-gradient-gold">Sites</span>
            </h1>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat ? "gradient-gold-bg text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative aspect-square overflow-hidden shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 leading-tight">
                    {item.name}
                  </h3>
                  
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 line-clamp-4 font-light">
                    {item.desc}
                  </p>
                  
                  <div>
                    <Link 
                      to={`/attractions/${item.id}`} 
                      className="inline-block px-8 py-3 border border-white/80 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Attractions;
