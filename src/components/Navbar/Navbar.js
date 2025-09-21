import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useUserAuth } from "../../Context/UserAuthContext";
import facebookIcon from "../../imgs/Facebook_Logo.png"; // Import the Facebook icon image

function Navbar() {
  const [click, setClick] = useState(false);
  const [language, setLanguage] = useState("GEO");
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const navbarHeight = 80;

  async function handleLogout() {
    try {
      await logOut();
      navigate("/login");
    } catch {
      console.log("can't logout");
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => setClick(!click);

  const handleDropdownClick = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setClick(false);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
    setClick(false);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ENG" ? "GEO" : "ENG"));
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo" onClick={handleHomeClick}>
            MR Hotel
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="nav-links" onClick={handleHomeClick}>
                მთავარი
              </div>
              <div className="dropdown-menu">
                <a
                  href="#about-section"
                  className="dropdown-item"
                  onClick={(e) => handleDropdownClick(e, "about-section")}
                >
                  ჩვენს შესახებ
                </a>
                <a
                  href="#rooms-section"
                  className="dropdown-item"
                  onClick={(e) => handleDropdownClick(e, "rooms-section")}
                >
                  ღონისძიებები
                </a>
                <a
                  href="#social-media-section"
                  className="dropdown-item"
                  onClick={(e) =>
                    handleDropdownClick(e, "social-media-section")
                  }
                >
                  სოციალური ქსელები
                </a>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/items"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                მერჩი
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                კონტაქტი
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-links"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="facebook-icon"
                />
              </a>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links login-and-signup-btn login-btn"
                    onClick={handleClick}
                  >
                    Log In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/signup"
                    activeClassName="active"
                    className="nav-links login-and-signup-btn signup-btn"
                    onClick={handleClick}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/mybookings"
                    activeClassName="active"
                    className="nav-links login-and-signup-btn bookings-btn"
                    onClick={handleClick}
                  >
                    კალათა
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/signup"
                    activeClassName="active"
                    className="nav-links login-and-signup-btn logout-btn"
                    onClick={handleLogout}
                  >
                    Log Out
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <div
                className="nav-links language-switcher"
                onClick={toggleLanguage}
              >
                {language}
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
