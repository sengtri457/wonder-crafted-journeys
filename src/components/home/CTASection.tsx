import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 md:p-20"
      >
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
          Ready to Explore?
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Plan Your Journey <span className="text-gradient-gold">Today</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Let us craft the perfect Cambodian adventure for you. From ancient wonders to tropical paradises, your dream trip awaits.
        </p>
        <Link to="/contact" className="btn-gold inline-block text-lg">
          Start Planning
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
