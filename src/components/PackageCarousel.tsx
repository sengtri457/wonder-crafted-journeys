
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "@/data/packages";

const PackageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.05,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.3, duration: 0.5, staggerChildren: 0.1 } 
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const currentPackage = packages[currentIndex];

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      {/* Background Image with Parallax-like effect */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={currentPackage.image}
            alt={currentPackage.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mt-20">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-white max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-4 text-sm md:text-base font-medium tracking-wider uppercase text-primary-foreground/90">
                 <span className="bg-primary/90 px-3 py-1 rounded text-white flex items-center gap-2">
                   <Clock size={14} /> {currentPackage.duration}
                 </span>
                 <span className="flex items-center gap-2">
                   <MapPin size={14} className="text-primary" /> {currentPackage.location}
                 </span>
              </div>
              
              <motion.h1 
                className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4"
              >
                {currentPackage.title}
              </motion.h1>
              
              <motion.p className="text-white/80 text-base md:text-lg line-clamp-2 mb-8 max-w-xl">
                {currentPackage.description}
              </motion.p>
              
              <motion.div className="flex gap-4">
                <Link 
                  to={`/packages/${currentPackage.id}`}
                  className="btn-gold px-6 py-3 text-base"
                >
                  Explore Details
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Controls & Indicators */}
          <div className="flex flex-col gap-8 items-end">
             {/* Price Badge */}
             <motion.div 
               key={`price-${currentIndex}`}
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="glass px-6 py-4 rounded-xl border-l-4 border-primary text-right min-w-[140px]"
             >
                <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">Starting From</span>
                <span className="text-2xl font-bold text-gradient-gold">
                  ${currentPackage.price}
                </span>
             </motion.div>

             {/* Arrows */}
             <div className="flex gap-4">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 backdrop-blur-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 backdrop-blur-md"
                >
                  <ChevronRight size={24} />
                </button>
             </div>
          </div>

        </div>
      </div>

      {/* Progress Bar / Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {packages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "w-12 bg-primary" : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageCarousel;
