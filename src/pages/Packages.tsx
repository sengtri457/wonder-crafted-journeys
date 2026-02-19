import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Check, X } from "lucide-react";

const packages = [
  {
    title: "Temple Explorer",
    duration: "3 Days / 2 Nights",
    location: "Siem Reap",
    price: 299,
    description: "Discover the majestic temples of Angkor with expert guides. Visit Angkor Wat, Bayon, Ta Prohm, and hidden gems.",
    included: ["Hotel accommodation", "Professional guide", "Temple passes", "Breakfast daily", "Airport transfer"],
    notIncluded: ["International flights", "Travel insurance", "Personal expenses"],
  },
  {
    title: "Island Paradise",
    duration: "5 Days / 4 Nights",
    location: "Koh Rong & Koh Rong Samloem",
    price: 499,
    popular: true,
    description: "Crystal waters, white sand beaches, and tropical sunsets. Snorkeling, diving, and island hopping included.",
    included: ["Beach resort stay", "Ferry transfers", "Snorkeling gear", "Island hopping tour", "Meals included"],
    notIncluded: ["Scuba diving certification", "Spa treatments", "International flights"],
  },
  {
    title: "Cultural Journey",
    duration: "7 Days / 6 Nights",
    location: "Phnom Penh → Battambang → Siem Reap",
    price: 799,
    description: "A complete immersion into Cambodia's rich heritage. Museums, temples, local villages, and culinary experiences.",
    included: ["All accommodations", "Domestic transport", "All meals", "Expert guides", "Cooking class", "Village visit"],
    notIncluded: ["International flights", "Travel insurance", "Souvenirs"],
  },
];

const Packages = () => {
  return (
    <Layout>
      <section className="pt-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Tour Packages</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Choose Your <span className="text-gradient-gold">Adventure</span>
            </h1>
          </motion.div>

          <div className="space-y-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`glass rounded-2xl p-8 md:p-10 card-hover relative overflow-hidden ${pkg.popular ? "border-primary/30" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 gradient-gold-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock size={14} className="text-primary" /> {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={14} className="text-primary" /> {pkg.location}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">{pkg.title}</h3>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Included</h4>
                        <ul className="space-y-2">
                          {pkg.included.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check size={14} className="text-primary shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Not Included</h4>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <X size={14} className="text-destructive shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center md:border-l md:border-border/30 md:pl-8">
                    <span className="text-sm text-muted-foreground">From</span>
                    <p className="text-5xl font-serif font-bold text-gradient-gold my-2">${pkg.price}</p>
                    <span className="text-xs text-muted-foreground mb-6">per person</span>
                    <Link to="/contact" className="btn-gold w-full text-center">Book Now</Link>
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

export default Packages;
