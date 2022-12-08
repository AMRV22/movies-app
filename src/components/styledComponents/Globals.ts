import { createGlobalStyle } from "styled-components";
import AvenirBold from "./../../assets/fonts/AvenirNext-Bold-01.ttf";
import AvenirSemi from "./../../assets/fonts/AvenirNext-DemiBold-03.ttf";
import AvenirRegular from "./../../assets/fonts/AvenirNext-Regular-08.ttf";

const StyleProvider = createGlobalStyle`
html,
body {
  scroll-behavior: smooth;
}
::-moz-selection { /* Code for Firefox */
  color: white;
  background: #ff4040;
}

::selection {
  color: white;
  background: #ff4040;
}
@font-face {
  font-family: AvenirRegular;
  src: url(${AvenirRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: AvenirSemi;
  src: url(${AvenirSemi}) format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: AvenirBold;
  src: url(${AvenirBold}) format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: fallback;
}
`;

export default StyleProvider;
