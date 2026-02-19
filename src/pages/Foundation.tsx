
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-angkor.jpg";

const Foundation = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src={heroImage} 
          alt="Angkor Wat Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#b45309] uppercase tracking-wide">
              CAMBODIA TOURIST GUIDE FOUNDATION
            </h1>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Text Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-3/5 space-y-6 text-justify text-muted-foreground leading-loose"
            >
              <p>
                Cambodia Tourist Guide Foundation was established on November 11, 2009 by Cambodia Tourist Guide Association, aim to focus on the Education of older age students in the remote villages.
              </p>
              <p>
                Cambodia Tourist Guide Foundation has create several small Projects such as Bicycle Project and Water Well projects. These projects has been shared to the travelers who has traveled with Cambodia Tourist Guide Association.
              </p>
              <p>
                The benefit of 10% from the guide service plus the generous Travelers' donation, we have been giving more than $3000 to buy nearly 100 bicycles for the students who live in the communities far from schools. Therefore, in order to encourage them to continue further education successfully, Cambodia Tourist Guide Association always shares about the education systems to all of our travelers.
              </p>
              <p>
                If they wish to do something for their trip to Cambodia even more valuable and memorable, they would consider on the donation for Bicycle and Water Well Projects. Please contact Cambodia Tourist Guide Association for more information on what Cambodia Tourist Guide Foundation has been doing for the people, children and local communities. Here are the following our activities:
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:w-2/5"
            >
              <div className="bg-white p-2 shadow-lg rounded-sm rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://cambodiatouristguide.com/wp-content/uploads/2024/07/DSC00143.jpeg" 
                  alt="Cambodian Students with Bicycles" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Foundation;
