import { getAllBrands } from "@/Services/Brand";
import ManageBrands from "@/components/modules/shop/brand";
import ManageCategories from "@/components/modules/shop/category";

const ProductBrandPage = async () => {
  const { data, meta } = await getAllBrands();
  const brands = data.length > 0 ? data : [];

  return (
    <div>
      <ManageBrands brands={brands} />
    </div>
  );
};

export default ProductBrandPage;
