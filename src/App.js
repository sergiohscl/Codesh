import React from "react";
import Router from "./routers/Router";
import { GlobalStyle } from "./global/GlobalStyle";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router/>
      <GlobalStyle/>            
    </GlobalState>
  );
};
export default App;
