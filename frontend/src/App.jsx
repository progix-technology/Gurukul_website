import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';

export function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
