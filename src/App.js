import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from "./components/Main";
import Profile from "./components/Profile";
import './index.css';
import GlobalProvider from "./components/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/profile' exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
