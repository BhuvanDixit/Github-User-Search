import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './layouts/Navbar/Navbar.jsx';
import Routers from './routeConfig.jsx';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <div style={{ width: 1000, margin: '0 auto' }}>
          <Routers />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
