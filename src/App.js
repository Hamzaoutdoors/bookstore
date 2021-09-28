import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavbarComponent from './components/Navbar';
import FormComponent from './components/Form';
import './App.css';

const App = () => (
  <>
    <Router>
      <NavbarComponent />
      <div className="app">
        <div className="app-container">
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route exact path="/">
              <Books />
              <FormComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </>
);

export default App;
