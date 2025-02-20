import { getAllCategories } from "@/Services/Category";
import { getAllProducts } from "@/Services/Products";
import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/Banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import SMContainer from "@/components/ui/core/SMContainer";
import { ICategory } from "@/types/category";

const AllProductsPage = async () => {
  const { data: categories } = await getAllCategories();
  const { data: products } = await getAllProducts();

  return (
    <SMContainer>
      <ProductBanner title="All Products" path="Home - Products" />
      <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      <div className="grid grid-cols-6 gap-6">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
      <AllProducts products={products} />
    </SMContainer>
  );
};

export default AllProductsPage;
