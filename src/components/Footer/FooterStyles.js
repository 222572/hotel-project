import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  margin-left: 60px;

  img {
    width: 600px;
    height: auto;
    border-radius: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const FooterLink = styled.a`
  color: black;

  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #37745b;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #000;

  margin-bottom: 40px;
  font-weight: bold;
`;
