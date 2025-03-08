
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import BlogSection from "@/components/home/BlogSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PromotionsSection />
      <FeaturedSection />
      <BlogSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
