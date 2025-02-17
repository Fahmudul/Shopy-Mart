import { getAllCategories } from "@/Services/Category";
import ManageCategories from "@/components/modules/shop/category";

const ProductCategoryPage = async () => {
  const { data, meta } = await getAllCategories();
  const categories = data.length > 0 ? data : [];

  return (
    <div>
      <ManageCategories categories={categories} />
    </div>
  );
};

export default ProductCategoryPage;
