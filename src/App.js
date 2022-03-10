import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeProvider from './context/RecipeProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Done from './pages/Done';
import Favorites from './pages/Favorites';
import Explorer from './pages/Explorer';
import ExplorerTypes from './pages/ExplorerTypes';
import ExplorerIngredients from './pages/ExplorerIngredients';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <RecipeProvider>
        <span>Hello Word!</span>
        <Switch>
          <Route exact path="/" render={ (props) => <Login { ...props } /> } />
          <Route exact path="/foods" component={ Home } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ Done } />
          <Route exact path="/favorite-recipes" component={ Favorites } />
          <Route exact path="/explore" render={ (props) => <Explorer { ...props } /> } />
          <Route
            exact
            path="/explore/:foodsAndDrinks"
            render={ (props) => <ExplorerTypes { ...props } /> }
          />
          <Route
            exact
            path="/explore/:foodsAndDrinks/ingredients"
            render={ (props) => <ExplorerIngredients { ...props } /> }
          />
        </Switch>
      </RecipeProvider>
    </div>
  );
}

export default App;
