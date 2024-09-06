import React from 'react';
import {ItemContext} from './ItemContext.jsx';
import HomePage from './HomePage.jsx';

function App() {
  return (
    <ItemContext>
      <HomePage />
    </ItemContext>
  );
}

export default App;
