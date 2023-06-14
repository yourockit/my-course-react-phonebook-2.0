import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store, persistor } from 'redux/srore';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/my-course-react-hw-08-phonebook">
          <ScopedCssBaseline>
            <App />
          </ScopedCssBaseline>
        </BrowserRouter>
      </PersistGate>
    </Provider>{' '}
  </React.StrictMode>
);
