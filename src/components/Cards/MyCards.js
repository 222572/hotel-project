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
          <h1 className="featured-heading"> მომავალი ღონისძიებები </h1>
          <div class="event-card">
            <div class="event-title">დანერგე ახალი სიცოცხლე</div>
            <div class="event-info">📅 25 ოქტომბერი, 2025 — 10:00</div>
            <div class="event-info">📍 წყალტუბოს ცენტრალური პარკი</div>
            <div class="event-price">💵 მონაწილეობა: 20 ლარი</div>
            <a href="#" class="btn">
              მიიღე მონაწილეობა
            </a>
          </div>
        </center>
      </div>
    </div>
  );
};

export default MyCards;
