import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedAttractions from "@/components/home/FeaturedAttractions";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedAttractions />
      <FeaturedPackages />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
