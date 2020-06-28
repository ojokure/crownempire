import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import * as actions from "../state/actions";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { slides } from "../utils/data";
import Slider from "../components/Website/Slider";
import Navigation from "../components/Website/Navigation";
// import Roller from "../components/LoadingIndicator/roller";
import Footer from "../components/Website/Footer";
import Main from "../pages/Main";

const Home = ({ getUserStories, userStories, userStoriesStatus }) => {
  return (
    <ParallaxContainer>
      <header className="is-home-page">
        <Navigation ishome />
        <Slider
          options={{
            autoPlay: 10000,
            lazyLoad: true,
            pauseAutoPlayOnHover: false,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
          }}
        >
          {slides.map(({ image, title, story }, index) => (
            <div style={{ width: "100%", height: "100%" }} key={index}>
              <div className="slider-image">
                <img
                  src={image}
                  data-flickity-lazyload={image}
                  alt=""
                  // style={{ filter: "15%" }}
                />
              </div>
              <div className="slider-content">
                <h1>{title}</h1>
                <p>{story}</p>
              </div>
            </div>
          ))}
        </Slider>
      </header>
      <Main />
      <Footer />
    </ParallaxContainer>
  );
};

export default Home;

const ParallaxContainer = styled.div`
  height: 100vh;
  max-height: 100%;
  overflow-x: hidden;
  perspective: 1px;
  perspective-origin: center top;
  transform-style: preserve-3d;

  header.is-home-page {
    width: 100vw;
    transform-origin: center top;
    transform: translateZ(-1px) scale(2);

    ul {
      list-style-type: none;
    }

    nav {
      z-index: 3;
      padding: 2rem calc((100vw - 1140px) / 2);

      @media (max-width: 1140px) {
        padding: 2rem;
      }
    }

    .slider-image {
      width: 100%;
      height: 100%;

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
        background: rgba(0, 0, 0, 0.7);
        transition: 0.4s ease-out;
        z-index: 2;
      }

      @media (max-width: 768px) {
        &:before {
          background: rgba(0, 0, 0, 0.85);
        }
      }
    }

    .slider-content {
      position: absolute;
      top: 0;
      z-index: 3;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      color: #fff;
      padding: 2rem calc((100vw - 1140px) / 2) 20rem;

      @media (max-width: 1140px) {
        padding: 2rem;
        padding-bottom: 15rem;
      }

      h1 {
        font-size: 7rem;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
          font-size: 4rem;
        }
      }

      p {
        font-size: 1.6rem;
        max-width: 600px;
        line-height: 1.58;
        width: 100%;
        font-family: "Pangolin", cursive;

        @media (max-width: 768px) {
          font-size: 1.7rem;
          max-width: 500px;
        }
      }

      a {
        font-size: 2rem;
        margin-top: 2rem;
        color: ${(props) => props.theme.primaryColor};
        width: fit-content;
        display: inline-block;
        border-bottom: 3px solid transparent;

        &:hover {
          border-bottom: 3px solid ${(props) => props.theme.primaryColor};
        }
      }
    }
  }

  main {
    min-height: 100vh;
    background: white;
    transform: translateZ(0);
    /* height: 100vh; */
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
      height: auto;
    }

    .about-section {
      max-width: 850px;
      margin: 0 auto;
      padding: 2rem;
      flex: 0 1 auto;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h3 {
        font-size: 2.8rem;
        max-width: 250px;
        width: 100%;
        margin-right: 2rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.6;
        width: calc(100% - 300px);
      }

      @media (max-width: 650px) {
        height: auto;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;

        h3 {
          width: 100%;
          margin-right: 0;
          margin-bottom: 0.5rem;
        }

        p {
          width: 100%;
        }
      }
    }

    .blog-section {
      display: flex;
      flex: 1 1 auto;

      & > div {
        background: #f2f6f5;
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem 2rem;

        &.recent-posts {
          background: rgba(244, 244, 244, 0.24);

          ul {
            max-width: 300px;
            width: 100%;
            text-align: left;
            list-style-type: none;

            li {
              margin-bottom: 3rem;
              list-style-type: none;

              h3 {
                font-size: 2.4rem;
                margin-bottom: 0.5rem;
              }

              p {
                font-size: 1.55rem;
                line-height: 1.3;
              }

              a {
                font-size: 1.4rem;
                margin-top: 1rem;
                display: inline-block;
                color: ${(props) => props.theme.primaryColor};
                width: fit-content;
                display: inline-block;
                border-bottom: 3px solid transparent;

                &:hover {
                  border-bottom: 3px solid
                    ${(props) => props.theme.primaryColor};
                }
              }
            }
          }
        }

        &.statistics {
          & > div {
            max-width: 450px;
            width: 100%;
            text-align: left;
          }

          .stats {
            font-size: 7rem;
            letter-spacing: -5px;
            font-family: ${(props) => props.theme.headingFont};
          }

          .stats-summary {
            font-size: 1.7rem;
            line-height: 1.5;
          }

          a {
            color: ${(props) => props.theme.primaryColor};
            margin-top: 2rem;
            font-size: 1.7rem;
            width: fit-content;
            display: inline-block;
            border-bottom: 3px solid transparent;

            &:hover {
              border-bottom: 3px solid ${(props) => props.theme.primaryColor};
            }
          }
        }
      }

      @media (max-width: 650px) {
        flex-direction: column;

        & > div {
          width: 100%;

          &.statistics {
            padding: 3rem 2rem 4.5rem;

            & > div {
              max-width: 300px;
              width: 100%;
              text-align: center;

              .stats {
                font-size: 6rem;
                letter-spacing: -5px;
              }
            }
          }
        }
      }

      @media (max-width: 400px) {
        & > div {
          &.statistics {
            .stats,
            .stats-summary {
              text-align: left;
            }
          }
        }
      }
    }
  }
`;
