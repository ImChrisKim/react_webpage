import React from "react";

const main = ({ children }) => {
  return (
    <div>
      <main id="main" role="main"></main>
      {children}
    </div>
  );
};

export default main;
