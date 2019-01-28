import React, { Component } from 'react';
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={AboutUs}/>
              <Route path="/contacts" exact component={Contacts}/>
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
