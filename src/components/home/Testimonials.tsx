import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Travel Blogger",
    text: "Cambodia Tourist Guide made our trip absolutely magical. The attention to detail and local knowledge was beyond anything we expected.",
  },
  {
    name: "James Chen",
    role: "Photographer",
    text: "The sunrise at Angkor Wat arranged by our guide was the most breathtaking experience of my life. Truly unforgettable.",
  },
  {
    name: "Emma Laurent",
    role: "Solo Traveler",
    text: "As a solo female traveler, I felt completely safe and welcomed. The guides were professional and deeply passionate about their country.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-16">
            What Travelers <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[200px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0,
                y: active === i ? 0 : 20,
                position: active === i ? "relative" as const : "absolute" as const,
              }}
              transition={{ duration: 0.5 }}
              className={`${active !== i ? "pointer-events-none inset-0" : ""}`}
            >
              <Quote size={40} className="text-primary/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8">
                "{t.text}"
              </p>
              <div className="w-12 h-12 mx-auto rounded-full gradient-gold-bg flex items-center justify-center text-primary-foreground font-bold text-lg mb-3">
                {t.name[0]}
              </div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === i ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
