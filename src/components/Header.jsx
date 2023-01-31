import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header ">
      <div className="container header-container">
        <Link to="/">
          <div className="logo">Feelz</div>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
