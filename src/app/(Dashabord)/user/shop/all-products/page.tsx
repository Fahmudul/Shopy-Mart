import { getAllProducts } from "@/Services/Products";
import ManageProducts from "@/components/modules/shop/products";

const ProductCategoryPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getAllProducts(page, "3");
  const products = data.length > 0 ? data : [];
  return (
    <div>
      <ManageProducts products={products} meta={meta} />
    </div>
  );
};

export default ProductCategoryPage;
