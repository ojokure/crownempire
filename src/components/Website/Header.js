import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import headerImage from "../../assets/images/headerImage.jpg";

const Header = ({ height }) => {
  return (
    <StyledHeader height={height}>
      <div className="hero-background">
        <img src={headerImage} alt="box" />
      </div>
      <div className="hero-content">
        <Navigation />
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  padding: 2rem;
  padding-bottom: 6rem;
  height: ${(props) => props.height};

  .hero-background {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.75);
      transition: 0.4s ease-out;
      z-index: 2;
    }
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: ${(props) => props.theme.largeMaxWidth};
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: flex-end;
    color: #fff;

    h1 {
      font-size: 7rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 2rem;
      max-width: 400px;
      width: 100%;
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.7rem;
      }
    }
  }
`;
