// CartItem component displays a single cart entry with product details, quantity controls, and remove button
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
      <div className="card mb-3 border-0 shadow-sm">
        <div className="row g-0 align-items-center">
          <div className="col-md-3">
            <img
              src={item.image}
              className="img-fluid rounded-start"
              alt={item.name}
              style={{ height: "150px", objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-muted small">{item.description}</p>
              <p className="card-text fw-bold text-primary fs-5">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-end gap-3 pe-3">
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="fw-bold">{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CartItem;
