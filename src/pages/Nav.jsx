import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    if (path === "/products") {
      return location.pathname.startsWith("/products");
    }

    return location.pathname === path;
  };
  return (
    <nav>
      <ul>
        <li className={isActive("/") ? "nav-active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive("/about") ? "nav-active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={isActive("/products") ? "nav-active" : ""}>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
