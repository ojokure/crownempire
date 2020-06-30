import React from "react";
import styled from "styled-components";
import devices from "../utils/devices";

// Home Images
import trucking from "../assets/images/fast-delivery.png";
import packaging from "../assets/images/carton-box.png";
import delivery from "../assets/images/freight.png";
import twentyfour from "../assets/images/24-hours.png";
import express from "../assets/images/express.png";
import customercare from "../assets/images/call-center.png";
import reliability from "../assets/images/reliability.png";
import satisfaction from "../assets/images/satisfaction.png";
import logistics from "../assets/images/logistics.png";
import logistics2 from "../assets/images/logistics2.png";

const Main = () => (
  <MainContainer>
    <div className="main-about-top">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          marginLeft: "100px",
        }}
      >
        <h2 className="main-about-title">
          Client satisfaction is the most important to us.
          <span className="logo"> Crown Empire LLC</span>
        </h2>
        <p className="main-about-intro">
          Welcome to Crown Empire LLC, one of the most top-notch Logistics
          companies in the United States.
        </p>
        <p className="main-about-intro">
          We serve day and night to provide you with efficient logistic services
          from town to town, city to city, and state to state in order to meet
          your requirements.
        </p>
        <p className="main-about-intro">
          We have been providing our Logistic Services for quite some time, and
          at that time, we have gained the trust of our customers because of our
          excellent services.
        </p>
      </div>
      <div
        style={{
          width: "130%",
          height: "120%",
          textAlign: "center",
          padding: "0px",
          margin: "0px",
        }}
      >
        <img
          src={logistics2}
          alt="logistics"
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        />
      </div>
    </div>

    <div className="main-about-bottom">
      <h3> SERVICES </h3>
      <div className="about-cards">
        <div className="about-card">
          <div className="image">
            <img src={packaging} alt="packaging" />
          </div>
          <div className="card-info">
            <h6>Packaging</h6>
            <p>
              We safely deliver all your heavy and bulky (precious) packages
              from one area to another. If you have a package and need to
              deliver it, you can trust us to do it for you in no time.
            </p>
          </div>
        </div>
        <div className="about-card">
          <div className="image">
            <img src={trucking} alt="trucking" />
          </div>
          <div className="card-info">
            <h6>Trucking</h6>
            <p>
              We move heavy items like furniture, appliances, building
              accessories and we do it in the safest and quickest way with our
              express trucking services all over the United States.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="image">
            <img src={delivery} alt="delivery" />
          </div>
          <div className="card-info">
            <h6>Delivery</h6>
            <p>
              We also deliver items from one place to another. If you wish to
              send a parcel, you can always rely on our express delivery
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="main-why">
      <h3> WHY CROWN EMPIRE ? </h3>
      <div className="why-cards">
        <div className="why-card">
          <div className="image">
            <img
              src={express}
              alt="express"
              style={{ width: "35%", objectFit: "contain" }}
            />
          </div>
          <div className="card-info">
            <h6>Express Delivery</h6>
            <p>
              It is top priority to us to make sure your freight reaches as
              quickly as possible to the consumer. Our express delivery services
              make us one of the best logistics to consider across The United
              States.
            </p>
          </div>
        </div>

        <div className="why-card">
          <div className="image">
            <img
              src={customercare}
              alt="cutomer care"
              style={{ width: "35%", objectFit: "contain" }}
            />
          </div>
          <div className="card-info">
            <h6>Customer Care & Support</h6>
            <p>
              If you have any queries, you can always talk to our customer care
              and support team 24/7, They'll attend to all your enquiries and
              need. If you are experiencing a problem with our services, contact
              us today?
            </p>
          </div>
        </div>
        <div className="why-card">
          <div className="image">
            <img
              src={reliability}
              alt="reliability"
              style={{ width: "35%", objectFit: "contain" }}
            />
          </div>
          <div className="card-info">
            <h6>Reliability</h6>
            <p>
              We aim to deliver quality services that exceed the expectations of
              our users. Moreover, we also focus on your freight or package
              safety because, to us, reliability means a lot. We do not wish to
              break the trust you put in us.
            </p>
          </div>
        </div>
        <div className="why-card">
          <div className="image">
            <img
              src={satisfaction}
              alt="satisfaction"
              style={{ width: "35%", objectFit: "contain" }}
            />
          </div>
          <div className="card-info">
            <h6>Customers satisfaction</h6>
            <p>
              To us, happy customers mean the most. Therefore we make sure your
              parcels reach safely and on time till the very end. If your
              business keeps going, you’re happy. If you are happy, in turn, we
              are happy.
            </p>
          </div>
        </div>
        <div className="why-card">
          <div className="image">
            <img
              src={twentyfour}
              alt="24/7"
              style={{ width: "35%", objectFit: "contain" }}
            />
          </div>
          <div className="card-info">
            <h6> 24/7 </h6>
            <p>
              Whether it be day or night, come rain come shine we at crown
              empire logistics are ever ready to be at your service to deliver
              that package or move that heavy duty materials 24 hours 7 days a
              week.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="user-stories-container">
      <h3 className="user-stories-title"> CUSTOMERS REVIEW </h3>

      <div className="user-stories">
        <div className="user-story">
          <div className="user-header">
            <h3> Omar Johnson</h3>
          </div>
          <p>
            We were trying to leave California and move to Boise, Idaho. I spoke
            with the representative from crown empire on the phone and he was
            very nice. He was outlying exactly what the service was gonna be,
            and he was very helpful.
          </p>
        </div>
        <div className="user-story">
          <div className="user-header">
            <h3> Gabriel Cabrejas </h3>
          </div>
          <p>
            I'm not one to usually give out reviews, even if I had a wonderful
            experience. The reason for that is I expect good service any time I
            spend money on a service. But I have to say crown empire exceeded my
            expectations.
          </p>
        </div>
        <div className="user-story">
          <div className="user-header">
            <h3>Richany Mann</h3>
          </div>
          <p>
            A1 experience from start to finish. Crown empire Logistics showed up
            when scheduled and delivered on time. I was concerned as anyone
            would about their stuff moving long distances however they made me
            feel secure along the process. I highly recommend them.
          </p>
        </div>
        <div className="user-story">
          <div className="user-header">
            <h3>Femi Anjorin</h3>
          </div>
          <p>
            Our stuff was extremely unorganized and we needed to move across
            country in less than a week. They happened to have a last minute
            route that could accommodate my move and it worked out great! I even
            got a deal because it was lower than any other company even without
            the packing.
          </p>
        </div>
      </div>
    </div>
  </MainContainer>
);

