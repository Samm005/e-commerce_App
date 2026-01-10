import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "../utils/searchSlice";
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products"); //Fetch data using the custom hook defined

  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  if (loading) return <h2 id="loading">Loading products....</h2>; //If loading is true

  if (error) return <h2 id="error">{error}</h2>; // If there is error

  return (
    <div className="product-list">
      <h2 id="Heading">ShoppyGlobe</h2>

      {/* Search input (uses Redux state) */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="search-input"
      />

      <div className="products-grid">
        {data
          .filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="image"
              />
              <h3 className="title">{product.title}</h3>
              <h3 className="category">{product.category}</h3>
              <h3 className="price">${product.price}</h3>
              <h4 className="description">{product.description}</h4>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
