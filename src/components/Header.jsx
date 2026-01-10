import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
