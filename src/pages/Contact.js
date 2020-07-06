import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import styled from "styled-components";
// import contact from "../assets/images/contact.png";
import contact2 from "../assets/images/contact2.png";
import devices from "../utils/devices";

const Contact = () => {
  return (
    <>
      <Header height="70vh" />
      <StyledContactContainer>
        <h3>Contact Us </h3>
        <h5>
          We strive to provide the best service possible with every contact. Get
          in touch and let us know how we can help.
        </h5>
        <StyledContacts>
          <div className="contact-image">
            <img src={contact2} alt="customer care" />
          </div>
          <div className="contacts-content">
            <p>
              <h4 className="contct">Chat </h4>
              You can chat with our representatives live via the chat icon in
              the bottom right corner.
            </p>
            <p className="content-par">
              <h4 className="contct">Email </h4>
              You can reach out to us for more inquiries via our email
              <a className="anchor" href="mailto:careers@crownempirellc.com">
                {"  contact@crownempirellc.com."}
              </a>
            </p>
            <p className="content-par">
              <h4 className="contct">Telephone </h4>
              To contact us over the phone and talk to our representatives,
              please call
              <a className="anchor" href="tel:301-861-2040">
                {" (301)-861-2040."}
              </a>
            </p>
            <p className="content-par">
              <h4 className="contct">Address</h4>
              Main Office 5457 Twin Knolls Road, Suite 300, Columbia, MD 21045
            </p>
          </div>
        </StyledContacts>
      </StyledContactContainer>
      <Footer />
    </>
  );
};

export default Contact;

const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  .anchor {
    font-family: "Lateef", cursive;
    color: #0097cd;
  }
  .contacts-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50;
    height: 100%;
    padding: 30px;

    .contct {
      color: #3f3d56;
      font-size: 2.6rem;
      font-weight: bold;
      text-align: start;
      padding-top: 20px;
    }

    content-par {
      font-size: 2.3rem;
      line-height: 1.3;
      font-weight: bold;
      padding-bottom: 2rem;
      font-family: "Lateef", cursive;
      color: #3f3d56;
    }
    content-head {
      font-size: 2rem;
      line-height: 1.3;
      font-weight: bold;
      padding-bottom: 2rem;
      font-family: "Lateef", cursive;
      color: #3f3d56;
    }
    @media ${devices.tablet} {
      margin-left: 0px;
    }
  }

  .contact-image {
    width: 50%;
    height: 100%;
    margin: 0px;
    text-align: center;
    @media ${devices.mobile} {
      width: 100%;
    }
    img {
      text-align: center;
      width: 70%;
      height: 90%;

      @media ${devices.tablet} {
        width: 100%;
      }
    }
  }
`;
const StyledContactContainer = styled.div`
  padding: 30px;
  p {
    margin: 0;
    font-size: 21px;
    color: #3f3d56;
    font-family: "Lateef", cursive;
    font-weight: 600;
    line-height: 1.3;
  }
  h3 {
    color: #3f3d56;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
  }

  h5 {
    color: #3f3d56;
    font-size: 2.5rem;
    padding: 10px;
    padding-bottom: 5px;
    font-weight: bold;
    text-align: center;
    font-family: "Lateef", cursive;
  }
`;
