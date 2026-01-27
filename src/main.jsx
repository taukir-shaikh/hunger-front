
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import GlobalToast from './components/common/GlobalToast';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AppRoutes from './AppRoutes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ErrorBoundary>
          <GlobalToast />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="*"
                element={
                  <MainLayout>
                    <AppRoutes />
                  </MainLayout>
                }
              />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
