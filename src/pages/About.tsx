import Layout from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MapPin, Calendar, Award } from "lucide-react";
import heroImage from "@/assets/hero-angkor.jpg";

const stats = [
  { icon: Calendar, label: "Years Experience", value: 12 },
  { icon: Users, label: "Happy Travelers", value: 15000 },
  { icon: MapPin, label: "Destinations", value: 45 },
  { icon: Award, label: "Awards Won", value: 8 },
];

const timeline = [
  { year: "2014", title: "Founded", desc: "Started as a small local tour agency in Siem Reap." },
  { year: "2016", title: "Expanded", desc: "Opened offices in Phnom Penh and Sihanoukville." },
  { year: "2019", title: "Award Winning", desc: "Named Best Tour Operator in Southeast Asia." },
  { year: "2023", title: "Going Global", desc: "Launched international partnerships and premium tours." },
];

const team = [
  { name: "Sokha Phan", role: "Founder & CEO" },
  { name: "Chantrea Kim", role: "Head of Operations" },
  { name: "Dara Meas", role: "Lead Tour Guide" },
  { name: "Srey Leak", role: "Marketing Director" },
];

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
      {inView ? value.toLocaleString() : "0"}+
    </span>
  );
};

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 section-padding">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            About Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-gradient-gold">Story</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Born from a passion for sharing Cambodia's beauty with the world, we've grown from a small team of local guides into a premier travel agency trusted by thousands.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-card/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="glass rounded-2xl p-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create authentic, sustainable travel experiences that connect visitors with Cambodia's rich heritage while empowering local communities.
            </p>
          </div>
          <div className="glass rounded-2xl p-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's most trusted gateway to Cambodia, inspiring a deeper understanding of Khmer culture and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" ref={statsRef}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon size={28} className="text-primary mx-auto mb-3" />
              <AnimatedCounter value={stat.value} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card/30" ref={timelineRef}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-16">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className={`relative pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
              >
                <div className={`absolute top-1 left-3 md:left-auto ${i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"} w-3 h-3 rounded-full gradient-gold-bg`} />
                <span className="text-primary font-bold text-sm">{item.year}</span>
                <h4 className="text-lg font-serif font-bold text-foreground mt-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-16">
            Meet the <span className="text-gradient-gold">Team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full gradient-gold-bg flex items-center justify-center text-primary-foreground text-2xl font-serif font-bold mb-4">
                  {member.name[0]}
                </div>
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
