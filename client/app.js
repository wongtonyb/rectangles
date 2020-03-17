import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Canvas } from "./components";

const App = () => {
  return (
    <Router>
      <Home />
      <Canvas />
    </Router>
  );
};

export default App;
