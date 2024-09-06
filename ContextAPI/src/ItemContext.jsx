import React, { createContext } from 'react';

const ContextCreate = createContext();
export const ItemContext = ({ children }) => {
  const ItemName = "Fruits";
  return (
    <ContextCreate.Provider value={ItemName}>
      {children}
    </ContextCreate.Provider>
  );
};

export default ContextCreate;
