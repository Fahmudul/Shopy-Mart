import Category from "@/components/modules/Home/Category";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";
import FlashSale from "@/components/modules/Home/FlashSale";
import HeroSection from "@/components/modules/Home/HeroSection";
import TopBrands from "@/components/modules/Home/TopBrands";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <FlashSale />
      <TopBrands />
    </div>
  );
};

export default HomePage;
