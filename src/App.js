import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
import theme from './styles/themes/defaultTheme';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

// Use local storage
import useLocalStorage from './utils/useLocalStorage';

function App() {
  const [score, setScore] = useLocalStorage('score', 0);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header score={score} />
      <Main score={score} setScore={setScore} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
