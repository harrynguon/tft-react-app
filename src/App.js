import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import Home from './components/home/Home';
import ChampionInfo from './components/home/ChampionInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/champion/:champID" component={ChampionInfo} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
