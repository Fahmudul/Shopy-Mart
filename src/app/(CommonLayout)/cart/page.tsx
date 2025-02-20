import Coupon from "@/components/modules/cart/Coupon";
import CartProducts from "@/components/modules/cart/ProductCarts";
import ProductBanner from "@/components/modules/products/Banner";
import SMContainer from "@/components/ui/core/SMContainer";

const CartPage = () => {
  return (
    <SMContainer>
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
      </div>
    </SMContainer>
  );
};

export default CartPage;
