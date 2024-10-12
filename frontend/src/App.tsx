import React from 'react'
import './App.css';
import Sidebar from './Sidebar.tsx';
import Dashboard from './Dashboard.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2">
        <div className="app">
          <Sidebar />
          <Dashboard />
        </div>
      </Typography>
    </ThemeProvider>
  );
}

export default App;