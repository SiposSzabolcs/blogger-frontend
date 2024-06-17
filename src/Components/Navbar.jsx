import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Blogger</h1>
        </Link>
        <Link to="/add">
          <span>➕</span>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
