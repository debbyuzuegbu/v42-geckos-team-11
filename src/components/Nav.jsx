import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useIcons from "../useIcons";

const Nav = () => {
  // Setting up a clicked state
  const [clicked, setClicked] = useState(() => false);
  
  // Setting up a reference
  const navRef = useRef();

  // Getting icons from the useIcons Custom hook.
  const { hamburger, closeNav } = useIcons();

  // Function for handling the clicked state
  const handleClicked = () => {
    setClicked((prev) => !prev);
  };

  // For slide in and slide out Navigation
  useEffect(() => {
    if (clicked) {
      navRef.current.classList.add("slide-in");
      return () => navRef.current.classList.remove("slide-in");
    }

    if (!clicked) {
      navRef.current.classList.add("slide-out");
      return () => navRef.current.classList.remove("slide-out");
    }
  }, [clicked]);

  return (
    <div className="nav-div">
      <nav className="nav">
        <ul className={"nav-items"} ref={navRef}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "activeClass" : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive ? "activeClass" : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/explore"
              className={({ isActive, isPending }) =>
                isActive ? "activeClass" : undefined
              }
            >
              Explore
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleClicked}>
        {!clicked? hamburger : closeNav}
      </div>
    </div>
  );
};

export default Nav;
