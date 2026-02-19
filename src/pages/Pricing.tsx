import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Explorer",
    price: 49,
    period: "per day",
    features: ["Basic accommodation", "Shared transport", "English guide", "Entry tickets", "Breakfast included"],
  },
  {
    name: "Adventure",
    price: 89,
    period: "per day",
    popular: true,
    features: ["3-star hotel", "Private car", "Expert guide", "All entry tickets", "Full meals", "24/7 support"],
  },
  {
    name: "Luxury",
    price: 179,
    period: "per day",
    features: ["5-star resort", "Luxury SUV", "VIP guide", "All access pass", "Fine dining", "Spa included", "Concierge"],
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="pt-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Price & <span className="text-gradient-gold">Tariff</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the tier that matches your travel style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`glass rounded-2xl p-8 card-hover relative flex flex-col ${tier.popular ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-gold-bg text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-serif font-bold text-gradient-gold">${tier.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">{tier.period}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular ? "btn-gold" : "btn-outline-gold"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
