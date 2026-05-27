import { Link } from "react-router-dom";
import CartItem from "./CartItem";

// Cart component displays all cart items, totals, and a checkout section or an empty cart message
const Cart = ({ cartItems, onUpdateQuantity, onRemove }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (amount) => "$" + amount.toLocaleString();

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="py-5">
          <h2 className="display-6 fw-bold mb-3">Your Cart is Empty</h2>
          <p className="text-muted mb-4">
            Looks like you have not added anything yet.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold mb-4">Shopping Cart</h1>
      <div className="mb-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div className="card border-0 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0">Total</h5>
            <small className="text-muted">
              {cartItems.length} item{cartItems.length > 1 && "s"}
            </small>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fs-4 fw-bold text-primary">
              {formatPrice(totalPrice)}
            </span>
            <button className="btn btn-primary btn-lg">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
