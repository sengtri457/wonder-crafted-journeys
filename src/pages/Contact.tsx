import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <section className="pt-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full gradient-gold-bg flex items-center justify-center mb-4">
                    <Send size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Destination</label>
                      <select className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                        <option value="">Select destination</option>
                        <option>Siem Reap</option>
                        <option>Phnom Penh</option>
                        <option>Koh Rong</option>
                        <option>Kampot</option>
                        <option>Battambang</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your dream trip..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-serif font-bold text-foreground mb-6">Office Info</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">123 Sisowath Quay, Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+855 12 345 678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@cambodiaguide.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary/30 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Google Maps</p>
                  <p className="text-xs text-muted-foreground/50">Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
