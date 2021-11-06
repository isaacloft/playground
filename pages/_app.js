import { ThemeProvider } from 'styled-components';
import { StyledContainer } from '../styles/components/Container.styled';
import { THEME } from '../styles/variables';
import StyledHeader from '../libs/ui-components/Header';
import StyledFooter from '../libs/ui-components/Footer';
import GlobalStyles from '../styles/components/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <StyledHeader />
      <StyledContainer>
        <Component {...pageProps} />
      </StyledContainer>
      <StyledFooter />
    </ThemeProvider>
  );
}

export default MyApp;
