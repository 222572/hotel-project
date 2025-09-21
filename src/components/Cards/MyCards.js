import React from "react";
import card1 from "../../imgs/card1.jpg";
import card5 from "../../imgs/card5.jpg";
import card3 from "../../imgs/card3.jpg";
import card2 from "../../imgs/card2.jpg";
import "./MyCards.css";
import { Link } from "react-router-dom";

const MyCards = () => {
  return (
    <div>
      <div class="container">
        <center>
          <h1 className="featured-heading"> Featured Rooms </h1>
        </center>
        <div className="myCards">
          <div className="card ">
            <div class="slide slide1">
              <div class="content">
                <div class="icon">
                  <img src={card1} />
                </div>
              </div>
            </div>

            <div class="slide slide2">
              <div class="content">
                <h3>Single Room</h3>
                <Link to={`/singleRoom/single`} className="links">
                  <p>Click to see more information</p>
                </Link>
              </div>
            </div>
          </div>

          <div class="card ">
            <div class="slide slide1">
              <div class="content">
                <div class="icon">
                  <img src={card2} />
                </div>
              </div>
            </div>

            <div class="slide slide2">
              <div class="content">
                <h3>Double Room</h3>
                <Link to={`/singleRoom/double`} className="links">
                  <p>Click to see more information </p>
                </Link>
              </div>
            </div>
          </div>

          <div class="card ">
            <div class="slide slide1">
              <div class="content">
                <div class="icon">
                  <img src={card5} />
                </div>
              </div>
            </div>

            <div class="slide slide2">
              <div class="content">
                <h3>Family Room</h3>
                <Link to={`/singleRoom/family`} className="links">
                  <p>Click to see more information</p>
                </Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="slide slide1">
              <div class="content">
                <div class="icon">
                  <img src={card3} />
                </div>
              </div>
            </div>

            <div class="slide slide2">
              <div class="content">
                <h3>Presedential Room</h3>
                <Link to={`/singleRoom/presidential`} className="links">
                  <p>Click to see more information</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
