import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/comp/Navbar";
import ProductList from "./components/comp/ProductList";
import Cart from "./components/comp/Cart";
import About from "./components/comp/About";
import ContactUs from "./components/comp/ContactUs";
import Footer from "./components/comp/Footer";
import cars from "./data";

// App component is the root component that manages cart state and renders layout with routing
const App = () => {
    const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartCars");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartCars", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (car) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === car.id);
      if (existing) {
        return prev.map((item) =>
          item.id === car.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...car, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cartCount={cartCount} />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList products={cars} onAddToCart={handleAddToCart} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemove}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
