// ProductCard component displays a single product with image, name, price, description, and add-to-cart button
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-secondary align-self-start mb-2">
            {product.category}
          </span>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted small flex-grow-1">
            {product.description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fs-5 fw-bold text-primary">
              ${product.price.toLocaleString()}
            </span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
