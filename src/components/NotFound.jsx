import { useRouteError } from "react-router-dom";
import "./errorPage.css";
import { Link } from "react-router-dom";

function NotFound() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="err-data">
      <p id="error">{err.data}</p>
      <p id="status">
        {err.status} {err.statusText}
      </p>
      <h2 id="final">Please enter the proper destination...</h2>
      <Link to="/" id="home-link">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
