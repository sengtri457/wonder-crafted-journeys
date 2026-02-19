
import Layout from "@/components/layout/Layout";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { attractions } from "@/data/attractions";
import { ArrowLeft, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-angkor.jpg";
const AttractionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const attraction = attractions.find((a) => a.id === id);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!attraction) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-serif mb-4">Attraction not found</h2>
          <Link to="/attractions" className="text-primary hover:underline">
            Back to Attractions
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-screen bg-background">
        {/* Hero Section with Parallax */}
        <section ref={ref} className="relative h-screen overflow-hidden">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img 
              src={heroImage} 
              alt={attraction.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 h-full flex flex-col justify-end pb-32 px-6 max-w-7xl mx-auto">
             <Link to="/attractions" className="absolute top-32 left-6 md:left-12 text-white/80 hover:text-white flex items-center gap-2 transition-colors">
               <ArrowLeft size={20} /> Back to Attractions
             </Link>

             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <span className="text-primary-foreground/90 uppercase tracking-[0.3em] font-medium text-sm md:text-base mb-4 block">
                 {attraction.category}
               </span>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6">
                 {attraction.name}
               </h1>
               <div className="flex items-center gap-2 text-white/80 text-lg">
                 <MapPin size={20} className="text-primary" />
                 {attraction.location}
               </div>
             </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-30 bg-background -mt-20 rounded-t-[3rem] px-6 py-20 md:py-32">
           <div className="max-w-4xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
             >
                <h2 className="text-center text-3xl md:text-4xl text-primary font-bold uppercase tracking-widest mb-12">
                   {attraction.name}
                </h2>
                
                {/* Make the first letter huge */}
                <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-[-10px]">
                  {attraction.longDesc}
                </p>
                
                <p>
                  Experience the magic of {attraction.name}, a place where history and nature intertwine. 
                  Whether you are seeking spiritual enlightenment, architectural marvels, or simply a connection with the ancient world, 
                  this destination offers a journey unlike any other.
                </p>
             </motion.div>

             {/* Gallery Grid */}
             <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
                <div className="md:row-span-2 h-full rounded-2xl overflow-hidden shadow-xl">
                   <img 
                      src={attraction.gallery?.[0] || attraction.image} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt="Gallery 1"
                   />
                </div>
                <div className="h-full rounded-2xl overflow-hidden shadow-xl">
                   <img 
                      src={attraction.gallery?.[1] || attraction.image} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt="Gallery 2"
                   />
                </div>
                <div className="h-full rounded-2xl overflow-hidden shadow-xl">
                   <img 
                      src={attraction.gallery?.[2] || attraction.image} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt="Gallery 3"
                   />
                </div>
             </div>
             
             <div className="mt-20 text-center">
               <Link to="/contact" className="btn-gold px-10 py-4 text-x tracking-widest uppercase">
                 Book a Tour Here
               </Link>
             </div>
           </div>
        </section>
      </div>
    </Layout>
  );
};

export default AttractionDetail;
