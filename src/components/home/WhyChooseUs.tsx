import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Compass, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Expert Local Guides",
    description: "Our certified Cambodian guides bring authentic stories and deep cultural knowledge to every tour.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Fully insured trips with 24/7 support. Your safety and comfort are our top priorities.",
  },
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "Go beyond tourist spots. Connect with local communities and traditions firsthand.",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "From luxury transport to handpicked accommodations, experience Cambodia in style.",
  },
];

const WhyChooseUs = () => {
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
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Travel with <span className="text-gradient-gold">Confidence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-8 text-center card-hover"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl gradient-gold-bg flex items-center justify-center">
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
