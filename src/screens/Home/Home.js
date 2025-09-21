import React from "react";
import MyCards from "../../components/Cards/MyCards";
import MyCarousel from "../../components/Carousel/MyCarousel";
import MyFooter from "../../components/Footer/MyFooter";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <MyCarousel
        title="Welcome to Ecowise"
        subtitle="ეკოლოგია + სიბრძნე = ჩვენი მომავალი"
      />
      <div id="about-section">
        <About />
      </div>
      <div id="rooms-section">
        <MyCards />
      </div>
      <div id="social-media-section">
        <MyFooter />
      </div>
    </div>
  );
};

export default Home;
