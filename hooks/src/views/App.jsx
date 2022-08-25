import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import Store from "../data/Store"

import DataContext, { data } from "../data/DataContext"
import { useState } from "react";

const App = (props) => {

  const [state, setState] = useState(data)

  return (
    <Store>
        <DataContext.Provider value={{state, setState}}> {/*Dentro das chaves internas há um objeto Javascript*/}
          <div className="App">
            <Router>
              <Menu />
              <Content />
            </Router>
          </div>
        </DataContext.Provider>
    </Store>
  );
};

export default App;
