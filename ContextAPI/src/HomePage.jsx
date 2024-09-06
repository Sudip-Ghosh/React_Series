import React, { useContext } from 'react';
import ContextCreate from './ItemContext.jsx';

const HomePage = () => {
  const ItemName = useContext(ContextCreate);

  return <h1>wlcm to {ItemName} Homepage</h1>;
};

export default HomePage;
