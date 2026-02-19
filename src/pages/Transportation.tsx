import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Car, Bus, Ship, Plane } from "lucide-react";

const options = [
  {
    icon: Car,
    title: "Private Car",
    desc: "Comfortable air-conditioned vehicles with experienced local drivers. Door-to-door service across Cambodia.",
    price: "From $45/day",
  },
  {
    icon: Bus,
    title: "Bus Service",
    desc: "Modern coaches connecting major cities. Wi-Fi and reclining seats available on premium routes.",
    price: "From $8/trip",
  },
  {
    icon: Ship,
    title: "Boat Transfer",
    desc: "Speed boats and ferries to islands and along the Tonle Sap. Scenic river cruises available.",
    price: "From $15/trip",
  },
  {
    icon: Plane,
    title: "Domestic Flight",
    desc: "Quick flights between Phnom Penh, Siem Reap, and Sihanoukville. Save time on longer distances.",
    price: "From $65/flight",
  },
];

const Transportation = () => {
  return (
    <Layout>
      <section className="pt-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Getting Around</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              <span className="text-gradient-gold">Transportation</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              We offer a range of comfortable and reliable transportation options to help you explore Cambodia with ease.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {options.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 card-hover flex gap-6"
              >
                <div className="w-16 h-16 shrink-0 rounded-xl gradient-gold-bg flex items-center justify-center">
                  <opt.icon size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{opt.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{opt.desc}</p>
                  <span className="text-primary font-semibold text-sm">{opt.price}</span>
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
