import { getAllCategories } from "@/Services/Category";
import ManageCategories from "@/components/modules/shop/category";
import ManageProducts from "@/components/modules/shop/products/CreateProducts";
import { useState } from "react";

const ProductCategoryPage = async () => {
  const { data, meta } = await getAllCategories();
  const categories = data.length > 0 ? data : [];
  return (
    <div>
      <ManageProducts categories={categories} />
    </div>
  );
};

export default ProductCategoryPage;
