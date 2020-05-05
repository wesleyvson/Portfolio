import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CV } from './components/CV';
import { OverMij } from './components/OverMij';
import { Projecten } from './components/Projecten';
import { Contact } from './components/Contact';
import { Battleport } from './components/Battleport';

import { BrowserRouter as Router, Switch} from 'react-router-dom'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/overmij' component={OverMij} />
          <Route path='/projecten' component={Projecten} />
          <Route path='/contact' component={Contact} />
          <Route path='/project/battleport' component={Battleport} />
        </Switch>
      </Layout>
    );
  }
}
