import { createGlobalStyle } from "styled-components";

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
  src: url('../../assets/AvenirNext-Regular-08.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: AvenirSemi;
  src: url('../../assets/fonts/AvenirNext-DemiBold-03.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: AvenirBold;
  src: url('../../assets/fonts/AvenirNext-Bold-01.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: fallback;
}
`;

export default StyleProvider;
