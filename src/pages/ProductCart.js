import React, { useContext } from "react";
import Product from "../components/product/Product";
import { ProductContext } from "../context/ProductContext";

const ProductCart = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "electronics";
  });
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCart;
