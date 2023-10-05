import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const theme = createTheme({
  typography: { fontFamily: 'Inter' },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <CssBaseline />
      <Header />
      <Outlet />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
