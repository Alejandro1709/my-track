import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoursesProvider from './context/coursesContext';
import ModalProvider from './context/modalContext';
import { TermsProvider } from './context/termsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <TermsProvider>
        <CoursesProvider>
          <App />
        </CoursesProvider>
      </TermsProvider>
    </ModalProvider>
  </React.StrictMode>
);
