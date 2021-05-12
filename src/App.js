import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import Button from './Button';
import Navbar from './Navbar';

const theme = {
  colors: {
    primary: '#00D2FF',
    secondary: '#c3c4c7',
    success: '#00ba37',
    danger: '#e65054',
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    font-family: 'Verdana';
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar variant="danger"/>
      <Wrapper>
        <Button rounded>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default App;
