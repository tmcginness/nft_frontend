import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export const NavBar = (props) => {


  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);


  return (
    <>

        <div className="nav">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/showNft">
            Show
          </Link>
          <Link className="links" to="/profile">
            Profile
          </Link>
          
          <Link className="links" to="/addNft">
            Add
          </Link>

        </div>


    </>
  );
};
