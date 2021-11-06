import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
      height: 100vh;
      min-height: 100vh;
      margin: 0;
    }

    body {
      display: flex;
      flex-direction: column;
         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
`;

export default GlobalStyles;
