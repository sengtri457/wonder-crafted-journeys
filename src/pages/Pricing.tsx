
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Info, Globe } from "lucide-react";

interface Surcharge {
  location: string;
  price: string;
}

interface PriceCardProps {
  title: string;
  basePrice: string;
  surcharges: Surcharge[];
  delay: number;
}

const PriceCard = ({ title, basePrice, surcharges, delay }: PriceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-card glass rounded-xl overflow-hidden shadow-lg border border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Header */}
      <div className="bg-primary/5 p-6 border-b border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
           <Globe size={64} />
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2 relatie z-10">
          {title}
        </h3>
        <div className="flex items-baseline gap-2 mt-4 relative z-10">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Base Rate:</span>
          <span className="text-3xl font-serif font-bold text-gradient-gold">
            {basePrice}
          </span>
          <span className="text-sm text-muted-foreground">/ day</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2 italic flex items-center gap-1.5 relative z-10">
          <Info size={12} />
          includes Angkor Area & City Tour
        </p>
      </div>

      {/* Surcharges Body */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground/80 uppercase tracking-widest">
           <MapPin size={14} className="text-primary" />
           Remote Area Surcharges
        </div>
        
        <ul className="space-y-3">
          {surcharges.map((item, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center text-sm group/item hover:bg-primary/5 p-2 rounded transition-colors border-b border-border/40 last:border-0"
            >
              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors line-clamp-1 text-left mr-4">
                {item.location}
              </span>
              <span className="font-semibold text-primary whitespace-nowrap">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-6">
           <p className="text-xs text-center text-muted-foreground/70 italic">
             * Prices subject to change during public holidays
           </p>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const commonSurcharges = [
    { location: "Kbal Spean Run Linga Stream", price: "$15" },
    { location: "Phnom Kulen Run Linga Stream", price: "$15" },
    { location: "Beng Mealea Overgrowth temple", price: "$15" },
    { location: "Koh Ker Temple & Beng Mealea", price: "$20" },
    { location: "Preah Vihear Bird Sanctuary", price: "$20" },
    { location: "Kampong Khleang Floating village", price: "$15" },
    { location: "Sunrise at Angkor Wat", price: "$15" },
    { location: "Transfer In/Out", price: "$15" },
    { location: "Work outside province", price: "$50" },
  ];

  return (
    <Layout>
       {/* Banner Image */}
       <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Angkor Detail" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
                <motion.span 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary-foreground/80 tracking-[0.3em] text-sm md:text-base uppercase mb-4 block"
                >
                    Official Rates
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
                >
                    Tariff & <span className="text-primary">Guide Fees</span>
                </motion.h1>
            </div>
        </div>
      </div>

      <section className="py-20 bg-background relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Cambodia Tourist Guide Association</h2>
             <p className="text-muted-foreground text-lg">
                We provide transparent, regulated pricing for all our certified guides. Choose the language expertise that best suits your journey.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <PriceCard 
              title="French Speaking" 
              basePrice="$45" 
              surcharges={commonSurcharges}
              delay={0.1}
            />
            
            <PriceCard 
              title="English Speaking" 
              basePrice="$35" 
              surcharges={commonSurcharges}
              delay={0.2}
            />
            
            <PriceCard 
              title="German, Spanish, Italian" 
              basePrice="$50" 
              surcharges={commonSurcharges}
              delay={0.3}
            />
            
            <PriceCard 
              title="Asian Languages" 
              basePrice="$35" 
              surcharges={commonSurcharges}
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
