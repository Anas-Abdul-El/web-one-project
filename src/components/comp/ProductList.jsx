import ProductCard from "./ProductCard";

// ProductList component renders a grid of all available products with a heading
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Our Cars</h1>
        <p className="text-muted">Find your perfect drive</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
