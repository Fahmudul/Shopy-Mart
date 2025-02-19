import { getAllProducts } from "@/Services/Products";
import ManageProducts from "@/components/modules/shop/products";

const ProductCategoryPage = async () => {
  const { data, meta } = await getAllProducts();
  const products = data.length > 0 ? data : [];
  return (
    <div>
      <ManageProducts products={products} />
    </div>
  );
};

export default ProductCategoryPage;
