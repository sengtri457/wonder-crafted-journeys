import Layout from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, HandHeart, TrendingUp } from "lucide-react";

const impacts = [
  { label: "Communities Supported", value: 24 },
  { label: "Students Sponsored", value: 350 },
  { label: "Trees Planted", value: 5000 },
  { label: "Clean Water Wells", value: 12 },
];

const projects = [
  { title: "School Building Program", desc: "Built 5 schools in rural Siem Reap providing education to over 500 children.", icon: BookOpen },
  { title: "Women's Empowerment", desc: "Training local women in sustainable crafts and tourism hospitality.", icon: Heart },
  { title: "Environmental Conservation", desc: "Reforestation and wildlife protection across Cardamom Mountains.", icon: TrendingUp },
];

const Foundation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      <section className="pt-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Our Foundation</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Giving <span className="text-gradient-gold">Back</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              We believe travel should empower communities. A portion of every tour directly funds education, conservation, and community development across Cambodia.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" ref={ref}>
            {impacts.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="text-center glass rounded-2xl p-8"
              >
                <p className="text-4xl font-serif font-bold text-gradient-gold">{stat.value.toLocaleString()}+</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Projects */}
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            Community <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 card-hover"
              >
                <project.icon size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Donation CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <HandHeart size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Make a Difference</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Your contribution directly impacts the lives of Cambodian families. Every dollar counts.
            </p>
            <button className="btn-gold">Donate Now</button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Foundation;
