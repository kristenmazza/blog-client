import './App.css';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Content from './components/Content';

const theme = createTheme({
  typography: { fontFamily: 'Inter' },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Content />
      </Box>
    </ThemeProvider>
  );
}

export default App;
