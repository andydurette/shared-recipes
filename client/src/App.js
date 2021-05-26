import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './features/HomePage/HomePage';
import LoginPage from './features/LoginPage/LoginPage';
import MyRecipesPage from './features/MyRecipesPage/MyRecipesPage';
import NavBar from './features/NavBar/NavBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.js'
import "./GlobalStyles.css";
import { myContext } from './Context';


function App() {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          {
            userObject ? null : (
              <Route path='/login' component={LoginPage} />
            )
          }
          <PrivateRoute path="/myRecipes" component={MyRecipesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
