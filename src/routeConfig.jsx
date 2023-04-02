import { Route, Routes } from 'react-router-dom';
import SearchBoxContainer from './containers/SearchBoxContainer';
import React from 'react';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchBoxContainer />} />
    </Routes>
  );
};

export default Routers;
