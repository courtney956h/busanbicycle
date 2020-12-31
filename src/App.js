import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Road from './routes/Road';
import Business from './routes/Business';
import Search from './routes/Search';
import Purchase from './routes/Purchase';
import Notice from './routes/Notice';
import Safety from './routes/Safety';
import Login from './routes/Login';
import Join from './routes/Join';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/road" component={Road} />
        <Route path="/business" component={Business} />
        <Route path="/search" component={Search} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/notice" component={Notice} />
        <Route path="/safety" component={Safety} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join}/>
      </HashRouter>
    </div>
  );
};

export default App;