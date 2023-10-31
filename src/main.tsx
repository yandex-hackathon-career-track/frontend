import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    fontFamily: ['Yandex Sans Text', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
