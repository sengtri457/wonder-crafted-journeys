import Layout from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import angkorWat from "@/assets/angkor-wat.jpg";
import kohRong from "@/assets/koh-rong.jpg";
import royalPalace from "@/assets/royal-palace.jpg";
import kampot from "@/assets/kampot.jpg";

const categories = ["All", "Temples", "Islands", "Nature", "Cities"];

const allAttractions = [
  { name: "Angkor Wat", location: "Siem Reap", category: "Temples", image: angkorWat, desc: "The world's largest religious monument and Cambodia's crown jewel." },
  { name: "Koh Rong", location: "Sihanoukville", category: "Islands", image: kohRong, desc: "Pristine beaches and crystal-clear waters in the Gulf of Thailand." },
  { name: "Royal Palace", location: "Phnom Penh", category: "Cities", image: royalPalace, desc: "A stunning complex of buildings serving as the royal residence." },
  { name: "Kampot", location: "Southern Cambodia", category: "Nature", image: kampot, desc: "Riverside charm, pepper plantations, and Bokor National Park." },
  { name: "Bayon Temple", location: "Siem Reap", category: "Temples", image: angkorWat, desc: "Famous for its serene stone faces carved into massive towers." },
  { name: "Koh Rong Samloem", location: "Sihanoukville", category: "Islands", image: kohRong, desc: "A quieter island paradise with bioluminescent plankton." },
  { name: "Battambang", location: "Northwest Cambodia", category: "Cities", image: royalPalace, desc: "Colonial architecture, bamboo trains, and artistic heritage." },
  { name: "Cardamom Mountains", location: "Southwest Cambodia", category: "Nature", image: kampot, desc: "One of Southeast Asia's largest and most pristine rainforests." },
];

const Attractions = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = filter === "All" ? allAttractions : allAttractions.filter((a) => a.category === filter);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary tracking-wider uppercase">{item.category}</span>
                  <h3 className="text-lg font-serif font-bold text-foreground mt-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{item.desc}</p>
                  <button className="mt-4 text-sm text-primary font-medium hover-gold">
                    Learn More →
                  </button>
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
