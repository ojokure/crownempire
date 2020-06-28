import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import devices from ".././../utils/devices";

const Footer = () => (
  <FooterContainer className="footer-container">
    <div className="footer-top">
      <div className="cta-message">
        <h2>What are you waiting for?</h2>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-content footer-copyright">
        <p>© 2020 CrownEmpire LLC</p>
      </div>
      <div className="footer-content footer-icons">
        <div className="footer-icon">
          <i className="fa fa-phone-square"></i>
          <div> (301)-861-2040</div>
        </div>
        <div className="footer-icon">
          <i className="fa fa-envelope"></i>{" "}
          <div>contact@crownempirellc.com</div>
        </div>
      </div>
      <div className="footer-content footer-address">
        <p>
          Head Office <br /> 5457 Twin Knolls Road, Suite 300, Columbia, MD
          21045.
        </p>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  background: #292d38;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .footer-top {
    display: flex;
    flex-direction: column;
    margin: 3rem 1rem;
    justify-content: center;

    .cta-message {
      margin-bottom: 1.6rem;

      h2 {
        color: #efefef;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.4;
        margin: 0;
      }
    }

    .cta-button {
      font-size: 1.4rem;
      padding: 1rem;

      .link {
        text-decoration: none;
      }
    }
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.6rem;
    font-family: "Source Sans Pro", sans-serif;

    @media ${devices.tablet} {
      flex-direction: column;
    }

    .footer-content {
      width: 15rem;
      opacity: 0.7;

      @media ${devices.tablet} {
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  }

  .footer-copyright {
    /* font-weight: bold; */
    font-size: 1.2rem;
    color: white;
  }

  .footer-icons {
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: space-around; */
    font-size: 1.6rem;
    margin: 25px;
    color: white;
    /* font-weight: bold; */

    .fa {
      font-size: 2.2rem;
      color: white;
    }
  }

  .footer-address {
    /* font-weight: bold; */
    font-size: 1.6rem;
    color: white;
  }
`;

// const buttonTheme = {
//   text: "white",
//   background: "#4fad65",
// };
