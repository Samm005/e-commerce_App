import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "../utils/searchSlice";
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products"); //Fetch data using the custom hook defined

  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  if (loading) return <h2 id="loading">Loading products....</h2>; //If loading is true

  if (error) return <h2 id="error">{error}</h2>; // If there is error

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredData.length === 0 ? (
          <h3 className="no-results">No products found</h3>
        ) : (
          filteredData.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
