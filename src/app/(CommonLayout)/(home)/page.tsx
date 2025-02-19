import Category from "@/components/modules/Home/Category";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";
import HeroSection from "@/components/modules/Home/HeroSection";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;