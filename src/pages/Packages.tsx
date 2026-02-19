import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { packages } from "@/data/packages";

import PackageCarousel from "@/components/PackageCarousel";

const Packages = () => {
  return (
    <Layout>
      <PackageCarousel />
      
      <section className="py-20 section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              All Tour Packages
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-card glass rounded-xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {pkg.popular && (
                     <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       Most Popular
                     </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-serif font-bold text-gradient-gold mb-4 h-14 flex items-center justify-center line-clamp-2">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {pkg.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border/30 w-full flex justify-center">
                    <Link 
                      to={`/packages/${pkg.id}`} 
                      className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest border border-primary/20 hover:border-primary px-4 py-2 rounded"
                    >
                      Read More <ChevronRight size={14} className="ml-1" />
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

export default Packages;
