import React from "react";
import { Container, Column, FooterLink, Heading } from "./FooterStyles";
import "./MyFooter.css";
import SocialMedia from "../../imgs/social.png";

const MyFooter = () => {
  return (
    <div className="myFooter">
      <h1>Find Us</h1>
      <Container>
        <img src={SocialMedia} alt="Social Media"></img>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </i>
          </FooterLink>
        </Column>
      </Container>
    </div>
  );
};

export default MyFooter;
