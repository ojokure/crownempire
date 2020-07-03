import React from "react";
// import { connect } from "react-redux";
import Header from "../components/Website/Header";

const Contact = () => {
  return (
    <>
      <Header height="70vh" />
    </>
  );
};

export default Contact;

// const StyledContainer = styled.main`
//   padding: 2rem;
//   min-height: 100vh;

//   form {
//     max-width: ${(props) => props.theme.mediumMaxWidth};
//     margin: 4rem auto 0;

//     label {
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//       margin-bottom: 1.3rem;

//       & > span.sr {
//         height: 0;
//         width: 0;
//         visibility: hidden;
//       }

//       input {
//         outline: none;
//         border: none;
//         font-size: 40px;
//         background: transparent;

//         &::-webkit-input-placeholder {
//           /* Chrome/Opera/Safari */
//           font-size: 40px;
//           color: ${(props) => props.theme.primaryGrey};
//         }
//         &::-moz-placeholder {
//           /* Firefox 19+ */
//           font-size: 40px;
//           color: ${(props) => props.theme.primaryGrey};
//         }
//         &:-ms-input-placeholder {
//           /* IE 10+ */
//           font-size: 40px;
//           color: ${(props) => props.theme.primaryGrey};
//         }
//         &:-moz-placeholder {
//           /* Firefox 18- */
//           font-size: 40px;
//           color: ${(props) => props.theme.primaryGrey};
//         }
//       }

//       textarea {
//         outline: none;
//         border: none;
//         resize: none;
//         font-size: 17px;
//         background: transparent;
//         margin-left: 5px;
//         line-height: 1.58;

//         &::-webkit-input-placeholder {
//           /* Chrome/Opera/Safari */
//           font-size: 17px;
//         }
//         &::-moz-placeholder {
//           /* Firefox 19+ */
//           font-size: 17px;
//         }
//         &:-ms-input-placeholder {
//           /* IE 10+ */
//           font-size: 17px;
//         }
//         &:-moz-placeholder {
//           /* Firefox 18- */
//           font-size: 17px;
//         }
//       }
//     }

//     button.submit-btn {
//       outline: 0;
//       background: ${(props) => props.theme.primaryDarkGrey};
//       border: none;
//       color: ${(props) => props.theme.white};
//       font-weight: 700;
//       text-align: center;
//       border-radius: 5px;
//       box-shadow: 0 0 0 1px transparent inset,
//         0 0 0 0 rgba(34, 36, 38, 0.15) inset;
//       user-select: none;
//       transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
//         box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
//       -webkit-tap-highlight-color: transparent;
//       padding: 0.5rem 2rem;
//       min-height: 40px;
//       min-width: 150px;
//       font-size: 1.5rem;
//       margin-top: 2rem;

//       &.is-active {
//         background-color: ${(props) => props.theme.primaryColor};
//       }

//       &:hover {
//         background-color: ${(props) => props.theme.primaryColor};
//         background-image: none;
//         -webkit-box-shadow: 0 0 0 1px transparent inset,
//           0 0 0 0 rgba(34, 36, 38, 0.15) inset;
//         box-shadow: 0 0 0 1px transparent inset,
//           0 0 0 0 rgba(34, 36, 38, 0.15) inset;
//         color: rgba(255, 255, 255, 0.8);
//       }
//     }
//   }
// `;
