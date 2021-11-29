import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer/Footer';
import theme from './styles/themes/defaultTheme';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [score, setScore] = useState(0);
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
