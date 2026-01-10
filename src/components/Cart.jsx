import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your cart is empty</h2>
        <Link to="/" className="home-btn">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
