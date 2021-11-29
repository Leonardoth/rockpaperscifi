import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
import theme from './styles/themes/defaultTheme';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