export default Main;

const MainContainer = styled.main`
  min-height: 100vh;
  transform: translateZ(0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  /* opacity: 0.6; */
  /* background: darkgray; */
  /* padding-top: 7rem; */

  .main-about-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 2rem;
    text-align: center;
    /* background: #f2f6f5; */
    /* background: #0097cd; */
    padding-top: 7rem;
    padding-bottom: 2rem;
    /* opacity: 0.6; */
    /* background: darkgray; */
  }

  .main-about-title {
    /* color: #141414; */
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .main-about-intro {
    text-align: center;
    font-size: 2.3rem;
    line-height: 1.3;
    /* color: #545454; */
    /* color: white; */

    font-weight: bold;
    padding-bottom: 2rem;
    max-width: 90rem;
    font-family: "Lateef", cursive;
    color: #3f3d56;
    /* opacity: 0.6; */
    /* background: darkgray; */
  }

  .logo {
    color: silver;
  }

  .main-about-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: #f2f6f5; */
    /* background: darkgray; */
    /* color: white; */
    margin: 8.5rem 0;
    padding: 3rem 1rem;

    h3 {
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      /* color: #efefef; */
      color: #3f3d56;

      margin: 0;
      /* text-decoration: underline; */
    }

    .about-cards {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      /* background: darkgray; */
    }

    .about-card {
      border-radius: 6px;
      box-shadow: 0 8px 10px #d3d3d3;
      /* background: #efefef; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 26rem;
      width: 25rem;
      margin: 3rem 0.8rem 0 0.8rem;

      @media ${devices.mobile} {
        width: 80%;
      }

      .image {
        width: 100%;
        text-align: center;
      }

      img {
        /* border-radius: 6px 6px 0 0; */
        /* margin-left: 60px; */
        width: 50%;
        height: 11rem;
        /* object-fit: cover; */
        @media ${devices.mobile} {
          height: 13rem;
          width: 50%;
          /* margin-left: 110px; */
        }
      }

      .card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
      }

      h6 {
        margin: 0;
        font-weight: bold;
        font-size: 1.9rem;
      }

      p {
        font-size: 1.6rem;
        padding: 0 1.8rem;
        text-align: center;
        color: #3f3d56;
        /* margin: 0; */
        /* line-height: 1.3; */
        font-weight: bold;
        font-family: "Lateef", cursive;
      }
    }
  }

  .main-why {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f2f6f5;
    /* background: #65617d; */

    margin: 4.5rem 0;
    margin-bottom: 70px;
    padding: 3rem 1rem;
    font-weight: bold;
    /* background: darkgray; */

    h3 {
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      color: #3f3d56;
      margin: 0;
      /* text-decoration: underline; */
    }

    .why-cards {
      display: flex;
      justify-content: space-evenly;
      background: #f2f6f5;
      /* background: #65617d; */
      margin-top: 0;
      padding: 3rem;

      flex-wrap: wrap;
    }

    .why-card {
      /* border-radius: 6px;
      box-shadow: 0 6px 10px #d3d3d3; */

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 30rem;
      width: 25rem;
      margin: 3rem 0.8rem 0 0.8rem;

      @media ${devices.mobile} {
        width: 80%;
      }

      .image {
        width: 100%;
        text-align: center;
      }
      img {
        /* border-radius: 6px 6px 0 0; */
        /* margin-left: 50px; */
        /* width: 50%; */
        /* height: 11rem; */
        /* object-fit: cover; */
        @media ${devices.mobile} {
          height: 13rem;
          width: 20%;
          /* margin-left: 100px; */
        }
      }
      .card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
      }

      h6 {
        margin: 0;
        font-weight: bold;
        font-size: 1.9rem;
        /* color: white; */
      }

      p {
        font-size: 1.75rem;
        padding: 0 2rem;
        text-align: center;
        font-weight: bold;
        color: #3f3d56;
        /* margin: 0; */
        line-height: 1.3;
        font-family: "Lateef", cursive;
      }
    }
  }

  .user-stories-container {
    margin-bottom: 8.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: darkgray; */

    h3 {
      font-weight: bold;
      font-size: 3.4rem;
      margin-bottom: 4rem;
      max-width: 60rem;
      padding: 0 2rem;
      text-align: center;
      line-height: 1.3;
      color: #3f3d56;

      @media ${devices.tablet} {
        margin-bottom: 2.5rem;
      }
    }

    .user-stories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .user-story {
      margin: 1.3rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 28rem;

      p {
        /* line-height: 2; */
        font-size: 1.9rem;
        color: #3f3d56;
        font-weight: bold;
        font-family: "Lateef", cursive;

        @media ${devices.tablet} {
          text-align: center;
        }
      }
    }

    .user-header {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 1rem 0;

      @media ${devices.tablet} {
        justify-content: center;
        flex-direction: column;
      }

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1.2rem;

        @media ${devices.tablet} {
          margin: 0 0 1rem 0;
        }
      }

      h3 {
        font-weight: bold;
        font-size: 1.5rem;
        color: #141414;
        margin: 0;
      }
    }
  }
`;
