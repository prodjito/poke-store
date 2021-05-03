import React from 'react'
import './App.css'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Item from './Item'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import welcomeImage from './welcome.jpg'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={Item}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome!</h1>
    <img src={welcomeImage} alt='' style={{width: 1100, height: 600}}/>
  </div>
);

export default App