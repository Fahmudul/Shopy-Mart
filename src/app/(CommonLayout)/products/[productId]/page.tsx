import { getSingleProduct } from "@/Services/Products";
import ProductBanner from "@/components/modules/products/Banner";
import ProductDetails from "@/components/modules/products/ProductDetails";
import SMContainer from "@/components/ui/core/SMContainer";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);

  return (
    <SMContainer>
      <ProductBanner
        title="Product Details"
        path="Home - Products - Product Details"
      />
      <ProductDetails product={product} />
    </SMContainer>
  );
};

export default ProductDetailsPage;
